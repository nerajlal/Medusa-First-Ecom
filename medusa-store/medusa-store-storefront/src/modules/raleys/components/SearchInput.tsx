"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation"

export const SearchInput = ({ countryCode, className = "" }: { countryCode: string, className?: string }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")

  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchValue.trim()) {
      setIsSearching(true)
      router.push(`/${countryCode}/store?q=${encodeURIComponent(searchValue.trim())}`)
    }
  }

  return (
    <div className={`relative group ${className}`}>
      <input
        type="text"
        placeholder="Search groceries..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleSearch}
        className="w-full bg-gray-100 rounded-lg px-10 sm:px-12 py-2 border-none focus:ring-2 focus:ring-green-600 outline-none transition-all group-hover:bg-gray-200 text-sm sm:text-base"
      />
      <div className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 group-hover:text-gray-600 transition-colors">
        {isSearching ? (
          <svg className="animate-spin h-5 w-5 text-green-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
        )}
      </div>
    </div>
  )
}
