# Full-Stack Market Data Assessment Project

A comprehensive full-stack application featuring a Node.js/Express backend API and a React frontend, designed to demonstrate modern web development practices with realistic market data.

## Project Structure

```
.
├── backend/          # Node.js/Express API server
├── frontend/         # React application with Vite
└── README.md         # This file
```

## Features

### Backend (Node.js/Express)
- RESTful API with comprehensive endpoints
- Mock data for stocks, cryptocurrencies, news, alerts, and AI insights
- CORS enabled for cross-origin requests
- Clean, maintainable code structure

### Frontend (React + Vite)
- Modern React application with React Router
- Multiple pages: Dashboard, Stocks, Crypto, News, AI Insights
- Responsive design with inline styling
- Real-time data fetching from backend API

### Mock Data Includes
- **Stocks**: 5 major stocks with detailed market data
- **Cryptocurrencies**: 5 popular cryptocurrencies with 24h data
- **News**: Market news articles with categorization and sentiment
- **Alerts**: Price alerts, volume alerts, and news notifications
- **AI Insights**: Machine learning-powered market analysis with recommendations

## Getting Started

### Prerequisites
- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd take-home-assessment
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server** (in the backend directory)
   ```bash
   cd backend
   npm start
   ```
   The API will be available at `http://localhost:3001`

2. **Start the frontend development server** (in a new terminal, in the frontend directory)
   ```bash
   cd frontend
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## API Documentation

### Base URL
```
http://localhost:3001
```

### Endpoints

#### Stocks
- `GET /api/stocks` - Get all stocks
- `GET /api/stocks/:symbol` - Get specific stock by symbol

#### Cryptocurrencies
- `GET /api/crypto` - Get all cryptocurrencies
- `GET /api/crypto/:symbol` - Get specific cryptocurrency by symbol

#### News
- `GET /api/news` - Get all news (supports `?category=` and `?limit=` query params)
- `GET /api/news/:id` - Get specific news article by ID

#### Alerts
- `GET /api/alerts` - Get all alerts (supports `?unread=true` query param)
- `GET /api/alerts/:id` - Get specific alert by ID

#### AI Insights
- `GET /api/insights` - Get all AI insights (supports `?type=` and `?minConfidence=` query params)
- `GET /api/insights/:id` - Get specific insight by ID

#### Market Summary
- `GET /api/market/summary` - Get market overview including top gainers/losers

## Technology Stack

### Backend
- Node.js
- Express.js
- CORS middleware

### Frontend
- React 18
- React Router DOM
- Vite (build tool)
- JavaScript ES6+

## Development

### Backend Development
- The server runs on port 3001 by default
- Modify mock data in `backend/mockData.js`
- Add new endpoints in `backend/server.js`

### Frontend Development
- Vite provides hot module replacement (HMR)
- API calls are centralized in `frontend/src/services/api.js`
- Add new pages in `frontend/src/pages/`
- Add new components in `frontend/src/components/`

## Project Goals

This project demonstrates:
1. **Full-stack development** with separate frontend and backend
2. **RESTful API design** with proper endpoint structure
3. **React Router implementation** for multi-page navigation
4. **State management** with React hooks
5. **Async data fetching** and loading states
6. **Mock data generation** for realistic testing
7. **Clean code practices** and project organization

## License

This project is created for assessment purposes.