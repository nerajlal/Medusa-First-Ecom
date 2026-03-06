import LocalizedClientLink from "@modules/common/components/localized-client-link"

const amenities = [
    { icon: "🏊", title: "Infinity Pool", desc: "Heated year-round with panoramic views" },
    { icon: "🍽️", title: "Fine Dining", desc: "Award-winning multi-cuisine restaurant" },
    { icon: "💆", title: "Luxury Spa", desc: "Full-service Ayurvedic & wellness spa" },
    { icon: "🎾", title: "Sports Facilities", desc: "Tennis, gym and recreational activities" },
    { icon: "🚗", title: "Valet Parking", desc: "24-hour complimentary valet service" },
    { icon: "🛎️", title: "Concierge", desc: "Dedicated 24/7 personal concierge" },
]

export default function HotelAmenities() {
    return (
        <section className="py-24 small:py-36 bg-[#0a1628] text-white">
            <div className="content-container">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-4">
                        World-Class Facilities
                    </p>
                    <h2 className="font-playfair text-4xl small:text-5xl font-bold text-white mb-6">
                        The Metora Experience
                    </h2>
                    <div className="h-px w-20 bg-[#c9a96e] mb-6" />
                    <p className="text-white/60 max-w-xl text-lg leading-relaxed font-light">
                        Every amenity curated to elevate your stay from ordinary to extraordinary.
                    </p>
                </div>

                {/* Amenities Grid */}
                <div className="grid grid-cols-1 small:grid-cols-3 gap-px bg-white/10">
                    {amenities.map((a) => (
                        <div
                            key={a.title}
                            className="bg-[#0a1628] p-10 flex flex-col gap-y-3 hover:bg-[#0f1f3d] transition-colors group"
                        >
                            <span className="text-3xl">{a.icon}</span>
                            <h3 className="font-playfair text-xl font-bold text-white group-hover:text-[#c9a96e] transition-colors">
                                {a.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed">{a.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
