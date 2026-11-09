import Link from "next/link"
import { ArrowRight, Sparkles, Flame, Sparkle } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import { products } from "@/lib/data"

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-brand-500/10 -z-10" />
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900 mb-6">
            Via&apos;s Edit <span className="text-brand-600">Market Place</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Curated fashion finds and essential edits for every season. Discover
            your next favorite piece.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary">
              Shop Edits <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-brand-600" />
              <h2 className="text-xl font-bold text-gray-900">New this week</h2>
            </div>
            <Link href="/products" className="text-sm text-brand-600 font-medium hover:underline flex items-center gap-1">
              View all <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Flame className="h-8 w-8 text-orange-500" />
              <h2 className="text-2xl font-bold text-gray-900">Seasonal edits</h2>
            </div>
            <p className="text-gray-600">
              Hand-picked pieces for the changing weather. Layer up or lighten
              the load.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-2 grid grid-cols-2 gap-4">
            <div className="bg-gray-900 p-6 rounded-xl text-white">
              <h3 className="text-lg font-bold">Winter essentials</h3>
              <p className="text-gray-300 text-sm mt-1">Cozy knits and outerwear.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl text-gray-900">
              <h3 className="text-lg font-bold">Summer staples</h3>
              <p className="text-gray-600 text-sm mt-1">Breezy linen and denim.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
