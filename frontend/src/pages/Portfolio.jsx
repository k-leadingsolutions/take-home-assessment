import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { getPortfolio } from '../services/api';
import Card from '../components/ui/Card';

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, stock, crypto

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await getPortfolio();
        setPortfolio(response.data);
      } catch (error) {
        console.error('Error fetching portfolio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading portfolio...</div>;
  }

  if (!portfolio) {
    return <div className="text-center py-20 text-gray-600 dark:text-gray-400">No portfolio data available</div>;
  }

  const filteredHoldings = portfolio.holdings.filter(holding => 
    filter === 'all' || holding.type === filter
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Portfolio</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage and track your investments</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <div className="text-sm text-gray-500 dark:text-gray-400">Total Value</div>
          <div className="text-3xl font-bold text-gray-900 dark:text-white mt-1">
            ${portfolio.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </Card>
        
        <Card>
          <div className="text-sm text-gray-500 dark:text-gray-400">Total Gain/Loss</div>
          <div className={`text-3xl font-bold mt-1 ${portfolio.totalGain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.totalGain >= 0 ? '+' : ''}${portfolio.totalGain.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </Card>
        
        <Card>
          <div className="text-sm text-gray-500 dark:text-gray-400">Return</div>
          <div className={`text-3xl font-bold mt-1 ${portfolio.totalGainPercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.totalGainPercent >= 0 ? '+' : ''}{portfolio.totalGainPercent.toFixed(2)}%
          </div>
        </Card>
      </div>

      {/* Filter */}
      <div className="mb-6">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg border ${
              filter === 'all'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('stock')}
            className={`px-4 py-2 text-sm font-medium border-t border-b ${
              filter === 'stock'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Stocks
          </button>
          <button
            onClick={() => setFilter('crypto')}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg border ${
              filter === 'crypto'
                ? 'bg-primary-600 text-white border-primary-600'
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
            }`}
          >
            Crypto
          </button>
        </div>
      </div>

      {/* Holdings Table */}
      <Card>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Avg Cost
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Current Price
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Value
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Gain/Loss
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredHoldings.map((holding) => (
                <tr key={holding.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">{holding.symbol}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{holding.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-900 dark:text-white">
                    {holding.quantity}
                  </td>
                  <td className="px-4 py-4 text-right text-gray-900 dark:text-white">
                    ${holding.avgCost.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-right text-gray-900 dark:text-white">
                    ${holding.currentPrice.toFixed(2)}
                  </td>
                  <td className="px-4 py-4 text-right font-medium text-gray-900 dark:text-white">
                    ${holding.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className={`px-4 py-4 text-right font-medium ${holding.gain >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {holding.gain >= 0 ? '+' : ''}${holding.gain.toFixed(2)}
                    <div className="text-sm">
                      ({holding.gain >= 0 ? '+' : ''}{holding.gainPercent.toFixed(2)}%)
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </motion.div>
  );
};

export default Portfolio;
