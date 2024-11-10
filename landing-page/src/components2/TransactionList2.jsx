import React from 'react';
import image from "../../src/assets/image.png"

const transactions = [
  {
    type: "Added Credits",
    amount: "+100",
    date: "28 Sep 2024",
    time: "12:32 PM",
    iconSrc: "/icon.png", // Replace this with the appropriate icon as per your design
  },
  {
    type: "Funds Deducted",
    amount: "-20",
    date: "28 Sep 2024",
    time: "12:32 PM",
    iconSrc: "/icon2.png", // Replace with correct icon
  },
  {
    type: "Money Refunded",
    amount: "-50",
    date: "28 Sep 2024",
    time: "12:32 PM",
    iconSrc: "/icon3.png", // Replace with correct icon
  },
  {
    type: "Added Credits",
    amount: "+150",
    date: "28 Sep 2024",
    time: "12:32 PM",
    iconSrc: "/icon4.png", // Replace with correct icon
  },
];
const TransactionList2 = () => {
  return (

    <div className="mt-8 p-4 bg-gray-100 rounded-2xl  border border-gray-300">
      <div className="mt-2 space-y-4">
        {transactions.map((transaction, index) => (
          <div key={index} className="flex items-center p-3 rounded-lg shadow-sm">
            <img
            src={transaction.iconSrc}
            alt=""
            className="w-12 h-12 mr-2 mb-2"
            />
            <div className="flex-1">
              <div className="flex justify-between">
                <p className="font-semibold text-gray-700">{transaction.type}</p>
                <div className="flex items-center">
                  <img src={image} alt="" className="w-6 h-6 mr-2" />
                  <p className="text-lg font-bold text-black">{transaction.amount}</p>
                  <select className="text-gray-800 ml-4">
                  </select>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <p>{transaction.date}</p>
                <p>{transaction.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList2;
