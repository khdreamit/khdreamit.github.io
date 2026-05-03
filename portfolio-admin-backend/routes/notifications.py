from fastapi import APIRouter, Depends
from database import get_db
from auth import verify_token

router = APIRouter()

@router.get("/all")
def get_notifications(username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM notifications ORDER BY created_at DESC")
    notifications = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return notifications

@router.put("/{notif_id}/read")
def mark_as_read(notif_id: int, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("UPDATE notifications SET is_read = 1 WHERE id = ?", (notif_id,))
    conn.commit()
    conn.close()
    return {"message": "Marked as read!"}

@router.put("/read-all")
def mark_all_read(username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("UPDATE notifications SET is_read = 1")
    conn.commit()
    conn.close()
    return {"message": "All marked as read!"}

@router.delete("/{notif_id}")
def delete_notification(notif_id: int, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM notifications WHERE id = ?", (notif_id,))
    conn.commit()
    conn.close()
    return {"message": "Notification deleted!"}