"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex justify-between items-start px-14 pt-6 z-50">
        {/* Small Logo (always visible on far left) */}
        <Link href="/"><img src="/asset/logo.svg" alt="Logo" className="w-24 h-16" /></Link>
       

        {/* Navbar */}
        <nav
          className="flex flex-col text-[#0f1c24] font-medium rounded-2xl bg-white shadow-sm overflow-hidden transition-all duration-500 ease-in-out w-[600px]"
          style={{ height: menuOpen ? "700px" : "64px" }} // 64px = h-16
        >
          {/* Top Row */}
          <div className="flex items-center justify-between bg-white w-full h-16 px-10 flex-shrink-0">
            {/* Show navlinks when collapsed, big logo when expanded */}
            {menuOpen ? (
              <img src="/asset/logo.svg" alt="Logo" className="w-12 h-12" />
            ) : (
              <div className="flex space-x-14">
                <a href="/home" className="hover:text-gray-600 text-sm">Home</a>
                <a href="/about" className="hover:text-gray-600 text-sm">About</a>
                <a href="/services" className="hover:text-gray-600 text-sm">Services</a>
                <a href="/contact-us" className="hover:text-gray-600 text-sm">Contact</a>
                <a href="/gallery" className="hover:text-gray-600 text-sm">Gallery</a>
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
            className={`flex flex-col items-start px-10 justify-start transition-opacity bg-white w-full duration-500 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <ul className="space-y-6 text-[40px] font-medium text-[#0f1c24] mt-6">
              <li className={`transform -translate-y-1/2 transition-all duration-100 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}
 ><a href="/home">Home</a></li>
               <li className={`transform -translate-y-1/2 transition-all duration-300 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}
 ><a href="/about">About</a></li>
               <li className={`transform -translate-y-1/2 transition-all duration-500 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}
 ><a href="/services">Services</a></li>
               <li className={`transform -translate-y-1/2 transition-all duration-700 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}
 ><a href="/contact-us">Contact</a></li>
               <li className={`transform -translate-y-1/2 transition-all duration-900 ${
                menuOpen
                  ? "opacity-100 translate-y-3 pointer-events-none"
                  : "opacity-10 translate-y-0"
              }`}
 ><a href="/gallery">Gallery</a></li>
            </ul>

            <div className="mt-10 text-sm text-gray-500 text-left">
              <p>betterlife@gmail.com</p>
              <p>Address</p>
              <p>09112, Idd</p>
            </div>

            <button className="mt-10 flex items-center text-[#0f1c24] font-medium">
              <span className="mr-2 text-[30px]">→</span> Schedule a visit
            </button>
          </div>
        </nav>
      </div>

      {/* Background Blur */}
      {menuOpen && (
        <div className="fixed inset-0 backdrop-blur-3xl bg-black/20 z-40"></div>
      )}
    </>
  );
}
