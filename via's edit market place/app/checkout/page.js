import Link from 'next/link'

export default function CheckoutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <Link href="/" className="text-gray-600 hover:text-gray-900">
          Continue shopping
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <form className="space-y-6">
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold mb-4">Shipping details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full name</label>
                <input
                  type="text"
                  placeholder="Jane Doe"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                placeholder="123 Main Street"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-gray-900 outline-none"
              />
            </div>
          </div>

          <button
            type="button"
            className="w-full py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Place Order
          </button>
        </form>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-bold mb-4">Order summary</h2>
          <div className="space-y-4 mb-6">
            <div className="flex justify-between text-gray-600">
              <span>Items</span>
              <span>3</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tax</span>
              <span>Calculated at checkout</span>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>$142.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
