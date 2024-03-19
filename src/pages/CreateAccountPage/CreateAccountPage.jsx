import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateAccountPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://source.unsplash.com/featured/?voting")',
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg mx-auto max-w-md mt-24">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">Create Account</h1>
        </div>
        <form onSubmit={handleSubmit} className="mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-orange-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
        <div className="text-center mt-4">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-orange-500">
              Log In
            </a>
          </p>
        </div>
      </div>
      {/* <div className="mx-auto w-1/3">
        <Link to="/profile-setup">Profile Setup</Link>
      </div> */}
    </div>
  );
}

export default CreateAccountPage;
