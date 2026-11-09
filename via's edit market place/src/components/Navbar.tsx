import Link from "next/link"
import { ShoppingCart, Menu, X, Sparkles } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-brand-600" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Via&apos;s Edit
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="text-gray-600 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-brand-600 transition-colors">
              Edits
            </Link>
            <a href="#" className="text-gray-600 hover:text-brand-600 transition-colors">
              About
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-gray-600 hover:text-brand-600 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-brand-600 text-xs text-white">
                0
              </span>
            </button>
            <button
              className="md:hidden text-gray-600 hover:text-brand-600"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link href="/" className="block text-gray-600 hover:text-brand-600 py-2">
              Home
            </Link>
            <Link href="/products" className="block text-gray-600 hover:text-brand-600 py-2">
              Edits
            </Link>
            <a href="#" className="block text-gray-600 hover:text-brand-600 py-2">
              About
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
