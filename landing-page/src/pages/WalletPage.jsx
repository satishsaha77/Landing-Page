// src/pages/WalletPage.jsx
import React, { useEffect, useState }  from 'react';
import Header from '../components/Header';
import UserProfileCard from '../components/UserProfileCard';
import CreditsInfo from '../components/CreditsInfo';
import PaymentOptions from '../components/PaymentOptions';
import TransactionTabs from '../components/TransactionTabs';
import TransactionList from '../components/TransactionList';

const WalletPage = () => {

  return (
    <div className="w-full max-w-md mx-auto p-4 border border-gray-500">
      <Header />
      <UserProfileCard />
      <CreditsInfo />
      <PaymentOptions />
      <TransactionTabs />
      <TransactionList />
    </div>
  );
};

export default WalletPage;


