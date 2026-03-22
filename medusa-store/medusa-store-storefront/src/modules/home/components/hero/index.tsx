import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative overflow-hidden bg-white">
      <div className="flex h-full w-full flex-col small:flex-row">
        {/* Left Side: Cinematic Image (60%) */}
        <div className="relative w-full small:w-[60%] h-[50%] small:h-full overflow-hidden">
          <Image
            src="/images/homepage/hero_bg.png"
            alt="Task Store Luxury Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Decorative Floating Badge */}
          <div className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-md p-6 shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
            <span className="text-gold-500 font-serif italic text-lg block mb-1">Established 2026</span>
            <span className="text-obsidian-900 font-sans tracking-[0.2em] uppercase text-xs font-bold">The Artisan Fusion</span>
          </div>
        </div>

        {/* Right Side: Elite Typography (40%) */}
        <div className="w-full small:w-[40%] h-[50%] small:h-full flex flex-col justify-center p-8 small:p-16 gap-y-10 bg-[#FAF9F6]">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-3 mb-2 animate-in fade-in slide-in-from-right-4 duration-700">
              <div className="h-[1px] w-12 bg-gold-500" />
              <span className="text-gold-500 uppercase tracking-[0.3em] text-[10px] font-bold">India & UAE</span>
            </div>
            
            <Heading
              level="h1"
              className="text-4xl small:text-6xl font-serif text-obsidian-900 leading-[1.1] animate-in fade-in slide-in-from-right-4 duration-1000"
            >
              A Confluence of <br /> 
              <span className="italic text-gold-600">Pure Luxury.</span>
            </Heading>
          </div>

          <Text
            className="text-base small:text-lg leading-relaxed text-ui-fg-subtle max-w-[450px] font-sans animate-in fade-in slide-in-from-right-4 duration-1000 delay-300"
          >
            Experience the harmony of Indian heritage and Emirati grandeur. Our curated collections redefine global living with a focus on unmatched craftsmanship.
          </Text>

          <LocalizedClientLink href="/store" className="animate-in fade-in slide-in-from-right-4 duration-1000 delay-500">
            <Button variant="secondary" size="large" className="rounded-none bg-obsidian-900 text-gold-500 hover:bg-black border-none px-10 h-14 uppercase tracking-widest font-bold text-xs transition-all shadow-xl group">
              Explore the Fusion
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </LocalizedClientLink>
        </div>
      </div>

      {/* Subtle Cultural SVG Motif (Lotus/Geometric) */}
      <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2 z-20 hidden small:block opacity-20 pointer-events-none">
        <svg width="400" height="400" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="#D4AF37" strokeWidth="0.5" />
            <path d="M50 2L55 45L98 50L55 55L50 98L45 55L2 50L45 45L50 2Z" stroke="#D4AF37" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  )
}

export default Hero
