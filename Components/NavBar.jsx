"use client";
import React from 'react'
import { signOut, useSession } from 'next-auth/react'; // Import useSession hook from next-auth
import { useEffect, useState } from 'react'; // Import useEffect and useState hooks from React
export default function NavBar() {
    const { data: session, status } = useSession(); // Get session and status from NextAuth
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if session exists and set login state accordingly
    if (status === 'authenticated') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [status]);
  return (
 <nav
      className="text-base mb-8 shadow-lg border-b border-gray-800 z-50"
      style={{ backgroundColor: '#0a0a0a', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.6)' }}
    >  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      <div className="flex items-center space-x-4">
        <a href="/" className="text-xl font-semibold text-purple-800 pr-20 tracking-[.2em]">MovieScout</a>
        <a href="/" className="text-white hover:text-purple-950 tracking-[.2em]">Home</a>
        <a href="/about" className="text-white hover:text-purple-950 tracking-[.2em]">About</a>
        <a href="/movies" className="text-white hover:text-purple-950 tracking-[.2em]">Movies</a>
        <a href="/Blog" className="text-white hover:text-purple-950 tracking-[.2em]">Our Team</a>
                {/* <a href="/ssrAbout" className="text-white hover:text-purple-950 tracking-[.2em]">ssr</a> */}


      </div>
      <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <a href="/Login" className="text-white hover:text-purple-950">
                  Login
                </a>
                <a href="/register" className="bg-purple-950 text-white px-3 py-1 rounded hover:bg-purple-800">
                  Register
                </a>
              </>
            ) : (
                     <button className="bg-purple-950 text-white px-3 py-1 rounded hover:bg-purple-800" onClick={() => signOut()}>Sign out</button>

            )}
          </div>
    </div>
  </div>
</nav>
  )
}
