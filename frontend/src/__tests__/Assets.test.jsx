import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import Assets from '../pages/Assets'
import * as api from '../services/api'
import { MemoryRouter } from 'react-router-dom'

vi.mock('../services/api')

describe('Assets page', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('renders asset cards from API', async () => {
    const stocks = [{ id: 's1', symbol: 'AAPL', name: 'Apple', currentPrice: 150, changePercent: 1.2 }]
    const cryptos = [{ id: 'c1', symbol: 'BTC', name: 'Bitcoin', currentPrice: 30000, changePercent: -2.5 }]
    api.getStocks.mockResolvedValue({ data: stocks })
    api.getCrypto.mockResolvedValue({ data: cryptos })

    render(
      <MemoryRouter>
        <Assets />
      </MemoryRouter>
    )

    await waitFor(() => expect(screen.getByText(/AAPL/i)).toBeInTheDocument())
    expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument()
  })
})
