export interface User {
  id?: number
  email: string
  name: string
  inviteCode?: string
  provider?: string
}

export interface AuthContextType {
  isAuthenticated: boolean
  user: User | null
  login: (userData: User) => void
  logout: () => void
  signUp: (userData: User) => void
  showLogin: boolean
  setShowLogin: (show: boolean) => void
  showSignUp: boolean
  setShowSignUp: (show: boolean) => void
}

export interface Wallet {
  id: number
  name: string
  solBalance: number
  pnl: number
  pnlUsd: number
  winRate: number
  txs: string
  volume: number
  netInflow: number
  tracked: number
  renamed: number
  tags?: string[]
  address?: string
}

export interface CopyTradeConfig {
  walletAddress: string
  buyMethod: 'Max Buy Amount' | 'Fixed Buy' | 'Fixed Ratio'
  sellMethod: 'Copy Sell' | 'Not Sell' | 'TP & SL' | 'Adv Strategy'
  amount: number
}

export interface Transaction {
  id: number
  type: 'buy' | 'sell'
  token: string
  amount: number
  price: number
  time: string
  status: string
}

export interface MarketData {
  id: number
  symbol: string
  name: string
  price: number
  change: number
  volume: string
  marketCap: string
}

