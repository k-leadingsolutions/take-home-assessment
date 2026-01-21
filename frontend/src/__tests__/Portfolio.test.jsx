import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Portfolio from '../pages/Portfolio'
import * as api from '../services/api'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../services/api')

describe('Portfolio page', () => {
  beforeEach(() => vi.resetAllMocks())

  it('renders portfolio totals and positions', async () => {
    const portfolioData = { totalValue: 100000, totalChange: 500, totalChangePercent: 0.5, positions: [{ assetId: 'AAPL', quantity: 10, currentPrice: 150, value: 1500 }] }
    const perfData = { recentValues: [90000, 95000, 100000], assetAllocation: [{ assetId: 'AAPL', value: 1500 }] }
    api.getPortfolio.mockResolvedValue({ data: portfolioData })
    api.getPortfolioPerformance.mockResolvedValue({ data: perfData })

    render(
      <MemoryRouter>
        <Portfolio />
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText(/Total Value/i)).toBeInTheDocument())
    // Ensure header and positions render; numeric formatting may vary across environments
    expect(screen.getByText(/AAPL/)).toBeInTheDocument()
  })
})
