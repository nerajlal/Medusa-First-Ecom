import React from "react"

export default function Loading() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center">
      {/* Top Progress Bar Simulation */}
      <div className="fixed top-0 left-0 w-full h-1 z-[200] overflow-hidden bg-gray-100">
        <div className="h-full bg-green-600 animate-loading-bar origin-left"></div>
      </div>
      
      {/* Center Spinner/Logo */}
      <div className="flex flex-col items-center gap-6 animate-pulse">
        <div className="w-16 h-16 bg-green-800 rounded-full flex items-center justify-center text-white shadow-xl">
           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-xl font-black text-gray-900 tracking-tight">Raley's</p>
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Preparing your fresh selection...</p>
        </div>
      </div>
    </div>
  )
}
