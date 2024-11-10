// src/components/PaymentOptions.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from "../../src/assets/image.png";

const PaymentOptions = () => {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    if (/^\d*$/.test(inputValue)) {
      setAmount(inputValue);
    }
  };

  const handleProceedToPay = () => {
    // Check if amount is valid before navigating
    if (amount && /^\d+$/.test(amount)) {
      navigate('/credits-added');
    }
  };

  return (
    <div className="bg-gray-100 p-4 mt-4 rounded-2xl">
        <div className="flex items-center">
            <h3 className="text-gray-700 font-semibold">All credits to your wallet</h3>
            <span className="ml-auto bg-purple-200 text-purple-700 text-xs font-semibold px-2 py-1 rounded-full">
                1 Credit = 1
            </span>
        </div>
        <p className="text-sm text-gray-500 mt-1">
                Choose from our most purchased options
            </p>
      <div className="overflow-x-auto flex"
      style={{
        scrollbarWidth: 'none', /* Firefox */
        msOverflowStyle: 'none', /* Internet Explorer and Edge */
      }}
      >
        <div className="bg-gray-100 p-4 mt-4 rounded-2xl border border-gray-300 w-72 mr-4 flex-shrink-0">
            <div className="mt-2">
                <div className="flex items-center">
                    <input type="radio" name="credit" className="mr-3" />
                    <img src={image} alt='' className="w-5 h-5 mt-1" />
                    <p className="mr-8">15000 <span className="text-sm text-gray-500">Credits</span></p> <span className="text-sm text-gray-800 ml-5">30% off</span>
                </div>
                <p className="text-sm text-gray-500 ml-7">with</p>
                <p className="font-bold text-black ml-7"><span className='line-through mr-1 text-gray-400'>15000</span>14500 <span className="text-sm text-gray-400">Credits</span></p>
            </div>
        </div>
        <div className="bg-gray-100 p-4 mt-4 rounded-2xl border border-gray-300 w-72 mr-4 flex-shrink-0">
            <div className="mt-2">
                <div className="flex items-center">
                    <input type="radio" name="credit" className="mr-3" />
                    <img src={image} alt='' className="w-5 h-5 mt-1" />
                    <p className="mr-8">15000 <span className="text-sm text-gray-500">Credits</span></p> <span className="text-sm text-gray-800 ml-5">30% off</span>
                </div>
                <p className="text-sm text-gray-500 ml-7">with</p>
                <p className="font-bold text-black ml-7"><span className='line-through mr-1 text-gray-400'>15000</span>14500 <span className="text-sm text-gray-400">Credits</span></p>
            </div>
        </div>
        <div className="bg-gray-100 p-4 mt-4 rounded-2xl border border-gray-300 w-[300px] flex-shrink-0">
            <div className="mt-2">
                <div className="flex items-center">
                    <input type="radio" name="credit" className="mr-3" />
                    <img src={image} alt='' className="w-5 h-5 mt-1" />
                    <p className="mr-8">15000 <span className="text-sm text-gray-400">Credits</span></p> <span className="text-sm text-gray-800 ml-5">30% off</span>
                </div>
                <p className="text-sm text-gray-500 ml-7">with</p>
                <p className="font-bold text-black ml-7"><span className='line-through mr-1 text-gray-400'>15000</span>14500 <span className="text-sm text-gray-500">Credits</span></p>
            </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-2">or</p>
      <input
        type="text"
        placeholder="Enter amount manually"
        value={amount}
        onChange={handleInputChange}
        className="w-full mt-4 p-2 border border-gray-300 rounded-full"
      />
      <button
        onClick={handleProceedToPay}
        className={`w-full mt-4 py-2 font-semibold rounded-full ${
          amount && /^\d+$/.test(amount) ? 'bg-purple-500 text-white' : 'bg-gray-300 text-gray-500'
        }`}
        disabled={!amount || !/^\d+$/.test(amount)}
      >
        Proceed to Pay
      </button>
    </div>
  );
};

export default PaymentOptions;
