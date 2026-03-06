import type { Metadata } from "next"
import AdminSidebar from "./components/sidebar"

export const metadata: Metadata = {
    title: "Metora Admin Panel",
    description: "Hotel management dashboard for Metora Luxury Hotel",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-[#f5f5f0] min-h-screen">
            <AdminSidebar />
            <div className="ml-64 min-h-screen">
                {children}
            </div>
        </div>
    )
}
