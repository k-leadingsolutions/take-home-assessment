import React from 'react';
import { render, screen } from '@testing-library/react';
import Ticker from '../components/Ticker';

describe('Ticker', () => {
  it('renders first asset and accessible label', () => {
    const assets = [{ assetId: 'AAPL', change: 2.5, changePercent: 1.2 }];
    render(<Ticker assets={assets} prefersReducedMotion={true} />);
    const el = screen.getByLabelText(/Top holdings ticker/i);
    expect(el).toBeInTheDocument();
    expect(screen.getByText(/AAPL/)).toBeInTheDocument();
  });
});
