'use client'

import { CartContext } from '@/context/CartContext'

export default function CartPage() {
  const { items, total, removeItem, clearCart } = CartContext.useCart()

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {items.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <>
          <div className="rounded-xl border border-gray-200 bg-white p-6 mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 text-sm mb-4">
                  <th className="pb-3">Item</th>
                  <th className="pb-3 text-right">Price</th>
                  <th className="pb-3 text-right">Qty</th>
                  <th className="pb-3 text-right">Total</th>
                  <th className="pb-3"></th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-4">{item.name}</td>
                    <td className="py-4 text-right">$${item.price}</td>
                    <td className="py-4 text-right">{item.qty}</td>
                    <td className="py-4 text-right font-medium">
                      $${(item.price * item.qty).toFixed(2)}
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-600 text-sm hover:underline"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-right">
              <p className="text-gray-500 text-sm">Subtotal</p>
              <p className="text-2xl font-bold">${total.toFixed(2)}</p>
            </div>
            <button
              onClick={clearCart}
              className="px-6 py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
