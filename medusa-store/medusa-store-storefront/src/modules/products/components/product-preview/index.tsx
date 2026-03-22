import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="flex flex-col gap-y-4">
        <div className="relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
           <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="full"
            isFeatured={isFeatured}
          />
          {/* Gold Underline Effect on Hover */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-500 group-hover:w-full transition-all duration-700" />
        </div>
        <div className="flex flex-col gap-y-2">
          <Text className="text-lg font-serif italic text-obsidian-900 group-hover:text-gold-600 transition-colors" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center text-gold-500 font-sans font-bold">
            {cheapestPrice && <PreviewPrice price={cheapestPrice} />}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
