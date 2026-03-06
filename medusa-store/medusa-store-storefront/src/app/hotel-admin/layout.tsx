import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import AdminSidebar from "./components/sidebar"
import "../globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["400", "700", "900"] })

export const metadata: Metadata = {
    title: "Metora Admin Panel",
    description: "Hotel management dashboard for Metora Luxury Hotel",
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
            <body className="font-sans antialiased bg-[#f5f5f0]">
                <AdminSidebar />
                <div className="ml-64 min-h-screen">
                    {children}
                </div>
            </body>
        </html>
    )
}
