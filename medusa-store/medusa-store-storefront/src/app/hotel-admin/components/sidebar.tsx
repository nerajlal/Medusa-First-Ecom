"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faChartLine,
    faCalendarCheck,
    faBed,
    faUsers,
    faCreditCard,
    faImage,
    faGear,
    faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons"

const navItems = [
    { label: "Dashboard", href: "/hotel-admin", icon: faChartLine },
    { label: "Bookings", href: "/hotel-admin/bookings", icon: faCalendarCheck },
    { label: "Rooms", href: "/hotel-admin/rooms", icon: faBed },
    { label: "Guests", href: "/hotel-admin/guests", icon: faUsers },
    { label: "Payments", href: "/hotel-admin/payments", icon: faCreditCard },
    { label: "Content", href: "/hotel-admin/content", icon: faImage },
    { label: "Settings", href: "/hotel-admin/settings", icon: faGear },
]

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-60 bg-[#0a1628] text-white flex flex-col min-h-screen fixed left-0 top-0 z-40 border-r border-white/5">
            {/* Brand */}
            <div className="px-7 py-7 border-b border-white/8">
                <p className="font-playfair text-xl font-bold tracking-[0.25em] text-white uppercase">Metora</p>
                <p className="text-[#c9a96e] text-[9px] tracking-[0.5em] uppercase font-medium mt-1">Administration</p>
            </div>

            {/* Section label */}
            <div className="px-7 pt-7 pb-2">
                <p className="text-[9px] uppercase tracking-[0.4em] text-white/25 font-semibold">Main Menu</p>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-3 pb-6">
                <ul className="flex flex-col gap-y-0.5">
                    {navItems.map((item) => {
                        const isActive =
                            item.href === "/hotel-admin"
                                ? pathname === "/hotel-admin"
                                : pathname.startsWith(item.href)
                        return (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className={`flex items-center gap-x-3 px-4 py-2.5 text-[13px] font-medium tracking-wide transition-all ${isActive
                                            ? "bg-[#c9a96e]/10 text-[#c9a96e] border-l-2 border-[#c9a96e]"
                                            : "text-white/50 hover:text-white/80 hover:bg-white/4 border-l-2 border-transparent"
                                        }`}
                                >
                                    <FontAwesomeIcon
                                        icon={item.icon}
                                        className={`w-3.5 flex-shrink-0 ${isActive ? "text-[#c9a96e]" : "text-white/30"}`}
                                    />
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>

            {/* Footer */}
            <div className="border-t border-white/8 px-7 py-6 flex flex-col gap-y-4">
                <div className="flex items-center gap-x-3">
                    <div className="w-7 h-7 bg-[#c9a96e]/10 border border-[#c9a96e]/30 flex items-center justify-center text-[#c9a96e] text-xs font-bold">
                        A
                    </div>
                    <div>
                        <p className="text-white text-xs font-semibold">Admin</p>
                        <p className="text-white/30 text-[10px] tracking-wide">admin@metora.in</p>
                    </div>
                </div>
                <Link href="/dk" className="flex items-center gap-x-2 text-[10px] uppercase tracking-[0.3em] text-white/25 hover:text-[#c9a96e] transition-colors">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-2.5" />
                    View Hotel Site
                </Link>
            </div>
        </aside>
    )
}
