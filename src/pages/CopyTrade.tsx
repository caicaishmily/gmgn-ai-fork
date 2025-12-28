import { useState } from 'react'
import { Search, Grid, List, Copy, Link2, User, Heart, Settings } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { mockWalletData } from '../data/mockData'
import { Wallet } from '../types'

const tabs = ['Rank', 'Radar', 'CopyTrade', 'SnipeX']
const filters = ['All', 'Launchpad SM', 'Smart Money', 'KOL', 'LIVE', 'Fresh Wallet', 'Sniper', 'Top Tracked', 'Top Renamed', 'Top Dev']

export default function CopyTrade() {
  const [activeTab, setActiveTab] = useState('Rank')
  const [activeFilter, setActiveFilter] = useState('All')
  const navigate = useNavigate()

  const handleCopy = (wallet: Wallet) => {
    navigate('/create-copy-trade', { state: { wallet: { address: wallet.name, ...wallet } } })
  }

  return (
    <div className="p-4 md:p-6">
      {/* Sub Header */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search X name, Wallet"
                className="w-full pl-10 pr-4 py-2 bg-gmgn-gray-light rounded-lg border border-gray-700 focus:border-gmgn-green focus:outline-none text-white placeholder-gray-500"
              />
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-2 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg text-sm transition-colors">1D</button>
              <button className="px-3 py-2 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg text-sm transition-colors">7D</button>
              <button className="px-3 py-2 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg text-sm transition-colors">30D</button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors">
              <Grid size={18} />
            </button>
            <button className="p-2 bg-gmgn-green/20 text-gmgn-green rounded-lg">
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-gmgn-green text-white'
                  : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-gmgn-green/20 text-gmgn-green'
                  : 'text-gray-400 hover:text-white hover:bg-gmgn-gray-light'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Wallet Table */}
      <div className="bg-gmgn-gray rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gmgn-gray-light">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400"># Wallet / SOL Bal</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">1D PnL / USD</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">1D Win Rate %</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">1D Txs</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">1D Volume</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">1D Net Inflow</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Tracked / Renamed</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Copy</th>
              </tr>
            </thead>
            <tbody>
              {mockWalletData.map((wallet, index) => (
                <tr
                  key={wallet.id}
                  className="border-b border-gray-800 hover:bg-gmgn-gray-light/50 transition-colors"
                >
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm w-6">{index + 1}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gmgn-green/20 rounded-full flex items-center justify-center">
                          <User size={16} className="text-gmgn-green" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium">{wallet.name}</span>
                            {wallet.tags?.map((tag, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded">
                                {tag}
                              </span>
                            ))}
                            <Link2 size={14} className="text-gray-500" />
                            <Heart size={14} className="text-gray-500" />
                            <Settings size={14} className="text-gray-500" />
                          </div>
                          <div className="text-sm text-gray-400">{wallet.solBalance} SOL</div>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <div className="text-green-400 font-medium">
                      {wallet.pnl > 0 ? '+' : ''}{wallet.pnl}%
                    </div>
                    <div className="text-sm text-gray-400">
                      {wallet.pnl > 0 ? '+' : ''}${(wallet.pnlUsd / 1000).toFixed(1)}K
                    </div>
                  </td>
                  <td className="px-4 py-4 text-gray-300">{wallet.winRate}%</td>
                  <td className="px-4 py-4 text-gray-300">{wallet.txs}</td>
                  <td className="px-4 py-4 text-gray-300">${(wallet.volume / 1000).toFixed(1)}K</td>
                  <td className="px-4 py-4 text-gray-300">${(wallet.netInflow / 1000).toFixed(0)}K</td>
                  <td className="px-4 py-4 text-gray-400 text-sm hidden lg:table-cell">{wallet.tracked}/{wallet.renamed}</td>
                  <td className="px-4 py-4">
                    <button
                      onClick={() => handleCopy(wallet)}
                      className="px-4 py-1.5 bg-gmgn-green hover:bg-gmgn-green-light rounded-lg text-sm font-medium transition-all duration-200 transform hover:scale-105 active:scale-95"
                    >
                      Copy
                    </button>
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

