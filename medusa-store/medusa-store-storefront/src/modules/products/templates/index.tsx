import React, { Suspense } from "react"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"
import { StoreHeader } from "@modules/raleys/components/StoreHeader"
import ProductActions from "@modules/products/components/product-actions"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import ProductActionsWrapper from "@modules/products/templates/product-actions-wrapper"
import VariantGallery from "@modules/products/components/variant-gallery"

type ProductTemplateProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
  vId?: string
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({
  product,
  region,
  countryCode,
  images,
  vId,
}) => {
  if (!product || !product.id) {
    return notFound()
  }

  return (
    <div className="raleys-font">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
          data-testid="product-container"
        >
          {/* Left Column: Image Gallery */}
          <div className="w-full relative">
            <div className="bg-gray-50 rounded-[2rem] p-4 md:p-8 flex items-center justify-center border border-gray-100">
               <VariantGallery images={images} variants={product.variants ?? []} />
            </div>
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="flex flex-col gap-y-8">
            <div>
               <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-100 text-[#1a4d2e] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Fresh Selection
                  </span>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
               </div>
               <ProductInfo product={product} />
            </div>

            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
              <Suspense
                fallback={
                  <ProductActions
                    disabled={true}
                    product={product}
                    region={region}
                  />
                }
              >
                <ProductActionsWrapper id={product.id} region={region} vId={vId} />
              </Suspense>
            </div>

            <div className="border-t border-gray-100 pt-8">
              <ProductTabs product={product} />
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div
          className="mt-24 border-t border-gray-100 pt-16"
          data-testid="related-products-container"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-10 tracking-tight">You might also like</h2>
          <Suspense fallback={<SkeletonRelatedProducts />}>
            <RelatedProducts product={product} countryCode={countryCode} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}

export default ProductTemplate
