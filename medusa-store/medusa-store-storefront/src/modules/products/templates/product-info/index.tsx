import { HttpTypes } from "@medusajs/types"
import { Heading, Text } from "@medusajs/ui"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

type ProductInfoProps = {
  product: HttpTypes.StoreProduct
}

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div id="product-info" className="animate-fade-in">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px]">
        {product.collection && (
          <LocalizedClientLink
            href={`/collections/${product.collection.handle}`}
            className="text-[10px] uppercase tracking-[0.4em] font-black text-red-600 hover:text-red-500 transition-colors mb-2"
          >
            {product.collection.title}
          </LocalizedClientLink>
        )}
        <Heading
          level="h1"
          className="text-5xl small:text-6xl leading-[0.95] font-black text-neutral-900 uppercase tracking-tighter mb-4"
          data-testid="product-title"
        >
          {product.title}
        </Heading>

        <Text
          className="text-lg leading-relaxed text-neutral-500 whitespace-pre-line font-light"
          data-testid="product-description"
        >
          {product.description}
        </Text>
      </div>
    </div>
  )
}

export default ProductInfo
