import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const PremiumBanner = () => {
    return (
        <div className="relative h-[600px] bg-neutral-900 overflow-hidden flex items-center">
            {/* Tactile Background Image */}
            <Image
                src="/images/homepage/artisan_bg.png"
                alt="Artisan Texture Detail"
                fill
                className="object-cover opacity-40 shadow-inner"
            />

            {/* Background visual effect over image */}
            <div className="absolute inset-0 z-0 bg-gradient-to-l from-black/80 via-black/20 to-transparent" />

            <div className="relative z-10 content-container w-full grid grid-cols-1 medium:grid-cols-2">
                <div className="medium:col-start-2 flex flex-col items-start gap-y-10 p-6">
                    <div className="flex flex-col gap-y-4">
                        <span className="text-white uppercase tracking-[0.5em] text-xs font-bold opacity-60">
                            Limited Edition
                        </span>
                        <Heading level="h2" className="text-5xl medium:text-7xl font-bold text-white uppercase tracking-tighter leading-none italic">
                            The Artisan <br /> Series.
                        </Heading>
                        <div className="h-[2px] w-24 bg-white/20 my-4" />
                        <Text className="text-ui-fg-subtle text-lg medium:text-xl leading-relaxed max-w-[500px] font-medium">
                            A confluence of traditional Indian craft and contemporary minimalist design. Each piece tells a story of heritage reimagined for the modern home.
                        </Text>
                    </div>

                    <LocalizedClientLink href="/store">
                        <Button variant="secondary" size="large" className="rounded-none bg-white text-black hover:bg-neutral-100 border-none px-12 h-16 uppercase tracking-widest font-bold text-sm shadow-2xl transition-all">
                            Discover the Craft
                        </Button>
                    </LocalizedClientLink>
                </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute left-12 top-12 w-20 h-20 border-l border-t border-white/10" />
            <div className="absolute right-12 bottom-12 w-20 h-20 border-r border-b border-white/10" />
        </div>
    )
}

export default PremiumBanner
