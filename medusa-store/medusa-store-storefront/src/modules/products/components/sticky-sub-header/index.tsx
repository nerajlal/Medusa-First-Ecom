"use client"

import React, { useEffect, useState } from "react"
import { clx, Button } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { getProductPrice } from "@lib/util/get-product-price"

type StickySubHeaderProps = {
  product: HttpTypes.StoreProduct
}

const StickySubHeader: React.FC<StickySubHeaderProps> = ({ product }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the initial fold (roughly 600px)
      if (window.scrollY > 600) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const price = getProductPrice({
    product: product,
  })

  const selectedPrice = price ? (price.variantPrice || price.cheapestPrice || null) : null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className={clx(
        "fixed top-0 small:top-14 inset-x-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100 transition-all duration-500 ease-in-out transform",
        {
          "translate-y-0 opacity-100 shadow-sm": isVisible,
          "-translate-y-full opacity-0 pointer-events-none": !isVisible,
        }
      )}
    >
      <div className="content-container h-14 flex items-center justify-between px-4 small:px-12">
        <div className="flex items-center">
          <span className="font-bold text-base small:text-lg tracking-tight text-neutral-900 truncate max-w-[150px] small:max-w-none">
            {product.title}
          </span>
        </div>

        <div className="flex items-center gap-x-4 small:gap-x-10 h-full">
          <nav className="hidden small:flex items-center gap-x-8 h-full">
            <a 
              href="#highlights" 
              className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors h-full flex items-center border-b-2 border-transparent hover:border-black"
            >
              Overview
            </a>
            <a 
              href="#specifications" 
              className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors h-full flex items-center border-b-2 border-transparent hover:border-black"
            >
              Specs
            </a>
            <a 
              href="#related" 
              className="text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-black transition-colors h-full flex items-center border-b-2 border-transparent hover:border-black"
            >
              Related
            </a>
          </nav>

          <div className="flex items-center gap-x-4 small:gap-x-8">
            <div className="hidden mid:flex items-center gap-x-2">
              {selectedPrice?.price_type === "sale" && (
                <span className="line-through text-neutral-400 text-[10px] font-bold">
                  {selectedPrice.original_price}
                </span>
              )}
              <span className={clx("font-bold text-sm tracking-tight", {
                "text-red-600": selectedPrice?.price_type === "sale"
              })}>
                {selectedPrice?.calculated_price}
              </span>
            </div>
            <Button
              onClick={scrollToTop}
              className="rounded-full px-6 small:px-10 h-9 bg-[#000] text-white hover:bg-[#333] transition-all font-bold uppercase tracking-widest text-[10px] flex items-center justify-center border-none"
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickySubHeader
