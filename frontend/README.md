# Frontend React Application

React application with routing for displaying market data from the backend API.

## Installation

```bash
npm install
```

## Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Features

### Pages
- **Dashboard** - Overview of market data, top gainers/losers, latest news, and alerts
- **Stocks** - Comprehensive stock listing with sorting capabilities
- **Crypto** - Cryptocurrency cards with detailed 24h statistics
- **News** - Market news with category filtering
- **AI Insights** - Machine learning-powered market analysis

### Components
- **Navigation** - Top navigation bar with routing links

## Project Structure

```
frontend/src/
├── components/      # Reusable React components
│   └── Navigation.jsx
├── pages/          # Page components
│   ├── Dashboard.jsx
│   ├── Stocks.jsx
│   ├── Crypto.jsx
│   ├── News.jsx
│   └── Insights.jsx
├── services/       # API service layer
│   └── api.js
├── utils/          # Utility functions
│   └── formatters.js
├── App.jsx         # Main app component with routing
├── main.jsx        # Application entry point
└── index.css       # Global styles
```

## API Configuration

The frontend connects to the backend API at `http://localhost:3001` by default. To change this, set the `VITE_API_URL` environment variable:

```bash
# .env file
VITE_API_URL=http://your-api-url:port
```

## Technologies

- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and development server
- **JavaScript ES6+** - Modern JavaScript

## Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add the route in `App.jsx`
3. Add navigation link in `Navigation.jsx`

### Styling
This project uses inline styling for simplicity. All styles are defined within the component files.

### API Calls
All API calls are centralized in `src/services/api.js`. Import and use the `api` object to make requests to the backend.

Example:
```javascript
import { api } from '../services/api';

// In your component
const data = await api.getStocks();
```

