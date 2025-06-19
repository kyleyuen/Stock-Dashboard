from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# Enable CORS (Cross-Origin Resource Sharing) so frontend can access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/stock/{symbol}")
def get_stock_data(symbol: str):
    try:
        ticker = yf.Ticker(symbol)
        df = ticker.history(period="30d")

        # If no data is returned (invalid symbol or empty response)
        if df.empty:
            return {"error": "No data found for this symbol."}

        dates = df.index.strftime("%Y-%m-%d").tolist()
        closes = df["Close"].tolist()

        return {
            "symbol": symbol.upper(),
            "dates": dates,
            "closing_prices": closes
        }

    except Exception as e:
        return {"error": f"An error occurred: {str(e)}"}
