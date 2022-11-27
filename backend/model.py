# Pydantic allows auto creation of JSON Schemas from models
from pydantic import BaseModel

class Status(BaseModel):
    name: str
    url: str
    status: str