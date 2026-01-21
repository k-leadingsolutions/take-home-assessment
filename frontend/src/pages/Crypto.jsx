import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatCurrency, formatPercentage, formatLargeNumber } from '../utils/formatters';

const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const data = await api.getCrypto();
        setCryptos(data);
      } catch (error) {
        console.error('Error fetching crypto:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading cryptocurrencies...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Cryptocurrencies</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px', marginBottom: '30px' }}>
        {cryptos.map((crypto) => (
          <div key={crypto.id} style={{ 
            backgroundColor: '#fff', 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
              <div>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '24px' }}>{crypto.symbol}</h2>
                <div style={{ color: '#666', fontSize: '14px' }}>{crypto.name}</div>
              </div>
              <div style={{ 
                fontSize: '14px', 
                padding: '6px 12px', 
                borderRadius: '4px',
                fontWeight: 'bold',
                backgroundColor: crypto.change >= 0 ? '#d4edda' : '#f8d7da',
                color: crypto.change >= 0 ? '#155724' : '#721c24'
              }}>
                {formatPercentage(crypto.changePercent)}
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '5px' }}>
                {formatCurrency(crypto.price)}
              </div>
              <div style={{ 
                fontSize: '14px',
                color: crypto.change >= 0 ? '#28a745' : '#dc3545'
              }}>
                {crypto.change >= 0 ? '+' : ''}{formatCurrency(crypto.change)}
              </div>
            </div>

            <div style={{ borderTop: '1px solid #eee', paddingTop: '15px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '14px' }}>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>Market Cap</div>
                  <div style={{ fontWeight: 'bold' }}>{formatLargeNumber(crypto.marketCap)}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>24h Volume</div>
                  <div style={{ fontWeight: 'bold' }}>{formatLargeNumber(crypto.volume24h)}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>24h High</div>
                  <div style={{ fontWeight: 'bold' }}>{formatCurrency(crypto.high24h)}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>24h Low</div>
                  <div style={{ fontWeight: 'bold' }}>{formatCurrency(crypto.low24h)}</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>Circulating Supply</div>
                  <div style={{ fontWeight: 'bold' }}>{(crypto.circulatingSupply / 1e6).toFixed(2)}M</div>
                </div>
                <div>
                  <div style={{ color: '#666', marginBottom: '5px' }}>All-Time High</div>
                  <div style={{ fontWeight: 'bold' }}>{formatCurrency(crypto.allTimeHigh)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
        <h3 style={{ marginTop: 0 }}>Cryptocurrency Market Overview</h3>
        <p>Track the latest cryptocurrency prices, market caps, and trading volumes. Our data includes:</p>
        <ul>
          <li>Real-time price updates</li>
          <li>24-hour trading statistics</li>
          <li>Historical price data and all-time highs</li>
          <li>Circulating and total supply information</li>
          <li>Market capitalization rankings</li>
        </ul>
      </div>
    </div>
  );
};

export default Crypto;
