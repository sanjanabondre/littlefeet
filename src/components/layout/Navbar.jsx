import React from 'react';

export default function Navbar() {
  return (
    <header className="w-full bg-white py-4 px-8 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#FF4D80] flex items-center justify-center text-white font-bold">
            🐾
          </div>
          <span className="text-2xl font-black text-[#FF4D80] tracking-tight">LittleFeet</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
          <a href="#" className="text-[#FF4D80] font-semibold border-b-2 border-[#FF4D80] pb-1">Home</a>
          <a href="#" className="hover:text-[#FF4D80] transition-colors">Shop</a>
          <a href="#" className="hover:text-[#FF4D80] transition-colors">Categories</a>
          <a href="#" className="hover:text-[#FF4D80] transition-colors">About</a>
          <a href="#" className="hover:text-[#FF4D80] transition-colors">Contact</a>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-5 text-gray-600">
          <button className="hover:text-[#FF4D80] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
          </button>
          
          <button className="hover:text-[#FF4D80] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>

          <button className="hover:text-[#FF4D80] transition-colors relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
            </svg>
            <span className="absolute -top-2 -right-2 bg-[#FF4D80] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>

      </div>
    </header>
  );
}