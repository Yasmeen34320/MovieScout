"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="mb-10 flex items-center justify-center" style={{ backgroundColor: '#0a0a0a' }}>
      <div className="w-full max-w-md border border-purple-950 rounded-lg p-8 shadow-lg" style={{ backgroundColor: '#0a0a0a' }}>
        <h2 className="text-xl font-semibold text-purple-500 mb-6 text-center tracking-[.3em]">LogIn</h2>

        <form >
        

          <div className=" gap-2 flex flex-col items-start mb-2">
            <label className="block text-gray-300 mb-1">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Choose a username"
            />
          </div>
          <div className=" gap-2 flex flex-col items-start mb-5">
            <label className="block text-gray-300 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-purple-700"
              placeholder="Enter your password"
            />
          </div>
    <div className="gap-2 flex justify-center  items-center">
    <Link href="/">
          <button
              type="button"

            className="py-2 px-10 tracking-[.3em] cursor-pointer w-full bg-purple-800 hover:bg-purple-900 text-white rounded transition"
          >
            LogIn
          </button>
          </Link>
          Or
           <button
        onClick={(e) =>{
    e.preventDefault();

          signIn('google', { callbackUrl: "/" })
        }}
        className="text-sm flex justify-center items-center px-2 py-2  bg-blue-500 text-white rounded"
      >
        <Image
        src="/google.png"
        alt="Google Logo"
        width={30}
        height={15}
        className="mr-2"
      />
        Sign in with Google
      </button>
      </div>
        </form>
      </div>
    </div>


);
}
