"use client"

import React from "react"
import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

type ProductHighlightsProps = {
  product: HttpTypes.StoreProduct
}

const ProductHighlights: React.FC<ProductHighlightsProps> = ({ product }) => {
  return (
    <div id="highlights" className="w-full flex flex-col gap-y-0 overflow-hidden scroll-mt-20">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.8s ease-out forwards; }
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-400 { animation-delay: 400ms; }
      `}} />

      {/* Hero Section: Full Bleed */}
      <section className="relative w-full h-[70vh] small:h-[90vh] flex items-center justify-center bg-black overflow-hidden">
        <Image
          src="/highlights/hero.png"
          alt="Product Hero"
          fill
          className="object-cover opacity-70 scale-105 hover:scale-100 transition-transform duration-[3s] ease-out"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl">
          <span className="text-white/60 font-bold text-xs small:text-sm uppercase tracking-[0.4em] mb-6 animate-fade-in opacity-0">
            Performance Redefined
          </span>
          <h2 className="text-white text-5xl small:text-8xl font-black tracking-tighter leading-[0.9] mb-8 animate-slide-up opacity-0">
            {product.title}
          </h2>
          <p className="text-white/70 text-lg small:text-2xl font-light max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0 animation-delay-200">
            {product.subtitle || "Crafted for those who demand the absolute best in comfort and style."}
          </p>
        </div>
      </section>

      {/* Feature 1: Fabric Detail - Split Layout */}
      <section className="grid grid-cols-1 small:grid-cols-2 w-full min-h-[70vh] bg-white border-y border-neutral-100">
        <div className="flex flex-col justify-center p-12 small:p-32 order-2 small:order-1 items-start">
          <span className="text-red-500 font-black text-xs uppercase tracking-widest mb-6">Material Science</span>
          <h3 className="text-4xl small:text-6xl font-bold mb-8 text-black tracking-tight leading-tight">
            Superior <br /> Breathability.
          </h3>
          <p className="text-neutral-500 text-lg small:text-xl leading-relaxed max-w-md font-light">
            Our custom-engineered micro-mesh weave allows for maximum airflow, keeping you cool and dry even during the most intense workouts. Experience the science of effort.
          </p>
          <div className="mt-12 w-24 h-1 bg-black" />
        </div>
        <div className="relative min-h-[500px] small:min-h-full order-1 small:order-2 bg-neutral-50 overflow-hidden">
          <Image
            src="/highlights/fabric.png"
            alt="Fabric Detail"
            fill
            className="object-cover transition-transform duration-1000 hover:scale-110"
          />
        </div>
      </section>

      {/* Feature 2: Lifestyle / Fit - High Contrast */}
      <section className="relative w-full min-h-[90vh] bg-neutral-950 flex items-center justify-center overflow-hidden py-32">
        <Image
          src="/highlights/lifestyle.png"
          alt="Lifestyle"
          fill
          className="object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
        />
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent" />
        
        <div className="relative z-10 content-container px-6 text-center text-white">
            <h3 className="text-4xl small:text-7xl font-black mb-16 tracking-tighter">Movement without limits.</h3>
            <div className="grid grid-cols-1 small:grid-cols-3 gap-y-16 small:gap-x-24 max-w-6xl mx-auto">
                <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white transition-all duration-500 bg-white/5">
                       <span className="font-black text-xl">4-W</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white uppercase tracking-widest">Ultra Stretch</h4>
                    <p className="text-neutral-400 text-base font-light max-w-[250px]">Omnidirectional flexibility that moves intuitively with your body.</p>
                </div>
                <div className="flex flex-col items-center group">
                   <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white transition-all duration-500 bg-white/5 text-red-500 group-hover:text-red-400">
                       <span className="font-black text-xl">FE</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white uppercase tracking-widest">Feather Light</h4>
                    <p className="text-neutral-400 text-base font-light max-w-[250px]">Proprietary synthetic blend reduced to the molecular minimum.</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center mb-8 group-hover:border-white transition-all duration-500 bg-white/5">
                       <span className="font-black text-xl">DR</span>
                    </div>
                    <h4 className="font-bold text-xl mb-3 text-white uppercase tracking-widest">Rapid Dry</h4>
                    <p className="text-neutral-400 text-base font-light max-w-[250px]">Moisture-wicking precision that evaporates sweat in seconds.</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default ProductHighlights
