from fastapi import FastAPI
import yfinance as yf

app = FastAPI() # Create an instance of FastAPI

@app.get("/stock/{symbol}") #when a GET request is made to /stock/{symbol}, FastAPI automatically calls the function bellow 
def get_stock_data(symbol: str): #Function to fetch the stock data and FastAPI automatically formats {symbol} as a string

    ticker = yf.Ticker(symbol) #Fetch the data using yfinance libary
    df = ticker.history(period="30d") #Fetch the last 30 days of stock data 

    dates = df.index.strftime("%Y-%m-%d").tolist()#Convert the index into list of string in the format of YYYY-MM-DD
    closes = df['Close'].tolist() #pulls the closing prices from the Data into the list 

    return { #return a dictionary with all the stock data requested above 
        "symbol": symbol.upper(),
        "dates": dates,
        "closing_prices": closes
    }
