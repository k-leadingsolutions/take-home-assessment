// Mock data for the Pulse Full Stack Assessment

export const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currentPrice: 178.25,
    change: 2.45,
    changePercent: 1.39,
    marketCap: 2800000000000,
    sector: 'Technology',
    summary: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide.',
    keyMetrics: {
      'P/E Ratio': '28.5',
      'Volume': '52.3M',
      '52 Week High': '$199.62',
      '52 Week Low': '$124.17'
    }
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    currentPrice: 142.50,
    change: -0.85,
    changePercent: -0.59,
    marketCap: 1800000000000,
    sector: 'Technology',
    summary: 'Alphabet Inc. offers various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin America.',
    keyMetrics: {
      'P/E Ratio': '25.3',
      'Volume': '28.1M',
      '52 Week High': '$151.55',
      '52 Week Low': '$102.21'
    }
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    currentPrice: 412.75,
    change: 5.20,
    changePercent: 1.28,
    marketCap: 3100000000000,
    sector: 'Technology',
    summary: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide.',
    keyMetrics: {
      'P/E Ratio': '36.8',
      'Volume': '24.5M',
      '52 Week High': '$425.00',
      '52 Week Low': '$309.45'
    }
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    currentPrice: 248.90,
    change: -3.15,
    changePercent: -1.25,
    marketCap: 780000000000,
    sector: 'Automotive',
    summary: 'Tesla, Inc. designs, develops, manufactures, leases, and sells electric vehicles, and energy generation and storage systems.',
    keyMetrics: {
      'P/E Ratio': '68.4',
      'Volume': '112.3M',
      '52 Week High': '$299.29',
      '52 Week Low': '$138.80'
    }
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com, Inc.',
    currentPrice: 178.35,
    change: 1.25,
    changePercent: 0.71,
    marketCap: 1850000000000,
    sector: 'Consumer Cyclical',
    summary: 'Amazon.com, Inc. engages in the retail sale of consumer products and subscriptions through online and physical stores.',
    keyMetrics: {
      'P/E Ratio': '72.1',
      'Volume': '45.2M',
      '52 Week High': '$191.70',
      '52 Week Low': '$118.35'
    }
  }
];

export const mockCrypto = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    currentPrice: 43250.50,
    change: 1250.30,
    changePercent: 2.98,
    marketCap: 850000000000,
    market: 'Cryptocurrency',
    description: 'Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.',
    keyMetrics: {
      'Market Rank': '#1',
      '24h Volume': '$28.5B',
      'Circulating Supply': '19.6M BTC',
      'All Time High': '$69,045'
    }
  },
  {
    symbol: 'ETH',
    name: 'Ethereum',
    currentPrice: 2285.75,
    change: -45.20,
    changePercent: -1.94,
    marketCap: 275000000000,
    market: 'Cryptocurrency',
    description: 'Ethereum is a decentralized platform that runs smart contracts: applications that run exactly as programmed.',
    keyMetrics: {
      'Market Rank': '#2',
      '24h Volume': '$12.3B',
      'Circulating Supply': '120.4M ETH',
      'All Time High': '$4,891'
    }
  },
  {
    symbol: 'BNB',
    name: 'Binance Coin',
    currentPrice: 312.40,
    change: 8.65,
    changePercent: 2.85,
    marketCap: 48000000000,
    market: 'Cryptocurrency',
    description: 'Binance Coin is the cryptocurrency issued by the Binance exchange and trades with the BNB symbol.',
    keyMetrics: {
      'Market Rank': '#4',
      '24h Volume': '$1.2B',
      'Circulating Supply': '153.9M BNB',
      'All Time High': '$686.31'
    }
  }
];

export const mockNews = [
  {
    id: 1,
    title: 'Tech Stocks Rally on Strong Earnings Reports',
    source: 'Financial Times',
    summary: 'Major technology companies reported better-than-expected quarterly earnings, driving a rally in tech stocks across the market.',
    publishedAt: '2024-01-20T10:30:00Z',
    category: 'Market News'
  },
  {
    id: 2,
    title: 'Federal Reserve Holds Interest Rates Steady',
    source: 'Reuters',
    summary: 'The Federal Reserve announced it will maintain current interest rates, citing progress in controlling inflation.',
    publishedAt: '2024-01-20T09:15:00Z',
    category: 'Economic Policy'
  },
  {
    id: 3,
    title: 'Cryptocurrency Market Sees Renewed Interest',
    source: 'Bloomberg',
    summary: 'Bitcoin and Ethereum prices surge as institutional investors show renewed interest in digital assets.',
    publishedAt: '2024-01-19T16:45:00Z',
    category: 'Crypto'
  },
  {
    id: 4,
    title: 'Green Energy Stocks Gain Momentum',
    source: 'CNBC',
    summary: 'Renewable energy companies see stock prices rise following new government incentives for clean energy.',
    publishedAt: '2024-01-19T14:20:00Z',
    category: 'Energy'
  },
  {
    id: 5,
    title: 'Global Markets React to Economic Data',
    source: 'Wall Street Journal',
    summary: 'International markets show mixed reactions to latest economic indicators from major economies.',
    publishedAt: '2024-01-19T08:00:00Z',
    category: 'Global Markets'
  }
];

export const mockPortfolio = {
  totalValue: 125000.50,
  totalGain: 15250.30,
  totalGainPercent: 13.89,
  holdings: [
    {
      id: 1,
      symbol: 'AAPL',
      name: 'Apple Inc.',
      type: 'stock',
      quantity: 100,
      avgCost: 150.00,
      currentPrice: 178.25,
      totalValue: 17825.00,
      gain: 2825.00,
      gainPercent: 18.83
    },
    {
      id: 2,
      symbol: 'BTC',
      name: 'Bitcoin',
      type: 'crypto',
      quantity: 0.5,
      avgCost: 40000.00,
      currentPrice: 43250.50,
      totalValue: 21625.25,
      gain: 1625.25,
      gainPercent: 8.13
    },
    {
      id: 3,
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      type: 'stock',
      quantity: 75,
      avgCost: 380.00,
      currentPrice: 412.75,
      totalValue: 30956.25,
      gain: 2456.25,
      gainPercent: 8.62
    },
    {
      id: 4,
      symbol: 'ETH',
      name: 'Ethereum',
      type: 'crypto',
      quantity: 10,
      avgCost: 2200.00,
      currentPrice: 2285.75,
      totalValue: 22857.50,
      gain: 857.50,
      gainPercent: 3.90
    },
    {
      id: 5,
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      type: 'stock',
      quantity: 150,
      avgCost: 135.00,
      currentPrice: 142.50,
      totalValue: 21375.00,
      gain: 1125.00,
      gainPercent: 5.56
    }
  ]
};

export const mockAlerts = [
  {
    id: 1,
    severity: 'info',
    message: 'AAPL reached your target price of $178',
    timestamp: '2024-01-20T10:00:00Z'
  },
  {
    id: 2,
    severity: 'warning',
    message: 'High volatility detected in crypto markets',
    timestamp: '2024-01-20T09:30:00Z'
  },
  {
    id: 3,
    severity: 'success',
    message: 'Portfolio gained 2.5% today',
    timestamp: '2024-01-20T08:00:00Z'
  }
];
