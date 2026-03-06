"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
    { label: "Dashboard", href: "/hotel-admin", icon: "📊" },
    { label: "Bookings", href: "/hotel-admin/bookings", icon: "📋" },
    { label: "Rooms", href: "/hotel-admin/rooms", icon: "🛏️" },
    { label: "Guests", href: "/hotel-admin/guests", icon: "👤" },
    { label: "Payments", href: "/hotel-admin/payments", icon: "💳" },
    { label: "Content", href: "/hotel-admin/content", icon: "🖼️" },
    { label: "Settings", href: "/hotel-admin/settings", icon: "⚙️" },
]

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 bg-[#0a1628] text-white flex flex-col min-h-screen fixed left-0 top-0 z-40">
            {/* Logo */}
            <div className="p-8 border-b border-white/10">
                <p className="font-playfair text-2xl font-bold tracking-[0.2em] text-white uppercase">Metora</p>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-medium mt-0.5">Admin Panel</p>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-6 px-4">
                <ul className="flex flex-col gap-y-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/hotel-admin" && pathname.startsWith(item.href))
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-x-3 px-4 py-3 text-sm font-medium transition-all ${isActive
                                            ? "bg-[#c9a96e]/15 text-[#c9a96e] border-l-2 border-[#c9a96e]"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                        }`}
                                >
                                    <span className="text-base">{item.icon}</span>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-white/10">
                <div className="flex items-center gap-x-3">
                    <div className="w-8 h-8 bg-[#c9a96e] flex items-center justify-center text-[#0a1628] font-bold text-sm">
                        A
                    </div>
                    <div>
                        <p className="text-white text-xs font-bold">Admin</p>
                        <p className="text-white/40 text-[10px]">admin@metora.in</p>
                    </div>
                </div>
                <Link href="/" className="block mt-4 text-[10px] uppercase tracking-widest text-white/30 hover:text-[#c9a96e] transition-colors">
                    ← View Hotel Site
                </Link>
            </div>
        </aside>
    )
}
