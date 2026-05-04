"use client"

import { HttpTypes } from "@medusajs/types"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useMemo, useState, useEffect } from "react"

type VariantGalleryProps = {
    images: HttpTypes.StoreProductImage[]
    variants: HttpTypes.StoreProductVariant[]
}

const VariantGallery = ({ images, variants }: VariantGalleryProps) => {
    const searchParams = useSearchParams()
    const selectedVariantId = searchParams.get("v_id")
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const displayImages = useMemo(() => {
        let currentImages = images
        
        if (selectedVariantId && variants.length) {
            const variant = variants.find((v) => v.id === selectedVariantId)
            if (variant) {
                // 1. Try explicit Medusa Admin assignment
                if (variant.images && variant.images.length > 0) {
                    const variantImageIds = new Set(variant.images.map((img: any) => img.id))
                    const filtered = images.filter((img) => variantImageIds.has(img.id))
                    if (filtered.length > 0) currentImages = filtered
                } else {
                    // 2. Smart Fallback: Match variant option VALUES
                    const optionValues = variant.options?.map((o) => o.value.toLowerCase().trim()) ?? []
                    if (optionValues.length > 0) {
                        const smartFiltered = images.filter((img) => {
                            const url = img.url?.toLowerCase() ?? ""
                            return optionValues.some((val) => url.includes(val))
                        })
                        if (smartFiltered.length > 0) currentImages = smartFiltered
                    }
                }
            }
        }
        return currentImages
    }, [images, variants, selectedVariantId])

    // Reset active image when displayImages changes (e.g. variant change)
    useEffect(() => {
        setActiveImageIndex(0)
    }, [displayImages])

    if (!displayImages || displayImages.length === 0) {
        return (
            <div className="aspect-[3/4] w-full bg-neutral-100 flex items-center justify-center rounded-2xl">
                <span className="text-sm text-neutral-400 uppercase tracking-widest">No Image</span>
            </div>
        )
    }

    return (
        <div className="flex flex-col small:flex-row gap-6 w-full animate-fade-in">
            {/* Thumbnails - Left Side (Desktop) / Bottom (Mobile) */}
            <div className="flex small:flex-col gap-3 order-2 small:order-1 overflow-x-auto small:overflow-y-auto no-scrollbar max-h-[600px] py-1">
                {displayImages.map((image, index) => (
                    <button
                        key={image.id}
                        onClick={() => setActiveImageIndex(index)}
                        className={`relative aspect-square w-16 small:w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                            activeImageIndex === index 
                            ? "border-red-600 ring-2 ring-red-100 shadow-sm" 
                            : "border-transparent hover:border-neutral-200 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                        }`}
                    >
                        <Image
                            src={image.url || ""}
                            className="absolute inset-0 object-cover"
                            alt={`Thumbnail ${index + 1}`}
                            fill
                            sizes="100px"
                        />
                    </button>
                ))}
            </div>

            {/* Main Feature Image */}
            <div className="flex-1 order-1 small:order-2">
                <div
                    className="relative aspect-[4/5] w-full overflow-hidden bg-white group cursor-zoom-in rounded-3xl shadow-2xl shadow-neutral-200/50 border border-neutral-100"
                    key={displayImages[activeImageIndex].id}
                >
                    <Image
                        src={displayImages[activeImageIndex].url || ""}
                        priority={true}
                        className="absolute inset-0 object-contain p-4 small:p-8 transition-transform duration-700 group-hover:scale-110"
                        alt="Main product visual"
                        fill
                        sizes="(max-width: 768px) 100vw, 800px"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default VariantGallery
