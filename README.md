# Stock/ETF Dashboard

A full-stack project that fetches and displays 30-day stock/ETF price data using **FastAPI** (Python) on the backend and **React.js** on the frontend.

---

## Why I Built It

I wanted to learn how to build a full-stack app from scratch using tools that are actually used in the real world. This project combines two of my interests — coding and financial markets — and gave me hands-on experience working with APIs, data handling, and frontend/backend integration.

---

## Tech Stack

- **Frontend**: React.js, Axios
- **Backend**: FastAPI, yfinance
- **Data Source**: Yahoo Finance

---

## Features

- Search bar to enter stock/ETF symbols (e.g. `AAPL`, `VOO`)
- Retrieves the last 30 days of closing prices
- Displays symbol and recent price data (chart coming soon)

---

##  How to Run

### frontend:
```
cd stock-dashboard
npm install
npm start
```

### Backend:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn yfinance
uvicorn main:app --reload
```

