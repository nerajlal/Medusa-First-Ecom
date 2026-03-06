"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useMemo } from "react"

type VariantGalleryProps = {
    images: HttpTypes.StoreProductImage[]
    variants: HttpTypes.StoreProductVariant[]
}

const VariantGallery = ({ images, variants }: VariantGalleryProps) => {
    const searchParams = useSearchParams()
    const selectedVariantId = searchParams.get("v_id")

    const displayImages = useMemo(() => {
        if (!selectedVariantId || !variants.length) {
            return images
        }

        const variant = variants.find((v) => v.id === selectedVariantId)

        if (!variant) return images

        // 1. Try explicit Medusa Admin assignment
        if (variant.images && variant.images.length > 0) {
            const variantImageIds = new Set(variant.images.map((img: any) => img.id))
            const filtered = images.filter((img) => variantImageIds.has(img.id))
            if (filtered.length > 0) return filtered
        }

        // 2. Smart Fallback: Match variant option VALUES (e.g. "Blue", "Gold") to image filenames/URLs
        const optionValues = variant.options?.map((o) => o.value.toLowerCase().trim()) ?? []
        if (optionValues.length > 0) {
            const smartFiltered = images.filter((img) => {
                const url = img.url?.toLowerCase() ?? ""
                return optionValues.some((val) => url.includes(val))
            })
            if (smartFiltered.length > 0) return smartFiltered
        }

        return images
    }, [images, variants, selectedVariantId])

    if (!displayImages || displayImages.length === 0) {
        return (
            <div className="aspect-[3/4] w-full bg-neutral-100 flex items-center justify-center">
                <span className="text-sm text-neutral-400 uppercase tracking-widest">No Image</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-y-4 w-full">
            {/* Feature Image - Main Visual */}
            <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 group cursor-zoom-in"
                key={displayImages[0].id}
            >
                <Image
                    src={displayImages[0].url || ""}
                    priority={true}
                    className="absolute inset-0 object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                    alt="Main product visual"
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                />
                <div className="absolute inset-0 border border-black/5 pointer-events-none" />
            </div>

            {/* Secondary Images - Tiled Grid */}
            {displayImages.length > 1 && (
                <div className="grid grid-cols-2 gap-4">
                    {displayImages.slice(1).map((image, index) => (
                        <div
                            key={image.id}
                            className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100 group cursor-pointer"
                        >
                            <Image
                                src={image.url || ""}
                                priority={false}
                                className="absolute inset-0 object-cover rounded-none transition-transform duration-500 group-hover:scale-110"
                                alt={`Product detail ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 50vw, 400px"
                            />
                            <div className="absolute inset-0 border border-black/5 group-hover:border-black/10 transition-colors pointer-events-none" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default VariantGallery
