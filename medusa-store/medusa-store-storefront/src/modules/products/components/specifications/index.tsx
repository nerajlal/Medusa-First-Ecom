"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"

type ProductSpecificationsProps = {
  product: HttpTypes.StoreProduct
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ product }) => {
  const specs = [
    { label: "Fabric Blend", value: product.material || "Performance Synthetic" },
    { label: "Breathability", value: "High-Density Micro-Mesh" },
    { label: "Durability", value: "Reinforced 3-Stitch Seams" },
    { label: "Fit Type", value: product.type?.value || "Athletic / Regular" },
    { label: "Weight", value: product.weight ? `${product.weight} g` : "Ultra-Lightweight" },
    { label: "Origin", value: product.origin_country || "Imported" },
    { label: "Collection", value: product.collection?.title || "Core Series" },
  ].filter(spec => spec.value)

  return (
    <div id="specifications" className="w-full py-32 bg-neutral-950 text-white overflow-hidden scroll-mt-20">
      <div className="content-container px-6 small:px-12 large:px-24">
        <div className="flex flex-col small:flex-row justify-between items-start gap-y-20">
          <div className="max-w-md small:sticky small:top-40">
            <span className="text-red-500 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Tech Specs</span>
            <h2 className="text-5xl small:text-7xl font-black tracking-tighter mb-8 leading-none">The finer <br /> details.</h2>
            <p className="text-neutral-500 text-lg leading-relaxed font-light">
              Every fiber, every seam, and every detail has been meticulously considered to ensure the ultimate performance experience.
            </p>
          </div>

          <div className="w-full small:max-w-4xl grid grid-cols-1 small:grid-cols-2 gap-px bg-neutral-900 border border-neutral-900 rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {specs.map((spec, i) => (
              <div key={i} className="bg-neutral-950 p-10 flex flex-col gap-y-4 group hover:bg-neutral-900 transition-all duration-500">
                <span className="text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-red-500 transition-colors uppercase">{spec.label}</span>
                <span className="text-2xl font-medium tracking-tight text-neutral-200 group-hover:text-white transition-colors">{spec.value}</span>
              </div>
            ))}
            {specs.length % 2 !== 0 && (
                <div className="bg-neutral-950 p-10 hidden small:block" />
            )}
          </div>
        </div>

        {/* Technical Icons / Features Row */}
        <div className="mt-40 pt-20 border-t border-neutral-900 grid grid-cols-2 small:grid-cols-4 gap-12 sm:gap-20">
           <div className="flex flex-col gap-y-4 group">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[10px] font-bold group-hover:bg-red-600 group-hover:border-red-600 transition-all">01</div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Sustainability</h4>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">Environmentally conscious manufacturing and materials.</p>
           </div>
           <div className="flex flex-col gap-y-4 group">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[10px] font-bold group-hover:bg-white group-hover:text-black transition-all">02</div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Ethical</h4>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">Fair labor and transparent global supply chains.</p>
           </div>
           <div className="flex flex-col gap-y-4 group">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[10px] font-bold group-hover:bg-white group-hover:text-black transition-all">03</div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Quality</h4>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">Rigorous inspections for absolute consistency.</p>
           </div>
           <div className="flex flex-col gap-y-4 group">
              <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-[10px] font-bold group-hover:bg-white group-hover:text-black transition-all">04</div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Guarantee</h4>
              <p className="text-neutral-500 text-xs leading-relaxed font-light">A comprehensive 1-year limited warranty protection.</p>
           </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecifications
