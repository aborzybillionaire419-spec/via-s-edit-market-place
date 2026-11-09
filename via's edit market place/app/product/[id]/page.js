'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { products } from '@/lib/products'
import { ShoppingCart, Mail, Star, ThumbsUp } from 'lucide-react'

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const product = products.find((p) => p.id === params.id)
  const [qty, setQty] = useState(1)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
        >
          Back
        </button>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-6">
          <div className="aspect-square overflow-hidden rounded-xl border border-gray-200 bg-gray-100 flex items-center justify-center">
            <span className="text-9xl">{product.emoji}</span>
          </div>
        </div>
        <div className="md:col-span-6 flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <Star size={20} className="text-yellow-500" />
            <span className="font-medium text-gray-400">{product.rating}</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-500 text-sm mb-4">{product.category}</p>
          <p className="text-2xl font-bold mb-6">$${product.price}</p>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={qty}
                readOnly
                className="w-12 h-10 border border-gray-300 rounded text-center"
              />
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <button className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition">
            <ShoppingCart size={20} /> Add to Cart
          </button>

          <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-gray-500 text-sm">
            <ThumbsUp size={16} />
            <span>Free shipping on orders over $50</span>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Details</h2>
        <p className="text-gray-600 max-w-2xl">
          {product.description}
        </p>
      </div>

      <div className="mt-16 text-center">
        <a
          href={`mailto:orders@viasedit.com?subject=Order: ${product.name}`}
          className="text-gray-900 underline hover:text-gray-600 font-medium flex items-center justify-center gap-2"
        >
          <Mail size={18} /> Contact about this item
        </a>
      </div>
    </div>
  )
}
