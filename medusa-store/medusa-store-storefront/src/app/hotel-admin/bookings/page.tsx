import type { Metadata } from "next"

export const metadata: Metadata = { title: "Bookings — Metora Admin" }

const bookings = [
    { id: "BK-1024", guest: "Priya Sharma", email: "priya@example.com", room: "Presidential Suite", checkin: "08 Mar 2026", checkout: "10 Mar 2026", guests: 2, amount: "₹1,10,000", status: "Confirmed", paid: true },
    { id: "BK-1023", guest: "Arjun Nair", email: "arjun@example.com", room: "Pool Villa", checkin: "07 Mar 2026", checkout: "09 Mar 2026", guests: 3, amount: "₹56,000", status: "Confirmed", paid: true },
    { id: "BK-1022", guest: "Sunita Mehta", email: "sunita@example.com", room: "Premier Suite", checkin: "06 Mar 2026", checkout: "08 Mar 2026", guests: 2, amount: "₹30,000", status: "Checked In", paid: true },
    { id: "BK-1021", guest: "Rahul Verma", email: "rahul@example.com", room: "Deluxe Room", checkin: "05 Mar 2026", checkout: "07 Mar 2026", guests: 1, amount: "₹17,000", status: "Checked Out", paid: true },
    { id: "BK-1020", guest: "Anjali Krishnan", email: "anjali@example.com", room: "Deluxe Room", checkin: "04 Mar 2026", checkout: "06 Mar 2026", guests: 2, amount: "₹17,000", status: "Cancelled", paid: false },
    { id: "BK-1019", guest: "Vikram Singh", email: "vikram@example.com", room: "Pool Villa", checkin: "10 Mar 2026", checkout: "13 Mar 2026", guests: 4, amount: "₹84,000", status: "Confirmed", paid: true },
    { id: "BK-1018", guest: "Meera Pillai", email: "meera@example.com", room: "Premier Suite", checkin: "11 Mar 2026", checkout: "12 Mar 2026", guests: 2, amount: "₹15,000", status: "Confirmed", paid: false },
]

const statusStyle: Record<string, string> = {
    "Confirmed": "text-blue-600 bg-blue-50",
    "Checked In": "text-emerald-700 bg-emerald-50",
    "Checked Out": "text-neutral-400 bg-neutral-100",
    "Cancelled": "text-red-500 bg-red-50",
}

export default function BookingsPage() {
    return (
        <div className="p-10">
            <div className="mb-10 border-b border-neutral-200 pb-8 flex items-end justify-between">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a96e] font-semibold mb-2">Management</p>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Bookings</h1>
                    <p className="text-neutral-400 text-sm mt-1">All hotel reservations in one place.</p>
                </div>
                <button className="bg-[#0a1628] text-white px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-[#c9a96e] hover:text-[#0a1628] transition-colors">
                    New Booking
                </button>
            </div>

            {/* Filters */}
            <div className="bg-white border border-neutral-150 p-4 mb-4 flex gap-3 flex-wrap">
                <input type="text" placeholder="Search by guest, booking ID or room..." className="flex-1 min-w-[220px] border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e] transition-colors bg-neutral-50/50" />
                <input type="date" className="border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e] bg-neutral-50/50" />
                <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                    <option>All Statuses</option>
                    <option>Confirmed</option>
                    <option>Checked In</option>
                    <option>Checked Out</option>
                    <option>Cancelled</option>
                </select>
                <button className="bg-[#c9a96e] text-[#0a1628] px-6 py-2 text-[11px] font-bold uppercase tracking-widest">
                    Search
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-150 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-neutral-100 bg-neutral-50/40">
                        <tr>
                            {["", "Booking", "Guest", "Room", "Check-In", "Check-Out", "Pax", "Amount", "Payment", "Status", ""].map((h, i) => (
                                <th key={i} className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((b) => (
                            <tr key={b.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                                <td className="px-5 py-4"><input type="checkbox" className="accent-[#c9a96e]" /></td>
                                <td className="px-5 py-4 font-mono text-xs text-[#c9a96e] font-semibold">{b.id}</td>
                                <td className="px-5 py-4">
                                    <p className="font-medium text-[#0a1628]">{b.guest}</p>
                                    <p className="text-[11px] text-neutral-400 mt-0.5">{b.email}</p>
                                </td>
                                <td className="px-5 py-4 text-neutral-500">{b.room}</td>
                                <td className="px-5 py-4 text-neutral-400 text-xs whitespace-nowrap">{b.checkin}</td>
                                <td className="px-5 py-4 text-neutral-400 text-xs whitespace-nowrap">{b.checkout}</td>
                                <td className="px-5 py-4 text-center text-neutral-500">{b.guests}</td>
                                <td className="px-5 py-4 font-semibold text-[#0a1628] whitespace-nowrap">{b.amount}</td>
                                <td className="px-5 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${b.paid ? "text-emerald-700 bg-emerald-50" : "text-amber-700 bg-amber-50"}`}>
                                        {b.paid ? "Paid" : "Pending"}
                                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 ${statusStyle[b.status]}`}>
                                        {b.status}
                                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex gap-1.5">
                                        <button className="text-[11px] text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">View</button>
                                        {b.status === "Confirmed" && (
                                            <button className="text-[11px] text-emerald-700 border border-emerald-200 px-3 py-1 hover:bg-emerald-50 transition-colors">Check In</button>
                                        )}
                                        {b.status !== "Cancelled" && b.status !== "Checked Out" && (
                                            <button className="text-[11px] text-red-500 border border-red-200 px-3 py-1 hover:bg-red-50 transition-colors">Cancel</button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-5 text-xs text-neutral-400 tracking-wide">
                <p>Showing 7 of 148 bookings</p>
                <div className="flex gap-1">
                    {[1, 2, 3, "...", 21].map((p, i) => (
                        <button key={i} className={`w-8 h-8 border text-xs font-medium transition-colors ${p === 1 ? "bg-[#0a1628] text-white border-[#0a1628]" : "border-neutral-200 hover:border-[#c9a96e] hover:text-[#c9a96e]"}`}>
                            {p}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}
