const express = require('express');
const cors = require('cors');
const { stocks, cryptocurrencies, news, alerts, aiInsights } = require('./mockData');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Market Data API',
    version: '1.0.0',
    endpoints: {
      stocks: '/api/stocks',
      cryptocurrencies: '/api/crypto',
      news: '/api/news',
      alerts: '/api/alerts',
      insights: '/api/insights'
    }
  });
});

// Stocks endpoints
app.get('/api/stocks', (req, res) => {
  res.json(stocks);
});

app.get('/api/stocks/:symbol', (req, res) => {
  const stock = stocks.find(s => s.symbol === req.params.symbol.toUpperCase());
  if (stock) {
    res.json(stock);
  } else {
    res.status(404).json({ error: 'Stock not found' });
  }
});

// Cryptocurrency endpoints
app.get('/api/crypto', (req, res) => {
  res.json(cryptocurrencies);
});

app.get('/api/crypto/:symbol', (req, res) => {
  const crypto = cryptocurrencies.find(c => c.symbol === req.params.symbol.toUpperCase());
  if (crypto) {
    res.json(crypto);
  } else {
    res.status(404).json({ error: 'Cryptocurrency not found' });
  }
});

// News endpoints
app.get('/api/news', (req, res) => {
  const { category, limit } = req.query;
  let filteredNews = news;
  
  if (category) {
    filteredNews = filteredNews.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }
  
  if (limit) {
    filteredNews = filteredNews.slice(0, parseInt(limit));
  }
  
  res.json(filteredNews);
});

app.get('/api/news/:id', (req, res) => {
  const newsItem = news.find(n => n.id === parseInt(req.params.id));
  if (newsItem) {
    res.json(newsItem);
  } else {
    res.status(404).json({ error: 'News item not found' });
  }
});

// Alerts endpoints
app.get('/api/alerts', (req, res) => {
  const { unread } = req.query;
  let filteredAlerts = alerts;
  
  if (unread === 'true') {
    filteredAlerts = filteredAlerts.filter(a => !a.read);
  }
  
  res.json(filteredAlerts);
});

app.get('/api/alerts/:id', (req, res) => {
  const alert = alerts.find(a => a.id === parseInt(req.params.id));
  if (alert) {
    res.json(alert);
  } else {
    res.status(404).json({ error: 'Alert not found' });
  }
});

// AI Insights endpoints
app.get('/api/insights', (req, res) => {
  const { type, minConfidence } = req.query;
  let filteredInsights = aiInsights;
  
  if (type) {
    filteredInsights = filteredInsights.filter(i => i.type === type);
  }
  
  if (minConfidence) {
    filteredInsights = filteredInsights.filter(i => i.confidence >= parseFloat(minConfidence));
  }
  
  res.json(filteredInsights);
});

app.get('/api/insights/:id', (req, res) => {
  const insight = aiInsights.find(i => i.id === parseInt(req.params.id));
  if (insight) {
    res.json(insight);
  } else {
    res.status(404).json({ error: 'Insight not found' });
  }
});

// Market summary endpoint
app.get('/api/market/summary', (req, res) => {
  const summary = {
    stocksCount: stocks.length,
    cryptoCount: cryptocurrencies.length,
    newsCount: news.length,
    unreadAlertsCount: alerts.filter(a => !a.read).length,
    topGainers: stocks
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, 3)
      .map(s => ({ symbol: s.symbol, name: s.name, changePercent: s.changePercent })),
    topLosers: stocks
      .sort((a, b) => a.changePercent - b.changePercent)
      .slice(0, 3)
      .map(s => ({ symbol: s.symbol, name: s.name, changePercent: s.changePercent })),
    cryptoLeaders: cryptocurrencies
      .sort((a, b) => b.changePercent - a.changePercent)
      .slice(0, 3)
      .map(c => ({ symbol: c.symbol, name: c.name, changePercent: c.changePercent }))
  };
  
  res.json(summary);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}`);
});
