'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, Grid, List, MapPin, Clock } from 'lucide-react'

export default function ListingsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [searchQuery, setSearchQuery] = useState('')

  const listings = [
    { id: 1, title: 'Organic Chemistry Textbook', price: 65, category: 'textbooks', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400', seller: 'Alex K.', location: 'North Campus', posted: '2 hours ago' },
    { id: 2, title: 'HP Laptop - Great for Coding', price: 450, category: 'electronics', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400', seller: 'Maria S.', location: 'Engineering Building', posted: '5 hours ago' },
    { id: 3, title: 'Ergonomic Study Chair', price: 80, category: 'furniture', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400', seller: 'Tom H.', location: 'West Dorms', posted: '1 day ago' },
    { id: 4, title: 'Winter Coat - Like New', price: 40, category: 'clothing', image: 'https://images.unsplash.com/photo-1566479179817-0ddb5fa87cd9?w=400', seller: 'Lisa M.', location: 'Student Center', posted: '1 day ago' },
    { id: 5, title: 'Basketball Shoes Size 10', price: 55, category: 'sports', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', seller: 'James P.', location: 'Sports Complex', posted: '2 days ago' },
    { id: 6, title: 'Scientific Calculator', price: 25, category: 'electronics', image: 'https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?w=400', seller: 'Nina R.', location: 'Math Building', posted: '3 days ago' },
    { id: 7, title: 'Desk Lamp with USB', price: 30, category: 'furniture', image: 'https://images.unsplash.com/photo-1565636192595-e4a1dd3a15e2?w=400', seller: 'David L.', location: 'East Dorms', posted: '3 days ago' },
    { id: 8, title: 'Biology Lab Manual', price: 35, category: 'textbooks', image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400', seller: 'Sophie T.', location: 'Science Hall', posted: '4 days ago' }
  ]

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'textbooks', label: 'Textbooks' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'furniture', label: 'Furniture' },
    { value: 'clothing', label: 'Clothing' },
    { value: 'sports', label: 'Sports' }
  ]

  const priceRanges = [
    { value: 'all', label: 'Any Price' },
    { value: '0-25', label: 'Under $25' },
    { value: '25-50', label: '$25 - $50' },
    { value: '50-100', label: '$50 - $100' },
    { value: '100+', label: 'Over $100' }
  ]

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' }
  ]

  const filteredListings = listings.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice = priceRange === 'all' || 
      (priceRange === '0-25' && item.price <= 25) ||
      (priceRange === '25-50' && item.price > 25 && item.price <= 50) ||
      (priceRange === '50-100' && item.price > 50 && item.price <= 100) ||
      (priceRange === '100+' && item.price > 100)
    
    return matchesCategory && matchesSearch && matchesPrice
  })

  const sortedListings = [...filteredListings].sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    return 0
  })

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Browse Listings</h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for items..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex gap-4 flex-wrap">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(cat => (
                  <option key={cat.value} value={cat.value}>{cat.label}</option>
                ))}
              </select>
              
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
              
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4 text-gray-600">
          Showing {sortedListings.length} items
        </div>

        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedListings.map((item) => (
              <Link key={item.id} href={`/andrei/listings/${item.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="h-48 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-2xl font-bold text-blue-600 mb-2">${item.price}</p>
                    <div className="text-sm text-gray-500 space-y-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {item.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {item.posted}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedListings.map((item) => (
              <Link key={item.id} href={`/andrei/listings/${item.id}`}>
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="flex gap-4">
                    <div className="w-32 h-32 relative flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
                      <p className="text-2xl font-bold text-blue-600 mb-2">${item.price}</p>
                      <div className="text-sm text-gray-500 flex gap-4">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {item.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {item.posted}
                        </div>
                        <div>Seller: {item.seller}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}