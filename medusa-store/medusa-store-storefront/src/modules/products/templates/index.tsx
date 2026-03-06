"use client"

import React, { Suspense, useMemo } from "react"
import { useSearchParams } from "next/navigation"

import ImageGallery from "@modules/products/components/image-gallery"
import ProductActions from "@modules/products/components/product-actions"
import ProductOnboardingCta from "@modules/products/components/product-onboarding-cta"
import ProductTabs from "@modules/products/components/product-tabs"
import RelatedProducts from "@modules/products/components/related-products"
import ProductInfo from "@modules/products/templates/product-info"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"
import { notFound } from "next/navigation"
import { HttpTypes } from "@medusajs/types"

import ProductActionsWrapper from "./product-actions-wrapper"

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
  const searchParams = useSearchParams()
  const selectedVariantId = searchParams.get("v_id")

  const variantImages = useMemo(() => {
    if (!selectedVariantId || !product.variants) {
      return images
    }

    const variant = product.variants.find((v) => v.id === selectedVariantId)

    if (!variant) {
      return images
    }

    // 1. Try explicit assignment in Medusa Admin
    if (variant.images && variant.images.length > 0) {
      const variantImageIds = new Map(variant.images.map((img: any) => [img.id, true]))
      const filtered = images.filter((img) => variantImageIds.has(img.id))
      if (filtered.length > 0) return filtered
    }

    // 2. Smart Fallback: Match variant option values (e.g. "Blue", "Gold") to image URLs
    const optionValues = variant.options?.map((o) => o.value.toLowerCase()) || []
    if (optionValues.length > 0) {
      const smartFiltered = images.filter((img) => {
        const url = img.url?.toLowerCase() || ""
        // Check if ANY of the selected option values are present in the image URL
        return optionValues.some((val) => url.includes(val))
      })

      if (smartFiltered.length > 0) {
        return smartFiltered
      }
    }

    return images
  }, [product, images, selectedVariantId])

  if (!product || !product.id) {
    return notFound()
  }

  return (
    <>
      <div
        className="content-container grid grid-cols-1 small:grid-cols-[1fr_480px] py-16 gap-x-16 relative"
        data-testid="product-container"
      >
        {/* Left Column: High-Impact Image Gallery */}
        <div className="block w-full relative">
          <ImageGallery images={variantImages} />
        </div>

        {/* Right Column: Sticky Product Info & Actions */}
        <div className="flex flex-col small:sticky small:top-32 h-fit w-full py-8 small:py-0 gap-y-12">
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

          <div className="border-t border-ui-border-base pt-12">
            <ProductTabs product={product} />
          </div>
        </div>
      </div>
      <div
        className="content-container my-16 small:my-32 border-t border-ui-border-base pt-16"
        data-testid="related-products-container"
      >
        <Suspense fallback={<SkeletonRelatedProducts />}>
          <RelatedProducts product={product} countryCode={countryCode} />
        </Suspense>
      </div>
    </>
  )
}

export default ProductTemplate
