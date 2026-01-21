import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getStock, getCryptoBySymbol } from '../services/api';

const AssetDetail = () => {
  const { symbol } = useParams();
  const navigate = useNavigate();
  const [asset, setAsset] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAsset = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try stock endpoint first
        try {
          // getStock returns normalized { success, data }
          const stockRes = await getStock(symbol, { suppress404: true });
          const stockData = stockRes?.data ?? null;
          if (stockData) {
            setAsset(stockData);
            return;
          }
        } catch (stockErr) {
          // If the stock call failed with 404, try crypto fallback.
          const status = stockErr?.response?.status;
          if (status === 404) {
            // fallback to crypto below
          } else {
            // For other errors (network, 500, etc.) surface an error and stop
            console.error('Stock lookup failed:', stockErr);
            setError('Failed to load asset (stock lookup failed).');
            return;
          }
        }

        // Try crypto endpoint (only if stock returned 404)
        try {
          const cryptoRes = await getCryptoBySymbol(symbol);
          const cryptoData = cryptoRes?.data ?? null;
          if (cryptoData) {
            setAsset(cryptoData);
            return;
          }
        } catch (cryptoErr) {
          const status2 = cryptoErr?.response?.status;
          if (status2 === 404) {
            setError('Asset not found');
            return;
          }
          console.error('Crypto lookup failed:', cryptoErr);
          setError('Failed to load asset (crypto lookup failed).');
          return;
        }

        // If we get here without asset, show not found
        setError('Asset not found');
      } catch (err) {
        console.error('Error fetching asset:', err);
        setError('Failed to load asset');
      } finally {
        setLoading(false);
      }
    };

    fetchAsset();
  }, [symbol]);

  if (loading) return <div className="text-center py-20">Loading asset...</div>;
  if (error) return <div className="text-center py-20 text-red-500">{error}</div>;
  if (!asset) return null;

  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="container mx-auto px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">{asset.symbol} {asset.name ? `- ${asset.name}` : ''}</h1>
          <div className="text-sm text-gray-500">{asset.sector ?? (asset.market ? asset.market : '')}</div>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="px-3 py-2 bg-gray-100 rounded-md">Back</button>
          <button className="px-3 py-2 bg-indigo-600 text-white rounded-md">Trade</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-500">Price</div>
              <div className="text-2xl font-bold text-blue-600">{Number.isFinite(Number(asset.currentPrice)) ? `$${Number(asset.currentPrice).toFixed(2)}` : 'N/A'}</div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Change</div>
              <div className={`text-lg font-semibold ${Number(asset.changePercent) >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {Number.isFinite(Number(asset.changePercent)) ? `${Number(asset.changePercent).toFixed(2)}%` : 'N/A'}
              </div>
            </div>
            <div>
              <div className="text-sm text-gray-500">Market Cap</div>
              <div className="text-lg">{asset.marketCap ? `$${(asset.marketCap).toLocaleString()}` : 'N/A'}</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-700">
            <h3 className="font-semibold mb-2">Description</h3>
            <p>{asset.summary ?? asset.description ?? 'No description available.'}</p>
          </div>
        </div>

        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">Key Metrics</h3>
            <ul className="text-sm space-y-2">
              {asset.keyMetrics ? Object.entries(asset.keyMetrics).map(([k,v]) => (
                <li key={k}><span className="font-medium">{k}:</span> {String(v)}</li>
              )) : <li>No metrics available</li>}
            </ul>
          </div>
          <div className="mt-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
            <h3 className="text-sm text-gray-500 mb-2">Recent Alerts</h3>
            <ul className="text-sm space-y-2">
              {asset.alerts && asset.alerts.length > 0 ? asset.alerts.map(a => (
                <li key={a.id}><span className="font-medium">{a.severity}</span>: {a.message}</li>
              )) : <li>No alerts</li>}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AssetDetail;
