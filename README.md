# Stock/ETF Dashboard — Full-Stack Financial Data Visualization

A sleek, full-stack dashboard that fetches and visualizes 30-day stock and ETF price data — built with **FastAPI** on the backend and **React.js** on the frontend. Designed to simulate a professional financial application with interactive charts, watchlists, and theming.

---

## Project Overview

This project demonstrates my ability to build a real-world, end-to-end software solution combining backend API development, frontend UI, and data integration. It reflects my passion for **software engineering** and **financial technology**, showcasing skills critical for a software engineering internship:

- Developing RESTful APIs with Python and FastAPI  
- Integrating third-party financial data APIs (Yahoo Finance)  
- Creating responsive and interactive React.js frontends  
- Managing client-side state and persistence (React state + localStorage)  
- Implementing user-friendly features like watchlists and dark mode  
- Debugging and testing across frontend and backend layers  

---

## Technologies & Tools

| Layer     | Tools & Libraries               |
|-----------|--------------------------------|
| Frontend  | React.js, Axios, Chart.js      |
| Backend   | FastAPI, Python, yFinance API  |
| Styling   | Vanilla CSS (Dark/Light Mode)  |
| Data      | Yahoo Finance API via yFinance |
| State     | React useState + localStorage  |

---

## Key Features

- Search for any stock or ETF symbol (e.g., `AAPL`, `VOO`, `TSLA`)  
- Interactive 30-day closing price chart with dynamic updates  
- Add or remove stocks from a persistent **Watchlist** stored locally  
- Real-time price change and trend summary display  
- Toggle between **Dark Mode** and **Light Mode** for better UX  
- Clean, professional dashboard UI inspired by industry financial tools  

---

## Learning Outcomes & Challenges

- Built a Python API backend from scratch using FastAPI  
- Integrated live financial data via yFinance and handled API data consistency  
- Developed a responsive React frontend with dynamic charting and state management  
- Implemented persistent local storage for user preferences and watchlists  
- Improved debugging skills across asynchronous frontend/backend communication  
- Gained hands-on experience in full-stack development workflows  

---

## How to Run Locally

### Backend Setup (FastAPI):
```
cd backend
python3 -m venv venv
source venv/bin/activate
pip install fastapi uvicorn yfinance
uvicorn main:app --reload
```

### Frontend Setup (React):
```
cd frontend
npm install
npm start
```

---

## Screenshots

<img width="1000" alt="Dashboard Dark Mode" src="https://github.com/user-attachments/assets/3e4145ee-43e9-495d-8d8e-3c5c0e4541ad" />

<img width="1000" alt="Dashboard Light Mode" src="https://github.com/user-attachments/assets/a35edbc3-aea6-434f-9de3-befbb90dafbc" />

<img width="1000" alt="Interactive Chart View" src="https://github.com/user-attachments/assets/6a77bcad-e2bd-4234-a133-d31cdc24a7a4" />

---

## Challenges

- **Managing Complex State:** Handling multiple states such as search input, watchlist, chart data, and theme toggling required careful use of React’s `useState` and synchronization with `localStorage` for persistence.

- **Asynchronous Data Fetching:** Fetching data from the Yahoo Finance API asynchronously while keeping the UI responsive and avoiding race conditions was a key challenge.

- **Implementing Interactive Charts:** Integrating Chart.js to display dynamic, interactive 30-day price charts involved understanding chart configuration and efficiently updating data on user input.

- **Error Handling and User Feedback:** Providing meaningful feedback for invalid stock symbols or API errors to maintain a good user experience.

- **Performance Optimization:** Minimizing unnecessary re-renders and optimizing component updates to keep the app fast and smooth during frequent data updates.

- **Cross-Browser Compatibility:** Ensuring consistent behavior and appearance across major browsers like Chrome, Firefox, and Safari.




