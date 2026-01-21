// Comprehensive mock data for market information

const stocks = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 185.92,
    change: 2.45,
    changePercent: 1.34,
    volume: 58234567,
    marketCap: 2890000000000,
    high: 187.50,
    low: 183.20,
    open: 184.30,
    previousClose: 183.47,
    sector: 'Technology',
    pe: 29.8,
    dividendYield: 0.52,
    fiftyTwoWeekHigh: 199.62,
    fiftyTwoWeekLow: 164.08
  },
  {
    id: 2,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 142.15,
    change: -1.23,
    changePercent: -0.86,
    volume: 24567890,
    marketCap: 1780000000000,
    high: 144.20,
    low: 141.80,
    open: 143.50,
    previousClose: 143.38,
    sector: 'Technology',
    pe: 25.3,
    dividendYield: 0.0,
    fiftyTwoWeekHigh: 153.78,
    fiftyTwoWeekLow: 121.46
  },
  {
    id: 3,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.91,
    change: 5.67,
    changePercent: 1.52,
    volume: 32456789,
    marketCap: 2820000000000,
    high: 380.25,
    low: 375.40,
    open: 376.50,
    previousClose: 373.24,
    sector: 'Technology',
    pe: 34.2,
    dividendYield: 0.78,
    fiftyTwoWeekHigh: 384.30,
    fiftyTwoWeekLow: 309.45
  },
  {
    id: 4,
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 151.23,
    change: 3.12,
    changePercent: 2.11,
    volume: 45678901,
    marketCap: 1560000000000,
    high: 152.50,
    low: 149.80,
    open: 150.20,
    previousClose: 148.11,
    sector: 'Consumer Cyclical',
    pe: 68.5,
    dividendYield: 0.0,
    fiftyTwoWeekHigh: 161.72,
    fiftyTwoWeekLow: 118.35
  },
  {
    id: 5,
    symbol: 'TSLA',
    name: 'Tesla Inc.',
    price: 242.84,
    change: -4.56,
    changePercent: -1.84,
    volume: 98765432,
    marketCap: 770000000000,
    high: 248.90,
    low: 241.20,
    open: 246.50,
    previousClose: 247.40,
    sector: 'Consumer Cyclical',
    pe: 76.4,
    dividendYield: 0.0,
    fiftyTwoWeekHigh: 299.29,
    fiftyTwoWeekLow: 152.37
  }
];

const cryptocurrencies = [
  {
    id: 1,
    symbol: 'BTC',
    name: 'Bitcoin',
    price: 43567.89,
    change: 1234.56,
    changePercent: 2.92,
    volume24h: 28456789012,
    marketCap: 852000000000,
    circulatingSupply: 19560000,
    totalSupply: 21000000,
    high24h: 44120.50,
    low24h: 42890.30,
    allTimeHigh: 69045.00,
    allTimeLow: 67.81
  },
  {
    id: 2,
    symbol: 'ETH',
    name: 'Ethereum',
    price: 2289.45,
    change: -45.67,
    changePercent: -1.96,
    volume24h: 15678901234,
    marketCap: 275000000000,
    circulatingSupply: 120200000,
    totalSupply: 120200000,
    high24h: 2350.80,
    low24h: 2276.40,
    allTimeHigh: 4891.70,
    allTimeLow: 0.43
  },
  {
    id: 3,
    symbol: 'BNB',
    name: 'Binance Coin',
    price: 312.78,
    change: 8.92,
    changePercent: 2.94,
    volume24h: 1234567890,
    marketCap: 48000000000,
    circulatingSupply: 153856150,
    totalSupply: 200000000,
    high24h: 315.60,
    low24h: 308.40,
    allTimeHigh: 690.93,
    allTimeLow: 0.10
  },
  {
    id: 4,
    symbol: 'SOL',
    name: 'Solana',
    price: 98.76,
    change: 5.43,
    changePercent: 5.81,
    volume24h: 2345678901,
    marketCap: 43000000000,
    circulatingSupply: 435789012,
    totalSupply: 580000000,
    high24h: 100.20,
    low24h: 94.50,
    allTimeHigh: 260.06,
    allTimeLow: 0.50
  },
  {
    id: 5,
    symbol: 'XRP',
    name: 'Ripple',
    price: 0.5678,
    change: 0.0234,
    changePercent: 4.30,
    volume24h: 3456789012,
    marketCap: 30000000000,
    circulatingSupply: 53000000000,
    totalSupply: 100000000000,
    high24h: 0.5890,
    low24h: 0.5520,
    allTimeHigh: 3.84,
    allTimeLow: 0.0028
  }
];

const news = [
  {
    id: 1,
    title: 'Tech Stocks Rally as AI Investment Continues',
    summary: 'Major technology companies see significant gains as artificial intelligence spending shows no signs of slowing down.',
    content: 'Technology stocks experienced a strong rally today, with major players posting significant gains amid continued optimism about artificial intelligence investments. Analysts suggest that the AI boom is still in its early stages, with enterprise adoption accelerating across multiple sectors.',
    source: 'Market News Daily',
    author: 'Sarah Johnson',
    publishedAt: new Date('2026-01-20T14:30:00Z').toISOString(),
    category: 'Technology',
    relatedSymbols: ['AAPL', 'MSFT', 'GOOGL'],
    imageUrl: 'https://via.placeholder.com/400x200/0066cc/ffffff?text=Tech+Rally',
    sentiment: 'positive'
  },
  {
    id: 2,
    title: 'Federal Reserve Signals Potential Rate Cut',
    summary: 'Federal Reserve officials hint at possible interest rate adjustments in upcoming meetings.',
    content: 'In recent statements, Federal Reserve officials have suggested that interest rate cuts may be on the horizon if economic data continues to support such action. The announcement has sparked optimism in equity markets, particularly in rate-sensitive sectors such as real estate and utilities.',
    source: 'Financial Times',
    author: 'Michael Chen',
    publishedAt: new Date('2026-01-20T10:15:00Z').toISOString(),
    category: 'Economy',
    relatedSymbols: [],
    imageUrl: 'https://via.placeholder.com/400x200/009900/ffffff?text=Fed+News',
    sentiment: 'positive'
  },
  {
    id: 3,
    title: 'Bitcoin Surges Past $43,000 on Institutional Interest',
    summary: 'Cryptocurrency markets see renewed interest as institutional investors increase their positions.',
    content: 'Bitcoin has surged past the $43,000 mark, driven by renewed institutional interest and positive regulatory developments. Several major financial institutions have announced plans to expand their cryptocurrency offerings, signaling growing mainstream acceptance of digital assets.',
    source: 'Crypto Insights',
    author: 'Emily Rodriguez',
    publishedAt: new Date('2026-01-19T16:45:00Z').toISOString(),
    category: 'Cryptocurrency',
    relatedSymbols: ['BTC', 'ETH'],
    imageUrl: 'https://via.placeholder.com/400x200/ff9900/ffffff?text=Bitcoin+Surge',
    sentiment: 'positive'
  },
  {
    id: 4,
    title: 'Tesla Faces Production Challenges in Q1',
    summary: 'Electric vehicle manufacturer reports supply chain constraints affecting production targets.',
    content: 'Tesla has acknowledged production challenges in the first quarter, citing ongoing supply chain constraints for key components. Despite these headwinds, the company maintains its full-year delivery guidance and expects production to normalize in the second quarter.',
    source: 'Auto Industry News',
    author: 'David Williams',
    publishedAt: new Date('2026-01-19T09:20:00Z').toISOString(),
    category: 'Automotive',
    relatedSymbols: ['TSLA'],
    imageUrl: 'https://via.placeholder.com/400x200/cc0000/ffffff?text=Tesla+Production',
    sentiment: 'negative'
  },
  {
    id: 5,
    title: 'Amazon Expands Cloud Services with New AI Tools',
    summary: 'E-commerce giant unveils new artificial intelligence capabilities for AWS platform.',
    content: 'Amazon Web Services has announced a suite of new AI-powered tools designed to help businesses integrate machine learning capabilities more easily. The new offerings include pre-trained models and simplified deployment options, positioning AWS to compete more aggressively in the enterprise AI market.',
    source: 'Tech Business Journal',
    author: 'Lisa Thompson',
    publishedAt: new Date('2026-01-18T13:00:00Z').toISOString(),
    category: 'Technology',
    relatedSymbols: ['AMZN'],
    imageUrl: 'https://via.placeholder.com/400x200/0066cc/ffffff?text=AWS+AI',
    sentiment: 'positive'
  }
];

const alerts = [
  {
    id: 1,
    type: 'price',
    severity: 'high',
    symbol: 'AAPL',
    title: 'Apple Stock Reaches New High',
    message: 'AAPL has reached $185.92, approaching its 52-week high of $199.62',
    timestamp: new Date('2026-01-21T06:45:00Z').toISOString(),
    read: false,
    actionUrl: '/stocks/AAPL'
  },
  {
    id: 2,
    type: 'volume',
    severity: 'medium',
    symbol: 'TSLA',
    title: 'Unusual Trading Volume Detected',
    message: 'TSLA trading volume is 3x above average, indicating high market interest',
    timestamp: new Date('2026-01-21T05:30:00Z').toISOString(),
    read: false,
    actionUrl: '/stocks/TSLA'
  },
  {
    id: 3,
    type: 'news',
    severity: 'low',
    symbol: 'MSFT',
    title: 'New Product Announcement',
    message: 'Microsoft announces new AI features for Office 365 suite',
    timestamp: new Date('2026-01-20T18:20:00Z').toISOString(),
    read: true,
    actionUrl: '/news/5'
  },
  {
    id: 4,
    type: 'crypto',
    severity: 'high',
    symbol: 'BTC',
    title: 'Bitcoin Price Alert',
    message: 'BTC has increased by 2.92% in the last 24 hours',
    timestamp: new Date('2026-01-20T14:10:00Z').toISOString(),
    read: false,
    actionUrl: '/crypto/BTC'
  },
  {
    id: 5,
    type: 'earnings',
    severity: 'medium',
    symbol: 'GOOGL',
    title: 'Upcoming Earnings Report',
    message: 'Alphabet Inc. will report Q4 earnings on January 28, 2026',
    timestamp: new Date('2026-01-20T08:00:00Z').toISOString(),
    read: true,
    actionUrl: '/stocks/GOOGL'
  }
];

const aiInsights = [
  {
    id: 1,
    type: 'market_sentiment',
    title: 'Bullish Market Sentiment Detected',
    summary: 'AI analysis indicates strong bullish sentiment across technology sector',
    content: 'Our machine learning models have analyzed thousands of news articles, social media posts, and market data points to determine that current market sentiment is strongly bullish, particularly in the technology sector. Key drivers include continued AI investment and positive earnings expectations.',
    confidence: 0.87,
    category: 'Sentiment Analysis',
    relatedSymbols: ['AAPL', 'MSFT', 'GOOGL'],
    timestamp: new Date('2026-01-21T07:00:00Z').toISOString(),
    recommendations: [
      'Consider increasing exposure to technology stocks',
      'Monitor AI-related companies for potential opportunities',
      'Watch for profit-taking signals as sentiment approaches extreme levels'
    ]
  },
  {
    id: 2,
    type: 'price_prediction',
    title: 'Bitcoin Price Trajectory Analysis',
    summary: 'ML models predict continued upward momentum for BTC',
    content: 'Based on historical patterns, current market conditions, and institutional adoption trends, our AI models predict that Bitcoin is likely to maintain its upward trajectory in the short to medium term. Key support levels have been identified at $41,000 and $39,500.',
    confidence: 0.72,
    category: 'Price Prediction',
    relatedSymbols: ['BTC'],
    timestamp: new Date('2026-01-21T06:30:00Z').toISOString(),
    recommendations: [
      'Monitor support level at $41,000',
      'Consider taking partial profits near $46,000 resistance',
      'Set stop-loss orders below $39,500'
    ]
  },
  {
    id: 3,
    type: 'risk_assessment',
    title: 'Portfolio Risk Analysis',
    summary: 'Current portfolio shows moderate risk exposure',
    content: 'AI-driven portfolio analysis indicates a moderate risk level with adequate diversification across sectors. However, concentration in technology stocks (45%) may expose the portfolio to sector-specific volatility. Consider rebalancing to include more defensive sectors.',
    confidence: 0.91,
    category: 'Risk Management',
    relatedSymbols: [],
    timestamp: new Date('2026-01-20T22:15:00Z').toISOString(),
    recommendations: [
      'Reduce technology sector exposure from 45% to 35%',
      'Increase allocation to healthcare and consumer staples',
      'Consider adding treasury bonds for stability'
    ]
  },
  {
    id: 4,
    type: 'trend_detection',
    title: 'Emerging Trend: Cloud Infrastructure Growth',
    summary: 'AI identifies accelerating growth in cloud infrastructure spending',
    content: 'Pattern recognition algorithms have identified a significant acceleration in cloud infrastructure spending across enterprise customers. This trend is expected to benefit major cloud providers and could drive substantial revenue growth over the next 12-18 months.',
    confidence: 0.84,
    category: 'Trend Analysis',
    relatedSymbols: ['MSFT', 'AMZN', 'GOOGL'],
    timestamp: new Date('2026-01-20T15:45:00Z').toISOString(),
    recommendations: [
      'Consider increasing positions in cloud infrastructure providers',
      'Monitor quarterly earnings for cloud revenue growth',
      'Watch for competitive dynamics and market share shifts'
    ]
  },
  {
    id: 5,
    type: 'anomaly_detection',
    title: 'Unusual Trading Pattern Detected',
    summary: 'AI flags abnormal trading activity in electric vehicle sector',
    content: 'Machine learning algorithms have detected unusual trading patterns in the electric vehicle sector, with higher-than-normal correlation between traditionally independent stocks. This may indicate sector-wide news or institutional positioning changes.',
    confidence: 0.79,
    category: 'Anomaly Detection',
    relatedSymbols: ['TSLA'],
    timestamp: new Date('2026-01-20T11:30:00Z').toISOString(),
    recommendations: [
      'Monitor news feeds for sector-wide announcements',
      'Review sector exposure and adjust if necessary',
      'Consider setting tighter stop-losses during elevated volatility'
    ]
  }
];

module.exports = {
  stocks,
  cryptocurrencies,
  news,
  alerts,
  aiInsights
};
