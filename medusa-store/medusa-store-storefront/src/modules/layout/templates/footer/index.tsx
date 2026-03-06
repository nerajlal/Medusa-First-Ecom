import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  return (
    <footer className="bg-[#0a1628] text-white">
      {/* Main Footer Content */}
      <div className="content-container py-20">
        <div className="grid grid-cols-1 small:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="small:col-span-1 flex flex-col gap-y-6">
            <div>
              <p className="font-playfair text-3xl font-bold tracking-[0.2em] text-white uppercase">
                Metora
              </p>
              <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase font-medium mt-1">
                Luxury Stay
              </p>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Where luxury meets comfort. An unparalleled hospitality experience crafted for the most discerning guests.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-2">
              {["F", "I", "X"].map((s, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/40 hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all text-xs font-bold"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Explore Links */}
          <div className="flex flex-col gap-y-5">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c9a96e]">Explore</h3>
            <ul className="flex flex-col gap-y-3">
              {[
                { label: "All Rooms", href: "/rooms" },
                { label: "Amenities", href: "/#amenities" },
                { label: "Dining & Bar", href: "/#amenities" },
                { label: "Spa & Wellness", href: "/#amenities" },
              ].map((link) => (
                <li key={link.label}>
                  <LocalizedClientLink href={link.href} className="text-white/50 hover:text-[#c9a96e] text-sm transition-colors">
                    {link.label}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Hotel Column */}
          <div className="flex flex-col gap-y-5">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c9a96e]">The Hotel</h3>
            <ul className="flex flex-col gap-y-3">
              {[
                { label: "About Metora", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" },
              ].map((link) => (
                <li key={link.label}>
                  <LocalizedClientLink href={link.href} className="text-white/50 hover:text-[#c9a96e] text-sm transition-colors">
                    {link.label}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col gap-y-5">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-[#c9a96e]">Get In Touch</h3>
            <div className="flex flex-col gap-y-3 text-sm text-white/50">
              <p>📍 123 Luxury Lane, Kochi, Kerala 682001</p>
              <p>📞 +91 484 000 0000</p>
              <p>✉️ reservations@metora.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="content-container py-6 flex flex-col small:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs tracking-widest uppercase">
            © {new Date().getFullYear()} Metora Luxury Hotel. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Crafted by{" "}
            <a href="https://metora.in" target="_blank" className="text-[#c9a96e]/60 hover:text-[#c9a96e]">
              Metora Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
