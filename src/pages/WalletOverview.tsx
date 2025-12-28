import { useState } from 'react'
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function WalletOverview() {
  const [timeRange, setTimeRange] = useState('1D')

  const walletStats = {
    totalBalance: 1250.50,
    balanceChange: 5.2,
    solBalance: 42.5,
    usdValue: 8925.00,
    transactions: 156,
    winRate: 72.5,
    totalPnL: 1245.30,
  }

  const recentTransactions = [
    { id: 1, type: 'buy', token: 'SOL', amount: 10, price: 210, time: '2m ago', status: 'success' },
    { id: 2, type: 'sell', token: 'BTC', amount: 0.05, price: 45200, time: '15m ago', status: 'success' },
    { id: 3, type: 'buy', token: 'ETH', amount: 2, price: 3200, time: '1h ago', status: 'success' },
    { id: 4, type: 'sell', token: 'SOL', amount: 5, price: 208, time: '3h ago', status: 'success' },
    { id: 5, type: 'buy', token: 'USDC', amount: 1000, price: 1, time: '5h ago', status: 'success' },
  ]

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6">Wallet Overview</h1>

      {/* Time Range Selector */}
      <div className="flex gap-2 mb-6">
        {['1D', '7D', '30D', 'All'].map((range) => (
          <button
            key={range}
            onClick={() => setTimeRange(range)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              timeRange === range
                ? 'bg-gmgn-green text-white'
                : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
            }`}
          >
            {range}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-gmgn-gray rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-2">Total Balance</div>
          <div className="text-2xl font-semibold mb-1">${walletStats.totalBalance.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-green-400 text-sm">
            <TrendingUp size={16} />
            <span>+{walletStats.balanceChange}%</span>
          </div>
        </div>

        <div className="bg-gmgn-gray rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-2">SOL Balance</div>
          <div className="text-2xl font-semibold mb-1">{walletStats.solBalance} SOL</div>
          <div className="text-sm text-gray-500">≈ ${walletStats.usdValue.toLocaleString()}</div>
        </div>

        <div className="bg-gmgn-gray rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-2">Win Rate</div>
          <div className="text-2xl font-semibold mb-1">{walletStats.winRate}%</div>
          <div className="text-sm text-gray-500">{walletStats.transactions} transactions</div>
        </div>

        <div className="bg-gmgn-gray rounded-lg p-6">
          <div className="text-sm text-gray-400 mb-2">Total P&L</div>
          <div className="text-2xl font-semibold mb-1 text-green-400">
            +${walletStats.totalPnL.toLocaleString()}
          </div>
          <div className="text-sm text-gray-500">All time</div>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-gmgn-gray rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-lg font-semibold">Transaction History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gmgn-gray-light">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Type</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Token</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Price</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Time</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((tx) => (
                <tr key={tx.id} className="border-b border-gray-800 hover:bg-gmgn-gray-light/50 transition-colors">
                  <td className="px-4 py-4">
                    <div className={`flex items-center gap-2 ${
                      tx.type === 'buy' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {tx.type === 'buy' ? (
                        <ArrowUpRight size={18} />
                      ) : (
                        <ArrowDownRight size={18} />
                      )}
                      <span className="font-medium capitalize">{tx.type}</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 font-medium">{tx.token}</td>
                  <td className="px-4 py-4">{tx.amount}</td>
                  <td className="px-4 py-4 text-gray-400">${tx.price.toLocaleString()}</td>
                  <td className="px-4 py-4 text-gray-400">{tx.time}</td>
                  <td className="px-4 py-4">
                    <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

