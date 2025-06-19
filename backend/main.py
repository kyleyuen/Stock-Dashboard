from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import yfinance as yf

app = FastAPI()

# Enable CORS for frontend-backend communication. Since frontend is served on a different port, we need to allow all origins.
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  #In production, specify the frontend URL instead of "*" 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
) 

@app.get("/stock/{symbol}") #FastAPI route to fetch stock data from yfinance
def get_stock_data(symbol: str): #a function to fect the data given a stock symbol
    if not isinstance(symbol, str) or not symbol.strip(): 
        return {"error": "Invalid symbol"} #Outputs error value if the symbol is not a string or is empty

    try:
        ticker = yf.Ticker(symbol)  #Fetches the ticker data using yfinance to 
        df = ticker.history(period="30d") #Fetchest the last 30 days of stock data

        if df.empty:
            return {"error": "No data found. Symbol may be delisted or invalid."} #Outputs error value if the data is empty

        #Fetches data to then be formated as a chart through App.js 
        dates = df.index.strftime("%Y-%m-%d").tolist() #Formats the data to YYYY-MM-DD format and add it to a python list
        closes = df["Close"].tolist() #Adds the closes prices to a python list 

        return { #Returns all the stock data in a dictionary 
            "symbol": symbol.upper(),
            "dates": dates,
            "closing_prices": closes
        }
    except Exception as e:
        return {"error": f"Failed to fetch data: {str(e)}"} #Outputs error value if there is an exception while fetching the data
