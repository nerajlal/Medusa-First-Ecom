import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Guests — Metora Admin",
}

const guests = [
    { id: "G-001", name: "Priya Sharma", email: "priya@example.com", phone: "+91 98765 00001", city: "Mumbai", totalStays: 4, totalSpend: "₹2,30,000", lastStay: "08 Mar 2026", status: "VIP" },
    { id: "G-002", name: "Arjun Nair", email: "arjun@example.com", phone: "+91 98765 00002", city: "Bangalore", totalStays: 3, totalSpend: "₹1,56,000", lastStay: "07 Mar 2026", status: "Regular" },
    { id: "G-003", name: "Sunita Mehta", email: "sunita@example.com", phone: "+91 98765 00003", city: "Delhi", totalStays: 2, totalSpend: "₹68,000", lastStay: "06 Mar 2026", status: "Regular" },
    { id: "G-004", name: "Rahul Verma", email: "rahul@example.com", phone: "+91 98765 00004", city: "Hyderabad", totalStays: 5, totalSpend: "₹3,20,000", lastStay: "05 Mar 2026", status: "VIP" },
    { id: "G-005", name: "Anjali Krishnan", email: "anjali@example.com", phone: "+91 98765 00005", city: "Kochi", totalStays: 1, totalSpend: "₹17,000", lastStay: "04 Mar 2026", status: "New" },
    { id: "G-006", name: "Vikram Singh", email: "vikram@example.com", phone: "+91 98765 00006", city: "Pune", totalStays: 7, totalSpend: "₹5,80,000", lastStay: "10 Mar 2026", status: "VIP" },
]

const statusColors: Record<string, string> = {
    "VIP": "bg-[#c9a96e]/15 text-[#b8935a] border border-[#c9a96e]/30",
    "Regular": "bg-blue-50 text-blue-700",
    "New": "bg-green-50 text-green-700",
}

export default function GuestsPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Guests</h1>
                    <p className="text-neutral-500 mt-1">View and manage hotel guests</p>
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="Search guests..." className="border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e]" />
                    <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                        <option>All Guests</option>
                        <option>VIP</option>
                        <option>Regular</option>
                        <option>New</option>
                    </select>
                </div>
            </div>

            {/* Summary Tiles */}
            <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                    { label: "Total Guests", value: "312", sub: "All time" },
                    { label: "VIP Members", value: "48", sub: "High-value guests" },
                    { label: "New This Month", value: "23", sub: "March 2026" },
                ].map((s) => (
                    <div key={s.label} className="bg-white border border-neutral-100 p-6">
                        <p className="text-2xl font-bold text-[#0a1628]">{s.value}</p>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{s.label}</p>
                        <p className="text-xs text-neutral-300 mt-0.5">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-100 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100">
                        <tr>
                            {["Guest", "Contact", "City", "Total Stays", "Total Spend", "Last Stay", "Tier", ""].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-xs font-bold text-neutral-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((g) => (
                            <tr key={g.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-[#0a1628] flex items-center justify-center text-[#c9a96e] text-sm font-bold flex-shrink-0">
                                            {g.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0a1628]">{g.name}</p>
                                            <p className="text-xs text-neutral-400">{g.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4">
                                    <p className="text-neutral-600 text-xs">{g.email}</p>
                                    <p className="text-neutral-400 text-xs">{g.phone}</p>
                                </td>
                                <td className="px-5 py-4 text-neutral-500">{g.city}</td>
                                <td className="px-5 py-4 text-center font-bold text-[#0a1628]">{g.totalStays}</td>
                                <td className="px-5 py-4 font-bold text-[#0a1628]">{g.totalSpend}</td>
                                <td className="px-5 py-4 text-neutral-500 whitespace-nowrap">{g.lastStay}</td>
                                <td className="px-5 py-4">
                                    <span className={`px-3 py-1 text-xs font-bold ${statusColors[g.status]}`}>{g.status}</span>
                                </td>
                                <td className="px-5 py-4">
                                    <button className="text-xs text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
