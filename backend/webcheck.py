import requests
from urllib.request import urlopen
from urllib.error import URLError
from urllib.error import HTTPError
from http import HTTPStatus
 
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
def check_status_urls(urls):
    for url in urls:
        # get the status for the website
        code = get_website_status(url)
        # interpret the status
        status = get_status(code)
        # report status
        print(f'{url:20s}\t{status:5s}\t{code}')

#get websites from api
def get_websites():
    # get the websites from the API
    response = requests.get('http://localhost:8000/api/status')
    # extract the urls
    url = [website['url'] for website in response.json()]
    print(url)
    return url

URL =  get_websites()

check_status_urls(URL)