import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ChevronDown from "@modules/common/icons/chevron-down"

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="w-full bg-gray-50 relative small:min-h-screen raleys-font">
      <div className="h-20 bg-white border-b border-gray-200 sticky top-0 z-[100] shadow-sm">
        <nav className="flex h-full items-center max-w-7xl mx-auto px-6 justify-between">
          <LocalizedClientLink
            href="/cart"
            className="text-sm font-bold text-[#1a4d2e] flex items-center gap-x-2 flex-1 basis-0 hover:-translate-x-1 transition-transform"
            data-testid="back-to-cart-link"
          >
            <ChevronDown className="rotate-90" size={16} />
            <span className="hidden small:block">Back to shopping bag</span>
            <span className="block small:hidden">Back</span>
          </LocalizedClientLink>
          
          <LocalizedClientLink href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-green-800 rounded-full flex items-center justify-center text-white text-xl">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
            </div>
            <span className="text-2xl font-black text-gray-900 tracking-tight">Raley's Market</span>
          </LocalizedClientLink>

          <div className="flex-1 basis-0 flex justify-end">
             <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure Checkout
             </div>
          </div>
        </nav>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-12" data-testid="checkout-container">
        {children}
      </div>
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4 text-gray-400 text-sm font-medium">
           <p>© 2026 Raley's Market. All rights reserved.</p>
           <div className="flex gap-6">
              <span className="hover:text-green-800 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-green-800 cursor-pointer">Terms of Service</span>
           </div>
        </div>
      </footer>
    </div>
  )
}
