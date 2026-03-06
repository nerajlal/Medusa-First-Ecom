import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Payments — Metora Admin",
}

const transactions = [
    { id: "TXN-5041", booking: "BK-1024", guest: "Priya Sharma", amount: "₹1,10,000", method: "Stripe (Card)", date: "08 Mar 2026", status: "Paid" },
    { id: "TXN-5040", booking: "BK-1023", guest: "Arjun Nair", amount: "₹56,000", method: "Razorpay (UPI)", date: "07 Mar 2026", status: "Paid" },
    { id: "TXN-5039", booking: "BK-1022", guest: "Sunita Mehta", amount: "₹30,000", method: "Stripe (Card)", date: "06 Mar 2026", status: "Paid" },
    { id: "TXN-5038", booking: "BK-1021", guest: "Rahul Verma", amount: "₹17,000", method: "Razorpay (NetBanking)", date: "05 Mar 2026", status: "Paid" },
    { id: "TXN-5037", booking: "BK-1020", guest: "Anjali Krishnan", amount: "₹17,000", method: "Stripe (Card)", date: "04 Mar 2026", status: "Refunded" },
    { id: "TXN-5036", booking: "BK-1018", guest: "Meera Pillai", amount: "₹15,000", method: "Razorpay (UPI)", date: "03 Mar 2026", status: "Pending" },
    { id: "TXN-5035", booking: "BK-1017", guest: "Vikram Singh", amount: "₹84,000", method: "Stripe (Card)", date: "01 Mar 2026", status: "Paid" },
]

const txnColors: Record<string, string> = {
    Paid: "bg-green-50 text-green-700",
    Refunded: "bg-amber-50 text-amber-700",
    Pending: "bg-blue-50 text-blue-600",
    Failed: "bg-red-50 text-red-600",
}

export default function PaymentsPage() {
    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Payments</h1>
                    <p className="text-neutral-500 mt-1">Track all payment transactions</p>
                </div>
                <button className="border border-neutral-200 text-neutral-600 px-5 py-2 text-xs font-bold uppercase tracking-widest hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                    ↓ Export CSV
                </button>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 mb-8">
                {[
                    { label: "Total Revenue", value: "₹12,45,000", sub: "March 2026", color: "text-[#0a1628]" },
                    { label: "Successful", value: "134", sub: "Transactions", color: "text-green-700" },
                    { label: "Pending", value: "8", sub: "Awaiting payment", color: "text-blue-700" },
                    { label: "Refunded", value: "₹34,000", sub: "6 transactions", color: "text-amber-700" },
                ].map((s) => (
                    <div key={s.label} className="bg-white border border-neutral-100 p-6">
                        <p className={`text-2xl font-bold ${s.color}`}>{s.value}</p>
                        <p className="text-xs text-neutral-400 uppercase tracking-widest mt-1">{s.label}</p>
                        <p className="text-xs text-neutral-300 mt-0.5">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white border border-neutral-100 p-4 mb-4 flex gap-4">
                <input type="text" placeholder="Search by transaction ID, guest, booking..." className="flex-1 border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e]" />
                <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                    <option>All Methods</option>
                    <option>Stripe</option>
                    <option>Razorpay</option>
                </select>
                <select className="border border-neutral-200 px-4 py-2 text-sm bg-white outline-none focus:border-[#c9a96e]">
                    <option>All Statuses</option>
                    <option>Paid</option>
                    <option>Pending</option>
                    <option>Refunded</option>
                </select>
            </div>

            {/* Table */}
            <div className="bg-white border border-neutral-100 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="bg-neutral-50 border-b border-neutral-100">
                        <tr>
                            {["Transaction ID", "Booking", "Guest", "Amount", "Method", "Date", "Status", ""].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-xs font-bold text-neutral-400 uppercase tracking-wider whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                                <td className="px-5 py-4 font-mono text-xs text-[#c9a96e] font-bold">{t.id}</td>
                                <td className="px-5 py-4 font-mono text-xs text-neutral-500">{t.booking}</td>
                                <td className="px-5 py-4 font-medium text-[#0a1628]">{t.guest}</td>
                                <td className="px-5 py-4 font-bold text-[#0a1628]">{t.amount}</td>
                                <td className="px-5 py-4 text-neutral-500 text-xs">{t.method}</td>
                                <td className="px-5 py-4 text-neutral-500 whitespace-nowrap">{t.date}</td>
                                <td className="px-5 py-4">
                                    <span className={`px-3 py-1 text-xs font-bold rounded-full ${txnColors[t.status]}`}>{t.status}</span>
                                </td>
                                <td className="px-5 py-4">
                                    <button className="text-xs text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">Receipt</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
