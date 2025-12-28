import { useState } from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function MarketData() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Trending', 'Top Gainers', 'Top Losers', 'Volume']

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

  return (
    <div className="p-4 md:p-6">
      <h1 className="text-2xl font-semibold mb-6">Market Data</h1>

      {/* Category Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap ${
              selectedCategory === category
                ? 'bg-gmgn-green text-white'
                : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Market Table */}
      <div className="bg-gmgn-gray rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gmgn-gray-light">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">#</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-400">Name</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-400">Price</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-400">24h Change</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-400">24h Volume</th>
                <th className="px-4 py-3 text-right text-sm font-semibold text-gray-400">Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {marketData.map((coin, index) => (
                <tr
                  key={coin.id}
                  className="border-b border-gray-800 hover:bg-gmgn-gray-light/50 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-4 text-gray-500">{index + 1}</td>
                  <td className="px-4 py-4">
                    <div>
                      <div className="font-medium">{coin.symbol}</div>
                      <div className="text-sm text-gray-400">{coin.name}</div>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right font-medium">
                    ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                  <td className="px-4 py-4 text-right">
                    <div className={`flex items-center justify-end gap-1 ${
                      coin.change >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {coin.change >= 0 ? (
                        <TrendingUp size={16} />
                      ) : (
                        <TrendingDown size={16} />
                      )}
                      <span>{coin.change >= 0 ? '+' : ''}{coin.change}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-4 text-right text-gray-300">{coin.volume}</td>
                  <td className="px-4 py-4 text-right text-gray-300">{coin.marketCap}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

