import React from 'react';
import image from "../../src/assets/image.png"

const CreditsInfo = () => {
  return (
    <div className="bg-gray-100 p-4 mt-4 rounded-2xl">
      <h3 className="text-gray-700 font-semibold">Available Credits</h3>
      <div className='flex items-center space-x-1'>
        <img src={image} alt='' className="w-10 h-10 mt-2" />
        <p className="text-2xl font-bold text-black-700 mt-2">0</p>
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Credits can be used for all bookings, food orders, events.
      </p>
      <hr className="my-3 border-gray-300" />
      <span className="ml-auto bg-purple-600 text-[#fff] text-xs font-semibold px-2 py-1 rounded-full">What are Credits?</span>
    </div>
  );
};

export default CreditsInfo;
