import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const handleMyWallet = () => {
        navigate('/walletpage');
    };
    const handleSignOut = () => {
        navigate("/");
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div className="fixed inset-0 bg-gradient-to-b from-purple-700 to-purple-900 text-white flex flex-col">
            {/* Navbar */}
            <nav className="bg-purple-800 shadow-lg w-full">
                <div className="w-full px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold">My Website</h1>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#home">Home</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#about">About Us</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#services">Services</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#contact">Contact Us</a>
                        </li>
                        <button onClick={handleMyWallet} className="bg-white text-sm text-black px-2 hover:text-white hover:bg-purple-400 rounded-xl">
                            My Wallet
                        </button>
                    </ul>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden">
                        <button onClick={handleMenuToggle} className="text-white hover:text-purple-300">☰</button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <ul className="flex flex-col items-start md:hidden bg-purple-800 text-white py-4 px-4 space-y-4">
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#home" onClick={handleMenuToggle}>Home</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#about" onClick={handleMenuToggle}>About Us</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#services" onClick={handleMenuToggle}>Services</a>
                        </li>
                        <li className="hover:text-purple-300 text-sm">
                            <a href="#contact" onClick={handleMenuToggle}>Contact Us</a>
                        </li>
                        <button onClick={() => { handleMyWallet(); handleMenuToggle(); }} className="text-sm text-white">
                            My Wallet
                        </button>
                    </ul>
                )}
            </nav>

            {/* Main Content */}
            <div className="flex-grow w-full px-4 py-10 sm:py-20 flex flex-col sm:flex-row items-center text-center sm:text-left bg-gradient-to-r from-purple-600 to-purple-700">
                {/* Text Section */}
                <div className="sm:w-1/2 mb-10 sm:mb-0">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white animate-slide-in transform transition-all hover:scale-105">
                        Welcome to Our Homepage
                    </h2>
                    <p className="text-base sm:text-lg max-w-md mx-auto sm:mx-0 text-white animate-fade-in">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempora impedit voluptates nam numquam autem iure repudiandae explicabo totam nesciunt, nemo 
                    </p>
                    <div className="mt-6">
                        <button onClick={handleSignOut} className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transform transition-all duration-300">
                            Sign Out
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div className="sm:w-1/2 flex justify-center sm:justify-start">
                    <img
                        src="https://img.freepik.com/premium-vector/mobile-bank-loan-concept-banking-application-digital-transfers-transactions-electronic-money-wallet-credit-mortgage-online-payment-cartoon-flat-vector-illustration_118813-16825.jpg"
                        alt="Homepage Image"
                        className="rounded-lg shadow-lg transform transition-all hover:scale-105"
                    />
                </div>

            </div>

        </div>
    );
};

export default HomePage;
