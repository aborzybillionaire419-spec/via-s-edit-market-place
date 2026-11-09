export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="h-48 bg-gray-100 flex items-center justify-center text-brand-600 text-2xl font-bold">
            {product.name[0]}
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-gray-900">{product.name}</h3>
            <p className="text-brand-600 font-medium">${product.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
