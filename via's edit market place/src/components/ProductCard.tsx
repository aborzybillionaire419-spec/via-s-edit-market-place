import Link from "next/link"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="block">
      <div className="group relative bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
        <div className="relative h-48 bg-gray-100">
          <span className="absolute inset-0 block w-full h-full object-cover bg-brand-100 flex items-center justify-center text-brand-600 text-2xl font-bold">
            {product.name[0]}
          </span>
          <span className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-xs font-semibold text-gray-700">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
      </div>
    </Link>
  )
}
