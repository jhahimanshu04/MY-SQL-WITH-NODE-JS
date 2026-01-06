import React from "react";
import { Link } from 'react-router-dom'
import { useState } from "react"
import axios from 'axios'
const Register = () => {
  const [values, setValues] = useState({
    username: '',
    eamil: '',
    password:'',
  })
   const handleChanges = (e) => {
    setValues({...values,[e.target.name]:[e.target.value]})
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/auth/register', values)
      console.log(response)
    } catch (err) {
      console.log(err)
    }
   
    
  }

  return (
    // <div className="flex justify-center items-center full-screen bg-gray-100">
    <div className="fixed inset-0 flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg px-8 py-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Create Account
        </h2>

        <form className="space-y-4"
        onSubmit={handleSubmit}>
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="username"
              onChange={handleChanges}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              onChange={handleChanges}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="password"
              onChange={handleChanges}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?
          <Link to="/login" className="text-blue-600 hover:underline ml-1">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
