import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Rooms — Metora Admin",
}

const rooms = [
    { id: "R01", name: "Deluxe Room", type: "Standard", size: "35 sqm", capacity: 2, price: 8500, total: 8, occupied: 6, status: "Active", image: "🛏️" },
    { id: "R02", name: "Premier Suite", type: "Suite", size: "65 sqm", capacity: 2, price: 15000, total: 6, occupied: 5, status: "Active", image: "🛋️" },
    { id: "R03", name: "Pool Villa", type: "Villa", size: "105 sqm", capacity: 4, price: 28000, total: 6, occupied: 5, status: "Active", image: "🏊" },
    { id: "R04", name: "Presidential Suite", type: "Suite", size: "180 sqm", capacity: 4, price: 55000, total: 4, occupied: 2, status: "Active", image: "👑" },
]

export default function RoomsPage() {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Rooms</h1>
                    <p className="text-neutral-500 mt-1">Manage hotel rooms, pricing and availability</p>
                </div>
                <button className="bg-[#0a1628] text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#c9a96e] hover:text-[#0a1628] transition-colors">
                    + Add Room
                </button>
            </div>

            {/* Room Cards */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                {rooms.map((room) => {
                    const occupancyPct = Math.round((room.occupied / room.total) * 100)
                    return (
                        <div key={room.id} className="bg-white border border-neutral-100 overflow-hidden">
                            {/* Top Bar */}
                            <div className="bg-[#0a1628] px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-x-3">
                                    <span className="text-2xl">{room.image}</span>
                                    <div>
                                        <p className="text-white font-bold">{room.name}</p>
                                        <p className="text-[#c9a96e] text-xs font-medium uppercase tracking-wider">{room.type} · {room.size}</p>
                                    </div>
                                </div>
                                <span className="bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1">{room.status}</span>
                            </div>

                            {/* Details */}
                            <div className="p-6">
                                <div className="grid grid-cols-3 gap-4 mb-6">
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#0a1628]">₹{room.price.toLocaleString("en-IN")}</p>
                                        <p className="text-xs text-neutral-400 uppercase tracking-widest">Per Night</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#0a1628]">{room.capacity}</p>
                                        <p className="text-xs text-neutral-400 uppercase tracking-widest">Max Guests</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-2xl font-bold text-[#0a1628]">{room.total}</p>
                                        <p className="text-xs text-neutral-400 uppercase tracking-widest">Total Units</p>
                                    </div>
                                </div>

                                {/* Occupancy Bar */}
                                <div className="mb-4">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-neutral-400 uppercase tracking-widest">Occupancy</span>
                                        <span className="font-bold text-[#0a1628]">{room.occupied}/{room.total} ({occupancyPct}%)</span>
                                    </div>
                                    <div className="h-2 bg-neutral-100 w-full">
                                        <div
                                            className="h-2 bg-[#c9a96e] transition-all"
                                            style={{ width: `${occupancyPct}%` }}
                                        />
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-3 pt-4 border-t border-neutral-50">
                                    <button className="flex-1 py-2 text-xs font-bold uppercase tracking-widest border border-[#0a1628] text-[#0a1628] hover:bg-[#0a1628] hover:text-white transition-colors">
                                        Edit Room
                                    </button>
                                    <button className="flex-1 py-2 text-xs font-bold uppercase tracking-widest border border-neutral-200 text-neutral-600 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                                        View Gallery
                                    </button>
                                    <button className="flex-1 py-2 text-xs font-bold uppercase tracking-widest border border-neutral-200 text-neutral-600 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                                        Availability
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
