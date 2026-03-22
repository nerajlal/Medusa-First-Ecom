import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Image from "next/image"

const categories = [
    {
        title: "Women's Fusion",
        handle: "women",
        image: "/images/homepage/women.png",
        description: "Elegant silhouettes blending traditional drapes with modern cuts.",
        size: "large"
    },
    {
        title: "Men's Heritage",
        handle: "men",
        image: "/images/homepage/men.png",
        description: "Bespoke tailoring meeting artisanal heritage.",
        size: "medium"
    },
    {
        title: "Artisan Accents",
        handle: "accessories",
        image: "/images/homepage/luxury_social_3_jewelry.png",
        description: "Handcrafted accessories from the heart of local ateliers.",
        size: "medium"
    }
]

const CategorySpotlight = () => {
    return (
        <div className="py-16 small:py-24 bg-sand-50">
            <div className="content-container">
                <div className="flex flex-col gap-y-4 mb-12 max-w-[700px]">
                    <div className="flex items-center gap-x-4">
                        <div className="h-[2px] w-12 bg-gold-500" />
                        <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-black">Curated Edits</span>
                    </div>
                    <Heading level="h2" className="text-5xl small:text-7xl font-serif text-obsidian-900 leading-[1.1]">
                        Boutique <br /> <span className="italic text-gold-600">Spotlight.</span>
                    </Heading>
                </div>

                <div className="grid grid-cols-1 small:grid-cols-12 gap-y-16 small:gap-x-12 items-start">
                    {/* Large Featured Category */}
                    <div className="small:col-span-7 group">
                        <LocalizedClientLink href={`/collections/${categories[0].handle}`}>
                            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-200 border-2 border-transparent transition-all duration-700 group-hover:border-gold-500 group-hover:scale-[0.98]">
                                <Image
                                    src={categories[0].image}
                                    alt={categories[0].title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    unoptimized={true}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/80 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-10 left-10 text-white max-w-[300px]">
                                    <Heading level="h3" className="text-3xl font-serif mb-4 italic">{categories[0].title}</Heading>
                                    <Text className="text-sand-100/80 text-sm leading-relaxed mb-6 font-sans">{categories[0].description}</Text>
                                    <div className="h-px w-12 bg-gold-500 group-hover:w-24 transition-all duration-700" />
                                </div>
                            </div>
                        </LocalizedClientLink>
                    </div>

                    {/* Secondary Categories Column */}
                    <div className="small:col-span-5 flex flex-col gap-y-16 small:gap-y-32 small:pt-32">
                        {categories.slice(1).map((category, index) => (
                            <LocalizedClientLink key={category.handle} href={`/collections/${category.handle}`} className="group">
                                <div className="space-y-6">
                                    <div className="relative aspect-[3/4] overflow-hidden bg-neutral-200 border border-transparent transition-all duration-700 group-hover:border-gold-500">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                            unoptimized={true}
                                        />
                                        {/* Corner Accent */}
                                        <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-gold-500/0 group-hover:border-gold-500/50 transition-all duration-700" />
                                    </div>
                                    <div className="flex justify-between items-end border-b border-gold-500/20 pb-4">
                                        <div>
                                            <Heading level="h3" className="text-2xl font-serif italic text-obsidian-900 mb-1">{category.title}</Heading>
                                            <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold">Discover More</span>
                                        </div>
                                        <span className="text-gold-500 group-hover:translate-x-2 transition-transform duration-500">→</span>
                                    </div>
                                </div>
                            </LocalizedClientLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategorySpotlight
