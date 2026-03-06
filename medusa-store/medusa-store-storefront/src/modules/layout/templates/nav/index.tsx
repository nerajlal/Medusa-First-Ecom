import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { listLocales } from "@lib/data/locales"
import { getLocale } from "@lib/data/locale-actions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import SideMenu from "@modules/layout/components/side-menu"

export default async function Nav() {
  const [regions, locales, currentLocale] = await Promise.all([
    listRegions().then((regions: StoreRegion[]) => regions),
    listLocales(),
    getLocale(),
  ])

  return (
    <div className="sticky top-0 inset-x-0 z-50 group">
      <header className="relative h-20 mx-auto duration-200 bg-[#0a1628]/90 backdrop-blur-md border-b border-white/10 transition-all">
        <nav className="content-container flex items-center justify-between w-full h-full">
          {/* Left: Hamburger + Nav Links */}
          <div className="flex-1 basis-0 h-full flex items-center gap-x-6">
            <div className="h-full">
              <SideMenu regions={regions} locales={locales} currentLocale={currentLocale} />
            </div>
            <div className="hidden small:flex items-center gap-x-8 h-full text-xs font-medium uppercase tracking-[0.15em] text-white/70">
              <LocalizedClientLink href="/rooms" className="hover:text-[#c9a96e] transition-colors">
                Rooms
              </LocalizedClientLink>
              <LocalizedClientLink href="/about" className="hover:text-[#c9a96e] transition-colors">
                About
              </LocalizedClientLink>
              <LocalizedClientLink href="/contact" className="hover:text-[#c9a96e] transition-colors">
                Contact
              </LocalizedClientLink>
            </div>
          </div>

          {/* Center: Brand Logo */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="flex flex-col items-center leading-none"
              data-testid="nav-store-link"
            >
              <span className="font-playfair text-2xl font-bold tracking-[0.3em] text-white uppercase">
                Metora
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-[#c9a96e] font-medium mt-0.5">
                Luxury Stay
              </span>
            </LocalizedClientLink>
          </div>

          {/* Right: Sign In + Book Now */}
          <div className="flex items-center gap-x-4 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full text-xs font-medium uppercase tracking-[0.15em] text-white/70">
              <LocalizedClientLink href="/account" className="hover:text-[#c9a96e] transition-colors">
                Sign In
              </LocalizedClientLink>
            </div>
            <LocalizedClientLink
              href="/rooms"
              className="hidden small:flex h-10 px-6 items-center bg-[#c9a96e] text-[#0a1628] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b8935a] transition-colors"
            >
              Book Now
            </LocalizedClientLink>
            <Suspense
              fallback={
                <LocalizedClientLink className="text-white/70 hover:text-white flex gap-2 text-xs font-medium" href="/cart">
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <div className="font-medium text-white/80">
                <CartButton />
              </div>
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
