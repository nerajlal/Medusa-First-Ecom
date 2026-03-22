import { Heading, Text } from "@medusajs/ui"
import { Instagram } from "@medusajs/icons"
import Image from "next/image"

const SocialFeed = () => {
    return (
        <div className="bg-obsidian-900 py-32 small:py-56 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brass-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="content-container relative z-10">
                <div className="flex flex-col small:flex-row small:items-end justify-between mb-24 gap-y-10">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4">
                            <Instagram className="text-gold-500" size={24} />
                            <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-black">Digital Curation</span>
                        </div>
                        <Heading level="h2" className="text-5xl small:text-7xl font-serif text-white leading-tight">
                            The <span className="italic text-gold-500">Social</span> Gallery.
                        </Heading>
                    </div>
                    <div className="flex flex-col gap-y-4 small:items-end">
                         <Text className="text-sand-100/60 max-w-[450px] small:text-right font-sans text-lg leading-relaxed">
                            Join our global circle of artisans and collectors. Share your #ArtisanFusion aesthetic with the world.
                        </Text>
                        <div className="h-[2px] w-24 bg-gold-500/30" />
                    </div>
                </div>

                {/* Mosaic Feed Grid - More dramatic layout */}
                <div className="grid grid-cols-2 small:grid-cols-4 gap-4 small:gap-10">
                    {/* Item 1 - Hero Post */}
                    <div className="col-span-2 row-span-2 group relative aspect-square overflow-hidden border border-gold-500/30">
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-700 z-10" />
                        <div className="absolute top-8 right-8 z-20 text-white/50 group-hover:text-gold-500 transition-all scale-150">
                            <Instagram />
                        </div>
                        <Image
                            src="/images/homepage/women_fusion.png"
                            alt="Luxury Fashion Fusion"
                            fill
                            className="object-cover transition-transform duration-1000 scale-105 group-hover:scale-110"
                        />
                        <div className="absolute bottom-6 left-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                             <span className="text-white font-serif italic text-lg decoration-gold-500 underline underline-offset-4">View Collection</span>
                        </div>
                    </div>
                    
                    {/* Item 2 */}
                    <div className="group relative aspect-square overflow-hidden border border-gold-500/30">
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-700 z-10" />
                        <Image
                            src="/images/homepage/men_fusion.png"
                            alt="Men's Heritage Collection"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Item 3 */}
                    <div className="group relative aspect-[3/4] overflow-hidden border border-gold-500/30 translate-y-12">
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-700 z-10" />
                        <Image
                            src="/images/homepage/accessories_luxe.png"
                            alt="Luxury Accessories"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>

                    {/* Item 4 */}
                    <div className="group relative aspect-square overflow-hidden border border-gold-500/30 small:col-start-3">
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/10 transition-all duration-700 z-10" />
                        <Image
                            src="/images/homepage/artisan_bg.png"
                            alt="Artisan Texture"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                    </div>
                </div>
            </div>
            
            {/* Social Links Footer */}
            <div className="mt-32 border-t border-gold-500/10 py-12">
                 <div className="content-container flex flex-wrap justify-between items-center gap-8 opacity-40 hover:opacity-100 transition-opacity duration-500">
                      <span className="text-white font-sans tracking-[0.5em] text-[10px] uppercase font-bold text-gold-500">#ArtisanFusionCollective</span>
                      <div className="flex gap-x-12 grayscale invert">
                            {/* Icons here if needed, but keeping it clean */}
                      </div>
                 </div>
            </div>
        </div>
    )
}

export default SocialFeed
