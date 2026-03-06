import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Task Store",
    description: "Read the Task Store privacy policy to understand how we handle your data.",
}

export default function PrivacyPolicyPage() {
    return (
        <div className="py-24 bg-white">
            <div className="content-container flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-4 max-w-[800px]">
                    <span className="text-ui-fg-subtle uppercase tracking-[0.4em] text-sm font-semibold">
                        Legal
                    </span>
                    <Heading level="h1" className="text-4xl small:text-6xl font-bold text-ui-fg-base uppercase tracking-tight">
                        Privacy <br /> Policy.
                    </Heading>
                </div>

                <div className="flex flex-col gap-y-8 max-w-[800px] text-ui-fg-subtle leading-relaxed">
                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">1. Information We Collect</Heading>
                        <Text>
                            At Task Store, we respect your privacy and are committed to protecting it. We collect information that you provide directly to us, such as when you create an account, make a purchase, or contact our support team. This may include your name, email address, shipping address, and payment information.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">2. How We Use Your Data</Heading>
                        <Text>
                            We use the information we collect to process your orders, communicate with you about your account, and improve our services. We do not sell or rent your personal information to third parties.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">3. Data Security</Heading>
                        <Text>
                            We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">4. Your Rights</Heading>
                        <Text>
                            You have the right to access, update, or delete the personal information we have on you. If you wish to exercise these rights, please contact us at support@taskstore.in.
                        </Text>
                    </section>
                </div>
            </div>
        </div>
    )
}
