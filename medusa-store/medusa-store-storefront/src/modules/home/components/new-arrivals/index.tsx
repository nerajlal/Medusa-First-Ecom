import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text, Heading } from "@medusajs/ui"
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
        <div className="content-container py-24 small:py-32">
            <div className="flex flex-col small:flex-row small:items-end justify-between mb-12 gap-y-4">
                <div>
                    <Heading level="h2" className="text-3xl font-semibold uppercase tracking-tight">
                        New Arrivals
                    </Heading>
                    <Text className="text-ui-fg-subtle mt-2 text-lg">
                        Our latest collection, fresh from the atelier.
                    </Text>
                </div>
                <LocalizedClientLink
                    href="/store"
                    className="text-ui-fg-base hover:text-ui-fg-subtle font-medium uppercase tracking-wider text-sm border-b border-ui-fg-base pb-1"
                >
                    Explore All Products
                </LocalizedClientLink>
            </div>
            <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-6 gap-y-12">
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductPreview product={product} region={region} isFeatured />
                    </li>
                ))}
            </ul>
        </div>
    )
}
