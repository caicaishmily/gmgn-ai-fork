import { useState } from 'react'
import { X } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  onSwitchToLogin?: () => void
}

export default function SignUpModal({ isOpen, onClose, onSwitchToLogin }: SignUpModalProps) {
  const [email, setEmail] = useState('')
  const [inviteCode, setInviteCode] = useState('')
  const { signUp } = useAuth()
  const navigate = useNavigate()

  if (!isOpen) return null

  const handleSignUp = (e) => {
    e.preventDefault()
    // Mock sign up
    signUp({
      email,
      inviteCode,
      name: email.split('@')[0],
    })
    navigate('/')
  }

  const handleSocialSignUp = (provider: string) => {
    // Mock social sign up
    signUp({
      email: `${provider}@example.com`,
      name: provider,
      provider,
    })
    navigate('/')
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

        <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
        
        <p className="text-gray-400 mb-6">
          Already have an account?{' '}
          <button
            onClick={onSwitchToLogin}
            className="text-gmgn-green hover:text-gmgn-green-light transition-colors"
          >
            Log In
          </button>
        </p>

        <form onSubmit={handleSignUp} className="space-y-4 mb-6">
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

          <div>
            <label className="block text-sm font-medium mb-2">
              Invite Code <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <input
              type="text"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              placeholder="Enter Invite Code"
              className="w-full px-4 py-3 bg-gmgn-gray-light rounded-lg border border-gray-700 focus:border-gmgn-green focus:outline-none transition-colors"
            />
            <p className="text-xs text-gray-500 mt-2">
              The invite code cannot be changed after binding. Please ensure the correct invite code is entered.
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gmgn-green hover:bg-gmgn-green-light text-white font-medium py-3 rounded-lg transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gmgn-gray text-gray-400">OR Sign Up</span>
          </div>
        </div>

        <div className="flex gap-4 justify-center mb-8">
          <button
            onClick={() => handleSocialSignUp('Telegram')}
            className="flex flex-col items-center gap-2 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-blue-500 rounded"></div>
            <span className="text-sm">Telegram</span>
          </button>
          
          <button
            onClick={() => handleSocialSignUp('Phantom')}
            className="flex flex-col items-center gap-2 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-purple-500 rounded"></div>
            <span className="text-sm">Phantom</span>
          </button>
          
          <button
            onClick={() => handleSocialSignUp('MetaMask')}
            className="flex flex-col items-center gap-2 px-4 py-3 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg transition-colors"
          >
            <div className="w-8 h-8 bg-orange-500 rounded"></div>
            <span className="text-sm">MetaMask</span>
          </button>
        </div>

        <div className="flex gap-4 text-sm text-gray-400">
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <button className="hover:text-white transition-colors">Privacy Policy</button>
        </div>
      </div>
    </div>
  )
}

