from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from database import init_db
from auth import create_first_admin
from routes import admin, portfolio, leads, notifications
import os

app = FastAPI(title="Portfolio Admin Panel", version="1.0.0")

# CORS - React er sathe connect korte
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Uploads folder static serve
os.makedirs("uploads", exist_ok=True)
app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")

# Routes
app.include_router(admin.router, prefix="/admin", tags=["Admin"])
app.include_router(portfolio.router, prefix="/portfolio", tags=["Portfolio"])
app.include_router(leads.router, prefix="/leads", tags=["Leads"])
app.include_router(notifications.router, prefix="/notifications", tags=["Notifications"])

@app.on_event("startup")
def startup():
    init_db()
    create_first_admin()

@app.get("/")
def root():
    return {"message": "Portfolio Admin API is running! 🚀"}