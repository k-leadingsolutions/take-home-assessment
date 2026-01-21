# Backend API Server

Node.js/Express server providing RESTful API endpoints for market data.

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on `http://localhost:3001`

## API Endpoints

### Root
- `GET /` - API information and available endpoints

### Stocks
- `GET /api/stocks` - Get all stocks
- `GET /api/stocks/:symbol` - Get specific stock (e.g., /api/stocks/AAPL)

### Cryptocurrencies
- `GET /api/crypto` - Get all cryptocurrencies
- `GET /api/crypto/:symbol` - Get specific crypto (e.g., /api/crypto/BTC)

### News
- `GET /api/news` - Get all news articles
  - Query params: `category` (filter by category), `limit` (limit results)
- `GET /api/news/:id` - Get specific news article

### Alerts
- `GET /api/alerts` - Get all alerts
  - Query params: `unread=true` (filter unread only)
- `GET /api/alerts/:id` - Get specific alert

### AI Insights
- `GET /api/insights` - Get all AI insights
  - Query params: `type` (filter by type), `minConfidence` (minimum confidence level)
- `GET /api/insights/:id` - Get specific insight

### Market Summary
- `GET /api/market/summary` - Get market overview with top gainers/losers

## Project Structure

```
backend/
├── server.js       # Express server and routes
├── mockData.js     # Comprehensive mock data
└── package.json    # Dependencies and scripts
```

## Mock Data

The server includes comprehensive mock data for:
- 5 major stocks (AAPL, GOOGL, MSFT, AMZN, TSLA)
- 5 cryptocurrencies (BTC, ETH, BNB, SOL, XRP)
- 5 news articles with categories and sentiment
- 5 alerts with different severity levels
- 5 AI insights with recommendations

## Technologies

- **Express.js** - Web framework
- **CORS** - Cross-Origin Resource Sharing middleware
- **Node.js** - Runtime environment

## Development

To modify the mock data, edit `mockData.js`. To add new endpoints, edit `server.js`.
