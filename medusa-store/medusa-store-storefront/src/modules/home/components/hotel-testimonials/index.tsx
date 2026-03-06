const testimonials = [
    {
        name: "Priya Sharma",
        location: "Mumbai",
        text: "An absolutely breathtaking experience. The staff anticipated every need before we even had to ask. We'll be back every anniversary.",
        rating: 5,
    },
    {
        name: "Arjun Nair",
        location: "Bangalore",
        text: "The suite was beyond expectations. Woke up to an incredible view every morning. The spa treatments were world-class.",
        rating: 5,
    },
    {
        name: "Sunita Mehta",
        location: "Delhi",
        text: "Metora redefined luxury for us. The attention to detail in every corner of the property is remarkable. Truly 5-star service.",
        rating: 5,
    },
]

export default function Testimonials() {
    return (
        <section className="py-24 small:py-36 bg-neutral-50">
            <div className="content-container">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-20">
                    <p className="text-[#c9a96e] text-xs uppercase tracking-[0.5em] font-medium mb-4">Guest Stories</p>
                    <h2 className="font-playfair text-4xl small:text-5xl font-bold text-[#0a1628] mb-6">
                        What Our Guests Say
                    </h2>
                    <div className="h-px w-20 bg-[#c9a96e]" />
                </div>

                {/* Testimonials */}
                <div className="grid grid-cols-1 small:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.name} className="bg-white p-10 border border-neutral-100 flex flex-col gap-y-6">
                            {/* Stars */}
                            <div className="flex gap-x-1 text-[#c9a96e] text-sm">
                                {"★".repeat(t.rating)}
                            </div>
                            {/* Quote */}
                            <p className="text-neutral-600 text-base leading-relaxed italic font-light">
                                "{t.text}"
                            </p>
                            {/* Author */}
                            <div className="border-t border-neutral-100 pt-6">
                                <p className="font-bold text-[#0a1628] text-sm uppercase tracking-wider">{t.name}</p>
                                <p className="text-neutral-400 text-xs mt-1 tracking-widest uppercase">{t.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
