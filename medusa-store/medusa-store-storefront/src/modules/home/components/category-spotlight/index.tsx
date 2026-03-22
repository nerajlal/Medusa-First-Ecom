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
        <div className="py-16 small:py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Accent */}
            <div className="absolute top-0 right-1/4 h-full w-px bg-gold-500/10 hidden small:block" />
            
            <div className="content-container relative z-10">
                <div className="flex flex-col items-center gap-y-4 mb-20 text-center">
                    <div className="flex items-center gap-x-4 justify-center">
                        <div className="h-[1px] w-8 bg-gold-500" />
                        <span className="text-gold-500 uppercase tracking-[0.5em] text-[10px] font-black">Private Collection</span>
                        <div className="h-[1px] w-8 bg-gold-500" />
                    </div>
                    <Heading level="h2" className="text-5xl small:text-8xl font-serif text-obsidian-900 leading-tight uppercase tracking-tighter">
                        Boutique <span className="italic text-gold-600">Spotlight.</span>
                    </Heading>
                    <Text className="text-obsidian-900/40 font-sans tracking-[0.2em] text-xs uppercase font-medium">Curated Excellence for the Modern Connoisseur</Text>
                </div>

                <div className="grid grid-cols-1 small:grid-cols-3 gap-8 small:gap-12 perspective-1000">
                    {categories.map((category, index) => (
                        <LocalizedClientLink key={category.handle} href={`/collections/${category.handle}`} className="group preserve-3d">
                            <div className="relative flex flex-col gap-y-8 transition-transform duration-700 group-hover:[transform:rotateX(5deg)_rotateY(-5deg)_translateZ(20px)]">
                                {/* Number Label */}
                                <div className="absolute -top-4 -left-4 z-20 w-12 h-12 bg-obsidian-900 text-gold-500 flex items-center justify-center font-serif italic text-xl border border-gold-500/30 animate-float shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                   0{index + 1}
                                </div>

                                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 border border-gold-500/10 transition-all duration-700 group-hover:scale-[0.98]">
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                        unoptimized={true}
                                    />
                                    {/* Glassmorphic Brand Tag */}
                                    <div className="absolute top-6 right-6 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <span className="text-[10px] text-white font-black uppercase tracking-widest">Heritage Edit</span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-obsidian-900/90 via-obsidian-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                                    
                                    <div className="absolute bottom-8 left-8 right-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                        <Heading level="h3" className="text-3xl font-serif mb-2 italic tracking-tight">{category.title}</Heading>
                                        <div className="h-px w-0 bg-gold-500 group-hover:w-full transition-all duration-700 delay-100" />
                                    </div>
                                </div>
                                
                                <div className="px-2">
                                    <Text className="text-obsidian-900/60 text-sm leading-relaxed font-sans mb-4 min-h-[48px]">
                                        {category.description}
                                    </Text>
                                    <div className="flex items-center gap-x-3 group/btn">
                                        <span className="text-[10px] uppercase tracking-widest text-gold-600 font-bold group-hover/btn:tracking-[0.3em] transition-all duration-500">View Gallery</span>
                                        <div className="h-[1px] w-6 bg-gold-500 group-hover/btn:w-12 transition-all duration-500" />
                                    </div>
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
