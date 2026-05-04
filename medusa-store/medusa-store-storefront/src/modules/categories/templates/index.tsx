import { notFound } from "next/navigation"
import { Suspense } from "react"

import { StoreHeader } from "@modules/raleys/components/StoreHeader"
import { ProductCard } from "@modules/raleys/components/ProductCard"
import InteractiveLink from "@modules/common/components/interactive-link"
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import PaginatedProducts from "@modules/store/templates/paginated-products"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { HttpTypes } from "@medusajs/types"
import { listCategories } from "@lib/data/categories"
import { getRegion } from "@lib/data/regions"

export default async function CategoryTemplate({
  category,
  sortBy,
  page,
  countryCode,
}: {
  category: HttpTypes.StoreProductCategory
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  if (!category || !countryCode) notFound()

  const categories = await listCategories()
  const region = await getRegion(countryCode)

  const parents = [] as HttpTypes.StoreProductCategory[]

  const getParents = (category: HttpTypes.StoreProductCategory) => {
    if (category.parent_category) {
      parents.push(category.parent_category)
      getParents(category.parent_category)
    }
  }

  getParents(category)

  return (
    <div className="bg-white min-h-screen raleys-font">
      <StoreHeader />

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
                    className={`block p-3 rounded-xl font-bold transition-all ${
                      cat.id === category.id
                        ? 'bg-[#e8f5e9] text-[#1a4d2e]'
                        : 'hover:bg-[#e8f5e9]/50 text-gray-800 hover:text-[#1a4d2e]'
                    } cursor-pointer`}
                  >
                    {cat.name}
                  </LocalizedClientLink>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Category Content */}
        <section className="flex-1">
          {/* Breadcrumbs */}
          {parents.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
              <LocalizedClientLink href="/" className="hover:text-[#1a4d2e] transition-colors">Home</LocalizedClientLink>
              {parents.reverse().map((parent) => (
                <span key={parent.id} className="flex items-center gap-2">
                  <span>/</span>
                  <LocalizedClientLink
                    href={`/categories/${parent.handle}`}
                    className="hover:text-[#1a4d2e] transition-colors"
                  >
                    {parent.name}
                  </LocalizedClientLink>
                </span>
              ))}
              <span>/</span>
              <span className="text-gray-900 font-semibold">{category.name}</span>
            </div>
          )}

          <div className="flex items-center justify-between mb-10">
            <h1 className="text-3xl font-black text-gray-900 tracking-tight" data-testid="category-page-title">
              {category.name}
            </h1>
            <RefinementList sortBy={sort} data-testid="sort-by-container" />
          </div>

          {category.description && (
            <p className="text-gray-600 mb-8 text-lg leading-relaxed max-w-2xl">{category.description}</p>
          )}

          {category.category_children && category.category_children.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-10">
              {category.category_children.map((c) => (
                <LocalizedClientLink
                  key={c.id}
                  href={`/categories/${c.handle}`}
                  className="bg-[#e8f5e9] text-[#1a4d2e] px-5 py-2 rounded-full text-sm font-bold hover:bg-[#1a4d2e] hover:text-white transition-all"
                >
                  {c.name}
                </LocalizedClientLink>
              ))}
            </div>
          )}

          <Suspense
            fallback={
              <SkeletonProductGrid
                numberOfProducts={category.products?.length ?? 8}
              />
            }
          >
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              categoryId={category.id}
              countryCode={countryCode}
            />
          </Suspense>
        </section>
      </main>
    </div>
  )
}
