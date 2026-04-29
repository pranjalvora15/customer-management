# Customer Management Dashboard

A full-stack web app to manage customers — add, view, and delete customer records.

## Live Demo

- **Frontend:** https://customer-management-one-sigma.vercel.app
- **Backend API:** https://customer-management-2v37.onrender.com

## Tech Stack

**Frontend**
- React (Create React App)
- Axios

**Backend**
- Node.js + Express
- UUID (in-memory storage)
- CORS

## Features

- Add customers with name, email, and phone number
- Input validation (all fields required, phone must be 10 digits starting with 7, 8, or 9)
- Delete customers with per-row loading state
- Alternating row colors and sticky table header
- Loading spinners for fetch, add, and delete operations
- Responsive design

## Project Structure

```
customer-management/
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env          # not committed
└── frontend/
    ├── src/
    │   ├── App.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   ├── CustomerForm.jsx
    │   │   └── CustomerTable.jsx
    │   └── index.js
    ├── package.json
    └── .env          # not committed
```

## Local Setup

### Backend

```bash
cd backend
npm install
node server.js
```

Server runs on `http://localhost:5000`

### Frontend

Create `frontend/.env`:
```
REACT_APP_API_URL=http://localhost:5000
FAST_REFRESH=false
```

Then:
```bash
cd frontend
npm install
npm start
```

App runs on `http://localhost:3000`

## Deployment

- **Backend** hosted on [Render](https://render.com)
- **Frontend** hosted on [Vercel](https://vercel.com) (Root Directory set to `frontend`)

Set `REACT_APP_API_URL` to your Render backend URL in Vercel → Settings → Environment Variables.
