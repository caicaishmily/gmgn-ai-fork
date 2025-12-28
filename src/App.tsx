import { ReactNode } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginModal from "./components/Auth/LoginModal";
import SignUpModal from "./components/Auth/SignUpModal";
import Layout from "./components/Layout/Layout";
import CopyTrade from "./pages/CopyTrade";
import CreateCopyTrade from "./pages/CreateCopyTrade";
import WalletOverview from "./pages/WalletOverview";
import MarketData from "./pages/MarketData";
import { AuthProvider, useAuth } from "./context/AuthContext";

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function AppRoutes() {
  const {
    isAuthenticated,
    showLogin,
    showSignUp,
    setShowLogin,
    setShowSignUp,
  } = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <div className="min-h-screen bg-gmgn-dark flex items-center justify-center">
                <LoginModal
                  isOpen={true}
                  onClose={() => {}}
                  onSwitchToSignUp={() => {
                    window.location.href = "/signup";
                  }}
                />
              </div>
            ) : (
              <Navigate to="/" replace />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? (
              <div className="min-h-screen bg-gmgn-dark flex items-center justify-center">
                <SignUpModal
                  isOpen={true}
                  onClose={() => {}}
                  onSwitchToLogin={() => {
                    window.location.hash = "#/login";
                  }}
                />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >
          <Route index element={<CopyTrade />} />
          <Route path="create-copy-trade" element={<CreateCopyTrade />} />
          <Route path="wallet" element={<WalletOverview />} />
          <Route path="market" element={<MarketData />} />
        </Route>
      </Routes>

      {isAuthenticated && (
        <>
          {showLogin && (
            <LoginModal
              isOpen={showLogin}
              onClose={() => setShowLogin(false)}
            />
          )}
          {showSignUp && (
            <SignUpModal
              isOpen={showSignUp}
              onClose={() => setShowSignUp(false)}
            />
          )}
        </>
      )}
    </>
  );
}

function App() {
  // Use HashRouter for GitHub Pages - more reliable than BrowserRouter
  // URLs will look like: https://caicaishmily.github.io/gmgn-ai-fork/#/login
  return (
    <Router>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </Router>
  );
}

export default App;
