import React from 'react';
import { Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ReferralCard = () => {
  const navigate = useNavigate();
  const handleback = () => {
    navigate('/walletpage');
  };

  const referralLink = "thirdplace.com/ref/NKJS823HD";

  return (
    <div className='border border-gray-500'>
      <div className="max-w-md mx-auto bg-purple-800 text-white rounded-b-lg overflow-hidden">
        <div className="bg-purple-700 flex items-center p-4 shadow-lg">
          <button onClick={handleback} className="bg-white text-black w-8 h-8 rounded-full">
            &lt;
          </button>
          <h1 className="text-xl text-white text-center font-semibold flex-1">
            Refer a Friend
          </h1>
        </div>
        {/* Header */}
        <div className="p-6 text-center">
          <p className="text-3xl mb-6 font-semibold">
            Invite a friend and get credit for your next booking!
          </p>

          {/* Referral Code Circle */}
          <div className="flex justify-center mb-1">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
              <div className="text-center">
                <img src='/icon5.png' alt='' className="w-11 h-11 rounded-full" />
              </div>
            </div>
          </div>
          <div className="text-3xl">
            <h1>2322</h1>
          </div>
          <p className="text-sm mb-7">credits earned</p>
          <p className='text-sm font-light mb-2'>Each time a friend joins, you earn <span className='font-bold'>300 Credits!</span></p>

          {/* Referral Link */}
          <div className="bg-purple-900 rounded-2xl p-3 flex items-center justify-between mb-4 border border-dashed border-white">
            <div className='flex flex-col text-start'>
              <p className='text-xs font-light'>Your referral code</p>
              <span className="text-sm text-white font-bold">{referralLink}</span>
            </div>
            <Copy className="w-5 h-5 text-purple-200" />
          </div>
          <div className='mb-2 font-light'>
            <h3>Share your referral code via</h3>
          </div>

          {/* Share Buttons */}
          <div className="flex justify-center space-x-4 mb-6">
            <button className="p-2 bg-green-500 rounded-full">
              <img src='/icon6.png' alt='' className='w-6 h-6 rounded-full' />
            </button>
            <button className="p-2 bg-blue-500 rounded-full">
              <img src='/icon7.png' alt='' className='w-6 h-6 rounded-full' />
            </button>
            <button className="p-2 bg-blue-600 rounded-full">
              <img src='/icon8.png' alt='' className='w-6 h-6 rounded-full' />
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white text-gray-800 p-6 rounded-t-xl">
          <h2 className="font-semibold mb-4">How to get a referral bonus</h2>
          <div className="bg-gray-200 border border-gray-400 rounded-2xl p-3">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="text-black w-8 h-8 flex items-center justify-center mr-3 font-extrabold">1.</span>
                <div>
                  <p className="font-medium">Invite a friend</p>
                  <p className="text-sm text-gray-500">using your invite link</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-black w-8 h-8 flex items-center justify-center mr-3 font-extrabold">2.</span>
                <div>
                  <p className="font-medium">They sign up and</p>
                  <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-black w-8 h-8 flex items-center justify-center mr-3 font-extrabold">3.</span>
                <div>
                  <p className="font-medium">Get bonus credits</p>
                  <p className="text-sm text-gray-500">Earn your referral bonus</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className='mt-9 mb-4'>
        <div className='flex items-center justify-center mb-4'>
          <img
            src="/client-1.jpg"
            alt="User"
            className="w-24 h-24 rounded-full -mr-6"
          />
          <img
            src="/client-2.jpg"
            alt="User"
            className="w-24 h-24 rounded-full border-2 border-white"
          />
        </div>
        <h2 className='text-black font-extrabold text-center'>Lei invited you to Third place</h2>
        <p className='text-center'>You became a member on September 26th, 2024</p>
      </div>
    </div>
  );
};

export default ReferralCard;