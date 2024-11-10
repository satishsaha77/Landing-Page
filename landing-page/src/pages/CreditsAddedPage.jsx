import React from 'react';
import { useNavigate } from 'react-router-dom';

const CreditsAddedPage = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/wallet'); 
    };

    return (
        <>
            {/* Back Button */}
            <div className="bg-white flex justify-between">
                <button onClick={handleBackClick} className="bg-purple-700 text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-purple-800 mt-2 mb-3 ml-4">
                    &lt;
                </button>
            </div>
            <div className="w-full max-w-md mx-auto p-4 bg-gray-100 min-h-screen flex flex-col justify-center shadow-lg">

                {/* Success Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-3xl">✓</span>
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-center mb-6">
                    Credits Added to Wallet
                </h2>

                {/* Details Section */}
                <h3 className="text-lg font-semibold mb-4 ml-2">Details</h3>
                <div className="bg-gray-100 rounded-3xl shadow-md border border-gray-300">
                    <div className='p-4'>
                        <div className="text-sm space-y-2">
                            <p className="flex justify-between">
                                <span>Order ID</span>
                                <span className="font-medium">#HJDVUY2387JHWE</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Credits</span>
                                <span className="font-medium">15,000</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Paid Via</span>
                                <span className="font-medium">PhonePe UPI</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Amount</span>
                                <span className="font-medium">₹14,500</span>
                            </p>
                            <p className="flex justify-between">
                                <span>Convenience Fees</span>
                                <span className="font-medium">₹0</span>
                            </p>
                        </div>
                    </div>
                    <div className="mt-1 p-3 bg-purple-200 text-black font-semibold rounded-b-3xl flex items-center justify-between">
                        <p>Paid Amount</p>
                        <p>₹14,500</p>
                    </div>
                </div>

                {/* View Updated Balance Button */}
                <button className="w-full mt-8 py-3 bg-purple-500 text-white font-semibold rounded-full text-lg">
                    View Updated Balance
                </button>
            </div>
        </>
    );
};

export default CreditsAddedPage;
