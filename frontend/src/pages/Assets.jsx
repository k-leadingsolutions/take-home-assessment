import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getAssets } from '../services/api';
import Card from '../components/ui/Card';

const Assets = () => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all, stock, crypto
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchAssets = async () => {
      try {
        setLoading(true);
        const response = await getAssets();
        setAssets(response.data);
      } catch (error) {
        console.error('Error fetching assets:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAssets();
  }, []);

  if (loading) {
    return <div className="text-center py-20">Loading assets...</div>;
  }

  // Filter and search
  const filteredAssets = assets
    .filter(asset => filter === 'all' || asset.type === filter)
    .filter(asset => 
      searchTerm === '' || 
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Assets</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse and search available assets</p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by symbol or name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
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

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAssets.map((asset) => (
          <Link key={asset.symbol} to={`/assets/${asset.symbol}`}>
            <Card className="h-full hover:shadow-lg transition-shadow duration-200 cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{asset.symbol}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-1">{asset.name}</p>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded ${
                  asset.type === 'stock' 
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' 
                    : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300'
                }`}>
                  {asset.type === 'stock' ? 'Stock' : 'Crypto'}
                </span>
              </div>

              <div className="mb-4">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  ${asset.currentPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </div>
                <div className={`text-sm font-medium ${asset.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {asset.changePercent >= 0 ? '▲' : '▼'} {asset.changePercent >= 0 ? '+' : ''}{asset.changePercent.toFixed(2)}%
                  <span className="ml-2">
                    ({asset.change >= 0 ? '+' : ''}${asset.change.toFixed(2)})
                  </span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 dark:text-gray-400">Market Cap</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    ${(asset.marketCap / 1e9).toFixed(2)}B
                  </span>
                </div>
                {asset.sector && (
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">Sector</span>
                    <span className="font-medium text-gray-900 dark:text-white">{asset.sector}</span>
                  </div>
                )}
                {asset.market && (
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span className="text-gray-500 dark:text-gray-400">Market</span>
                    <span className="font-medium text-gray-900 dark:text-white">{asset.market}</span>
                  </div>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {filteredAssets.length === 0 && (
        <div className="text-center py-12 text-gray-600 dark:text-gray-400">
          No assets found matching your criteria.
        </div>
      )}
    </motion.div>
  );
};

export default Assets;
