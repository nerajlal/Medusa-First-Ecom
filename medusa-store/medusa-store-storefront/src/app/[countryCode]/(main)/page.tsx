import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import NewArrivals from "@modules/home/components/new-arrivals"
import ValuePropositions from "@modules/home/components/value-propositions"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Medusa Store | Premium Ecommerce",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!region) {
    return null
  }

  return (
    <>
      <Hero />

      {/* New Arrivals Section - Always tries to show products */}
      <NewArrivals region={region} />

      {/* Value Propositions - Adds professional trust factors */}
      <ValuePropositions />

      {/* Featured Products / Collections Section */}
      {collections && collections.length > 0 && (
        <div className="py-12 bg-white">
          <div className="content-container mb-8">
            <hr className="border-ui-border-base mb-12" />
            <h2 className="text-2xl font-semibold uppercase tracking-tight text-ui-fg-base">
              Browser by Collection
            </h2>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}
    </>
  )
}
