import { Heading, Text, Button } from "@medusajs/ui"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us | Task Store",
    description: "Get in touch with the Task Store support team.",
}

export default function ContactPage() {
    return (
        <div className="py-24 bg-white">
            <div className="content-container flex flex-col gap-y-12">
                <div className="flex flex-col gap-y-4 max-w-[800px]">
                    <span className="text-ui-fg-subtle uppercase tracking-[0.4em] text-sm font-semibold">
                        Support
                    </span>
                    <Heading level="h1" className="text-4xl small:text-6xl font-bold text-ui-fg-base uppercase tracking-tight">
                        Connect <br /> with Us.
                    </Heading>
                </div>

                <div className="grid grid-cols-1 medium:grid-cols-2 gap-24">
                    <div className="flex flex-col gap-y-12">
                        <div className="flex flex-col gap-y-4">
                            <Heading level="h2" className="text-2xl font-bold uppercase tracking-widest">Customer Care</Heading>
                            <Text className="text-ui-fg-subtle">
                                Our team is available Monday through Friday, 9:00 AM — 6:00 PM IST.
                            </Text>
                            <div className="flex flex-col gap-y-2 mt-4">
                                <Text className="font-bold">Email:</Text>
                                <a href="mailto:support@taskstore.in" className="text-ui-fg-interactive hover:underline">support@taskstore.in</a>
                            </div>
                            <div className="flex flex-col gap-y-2 mt-4">
                                <Text className="font-bold">Phone:</Text>
                                <Text>+91 (800) 123-4567</Text>
                            </div>
                        </div>

                        <div className="flex flex-col gap-y-4">
                            <Heading level="h2" className="text-2xl font-bold uppercase tracking-widest">Headquarters</Heading>
                            <Text className="text-ui-fg-subtle">
                                Task Store India Pvt Ltd.<br />
                                MG Road, Bangalore, Karnataka<br />
                                560001, India
                            </Text>
                        </div>
                    </div>

                    <div className="bg-ui-bg-subtle p-8 small:p-12 border border-ui-border-base">
                        <form className="flex flex-col gap-y-6">
                            <div className="grid grid-cols-1 small:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="first_name" className="text-xs uppercase font-bold tracking-widest">First Name</label>
                                    <input type="text" id="first_name" className="bg-white border border-ui-border-base px-4 py-3 focus:outline-none focus:border-ui-fg-base transition-colors" />
                                </div>
                                <div className="flex flex-col gap-y-2">
                                    <label htmlFor="last_name" className="text-xs uppercase font-bold tracking-widest">Last Name</label>
                                    <input type="text" id="last_name" className="bg-white border border-ui-border-base px-4 py-3 focus:outline-none focus:border-ui-fg-base transition-colors" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="email" className="text-xs uppercase font-bold tracking-widest">Email Address</label>
                                <input type="email" id="email" className="bg-white border border-ui-border-base px-4 py-3 focus:outline-none focus:border-ui-fg-base transition-colors" />
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <label htmlFor="message" className="text-xs uppercase font-bold tracking-widest">Message</label>
                                <textarea id="message" rows={6} className="bg-white border border-ui-border-base px-4 py-3 focus:outline-none focus:border-ui-fg-base transition-colors resize-none"></textarea>
                            </div>
                            <Button variant="primary" size="large" className="rounded-none h-14 uppercase tracking-widest font-bold text-sm mt-4">
                                Send Message
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
