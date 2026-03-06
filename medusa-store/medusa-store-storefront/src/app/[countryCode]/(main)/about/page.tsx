import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us — Metora Luxury Hotel",
    description: "Discover the story behind Metora — a sanctuary where thoughtful design meets genuine hospitality.",
}

export default function AboutPage() {
                <div className="flex flex-col gap-y-4 max-w-[800px]">
                    <span className="text-ui-fg-subtle uppercase tracking-[0.4em] text-sm font-semibold">
                        Our Story
                    </span>
                    <Heading level="h1" className="text-4xl small:text-6xl font-bold text-ui-fg-base uppercase tracking-tight">
                        The Essence <br /> of Task Store.
                    </Heading>
                </div>

                <div className="grid grid-cols-1 medium:grid-cols-2 gap-x-24 gap-y-12">
                    <div className="flex flex-col gap-y-6">
                        <Text className="text-xl text-ui-fg-base leading-relaxed font-medium">
                            Task Store was born from a simple realization: the modern Indian lifestyle deserves a curated platform that marries traditional craftsmanship with minimalist contemporary design.
                        </Text>
                        <Text className="text-ui-fg-subtle leading-relaxed">
                            Based in the heart of India, we collaborate with local artisans and global designers to bring you products that are not just possessions, but stories. Our commitment is to quality over quantity, and timelessness over trends.
                        </Text>
                    </div>
                    <div className="flex flex-col gap-y-6">
                        <div className="aspect-video bg-ui-bg-subtle border border-ui-border-base flex items-center justify-center italic text-ui-fg-muted">
                            [Brand Image: Craftsmanship Detail]
                        </div>
                        <Text className="text-ui-fg-subtle leading-relaxed">
                            Every piece in our collection is rigorously selected to ensure it meets our standards of excellence. We believe that true luxury lies in the details—the choice of fabric, the precision of a stitch, and the durability of the final product.
                        </Text>
                    </div>
                </div>

                <div className="py-12 border-t border-ui-border-base mt-12 grid grid-cols-1 small:grid-cols-3 gap-12">
                    <div className="flex flex-col gap-y-4">
                        <Heading level="h3" className="text-lg font-bold uppercase tracking-widest">Curation</Heading>
                        <Text className="text-ui-fg-subtle">Expertly selected products that define modern elegance.</Text>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Heading level="h3" className="text-lg font-bold uppercase tracking-widest">Heritage</Heading>
                        <Text className="text-ui-fg-subtle">Honoring Indian craft traditions with a global perspective.</Text>
                    </div>
                    <div className="flex flex-col gap-y-4">
                        <Heading level="h3" className="text-lg font-bold uppercase tracking-widest">Quality</Heading>
                        <Text className="text-ui-fg-subtle">Built for life, designed for the future.</Text>
                    </div>
                </div>
            </div >
        </div >
    )
}
