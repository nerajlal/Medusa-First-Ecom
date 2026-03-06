import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Bookings — Metora Admin",
}

const bookings = [
    { id: "BK-1024", guest: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 00001", room: "Presidential Suite", checkin: "08 Mar 2026", checkout: "10 Mar 2026", guests: 2, amount: "₹1,10,000", status: "Confirmed", paid: true },
    { id: "BK-1023", guest: "Arjun Nair", email: "arjun@example.com", phone: "+91 98765 00002", room: "Pool Villa", checkin: "07 Mar 2026", checkout: "09 Mar 2026", guests: 3, amount: "₹56,000", status: "Confirmed", paid: true },
    { id: "BK-1022", guest: "Sunita Mehta", email: "sunita@example.com", phone: "+91 98765 00003", room: "Premier Suite", checkin: "06 Mar 2026", checkout: "08 Mar 2026", guests: 2, amount: "₹30,000", status: "Checked In", paid: true },
    { id: "BK-1021", guest: "Rahul Verma", email: "rahul@example.com", phone: "+91 98765 00004", room: "Deluxe Room", checkin: "05 Mar 2026", checkout: "07 Mar 2026", guests: 1, amount: "₹17,000", status: "Checked Out", paid: true },
    { id: "BK-1020", guest: "Anjali Krishnan", email: "anjali@example.com", phone: "+91 98765 00005", room: "Deluxe Room", checkin: "04 Mar 2026", checkout: "06 Mar 2026", guests: 2, amount: "₹17,000", status: "Cancelled", paid: false },
    { id: "BK-1019", guest: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 00006", room: "Pool Villa", checkin: "10 Mar 2026", checkout: "13 Mar 2026", guests: 4, amount: "₹84,000", status: "Confirmed", paid: true },
    { id: "BK-1018", guest: "Meera Pillai", email: "meera@example.com", phone: "+91 98765 00007", room: "Premier Suite", checkin: "11 Mar 2026", checkout: "12 Mar 2026", guests: 2, amount: "₹15,000", status: "Confirmed", paid: false },
]

const statusColors: Record<string, string> = {
    "Confirmed": "bg-blue-50 text-blue-700",
    "Checked In": "bg-green-50 text-green-700",
    "Checked Out": "bg-neutral-100 text-neutral-500",
    "Cancelled": "bg-red-50 text-red-600",
}

export default function BookingsPage() {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Bookings</h1>
                    <p className="text-neutral-500 mt-1">Manage all hotel reservations</p>
                </div>
                <div className="flex gap-3">
                    <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                        <option>All Statuses</option>
                        <option>Confirmed</option>
                        <option>Checked In</option>
                        <option>Checked Out</option>
                        <option>Cancelled</option>
                    </select>
                    <button className="bg-[#0a1628] text-white px-5 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#c9a96e] hover:text-[#0a1628] transition-colors">
                        + New Booking
                    </button>
                </div>
            </div>

            {/* Search */}
            <div className="bg-white border border-neutral-100 p-4 mb-4 flex gap-4">
                <input
                    type="text"
                    placeholder="Search by guest name, booking ID or room..."
                    className="flex-1 border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e] transition-colors"
                />
                <input type="date" className="border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e]" />
                <button className="bg-[#c9a96e] text-[#0a1628] px-6 py-2 text-xs font-bold uppercase tracking-widest">
                    Search
                </button>
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-100 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100">
                        <tr>
                            {["", "Booking ID", "Guest", "Room", "Check-In", "Check-Out", "Guests", "Amount", "Payment", "Status", "Actions"].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-xs font-bold text-neutral-400 uppercase tracking-wider whitespace-nowrap">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {bookings.map((b) => (
                            <tr key={b.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                                <td className="px-5 py-4">
                                    <input type="checkbox" className="accent-[#c9a96e]" />
                                </td>
                                <td className="px-5 py-4 font-mono text-xs text-[#c9a96e] font-bold">{b.id}</td>
                                <td className="px-5 py-4">
                                    <p className="font-medium text-[#0a1628]">{b.guest}</p>
                                    <p className="text-xs text-neutral-400">{b.email}</p>
                                </td>
                                <td className="px-5 py-4 text-neutral-600">{b.room}</td>
                                <td className="px-5 py-4 text-neutral-500 whitespace-nowrap">{b.checkin}</td>
                                <td className="px-5 py-4 text-neutral-500 whitespace-nowrap">{b.checkout}</td>
                                <td className="px-5 py-4 text-center text-neutral-600">{b.guests}</td>
                                <td className="px-5 py-4 font-bold text-[#0a1628] whitespace-nowrap">{b.amount}</td>
                                <td className="px-5 py-4">
                                    <span className={`text-xs font-bold px-2 py-1 ${b.paid ? "text-green-700 bg-green-50" : "text-red-600 bg-red-50"}`}>
                                        {b.paid ? "Paid" : "Pending"}
                                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[b.status]}`}>
                                        {b.status}
                                    </span>
                                </td>
                                <td className="px-5 py-4">
                                    <div className="flex gap-2">
                                        <button className="text-xs text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                                            View
                                        </button>
                                        {b.status === "Confirmed" && (
                                            <button className="text-xs text-green-700 border border-green-200 px-3 py-1 hover:bg-green-50 transition-colors">
                                                Check In
                                            </button>
                                        )}
                                        {b.status !== "Cancelled" && b.status !== "Checked Out" && (
                                            <button className="text-xs text-red-600 border border-red-200 px-3 py-1 hover:bg-red-50 transition-colors">
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4 text-sm text-neutral-500">
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
