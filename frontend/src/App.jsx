import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Stocks from './pages/Stocks';
import Crypto from './pages/Crypto';
import News from './pages/News';
import Insights from './pages/Insights';

function App() {
  return (
    <Router>
      <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/news" element={<News />} />
          <Route path="/insights" element={<Insights />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
