import { useEffect, useState } from 'react';
import { api } from '../services/api';

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await api.getInsights();
        setInsights(data);
      } catch (error) {
        console.error('Error fetching insights:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading AI insights...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>AI-Powered Market Insights</h1>

      <div style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#e7f3ff', borderRadius: '8px', border: '1px solid #b3d9ff' }}>
        <h3 style={{ marginTop: 0 }}>About AI Insights</h3>
        <p>
          Our advanced machine learning algorithms analyze thousands of data points including market trends, 
          news sentiment, trading patterns, and historical data to provide actionable insights for your 
          investment decisions.
        </p>
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {insights.map((insight) => (
          <div key={insight.id} style={{ 
            backgroundColor: '#fff', 
            border: '2px solid #007bff', 
            borderRadius: '8px', 
            padding: '25px',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', flex: 1, color: '#007bff' }}>{insight.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: '15px' }}>
                <span style={{ 
                  fontSize: '12px', 
                  padding: '6px 12px', 
                  borderRadius: '4px',
                  marginBottom: '8px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  fontWeight: 'bold'
                }}>
                  {insight.category}
                </span>
                <div style={{ 
                  fontSize: '14px', 
                  color: '#666',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <span style={{ marginRight: '8px' }}>Confidence:</span>
                  <div style={{ 
                    width: '100px', 
                    height: '8px', 
                    backgroundColor: '#e9ecef', 
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{ 
                      width: `${insight.confidence * 100}%`, 
                      height: '100%', 
                      backgroundColor: insight.confidence >= 0.8 ? '#28a745' : insight.confidence >= 0.6 ? '#ffc107' : '#dc3545'
                    }} />
                  </div>
                  <span style={{ marginLeft: '8px', fontWeight: 'bold' }}>
                    {(insight.confidence * 100).toFixed(0)}%
                  </span>
                </div>
              </div>
            </div>

            <p style={{ 
              margin: '15px 0', 
              fontSize: '16px', 
              color: '#333', 
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              {insight.summary}
            </p>

            <p style={{ margin: '15px 0', fontSize: '15px', color: '#666', lineHeight: '1.6' }}>
              {insight.content}
            </p>

            {insight.relatedSymbols && insight.relatedSymbols.length > 0 && (
              <div style={{ margin: '20px 0', paddingTop: '15px', borderTop: '1px solid #e9ecef' }}>
                <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#666', marginRight: '10px' }}>
                  Related Symbols:
                </span>
                {insight.relatedSymbols.map((symbol) => (
                  <span 
                    key={symbol} 
                    style={{ 
                      fontSize: '13px', 
                      padding: '5px 10px', 
                      marginRight: '8px',
                      borderRadius: '4px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      fontWeight: 'bold'
                    }}
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            )}

            {insight.recommendations && insight.recommendations.length > 0 && (
              <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px' }}>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '16px', color: '#333' }}>Recommendations:</h4>
                <ul style={{ margin: 0, paddingLeft: '20px' }}>
                  {insight.recommendations.map((rec, index) => (
                    <li key={index} style={{ margin: '8px 0', fontSize: '14px', lineHeight: '1.5' }}>
                      {rec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={{ 
              marginTop: '15px', 
              fontSize: '13px', 
              color: '#999',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span>Type: {insight.type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
              <span>{new Date(insight.timestamp).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
