# Breathe ESG Assignment

A full-stack ESG data ingestion and analyst workflow platform built using Django and React.

---

## Features

- CSV Upload
- ESG Record Dashboard
- Approve / Reject Workflow
- REST APIs
- Real-time Frontend Updates
- Status Badges
- SQLite Database Integration

---

## Tech Stack

### Frontend
- React
- Axios
- Vite

### Backend
- Django
- Django REST Framework
- Pandas

### Database
- SQLite

---

## Project Workflow

CSV Upload
→ Django API
→ Pandas Processing
→ SQLite Database
→ React Dashboard
→ Approve / Reject Workflow

---

## Backend Setup

```bash
cd backend

venv\Scripts\activate

python manage.py runserver
```

Backend runs at:

```bash
http://127.0.0.1:8000/
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at:

```bash
http://localhost:5173/
```

---

## API Endpoints

### Get Records

```bash
GET /api/records/
```

### Upload CSV

```bash
POST /api/upload/
```

### Update Record Status

```bash
PATCH /api/update/<id>/
```

---

## Sample CSV Format

```csv
activity_type,quantity,unit,scope
Diesel Usage,500,liters,Scope 1
Electricity Consumption,1200,kWh,Scope 2
Flight Travel,4500,km,Scope 3
```

---

## Features Implemented

- ESG CSV ingestion
- Data normalization
- Approval workflow
- Frontend/backend integration
- Dynamic dashboard updates

---

## Author

Kadiam raju
