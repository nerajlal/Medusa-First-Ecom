import { Suspense } from "react"
import { listCategories } from "@lib/data/categories"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function CollectionTemplate({
  sortBy,
  collection,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  collection: HttpTypes.StoreCollection
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"
  const categories = await listCategories()

  return (
    <div className="raleys-font">
      <main className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-16">
        {/* Refined Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="sticky top-28">
            <nav className="mb-12">
              <ul className="space-y-1">
                <li className="flex items-center gap-3 p-3 rounded-xl text-gray-600 font-bold hover:bg-gray-50 cursor-pointer transition-all">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                  <LocalizedClientLink href="/" className="hover:text-[#1a4d2e] transition-colors">Shop</LocalizedClientLink>
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

        {/* Collection Content */}
        <section className="flex-1">
          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight">
              {collection.title}
            </h1>
            <RefinementList sortBy={sort} />
          </div>

          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={collection.products?.length}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              collectionId={collection.id}
              countryCode={countryCode}
            />
          </Suspense>
        </section>
      </main>
    </div>
  )
}
