# Backend Setup

## Create virtual environment
python -m venv venv

## Activate
### Windows
venv\Scripts\activate

### Mac/Linux
source venv/bin/activate

## Install dependencies
pip install -r requirements.txt

## Create project
django-admin startproject config .

## Run server
python manage.py runserver
