import schedule
import time
import requests
from http import HTTPStatus

import motor.motor_asyncio
from model import Status
import os
from dotenv import load_dotenv
load_dotenv()
DB_URL = os.getenv("DB_URL")

client = motor.motor_asyncio.AsyncIOMotorClient(DB_URL)

database = client.StatusList
collection = database.status
 
# get the status of a website
def get_website_status(url):
    # handle connection errors
    request_response = requests.head(url)
    status_code = request_response.status_code
    return status_code
 
# interpret an HTTP response code into a status
def get_status(code):
    if code == HTTPStatus.OK:
        return 'UP'
    return 'Down'
 
# check status of a list of websites
def check_status_urls(urls,name):
    for url in urls:
        # get the Name of the website
        i=urls.index(url)
        sname = name[i]
        # get the status for the website
        code = get_website_status(url)
        # interpret the status
        status = get_status(code)
        # report status
        collection.update_one({"name": sname}, {"$set": {"status": status}})

#get websites from api
def get_websites():
    # get the websites from the API
    response = requests.get('http://localhost:8000/api/status')
    # extract the names
    name = [website['name'] for website in response.json()]
    #extract the urls
    url = [website['url'] for website in response.json()]
    return url , name

# schedule the job to run every 5 minutes
schedule.every(5).minutes.do(check_status_urls,get_websites()[0],get_websites()[1])

while True:
    schedule.run_pending()
    time.sleep(1)