import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
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
    <div className="py-32 small:py-56 bg-sand-50 relative overflow-hidden">
        {/* Large Editorial Background Text */}
        <div className="absolute top-20 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
            <span className="text-[150px] small:text-[300px] font-serif font-black text-obsidian-900/[0.03] uppercase leading-none">
                Curation
            </span>
        </div>

        <div className="content-container relative z-10">
            {/* Header Section */}
            <div className="flex flex-col small:flex-row small:items-end justify-between mb-32 gap-y-12">
                <div className="flex flex-col gap-y-6 max-w-[650px]">
                    <div className="flex items-center gap-x-4">
                        <div className="h-[2px] w-16 bg-gold-500" />
                        <span className="text-gold-500 uppercase tracking-[0.6em] text-[10px] font-black">Summer/Spring 2026</span>
                    </div>
                    <Heading level="h2" className="text-5xl small:text-8xl font-serif text-obsidian-900 leading-[0.9] tracking-tight">
                        The <span className="italic text-gold-600">Modern</span> <br /> Selection.
                    </Heading>
                </div>
                
                <div className="flex flex-col gap-y-6 small:items-end">
                    <Text className="text-lg small:text-xl text-obsidian-900/60 max-w-[400px] small:text-right font-sans leading-relaxed">
                        A definitive collection of essentials, meticulously crafted for the elite lifestyle. Heritage meets modern precision.
                    </Text>
                    <div className="flex items-center gap-x-4">
                        <span className="text-[10px] uppercase tracking-widest font-black text-gold-500">Explore All</span>
                        <div className="h-px w-24 bg-gold-500/30" />
                    </div>
                </div>
            </div>

            {/* Editorial Grid Layout */}
            <div className="grid grid-cols-1 small:grid-cols-12 gap-y-32 small:gap-x-12 items-stretch">
                {products.slice(0, 4).map((product, index) => (
                    <div 
                        key={product.id} 
                        className={`
                            ${index === 0 ? "small:col-span-8" : ""}
                            ${index === 1 ? "small:col-span-4 small:pt-32" : ""}
                            ${index === 2 ? "small:col-span-4" : ""}
                            ${index === 3 ? "small:col-span-8 small:pt-32" : ""}
                            animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-${index * 200}
                        `}
                    >
                        <div className={`
                            relative h-full flex flex-col gap-y-6
                            ${(index === 0 || index === 3) ? "border-l border-gold-500/10 pl-6 small:pl-16 ml-2 small:ml-0" : "px-4 small:px-0"}
                        `}>
                            {/* Number Indicator */}
                            <div className="absolute -left-4 small:-left-8 top-0 text-gold-500 font-serif italic text-3xl small:text-4xl opacity-20 z-0">
                                0{index + 1}
                            </div>
                            
                            <div className="relative z-10 flex-grow">
                                <ProductPreview product={product} region={region} isFeatured />
                            </div>
                            
                            {/* Editorial Note for large items */}
                            {(index === 0 || index === 3) && (
                                <div className="mt-4 pt-6 border-t border-gold-500/10 max-w-[300px]">
                                    <Text className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-2">Artisan Highlight</Text>
                                    <Text className="text-xs text-obsidian-900/40 italic font-sans leading-relaxed">
                                        This piece represents the absolute pinnacle of our current fusion collection, blending hand-woven textures with contemporary structure.
                                    </Text>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Bottom CTA Area */}
            <div className="mt-48 flex flex-col items-center">
                <div className="w-px h-32 bg-gradient-to-b from-gold-500 to-transparent mb-12" />
                <Heading level="h3" className="text-2xl font-serif italic text-obsidian-900 mb-8">
                    Discover the full curation.
                </Heading>
                <div className="group relative cursor-pointer">
                    <span className="text-xs uppercase tracking-[0.5em] font-black text-obsidian-900 group-hover:text-gold-600 transition-colors">View All Products</span>
                    <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-gold-500 group-hover:w-full transition-all duration-700" />
                </div>
            </div>
        </div>
    </div>
  )
}
