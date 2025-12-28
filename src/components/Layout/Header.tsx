import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Search, Bell, User, Star, Zap } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

const navItems = [
  { path: '/', label: 'GMGN' },
  { path: '/trenches', label: 'Trenches' },
  { path: '/trending', label: 'Trending' },
  { path: '/', label: 'CopyTrade' },
  { path: '/monitor', label: 'Monitor' },
  { path: '/track', label: 'Track' },
  { path: '/wallet', label: 'Portfolio' },
  { path: '/rewards', label: 'Rewards' },
]

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { setShowLogin, logout } = useAuth()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="bg-gmgn-gray border-b border-gray-800 sticky top-0 z-40">
      <div className="px-4 md:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center gap-1 overflow-x-auto scrollbar-hide">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-gmgn-green/20 text-gmgn-green'
                    : 'text-gray-400 hover:text-white hover:bg-gmgn-gray-light'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button className="p-2">
              <span className="text-xl">☰</span>
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Search */}
            <div className="hidden md:flex items-center bg-gmgn-gray-light rounded-lg px-3 py-2 min-w-[200px]">
              <Search size={18} className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search name, CA, wallet /"
                className="bg-transparent border-none outline-none text-sm flex-1 text-white placeholder-gray-500"
              />
            </div>

            {/* Mobile Search */}
            <button className="md:hidden p-2">
              <Search size={20} />
            </button>

            {/* Actions */}
            <div className="hidden md:flex items-center gap-3">
              <span className="text-sm text-gray-400">2025</span>
              <span className="text-sm text-gray-400">Cooking</span>
              <span className="text-sm text-gray-400">APP</span>
              <span className="text-sm text-gray-400">SOL</span>
              <button className="p-2 hover:bg-gmgn-gray-light rounded-lg transition-colors">
                <Star size={18} />
              </button>
              <button className="p-2 hover:bg-gmgn-gray-light rounded-lg transition-colors relative">
                <Bell size={18} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 hover:bg-gmgn-gray-light rounded-lg transition-colors">
                <User size={18} />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => navigate('/create-copy-trade')}
                className="px-3 py-1.5 bg-gmgn-green hover:bg-gmgn-green-light rounded-lg text-sm font-medium transition-colors"
              >
                Create
              </button>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center gap-2">
              <button className="px-4 py-2 bg-gmgn-gray-light hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors">
                O-Latency Alert
              </button>
              <button
                onClick={() => navigate('/create-copy-trade')}
                className="px-4 py-2 bg-gmgn-green hover:bg-gmgn-green-light rounded-lg text-sm font-medium transition-colors"
              >
                Create Copy Trade
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

