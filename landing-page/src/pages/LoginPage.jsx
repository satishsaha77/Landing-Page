// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handle form submission and login
const handleLogin = async () => {
  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30, // optional, defaults to 60
      }),
      credentials: 'include', // Include cookies in the request
    });

    // Log status code and response for debugging
    console.log("Response status:", response.status);

    if (!response.ok) {
      // Show more specific error message from the server
      const errorData = await response.json();
      console.error('Error response:', errorData);
      alert(`Login failed: ${errorData.message || 'Please try again.'}`);
      return;
    }

    const data = await response.json();

    if (data && data.token) {
      // Save the token in localStorage
      localStorage.setItem('authToken', data.token);
      console.log('Login successful:', data);

      // Navigate to wallet page
      navigate('/WalletPage');
    } else {
      console.error('No token received:', data);
      alert('Login failed. No token received.');
    }
  } catch (error) {
    console.error('Login error:', error);
    alert(`Login error: ${error.message || 'Network error. Please try again.'}`);
  }
};

  

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
