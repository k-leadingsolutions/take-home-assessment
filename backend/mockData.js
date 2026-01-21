// Mock data for financial monitoring platform

export const stocks = [
  {
    id: 1,
    symbol: 'AAPL',
    name: 'Apple Inc.',
    type: 'stock',
    currentPrice: 178.25,
    previousClose: 175.50,
    change: 2.75,
    changePercent: 1.57,
    volume: 52436000,
    marketCap: 2780000000000,
    pe: 29.5,
    high52Week: 199.62,
    low52Week: 124.17,
    sentiment: 'bullish',
    aiAccuracy: 87.5,
    priceHistory: [
      { date: '2024-01-01', open: 172.50, high: 174.00, low: 171.80, close: 173.50, volume: 48000000 },
      { date: '2024-01-02', open: 173.50, high: 175.20, low: 173.00, close: 174.80, volume: 50000000 },
      { date: '2024-01-03', open: 174.80, high: 176.50, low: 174.20, close: 175.50, volume: 49500000 },
      { date: '2024-01-04', open: 175.50, high: 179.00, low: 175.00, close: 178.25, volume: 52436000 }
    ],
    alerts: [
      { type: 'price_target', message: 'Approaching resistance at $180', severity: 'medium' }
    ]
  },
  {
    id: 2,
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    type: 'stock',
    currentPrice: 242.84,
    previousClose: 238.45,
    change: 4.39,
    changePercent: 1.84,
    volume: 98765000,
    marketCap: 772000000000,
    pe: 75.2,
    high52Week: 299.29,
    low52Week: 101.81,
    sentiment: 'bullish',
    aiAccuracy: 82.3,
    priceHistory: [
      { date: '2024-01-01', open: 235.00, high: 237.50, low: 234.20, close: 236.80, volume: 92000000 },
      { date: '2024-01-02', open: 236.80, high: 239.00, low: 235.50, close: 237.90, volume: 95000000 },
      { date: '2024-01-03', open: 237.90, high: 240.50, low: 237.00, close: 238.45, volume: 97000000 },
      { date: '2024-01-04', open: 238.45, high: 244.00, low: 238.00, close: 242.84, volume: 98765000 }
    ],
    alerts: [
      { type: 'volume_spike', message: 'Volume 25% above average', severity: 'low' }
    ]
  },
  {
    id: 3,
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    type: 'stock',
    currentPrice: 495.22,
    previousClose: 489.50,
    change: 5.72,
    changePercent: 1.17,
    volume: 45678000,
    marketCap: 1220000000000,
    pe: 115.8,
    high52Week: 502.66,
    low52Week: 108.13,
    sentiment: 'very_bullish',
    aiAccuracy: 91.2,
    priceHistory: [
      { date: '2024-01-01', open: 480.00, high: 485.50, low: 479.00, close: 483.20, volume: 42000000 },
      { date: '2024-01-02', open: 483.20, high: 487.80, low: 482.00, close: 486.50, volume: 43500000 },
      { date: '2024-01-03', open: 486.50, high: 491.00, low: 485.50, close: 489.50, volume: 44200000 },
      { date: '2024-01-04', open: 489.50, high: 497.00, low: 488.50, close: 495.22, volume: 45678000 }
    ],
    alerts: [
      { type: 'breakout', message: 'Breaking out above $490 resistance', severity: 'high' }
    ]
  },
  {
    id: 4,
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    type: 'stock',
    currentPrice: 378.91,
    previousClose: 375.20,
    change: 3.71,
    changePercent: 0.99,
    volume: 23456000,
    marketCap: 2820000000000,
    pe: 35.6,
    high52Week: 384.30,
    low52Week: 213.43,
    sentiment: 'bullish',
    aiAccuracy: 89.1,
    priceHistory: [
      { date: '2024-01-01', open: 370.00, high: 372.50, low: 369.50, close: 371.80, volume: 22000000 },
      { date: '2024-01-02', open: 371.80, high: 374.20, low: 371.00, close: 373.50, volume: 22800000 },
      { date: '2024-01-03', open: 373.50, high: 376.50, low: 373.00, close: 375.20, volume: 23100000 },
      { date: '2024-01-04', open: 375.20, high: 380.00, low: 374.80, close: 378.91, volume: 23456000 }
    ],
    alerts: []
  },
  {
    id: 5,
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    type: 'stock',
    currentPrice: 140.93,
    previousClose: 139.70,
    change: 1.23,
    changePercent: 0.88,
    volume: 28901000,
    marketCap: 1760000000000,
    pe: 27.3,
    high52Week: 153.78,
    low52Week: 83.34,
    sentiment: 'neutral',
    aiAccuracy: 85.7,
    priceHistory: [
      { date: '2024-01-01', open: 137.50, high: 138.80, low: 137.00, close: 138.20, volume: 27000000 },
      { date: '2024-01-02', open: 138.20, high: 139.50, low: 137.80, close: 139.00, volume: 27800000 },
      { date: '2024-01-03', open: 139.00, high: 140.20, low: 138.80, close: 139.70, volume: 28200000 },
      { date: '2024-01-04', open: 139.70, high: 141.50, low: 139.50, close: 140.93, volume: 28901000 }
    ],
    alerts: []
  }
];

export const crypto = [
  {
    id: 6,
    symbol: 'BTC',
    name: 'Bitcoin',
    type: 'crypto',
    currentPrice: 43256.78,
    previousClose: 42890.50,
    change: 366.28,
    changePercent: 0.85,
    volume: 28456000000,
    marketCap: 847000000000,
    circulatingSupply: 19578000,
    sentiment: 'bullish',
    aiAccuracy: 79.5,
    priceHistory: [
      { date: '2024-01-01', open: 42000.00, high: 42500.00, low: 41800.00, close: 42300.00, volume: 26000000000 },
      { date: '2024-01-02', open: 42300.00, high: 42800.00, low: 42100.00, close: 42600.00, volume: 27000000000 },
      { date: '2024-01-03', open: 42600.00, high: 43100.00, low: 42500.00, close: 42890.50, volume: 27500000000 },
      { date: '2024-01-04', open: 42890.50, high: 43500.00, low: 42800.00, close: 43256.78, volume: 28456000000 }
    ],
    alerts: [
      { type: 'support_level', message: 'Strong support at $42,000', severity: 'low' }
    ]
  },
  {
    id: 7,
    symbol: 'ETH',
    name: 'Ethereum',
    type: 'crypto',
    currentPrice: 2287.45,
    previousClose: 2245.30,
    change: 42.15,
    changePercent: 1.88,
    volume: 15678000000,
    marketCap: 275000000000,
    circulatingSupply: 120234000,
    sentiment: 'very_bullish',
    aiAccuracy: 81.2,
    priceHistory: [
      { date: '2024-01-01', open: 2200.00, high: 2230.00, low: 2190.00, close: 2215.00, volume: 14000000000 },
      { date: '2024-01-02', open: 2215.00, high: 2240.00, low: 2210.00, close: 2230.00, volume: 14800000000 },
      { date: '2024-01-03', open: 2230.00, high: 2250.00, low: 2225.00, close: 2245.30, volume: 15200000000 },
      { date: '2024-01-04', open: 2245.30, high: 2295.00, low: 2240.00, close: 2287.45, volume: 15678000000 }
    ],
    alerts: [
      { type: 'momentum', message: 'Strong upward momentum detected', severity: 'medium' }
    ]
  },
  {
    id: 8,
    symbol: 'SOL',
    name: 'Solana',
    type: 'crypto',
    currentPrice: 98.76,
    previousClose: 95.40,
    change: 3.36,
    changePercent: 3.52,
    volume: 3456000000,
    marketCap: 42000000000,
    circulatingSupply: 425348000,
    sentiment: 'bullish',
    aiAccuracy: 76.8,
    priceHistory: [
      { date: '2024-01-01', open: 92.00, high: 93.50, low: 91.50, close: 93.20, volume: 3000000000 },
      { date: '2024-01-02', open: 93.20, high: 94.80, low: 92.80, close: 94.50, volume: 3200000000 },
      { date: '2024-01-03', open: 94.50, high: 96.00, low: 94.00, close: 95.40, volume: 3300000000 },
      { date: '2024-01-04', open: 95.40, high: 99.50, low: 95.00, close: 98.76, volume: 3456000000 }
    ],
    alerts: [
      { type: 'breakout', message: 'Breaking resistance at $95', severity: 'high' }
    ]
  }
];

export const newsArticles = [
  {
    id: 1,
    title: 'Apple Announces Revolutionary AI Features for iPhone',
    summary: 'Apple unveils groundbreaking AI capabilities that could transform mobile computing, featuring advanced on-device processing.',
    category: 'Technology',
    source: 'Tech News Daily',
    timestamp: '2024-01-04T10:30:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 92.5,
    affectedAssets: ['AAPL'],
    url: 'https://example.com/news/1',
    imageUrl: 'https://picsum.photos/seed/news1/400/300'
  },
  {
    id: 2,
    title: 'Tesla Hits Production Milestone with 2 Million Vehicles',
    summary: 'Tesla achieves historic production milestone, reinforcing its position as the leading electric vehicle manufacturer.',
    category: 'Automotive',
    source: 'Auto Industry Report',
    timestamp: '2024-01-04T09:15:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 88.3,
    affectedAssets: ['TSLA'],
    url: 'https://example.com/news/2',
    imageUrl: 'https://picsum.photos/seed/news2/400/300'
  },
  {
    id: 3,
    title: 'NVIDIA Expands AI Chip Manufacturing Capacity',
    summary: 'NVIDIA announces new manufacturing facilities to meet surging demand for AI processors.',
    category: 'Technology',
    source: 'Silicon Valley Times',
    timestamp: '2024-01-04T08:45:00Z',
    sentiment: 'positive',
    impact: 'medium',
    aiCoreAccuracy: 90.1,
    affectedAssets: ['NVDA'],
    url: 'https://example.com/news/3',
    imageUrl: 'https://picsum.photos/seed/news3/400/300'
  },
  {
    id: 4,
    title: 'Microsoft Cloud Revenue Exceeds Expectations',
    summary: 'Microsoft reports stronger than expected cloud computing revenue, driven by Azure growth.',
    category: 'Technology',
    source: 'Financial Times',
    timestamp: '2024-01-04T07:30:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 89.7,
    affectedAssets: ['MSFT'],
    url: 'https://example.com/news/4',
    imageUrl: 'https://picsum.photos/seed/news4/400/300'
  },
  {
    id: 5,
    title: 'Google Faces Regulatory Challenges in EU Markets',
    summary: 'European regulators intensify scrutiny of Google\'s market practices, potentially impacting operations.',
    category: 'Regulatory',
    source: 'Reuters',
    timestamp: '2024-01-03T16:20:00Z',
    sentiment: 'negative',
    impact: 'medium',
    aiCoreAccuracy: 85.4,
    affectedAssets: ['GOOGL'],
    url: 'https://example.com/news/5',
    imageUrl: 'https://picsum.photos/seed/news5/400/300'
  },
  {
    id: 6,
    title: 'Bitcoin ETF Approval Sparks Institutional Interest',
    summary: 'SEC approval of Bitcoin spot ETFs leads to surge in institutional investment interest.',
    category: 'Cryptocurrency',
    source: 'Crypto News Network',
    timestamp: '2024-01-03T14:00:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 87.9,
    affectedAssets: ['BTC'],
    url: 'https://example.com/news/6',
    imageUrl: 'https://picsum.photos/seed/news6/400/300'
  },
  {
    id: 7,
    title: 'Ethereum Network Upgrade Enhances Scalability',
    summary: 'Latest Ethereum upgrade significantly improves transaction throughput and reduces gas fees.',
    category: 'Cryptocurrency',
    source: 'Blockchain Today',
    timestamp: '2024-01-03T12:30:00Z',
    sentiment: 'positive',
    impact: 'medium',
    aiCoreAccuracy: 86.2,
    affectedAssets: ['ETH'],
    url: 'https://example.com/news/7',
    imageUrl: 'https://picsum.photos/seed/news7/400/300'
  },
  {
    id: 8,
    title: 'Solana DeFi Ecosystem Reaches $5B in Total Value Locked',
    summary: 'Solana\'s DeFi platforms experience rapid growth, attracting developers and users.',
    category: 'Cryptocurrency',
    source: 'DeFi Weekly',
    timestamp: '2024-01-03T11:00:00Z',
    sentiment: 'positive',
    impact: 'medium',
    aiCoreAccuracy: 83.6,
    affectedAssets: ['SOL'],
    url: 'https://example.com/news/8',
    imageUrl: 'https://picsum.photos/seed/news8/400/300'
  },
  {
    id: 9,
    title: 'Federal Reserve Signals Potential Rate Cuts',
    summary: 'Fed officials hint at possible interest rate reductions in coming months, boosting market sentiment.',
    category: 'Economic',
    source: 'Wall Street Journal',
    timestamp: '2024-01-02T15:45:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 91.3,
    affectedAssets: ['AAPL', 'TSLA', 'NVDA', 'MSFT', 'GOOGL', 'BTC', 'ETH'],
    url: 'https://example.com/news/9',
    imageUrl: 'https://picsum.photos/seed/news9/400/300'
  },
  {
    id: 10,
    title: 'Tech Stocks Rally on Strong Earnings Reports',
    summary: 'Major technology companies report better than expected quarterly earnings, driving market gains.',
    category: 'Market',
    source: 'Bloomberg',
    timestamp: '2024-01-02T14:20:00Z',
    sentiment: 'positive',
    impact: 'high',
    aiCoreAccuracy: 88.9,
    affectedAssets: ['AAPL', 'MSFT', 'NVDA', 'GOOGL'],
    url: 'https://example.com/news/10',
    imageUrl: 'https://picsum.photos/seed/news10/400/300'
  },
  {
    id: 11,
    title: 'Global Supply Chain Concerns Ease',
    summary: 'Improvements in global logistics networks reduce supply chain bottlenecks affecting tech manufacturers.',
    category: 'Economic',
    source: 'International Trade News',
    timestamp: '2024-01-02T10:00:00Z',
    sentiment: 'positive',
    impact: 'medium',
    aiCoreAccuracy: 84.7,
    affectedAssets: ['AAPL', 'TSLA', 'NVDA'],
    url: 'https://example.com/news/11',
    imageUrl: 'https://picsum.photos/seed/news11/400/300'
  },
  {
    id: 12,
    title: 'Cybersecurity Threats Target Major Corporations',
    summary: 'Increased cyberattack attempts on large tech firms raise concerns about data security.',
    category: 'Security',
    source: 'Cyber Defense Weekly',
    timestamp: '2024-01-01T16:30:00Z',
    sentiment: 'negative',
    impact: 'low',
    aiCoreAccuracy: 82.1,
    affectedAssets: ['MSFT', 'GOOGL'],
    url: 'https://example.com/news/12',
    imageUrl: 'https://picsum.photos/seed/news12/400/300'
  },
  {
    id: 13,
    title: 'AI Regulation Debate Intensifies in Congress',
    summary: 'Lawmakers propose new frameworks for AI governance, potentially affecting tech companies.',
    category: 'Regulatory',
    source: 'Policy Watch',
    timestamp: '2024-01-01T13:15:00Z',
    sentiment: 'neutral',
    impact: 'medium',
    aiCoreAccuracy: 79.8,
    affectedAssets: ['AAPL', 'MSFT', 'GOOGL', 'NVDA'],
    url: 'https://example.com/news/13',
    imageUrl: 'https://picsum.photos/seed/news13/400/300'
  }
];

export const alerts = [
  {
    id: 1,
    assetSymbol: 'AAPL',
    type: 'price_target',
    severity: 'medium',
    message: 'Approaching resistance at $180',
    timestamp: '2024-01-04T11:00:00Z',
    aiCoreAccuracy: 87.5,
    isActive: true,
    threshold: 180.00,
    currentValue: 178.25
  },
  {
    id: 2,
    assetSymbol: 'NVDA',
    type: 'breakout',
    severity: 'high',
    message: 'Breaking out above $490 resistance',
    timestamp: '2024-01-04T10:45:00Z',
    aiCoreAccuracy: 91.2,
    isActive: true,
    threshold: 490.00,
    currentValue: 495.22
  },
  {
    id: 3,
    assetSymbol: 'BTC',
    type: 'support_level',
    severity: 'low',
    message: 'Strong support at $42,000',
    timestamp: '2024-01-04T10:30:00Z',
    aiCoreAccuracy: 79.5,
    isActive: true,
    threshold: 42000.00,
    currentValue: 43256.78
  },
  {
    id: 4,
    assetSymbol: 'ETH',
    type: 'momentum',
    severity: 'medium',
    message: 'Strong upward momentum detected',
    timestamp: '2024-01-04T10:15:00Z',
    aiCoreAccuracy: 81.2,
    isActive: true,
    threshold: null,
    currentValue: 2287.45
  },
  {
    id: 5,
    assetSymbol: 'SOL',
    type: 'breakout',
    severity: 'high',
    message: 'Breaking resistance at $95',
    timestamp: '2024-01-04T10:00:00Z',
    aiCoreAccuracy: 76.8,
    isActive: true,
    threshold: 95.00,
    currentValue: 98.76
  },
  {
    id: 6,
    assetSymbol: 'TSLA',
    type: 'volume_spike',
    severity: 'low',
    message: 'Volume 25% above average',
    timestamp: '2024-01-04T09:45:00Z',
    aiCoreAccuracy: 82.3,
    isActive: true,
    threshold: 79000000,
    currentValue: 98765000
  },
  {
    id: 7,
    assetSymbol: 'MSFT',
    type: 'earnings',
    severity: 'critical',
    message: 'Earnings report scheduled for tomorrow',
    timestamp: '2024-01-04T09:00:00Z',
    aiCoreAccuracy: 89.1,
    isActive: true,
    threshold: null,
    currentValue: 378.91
  },
  {
    id: 8,
    assetSymbol: 'GOOGL',
    type: 'regulatory',
    severity: 'high',
    message: 'EU regulatory hearing scheduled',
    timestamp: '2024-01-03T16:30:00Z',
    aiCoreAccuracy: 85.4,
    isActive: true,
    threshold: null,
    currentValue: 140.93
  },
  {
    id: 9,
    assetSymbol: 'BTC',
    type: 'whale_movement',
    severity: 'medium',
    message: 'Large whale transfer detected',
    timestamp: '2024-01-03T14:20:00Z',
    aiCoreAccuracy: 79.5,
    isActive: true,
    threshold: null,
    currentValue: 43256.78
  },
  {
    id: 10,
    assetSymbol: 'AAPL',
    type: 'analyst_upgrade',
    severity: 'low',
    message: 'Multiple analyst upgrades this week',
    timestamp: '2024-01-03T11:00:00Z',
    aiCoreAccuracy: 87.5,
    isActive: true,
    threshold: null,
    currentValue: 178.25
  },
  {
    id: 11,
    assetSymbol: 'NVDA',
    type: 'supply_chain',
    severity: 'critical',
    message: 'Manufacturing bottleneck detected',
    timestamp: '2024-01-02T15:30:00Z',
    aiCoreAccuracy: 91.2,
    isActive: false,
    threshold: null,
    currentValue: 495.22
  }
];

export const portfolio = {
  totalValue: 245678.90,
  cash: 12345.67,
  invested: 233333.23,
  dayChange: 4567.89,
  dayChangePercent: 1.89,
  holdings: [
    {
      symbol: 'AAPL',
      shares: 100,
      avgCost: 165.50,
      currentPrice: 178.25,
      totalValue: 17825.00,
      totalCost: 16550.00,
      gain: 1275.00,
      gainPercent: 7.70,
      allocation: 7.26
    },
    {
      symbol: 'TSLA',
      shares: 50,
      avgCost: 220.00,
      currentPrice: 242.84,
      totalValue: 12142.00,
      totalCost: 11000.00,
      gain: 1142.00,
      gainPercent: 10.38,
      allocation: 4.94
    },
    {
      symbol: 'NVDA',
      shares: 75,
      avgCost: 450.00,
      currentPrice: 495.22,
      totalValue: 37141.50,
      totalCost: 33750.00,
      gain: 3391.50,
      gainPercent: 10.05,
      allocation: 15.12
    },
    {
      symbol: 'MSFT',
      shares: 80,
      avgCost: 360.00,
      currentPrice: 378.91,
      totalValue: 30312.80,
      totalCost: 28800.00,
      gain: 1512.80,
      gainPercent: 5.25,
      allocation: 12.34
    },
    {
      symbol: 'BTC',
      shares: 2.5,
      avgCost: 40000.00,
      currentPrice: 43256.78,
      totalValue: 108141.95,
      totalCost: 100000.00,
      gain: 8141.95,
      gainPercent: 8.14,
      allocation: 44.02
    },
    {
      symbol: 'ETH',
      shares: 15,
      avgCost: 2100.00,
      currentPrice: 2287.45,
      totalValue: 34311.75,
      totalCost: 31500.00,
      gain: 2811.75,
      gainPercent: 8.93,
      allocation: 13.97
    }
  ],
  performance: {
    day: { value: 4567.89, percent: 1.89 },
    week: { value: 8234.56, percent: 3.47 },
    month: { value: 15678.90, percent: 6.82 },
    year: { value: 45678.90, percent: 22.85 },
    allTime: { value: 45678.90, percent: 22.85 }
  }
};

export const marketEvents = [
  {
    id: 1,
    title: 'Federal Reserve FOMC Meeting',
    date: '2024-01-31T14:00:00Z',
    type: 'economic',
    importance: 'high',
    description: 'Federal Reserve announces interest rate decision',
    affectedAssets: ['AAPL', 'TSLA', 'NVDA', 'MSFT', 'GOOGL', 'BTC', 'ETH'],
    aiPrediction: 'Rates likely to remain unchanged',
    aiConfidence: 85.5
  },
  {
    id: 2,
    title: 'MSFT Quarterly Earnings',
    date: '2024-01-23T16:30:00Z',
    type: 'earnings',
    importance: 'high',
    description: 'Microsoft Q4 2023 earnings report',
    affectedAssets: ['MSFT'],
    aiPrediction: 'Expected to beat estimates',
    aiConfidence: 89.1
  },
  {
    id: 3,
    title: 'AAPL Product Launch Event',
    date: '2024-01-15T10:00:00Z',
    type: 'corporate',
    importance: 'medium',
    description: 'Apple announces new AI features',
    affectedAssets: ['AAPL'],
    aiPrediction: 'Positive market reaction expected',
    aiConfidence: 87.5
  },
  {
    id: 4,
    title: 'Bitcoin Halving',
    date: '2024-04-20T00:00:00Z',
    type: 'crypto',
    importance: 'critical',
    description: 'Bitcoin mining reward halving event',
    affectedAssets: ['BTC'],
    aiPrediction: 'Historical pattern suggests price increase',
    aiConfidence: 75.2
  },
  {
    id: 5,
    title: 'Ethereum Dencun Upgrade',
    date: '2024-03-13T12:00:00Z',
    type: 'crypto',
    importance: 'high',
    description: 'Major Ethereum network upgrade',
    affectedAssets: ['ETH'],
    aiPrediction: 'Enhanced scalability to boost adoption',
    aiConfidence: 82.7
  }
];

export const influencers = [
  {
    id: 1,
    name: 'Sarah Chen',
    handle: '@sarahchen',
    platform: 'Twitter',
    followers: 1250000,
    specialty: 'Technology Stocks',
    accuracy: 87.5,
    recentPredictions: [
      { asset: 'AAPL', prediction: 'bullish', confidence: 90, outcome: 'correct' },
      { asset: 'NVDA', prediction: 'bullish', confidence: 85, outcome: 'correct' }
    ]
  },
  {
    id: 2,
    name: 'Michael Torres',
    handle: '@mtorres_crypto',
    platform: 'Twitter',
    followers: 980000,
    specialty: 'Cryptocurrency',
    accuracy: 79.3,
    recentPredictions: [
      { asset: 'BTC', prediction: 'bullish', confidence: 80, outcome: 'correct' },
      { asset: 'ETH', prediction: 'bullish', confidence: 75, outcome: 'correct' }
    ]
  },
  {
    id: 3,
    name: 'Emily Roberts',
    handle: '@emilyinvests',
    platform: 'YouTube',
    followers: 2100000,
    specialty: 'Market Analysis',
    accuracy: 84.2,
    recentPredictions: [
      { asset: 'MSFT', prediction: 'bullish', confidence: 88, outcome: 'pending' },
      { asset: 'GOOGL', prediction: 'neutral', confidence: 70, outcome: 'correct' }
    ]
  }
];

export const aiInsights = [
  {
    id: 1,
    type: 'trend_analysis',
    title: 'AI Chip Demand Surge',
    description: 'Machine learning models detect accelerating demand for AI processors, particularly benefiting NVDA.',
    confidence: 91.2,
    timeframe: '3-6 months',
    affectedAssets: ['NVDA'],
    sentiment: 'very_positive',
    createdAt: '2024-01-04T09:00:00Z'
  },
  {
    id: 2,
    type: 'risk_assessment',
    title: 'Regulatory Risk for Tech Giants',
    description: 'AI analysis indicates increasing regulatory pressure on large tech companies in international markets.',
    confidence: 85.4,
    timeframe: '6-12 months',
    affectedAssets: ['GOOGL', 'AAPL', 'MSFT'],
    sentiment: 'negative',
    createdAt: '2024-01-04T08:30:00Z'
  },
  {
    id: 3,
    type: 'opportunity',
    title: 'Bitcoin Institutional Adoption',
    description: 'Pattern recognition suggests accelerating institutional adoption following ETF approval.',
    confidence: 87.9,
    timeframe: '1-3 months',
    affectedAssets: ['BTC'],
    sentiment: 'positive',
    createdAt: '2024-01-04T08:00:00Z'
  },
  {
    id: 4,
    type: 'correlation',
    title: 'Fed Policy Impact on Tech',
    description: 'Strong correlation detected between Fed rate signals and tech stock performance.',
    confidence: 91.3,
    timeframe: 'immediate',
    affectedAssets: ['AAPL', 'TSLA', 'NVDA', 'MSFT', 'GOOGL'],
    sentiment: 'neutral',
    createdAt: '2024-01-04T07:30:00Z'
  }
];

export const allAssets = [...stocks, ...crypto];
