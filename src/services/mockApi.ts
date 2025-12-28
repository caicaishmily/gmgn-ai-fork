// Mock API service for development
import { mockWalletData } from '../data/mockData'
import { User, Wallet, Transaction, MarketData, CopyTradeConfig } from '../types'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export const mockApi = {
  // Auth APIs
  async login(email: string, password?: string) {
    await delay(500)
    return {
      success: true,
      user: {
        id: 1,
        email,
        name: email.split('@')[0],
        token: 'mock-token-' + Date.now(),
      }
    }
  },

  async signUp(email: string, inviteCode?: string) {
    await delay(500)
    return {
      success: true,
      user: {
        id: 2,
        email,
        name: email.split('@')[0],
        inviteCode,
        token: 'mock-token-' + Date.now(),
      }
    }
  },

  async socialLogin(provider) {
    await delay(500)
    return {
      success: true,
      user: {
        id: 3,
        email: `${provider}@example.com`,
        name: provider,
        provider,
        token: 'mock-token-' + Date.now(),
      }
    }
  },

  // Wallet APIs
  async getWalletOverview(timeRange: string = '1D') {
    await delay(300)
    return {
      success: true,
      data: {
        totalBalance: 1250.50,
        balanceChange: 5.2,
        solBalance: 42.5,
        usdValue: 8925.00,
        transactions: 156,
        winRate: 72.5,
        totalPnL: 1245.30,
        timeRange,
      }
    }
  },

  async getTransactions(timeRange: string = '1D', page: number = 1) {
    await delay(300)
    const transactions = [
      { id: 1, type: 'buy', token: 'SOL', amount: 10, price: 210, time: '2m ago', status: 'success' },
      { id: 2, type: 'sell', token: 'BTC', amount: 0.05, price: 45200, time: '15m ago', status: 'success' },
      { id: 3, type: 'buy', token: 'ETH', amount: 2, price: 3200, time: '1h ago', status: 'success' },
      { id: 4, type: 'sell', token: 'SOL', amount: 5, price: 208, time: '3h ago', status: 'success' },
      { id: 5, type: 'buy', token: 'USDC', amount: 1000, price: 1, time: '5h ago', status: 'success' },
    ]
    return {
      success: true,
      data: transactions,
      pagination: {
        page,
        total: 50,
        perPage: 10,
      }
    }
  },

  // CopyTrade APIs
  async getWalletRankings(filters: { search?: string } = {}) {
    await delay(400)
    let data = [...mockWalletData]
    
    // Apply filters
    if (filters.search) {
      data = data.filter(w => 
        w.name.toLowerCase().includes(filters.search.toLowerCase())
      )
    }
    
    return {
      success: true,
      data,
      total: data.length,
    }
  },

  async createCopyTrade(config: CopyTradeConfig) {
    await delay(600)
    return {
      success: true,
      data: {
        id: Date.now(),
        ...config,
        status: 'active',
        createdAt: new Date().toISOString(),
      }
    }
  },

  // Market Data APIs
  async getMarketData(category: string = 'All') {
    await delay(300)
    const marketData = [
      { id: 1, symbol: 'SOL', name: 'Solana', price: 210.45, change: 5.2, volume: '1.2B', marketCap: '95.8B' },
      { id: 2, symbol: 'BTC', name: 'Bitcoin', price: 45230.50, change: 2.1, volume: '28.5B', marketCap: '887.5B' },
      { id: 3, symbol: 'ETH', name: 'Ethereum', price: 3205.75, change: 3.8, volume: '12.3B', marketCap: '385.2B' },
      { id: 4, symbol: 'BNB', name: 'Binance Coin', price: 315.20, change: -1.5, volume: '1.8B', marketCap: '47.5B' },
      { id: 5, symbol: 'XRP', name: 'Ripple', price: 0.625, change: 4.3, volume: '2.1B', marketCap: '34.2B' },
      { id: 6, symbol: 'ADA', name: 'Cardano', price: 0.485, change: -2.1, volume: '450M', marketCap: '17.1B' },
      { id: 7, symbol: 'DOGE', name: 'Dogecoin', price: 0.095, change: 6.7, volume: '890M', marketCap: '13.5B' },
      { id: 8, symbol: 'MATIC', name: 'Polygon', price: 0.925, change: 1.2, volume: '520M', marketCap: '9.2B' },
    ]
    
    let filtered = marketData
    if (category === 'Top Gainers') {
      filtered = [...marketData].sort((a, b) => b.change - a.change)
    } else if (category === 'Top Losers') {
      filtered = [...marketData].filter(c => c.change < 0).sort((a, b) => a.change - b.change)
    }
    
    return {
      success: true,
      data: filtered,
    }
  },
}

export default mockApi

