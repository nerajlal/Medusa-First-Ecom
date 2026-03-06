import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default function HotelCTA() {
    return (
        <section className="relative py-32 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/homepage/metora_hero.png')" }}
            />
            <div className="absolute inset-0 bg-[#0a1628]/75" />

            {/* Content */}
            <div className="relative z-10 content-container flex flex-col items-center text-center">
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-6">
                    Limited Availability
                </p>
                <h2 className="font-playfair text-4xl small:text-6xl font-bold text-white mb-8 max-w-3xl leading-tight">
                    Reserve Your Perfect Stay Today
                </h2>
                <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-12 font-light">
                    Join thousands of discerning guests who have discovered the Metora difference. Your unforgettable experience awaits.
                </p>
                <LocalizedClientLink
                    href="/rooms"
                    className="h-14 px-14 flex items-center bg-[#c9a96e] text-[#0a1628] text-xs font-bold uppercase tracking-[0.3em] hover:bg-[#b8935a] transition-all"
                >
                    Explore Our Rooms
                </LocalizedClientLink>
            </div>
        </section>
    )
}
