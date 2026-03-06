import { Heading, Text } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Task Store",
    description: "Review the terms and conditions for using the Task Store storefront.",
}

export default function TermsOfServicePage() {
    return (
        <div className="py-24 bg-white">
            <div className="content-container flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-4 max-w-[800px]">
                    <span className="text-ui-fg-subtle uppercase tracking-[0.4em] text-sm font-semibold">
                        Legal
                    </span>
                    <Heading level="h1" className="text-4xl small:text-6xl font-bold text-ui-fg-base uppercase tracking-tight">
                        Terms of <br /> Service.
                    </Heading>
                </div>

                <div className="flex flex-col gap-y-8 max-w-[800px] text-ui-fg-subtle leading-relaxed">
                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">1. Acceptance of Terms</Heading>
                        <Text>
                            By accessing and using Task Store, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">2. Use License</Heading>
                        <Text>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Task Store's website for personal, non-commercial transitory viewing only.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">3. Disclaimer</Heading>
                        <Text>
                            The materials on Task Store's website are provided on an 'as is' basis. Task Store makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </Text>
                    </section>

                    <section className="flex flex-col gap-y-4">
                        <Heading level="h2" className="text-xl font-bold text-ui-fg-base uppercase tracking-widest">4. Limitations</Heading>
                        <Text>
                            In no event shall Task Store or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Task Store's website.
                        </Text>
                    </section>
                </div>
            </div>
        </div>
    )
}
