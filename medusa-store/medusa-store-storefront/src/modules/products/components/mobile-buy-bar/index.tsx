"use client"

import React from "react"
import { Button } from "@medusajs/ui"
import { HttpTypes } from "@medusajs/types"
import { getProductPrice } from "@lib/util/get-product-price"

type MobileBuyBarProps = {
  product: HttpTypes.StoreProduct
}

const MobileBuyBar: React.FC<MobileBuyBarProps> = ({ product }) => {
  const price = getProductPrice({
    product: product,
  })

  const selectedPrice = price ? (price.variantPrice || price.cheapestPrice || null) : null

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="small:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-ui-border-base p-4 flex items-center justify-between gap-x-4 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex flex-col">
        <span className="text-xs text-ui-fg-muted uppercase tracking-wider font-bold">Total</span>
        <span className="text-lg font-bold">
           {selectedPrice?.calculated_price}
        </span>
      </div>
      <Button
        onClick={scrollToTop}
        className="flex-1 h-12 rounded-none bg-black text-white hover:bg-neutral-800 font-bold uppercase tracking-[0.2em] transform active:scale-95 transition-all"
      >
        Buy Now
      </Button>
    </div>
  )
}

export default MobileBuyBar
