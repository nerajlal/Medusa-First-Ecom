import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import { Playfair_Display, Outfit } from "next/font/google"
import "styles/globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={`${playfair.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased text-ui-fg-base bg-white selection:bg-gold-200">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
