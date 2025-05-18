import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
<div className="border-t border-gray-800 z-50 w-full px-30 py-15 shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
 <div className=" flex flex-col gap-4">
    <div className="flex items-center gap-2 cursor-pointer">
        <h3 className="tracking-[.15em] text-purple-800 text-2xl sm:text-2xl font-bold" style={{fontFamily:"Ms Madi, system-ui"}}>
          MoviesScout
        </h3>
      </div>
      <p className="tracking-[.1em] text-gray-500 text-sm">
         Your gateway to the world of cinema — stream blockbusters, classics, and hidden gems.

      </p>
      <div className="flex gap-2">
        <Link
  href="https://www.facebook.com/"
  className="rounded-full p-2 text-center w-10 h-10 text-white border-2 border-gray-800 transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
>
  <i className="fa-brands fa-facebook-f"></i>
</Link><Link
  href="https://www.instagram.com/"
  className="rounded-full p-2 text-center w-10 h-10 text-white border-2 border-gray-800 transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
>
  <i className="fa-brands fa-instagram"></i>
</Link><Link
  href="https://www.pinterest.com/"
  className="rounded-full p-2 text-center w-10 h-10 text-white border-2 border-gray-800 transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
>
  <i className="fa-brands fa-pinterest"></i>
</Link><Link
  href="https://x.com/"
  className="rounded-full p-2 text-center w-10 h-10 text-white border-2 border-gray-800 transform transition-transform duration-300 hover:scale-105 flex items-center justify-center"
>
  <i className="fa-brands fa-x-twitter"></i>
</Link>
          </div>

</div>


<div className="mt-10 flex flex-col gap-3 tracking-[.1em] text-gray-500 text-sm items-start ml-30">
    <Link href="/" className="hover:text-purple-300 transition  cursor-pointer ">Home</Link>
    <Link href="/movies" className="hover:text-purple-300 transition cursor-pointer  ">Movies</Link>
    <Link href="/about" className="hover:text-purple-300 transition  cursor-pointer ">About US</Link>
    <Link href="/" className="hover:text-purple-300 transition  cursor-pointer ">Contact</Link>
</div>


 <div className="mt-10 flex flex-col gap-3 items-start ml-10">
        <Link href='/'  className="text-sm text-gray-400 hover:text-purple-300 transition cursor-pointer">Account Settings</Link>
        <Link href='/' className="text-sm text-gray-400 hover:text-purple-300 transition cursor-pointer">FAQs</Link>
        <Link href='/' className="text-sm text-gray-400 hover:text-purple-300 transition cursor-pointer">Support Center</Link>
        <Link href='/' className="text-sm text-gray-400 hover:text-purple-300 transition cursor-pointer">Terms of Service</Link>
      </div>


    </div>

)
}
