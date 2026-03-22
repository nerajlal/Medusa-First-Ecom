import { Heading, Text } from "@medusajs/ui"
import { Instagram } from "@medusajs/icons"
import Image from "next/image"

const SocialFeed = () => {
    return (
        <div className="bg-obsidian-900 py-32 small:py-64 overflow-hidden relative">
            {/* Ambient Lighting Accents */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gold-500/10 blur-[150px] rounded-full -translate-y-1/2" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brass-500/5 blur-[120px] rounded-full translate-y-1/2" />
            
            <div className="content-container relative z-10">
                {/* Section Header */}
                <div className="flex flex-col small:flex-row small:items-center justify-between mb-32 gap-y-12">
                    <div className="flex flex-col gap-y-6">
                        <div className="flex items-center gap-x-4">
                            <div className="h-px w-12 bg-gold-500" />
                            <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-black">Community & Curation</span>
                        </div>
                        <Heading level="h2" className="text-6xl small:text-9xl font-serif text-white leading-tight tracking-tighter">
                            Follow the <br /> <span className="italic text-gold-500 decoration-gold-500/20 underline underline-offset-16">Journey.</span>
                        </Heading>
                    </div>
                    
                    <div className="flex flex-col gap-y-8 small:items-end">
                         <Text className="text-sand-100/60 max-w-[450px] small:text-right font-sans text-xl leading-relaxed font-light">
                            Join a global collective of connoisseurs. Experience the daily evolution of Artisan Fusion across our digital galleries.
                        </Text>
                        <div className="flex items-center gap-x-6">
                             <Instagram className="text-gold-500 scale-150" />
                             <span className="text-white font-sans tracking-[0.3em] font-black text-xs">@ARTISANFUSION_ELITE</span>
                        </div>
                    </div>
                </div>

                {/* Dramatic Masonry Gallery */}
                <div className="grid grid-cols-1 small:grid-cols-12 gap-6 small:gap-12">
                    {/* Item 1: High Fashion (Desert) */}
                    <div className="small:col-span-8 group relative aspect-[16/9] overflow-hidden border border-gold-500/20 shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-1000 z-10" />
                        <Image
                            src="/images/homepage/luxury_social_4_fashion.png"
                            alt="High Fashion Fusion"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                        <div className="absolute bottom-10 left-10 z-20">
                             <span className="text-gold-500 font-sans tracking-[0.4em] text-[10px] font-black uppercase mb-2 block">Couture Edit</span>
                             <Heading level="h3" className="text-white font-serif text-3xl italic">The Desert Rose Series</Heading>
                        </div>
                    </div>

                    {/* Item 2: Jewelry Detail */}
                    <div className="small:col-span-4 group relative aspect-[4/5] overflow-hidden border border-gold-500/20 mt-12 small:mt-24 shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-1000 z-10" />
                        <Image
                            src="/images/homepage/luxury_social_3_jewelry.png"
                            alt="Handcrafted Jewelry"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-125"
                        />
                        <div className="absolute top-10 right-10 z-20">
                             <Instagram className="text-white/50 group-hover:text-gold-500 transition-colors" />
                        </div>
                    </div>

                    {/* Item 3: Interior/Watch */}
                    <div className="small:col-span-4 group relative aspect-[4/5] overflow-hidden border border-gold-500/20 shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-1000 z-10" />
                        <Image
                            src="/images/homepage/luxury_social_1_fusion.png"
                            alt="Luxury Interior"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-110"
                        />
                    </div>

                    {/* Item 4: Storefront */}
                    <div className="small:col-span-8 group relative aspect-[16/9] overflow-hidden border border-gold-500/20 small:-mt-12 shadow-2xl">
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-1000 z-10" />
                        <Image
                            src="/images/homepage/luxury_social_2_storefront.png"
                            alt="Boutique Presence"
                            fill
                            className="object-cover transition-transform duration-[2s] group-hover:scale-105"
                        />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-700">
                             <div className="px-8 py-4 bg-obsidian-900/80 backdrop-blur-md border border-gold-500/50">
                                 <span className="text-gold-500 font-sans tracking-[0.5em] text-xs font-black uppercase">Visit Boutique</span>
                             </div>
                        </div>
                    </div>
                </div>

                {/* Footer Editorial Call */}
                <div className="mt-48 flex flex-col items-center">
                    <div className="h-24 w-px bg-gradient-to-b from-gold-500 to-transparent mb-12" />
                    <Heading level="h3" className="text-3xl small:text-4xl font-serif text-white italic mb-12 text-center">
                        Every piece tells a <span className="text-gold-500">Global Story</span>.
                    </Heading>
                    <div className="flex gap-x-12 opacity-30 hover:opacity-100 transition-opacity duration-700 grayscale invert">
                        {/* Placeholder for brand logos or partners if needed */}
                         <span className="text-[10px] uppercase tracking-[1em] text-white font-bold">Paris</span>
                         <span className="text-[10px] uppercase tracking-[1em] text-white font-bold">Dubai</span>
                         <span className="text-[10px] uppercase tracking-[1em] text-white font-bold">Mumbai</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialFeed
