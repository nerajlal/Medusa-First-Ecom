import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us — Metora Luxury Hotel",
    description: "Discover the story behind Metora — a sanctuary where thoughtful design meets genuine hospitality.",
}

export default function AboutPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Header */}
            <div className="bg-[#0a1628] pt-32 pb-20 text-center">
                <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-4">Our Story</p>
                <h1 className="font-playfair text-5xl small:text-6xl font-bold text-white mb-6">About Metora</h1>
                <div className="h-px w-20 bg-[#c9a96e] mx-auto" />
            </div>

            {/* Content */}
            <div className="content-container py-20 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 small:grid-cols-2 gap-16 items-center mb-20">
                    <div
                        className="aspect-[4/3] bg-cover bg-center"
                        style={{ backgroundImage: "url('/images/homepage/metora_hero.png')" }}
                    />
                    <div className="flex flex-col gap-y-6">
                        <p className="text-[#c9a96e] text-xs uppercase tracking-[0.4em] font-medium">Our Philosophy</p>
                        <h2 className="font-playfair text-3xl font-bold text-[#0a1628]">Where Every Detail Matters</h2>
                        <p className="text-neutral-500 leading-relaxed">
                            Metora was born from a singular vision — to create a place where luxury is not just an amenity,
                            but a feeling. Since our founding, we have welcomed guests from across the world who seek not just
                            accommodation, but an experience that lingers long after checkout.
                        </p>
                        <p className="text-neutral-500 leading-relaxed">
                            Every corner of Metora is thoughtfully designed, every service meticulously crafted, and every
                            interaction guided by genuine warmth. We believe that true hospitality is measured not in stars,
                            but in moments that become memories.
                        </p>
                    </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-1 small:grid-cols-3 gap-10 border-t border-neutral-100 pt-20">
                    {[
                        { title: "Our Heritage", body: "Rooted in the rich traditions of Indian hospitality, we blend time-honoured warmth with contemporary sophistication." },
                        { title: "Our Mission", body: "To deliver an unparalleled stay experience — one where your comfort is our constant pursuit and your delight, our greatest reward." },
                        { title: "Our Promise", body: "Every guest deserves extraordinary. From your first inquiry to your fond farewell, Metora is committed to exceeding expectations." },
                    ].map((v) => (
                        <div key={v.title} className="flex flex-col gap-y-4">
                            <div className="h-px w-12 bg-[#c9a96e]" />
                            <h3 className="font-playfair text-xl font-bold text-[#0a1628]">{v.title}</h3>
                            <p className="text-neutral-500 text-sm leading-relaxed">{v.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
