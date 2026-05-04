import Image from "next/image"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "@modules/products/components/thumbnail"

type ProductCardProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
}

export const ProductCard = ({ product, region }: ProductCardProps) => {
  // Simple price calculation for display
  const cheapestVariant = product.variants?.reduce((prev, curr) => {
    return (prev.calculated_price?.calculated_amount ?? 0) < (curr.calculated_price?.calculated_amount ?? 0) ? prev : curr
  })

  const price = cheapestVariant?.calculated_price?.calculated_amount ?? 0
  const currencyCode = region.currency_code?.toUpperCase() ?? "USD"
  
  const thumbnail = product.thumbnail || product.images?.[0]?.url

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 p-4 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <LocalizedClientLink href={`/products/${product.handle}`} className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-gray-50 flex items-center justify-center">
        {thumbnail ? (
          <Image 
            src={thumbnail} 
            alt={product.title} 
            fill
            sizes="(max-width: 768px) 100vw, 300px"
            className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
        )}
        <button className="absolute bottom-3 right-3 bg-white text-[#1a4d2e] p-2.5 rounded-full shadow-lg border border-gray-100 hover:bg-[#1a4d2e] hover:text-white transition-all transform hover:scale-110 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
        </button>
      </LocalizedClientLink>
      
      <div className="flex flex-col flex-1">
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-xl font-black text-gray-900">
             {new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyCode }).format(price)}
          </span>
        </div>
        
        <LocalizedClientLink href={`/products/${product.handle}`} className="text-gray-800 font-bold leading-snug hover:text-[#1a4d2e] transition-colors line-clamp-2">
          {product.title}
        </LocalizedClientLink>
        
        <div className="mt-auto pt-4 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
           <span>Raley's Fresh</span>
           <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
