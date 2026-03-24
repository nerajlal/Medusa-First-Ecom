"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ProductHighlightsProps = {
  product: HttpTypes.StoreProduct
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ product }) => {
  // We can derive "highlights" from product metadata if available, 
  // or use the description split by paragraphs for a clean look.
  const descriptionParagraphs = product.description?.split("\n").filter(p => p.trim() !== "") || []

  return (
    <div id="highlights" className="w-full flex flex-col gap-y-16 py-16">
      {/* Hero Section of Highlights */}
      <section className="bg-neutral-50 py-24 px-6 small:px-12 rounded-3xl overflow-hidden relative">
        <div className="content-container flex flex-col items-center text-center max-w-4xl mx-auto">
          <span className="text-ui-fg-interactive font-bold text-sm uppercase tracking-widest mb-4">Unparalleled Experience</span>
          <h2 className="text-4xl small:text-6xl font-bold tracking-tight text-neutral-900 leading-tight">
            Designed for those who <br /> demanding the absolute best.
          </h2>
          <p className="mt-8 text-lg text-ui-fg-subtle leading-relaxed">
            {product.subtitle || "Exploring the boundaries of craft and innovation. Every detail of " + product.title + " has been refined for a premium feel."}
          </p>
        </div>
      </section>

      {/* Feature Grids */}
      <div className="content-container grid grid-cols-1 small:grid-cols-2 gap-8 px-6 small:px-12">
        {descriptionParagraphs.map((para, i) => (
          <section 
            key={i} 
            className="group bg-white border border-ui-border-base rounded-3xl p-10 flex flex-col justify-between hover:shadow-2xl hover:border-black transition-all duration-500 min-h-[400px] animate-fade-in-up"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            <div>
              <div className="w-12 h-12 bg-neutral-100 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-colors">
                <span className="font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Core Feature {i + 1}</h3>
              <p className="text-ui-fg-subtle text-base leading-relaxed">
                {para}
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-ui-border-base text-xs font-bold uppercase tracking-widest text-ui-fg-muted">
              Discover More &rarr;
            </div>
          </section>
        ))}
      </div>

      {/* Large Visual Section */}
      <section className="w-full bg-black py-32 flex flex-col items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            {/* Background texture or subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-800 to-transparent" />
        </div>
        <div className="content-container relative z-10 px-6 small:px-12 text-center text-white">
          <h2 className="text-4xl small:text-5xl font-bold mb-8">Elegance meets performance.</h2>
          <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
            Experience the fusion of high-end aesthetics and uncompromising quality with the {product.title}.
          </p>
          <div className="mt-16 flex justify-center gap-x-8">
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">99%</span>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Efficiency</span>
             </div>
             <div className="h-16 w-px bg-neutral-800" />
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">Pro</span>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Grade</span>
             </div>
             <div className="h-16 w-px bg-neutral-800" />
             <div className="flex flex-col items-center">
                <span className="text-3xl font-bold mb-2">&infin;</span>
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Durability</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductHighlights
