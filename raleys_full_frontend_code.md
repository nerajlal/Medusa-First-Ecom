# Full Frontend Source Code: Raley's Grocery Template

This document contains the complete core codebase for the Raley's Premium Storefront. Use these code blocks to recreate the application.

---

## 1. API Client (`lib/medusa-client.ts`)
Handles communication with the multi-tenant backend.

```typescript
import Medusa from "@medusajs/medusa-js"

export const medusa = new Medusa({ 
  baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL || "http://159.89.226.108:9000", 
  maxRetries: 3,
  customHeaders: {
    "x-tenant-id": "raleys-market" // Multi-tenant identifier
  }
})

export const fetchGroceryData = async () => {
  const { products } = await medusa.products.list({ limit: 50 })
  const { product_categories } = await medusa.productCategories.list()
  return { products, categories: product_categories }
}
```

---

## 2. Core Components

### Store Header (`components/StoreHeader.tsx`)
```tsx
import React from 'react';

export const StoreHeader = () => (
  <header className="sticky top-0 z-50 bg-white border-b px-6 py-4 flex items-center justify-between">
    <div className="text-2xl font-bold text-green-800 tracking-tight">RALEY'S</div>
    <div className="flex-1 max-w-2xl mx-8">
      <input 
        type="text" 
        placeholder="Search for fresh groceries..." 
        className="w-full bg-gray-100 rounded-full px-6 py-3 border-none focus:ring-2 focus:ring-green-600 outline-none"
      />
    </div>
    <div className="flex items-center gap-4">
      <button className="bg-green-800 text-white px-6 py-2 rounded-full font-medium">Cart · 0</button>
    </div>
  </header>
);
```

### Product Card (`components/ProductCard.tsx`)
```tsx
export const ProductCard = ({ product }) => (
  <div className="product-card group bg-white rounded-2xl p-4 border border-gray-100 hover:shadow-xl transition-all">
    <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gray-50">
      <img 
        src={product.thumbnail} 
        alt={product.title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform" 
      />
    </div>
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-bold text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-500">{product.variants[0]?.title || 'Standard'}</p>
        <p className="text-lg font-bold text-green-700 mt-2">
          ${(product.variants[0]?.prices[0]?.amount / 100).toFixed(2)}
        </p>
      </div>
      <button className="w-10 h-10 bg-green-100 text-green-800 rounded-full flex items-center justify-center font-bold hover:bg-green-800 hover:text-white transition-colors">
        +
      </button>
    </div>
  </div>
);
```

---

## 3. Main Storefront Page (`pages/index.tsx`)
```tsx
import { useEffect, useState } from 'react'
import { fetchGroceryData } from '../lib/medusa-client'
import { StoreHeader } from '../components/StoreHeader'
import { ProductCard } from '../components/ProductCard'

export default function RaleysHome() {
  const [data, setData] = useState({ products: [], categories: [] })

  useEffect(() => {
    fetchGroceryData().then(setData)
  }, [])

  return (
    <div className="bg-gray-50 min-h-screen">
      <StoreHeader />
      <main className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
        {/* Sidebar */}
        <aside className="w-64 hidden lg:block">
          <h2 className="font-bold text-xl mb-6">Categories</h2>
          <ul className="space-y-2">
            {data.categories.map(cat => (
              <li key={cat.id} className="p-3 rounded-lg hover:bg-green-50 text-gray-700 cursor-pointer font-medium">
                {cat.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <section className="flex-1">
          <h1 className="text-3xl font-black text-gray-900 mb-8">Fresh Groceries</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {data.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
```

---

## 4. Design System (`styles/globals.css`)
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');

body {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

.product-card {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.product-card:hover {
  transform: translateY(-4px);
}

/* Instacart Style Buttons */
button {
  cursor: pointer;
  user-select: none;
}

/* Hero Banner Effect */
.hero-gradient {
  background: linear-gradient(135deg, #2d5a27 0%, #4a8c42 100%);
}
```
