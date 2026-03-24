import React, { Suspense } from "react"

import VariantGallery from "@modules/products/components/variant-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import StickySubHeader from "@modules/products/components/sticky-sub-header"
import ProductHighlights from "@modules/products/components/highlights"
import ProductSpecifications from "@modules/products/components/specifications"
import MobileBuyBar from "@modules/products/components/mobile-buy-bar"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      {/* OnePlus Inspired Sticky Header */}
      <StickySubHeader product={product} />

      <div
        className="content-container grid grid-cols-1 small:grid-cols-[1fr_480px] py-16 gap-x-16 relative"
        data-testid="product-container"
      >
        {/* Left Column: High-Impact Image Gallery */}
        <div className="block w-full relative">
          <VariantGallery images={images} variants={product.variants ?? []} />
        </div>

        {/* Right Column: Sticky Product Info & Actions */}
        <div className="flex flex-col small:sticky small:top-40 h-fit w-full py-8 small:py-0 gap-y-12">
          <ProductInfo product={product} />

          <Suspense
            fallback={
              <ProductActions
                disabled={true}
                product={product}
                region={region}
              />
            }
          >
            <ProductActionsWrapper id={product.id} region={region} />
          </Suspense>

          {/* We keep standard tabs for standard info but hide the redundant Specs/Product Info if they are now in the Highlights/Specs sections */}
           <div className="border-t border-ui-border-base pt-12 opacity-50 grayscale hover:opacity-100 transition-all">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>

      {/* OnePlus Inspired Experience Sections */}
      <div className="mt-16 small:mt-32">
         <ProductHighlights product={product} />
         <ProductSpecifications product={product} />
      </div>

      {/* Related Products Section */}
      <div
        className="content-container my-16 small:my-32 border-t border-ui-border-base pt-16"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>

      {/* Mobile Sticky Buy Bar */}
      <MobileBuyBar product={product} />
    </>
  )
}

export default ProductTemplate
