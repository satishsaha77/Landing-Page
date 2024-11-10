// src/components/TransactionTabs.jsx
import React from 'react';

const TransactionTabs = () => {
  return (
    <div className="mt-6">
      <div className="flex items-center justify-between mb-4">
        <h3>Transactions</h3>
        <select className="text-gray-500 border border-gray-300 rounded p-1">
            <option>Select Month</option>
        </select>
      </div>
      <div>
        <div className="flex space-x-12 ml-2">
            <button className="text-black-700 font-semibold">All</button>
            <button className="text-gray-500">Addition</button>
            <button className="text-gray-500">Deduction</button>
            <button className="text-gray-500">Refund</button>
        </div>
        <hr className="my-3 border-gray-300" />
      </div>
    </div>
  );
};

export default TransactionTabs;
