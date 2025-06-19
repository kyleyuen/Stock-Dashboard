//Description: A simple stock dashboard application built with React, allowing users to search for stock data, view trends, and manage a watchlist with dark mode support.

//Import necessary libraries and components
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

//Main App component and setting defult states and symbols 
function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [watchlist, setWatchlist] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // Load watchlist from localStorage on initial render through your local JSON file 
  useEffect(() => {
    const storedWatchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
    setWatchlist(storedWatchlist);
  }, []);

  //function to handle the serach for stock data 
  const handleSearch = async (input = symbol) => {
    const inputSymbol = (typeof input === 'string' ? input : '').trim();
    if (!inputSymbol) { //If input is empty, set error message
      setError('Please enter a stock symbol.');
      return;
    }
    setLoading(true);
    try { //Fetches stock data from the API
      const res = await axios.get(`http://localhost:8000/stock/${inputSymbol}`); //Once data is fetched, it sets the stockData state with the response data
      setStockData(res.data); 
      setSymbol(inputSymbol);
      setError(null);
    } catch (err) {
      setStockData(null);
      setError('Could not fetch data. Please check the symbol.'); //if stockData is not found, set error message
    } finally {
      setLoading(false); //set Loading state to false after fetching data
    }
  };

  //function to add stock symbol to watchlist
  const addToWatchlist = () => {
    if (!symbol || typeof symbol !== 'string' || watchlist.includes(symbol.toUpperCase())) return; //If symbol is empty or already exists in watchlist, do nothing
    const updated = [...watchlist, symbol.toUpperCase()]; //else update the watchlist with the new symbol
    setWatchlist(updated);
    localStorage.setItem('watchlist', JSON.stringify(updated)); //store it in the JSON file afterwards 
  };

  //function to remove stock symbol from watchlist
  const removeFromWatchlist = (item) => {
    const updated = watchlist.filter(stock => stock !== item); //Filter out the stock symbol that needs to be removed 
    setWatchlist(updated); //Update watchlist state 
    localStorage.setItem('watchlist', JSON.stringify(updated)); //update JSON file with the new watchlist
  };

  //function to calculate the percentage change in stock price over a given number of days
  const getChange = (days = 1) => { //Change the number of days to calculate the change
    const prices = stockData?.closing_prices || [];
    if (prices.length < days + 1) return 'N/A';
    const change = ((prices.at(-1) - prices.at(-1 - days)) / prices.at(-1 - days)) * 100; // Calculate the percentage change
    return change.toFixed(2);
  };

  //Styles for the theme based on dark mode
  const themeStyles = {
    backgroundColor: darkMode ? '#1f2937' : '#f0f2f5', // Background color changes based on dark mode
    color: darkMode ? '#e5e7eb' : '#111827', // Text color changes based on dark mode
    minHeight: '100vh' // Ensures the app takes full height
  };

  return (
    <div className="App" style={{ display: 'flex', ...themeStyles }}> {/* Main container with flex layout and theme styles */}
      {/* Sidebar */}
      <div style={{ width: '220px', background: darkMode ? '#111827' : '#1f2937', color: 'white', padding: '1rem' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📋 Watchlist</h2>
        {watchlist.length === 0 ? (
          <p>No stocks saved.</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>

             {/* Each watchlist item with a clickable name and a button to remove it */}
            {watchlist.map((item) => (
              <li
                key={item}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', padding: '5px 0', borderBottom: '1px solid #374151' }}
              >
                <span onClick={() => handleSearch(item)}>{item}</span>
                <button onClick={() => removeFromWatchlist(item)} style={{ marginLeft: '10px', background: 'transparent', color: 'red', border: 'none', cursor: 'pointer' }}>✖</button>
              </li>
            ))}
          </ul>
        )}

        {/* Dark mode toggle button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{ marginTop: '1rem', backgroundColor: '#4b5563', color: 'white', border: 'none', padding: '10px', borderRadius: '8px', cursor: 'pointer' }}
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, overflow: 'auto', padding: '20px' }}>
        <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontSize: '1.8rem', marginBottom: '20px' }}>
          📈 Stock Dashboard
        </header>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Enter a stock symbol (e.g. AAPL)"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            style={{ padding: '10px', fontSize: '1rem', borderRadius: '8px 0 0 8px', border: '1px solid #ccc', width: '300px' }}
          />
          <button
            onClick={() => handleSearch(symbol)}
            style={{ padding: '10px 15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer' }}
          >
            🔍 Search
          </button>
          <button
            onClick={addToWatchlist}
            style={{ marginLeft: '10px', padding: '10px 15px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}
          >
            ⭐ Add to Watchlist
          </button>
        </div>
        
         {/* Loading and error messages */}
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        
        {/* Display stock data if available */}
        {stockData && (
          <>
            <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px', marginBottom: '20px' }}>
              <div className="card chart-card" style={{ background: darkMode ? '#374151' : 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', color: darkMode ? '#f9fafb' : '#111827' }}>
                <h3 style={{ marginBottom: '1rem' }}>📈 {stockData.symbol ? stockData.symbol.toUpperCase() : ''} - Price Trend</h3>
                <Line
                  data={{
                    labels: stockData.dates,
                    datasets: [
                      {
                        label: 'Closing Price ($)',
                        data: stockData.closing_prices,
                        borderColor: 'blue',
                        fill: false,
                      },
                    ],
                  }}
                />
              </div>


              {/* Latest stock data card */}
              <div className="card" style={{ background: darkMode ? '#374151' : 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', color: darkMode ? '#f9fafb' : '#111827' }}>
                <h3>📅 Latest Data</h3>
                <p><strong>Close:</strong> ${stockData.closing_prices?.at?.(-1)?.toFixed(2) || 'N/A'}</p>
                <p><strong>High:</strong> ${Math.max(...(stockData.closing_prices || [0])).toFixed(2)}</p>
                <p><strong>Low:</strong> ${Math.min(...(stockData.closing_prices || [0])).toFixed(2)}</p>
                <p><strong>Change:</strong> {getChange()}%</p>
                <div className="buttons" style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                  <button style={{ backgroundColor: '#34d399', color: 'white', padding: '10px', border: 'none', borderRadius: '8px', fontWeight: 'bold', width: '100%' }}>BUY</button>
                  <button style={{ backgroundColor: '#ef4444', color: 'white', padding: '10px', border: 'none', borderRadius: '8px', fontWeight: 'bold', width: '100%' }}>SELL</button>
                </div>
              </div>
            </div>
            {/* Statistics grid for stock changes and sector performance */}
            <div className="stat-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <div className="card" style={{ background: darkMode ? '#374151' : 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', color: darkMode ? '#f9fafb' : '#111827' }}>
                <h4>📉 {stockData.symbol ? stockData.symbol.toUpperCase() : ''} Change</h4>
                <p>1 Day: {getChange(1)}%</p>
                <p>5 Day: {getChange(5)}%</p>
                <p>Month: {getChange(30)}%</p>
              </div>

              <div className="card" style={{ background: darkMode ? '#374151' : 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)', color: darkMode ? '#f9fafb' : '#111827' }}>
                <h4>🧠 US Sector (IT)</h4>
                <p>1 Day: ▼0%</p>
                <p>5 Day: ▼1%</p>
                <p>Month: ▲8%</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;