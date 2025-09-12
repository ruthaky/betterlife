"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuhOpen, setMenuhOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-start px-4 md:px-14 pt-6 z-50">
        {/* Small Logo (always visible on far left) */}
        <Link href="/"><img src="/asset/logo.svg" alt="Logo" className="w-12 h-12 md:w-24 md:h-16" /></Link>
       

        {/* Navbar */}
        <nav
          className="hidden md:flex flex-col text-[#0f1c24] font-medium rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-500 ease-in-out w-[600px]"
          style={{ height: menuOpen ? "700px" : "64px" }} // 64px = h-16
        >
          {/* Top Row */}
          <div className="flex items-center justify-between bg-white w-full h-16 px-10 flex-shrink-0">
            {/* Show navlinks when collapsed, big logo when expanded */}
            {menuOpen ? (
              <Image src="/asset/logo.svg" width={12} height={12} alt="Logo" className="w-12 h-12" />
            ) : (
              <div className="flex space-x-14">
                <Link href="/" className="hover:text-gray-600 text-sm">Home</Link>
                <Link href="/about" className="hover:text-gray-600 text-sm">About</Link>
                <Link href="/services" className="hover:text-gray-600 text-sm">Services</Link>
                <Link href="/contact-us" className="hover:text-gray-600 text-sm">Contact</Link>
                <Link href="/gallery" className="hover:text-gray-600 text-sm">Gallery</Link>
              </div>
            )}

            {/* Toggle Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-10 h-10 rounded-full bg-[#0f1c24] text-white flex items-center justify-center"
            >
              {menuOpen ? "×" : "≡"}
            </button>
          </div>

          {/* Expanded Content */}
          <div
  className={`flex flex-col items-start px-10 justify-start 
    bg-white/70 w-full 
    transition-all duration-700 ease-in-out
    ${menuOpen ? "opacity-100 backdrop-blur-md" : "opacity-0 backdrop-blur-none pointer-events-none"}`}
>
            <div className="flex flex-col space-y-6 text-[40px] font-medium text-[#0f1c24] mt-6">
              <Link href="/"> <div className={`transform -translate-y-1/2 transition-all duration-100 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}>Home </div></Link>
              <Link href="/about"> <div className={`transform -translate-y-1/2 transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}>About </div></Link>
               <Link href="/services"> <div className={`transform -translate-y-1/2 transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}>Services </div></Link>
               <Link href="/contact-us"> <div className={`transform -translate-y-1/2 transition-all duration-700 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}>Contact</div></Link>
                <Link href="/gallery"> <div className={`transform -translate-y-1/2 transition-all duration-900 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}>Gallery </div></Link>
            </div>

            <div className="mt-10 text-sm text-gray-500 text-left">
              <p>betterlife@gmail.com</p>
              <p>Address</p>
              <p>09112, Idd</p>
            </div>

            <Link href="/schedule"><button className="mt-10 flex items-center text-[#0f1c24] font-medium">
              <span className="mr-2 text-[30px]">→</span> Schedule a visit
            </button></Link>
          </div>
        </nav>


      {/* Hamburger Button (mobile only) */}
<button
  className="md:hidden w-10 h-10 flex items-center justify-center text-2xl bg-[#0f1c24] text-white rounded-full z-40"
  onClick={() => setMenuhOpen(!menuhOpen)}
>
  {menuhOpen ? "×" : "≡"}
</button>

{/* Mobile Menu Overlay */}
<div
  className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-10 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
    menuhOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <Link href="/" onClick={() => setMenuhOpen(false)} className="text-2xl font-medium">
    Home
  </Link>
  <Link href="/about" onClick={() => setMenuhOpen(false)} className="text-2xl font-medium">
    About
  </Link>
  <Link href="/services" onClick={() => setMenuhOpen(false)} className="text-2xl font-medium">
    Services
  </Link>
  <Link href="/contact-us" onClick={() => setMenuhOpen(false)} className="text-2xl font-medium">
    Contact
  </Link>
  <Link href="/gallery" onClick={() => setMenuhOpen(false)} className="text-2xl font-medium">
    Gallery
  </Link>

  <div className="mt-10 text-center text-gray-500 space-y-2">
    <p>betterlife@gmail.com</p>
    <p>Address</p>
    <p>09112, Idd</p>
  </div>

  <button
    className="mt-6 px-6 py-3 bg-[#0f1c24] text-white rounded-lg"
    onClick={() => setMenuhOpen(false)}
  >
    Schedule a visit
  </button>
</div>


      </div>

      {/* Background Blur */}
      {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-3xl /20 z-40"></div>
      )}
    </>
  );
}
