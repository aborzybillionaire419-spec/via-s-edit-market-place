import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { ShoppingCart, Mail, Phone, Truck } from "lucide-react"

export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8 text-sm text-gray-500">
          <a href="/" className="hover:text-brand-600">
            Home
          </a>
          <span className="mx-1">/</span>
          <a href="/products" className="hover:text-brand-600">
            Edits
          </a>
          <span className="mx-1">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-100 rounded-2xl p-4 aspect-square">
            <span className="block w-full h-full object-cover rounded-lg bg-brand-100 flex items-center justify-center text-brand-600 text-4xl font-bold">
              {product.name[0]}
            </span>
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-xl font-bold text-brand-600">${product.price.toFixed(2)}</p>
            <p className="text-gray-600">{product.description}</p>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-700">Qty</label>
              <select className="input w-20">
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn-primary w-full">Add to bag</button>
            <div className="grid grid-cols-3 gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span>Free shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Easy returns</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
