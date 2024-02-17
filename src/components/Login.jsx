import React, { useState } from "react";
import LoginImage from "../assets/LoginImage.jpg";

function LoginForm() {
  // State to store user credentials
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  // Handler for input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your authentication logic here
    console.log("Submitted:", credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${LoginImage})`, opacity: 0.4 }}
      ></div>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg z-50 ">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
            Sign in to your account
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-[#F72798] text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <a
            href="#"
            className="text-blue-500 hover:underline focus:outline-none focus:underline"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
