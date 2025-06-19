from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# Enable CORS for frontend-backend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, change to your frontend's domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stock/{symbol}")
def get_stock_data(symbol: str):
    # Ensure symbol is a valid string
    if not isinstance(symbol, str) or not symbol.strip():
        return {"error": "Invalid symbol"}

    try:
        ticker = yf.Ticker(symbol)
        df = ticker.history(period="30d")

        if df.empty:
            return {"error": "No data found. Symbol may be delisted or invalid."}

        dates = df.index.strftime("%Y-%m-%d").tolist()
        closes = df["Close"].tolist()

        return {
            "symbol": symbol.upper(),
            "dates": dates,
            "closing_prices": closes
        }
    except Exception as e:
        return {"error": f"Failed to fetch data: {str(e)}"}
