import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us — Metora Luxury Hotel",
    description: "Get in touch with Metora for reservations, inquiries, and personalised assistance.",
}

export default function ContactPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-[#0a1628] pt-32 pb-20 text-center">
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-4">We Are Here For You</p>
                <h1 className="font-playfair text-5xl small:text-6xl font-bold text-white mb-6">Contact Us</h1>
                <div className="h-px w-20 bg-[#c9a96e] mx-auto" />
            </div>

            {/* Content */}
            <div className="content-container py-20">
                <div className="grid grid-cols-1 small:grid-cols-[1fr_2fr] gap-16">
                    {/* Hotel Info */}
                    <div className="flex flex-col gap-y-10">
                        <div>
                            <p className="font-playfair text-2xl font-bold text-[#0a1628] mb-6">Get In Touch</p>
                            <div className="flex flex-col gap-y-5 text-neutral-500 text-sm">
                                <div>
                                    <p className="font-bold text-[#0a1628] text-xs uppercase tracking-widest mb-1">Address</p>
                                    <p>123 Luxury Lane, Kochi, Kerala 682001, India</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[#0a1628] text-xs uppercase tracking-widest mb-1">Reservations</p>
                                    <p>+91 484 000 0000</p>
                                    <p>reservations@metora.in</p>
                                </div>
                                <div>
                                    <p className="font-bold text-[#0a1628] text-xs uppercase tracking-widest mb-1">Check-In / Out</p>
                                    <p>Check-In: 2:00 PM</p>
                                    <p>Check-Out: 11:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Form */}
                    <div className="border border-neutral-100 p-10">
                        <h2 className="font-playfair text-2xl font-bold text-[#0a1628] mb-8">Send an Inquiry</h2>
                        <form className="flex flex-col gap-y-5">
                            <div className="grid grid-cols-1 small:grid-cols-2 gap-5">
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-[#0a1628]">First Name *</label>
                                    <input type="text" required className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#c9a96e] transition-colors" placeholder="Arjun" />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label className="text-xs uppercase tracking-widest font-bold text-[#0a1628]">Last Name *</label>
                                    <input type="text" required className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#c9a96e] transition-colors" placeholder="Nair" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-[#0a1628]">Email *</label>
                                <input type="email" required className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#c9a96e] transition-colors" placeholder="arjun@example.com" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-[#0a1628]">Subject</label>
                                <select className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#c9a96e] transition-colors bg-white">
                                    <option>Room Reservation</option>
                                    <option>Special Occasion</option>
                                    <option>Corporate Booking</option>
                                    <option>General Inquiry</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label className="text-xs uppercase tracking-widest font-bold text-[#0a1628]">Message</label>
                                <textarea rows={5} className="border border-neutral-200 px-4 py-3 text-sm outline-none focus:border-[#c9a96e] transition-colors resize-none" placeholder="Tell us how we can help you..." />
                            </div>
                            <button type="submit" className="h-13 px-10 py-4 bg-[#0a1628] text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#c9a96e] hover:text-[#0a1628] transition-all self-start">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
