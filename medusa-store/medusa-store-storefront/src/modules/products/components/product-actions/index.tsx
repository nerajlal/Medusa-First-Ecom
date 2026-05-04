"use client"

import { addToCart } from "@lib/data/cart"
import { useIntersection } from "@lib/hooks/use-in-view"
import { HttpTypes } from "@medusajs/types"
import { Button, clx } from "@medusajs/ui"
import Divider from "@modules/common/components/divider"
import OptionSelect from "@modules/products/components/product-actions/option-select"
import { isEqual } from "lodash"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import { useEffect, useMemo, useRef, useState } from "react"
import ProductPrice from "../product-price"
import MobileActions from "./mobile-actions"
import { useRouter } from "next/navigation"
import { Plus, Minus } from "@medusajs/icons"

type ProductActionsProps = {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  disabled?: boolean
  vId?: string
}

const optionsAsKeymap = (
  variantOptions: HttpTypes.StoreProductVariant["options"]
) => {
  if (!variantOptions) return {}
  return variantOptions.reduce((acc: Record<string, string>, varopt: any) => {
    acc[varopt.option_id] = varopt.value
    return acc
  }, {})
}

export default function ProductActions({
  product,
  disabled,
  vId,
}: ProductActionsProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [options, setOptions] = useState<Record<string, string | undefined>>(() => {
    const selectedVariant = vId 
      ? product.variants?.find(v => v.id === vId) || product.variants?.[0]
      : product.variants?.[0]
    
    return (selectedVariant ? optionsAsKeymap(selectedVariant.options) : {}) as Record<string, string | undefined>
  })
  const [quantity, setQuantity] = useState(1)
  const [isAdding, setIsAdding] = useState(false)
  const countryCode = useParams().countryCode as string

  // Update options when vId changes (from search params)
  useEffect(() => {
    if (product.variants && product.variants.length > 0) {
      const currentVId = searchParams.get("v_id")
      const variantToSelect = currentVId 
        ? product.variants.find(v => v.id === currentVId) || product.variants[0]
        : product.variants[0]
      
      const variantOptions = optionsAsKeymap(variantToSelect.options)
      
      if (!isEqual(variantOptions, options)) {
          setOptions(variantOptions ?? {})
      }
    }
  }, [product.variants, searchParams])

  const selectedVariant = useMemo(() => {
    if (!product.variants || product.variants.length === 0) {
      return
    }

    return product.variants.find((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  // update the options when a variant is selected
  const setOptionValue = (optionId: string, value: string) => {
    setOptions((prev) => ({
      ...prev,
      [optionId]: value,
    }))
  }

  //check if the selected options produce a valid variant
  const isValidVariant = useMemo(() => {
    return product.variants?.some((v) => {
      const variantOptions = optionsAsKeymap(v.options)
      return isEqual(variantOptions, options)
    })
  }, [product.variants, options])

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())
    const value = isValidVariant ? selectedVariant?.id : null

    if (params.get("v_id") === value) {
      return
    }

    if (value) {
      params.set("v_id", value)
    } else {
      params.delete("v_id")
    }

    router.replace(pathname + "?" + params.toString())
  }, [selectedVariant, isValidVariant])

  // check if the selected variant is in stock
  const inStock = useMemo(() => {
    // If we don't manage inventory, we can always add to cart
    if (selectedVariant && !selectedVariant.manage_inventory) {
      return true
    }

    // If we allow back orders on the variant, we can add to cart
    if (selectedVariant?.allow_backorder) {
      return true
    }

    // If there is inventory available, we can add to cart
    if (
      selectedVariant?.manage_inventory &&
      (selectedVariant?.inventory_quantity || 0) > 0
    ) {
      return true
    }

    // Otherwise, we can't add to cart
    return false
  }, [selectedVariant])

  const actionsRef = useRef<HTMLDivElement>(null)

  const inView = useIntersection(actionsRef, "0px")

  const [isSuccess, setIsSuccess] = useState(false)

  // add the selected variant to the cart
  const handleAddToCart = async () => {
    if (!selectedVariant?.id) return null

    setIsAdding(true)

    await addToCart({
      variantId: selectedVariant.id,
      quantity: quantity,
      countryCode,
    })

    setIsAdding(false)
    setIsSuccess(true)
    
    // Reset success state after 2 seconds
    setTimeout(() => {
        setIsSuccess(false)
    }, 2000)

    router.refresh()
  }

  return (
    <>
      <div className="flex flex-col gap-y-2" ref={actionsRef}>
        <div>
          {(product.variants?.length ?? 0) > 1 && (
            <div className="flex flex-col gap-y-4">
              {(product.options || []).map((option) => {
                return (
                  <div key={option.id}>
                    <OptionSelect
                      option={option}
                      current={options[option.id]}
                      updateOption={setOptionValue}
                      title={option.title ?? ""}
                      data-testid="product-options"
                      disabled={!!disabled || isAdding}
                    />
                  </div>
                )
              })}
              <Divider />
            </div>
          )}
        </div>

        <ProductPrice product={product} variant={selectedVariant} />

        <div className="flex flex-col gap-y-2">
          <div className="flex items-center justify-between bg-white border border-gray-100 rounded-full p-1 shadow-sm">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              disabled={quantity <= 1 || isAdding}
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Minus />
            </button>
            <span className="font-bold text-gray-900 w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              disabled={isAdding}
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-50 transition-colors disabled:opacity-50"
            >
              <Plus />
            </button>
          </div>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={
            !inStock ||
            !selectedVariant ||
            !!disabled ||
            isAdding ||
            !isValidVariant
          }
          className={clx(
            "w-full h-14 rounded-full uppercase tracking-[0.2em] font-black text-xs transition-all shadow-xl active:scale-[0.98] border-none",
            isSuccess ? "bg-green-600 text-white hover:bg-green-700" : "bg-black text-white hover:bg-neutral-800"
          )}
          isLoading={isAdding}
          data-testid="add-product-button"
        >
          {!selectedVariant
            ? "Choose your edition"
            : !inStock || !isValidVariant
              ? "Currently Unavailable"
              : isSuccess 
                ? "Added to Bag!" 
                : "Add to Bag"}
        </Button>
        <MobileActions
          product={product}
          variant={selectedVariant}
          options={options}
          updateOptions={setOptionValue}
          inStock={inStock}
          handleAddToCart={handleAddToCart}
          isAdding={isAdding}
          isSuccess={isSuccess}
          show={!inView}
          optionsDisabled={!!disabled || isAdding}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
    </>
  )
}
