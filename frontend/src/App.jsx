import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Dashboard from './pages/Dashboard';
import Portfolio from './pages/Portfolio';
import Assets from './pages/Assets';
import News from './pages/News';
import AssetDetail from './pages/AssetDetail';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}>
          <Route index element={<Dashboard />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="assets" element={<Assets />} />
          <Route path="assets/:symbol" element={<AssetDetail />} />
          <Route path="news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
