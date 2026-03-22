import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text, Heading, clx } from "@medusajs/ui"
import ProductPreview from "@modules/products/components/product-preview"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function NewArrivals({
    region,
}: {
    region: HttpTypes.StoreRegion
}) {
    const {
        response: { products },
    } = await listProducts({
        regionId: region.id,
        queryParams: {
            limit: 4,
            order: "-created_at",
        },
    })

    if (!products || products.length === 0) {
        return null
    }

    return (
        <div className="bg-neutral-50 py-24 small:py-40">
            <div className="content-container flex flex-col items-start mb-20 gap-y-6">
                <div className="flex items-center gap-x-3">
                    <div className="h-[1px] w-8 bg-gold-500" />
                    <span className="text-gold-500 uppercase tracking-widest text-[10px] font-bold">Latest Discoveries</span>
                </div>
                <Heading level="h2" className="text-4xl small:text-6xl font-serif text-obsidian-900 leading-tight">
                    New Arrivals. <br />
                    <span className="italic text-gold-600">Pure Craftsmanship.</span>
                </Heading>
                <Text className="text-lg text-ui-fg-subtle max-w-[500px] font-sans">
                    Explore our latest curation of premium essentials, where heritage meets modern functionality.
                </Text>
            </div>

            <div className="content-container">
                <ul className="grid grid-cols-1 small:grid-cols-4 gap-12">
                    {products.map((product, index) => (
                        <li
                            key={product.id}
                            className={clx("w-full transition-all duration-700", {
                                "small:mt-16": index % 2 !== 0,
                                "small:mb-16": index % 2 === 0,
                            })}
                        >
                            <ProductPreview product={product} region={region} isFeatured />
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center mt-20">
                    <LocalizedClientLink
                        href="/store"
                        className="h-14 px-12 flex items-center justify-center border border-black uppercase tracking-[0.2em] font-bold text-sm hover:bg-black hover:text-white transition-all duration-300 rounded-none"
                    >
                        View Full Collection
                    </LocalizedClientLink>
                </div>
            </div>
        </div>
    )
}
