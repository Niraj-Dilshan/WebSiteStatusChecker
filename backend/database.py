import motor.motor_asyncio
from model import Status
import os
from dotenv import load_dotenv
load_dotenv()
DB_URL = os.getenv("DB_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(DB_URL)

database = client.StatusList
collection = database.status

async def fetch_one_status(name):
    document = await collection.find_one({"name": name})
    return document

async def fetch_all_statuses():
    statuses = []
    cursor = collection.find({})
    async for document in cursor:
        statuses.append(Status(**document))
    return statuses

async def create_status(status):
    document = status
    result = await collection.insert_one(document)
    return document


async def update_status(name, status):
    await collection.update_one({"name": name}, {"$set": {"status": status}})
    document = await collection.find_one({"name": name})
    return document

async def remove_status(name):
    await collection.delete_one({"name": name})
    return True