import { Heading, Text } from "@medusajs/ui"
import { Github, Facebook, X, Instagram } from "@medusajs/icons"

const SocialFeed = () => {
    return (
        <div className="py-32 bg-white relative overflow-hidden">
            <div className="content-container">
                <div className="flex flex-col small:flex-row items-end justify-between mb-20 gap-y-8">
                    <div className="flex flex-col gap-y-4 max-w-[600px]">
                        <div className="flex items-center gap-x-3">
                            <div className="h-[1px] w-8 bg-gold-500" />
                            <span className="text-gold-500 uppercase tracking-widest text-[10px] font-bold">Connect With Us</span>
                        </div>
                        <Heading level="h2" className="text-4xl small:text-6xl font-serif text-obsidian-900">
                            Follow the <span className="italic text-gold-600">Journey.</span>
                        </Heading>
                        <Text className="text-ui-fg-subtle text-lg font-sans italic">
                            Join <span className="text-gold-500 font-bold not-italic">@TaskStoreIndia</span> for a daily dose of premium living and artisan craftsmanship.
                        </Text>
                    </div>
                </div>

                {/* Mosaic Feed Grid */}
                <div className="grid grid-cols-2 medium:grid-cols-4 gap-4 small:gap-8 items-stretch">
                    <div className="aspect-[4/5] bg-ui-bg-subtle relative overflow-hidden group border border-gold-100 p-2">
                         <div className="h-full w-full bg-[#FDFCF0]/50 flex items-center justify-center">
                            <span className="text-gold-500/20"><Instagram /></span>
                         </div>
                    </div>
                    <div className="aspect-[4/5] bg-ui-bg-subtle relative overflow-hidden group border border-gold-100 p-2 medium:mt-12">
                         <div className="h-full w-full bg-[#FDFCF0]/50 flex items-center justify-center">
                            <span className="text-gold-500/20"><Instagram /></span>
                         </div>
                    </div>
                    <div className="aspect-[4/5] bg-ui-bg-subtle relative overflow-hidden group border border-gold-100 p-2">
                         <div className="h-full w-full bg-[#FDFCF0]/50 flex items-center justify-center">
                            <span className="text-gold-500/20"><Instagram /></span>
                         </div>
                    </div>
                    <div className="aspect-[4/5] bg-ui-bg-subtle relative overflow-hidden group border border-gold-100 p-2 medium:mt-12">
                         <div className="h-full w-full bg-[#FDFCF0]/50 flex items-center justify-center">
                            <span className="text-gold-500/20"><Instagram /></span>
                         </div>
                    </div>
                </div>

                <div className="mt-20 flex justify-center">
                    <div className="flex items-center gap-x-12 grayscale opacity-40">
                         <Github size={24} />
                         <Facebook size={24} />
                         <X size={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialFeed
