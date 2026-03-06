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
            <div className="content-container flex flex-col items-center text-center mb-20">
                <Heading level="h2" className="text-4xl small:text-6xl font-bold uppercase tracking-tighter text-ui-fg-base mb-6">
                    The Modern Selection.
                </Heading>
                <div className="h-px w-20 bg-black mb-6" />
                <Text className="text-lg small:text-xl text-ui-fg-subtle max-w-[600px] font-normal leading-relaxed">
                    Explore our latest curation of premium essentials, crafted with precision for the modern lifestyle.
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
