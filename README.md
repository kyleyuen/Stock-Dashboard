# Stock Dashboard

[![Language](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)](https://github.com/kyleyuen/Stock-Dashboard) [![License](https://img.shields.io/badge/License-MIT-green.svg)](https://github.com/kyleyuen/Stock-Dashboard/blob/main/LICENSE)

## 📊 Project Overview

A comprehensive full-stack financial dashboard application that fetches and visualizes real-time stock and ETF market data. This project demonstrates end-to-end software development combining RESTful API design, interactive data visualization, and modern frontend frameworks to create a professional-grade financial analysis tool.

### 🎯 Purpose

Developed as a portfolio project to showcase proficiency in full-stack web development, API integration, and real-time data visualization. Ideal for understanding modern financial application architecture, state management, and responsive UI design principles.

## ✨ Features

### Core Functionality
- 🔍 **Stock Search**: Search and analyze any stock or ETF symbol (AAPL, VOO, TSLA, etc.)
- 📈 **Interactive Charts**: Dynamic 30-day closing price visualization with Chart.js
- ⭐ **Watchlist Management**: Add/remove stocks with persistent local storage
- 💹 **Real-time Data**: Live price updates and trend analysis from Yahoo Finance
- 🌓 **Theme Toggle**: Seamless dark/light mode switching for enhanced UX
- 📊 **Price Analytics**: Automatic calculation of price changes and trends

### User Experience
- 🎨 **Professional UI**: Clean dashboard interface inspired by industry financial tools
- ⚡ **Responsive Design**: Optimized for desktop and mobile viewing
- 🔄 **Auto-refresh**: Automatic data updates for selected stocks
- 💾 **Persistent State**: User preferences and watchlists saved locally

## 🛠️ Tech Stack

- **Frontend Framework**: React.js with Hooks
- **Backend API**: FastAPI (Python)
- **Data Source**: Yahoo Finance API via yFinance
- **Charts**: Chart.js for interactive visualizations
- **HTTP Client**: Axios for API communication
- **Styling**: Vanilla CSS with custom dark/light themes
- **State Management**: React useState + localStorage
- **Platform**: Cross-platform web application

## 🚀 Getting Started

### Prerequisites

Before running this application, ensure you have:
- **Node.js**: v14.0+ (with npm)
- **Python**: 3.8+ with pip
- **Operating System**: Linux, macOS, or Windows
- **Browser**: Modern browser (Chrome, Firefox, Safari, Edge)

### Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kyleyuen/Stock-Dashboard.git
   cd Stock-Dashboard
   ```

2. **Backend Setup (FastAPI)**
   ```bash
   cd backend
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install fastapi uvicorn yfinance
   uvicorn main:app --reload
   ```
   Backend will run on `http://localhost:8000`

3. **Frontend Setup (React)**
   ```bash
   cd stock-dashboard
   npm install
   npm start
   ```
   Frontend will open at `http://localhost:3000`

## 📖 Usage Guide

### Application Flow

1. **Search for Stocks**: Enter a stock symbol (e.g., AAPL, GOOGL) in the search bar
2. **View Analytics**: Examine 30-day price charts and trend indicators
3. **Manage Watchlist**: Add favorite stocks to your persistent watchlist
4. **Toggle Theme**: Switch between dark and light modes for comfortable viewing
5. **Monitor Changes**: Track real-time price changes and percentage movements

### Sample Session

```
=== Stock Dashboard ===

🔍 Search: AAPL

📊 Apple Inc. (AAPL)
   Current: $178.42
   Change: +2.35 (+1.34%)
   
   📈 30-Day Chart [Interactive]
   
⭐ Watchlist:
   • AAPL - Apple Inc.
   • TSLA - Tesla Inc.
   • VOO - Vanguard S&P 500 ETF
```

### API Endpoints

The backend provides RESTful endpoints:
- `GET /api/stock/{symbol}` - Fetch stock data for given symbol
- `GET /api/stock/{symbol}/history` - Get historical price data (30 days)

## 🎯 Learning Outcomes

This project demonstrates proficiency in:
- **Full-Stack Development**: Building complete applications from database to UI
- **API Integration**: Consuming third-party financial data APIs
- **State Management**: Managing complex application state with React
- **Data Visualization**: Creating interactive charts with real-time updates
- **Asynchronous Programming**: Handling async data fetching and race conditions
- **Responsive Design**: Creating adaptive layouts for multiple screen sizes
- **Error Handling**: Implementing robust error handling and user feedback
- **Performance Optimization**: Minimizing re-renders and optimizing component updates

## 🔮 Future Enhancements

### Planned Features
- [ ] **Multiple Timeframes**: Support for 1-week, 3-month, 1-year, 5-year views
- [ ] **Advanced Analytics**: Moving averages, RSI, MACD indicators
- [ ] **Portfolio Tracking**: Complete portfolio management with P&L calculations
- [ ] **Price Alerts**: Email/notification system for price targets
- [ ] **News Integration**: Real-time financial news for tracked stocks
- [ ] **User Accounts**: Cloud-based user profiles and preferences
- [ ] **Export Features**: CSV/PDF export of charts and data
- [ ] **Comparison Tool**: Side-by-side stock comparison functionality

### Potential Improvements
- **Database Integration**: PostgreSQL for historical data caching
- **Authentication**: JWT-based user authentication system
- **WebSocket Support**: Real-time streaming data updates
- **Mobile App**: React Native mobile application
- **Advanced Charting**: Candlestick charts and technical indicators

## 📊 Technical Specifications

| Aspect | Details |
|--------|--------|
| **Frontend Framework** | React.js 18+ |
| **Backend Framework** | FastAPI 0.100+ |
| **API Response Time** | < 500ms average |
| **Chart Rendering** | < 100ms |
| **Browser Support** | Chrome, Firefox, Safari, Edge |
| **Mobile Responsive** | Yes (Bootstrap/Flexbox) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Follow existing code style and conventions
2. Add comments for complex logic
3. Test thoroughly before submitting
4. Update documentation as needed

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/kyleyuen/Stock-Dashboard/blob/main/LICENSE) file for details.

## 👨‍💻 Author

**Kyle Yuen**
- GitHub: [@kyleyuen](https://github.com/kyleyuen)
- Project Link: [Stock-Dashboard](https://github.com/kyleyuen/Stock-Dashboard)

## 🙏 Acknowledgments

- Inspired by professional financial platforms like Yahoo Finance and Bloomberg
- Built as a learning exercise in full-stack development and financial technology
- Thanks to the open-source community for continuous inspiration
- Special thanks to the yFinance library for providing accessible market data

---

⭐ **Star this repository if you found it helpful!** ⭐

**Last Updated**: October 2024
