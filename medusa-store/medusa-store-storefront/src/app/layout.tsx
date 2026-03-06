import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700", "900"],
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
  title: "Metora — Where Luxury Meets Comfort",
  description: "Experience unparalleled luxury at Metora. Book your premium stay today.",
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased text-ui-fg-base">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
