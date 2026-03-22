import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
    return (
        <div className="relative w-full h-[100dvh] min-h-[800px] overflow-hidden bg-obsidian-900 flex flex-col justify-center">
            {/* Masterpiece Background (65% width on large screens) */}
            <div className="absolute inset-0 w-full small:w-[70%] h-full z-0 overflow-hidden">
                <Image
                    src="/images/homepage/luxury_hero.png"
                    alt="Artisan Fusion Masterpiece"
                    fill
                    className="object-cover scale-105"
                    priority
                    unoptimized={true}
                />
                {/* Dramatic cinematic Overlays */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-obsidian-900" />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 via-transparent to-transparent" />
                
                {/* luxury Badge */}
                <div className="absolute bottom-16 left-16 z-20 hidden small:flex flex-col gap-y-3 border-l-4 border-gold-500 pl-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
                    <span className="text-gold-500 font-sans tracking-[0.6em] uppercase text-[12px] font-black">Elite Selection</span>
                    <span className="text-white font-serif text-5xl italic leading-none">Established 2026</span>
                </div>
            </div>

            {/* Content Side - Massive Typography */}
            <div className="relative z-10 w-full content-container h-full flex items-center justify-end">
                <div className="max-w-[800px] small:text-right flex flex-col small:items-end gap-y-16">
                    <div className="flex flex-col gap-y-8">
                        <div className="flex items-center gap-x-6 small:justify-end">
                            <span className="text-gold-500 font-sans tracking-[0.5em] uppercase text-sm font-black animate-in fade-in slide-in-from-right-4 duration-700">Artisan Fusion • Global Luxury</span>
                            <div className="h-[2px] w-20 bg-gold-500" />
                        </div>
                        <Heading level="h1" className="text-6xl small:text-[140px] font-serif text-white leading-[0.85] tracking-tighter animate-in fade-in slide-in-from-right-8 duration-1000 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                            Where <span className="text-gold-500 italic block small:inline">Heritage</span> <br /> Meets <span className="underline decoration-gold-500/20 underline-offset-12">The Future.</span>
                        </Heading>
                    </div>
                    
                    <Text className="text-xl small:text-3xl text-sand-100/90 max-w-[650px] leading-relaxed font-sans font-light animate-in fade-in slide-in-from-right-4 duration-1000 delay-300">
                        Bridging the soul of Indian craftsmanship with the architectural brilliance of the UAE. Experience the pinnacle of global luxury.
                    </Text>

                    <div className="flex flex-col small:flex-row gap-8 animate-in fade-in slide-in-from-right-4 duration-1000 delay-500">
                        <LocalizedClientLink href="/store">
                            <Button size="large" className="rounded-none bg-gold-500 text-obsidian-900 hover:bg-gold-600 border-none px-20 h-20 uppercase tracking-[0.4em] font-black text-sm shadow-[0_0_60px_rgba(212,175,55,0.4)] transition-all hover:scale-110 active:scale-95">
                                Explore the Elite
                            </Button>
                        </LocalizedClientLink>
                    </div>
                </div>
            </div>

            {/* Aesthetic Bottom Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-y-6 animate-bounce opacity-40">
                <span className="text-[10px] uppercase tracking-[1.5em] text-white font-black rotate-90 mb-6 whitespace-nowrap">scroll • discover</span>
                <div className="h-24 w-[2px] bg-gradient-to-b from-gold-500 via-gold-500/50 to-transparent" />
            </div>

            {/* Decorative Heritage Motif */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 z-10 opacity-5 pointer-events-none hidden small:block group">
                 <svg width="800" height="800" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-spin-slow">
                    <path d="M50 0L53.0612 40.9388L93.1818 25L59.0612 50L93.1818 75L53.0612 59.0612L50 100L46.9388 59.0612L6.81818 75L40.9388 50L6.81818 25L46.9388 40.9388L50 0Z" fill="url(#hero_gold_grad)" />
                    <defs>
                        <linearGradient id="hero_gold_grad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#D4AF37" />
                            <stop offset="1" stopColor="#5D4B0A" />
                        </linearGradient>
                    </defs>
                 </svg>
            </div>
        </div>
    )
}

export default Hero
