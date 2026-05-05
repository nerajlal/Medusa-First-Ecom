import { Metadata } from "next"

import { listCartOptions, retrieveCart } from "@lib/data/cart"
import { retrieveCustomer } from "@lib/data/customer"
import { getBaseURL } from "@lib/util/env"
import { StoreCartShippingOption } from "@medusajs/types"
import CartMismatchBanner from "@modules/layout/components/cart-mismatch-banner"
import Footer from "@modules/layout/templates/footer"
import Nav from "@modules/layout/templates/nav"
import FreeShippingPriceNudge from "@modules/shipping/components/free-shipping-price-nudge"
import { StoreHeader } from "@modules/raleys/components/StoreHeader"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default async function PageLayout(props: { children: React.ReactNode, params: Promise<{ countryCode: string }> }) {
  const { countryCode } = await props.params
  
  // Parallelize all layout data retrieval
  const [customer, cart, shippingOptionsData] = await Promise.all([
    retrieveCustomer().catch(() => null),
    retrieveCart().catch(() => null),
    listCartOptions().catch(() => ({ shipping_options: [] }))
  ])

  const shippingOptions = shippingOptionsData?.shipping_options ?? []

  return (
    <div className="bg-white min-h-screen raleys-font">
      <StoreHeader countryCode={countryCode} />
      
      {customer && cart && (
        <CartMismatchBanner customer={customer} cart={cart} />
      )}

      {cart && (
        <FreeShippingPriceNudge
          variant="popup"
          cart={cart}
          shippingOptions={shippingOptions}
        />
      )}
      
      {props.children}
      
      <footer className="bg-gray-50 border-t border-gray-100 py-16 mt-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-600">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <LocalizedClientLink href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center text-white text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
                </div>
                <span className="text-xl font-black text-gray-900">Raley's</span>
              </LocalizedClientLink>
            </div>
            <p className="text-sm leading-relaxed">Providing fresh, quality groceries to your community since 1935. Same-day delivery and pickup available.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Shop</h4>
            <ul className="text-sm space-y-4">
              <li><LocalizedClientLink href="/categories/fresh-produce" className="hover:text-green-800 cursor-pointer">Produce</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/categories/meat-seafood" className="hover:text-green-800 cursor-pointer">Meat & Seafood</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/categories/dairy-eggs" className="hover:text-green-800 cursor-pointer">Dairy & Eggs</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/categories/bakery" className="hover:text-green-800 cursor-pointer">Bakery</LocalizedClientLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Support</h4>
            <ul className="text-sm space-y-4">
              <li><LocalizedClientLink href="/help" className="hover:text-green-800 cursor-pointer">Help Center</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/returns" className="hover:text-green-800 cursor-pointer">Returns</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/contact" className="hover:text-green-800 cursor-pointer">Contact Us</LocalizedClientLink></li>
              <li><LocalizedClientLink href="/store-locator" className="hover:text-green-800 cursor-pointer">Store Locator</LocalizedClientLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase text-xs tracking-widest">Connect</h4>
            <div className="flex gap-4">
               <a href="https://facebook.com" className="w-10 h-10 bg-gray-200 rounded-full hover:bg-green-100 hover:text-green-800 flex items-center justify-center transition-colors cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
               </a>
               <a href="https://instagram.com" className="w-10 h-10 bg-gray-200 rounded-full hover:bg-green-100 hover:text-green-800 flex items-center justify-center transition-colors cursor-pointer">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
               </a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-16 mt-16 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-400 uppercase tracking-widest">
           <p>© 2026 Raley's Market. All rights reserved.</p>
           <div className="flex gap-8">
              <LocalizedClientLink href="/privacy-policy">Privacy Policy</LocalizedClientLink>
              <LocalizedClientLink href="/terms-of-service">Terms of Service</LocalizedClientLink>
              <LocalizedClientLink href="/accessibility">Accessibility</LocalizedClientLink>
           </div>
        </div>
      </footer>
    </div>
  )
}
