FARM Stack - FastAPI, React, and MongoDB
======================================
This is a template for a full-stack web application using FastAPI, React, and MongoDB. It is based on the [FARM Stack](https://farmstack.org/), which is a full-stack web application architecture that uses FastAPI, React, MongoDB, and Docker. This template is designed to be a starting point for building a full-stack web application. It is not intended to be a production-ready application. It is intended to be a starting point for building a production-ready application.

## open a terminal window

### First clone the repository
``` git clone https://github.com/Niraj-Dilshan/WebSiteStatusChecker.git ```

### Then change your working directory to the project file
    ``` cd WebSiteStatusChecker ```

### Then lets setup the backend first
``` cd backend ```

### In Ubuntu 

### install python virtual environment
``` sudo apt install python3-virtualenv ```

### Then create python virtual environment
``` virtualenv virtualenv_name ```

### After that activate environment
``` source virtualenv_name/bin/activate ```

### install dependencies
``` pip install -r requirements.txt ```

### In Windows

### Install python virtual environment
``` pip install virtualenv ```

### Then create python virtual environment
``` virtualenv virtualenv_name ```

### After that activate environment
``` virtualenv_name\Scripts\activate ```

### install dependencies
``` pip install -r requirements.txt ```

### After that add .env file to the /backend, make sure you add your mongo db connection link
``` MONGO_URI="mongodb+srv://username:password@cluster0.gwqfihf.mongodb.net/?retryWrites=true&w=majority" ```

### startup the FAST-API backend
``` uvicorn main:app --reload ```
  
---

## open another terminal window

### Then change your working directory to the project file
``` cd WebSiteStatusChecker ```

### Then go to backend folder
``` cd backend ```

### Run web site status checker script
``` python3 webcheck.py ```

---

## open another terminal window

### Then lets setup the frontend 
``` cd frontend ```

### if you dont have react installed
``` npm i ```

### then startup the frontend
``` npm start ```
