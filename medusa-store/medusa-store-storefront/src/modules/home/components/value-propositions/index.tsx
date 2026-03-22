"use client"

import { Heading, Text } from "@medusajs/ui"
import { TruckFast, Star, ShieldCheck, Heart } from "@medusajs/icons"

const ValuePropositions = () => {
    const values = [
        {
            icon: <TruckFast />,
            title: "Global Shipping",
            description: "Fast and reliable shipping to over 50 countries worldwide.",
        },
        {
            icon: <ShieldCheck />,
            title: "Secure Payments",
            description: "Your transactions are protected by industry-leading security.",
        },
        {
            icon: <Star />,
            title: "Premium Quality",
            description: "Every product is hand-picked for its exceptional craftmanship.",
        },
        {
            icon: <Heart />,
            title: "Customer First",
            description: "Our support team is here for you 24/7, every step of the way.",
        },
    ]

    return (
        <div className="bg-ui-bg-subtle py-24">
            <div className="content-container">
                <div className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-4 gap-12">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col gap-y-4 items-start border-l border-gold-200 pl-8 transition-all hover:border-gold-500 group">
                            <span className="text-gold-500 group-hover:scale-110 transition-transform">{value.icon}</span>
                            <div>
                                <Heading level="h3" className="text-lg font-serif text-obsidian-900 tracking-wide mb-2">
                                    {value.title}
                                </Heading>
                                <Text className="text-sm text-ui-fg-subtle font-sans leading-relaxed">
                                    {value.description}
                                </Text>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ValuePropositions
