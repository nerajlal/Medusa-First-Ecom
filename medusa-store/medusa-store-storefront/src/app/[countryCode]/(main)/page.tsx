import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import NewArrivals from "@modules/home/components/new-arrivals"
import ValuePropositions from "@modules/home/components/value-propositions"
import CategorySpotlight from "@modules/home/components/category-spotlight"
import PremiumBanner from "@modules/home/components/premium-banner"
import SocialFeed from "@modules/home/components/social-feed"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Task Store | India's Premium Storefront",
  description:
    "Explore a curated selection of premium products at Task Store, India's leading destination for modern lifestyle essentials.",
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

      {/* Visual Hook: Category Spotlight */}
      <CategorySpotlight />

      {/* Product Discovery: New Arrivals */}
      <NewArrivals region={region} />

      {/* Brand Story / Promotion Banner */}
      <PremiumBanner />

      {/* Trust & Propositions */}
      <ValuePropositions />

      {/* Featured Collections Feed */}
      {collections && collections.length > 0 && (
        <div className="py-12 bg-white">
          <div className="content-container mb-8">
            <hr className="border-ui-border-base mb-12" />
            <h2 className="text-2xl font-semibold uppercase tracking-tight text-ui-fg-base text-center">
              Browse Collections
            </h2>
          </div>
          <ul className="flex flex-col gap-x-6">
            <FeaturedProducts collections={collections} region={region} />
          </ul>
        </div>
      )}

      {/* Community / Social Hook */}
      <SocialFeed />
    </>
  )
}
