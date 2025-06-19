# 📊 Stock/ETF Dashboard

A sleek, full-stack dashboard that fetches and visualizes 30-day stock and ETF price data — built with **FastAPI** on the backend and **React.js** on the frontend. Designed to look and feel like a real financial app.

---

## 💡 Why I Built This

I built this project to challenge myself with a real-world full-stack application — from setting up APIs to building a responsive UI. As someone interested in both **software development** and **financial markets**, this was the perfect way to blend both interests and learn hands-on.

It gave me experience with:
- Building a Python API from scratch
- Frontend/backend integration
- Handling and displaying real-time financial data
- Managing local storage (watchlists, theming)
- Debugging and testing across layers

---

## 🛠️ Tech Stack

| Layer     | Tools Used                     |
|-----------|--------------------------------|
| Frontend  | React.js, Axios, Chart.js      |
| Backend   | FastAPI, yFinance              |
| Styling   | Vanilla CSS (dark/light mode)  |
| Data      | Yahoo Finance API via yFinance |
| State     | React useState + localStorage  |

---

## 🚀 Features

- 🔎 Search for any stock or ETF symbol (e.g., `AAPL`, `VOO`, `TSLA`)
- 📉 Interactive 30-day closing price chart
- ⭐ Add/remove stocks from your local **Watchlist**
- 📈 Displays real-time price change and trend summary
- 🌓 Toggle between **Dark Mode** and **Light Mode**
- 📊 Dashboard UI inspired by financial tools

---

## 🖥️ How to Run Locally

### 🧠 Backend (FastAPI):
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn yfinance
uvicorn main:app --reload
```

### Backend:
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn yfinance
uvicorn main:app --reload
```
### Photos of dashboard: 
<img width="1000" alt="Screenshot 2025-06-19 at 4 15 24 PM" src="https://github.com/user-attachments/assets/3e4145ee-43e9-495d-8d8e-3c5c0e4541ad" />
<img width="1000" alt="Screenshot 2025-06-19 at 4 15 51 PM" src="https://github.com/user-attachments/assets/a35edbc3-aea6-434f-9de3-befbb90dafbc" />
<img width="1000" alt="Screenshot 2025-06-19 at 4 16 06 PM" src="https://github.com/user-attachments/assets/6a77bcad-e2bd-4234-a133-d31cdc24a7a4" />





