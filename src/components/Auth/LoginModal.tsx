import { useState } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToSignUp?: () => void
}

export default function LoginModal({ isOpen, onClose, onSwitchToSignUp }: LoginModalProps) {
  const [email, setEmail] = useState('')
  const { login } = useAuth()

  if (!isOpen) return null

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Mock login
    login({
      email,
      name: email.split('@')[0],
    })
    // Navigate to home page using hash router
    window.location.hash = '#/'
  }

  const handleSocialLogin = (provider: string) => {
    // Mock social login
    login({
      email: `${provider}@example.com`,
      name: provider,
      provider,
    })
    // Navigate to home page using hash router
    window.location.hash = '#/'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative bg-gmgn-gray rounded-2xl w-full max-w-md p-6 md:p-8 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-4">Log In</h2>
        
        <p className="text-gray-400 mb-6">
          Don't have an account yet?{' '}
          <button
            onClick={onSwitchToSignUp}
            className="text-gmgn-green hover:text-gmgn-green-light transition-colors"
          >
            Sign Up
          </button>
        </p>

        <form onSubmit={handleLogin} className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="w-full px-4 py-3 bg-gmgn-gray-light rounded-lg border border-gray-700 focus:border-gmgn-green focus:outline-none transition-colors"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gmgn-green hover:bg-gmgn-green-light text-white font-medium py-3 rounded-lg transition-colors"
          >
            Log In
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gmgn-gray text-gray-400">OR</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleSocialLogin('Telegram')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-5 h-5 bg-blue-500 rounded"></div>
            <span>Telegram</span>
          </button>
          
          <button
            onClick={() => handleSocialLogin('Phantom')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-5 h-5 bg-purple-500 rounded"></div>
            <span>Phantom</span>
          </button>
          
          <button
            onClick={() => handleSocialLogin('MetaMask')}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-5 h-5 bg-orange-500 rounded"></div>
            <span>MetaMask</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="text-sm text-gray-400 mb-2">Connect with extension wallet →</div>
          </div>
          
          <div className="bg-white p-4 rounded-lg">
            <div className="w-32 h-32 bg-gray-200 rounded"></div>
            <p className="text-xs text-gray-600 mt-2 text-center">
              Please scan the QR code using the latest version of the app to log in
            </p>
          </div>
        </div>

        <div className="flex gap-4 mt-8 text-sm text-gray-400">
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Privacy Policy</button>
        </div>
      </div>
    </div>
  )
}

