import type { Metadata } from "next"

export const metadata: Metadata = { title: "Rooms — Metora Admin" }

const rooms = [
  { id: "R01", name: "Deluxe Room", type: "Standard", size: "35 sqm", capacity: 2, price: 8500, total: 8, occupied: 6 },
  { id: "R02", name: "Premier Suite", type: "Suite", size: "65 sqm", capacity: 2, price: 15000, total: 6, occupied: 5 },
  { id: "R03", name: "Pool Villa", type: "Villa", size: "105 sqm", capacity: 4, price: 28000, total: 6, occupied: 5 },
  { id: "R04", name: "Presidential Suite", type: "Suite", size: "180 sqm", capacity: 4, price: 55000, total: 4, occupied: 2 },
]

export default function RoomsPage() {
  return (
    <div className="p-10">
      <div className="mb-10 border-b border-neutral-200 pb-8 flex items-end justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a96e] font-semibold mb-2">Inventory</p>
          <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Rooms</h1>
          <p className="text-neutral-400 text-sm mt-1">Manage room types, pricing and availability.</p>
        </div>
        <button className="bg-[#0a1628] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c9a96e] hover:text-[#0a1628] transition-colors">
          Add Room Type
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {rooms.map((room) => {
          const pct = Math.round((room.occupied / room.total) * 100)
          return (
            <div key={room.id} className="bg-white border border-neutral-150">
              {/* Card Header */}
              <div className="bg-[#0a1628] px-6 py-5 flex items-start justify-between">
                <div>
                  <p className="text-white font-semibold tracking-wide">{room.name}</p>
                  <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-medium mt-1.5">
                    {room.type} &middot; {room.size} &middot; {room.capacity} guests max
                  </p>
                </div>
                <span className="border border-emerald-400/40 text-emerald-400 text-[10px] uppercase tracking-widest font-bold px-3 py-1">
                  Active
                </span>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 divide-x divide-neutral-100 border-b border-neutral-100">
                {[
                  { label: "Per Night", value: `₹${room.price.toLocaleString("en-IN")}` },
                  { label: "Max Guests", value: String(room.capacity) },
                  { label: "Total Units", value: String(room.total) },
                ].map((m) => (
                  <div key={m.label} className="p-5 text-center">
                    <p className="font-playfair text-xl font-bold text-[#0a1628]">{m.value}</p>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-1 font-semibold">{m.label}</p>
                  </div>
                ))}
              </div>

              {/* Occupancy */}
              <div className="px-6 py-5 border-b border-neutral-100">
                <div className="flex justify-between mb-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">Occupancy</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0a1628]">
                    {room.occupied}/{room.total} ({pct}%)
                  </p>
                </div>
                <div className="h-1 bg-neutral-100">
                  <div className="h-1 bg-[#c9a96e] transition-all" style={{ width: `${pct}%` }} />
                </div>
              </div>

              {/* Actions */}
              <div className="flex divide-x divide-neutral-100">
                {["Edit Room", "Gallery", "Availability"].map((action) => (
                  <button key={action} className="flex-1 py-3 text-[11px] font-bold uppercase tracking-widest text-neutral-400 hover:text-[#0a1628] hover:bg-neutral-50/60 transition-colors">
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
