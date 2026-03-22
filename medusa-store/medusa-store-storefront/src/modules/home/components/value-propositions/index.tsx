import { Heading, Text } from "@medusajs/ui"
import { TruckFast, Key, ArrowPath } from "@medusajs/icons"

const propositions = [
    {
        icon: <TruckFast className="text-gold-500 w-8 h-8" />,
        title: "Global Logistic Elite",
        description: "Experience white-glove delivery, from the dunes of Dubai to the heart of Delhi. Insured, tracked, and handled with reverence."
    },
    {
        icon: <Key className="text-gold-500 w-8 h-8" />,
        title: "Artisan Provenance",
        description: "Every piece comes with a digital certificate of authenticity, detailing the heritage and the hands that crafted it."
    },
    {
        icon: <ArrowPath className="text-gold-500 w-8 h-8" />,
        title: "Bespoke Exchange",
        description: "Our commitment to your satisfaction is as absolute as our commitment to quality. Hassle-free curation management."
    }
]

const ValuePropositions = () => {
    return (
        <div className="py-24 bg-sand-50 border-y border-gold-500/10">
            <div className="content-container">
                <div className="grid grid-cols-1 small:grid-cols-3 divide-y small:divide-y-0 small:divide-x divide-gold-500/10">
                    {propositions.map((prop, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-12 group transition-all duration-700 hover:bg-white/50">
                            <div className="mb-8 relative">
                                <div className="absolute inset-0 bg-gold-500/20 blur-xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700" />
                                <div className="relative z-10 p-4 border border-gold-500/20 rounded-full group-hover:border-gold-500 transition-colors">
                                    {prop.icon}
                                </div>
                            </div>
                            <Heading level="h3" className="text-2xl font-serif text-obsidian-900 mb-4 tracking-tight italic">
                                {prop.title}
                            </Heading>
                            <Text className="text-obsidian-900/50 font-sans leading-relaxed text-sm max-w-[300px]">
                                {prop.description}
                            </Text>
                            {/* Decorative Line */}
                            <div className="mt-8 h-px w-8 bg-gold-500/20 group-hover:w-24 transition-all duration-700" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ValuePropositions
