'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Search, Shield, TrendingUp, Users } from 'lucide-react'
import { useState } from 'react'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { name: 'Textbooks', icon: '📚', count: 245 },
    { name: 'Electronics', icon: '💻', count: 189 },
    { name: 'Furniture', icon: '🪑', count: 92 },
    { name: 'Clothing', icon: '👕', count: 156 },
    { name: 'Sports', icon: '⚽', count: 78 },
    { name: 'Other', icon: '📦', count: 134 }
  ]

  const featuredItems = [
    { id: 1, title: 'Calculus Textbook', price: '$45', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', seller: 'John D.' },
    { id: 2, title: 'MacBook Pro 2021', price: '$800', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400', seller: 'Sarah M.' },
    { id: 3, title: 'Study Desk', price: '$60', image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=400', seller: 'Mike R.' },
    { id: 4, title: 'Winter Jacket', price: '$35', image: 'https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=400', seller: 'Emma L.' }
  ]

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Buy & Sell with Fellow Students
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              The trusted marketplace for campus communities
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                <input
                  type="text"
                  placeholder="Search for textbooks, electronics, furniture..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-6 py-4 text-gray-700 focus:outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-4 transition-colors">
                  <Search className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/andrei/listings?category=${category.name.toLowerCase()}`}
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-800">{category.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                    <span className="text-sm text-gray-500">by {item.seller}</span>
                  </div>
                  <Link href={`/andrei/listings/${item.id}`}>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/andrei/listings">
              <button className="bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors">
                View All Listings
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Student Market?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">Verified student accounts and secure transactions within your campus community</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">Save money on textbooks and essentials with student-friendly pricing</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Campus Community</h3>
              <p className="text-gray-600">Connect with fellow students and build your campus network</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of students buying and selling on campus</p>
          <div className="flex justify-center space-x-4">
            <Link href="/andrei/post">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Sell Your Items
              </button>
            </Link>
            <Link href="/andrei/listings">
              <button className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Start Shopping
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}