import React from "react"

export default function Loading() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="h-1 bg-green-600 animate-loading-bar shadow-[0_0_10px_rgba(22,101,52,0.5)]"></div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes loading-bar {
          0% { width: 0%; transform: translateX(-100%); }
          50% { width: 70%; transform: translateX(0); }
          100% { width: 100%; transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 2s infinite ease-in-out;
        }
      `}} />
    </div>
  )
}
