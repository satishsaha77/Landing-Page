import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header2 = () => {
  const navigate = useNavigate();
  const handleReferpage = () => {
    navigate('/refer');
  };

  const handleback = () => {
    navigate('/homepage');
  };

  return (
    <div className="flex items-center justify-between py-4">
      <button onClick={handleback} className="bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-800">
        &lt;
      </button>
      <h1 className="text-xl font-semibold">My Wallet</h1>
      <button onClick={handleReferpage} className="bg-purple-600 text-white rounded flex items-center justify-center hover:bg-purple-800 p-2">Refer</button>
    </div>
  );
};

export default Header2;
