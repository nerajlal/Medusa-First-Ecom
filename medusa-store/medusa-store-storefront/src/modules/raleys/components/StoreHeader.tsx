import React, { Suspense } from 'react';
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { SearchInput } from "./SearchInput"

export const StoreHeader = ({ countryCode }: { countryCode: string }) => {
  return (
    <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm">
      <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <LocalizedClientLink href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-800 rounded-full flex items-center justify-center text-white text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            </div>
            <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">Raley's</span>
          </LocalizedClientLink>

          <div className="hidden lg:flex bg-gray-100 rounded-full p-1 ml-4">
            <button className="bg-white text-gray-900 px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">Delivery</button>
            <button className="text-gray-500 px-4 py-1.5 rounded-full text-sm font-bold hover:text-gray-900 transition-colors">Pickup</button>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="flex-1 max-w-xl mx-8 hidden md:block">
          <SearchInput countryCode={countryCode} />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <LocalizedClientLink href="/account" className="hidden sm:flex items-center gap-2 text-sm font-bold text-gray-700 hover:text-green-800 transition-colors">
            Log In
          </LocalizedClientLink>
          
          <Suspense fallback={
            <div className="bg-green-800 text-white px-5 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold shadow-md flex items-center gap-2 opacity-80">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>
              <span className="text-sm">Cart · 0</span>
            </div>
          }>
            <CartButtonWrapper />
          </Suspense>
        </div>
      </div>

      {/* Mobile Search - Second Row */}
      <div className="md:hidden px-4 pb-3">
        <SearchInput countryCode={countryCode} />
      </div>
    </header>
  );
}

const CartButtonWrapper = () => {
  return (
    <div className="raleys-cart-button">
      <CartButton />
    </div>
  )
}
