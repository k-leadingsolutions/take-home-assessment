import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getPortfolio, getAlerts, getAssets } from '../services/api';
import Ticker from '../components/Ticker';
import Card from '../components/ui/Card';

const Dashboard = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [alerts, setAlerts] = useState([]);
  const [topAssets, setTopAssets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [portfolioRes, alertsRes, assetsRes] = await Promise.all([
          getPortfolio(),
          getAlerts(),
          getAssets()
        ]);

        setPortfolio(portfolioRes.data);
        setAlerts(alertsRes.data);
        
        // Get top 5 assets by market cap for ticker
        const sorted = assetsRes.data
          .sort((a, b) => (b.marketCap || 0) - (a.marketCap || 0))
          .slice(0, 5)
          .map(asset => ({
            assetId: asset.symbol,
            change: asset.change,
            changePercent: asset.changePercent
          }));
        setTopAssets(sorted);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading dashboard...</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header with Ticker */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <Ticker assets={topAssets} />
        </div>
      </div>

      {/* Portfolio Summary */}
      {portfolio && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Value</div>
            <div className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
              ${portfolio.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </Card>
          
          <Card>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Gain</div>
            <div className={`text-3xl font-bold mt-1 ${portfolio.totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${portfolio.totalGain.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </Card>
          
          <Card>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Gain %</div>
            <div className={`text-3xl font-bold mt-1 ${portfolio.totalGainPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {portfolio.totalGainPercent.toFixed(2)}%
            </div>
          </Card>
        </div>
      )}

      {/* Top Holdings */}
      {portfolio && portfolio.holdings && (
        <Card className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Top Holdings</h2>
            <Link 
              to="/portfolio" 
              className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
            >
              View All
            </Link>
          </div>
          <div className="space-y-3">
            {portfolio.holdings.slice(0, 5).map((holding) => (
              <div 
                key={holding.id} 
                className="flex items-center justify-between py-3 border-b border-gray-100 dark:border-gray-700 last:border-0"
              >
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">{holding.symbol}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{holding.name}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium text-gray-900 dark:text-white">
                    ${holding.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </div>
                  <div className={`text-sm ${holding.gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {holding.gain >= 0 ? '+' : ''}${holding.gain.toFixed(2)} ({holding.gainPercent.toFixed(2)}%)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Recent Alerts */}
      {alerts && alerts.length > 0 && (
        <Card>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Recent Alerts</h2>
          <div className="space-y-3">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 rounded-md ${
                  alert.severity === 'success' 
                    ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300' 
                    : alert.severity === 'warning'
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300'
                    : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
                }`}
              >
                <div className="flex items-start">
                  <span className="mr-2">
                    {alert.severity === 'success' ? '✓' : alert.severity === 'warning' ? '⚠️' : 'ℹ️'}
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <p className="text-xs mt-1 opacity-75">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </motion.div>
  );
};

export default Dashboard;
