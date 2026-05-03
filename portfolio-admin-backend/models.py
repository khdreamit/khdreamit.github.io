from pydantic import BaseModel
from typing import Optional

class LoginRequest(BaseModel):
    username: str
    password: str

class LeadCreate(BaseModel):
    full_name: str
    email: str
    website_url: Optional[str] = None
    phone: str
    company_name: Optional[str] = None
    company_email: Optional[str] = None
    source: Optional[str] = "website"

class LeadUpdate(BaseModel):
    status: str

class PortfolioUpdate(BaseModel):
    title: Optional[str] = None
    category: Optional[str] = None