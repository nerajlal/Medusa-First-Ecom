"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"

type ProductSpecificationsProps = {
  product: HttpTypes.StoreProduct
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
  const specs = [
    { label: "Material", value: product.material },
    { label: "Country of Origin", value: product.origin_country },
    { label: "Type", value: product.type?.value },
    { label: "Weight", value: product.weight ? `${product.weight} g` : null },
    { 
      label: "Dimensions", 
      value: product.length && product.width && product.height 
        ? `${product.length}L x ${product.width}W x ${product.height}H` 
        : null 
    },
    { label: "Handle", value: product.handle },
    { label: "Collection", value: product.collection?.title },
  ].filter(spec => spec.value)

  return (
    <div id="specifications" className="w-full py-24 bg-neutral-950 text-white">
      <div className="content-container px-6 small:px-12">
        <div className="flex flex-col small:flex-row justify-between items-start gap-y-12">
          <div className="max-w-sm sticky top-40">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Technical <br /> Specifications</h2>
            <p className="text-neutral-500 text-sm leading-relaxed">
              Precision engineered and crafted with the finest materials. Every aspect of {product.title} meets our rigorous quality standards.
            </p>
          </div>

          <div className="w-full small:max-w-3xl grid grid-cols-1 small:grid-cols-2 gap-px bg-neutral-800 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl">
            {specs.map((spec, i) => (
              <div key={i} className="bg-neutral-900 p-8 flex flex-col gap-y-2 hover:bg-neutral-800 transition-colors duration-300">
                <span className="text-neutral-500 text-xs font-bold uppercase tracking-widest">{spec.label}</span>
                <span className="text-xl font-medium">{spec.value}</span>
              </div>
            ))}
            {specs.length % 2 !== 0 && (
                <div className="bg-neutral-900 p-8 hidden small:block" />
            )}
          </div>
        </div>

        {/* Brand Promise Section */}
        <div className="mt-32 pt-16 border-t border-neutral-800 grid grid-cols-1 small:grid-cols-3 gap-12 text-center small:text-left">
           <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Sustainability</h4>
              <p className="text-neutral-500 text-sm">Responsibly sourced materials and eco-friendly manufacturing processes.</p>
           </div>
           <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Quality Control</h4>
              <p className="text-neutral-500 text-sm">Rigorous stress-testing to ensure long-lasting durability and performance.</p>
           </div>
           <div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">Warranty</h4>
              <p className="text-neutral-500 text-sm">Comprehensive 2-year manufacturer warranty for total peace of mind.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecifications
