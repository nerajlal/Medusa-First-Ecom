import React from 'react';
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const StoreHeader = () => (
  <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between shadow-sm">
    <div className="flex items-center gap-6">
      <LocalizedClientLink href="/" className="flex items-center gap-2">
        <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
        </div>
        <span className="text-2xl font-black text-gray-900 tracking-tight">Raley's Market</span>
      </LocalizedClientLink>

      <div className="hidden lg:flex bg-gray-100 rounded-full p-1 ml-4">
        <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">Delivery</button>
        <button className="text-gray-500 px-4 py-1.5 rounded-full text-sm font-bold hover:text-gray-900 transition-colors">Pickup</button>
      </div>

      <div className="hidden xl:flex items-center gap-1.5 ml-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-green-800 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
        <span>Delivery to <span className="text-gray-900 font-bold">Mumbai...</span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </div>
    </div>

    <div className="flex-1 max-w-xl mx-8 hidden md:block">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search for fresh groceries..."
          className="w-full bg-gray-100 rounded-lg px-12 py-2.5 border-none focus:ring-2 focus:ring-green-600 outline-none transition-all group-hover:bg-gray-200"
        />
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        </div>
      </div>
    </div>

    <div className="flex items-center gap-4">
      <button className="hidden md:flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-green-800 transition-colors">
        Log In
      </button>
      <button className="bg-green-800 text-white px-6 py-2.5 rounded-full font-bold hover:bg-green-700 transition-all shadow-md active:scale-95 flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
        Cart · 0
      </button>
    </div>
  </header>
);
