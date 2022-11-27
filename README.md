Web Site Status Checker Using FARM Stack<br>
(FastAPI, React, and MongoDB)
======================================

This project is built by FARM Stack to check the website status and whether it's up or not. Website status will check by a python program every 5 minutes and update the databse.

## open a terminal window

### First clone the repository
    git clone https://github.com/Niraj-Dilshan/WebSiteStatusChecker.git

### Then change your working directory to the project file
    cd WebSiteStatusChecker

### Then lets setup the backend first
    cd backend

### In Ubuntu 

### install python virtual environment
    sudo apt install python3-virtualenv

### Then create python virtual environment
    virtualenv virtualenv_name

### After that activate environment
    source virtualenv_name/bin/activate

### install dependencies
    pip install -r requirements.txt

### In Windows

### Install python virtual environment
    pip install virtualenv

### Then create python virtual environment
    virtualenv virtualenv_name

### After that activate environment
    virtualenv_name\Scripts\activate

### install dependencies
    pip install -r requirements.txt

### After that add .env file to the /backend, make sure you add your mongo db connection link
    MONGO_URI="mongodb+srv://username:password@cluster0.gwqfihf.mongodb.net/?retryWrites=true&w=majority"

### startup the FAST-API backend
    uvicorn main:app --reload
  
---

## open another terminal window

### Then change your working directory to the project file
    cd WebSiteStatusChecker

### Then go to backend folder
    cd backend

### Run web site status checker script
    python3 webcheck.py

---

## open another terminal window

### Then lets setup the frontend 
    cd frontend

### if you dont have react installed
    npm i

### then startup the frontend
    npm start
