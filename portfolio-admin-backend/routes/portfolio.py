from fastapi import APIRouter, HTTPException, Depends, UploadFile, File, Form
from database import get_db
from auth import verify_token
import aiofiles
import os
import uuid

router = APIRouter()

UPLOAD_DIR = "uploads"

@router.post("/upload")
async def upload_image(
    category: str = Form(...),
    title: str = Form(None),
    file: UploadFile = File(...),
    username: str = Depends(verify_token)
):
    if not file.content_type.startswith("image/"):
        raise HTTPException(status_code=400, detail="Only image files allowed")

    ext = file.filename.split(".")[-1]
    filename = f"{uuid.uuid4()}.{ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    async with aiofiles.open(filepath, "wb") as f:
        content = await file.read()
        await f.write(content)

    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO portfolio_images (category, filename, filepath, title) VALUES (?, ?, ?, ?)",
        (category, filename, filepath, title)
    )
    conn.commit()
    conn.close()

    return {"message": "Image uploaded!", "filename": filename, "category": category}

@router.get("/all")
def get_all_images():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM portfolio_images ORDER BY uploaded_at DESC")
    images = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return images

@router.get("/category/{category}")
def get_by_category(category: str):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(
        "SELECT * FROM portfolio_images WHERE category = ? ORDER BY uploaded_at DESC",
        (category,)
    )
    images = [dict(row) for row in cursor.fetchall()]
    conn.close()
    return images

@router.delete("/{image_id}")
def delete_image(image_id: int, username: str = Depends(verify_token)):
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM portfolio_images WHERE id = ?", (image_id,))
    image = cursor.fetchone()

    if not image:
        raise HTTPException(status_code=404, detail="Image not found")

    if os.path.exists(image["filepath"]):
        os.remove(image["filepath"])

    cursor.execute("DELETE FROM portfolio_images WHERE id = ?", (image_id,))
    conn.commit()
    conn.close()

    return {"message": "Image deleted!"}