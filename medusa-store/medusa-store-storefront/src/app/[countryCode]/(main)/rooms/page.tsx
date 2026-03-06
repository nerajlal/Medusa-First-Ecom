import { Metadata } from "next"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
    title: "Our Rooms — Metora Luxury Hotel",
    description:
        "Explore Metora's collection of premium rooms and suites. From superior rooms to exclusive villas, every stay is crafted for your comfort.",
}

// Static room data — in production, these come from Medusa products (room = product)
const rooms = [
    {
        id: "deluxe-room",
        handle: "deluxe-room",
        name: "Deluxe Room",
        tagline: "Elegant comfort for every traveller",
        size: "35 sqm",
        capacity: "2 Guests",
        bed: "King Bed",
        price: 8500,
        image: "/images/homepage/metora_hero.png",
        amenities: ["Free WiFi", "Air Conditioning", "32\" Smart TV", "Mini Bar"],
    },
    {
        id: "premier-suite",
        handle: "premier-suite",
        name: "Premier Suite",
        tagline: "Spacious luxury with panoramic views",
        size: "65 sqm",
        capacity: "2 Guests",
        bed: "King Bed",
        price: 15000,
        image: "/images/homepage/metora_hero.png",
        amenities: ["Free WiFi", "Private Balcony", "Jacuzzi", "Butler Service"],
    },
    {
        id: "pool-villa",
        handle: "pool-villa",
        name: "Pool Villa",
        tagline: "Private plunge pool, pure indulgence",
        size: "105 sqm",
        capacity: "4 Guests",
        bed: "2 King Beds",
        price: 28000,
        image: "/images/homepage/metora_hero.png",
        amenities: ["Private Pool", "Dedicated Butler", "Free Airport Transfer", "All Meals"],
    },
    {
        id: "presidential-suite",
        handle: "presidential-suite",
        name: "Presidential Suite",
        tagline: "The pinnacle of luxury living",
        size: "180 sqm",
        capacity: "4 Guests",
        bed: "Master Bedroom + Living Room",
        price: 55000,
        image: "/images/homepage/metora_hero.png",
        amenities: ["Private Chef", "Limousine Transfer", "Spa Treatments", "All Inclusive"],
    },
]

export default function RoomsPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Page Header */}
            <div className="bg-[#0a1628] pt-32 pb-20 text-center">
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-4">
                    Accommodation
                </p>
                <h1 className="font-playfair text-5xl small:text-7xl font-bold text-white mb-6">
                    Our Rooms & Suites
                </h1>
                <div className="h-px w-20 bg-[#c9a96e] mx-auto mb-6" />
                <p className="text-white/60 max-w-xl mx-auto text-lg font-light">
                    Every room a sanctuary. Every detail, intentional.
                </p>
            </div>

            {/* Rooms Grid */}
            <div className="content-container py-20">
                <div className="grid grid-cols-1 small:grid-cols-2 gap-10">
                    {rooms.map((room) => (
                        <article key={room.id} className="group flex flex-col bg-white border border-neutral-100 hover:shadow-2xl transition-all duration-500">
                            {/* Room Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url('${room.image}')` }}
                                />
                                {/* Price Badge */}
                                <div className="absolute top-4 right-4 bg-[#0a1628]/90 text-white px-4 py-2">
                                    <p className="text-[#c9a96e] text-xs uppercase tracking-widest font-medium">From</p>
                                    <p className="font-playfair text-xl font-bold">₹{room.price.toLocaleString("en-IN")}</p>
                                    <p className="text-white/50 text-xs">per night</p>
                                </div>
                            </div>

                            {/* Room Details */}
                            <div className="p-8 flex flex-col flex-1">
                                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.3em] font-medium mb-2">
                                    {room.size} · {room.bed} · {room.capacity}
                                </p>
                                <h2 className="font-playfair text-2xl font-bold text-[#0a1628] mb-2 group-hover:text-[#c9a96e] transition-colors">
                                    {room.name}
                                </h2>
                                <p className="text-neutral-500 text-sm mb-6 font-light leading-relaxed">
                                    {room.tagline}
                                </p>

                                {/* Amenities */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {room.amenities.map((a) => (
                                        <span key={a} className="text-xs border border-neutral-200 px-3 py-1 text-neutral-500 tracking-wide">
                                            {a}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="mt-auto flex gap-3">
                                    <LocalizedClientLink
                                        href={`/rooms/${room.handle}`}
                                        className="flex-1 h-12 flex items-center justify-center bg-[#0a1628] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c9a96e] hover:text-[#0a1628] transition-all"
                                    >
                                        Book This Room
                                    </LocalizedClientLink>
                                    <LocalizedClientLink
                                        href={`/rooms/${room.handle}`}
                                        className="h-12 px-6 flex items-center justify-center border border-[#0a1628] text-[#0a1628] text-xs font-medium uppercase tracking-wider hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
                                    >
                                        Details
                                    </LocalizedClientLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
