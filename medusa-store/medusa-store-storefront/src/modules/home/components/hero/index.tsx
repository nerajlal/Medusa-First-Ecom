import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full border-b border-ui-border-base relative bg-neutral-900 overflow-hidden">
      {/* Background Cinematic Image */}
      <Image
        src="/images/homepage/hero_bg.png"
        alt="Task Store Luxury Interior"
        fill
        className="object-cover opacity-60"
        priority
      />

      {/* Sophisticated Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-6 small:p-32">
        <div className="max-w-[800px] flex flex-col gap-y-8 animate-in fade-in slide-in-from-left-4 duration-1000">
          <div className="flex flex-col gap-y-2">
            <span className="text-white uppercase tracking-[0.4em] text-sm font-semibold opacity-80">
              Premium Collection 2026
            </span>
            <Heading
              level="h1"
              className="text-5xl leading-tight text-white small:text-8xl font-bold tracking-tighter uppercase"
            >
              Modern <br /> Indian Living.
            </Heading>
          </div>

          <Text
            className="text-xl leading-relaxed text-ui-fg-subtle max-w-[600px] font-medium"
          >
            Carefully curated essentials for the modern Indian lifestyle. Discover a confluence of heritage and contemporary design at Task Store.
          </Text>

          <LocalizedClientLink href="/store">
            <Button variant="secondary" size="large" className="rounded-none bg-white text-black hover:bg-neutral-200 border-none px-12 h-16 uppercase tracking-widest font-bold text-sm transition-all shadow-xl">
              Explore Collection
            </Button>
          </LocalizedClientLink>
        </div>
      </div>

      {/* Subtle bottom shadow for transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
    </div>
  )
}

export default Hero
