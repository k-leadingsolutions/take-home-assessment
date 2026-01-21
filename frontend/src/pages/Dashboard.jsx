import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatCurrency, formatPercentage, formatLargeNumber } from '../utils/formatters';

const Dashboard = () => {
  const [summary, setSummary] = useState(null);
  const [news, setNews] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [summaryData, newsData, alertsData, insightsData] = await Promise.all([
          api.getMarketSummary(),
          api.getNews({ limit: 3 }),
          api.getAlerts({ unread: true }),
          api.getInsights()
        ]);
        
        setSummary(summaryData);
        setNews(newsData);
        setAlerts(alertsData);
        setInsights(insightsData.slice(0, 2));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading dashboard...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '30px' }}>Market Dashboard</h1>

      {/* Market Summary */}
      {summary && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>Market Summary</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Stocks Tracked</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{summary.stocksCount}</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>Cryptocurrencies</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{summary.cryptoCount}</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#666' }}>News Articles</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>{summary.newsCount}</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#fff3cd', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#856404' }}>Unread Alerts</h3>
              <p style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#856404' }}>{summary.unreadAlertsCount}</p>
            </div>
          </div>
        </div>
      )}

      {/* Top Gainers and Losers */}
      {summary && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <h2 style={{ marginBottom: '15px' }}>Top Gainers</h2>
              <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                {summary.topGainers.map((stock, index) => (
                  <div key={index} style={{ padding: '10px 0', borderBottom: index < summary.topGainers.length - 1 ? '1px solid #eee' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{stock.symbol}</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>{stock.name}</div>
                      </div>
                      <div style={{ color: '#28a745', fontWeight: 'bold' }}>
                        {formatPercentage(stock.changePercent)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 style={{ marginBottom: '15px' }}>Top Losers</h2>
              <div style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '15px' }}>
                {summary.topLosers.map((stock, index) => (
                  <div key={index} style={{ padding: '10px 0', borderBottom: index < summary.topLosers.length - 1 ? '1px solid #eee' : 'none' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{stock.symbol}</div>
                        <div style={{ fontSize: '12px', color: '#666' }}>{stock.name}</div>
                      </div>
                      <div style={{ color: '#dc3545', fontWeight: 'bold' }}>
                        {formatPercentage(stock.changePercent)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Latest News */}
      {news.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>Latest News</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {news.map((item) => (
              <div key={item.id} style={{ backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px' }}>{item.title}</h3>
                  <span style={{ 
                    fontSize: '12px', 
                    padding: '4px 8px', 
                    borderRadius: '4px',
                    backgroundColor: item.sentiment === 'positive' ? '#d4edda' : item.sentiment === 'negative' ? '#f8d7da' : '#d1ecf1',
                    color: item.sentiment === 'positive' ? '#155724' : item.sentiment === 'negative' ? '#721c24' : '#0c5460'
                  }}>
                    {item.category}
                  </span>
                </div>
                <p style={{ margin: '10px 0', color: '#666' }}>{item.summary}</p>
                <div style={{ fontSize: '12px', color: '#999' }}>
                  {item.source} • {new Date(item.publishedAt).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* AI Insights Preview */}
      {insights.length > 0 && (
        <div style={{ marginBottom: '30px' }}>
          <h2 style={{ marginBottom: '15px' }}>AI Insights</h2>
          <div style={{ display: 'grid', gap: '15px' }}>
            {insights.map((insight) => (
              <div key={insight.id} style={{ backgroundColor: '#e7f3ff', border: '1px solid #b3d9ff', borderRadius: '8px', padding: '20px' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '18px' }}>{insight.title}</h3>
                <p style={{ margin: '10px 0', color: '#333' }}>{insight.summary}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
                  <span style={{ fontSize: '12px', color: '#666' }}>
                    Confidence: {(insight.confidence * 100).toFixed(0)}%
                  </span>
                  <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', backgroundColor: '#007bff', color: '#fff' }}>
                    {insight.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Alerts */}
      {alerts.length > 0 && (
        <div>
          <h2 style={{ marginBottom: '15px' }}>Active Alerts ({alerts.length})</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {alerts.slice(0, 3).map((alert) => (
              <div key={alert.id} style={{ 
                backgroundColor: alert.severity === 'high' ? '#f8d7da' : alert.severity === 'medium' ? '#fff3cd' : '#d1ecf1',
                border: `1px solid ${alert.severity === 'high' ? '#f5c6cb' : alert.severity === 'medium' ? '#ffeeba' : '#bee5eb'}`,
                borderRadius: '8px', 
                padding: '15px' 
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                  <div>
                    <h4 style={{ margin: '0 0 5px 0' }}>{alert.title}</h4>
                    <p style={{ margin: '5px 0', fontSize: '14px' }}>{alert.message}</p>
                    <div style={{ fontSize: '12px', color: '#666', marginTop: '5px' }}>
                      {new Date(alert.timestamp).toLocaleString()}
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: alert.severity === 'high' ? '#721c24' : alert.severity === 'medium' ? '#856404' : '#0c5460' }}>
                    {alert.severity}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
