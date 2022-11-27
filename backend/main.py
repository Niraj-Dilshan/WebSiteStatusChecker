from fastapi import FastAPI, HTTPException

from model import Status

from database import (
    fetch_one_status,
    fetch_all_statuses,
    create_status,
    update_status,
    remove_status,
)

# an HTTP-specific exception class  to generate exception information

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Welcome For INFINITE": "Status"}

@app.get("/api/status")
async def get_status():
    response = await fetch_all_statuses()
    return response

@app.get("/api/status/{name}", response_model=Status)
async def get_status_by_name(name):
    response = await fetch_one_status(name)
    if response:
        return response
    raise HTTPException(404, f"There is no status with the name {name}")

@app.post("/api/status/", response_model=Status)
async def post_status(status: Status):
    response = await create_status(status.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/status/{name}/", response_model=Status)
async def put_status(name: str, status: str):
    response = await update_status(name, status)
    if response:
        return response
    raise HTTPException(404, f"There is no status with the name {name}")

@app.delete("/api/status/{name}")
async def delete_status(name):
    response = await remove_status(name)
    if response:
        return "Successfully deleted status"
    raise HTTPException(404, f"There is no status with the name {name}")