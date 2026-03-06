import type { Metadata } from "next"

export const metadata: Metadata = { title: "Guests — Metora Admin" }

const guests = [
    { id: "G-001", name: "Priya Sharma", email: "priya@example.com", city: "Mumbai", stays: 4, spend: "₹2,30,000", last: "08 Mar 2026", tier: "VIP" },
    { id: "G-002", name: "Arjun Nair", email: "arjun@example.com", city: "Bangalore", stays: 3, spend: "₹1,56,000", last: "07 Mar 2026", tier: "Regular" },
    { id: "G-003", name: "Sunita Mehta", email: "sunita@example.com", city: "Delhi", stays: 2, spend: "₹68,000", last: "06 Mar 2026", tier: "Regular" },
    { id: "G-004", name: "Rahul Verma", email: "rahul@example.com", city: "Hyderabad", stays: 5, spend: "₹3,20,000", last: "05 Mar 2026", tier: "VIP" },
    { id: "G-005", name: "Anjali Krishnan", email: "anjali@example.com", city: "Kochi", stays: 1, spend: "₹17,000", last: "04 Mar 2026", tier: "New" },
    { id: "G-006", name: "Vikram Singh", email: "vikram@example.com", city: "Pune", stays: 7, spend: "₹5,80,000", last: "10 Mar 2026", tier: "VIP" },
]

const tierStyle: Record<string, string> = {
    "VIP": "text-[#b8935a] bg-[#c9a96e]/10 border border-[#c9a96e]/30",
    "Regular": "text-blue-600 bg-blue-50",
    "New": "text-emerald-700 bg-emerald-50",
}

export default function GuestsPage() {
    return (
        <div className="p-10">
            <div className="mb-10 border-b border-neutral-200 pb-8 flex items-end justify-between">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a96e] font-semibold mb-2">CRM</p>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Guests</h1>
                    <p className="text-neutral-400 text-sm mt-1">Guest profiles and stay history.</p>
                </div>
                <div className="flex gap-3">
                    <input type="text" placeholder="Search guests..." className="border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e] bg-neutral-50/50" />
                    <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                        <option>All Tiers</option>
                        <option>VIP</option>
                        <option>Regular</option>
                        <option>New</option>
                    </select>
                </div>
            </div>

            {/* Summary tiles */}
            <div className="grid grid-cols-3 gap-5 mb-8">
                {[
                    { label: "Total Guests", value: "312", sub: "All time" },
                    { label: "VIP Members", value: "48", sub: "High-value guests" },
                    { label: "New (March)", value: "23", sub: "This month" },
                ].map((s) => (
                    <div key={s.label} className="bg-white border border-neutral-150 p-6">
                        <p className="font-playfair text-2xl font-bold text-[#0a1628]">{s.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-2 font-semibold">{s.label}</p>
                        <p className="text-xs text-[#c9a96e] mt-1">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-150 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-neutral-100 bg-neutral-50/40">
                        <tr>
                            {["Guest", "Contact", "City", "Stays", "Total Spend", "Last Stay", "Tier", ""].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {guests.map((g) => (
                            <tr key={g.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                                <td className="px-5 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-[#0a1628] flex items-center justify-center text-[#c9a96e] text-xs font-bold flex-shrink-0">
                                            {g.name.split(" ").map(n => n[0]).join("")}
                                        </div>
                                        <div>
                                            <p className="font-medium text-[#0a1628]">{g.name}</p>
                                            <p className="text-[10px] text-neutral-400">{g.id}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-5 py-4">
                                    <p className="text-neutral-500 text-xs">{g.email}</p>
                                </td>
                                <td className="px-5 py-4 text-neutral-400 text-sm">{g.city}</td>
                                <td className="px-5 py-4 text-center font-semibold text-[#0a1628]">{g.stays}</td>
                                <td className="px-5 py-4 font-semibold text-[#0a1628]">{g.spend}</td>
                                <td className="px-5 py-4 text-neutral-400 text-xs whitespace-nowrap">{g.last}</td>
                                <td className="px-5 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${tierStyle[g.tier]}`}>{g.tier}</span>
                                </td>
                                <td className="px-5 py-4">
                                    <button className="text-[11px] text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">View</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
