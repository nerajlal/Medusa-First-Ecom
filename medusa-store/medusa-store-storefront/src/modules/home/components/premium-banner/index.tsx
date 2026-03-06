import { Heading, Text, Button } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

const PremiumBanner = () => {
    return (
        <div className="relative h-[500px] bg-[#090909] overflow-hidden flex items-center justify-center text-center">
            {/* Background visual effect */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 via-neutral-950 to-black opacity-60" />

            <div className="relative z-10 content-container flex flex-col items-center gap-y-8 p-6">
                <div className="flex flex-col gap-y-4 max-w-[800px]">
                    <span className="text-ui-fg-subtle uppercase tracking-[0.4em] text-sm font-semibold">
                        Limited Edition
                    </span>
                    <Heading level="h2" className="text-4xl medium:text-6xl font-bold text-white uppercase tracking-tight leading-none">
                        The Artisan Series.
                    </Heading>
                    <Text className="text-ui-fg-subtle text-lg medium:text-xl leading-relaxed max-w-[600px] mx-auto">
                        A confluence of traditional Indian craft and contemporary minimalist design. Each piece tells a story of heritage reimagined.
                    </Text>
                </div>

                <LocalizedClientLink href="/store">
                    <Button variant="secondary" size="large" className="rounded-none bg-white text-black hover:bg-neutral-200 border-none px-10 h-14 uppercase tracking-widest font-bold text-sm">
                        Explore Series
                    </Button>
                </LocalizedClientLink>
            </div>

            {/* Decorative lines */}
            <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
            <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
        </div>
    )
}

export default PremiumBanner
