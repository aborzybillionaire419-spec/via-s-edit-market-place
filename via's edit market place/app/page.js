import Link from 'next/link'
import { ShoppingBag, Sparkles } from 'lucide-react'
import { products } from '@/lib/products'

export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          <Sparkles className="inline mr-2 text-5xl" /> Via's Edit
        </h1>
        <p className="text-gray-600 text-lg">Curated marketplace. Fresh edits, every day.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="block">
            <div className="group rounded-xl border border-gray-200 bg-white p-4 hover:shadow-lg transition">
              <div className="aspect-square overflow-hidden rounded-lg mb-4 relative bg-gray-100">
                <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-4xl">
                  {product.emoji}
                </span>
                <button className="absolute right-2 top-2 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition">
                  <ShoppingBag size={20} strokeWidth={2.5} />
                </button>
              </div>
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.category}</p>
              <p className="mt-2 font-bold">$${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
