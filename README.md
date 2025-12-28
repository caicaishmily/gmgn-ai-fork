# GMGN.AI - Crypto Trading & Wallet Mirror Platform

A pixel-perfect clone of GMGN.AI web platform built with React, Vite, and Tailwind CSS.

## Features

- 🔐 User Authentication (Login/Sign Up with Email or Social Login)
- 📊 Wallet Overview (Balance, Transaction History, P&L)
- 🔄 Copy Trading (Mirror wallet trades automatically)
- 📈 Market Data Display
- 📱 Fully Responsive Mobile Design
- 🎨 Pixel-Perfect UI matching GMGN.AI

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gmgn-ai
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Configure GitHub Pages to serve from the `dist` directory or use GitHub Actions.

See `.github/workflows/deploy.yml` for automated deployment.

## Project Structure

```
gmgn-ai/
├── src/
│   ├── components/
│   │   ├── Auth/          # Login/SignUp modals
│   │   └── Layout/        # Header, Sidebar, Layout
│   ├── pages/
│   │   ├── CopyTrade.jsx       # Main CopyTrade dashboard
│   │   ├── CreateCopyTrade.jsx # Create copy trade form
│   │   ├── WalletOverview.jsx  # Wallet stats and history
│   │   └── MarketData.jsx      # Market data display
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication state
│   ├── data/
│   │   └── mockData.js         # Mock data for development
│   ├── services/
│   │   └── mockApi.js          # Mock API service
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Features in Detail

### Authentication
- Email/Password login
- Email/Password signup with optional invite code
- Social login (Telegram, Phantom, MetaMask)
- QR code login option

### CopyTrade Dashboard
- Wallet rankings table with multiple metrics:
  - SOL Balance
  - 1D PnL / USD
  - 1D Win Rate
  - 1D Transactions
  - 1D Volume
  - 1D Net Inflow
  - Tracked/Renamed counts
- Filter by categories (All, Launchpad SM, Smart Money, KOL, etc.)
- Search functionality
- Time range filters (1D, 7D, 30D)

### Create CopyTrade
- Wallet address input
- Buy method selection (Max Buy Amount, Fixed Buy, Fixed Ratio)
- Amount selection (10, 25, 50, 100 SOL)
- Sell method selection (Copy Sell, Not Sell, TP & SL, Advanced Strategy)
- Advanced settings with slippage controls
- Presets management

### Wallet Overview
- Total balance with change percentage
- SOL balance and USD equivalent
- Win rate and transaction count
- Total P&L
- Transaction history table
- Time range filters

### Market Data
- Cryptocurrency price listings
- 24h change indicators
- Volume and market cap
- Category filters (All, Trending, Top Gainers, Top Losers, Volume)

## Development

The project uses Mock APIs for development. All API calls are simulated in `src/services/mockApi.js`.

To integrate with real APIs, replace the mock API calls with actual API endpoints.

## License

MIT License

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

