import express from 'express';
import cors from 'cors';
import { 
  stocksRouter, 
  stockBySymbol, 
  cryptoRouter, 
  cryptoBySymbol, 
  newsRouter, 
  portfolioRouter, 
  alertsRouter,
  assetsRouter
} from './routes/api.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Pulse Backend API is running' });
});

// API Routes
app.get('/api/stocks', stocksRouter);
app.get('/api/stocks/:symbol', stockBySymbol);
app.get('/api/crypto', cryptoRouter);
app.get('/api/crypto/:symbol', cryptoBySymbol);
app.get('/api/news', newsRouter);
app.get('/api/portfolio', portfolioRouter);
app.get('/api/alerts', alertsRouter);
app.get('/api/assets', assetsRouter);

// Error handling
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Pulse Backend API running on http://localhost:${PORT}`);
  console.log(`📊 API endpoints available at http://localhost:${PORT}/api`);
});
