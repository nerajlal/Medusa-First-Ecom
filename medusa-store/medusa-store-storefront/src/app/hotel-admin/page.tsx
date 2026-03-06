import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Dashboard — Metora Admin",
}

const stats = [
    { label: "Total Bookings", value: "148", change: "+12%", icon: "📋", color: "text-blue-600" },
    { label: "Rooms Occupied", value: "18 / 24", change: "75%", icon: "🛏️", color: "text-green-600" },
    { label: "Revenue (Month)", value: "₹12,45,000", change: "+8%", icon: "💰", color: "text-[#c9a96e]" },
    { label: "Guest Satisfaction", value: "4.9 / 5", change: "★★★★★", icon: "⭐", color: "text-amber-500" },
]

const recentBookings = [
    { id: "BK-1024", guest: "Priya Sharma", room: "Presidential Suite", checkin: "08 Mar 2026", checkout: "10 Mar 2026", amount: "₹1,10,000", status: "Confirmed" },
    { id: "BK-1023", guest: "Arjun Nair", room: "Pool Villa", checkin: "07 Mar 2026", checkout: "09 Mar 2026", amount: "₹56,000", status: "Confirmed" },
    { id: "BK-1022", guest: "Sunita Mehta", room: "Premier Suite", checkin: "06 Mar 2026", checkout: "08 Mar 2026", amount: "₹30,000", status: "Checked In" },
    { id: "BK-1021", guest: "Rahul Verma", room: "Deluxe Room", checkin: "05 Mar 2026", checkout: "07 Mar 2026", amount: "₹17,000", status: "Checked Out" },
    { id: "BK-1020", guest: "Anjali Krishnan", room: "Deluxe Room", checkin: "04 Mar 2026", checkout: "06 Mar 2026", amount: "₹17,000", status: "Cancelled" },
]

const statusColors: Record<string, string> = {
    "Confirmed": "bg-blue-50 text-blue-700",
    "Checked In": "bg-green-50 text-green-700",
    "Checked Out": "bg-neutral-100 text-neutral-500",
    "Cancelled": "bg-red-50 text-red-600",
}

export default function AdminDashboard() {
    return (
        <div className="p-8">
            {/* Header */}
            <div className="mb-8">
                <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Good evening, Admin 👋</h1>
                <p className="text-neutral-500 mt-1">Here's what's happening at Metora today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white border border-neutral-100 p-6 flex flex-col gap-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-2xl">{stat.icon}</span>
                            <span className={`text-xs font-bold ${stat.color}`}>{stat.change}</span>
                        </div>
                        <div>
                            <p className="text-2xl font-bold text-[#0a1628]">{stat.value}</p>
                            <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{stat.label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Recent Bookings */}
            <div className="bg-white border border-neutral-100">
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
                    <h2 className="font-bold text-[#0a1628] text-sm uppercase tracking-widest">Recent Bookings</h2>
                    <a href="/hotel-admin/bookings" className="text-xs text-[#c9a96e] hover:underline font-medium">View All →</a>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-neutral-50 border-b border-neutral-100">
                            <tr>
                                {["Booking ID", "Guest", "Room", "Check-In", "Check-Out", "Amount", "Status"].map((h) => (
                                    <th key={h} className="text-left px-6 py-3 text-xs font-bold text-neutral-400 uppercase tracking-wider">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {recentBookings.map((b, i) => (
                                <tr key={b.id} className={`border-b border-neutral-50 hover:bg-neutral-50 transition-colors ${i % 2 === 0 ? "" : ""}`}>
                                    <td className="px-6 py-4 font-mono text-xs text-[#c9a96e] font-bold">{b.id}</td>
                                    <td className="px-6 py-4 font-medium text-[#0a1628]">{b.guest}</td>
                                    <td className="px-6 py-4 text-neutral-600">{b.room}</td>
                                    <td className="px-6 py-4 text-neutral-500">{b.checkin}</td>
                                    <td className="px-6 py-4 text-neutral-500">{b.checkout}</td>
                                    <td className="px-6 py-4 font-bold text-[#0a1628]">{b.amount}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 text-xs font-bold rounded-full ${statusColors[b.status]}`}>
                                            {b.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
