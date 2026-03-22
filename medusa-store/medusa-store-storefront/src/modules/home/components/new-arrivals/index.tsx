import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ProductPreview from "@modules/products/components/product-preview"

export default function NewArrivals({
  products,
  region,
}: {
  products: HttpTypes.StoreProduct[]
  region: HttpTypes.StoreRegion
}) {
  if (!products || products.length === 0) {
    return null
  }

  return (
    <div className="py-16 small:py-24 bg-white relative overflow-hidden">
        {/* Background Connectivity Lines */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
             <div className="grid grid-cols-4 h-full w-full border-x border-gold-500">
                 <div className="border-r border-gold-500" />
                 <div className="border-r border-gold-500" />
                 <div className="border-r border-gold-500" />
             </div>
        </div>

        <div className="content-container relative z-10">
            {/* Minimalist Centered Header */}
            <div className="flex flex-col items-center gap-y-6 mb-20 text-center">
                <div className="flex items-center gap-x-4">
                    <div className="h-[1px] w-12 bg-gold-500/30" />
                    <span className="text-gold-500 uppercase tracking-[0.8em] text-[10px] font-black">Limited Release</span>
                    <div className="h-[1px] w-12 bg-gold-500/30" />
                </div>
                <Heading level="h2" className="text-5xl small:text-8xl font-serif text-obsidian-900 leading-tight uppercase tracking-tight">
                    The Modern <span className="italic text-gold-600 underline decoration-gold-600/10 underline-offset-12">Selection.</span>
                </Heading>
            </div>

            {/* Tight Symmetric 4-Column Grid */}
            <div className="grid grid-cols-2 small:grid-cols-4 gap-x-6 small:gap-x-10 gap-y-16">
                {products.slice(0, 4).map((product, index) => (
                    <div 
                        key={product.id} 
                        className={`
                            group relative
                            animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-${index * 150}
                        `}
                    >
                        {/* Vertical Index label */}
                        <div className="absolute -left-4 top-24 -rotate-90 origin-left text-obsidian-900/10 font-black tracking-[0.5em] text-[10px] z-0 hidden small:block truncate">
                            COLLECTION ITEM NO. 0{index + 1}
                        </div>

                        <div className="relative z-10 transition-transform duration-700 group-hover:-translate-y-2">
                            <ProductPreview product={product} region={region} isFeatured={false} />
                            
                            {/* Technical Specs Accent */}
                            <div className="mt-6 pt-4 border-t border-gold-500/5 flex justify-between items-center">
                                 <span className="text-[9px] text-obsidian-900/30 font-sans tracking-widest font-bold">LIMITED QUANTITY</span>
                                 <div className="h-2 w-2 rounded-full bg-gold-500/20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom Subtle CTA Area */}
            <div className="mt-24 border-t border-gold-500/10 pt-16 flex flex-col items-center">
                <div className="group relative cursor-pointer flex items-center gap-x-6">
                    <div className="h-px w-12 bg-gold-500/40 group-hover:w-20 transition-all duration-700" />
                    <LocalizedClientLink href="/store" className="text-xs uppercase tracking-[0.6em] font-black text-obsidian-900 group-hover:text-gold-600 transition-colors">
                        Discover Entire Gallery
                    </LocalizedClientLink>
                    <div className="h-px w-12 bg-gold-500/40 group-hover:w-20 transition-all duration-700" />
                </div>
            </div>
        </div>
    </div>
  )
}
