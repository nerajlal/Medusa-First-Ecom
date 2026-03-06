import { Button, Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const Hero = () => {
  return (
    <div className="h-[85vh] w-full border-b border-ui-border-base relative bg-[#111] overflow-hidden">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center p-6 small:p-32 gap-6">
        <div className="max-w-[700px] flex flex-col gap-y-4">
          <Heading
            level="h1"
            className="text-4xl leading-tight text-white small:text-7xl font-bold tracking-tight uppercase"
          >
            Modern Indian Living.
          </Heading>
          <Text
            className="text-lg leading-relaxed text-ui-fg-subtle max-w-[500px] mx-auto"
          >
            Carefully curated for the modern Indian lifestyle. Discover premium essentials designed for quality and craftsmanship at Task Store.
          </Text>
        </div>
        <LocalizedClientLink href="/store">
          <Button variant="primary" size="large" className="rounded-none px-12 py-6 text-base font-medium">
            Shop New Arrivals
          </Button>
        </LocalizedClientLink>
      </div>
      {/* Subtle overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" />
    </div>
  )
}

export default Hero
