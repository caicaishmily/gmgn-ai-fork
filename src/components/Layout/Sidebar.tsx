import { useState } from 'react'
import { Wallet, TrendingUp, Eye, Tag, Plus } from 'lucide-react'

const sidebarItems = [
  { icon: Wallet, label: 'Wallet', count: null },
  { icon: TrendingUp, label: 'Track', count: null },
  { icon: Eye, label: 'Monitor', count: null },
  { icon: Tag, label: 'Renames', count: null },
]

const groups = [
  { label: 'All', count: 0 },
  { label: 'Default', count: 0 },
]

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Wallet')

  return (
    <aside className="hidden md:block w-64 bg-gmgn-gray border-r border-gray-800 h-[calc(100vh-64px)] overflow-y-auto">
      <div className="p-4 space-y-6">
        {/* Navigation Items */}
        <div className="space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                onClick={() => setActiveItem(item.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeItem === item.label
                    ? 'bg-gmgn-green/20 text-gmgn-green'
                    : 'text-gray-400 hover:text-white hover:bg-gmgn-gray-light'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </div>

        {/* Groups Section */}
        <div>
          <div className="px-4 mb-2">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">Groups</h3>
          </div>
          <div className="space-y-1">
            {groups.map((group) => (
              <button
                key={group.label}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-gmgn-gray-light transition-colors"
              >
                <span>{group.label}</span>
                <span className="text-xs">({group.count})</span>
              </button>
            ))}
          </div>
          <button className="w-full flex items-center gap-2 px-4 py-2 mt-2 text-gmgn-green hover:bg-gmgn-green/10 rounded-lg transition-colors">
            <Plus size={18} />
            <span>Groups</span>
          </button>
        </div>

        {/* No Data Section */}
        <div className="px-4 py-8 text-center text-gray-500 text-sm">
          No Data
        </div>
      </div>
    </aside>
  )
}

