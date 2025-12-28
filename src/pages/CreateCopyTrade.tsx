import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { X, Info, ChevronDown } from 'lucide-react'
import { Wallet } from '../types'

const buyMethods = ['Max Buy Amount', 'Fixed Buy', 'Fixed Ratio']
const sellMethods = ['Copy Sell', 'Not Sell', 'TP & SL', 'Adv Strategy']
const amountOptions = [10, 25, 50, 100]

export default function CreateCopyTrade() {
  const location = useLocation()
  const navigate = useNavigate()
  const wallet = (location.state?.wallet as Wallet | undefined) || { address: '' } as Partial<Wallet>

  const [walletAddress, setWalletAddress] = useState(wallet.address || '')
  const [selectedBuyMethod, setSelectedBuyMethod] = useState('Max Buy Amount')
  const [selectedSellMethod, setSelectedSellMethod] = useState('Copy Sell')
  const [amount, setAmount] = useState(10)
  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleConfirm = () => {
    // Mock copy trade creation
    console.log('Creating copy trade:', {
      walletAddress,
      buyMethod: selectedBuyMethod,
      sellMethod: selectedSellMethod,
      amount,
    })
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-gmgn-dark p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-gmgn-gray rounded-lg p-6 md:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold">CopyTrade</h1>
          <button
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Copy From */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Copy From</label>
          <input
            type="text"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            placeholder="Wallet Address"
            className="w-full px-4 py-3 bg-gmgn-gray-light rounded-lg border border-gray-700 focus:border-gmgn-green focus:outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* Buy Method */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Buy Method</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {buyMethods.map((method) => (
              <button
                key={method}
                onClick={() => setSelectedBuyMethod(method)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedBuyMethod === method
                    ? 'bg-gmgn-green text-white'
                    : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Amount */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Amount</label>
          <div className="flex flex-wrap items-center gap-3">
            {amountOptions.map((value) => (
              <button
                key={value}
                onClick={() => setAmount(value)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  amount === value
                    ? 'bg-gmgn-green text-white'
                    : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
                }`}
              >
                {value}
              </button>
            ))}
            <span className="text-gray-400">SOL</span>
            <div className="w-full">
              <div className="text-sm text-gray-500">Bal 0</div>
              <div className="text-sm text-gray-500">≈$0</div>
            </div>
          </div>
        </div>

        {/* Sell Method */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <label className="block text-sm font-medium">Sell Method</label>
            <Info size={16} className="text-gray-500" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {sellMethods.map((method) => (
              <button
                key={method}
                onClick={() => setSelectedSellMethod(method)}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  selectedSellMethod === method
                    ? 'bg-gmgn-green text-white'
                    : 'bg-gmgn-gray-light text-gray-400 hover:text-white'
                }`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced Settings */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <label className="block text-sm font-medium">Advanced Settings</label>
              <span className="px-2 py-0.5 bg-gmgn-green/20 text-gmgn-green rounded text-xs">1</span>
              <button className="text-sm text-gray-400 hover:text-white">Clear</button>
            </div>
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ChevronDown size={20} className={showAdvanced ? 'rotate-180' : ''} />
            </button>
          </div>
          {showAdvanced && (
            <div className="bg-gmgn-gray-light rounded-lg p-4 space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Auto</span>
                <input
                  type="text"
                  defaultValue="0.0004"
                  className="w-20 px-2 py-1 bg-gmgn-dark rounded border border-gray-700 text-white text-sm"
                />
                <input
                  type="text"
                  defaultValue="0.001"
                  className="w-20 px-2 py-1 bg-gmgn-dark rounded border border-gray-700 text-white text-sm"
                />
                <button className="flex items-center gap-1 text-sm text-gray-400">
                  Red. <ChevronDown size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Presets */}
        <div className="mb-8">
          <label className="block text-sm font-medium mb-3">Presets</label>
          <div className="text-gray-500 text-sm">No presets configured</div>
        </div>

        {/* Confirm Button */}
        <div className="space-y-4">
          <button
            onClick={handleConfirm}
            className="w-full bg-gmgn-gray-light hover:bg-gray-600 text-white font-medium py-4 rounded-lg transition-colors"
          >
            Confirm
          </button>
          <p className="text-xs text-gray-500 text-center">
            Note: Ensure your account has enough balance for auto trading to run smoothly.
          </p>
        </div>
      </div>
    </div>
  )
}

