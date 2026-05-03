from fastapi import APIRouter, HTTPException, Depends
from database import get_db
from auth import verify_password, create_access_token, verify_token, hash_password
from models import LoginRequest

router = APIRouter()

@router.post("/login")
def login(request: LoginRequest):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM admins WHERE username = ?", (request.username,))
    admin = cursor.fetchone()
    conn.close()

    if not admin or not verify_password(request.password, admin["password"]):
        raise HTTPException(status_code=401, detail="Wrong username or password")

    token = create_access_token({"sub": request.username})
    return {"access_token": token, "token_type": "bearer"}

@router.get("/dashboard")
def dashboard(username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) as total FROM leads")
    total_leads = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) as total FROM leads WHERE status = 'new'")
    new_leads = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) as total FROM portfolio_images")
    total_portfolio = cursor.fetchone()["total"]

    cursor.execute("SELECT COUNT(*) as total FROM notifications WHERE is_read = 0")
    unread_notifications = cursor.fetchone()["total"]

    conn.close()

    return {
        "welcome": f"Welcome {username}!",
        "stats": {
            "total_leads": total_leads,
            "new_leads": new_leads,
            "total_portfolio": total_portfolio,
            "unread_notifications": unread_notifications
        }
    }

@router.put("/change-password")
def change_password(old_password: str, new_password: str, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM admins WHERE username = ?", (username,))
    admin = cursor.fetchone()

    if not verify_password(old_password, admin["password"]):
        raise HTTPException(status_code=400, detail="Old password is wrong")

    hashed = hash_password(new_password)
    cursor.execute("UPDATE admins SET password = ? WHERE username = ?", (hashed, username))
    conn.commit()
    conn.close()

    return {"message": "Password changed successfully!"}