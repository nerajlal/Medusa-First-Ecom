import { Heading, Text } from "@medusajs/ui"
import { Github, Facebook, X } from "@medusajs/icons"

const SocialFeed = () => {
    return (
        <div className="py-24 bg-ui-bg-subtle">
            <div className="content-container">
                <div className="flex flex-col items-center text-center mb-16 gap-y-4">
                    <Heading level="h2" className="text-3xl font-bold uppercase tracking-widest text-ui-fg-base">
                        Follow the Journey
                    </Heading>
                    <Text className="text-ui-fg-subtle text-lg">
                        <span className="text-gold-500 font-bold">@TaskStoreIndia</span> — Follow us for a daily dose of premium living.
                    </Text>
                </div>

                <div className="grid grid-cols-2 medium:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="aspect-square bg-white border border-ui-border-base flex items-center justify-center relative group overflow-hidden">
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <span className="text-white font-bold tracking-widest uppercase text-xs">View on Instagram</span>
                            </div>
                            <div className="text-ui-fg-muted font-bold italic tracking-tighter text-2xl">TASK.</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SocialFeed
