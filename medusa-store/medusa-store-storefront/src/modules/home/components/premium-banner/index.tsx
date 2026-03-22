import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const PremiumBanner = () => {
    return (
        <div className="relative w-full h-[600px] overflow-hidden bg-obsidian-900 flex items-center">
            {/* Background Image with Mask */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/homepage/artisan_bg.png"
                    alt="Artisan Background"
                    fill
                    className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-obsidian-900 via-obsidian-900/60 to-transparent" />
            </div>

            <div className="content-container relative z-10">
                <div className="max-w-[700px] flex flex-col items-start gap-y-10 border-l border-gold-500/30 pl-12 py-12">
                    <div className="flex flex-col gap-y-4">
                        <span className="text-gold-500 font-sans tracking-[0.4em] uppercase text-xs font-bold opacity-80 animate-in fade-in slide-in-from-left-4 duration-700">Exclusively Global</span>
                        <Heading level="h2" className="text-4xl small:text-7xl font-serif text-white leading-tight animate-in fade-in slide-in-from-left-4 duration-1000">
                            The <span className="italic text-gold-500 underline decoration-gold-500/30 underline-offset-8">Artisan</span> Fusion.
                        </Heading>
                    </div>
                    
                    <Text className="text-lg small:text-xl text-white/70 max-w-[500px] leading-relaxed font-sans font-light animate-in fade-in slide-in-from-left-4 duration-1000 delay-300">
                        A curated selection of the finest imports, blending traditional artistry with modern luxury standards. Discover the pinnacle of Indo-Arabian craftsmanship.
                    </Text>

                    <LocalizedClientLink href="/collections/artisan" className="animate-in fade-in slide-in-from-left-4 duration-1000 delay-500">
                        <Button variant="secondary" size="large" className="rounded-none bg-gold-500 text-obsidian-900 hover:bg-gold-600 border-none px-12 h-14 uppercase tracking-widest font-bold text-xs transition-all shadow-2xl">
                            Discover the Craft
                        </Button>
                    </LocalizedClientLink>
                </div>
            </div>

            {/* Side Accent SVG */}
            <div className="absolute top-0 right-0 h-full w-24 bg-gold-500/5 backdrop-blur-sm border-l border-gold-500/10 flex items-center justify-center pointer-events-none">
                <span className="rotate-90 text-[10px] uppercase tracking-[1em] text-gold-500/40 whitespace-nowrap font-bold">Premium Living • Global Heritage</span>
            </div>
        </div>
    )
}

export default PremiumBanner
