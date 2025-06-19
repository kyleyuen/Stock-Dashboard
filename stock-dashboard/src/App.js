import './App.css';
import { useState } from 'react';
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

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!symbol.trim()) {
      setError('Please enter a stock symbol.');
      return;
    }
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:8000/stock/${symbol}`);
      setStockData(res.data);
      setError(null);
    } catch (err) {
      setStockData(null);
      setError('Could not fetch data. Please check the symbol.');
    } finally {
      setLoading(false);
    }
  };

  const getChange = (days = 1) => {
    const prices = stockData?.closing_prices || [];
    if (prices.length < days + 1) return 'N/A';
    const change = ((prices.at(-1) - prices.at(-1 - days)) / prices.at(-1 - days)) * 100;
    return change.toFixed(2);
  };

  return (
    <div className="App" style={{ overflow: 'hidden', height: '100vh', backgroundColor: '#f0f2f5', padding: '20px' }}>
      <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '1rem', borderRadius: '10px', textAlign: 'center', fontSize: '1.8rem', marginBottom: '20px' }}>
        Stock Dashboard
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
          onClick={handleSearch}
          style={{ padding: '10px 15px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '0 8px 8px 0', cursor: 'pointer' }}
        >
          🔍 Search
        </button>
      </div>

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

      {stockData && (
        <div className="dashboard-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
          <div className="card chart-card" style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ marginBottom: '1rem' }}> {stockData.symbol.toUpperCase()} - Price Trend</h3>
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

          <div className="card" style={{ display: 'grid', gridTemplateRows: 'auto auto auto', gap: '20px', background: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 12px rgba(0,0,0,0.05)' }}>
            <div>
              <h3>Latest Data</h3>
              <p><strong>Close:</strong> ${stockData.closing_prices.at(-1).toFixed(2)}</p>
              <p><strong>High:</strong> ${Math.max(...stockData.closing_prices).toFixed(2)}</p>
              <p><strong>Low:</strong> ${Math.min(...stockData.closing_prices).toFixed(2)}</p>
              <p><strong>Change:</strong> {getChange()}%</p>
            </div>
            <div>
              <h4>{stockData.symbol.toUpperCase()} Change</h4>
              <p>1 Day: {getChange(1)}%</p>
              <p>5 Day: {getChange(5)}%</p>
              <p>Month: {getChange(30)}%</p>
            </div>
            <div>
              <h4> US Sector (IT)</h4>
              <p>1 Day: ▼0%</p>
              <p>5 Day: ▼1%</p>
              <p>Month: ▲8%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
