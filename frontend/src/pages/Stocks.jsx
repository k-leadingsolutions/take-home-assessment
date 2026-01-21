import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatCurrency, formatPercentage, formatLargeNumber } from '../utils/formatters';

const Stocks = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('symbol');

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const data = await api.getStocks();
        setStocks(data);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStocks();
  }, []);

  const sortedStocks = [...stocks].sort((a, b) => {
    switch (sortBy) {
      case 'symbol':
        return a.symbol.localeCompare(b.symbol);
      case 'price':
        return b.price - a.price;
      case 'change':
        return b.changePercent - a.changePercent;
      case 'volume':
        return b.volume - a.volume;
      default:
        return 0;
    }
  });

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading stocks...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Stocks</h1>
        <div>
          <label style={{ marginRight: '10px' }}>Sort by:</label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}
          >
            <option value="symbol">Symbol</option>
            <option value="price">Price</option>
            <option value="change">Change %</option>
            <option value="volume">Volume</option>
          </select>
        </div>
      </div>

      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #dee2e6' }}>
              <th style={{ padding: '12px', textAlign: 'left' }}>Symbol</th>
              <th style={{ padding: '12px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Price</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Change</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Volume</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>Market Cap</th>
              <th style={{ padding: '12px', textAlign: 'right' }}>P/E Ratio</th>
            </tr>
          </thead>
          <tbody>
            {sortedStocks.map((stock) => (
              <tr key={stock.id} style={{ borderBottom: '1px solid #dee2e6' }}>
                <td style={{ padding: '12px', fontWeight: 'bold' }}>{stock.symbol}</td>
                <td style={{ padding: '12px' }}>{stock.name}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{formatCurrency(stock.price)}</td>
                <td style={{ 
                  padding: '12px', 
                  textAlign: 'right',
                  color: stock.change >= 0 ? '#28a745' : '#dc3545',
                  fontWeight: 'bold'
                }}>
                  {formatPercentage(stock.changePercent)}
                </td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{stock.volume.toLocaleString()}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{formatLargeNumber(stock.marketCap)}</td>
                <td style={{ padding: '12px', textAlign: 'right' }}>{stock.pe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>Stock Details</h3>
        <p>Click on any stock symbol to view detailed information including:</p>
        <ul>
          <li>Real-time price data</li>
          <li>Historical performance</li>
          <li>52-week high/low</li>
          <li>Dividend yield</li>
          <li>Sector information</li>
        </ul>
      </div>
    </div>
  );
};

export default Stocks;
