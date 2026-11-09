import Link from "next/link"
import { Mail, Phone, MapPin, CreditCard } from "lucide-react"

export default function CheckoutPage() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <form className="space-y-6 bg-white p-6 rounded-xl border border-gray-200">
            <h2 className="font-bold text-gray-900 mb-2">Shipping details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Full name</label>
                <input className="input" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input className="input" type="email" placeholder="jane@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Address</label>
              <input className="input" placeholder="123 Market Street" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">City</label>
                <input className="input" placeholder="Brooklyn" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">ZIP</label>
                <input className="input" placeholder="11201" />
              </div>
            </div>
          </form>
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 sticky top-6">
            <h2 className="font-bold text-gray-900 mb-4">Order summary</h2>
            <div className="space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Items (3)</span>
                <span>$142.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="text-brand-600">Free</span>
              </div>
              <div className="flex justify-between border-t pt-2 font-bold text-gray-900">
                <span>Total</span>
                <span>$142.00</span>
              </div>
            </div>
            <button className="btn-primary w-full mb-4">Place order</button>
            <Link href="/" className="block text-center text-sm text-brand-600 hover:underline">
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
