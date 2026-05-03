from fastapi import APIRouter, Depends, HTTPException
from database import get_db
from auth import verify_token
from models import LeadCreate, LeadUpdate

router = APIRouter()

@router.post("/submit")
def submit_lead(lead: LeadCreate):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        """INSERT INTO leads 
        (full_name, email, website_url, phone, company_name, company_email, source) 
        VALUES (?, ?, ?, ?, ?, ?, ?)""",
        (lead.full_name, lead.email, lead.website_url, 
         lead.phone, lead.company_name, lead.company_email, lead.source)
    )
    conn.commit()

    # Auto notification
    cursor.execute(
        "INSERT INTO notifications (title, message, type) VALUES (?, ?, ?)",
        ("New Lead!", f"New lead from {lead.full_name} - {lead.email}", "lead")
    )
    conn.commit()
    conn.close()

    return {"message": "Thank you! We will contact you soon."}

@router.get("/all")
def get_all_leads(username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM leads ORDER BY created_at DESC")
    leads = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return leads

@router.get("/{lead_id}")
def get_lead(lead_id: int, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM leads WHERE id = ?", (lead_id,))
    lead = cursor.fetchone()
    conn.close()
    if not lead:
        raise HTTPException(status_code=404, detail="Lead not found")
    return dict(lead)

@router.put("/{lead_id}/status")
def update_lead_status(lead_id: int, update: LeadUpdate, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("UPDATE leads SET status = ? WHERE id = ?", (update.status, lead_id))
    conn.commit()
    conn.close()
    return {"message": "Status updated!"}

@router.delete("/{lead_id}")
def delete_lead(lead_id: int, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM leads WHERE id = ?", (lead_id,))
    conn.commit()
    conn.close()
    return {"message": "Lead deleted!"}