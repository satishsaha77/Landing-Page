import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Login handler
  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    // Create the login payload
    const payload = {
      username,
      password,
    };

    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload), // Use entered credentials
      });

      const data = await response.json();
      console.log("Login Response:", data); // Log the login response

      if (response.ok) {
        // On successful login, redirect to homepage
        navigate("/homepage");
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      setError("Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 space-y-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        {/* Username Input */}
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>

        {/* Password Input */}
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          />
        </div>

        {/* Login Button */}
        <div>
          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
