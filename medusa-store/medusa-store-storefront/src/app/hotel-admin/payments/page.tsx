import type { Metadata } from "next"

export const metadata: Metadata = { title: "Payments — Metora Admin" }

const transactions = [
    { id: "TXN-5041", booking: "BK-1024", guest: "Priya Sharma", amount: "₹1,10,000", method: "Stripe · Card", date: "08 Mar 2026", status: "Paid" },
    { id: "TXN-5040", booking: "BK-1023", guest: "Arjun Nair", amount: "₹56,000", method: "Razorpay · UPI", date: "07 Mar 2026", status: "Paid" },
    { id: "TXN-5039", booking: "BK-1022", guest: "Sunita Mehta", amount: "₹30,000", method: "Stripe · Card", date: "06 Mar 2026", status: "Paid" },
    { id: "TXN-5038", booking: "BK-1021", guest: "Rahul Verma", amount: "₹17,000", method: "Razorpay · Net Banking", date: "05 Mar 2026", status: "Paid" },
    { id: "TXN-5037", booking: "BK-1020", guest: "Anjali Krishnan", amount: "₹17,000", method: "Stripe · Card", date: "04 Mar 2026", status: "Refunded" },
    { id: "TXN-5036", booking: "BK-1018", guest: "Meera Pillai", amount: "₹15,000", method: "Razorpay · UPI", date: "03 Mar 2026", status: "Pending" },
    { id: "TXN-5035", booking: "BK-1017", guest: "Vikram Singh", amount: "₹84,000", method: "Stripe · Card", date: "01 Mar 2026", status: "Paid" },
]

const txnStyle: Record<string, string> = {
    "Paid": "text-emerald-700 bg-emerald-50",
    "Refunded": "text-amber-700 bg-amber-50",
    "Pending": "text-blue-600 bg-blue-50",
    "Failed": "text-red-500 bg-red-50",
}

export default function PaymentsPage() {
    return (
        <div className="p-10">
            <div className="mb-10 border-b border-neutral-200 pb-8 flex items-end justify-between">
                <div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#c9a96e] font-semibold mb-2">Finance</p>
                    <h1 className="font-playfair text-3xl font-bold text-[#0a1628]">Payments</h1>
                    <p className="text-neutral-400 text-sm mt-1">Transaction history and revenue tracking.</p>
                </div>
                <button className="border border-neutral-200 text-neutral-500 px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">
                    Export CSV
                </button>
            </div>

            {/* Summary */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
                {[
                    { label: "Total Revenue", value: "₹12,45,000", sub: "March 2026" },
                    { label: "Successful", value: "134", sub: "Transactions" },
                    { label: "Pending", value: "8", sub: "Awaiting payment" },
                    { label: "Refunds", value: "₹34,000", sub: "6 transactions" },
                ].map((s) => (
                    <div key={s.label} className="bg-white border border-neutral-150 p-6">
                        <p className="font-playfair text-2xl font-bold text-[#0a1628]">{s.value}</p>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 mt-2 font-semibold">{s.label}</p>
                        <p className="text-xs text-[#c9a96e] mt-1">{s.sub}</p>
                    </div>
                ))}
            </div>

            {/* Filters */}
            <div className="bg-white border border-neutral-150 p-4 mb-4 flex gap-3 flex-wrap">
                <input type="text" placeholder="Search by transaction ID, guest or booking..." className="flex-1 min-w-[220px] border border-neutral-200 px-4 py-2 text-sm outline-none focus:border-[#c9a96e] bg-neutral-50/50" />
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
            <div className="bg-white border border-neutral-150 overflow-x-auto">
                <table className="w-full text-sm">
                    <thead className="border-b border-neutral-100 bg-neutral-50/40">
                        <tr>
                            {["Transaction", "Booking", "Guest", "Amount", "Method", "Date", "Status", ""].map((h) => (
                                <th key={h} className="text-left px-5 py-3 text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-400 whitespace-nowrap">{h}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((t) => (
                            <tr key={t.id} className="border-b border-neutral-50 hover:bg-neutral-50/50 transition-colors">
                                <td className="px-5 py-4 font-mono text-xs text-[#c9a96e] font-semibold">{t.id}</td>
                                <td className="px-5 py-4 font-mono text-xs text-neutral-400">{t.booking}</td>
                                <td className="px-5 py-4 font-medium text-[#0a1628]">{t.guest}</td>
                                <td className="px-5 py-4 font-semibold text-[#0a1628]">{t.amount}</td>
                                <td className="px-5 py-4 text-neutral-400 text-xs">{t.method}</td>
                                <td className="px-5 py-4 text-neutral-400 text-xs whitespace-nowrap">{t.date}</td>
                                <td className="px-5 py-4">
                                    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 ${txnStyle[t.status]}`}>{t.status}</span>
                                </td>
                                <td className="px-5 py-4">
                                    <button className="text-[11px] text-[#0a1628] border border-neutral-200 px-3 py-1 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors">Receipt</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
