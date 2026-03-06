import type { Metadata } from "next"

export const metadata: Metadata = { title: "Dashboard — Metora Admin" }

const stats = [
    { label: "Total Bookings", value: "148", sub: "+12% this month" },
    { label: "Rooms Occupied", value: "18 / 24", sub: "75% occupancy" },
    { label: "Revenue (March)", value: "₹12,45,000", sub: "+8% vs last month" },
    { label: "Guest Rating", value: "4.9 / 5.0", sub: "Based on 84 reviews" },
]

const recentBookings = [
    { id: "BK-1024", guest: "Priya Sharma", room: "Presidential Suite", checkin: "08 Mar 2026", checkout: "10 Mar 2026", amount: "₹1,10,000", status: "Confirmed" },
    { id: "BK-1023", guest: "Arjun Nair", room: "Pool Villa", checkin: "07 Mar 2026", checkout: "09 Mar 2026", amount: "₹56,000", status: "Confirmed" },
    { id: "BK-1022", guest: "Sunita Mehta", room: "Premier Suite", checkin: "06 Mar 2026", checkout: "08 Mar 2026", amount: "₹30,000", status: "Checked In" },
    { id: "BK-1021", guest: "Rahul Verma", room: "Deluxe Room", checkin: "05 Mar 2026", checkout: "07 Mar 2026", amount: "₹17,000", status: "Checked Out" },
    { id: "BK-1020", guest: "Anjali Krishnan", room: "Deluxe Room", checkin: "04 Mar 2026", checkout: "06 Mar 2026", amount: "₹17,000", status: "Cancelled" },
]

const statusStyle: Record<string, string> = {
    "Confirmed": "text-blue-600 bg-blue-50",
    "Checked In": "text-emerald-700 bg-emerald-50",
    "Checked Out": "text-neutral-400 bg-neutral-100",
    "Cancelled": "text-red-500 bg-red-50",
}

export default function AdminDashboard() {
    return (
        <div className="p-10">
            {/* Page Header */}
            <div className="mb-10 border-b border-neutral-200 pb-8">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a96e] font-semibold mb-2">Overview</p>
                <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Dashboard</h1>
                <p className="text-neutral-400 text-sm mt-1">Live snapshot of hotel operations.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-10">
                {stats.map((s) => (
                    <div key={s.label} className="bg-white border border-neutral-150 p-6 flex flex-col gap-y-2">
                        <p className="font-playfair text-2xl font-bold text-[#0a1628]">{s.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">{s.label}</p>
                        <p className="text-xs text-[#c9a96e]">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Recent Bookings Table */}
            <div className="bg-white border border-neutral-150">
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#0a1628]">Recent Bookings</p>
                    <a href="/hotel-admin/bookings" className="text-[11px] text-[#c9a96e] hover:underline tracking-wide font-medium">
                        View All
                    </a>
                </div>
                <table className="w-full text-sm">
                    <thead className="border-b border-neutral-100">
                        <tr>
                            {["Booking", "Guest", "Room", "Check-In", "Check-Out", "Amount", "Status"].map((h) => (
                                <th key={h} className="text-left px-6 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400">
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {recentBookings.map((b) => (
                            <tr key={b.id} className="border-b border-neutral-50 hover:bg-neutral-50/60 transition-colors">
                                <td className="px-6 py-4 font-mono text-xs text-[#c9a96e] font-semibold">{b.id}</td>
                                <td className="px-6 py-4 font-medium text-[#0a1628]">{b.guest}</td>
                                <td className="px-6 py-4 text-neutral-500">{b.room}</td>
                                <td className="px-6 py-4 text-neutral-400 text-xs">{b.checkin}</td>
                                <td className="px-6 py-4 text-neutral-400 text-xs">{b.checkout}</td>
                                <td className="px-6 py-4 font-semibold text-[#0a1628]">{b.amount}</td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${statusStyle[b.status]}`}>
                                        {b.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
