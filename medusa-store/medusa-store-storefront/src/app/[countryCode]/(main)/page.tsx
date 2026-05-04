import { Metadata } from "next"
import { StoreHeader } from "@modules/raleys/components/StoreHeader"
import { ProductCard } from "@modules/raleys/components/ProductCard"
import { listProducts } from "@lib/data/products"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export const metadata: Metadata = {
  title: "Raley's Market | Fresh Groceries & Same-day Delivery",
  description: "Shop Raley's for fresh produce, quality meats, and everyday essentials. Fast delivery and pickup available.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const categories = await listCategories()

  const {
    response: { products },
  } = await listProducts({
    countryCode,
    queryParams: { limit: 50 },
  })

  if (!region) {
    return null
  }

  return (
    <div className="raleys-font">
      {/* Hero Section */}
      <div className="w-full bg-[#E8F5E9] py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-1 rounded-full shadow-sm mb-6">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span className="text-sm font-bold text-gray-800 uppercase tracking-wider">1 HR Delivery</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] mb-6">
              Fresh from <br />
              <span className="text-[#1a4d2e] italic font-serif">Raley's</span> to you.
            </h1>
            <p className="text-xl text-gray-700 max-w-lg mb-8 leading-relaxed">
              Order your favorite groceries online and get them delivered to your door in as little as one hour.
            </p>
            <LocalizedClientLink href="/store">
              <button className="bg-[#1a4d2e] text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-[#1a4d2e]/90 hover:-translate-y-1 transition-all active:scale-95">
                Start Shopping
              </button>
            </LocalizedClientLink>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/raleys_hero.png"
                alt="Fresh Groceries"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-green-200/50 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-green-100/50 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Refined Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <nav className="mb-12">
              <ul className="space-y-1">
                <li>
                  <LocalizedClientLink href="/store" className="flex items-center gap-3 p-3 rounded-xl bg-[#e8f5e9] text-[#1a4d2e] font-bold cursor-pointer transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                    Shop
                  </LocalizedClientLink>
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl text-gray-600 font-bold hover:bg-gray-50 cursor-pointer transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M3 21v-5h5" /></svg>
                  Buy it again
                </li>
                <li className="flex items-center gap-3 p-3 rounded-xl text-gray-600 font-bold hover:bg-gray-50 cursor-pointer transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                  Lists
                </li>
              </ul>
            </nav>

            <h2 className="font-black text-xs mb-6 text-gray-400 uppercase tracking-[0.2em]">
              Browse Aisles
            </h2>
            <ul className="space-y-1">
              {categories?.map(cat => (
                <li key={cat.id}>
                  <LocalizedClientLink
                    href={`/categories/${cat.handle}`}
                    className="block p-3 rounded-xl hover:bg-[#e8f5e9]/50 text-gray-800 hover:text-[#1a4d2e] cursor-pointer font-bold transition-all"
                  >
                    {cat.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Top Sellers</h2>
            <LocalizedClientLink href="/store" className="text-[#1a4d2e] font-bold hover:underline">
              View all
            </LocalizedClientLink>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
            {products.map(product => (
              <ProductCard key={product.id} product={product} region={region} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
