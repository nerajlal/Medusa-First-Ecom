import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const categories = [
    {
        title: "Women's Fusion",
        handle: "women",
        image: "/images/homepage/women.png",
        description: "Elegant silhouettes blending Indian grace and Emirati grandeur.",
    },
    {
        title: "Men's Heritage",
        handle: "men",
        image: "/images/homepage/men.png",
        description: "Modern minimalist essentials for the refined global man.",
    },
    {
        title: "Luxe Accessories",
        handle: "accessories",
        image: "/images/homepage/accessories.png",
        description: "Handcrafted details from the finest Indian and Arabic artisans.",
    },
]

const CategorySpotlight = () => {
    return (
        <div className="py-32 bg-[#FDFCF0]/30 relative overflow-hidden">
            {/* Background Decorative Motif */}
            <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
                <svg width="600" height="600" viewBox="0 0 100 100" fill="currentColor" className="text-gold-500">
                    <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="0.1" fill="none" />
                    <path d="M50 10 L55 45 L90 50 L55 55 L50 90 L45 55 L10 50 L45 45 Z" />
                </svg>
            </div>

            <div className="content-container">
                <div className="flex flex-col items-start text-left mb-24 gap-y-6 max-w-[800px]">
                    <div className="flex items-center gap-x-3">
                        <div className="h-[1px] w-8 bg-gold-500" />
                        <span className="text-gold-500 uppercase tracking-widest text-[10px] font-bold">The Collection</span>
                    </div>
                    <Heading level="h2" className="text-4xl small:text-6xl font-serif text-obsidian-900 leading-tight">
                        Curated Styles for the <br />
                        <span className="italic text-gold-600">Global Connoisseur.</span>
                    </Heading>
                    <Text className="text-ui-fg-subtle text-lg max-w-[500px] font-sans">
                        Explore our signature lines where Indian heritage meets Emirati grandeur in every stitch.
                    </Text>
                </div>

                {/* Boutique Offset Grid */}
                <div className="grid grid-cols-1 medium:grid-cols-12 gap-y-16 small:gap-12 items-start">
                    {/* Item 1: Women (Large, Span 5) */}
                    <div className="medium:col-span-5 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        <LocalizedClientLink
                            href={`/categories/${categories[0].handle}`}
                            className="group relative block h-[700px] overflow-hidden"
                        >
                            <Image
                                src={categories[0].image}
                                alt={categories[0].title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-12 left-12 p-2">
                                <Heading level="h3" className="text-3xl font-serif text-white mb-2">{categories[0].title}</Heading>
                                <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold border-b border-gold-400 pb-1">Explore Collection</span>
                            </div>
                        </LocalizedClientLink>
                    </div>

                    {/* Item 2: Men (Slightly Offset, Span 4, Medium height) */}
                    <div className="medium:col-span-4 medium:mt-32 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                        <LocalizedClientLink
                            href={`/categories/${categories[1].handle}`}
                            className="group relative block h-[600px] overflow-hidden bg-ui-bg-subtle"
                        >
                            <Image
                                src={categories[1].image}
                                alt={categories[1].title}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gold-900/10 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute bottom-12 left-12">
                                <Heading level="h3" className="text-3xl font-serif text-white mb-2">{categories[1].title}</Heading>
                                <span className="text-gold-400 uppercase tracking-[0.2em] text-xs font-bold border-b border-gold-400 pb-1">Shop Men</span>
                            </div>
                        </LocalizedClientLink>
                    </div>

                    {/* Item 3: Accessories (Span 3, Higher offset) */}
                    <div className="medium:col-span-3 medium:mt-64 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <LocalizedClientLink
                            href={`/categories/${categories[2].handle}`}
                            className="group relative block h-[500px] overflow-hidden border border-gold-200/50"
                        >
                            <Image
                                src={categories[2].image}
                                alt={categories[2].title}
                                fill
                                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/90 backdrop-blur-md flex flex-col items-center text-center">
                                <Heading level="h3" className="text-xl font-serif text-obsidian-900 mb-2">{categories[2].title}</Heading>
                                <Text className="text-[10px] text-ui-fg-subtle uppercase tracking-widest font-bold">The Last Detail</Text>
                            </div>
                        </LocalizedClientLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySpotlight
