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
        <div className="py-24 bg-white">
            <div className="content-container">
                <div className="flex flex-col items-center text-center mb-16 gap-y-4">
                    <Heading level="h2" className="text-3xl font-bold uppercase tracking-widest text-ui-fg-base">
                        Curated Collections
                    </Heading>
                    <Text className="text-ui-fg-subtle text-lg max-w-[600px]">
                        Explore our signature lines, designed for the modern Indian lifestyle with unmatched craftsmanship.
                    </Text>
                </div>

                <div className="grid grid-cols-1 medium:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <LocalizedClientLink
                            key={category.handle}
                            href={`/categories/${category.handle}`}
                            className="group relative h-[600px] overflow-hidden bg-ui-bg-subtle"
                        >
                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-y-2">
                                <Heading level="h3" className="text-2xl font-bold text-white uppercase tracking-wider">
                                    {category.title}
                                </Heading>
                                <Text className="text-white/80 group-hover:text-white transition-colors duration-300">
                                    {category.description}
                                </Text>
                                <div className="mt-4 overflow-hidden">
                                    <span className="text-white font-medium uppercase tracking-widest text-sm border-b border-white pb-1 inline-block transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        Discover More
                                    </span>
                                </div>
                            </div>
                        </LocalizedClientLink>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CategorySpotlight
