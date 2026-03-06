"use client"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { useState } from "react"

export default function HotelHero() {
    return (
        <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: "url('/images/homepage/metora_hero.png')" }}
            />
            {/* Deep gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628]/60 via-[#0a1628]/30 to-[#0a1628]/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                {/* Eyebrow */}
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-6">
                    Welcome to Metora
                </p>
                {/* Heading */}
                <h1 className="font-playfair text-5xl small:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl">
                    Where Luxury<br />Meets Comfort
                </h1>
                {/* Divider */}
                <div className="h-px w-24 bg-[#c9a96e] mb-8" />
                {/* Subheading */}
                <p className="text-white/80 text-lg small:text-xl max-w-xl leading-relaxed mb-12 font-light">
                    Immerse yourself in an unparalleled luxury experience. Every detail crafted for your perfect stay.
                </p>

                {/* Availability Search Bar */}
                <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 p-1">
                    <div className="grid grid-cols-1 small:grid-cols-[1fr_1fr_1fr_auto] gap-px bg-white/20">
                        <input
                            type="date"
                            placeholder="Check-In"
                            className="bg-white/90 text-[#0a1628] px-5 py-4 text-sm font-medium outline-none placeholder:text-neutral-500 w-full"
                        />
                        <input
                            type="date"
                            placeholder="Check-Out"
                            className="bg-white/90 text-[#0a1628] px-5 py-4 text-sm font-medium outline-none placeholder:text-neutral-500 w-full"
                        />
                        <select className="bg-white/90 text-[#0a1628] px-5 py-4 text-sm font-medium outline-none w-full appearance-none cursor-pointer">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4+ Guests</option>
                        </select>
                        <LocalizedClientLink
                            href="/rooms"
                            className="bg-[#c9a96e] text-[#0a1628] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#b8935a] transition-colors whitespace-nowrap flex items-center justify-center"
                        >
                            Check Availability
                        </LocalizedClientLink>
                    </div>
                </div>

                {/* Scroll hint */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 text-xs tracking-widest uppercase">
                    <span>Scroll</span>
                    <div className="w-px h-10 bg-white/30 animate-pulse" />
                </div>
            </div>
        </section>
    )
}
