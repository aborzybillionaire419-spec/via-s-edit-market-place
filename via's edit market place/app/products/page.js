import Link from 'next/link'
import { products } from '@/lib/products'

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="block">
            <div className="rounded-xl border border-gray-200 bg-white p-4 hover:shadow-lg transition">
              <div className="aspect-square overflow-hidden rounded-lg mb-4 relative bg-gray-100">
                <span className="absolute inset-0 flex items-center justify-center text-gray-400 text-6xl">
                  {product.emoji}
                </span>
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
