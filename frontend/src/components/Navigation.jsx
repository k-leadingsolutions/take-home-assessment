import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ 
      backgroundColor: '#2c3e50', 
      padding: '15px 0',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{ 
          color: '#fff', 
          textDecoration: 'none', 
          fontSize: '24px',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center'
        }}>
          📊 Market Dashboard
        </Link>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link to="/" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Dashboard
          </Link>
          <Link to="/stocks" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Stocks
          </Link>
          <Link to="/crypto" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            Crypto
          </Link>
          <Link to="/news" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            News
          </Link>
          <Link to="/insights" style={{ 
            color: '#fff', 
            textDecoration: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            transition: 'background-color 0.3s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#34495e'}
          onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
            AI Insights
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
