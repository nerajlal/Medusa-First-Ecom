import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text, clx, Heading } from "@medusajs/ui"
import { Github, Facebook, X } from "@medusajs/icons"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

export default async function Footer() {
  const { collections } = await listCollections({
    fields: "*products",
  })
  const productCategories = await listCategories()

  return (
    <footer className="border-t border-ui-border-base w-full bg-white">
      <div className="content-container flex flex-col w-full">
        <div className="flex flex-col gap-y-12 large:flex-row items-start justify-between py-24">
          <div className="flex flex-col gap-y-6">
            <LocalizedClientLink
              href="/"
              className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase tracking-widest font-bold text-xl"
            >
              Task Store
            </LocalizedClientLink>
            <div className="max-w-[300px]">
              <Text className="text-ui-fg-subtle leading-relaxed">
                Elevating your shopping experience with India&apos;s finest curated premium goods and exceptional service.
              </Text>
            </div>
            <div className="flex items-center gap-x-4 text-ui-fg-subtle">
              <a href="https://github.com/medusajs" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base transition-colors">
                <Github />
              </a>
              <a href="#" className="hover:text-ui-fg-base transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-ui-fg-base transition-colors">
                <X />
              </a>
            </div>
          </div>

          <div className="text-small-regular gap-12 md:gap-x-24 grid grid-cols-2 sm:grid-cols-4 w-full large:w-auto">
            {productCategories && productCategories?.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <Heading level="h3" className="text-xs uppercase tracking-widest font-bold text-ui-fg-base">
                  Shop
                </Heading>
                <ul className="grid grid-cols-1 gap-y-3">
                  {productCategories?.slice(0, 6).map((c) => {
                    if (c.parent_category) return null
                    return (
                      <li key={c.id}>
                        <LocalizedClientLink
                          className="text-ui-fg-subtle hover:text-ui-fg-base transition-colors"
                          href={`/categories/${c.handle}`}
                        >
                          {c.name}
                        </LocalizedClientLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}

            {collections && collections.length > 0 && (
              <div className="flex flex-col gap-y-6">
                <Heading level="h3" className="text-xs uppercase tracking-widest font-bold text-ui-fg-base">
                  Collections
                </Heading>
                <ul className="grid grid-cols-1 gap-y-3">
                  {collections?.slice(0, 6).map((c) => (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="text-ui-fg-subtle hover:text-ui-fg-base transition-colors"
                        href={`/collections/${c.handle}`}
                      >
                        {c.title}
                      </LocalizedClientLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col gap-y-6">
              <Heading level="h3" className="text-xs uppercase tracking-widest font-bold text-ui-fg-base">
                Company
              </Heading>
              <ul className="grid grid-cols-1 gap-y-3 text-ui-fg-subtle">
                <li>
                  <LocalizedClientLink href="/about" className="hover:text-ui-fg-base transition-colors">
                    Our Heritage
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/contact" className="hover:text-ui-fg-base transition-colors">
                    Global Concierge
                  </LocalizedClientLink>
                </li>
                <li>
                   <a href="#" className="hover:text-ui-fg-base transition-colors">Digital Gallery</a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-y-6">
              <Heading level="h3" className="text-xs uppercase tracking-widest font-bold text-ui-fg-base">
                Legal
              </Heading>
              <ul className="grid grid-cols-1 gap-y-3 text-ui-fg-subtle">
                <li>
                  <LocalizedClientLink href="/privacy-policy" className="hover:text-ui-fg-base transition-colors">
                    Privacy Policy
                  </LocalizedClientLink>
                </li>
                <li>
                  <LocalizedClientLink href="/terms-of-service" className="hover:text-ui-fg-base transition-colors">
                    Terms of Service
                  </LocalizedClientLink>
                </li>
                {/* <li>
                  <a href="https://docs.medusajs.com" target="_blank" rel="noreferrer" className="hover:text-ui-fg-base transition-colors">
                    Documentation
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4 md:flex-row w-full mb-16 justify-between pt-8 border-t border-ui-border-base text-ui-fg-muted">
          <Text className="txt-compact-small">
            © {new Date().getFullYear()} Task Store. All rights reserved.
          </Text>
          <div className="flex items-center gap-x-6">
            <Text className="txt-compact-small text-ui-fg-muted">India</Text>
          </div>
        </div>
      </div>
    </footer>
  )
}
