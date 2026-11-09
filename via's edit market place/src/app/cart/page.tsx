import Link from "next/link"
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react"
import { products } from "@/lib/data"

export default function CartPage() {
  const items = [
    { product: products[0], qty: 1 },
    { product: products[1], qty: 2 },
  ]
  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.qty,
    0
  )

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your bag</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-6">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-gray-200">
                <div className="shrink-0 bg-gray-100 rounded-lg p-2">
                  <span className="block w-16 h-16 rounded bg-brand-100 flex items-center justify-center text-brand-600 text-xl font-bold">
                    {item.product.name[0]}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                  <p className="text-gray-500 text-sm">${item.product.price.toFixed(2)}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="font-medium w-4 text-center">{item.qty}</span>
                    <button className="p-1.5 text-gray-400 hover:text-brand-600 rounded hover:bg-brand-50">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-red-500 ml-2">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1 bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-6">
            <h2 className="font-bold text-gray-900 mb-4">Order summary</h2>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((a, b) => a + b.qty, 0)} items)</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-brand-600">Free</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold text-gray-900">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button className="btn-primary w-full mb-4">Checkout</button>
            <Link href="/" className="block text-center text-sm text-brand-600 hover:underline">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
