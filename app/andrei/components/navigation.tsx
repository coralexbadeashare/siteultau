'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, ShoppingBag, MessageCircle, PlusCircle, User } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/andrei" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Student Market</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/andrei" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link href="/andrei/listings" className="text-gray-700 hover:text-blue-600 transition-colors">
              Browse Items
            </Link>
            <Link href="/andrei/post" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <PlusCircle className="h-4 w-4" />
              <span>Sell Item</span>
            </Link>
            <Link href="/andrei/chat" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span>Messages</span>
            </Link>
            <Link href="/andrei/profile" className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/andrei" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Home
            </Link>
            <Link href="/andrei/listings" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Browse Items
            </Link>
            <Link href="/andrei/post" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Sell Item
            </Link>
            <Link href="/andrei/chat" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Messages
            </Link>
            <Link href="/andrei/profile" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}