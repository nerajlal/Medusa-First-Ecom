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
        "fixed top-20 inset-x-0 z-40 bg-white/90 backdrop-blur-md border-b border-ui-border-base transition-all duration-300 transform",
        {
          "translate-y-0 opacity-100": isVisible,
          "-translate-y-full opacity-0 pointer-events-none": !isVisible,
        }
      )}
    >
      <div className="content-container h-16 flex items-center justify-between px-6 small:px-12">
        <div className="flex items-center gap-x-8">
          <span className="font-bold text-lg uppercase tracking-tight hidden small:block">
            {product.title}
          </span>
          <nav className="flex items-center gap-x-6 text-sm font-medium text-ui-fg-subtle">
            <a href="#highlights" className="hover:text-ui-fg-base transition-colors">Highlights</a>
            <a href="#specifications" className="hover:text-ui-fg-base transition-colors">Specs</a>
          </nav>
        </div>

        <div className="flex items-center gap-x-6">
          <div className="hidden small:flex items-center gap-x-2">
            {selectedPrice?.price_type === "sale" && (
              <span className="line-through text-ui-fg-muted text-xs">
                {selectedPrice.original_price}
              </span>
            )}
            <span className={clx("font-bold text-base", {
              "text-ui-fg-interactive": selectedPrice?.price_type === "sale"
            })}>
              {selectedPrice?.calculated_price}
            </span>
          </div>
          <Button
            onClick={scrollToTop}
            className="rounded-none px-8 py-2 bg-black text-white hover:bg-neutral-800 transition-all font-bold uppercase tracking-widest text-xs"
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  )
}

export default StickySubHeader
