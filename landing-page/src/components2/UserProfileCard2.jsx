// src/components/UserProfileCard.jsx
import React from 'react';

const UserProfileCard2 = () => {
  return (
    <div className="flex items-center bg-gray-100 p-4 rounded-2xl">
      <img
        src="/client-3.jpg"
        alt="User"
        className="w-12 h-12 rounded-full"
      />
      <div className="ml-4">
        <h2 className="text-lg font-semibold">Alex Smith</h2>
        <p className="text-sm text-gray-500">+91 98703-988-923</p>
      </div>
      <span className="ml-auto bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
        <img src='https://static-00.iconduck.com/assets.00/verified-icon-512x512-5rv3ez90.png' alt='' 
        className="w-3 h-3 mr-1 text-purple-700"
        />
        Verified
      </span>
    </div>
  );
};

export default UserProfileCard2;