import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WalletPage from './pages/WalletPage';
import CreditsAddedPage from './pages/CreditsAddedPage';
import WalletPage2 from './pages/WalletPage2';
import ReferralCard from './pages/ReferralCard';
import HomePage from './pages/HomePage';
import LoginComponent from './LoginComponent/LoginComponent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white flex justify-center">
        <div className="w-full max-w-md">
          <Routes>
            <Route path="/" element={<LoginComponent />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/walletpage" element={<WalletPage />} />
            <Route path="/wallet" element={<WalletPage2 />} />
            <Route path="/credits-added" element={<CreditsAddedPage />} />
            <Route path="/refer" element={<ReferralCard />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
