import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { formatDate } from '../utils/formatters';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const params = filter !== 'all' ? { category: filter } : {};
        const data = await api.getNews(params);
        setNews(data);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [filter]);

  const categories = ['all', 'Technology', 'Economy', 'Cryptocurrency', 'Automotive'];

  if (loading) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Loading news...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1 style={{ marginBottom: '20px' }}>Market News</h1>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Filter by category:</label>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            style={{
              marginRight: '10px',
              padding: '8px 16px',
              borderRadius: '4px',
              border: '1px solid #ddd',
              backgroundColor: filter === category ? '#007bff' : '#fff',
              color: filter === category ? '#fff' : '#333',
              cursor: 'pointer',
              fontWeight: filter === category ? 'bold' : 'normal'
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gap: '20px' }}>
        {news.map((item) => (
          <article key={item.id} style={{ 
            backgroundColor: '#fff', 
            border: '1px solid #ddd', 
            borderRadius: '8px', 
            padding: '25px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '15px' }}>
              <h2 style={{ margin: 0, fontSize: '24px', flex: 1 }}>{item.title}</h2>
              <span style={{ 
                fontSize: '12px', 
                padding: '6px 12px', 
                borderRadius: '4px',
                marginLeft: '15px',
                whiteSpace: 'nowrap',
                backgroundColor: item.sentiment === 'positive' ? '#d4edda' : item.sentiment === 'negative' ? '#f8d7da' : '#d1ecf1',
                color: item.sentiment === 'positive' ? '#155724' : item.sentiment === 'negative' ? '#721c24' : '#0c5460'
              }}>
                {item.category}
              </span>
            </div>

            <p style={{ margin: '15px 0', fontSize: '16px', color: '#666', lineHeight: '1.6' }}>
              {item.summary}
            </p>

            <p style={{ margin: '15px 0', fontSize: '15px', color: '#333', lineHeight: '1.6' }}>
              {item.content}
            </p>

            {item.relatedSymbols && item.relatedSymbols.length > 0 && (
              <div style={{ margin: '15px 0' }}>
                <span style={{ fontSize: '14px', color: '#666', marginRight: '10px' }}>Related:</span>
                {item.relatedSymbols.map((symbol) => (
                  <span 
                    key={symbol} 
                    style={{ 
                      fontSize: '12px', 
                      padding: '4px 8px', 
                      marginRight: '5px',
                      borderRadius: '4px',
                      backgroundColor: '#e7f3ff',
                      color: '#0066cc',
                      fontWeight: 'bold'
                    }}
                  >
                    {symbol}
                  </span>
                ))}
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              paddingTop: '15px',
              borderTop: '1px solid #eee',
              fontSize: '14px',
              color: '#999'
            }}>
              <div>
                <strong>{item.source}</strong> • {item.author}
              </div>
              <div>{formatDate(item.publishedAt)}</div>
            </div>
          </article>
        ))}
      </div>

      {news.length === 0 && (
        <div style={{ textAlign: 'center', padding: '40px', backgroundColor: '#f8f9fa', borderRadius: '8px' }}>
          <h3>No news articles found</h3>
          <p>Try selecting a different category.</p>
        </div>
      )}
    </div>
  );
};

export default News;
