# Pulse Backend API Endpoints

Server running on: `http://localhost:5000`

## Health & General
- `GET /health` - API health check

## Dashboard
- `GET /dashboard` - Get dashboard overview (top gainers, losers, recent news, active alerts)

## Assets
- `GET /assets` - Get all assets (stocks + crypto)
  - Query params: `page`, `limit`, `sortBy`, `order`, `type`, `sentiment`
- `GET /assets/stats` - Get asset statistics
- `GET /assets/stocks` - Get all stocks
  - Query params: `page`, `limit`, `sortBy`, `order`, `sentiment`
- `GET /assets/stocks/:symbol` - Get specific stock by symbol
- `GET /assets/crypto` - Get all cryptocurrencies
  - Query params: `page`, `limit`, `sortBy`, `order`, `sentiment`
- `GET /assets/crypto/:symbol` - Get specific crypto by symbol
- `GET /assets/:symbol/history` - Get price history for an asset
  - Query params: `days`

## News
- `GET /news` - Get all news articles
  - Query params: `page`, `limit`, `sortBy`, `order`, `category`, `sentiment`, `impact`
- `GET /news/stats` - Get news statistics
- `GET /news/asset/:symbol` - Get news for specific asset
  - Query params: `page`, `limit`, `sortBy`, `order`
- `GET /news/category/:category` - Get news by category
  - Query params: `page`, `limit`, `sortBy`, `order`

## Alerts
- `GET /alerts` - Get all alerts
  - Query params: `page`, `limit`, `sortBy`, `order`, `severity`, `type`, `isActive`
- `GET /alerts/stats` - Get alert statistics
- `GET /alerts/critical` - Get critical alerts only
  - Query params: `page`, `limit`, `sortBy`, `order`
- `GET /alerts/severity/:severity` - Get alerts by severity (low, medium, high, critical)
  - Query params: `page`, `limit`, `sortBy`, `order`
- `GET /alerts/asset/:symbol` - Get alerts for specific asset
  - Query params: `page`, `limit`, `sortBy`, `order`

## Portfolio
- `GET /portfolio` - Get portfolio overview
- `GET /portfolio/performance` - Get portfolio performance
  - Query params: `period` (day, week, month, year, allTime)

## Events
- `GET /events` - Get all market events
  - Query params: `page`, `limit`, `sortBy`, `order`, `type`, `importance`
- `GET /events/upcoming` - Get upcoming events
  - Query params: `page`, `limit`, `days` (default: 30)

## Insights & Influencers
- `GET /insights` - Get AI insights
  - Query params: `page`, `limit`, `sortBy`, `order`, `type`, `sentiment`
- `GET /influencers` - Get market influencers
  - Query params: `page`, `limit`, `sortBy`, `order`, `specialty`, `platform`

## Legacy Redirects
- `GET /api` → redirects to `/dashboard`
- `GET /api/stocks` → redirects to `/assets/stocks`
- `GET /api/crypto` → redirects to `/assets/crypto`
- `GET /api/news` → redirects to `/news`
- `GET /api/alerts` → redirects to `/alerts`

## Response Format

All successful responses follow this format:
```json
{
  "success": true,
  "count": 10,
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10,
    "hasNext": true,
    "hasPrev": false
  },
  "data": [...]
}
```

Error responses:
```json
{
  "success": false,
  "error": "Error message"
}
```
