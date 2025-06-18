from fastapi import FastAPI
import yfinance as yf

app = FastAPI()

@app.get("/stock/{symbol}")
def get_stock_data(symbol: str):
    ticker = yf.Ticker(symbol)
    df = ticker.history(period="30d") 

    dates = df.index.strftime("%Y-%m-%d").tolist()
    closes = df['Close'].tolist()

    return {
        "symbol": symbol.upper(),
        "dates": dates,
        "closing_prices": closes
    }
