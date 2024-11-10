import React from 'react';
import Header2 from '../components2/Header2';
import UserProfileCard2 from '../components2/UserProfileCard2';
import CreditsInfo2 from '../components2/CreditsInfo2';
import PaymentOptions2 from '../components2/PaymentOptions2';
import TransactionTabs2 from '../components2/TransactionTabs2';
import TransactionList2 from '../components2/TransactionList2';

const WalletPage2 = () => {

  return (
    <div className="w-full max-w-md mx-auto p-4 border border-gray-500">
      <Header2 />
      <UserProfileCard2 />
      <CreditsInfo2 />
      <PaymentOptions2 />
      <TransactionTabs2 />
      <TransactionList2 />
    </div>
  );
};

export default WalletPage2;
