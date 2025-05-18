"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";

export default function Register() {
  return (
 <div className="mb-10 min-h-screen flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="w-full max-w-md  border border-purple-950 rounded-lg p-8 shadow-lg" style={{ backgroundColor: '#0a0a0a' }}>
        <h2 className="text-xl font-semibold text-purple-500 mb-6 text-center">Create an Account</h2>

        <form className="space-y-4">
          <div className=" gap-2 flex flex-col items-start">
            <label className="block text-gray-300 mb-1 ">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Enter your email"
            />
          </div>

          <div className=" gap-2 flex flex-col items-start">
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Choose a username"
            />
          </div>

          <div className=" gap-2 flex flex-col items-start">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Enter your password"
            />
          </div>

          <div className=" gap-2 flex flex-col items-start">
            <label className="block text-gray-300  mb-1">Address</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Enter your address"
            />
          </div>
          <button
              type="button"
            onClick={() =>  signIn('google', {
            callbackUrl: '/',           // redirect after signup/login
            prompt: 'select_account',   // force login screen
          })}
            className="mt-4 cursor-pointer w-full bg-purple-800 hover:bg-purple-900 text-white py-2 rounded transition"
          >
            Register
          </button>
           <p className="mt-6 text-gray-400">
          Already have an account?{' '}
          <a href="/Login" className="text-purple-400 hover:text-purple-200 underline">
            Login
          </a>
        </p>
        </form>
      </div>
    </div>


);
}
