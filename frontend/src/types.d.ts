// Lightweight TypeScript declaration file to help editors and tooling
// This file doesn't switch the project to TypeScript, but provides shapes for JSDoc and IDEs.

declare module '*.svg';

declare interface Asset {
  symbol: string;
  name?: string;
  sector?: string;
  currentPrice?: number;
  changePercent?: number;
  marketCap?: number;
  alerts?: Array<any>;
  [key: string]: any;
}

declare interface Portfolio {
  userId?: string;
  totalValue?: number;
  totalChange?: number;
  totalChangePercent?: number;
  assets?: Array<Asset>;
  watchlist?: string[];
}

declare interface PortfolioPerformance {
  totalValue?: number;
  totalChange?: number;
  totalChangePercent?: number;
  bestPerformer?: Asset;
  worstPerformer?: Asset;
  assetAllocation?: Array<{ assetId: string; percentage: number; value: number }>;
  recentValues?: number[];
}

export {};
