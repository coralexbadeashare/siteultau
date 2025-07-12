'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowLeft, Grid, List, Filter, Search, Star, 
  ShoppingCart, Heart, Eye
} from 'lucide-react'

export default function CategoryPage() {
  const params = useParams()
  const category = params.category as string
  
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('popular')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 })
  const [showFilters, setShowFilters] = useState(false)

  // Sample products data
  const products = [
    {
      id: 1,
      name: 'Aer Condiționat DualClima 8400H',
      price: 10000,
      oldPrice: 11500,
      rating: 4.8,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop',
      inStock: true,
      isNew: true,
      description: 'Unitate de aer condiționat cu pompă de căldură pentru autorulote'
    },
    {
      id: 2,
      name: 'SILENT PLUS 5900H',
      price: 9800,
      rating: 4.6,
      reviews: 18,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=600&fit=crop',
      inStock: true,
      description: 'Sistem silențios de climatizare pentru rulote mici și medii'
    },
    {
      id: 3,
      name: 'Clima e-Van 5400H',
      price: 8800,
      oldPrice: 9500,
      rating: 4.5,
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1562113530-57ba467cea38?w=600&h=600&fit=crop',
      inStock: false,
      description: 'Cel mai mic aer condiționat de acoperiș de pe piață'
    },
    {
      id: 4,
      name: 'FreshJet 2200',
      price: 7500,
      rating: 4.7,
      reviews: 31,
      image: 'https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600&h=600&fit=crop',
      inStock: true,
      isBestseller: true,
      description: 'Aer condiționat compact cu consum redus de energie'
    },
    {
      id: 5,
      name: 'CoolAir SP 950',
      price: 6200,
      rating: 4.4,
      reviews: 8,
      image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=600&h=600&fit=crop',
      inStock: true,
      description: 'Sistem de climatizare pentru spații mici'
    },
    {
      id: 6,
      name: 'ArcticBreeze Pro',
      price: 12500,
      oldPrice: 13900,
      rating: 4.9,
      reviews: 42,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=600&fit=crop',
      inStock: true,
      isPremium: true,
      description: 'Aer condiționat premium cu funcții smart'
    }
  ]

  const categoryNames: { [key: string]: string } = {
    'aer-conditionat': 'Aer Condiționat',
    'antene-tv': 'Antene, TV și Multimedia',
    'apa': 'Sisteme de Apă',
    'caroserie': 'Caroserie',
    'electrice': 'Componente Electrice',
    'energie-verde': 'Energie Verde',
    'gaz': 'Sisteme Gaz',
    'igienizare': 'Igienizare și Întreținere',
    'incalzire': 'Sisteme Încălzire',
    'materiale-reparatii': 'Materiale Reparații',
    'sigilanti': 'Sigilanți și Adezivi',
    'sisteme-iarna': 'Sisteme Iarnă'
  }

  const categoryName = categoryNames[category] || 'Produse'

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/camperservice" className="text-gray-600 hover:text-blue-600">
              Acasă
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/camperservice/magazin" className="text-gray-600 hover:text-blue-600">
              Magazin
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">{categoryName}</h1>
              <p className="text-blue-100">
                {products.length} produse disponibile
              </p>
            </div>
            <Link
              href="/camperservice/magazin"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Înapoi la Categorii</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="bg-white shadow-sm sticky top-20 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg"
            >
              <Filter className="h-5 w-5" />
              <span>Filtre</span>
            </button>

            <div className="flex items-center gap-4 w-full lg:w-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Caută în categorie..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="popular">Cele mai populare</option>
                <option value="price-asc">Preț crescător</option>
                <option value="price-desc">Preț descrescător</option>
                <option value="rating">Rating</option>
                <option value="newest">Cele mai noi</option>
              </select>

              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:block lg:w-64 ${showFilters ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-32">
              <h3 className="font-bold text-lg mb-4">Filtre</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Interval Preț</h4>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="20000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>0 lei</span>
                    <span>{priceRange.max} lei</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Disponibilitate</h4>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" />
                  <span className="text-sm">În Stoc</span>
                </label>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3">Rating Minim</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input type="radio" name="rating" className="text-blue-600" />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-1 text-sm text-gray-600">& mai mult</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-semibold mb-3">Branduri</h4>
                <div className="space-y-2">
                  {['Dometic', 'Truma', 'Fiamma', 'Webasto'].map((brand) => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid/List */}
          <div className="flex-1">
            {viewMode === 'grid' ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                  >
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          NOU
                        </span>
                      )}
                      {product.isBestseller && (
                        <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          BESTSELLER
                        </span>
                      )}
                      {product.isPremium && (
                        <span className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          PREMIUM
                        </span>
                      )}
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Stoc Epuizat
                          </span>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                          <Heart className="h-5 w-5" />
                        </button>
                        <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          ({product.reviews})
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          {product.oldPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {product.oldPrice} lei
                            </span>
                          )}
                          <span className="text-2xl font-bold text-blue-600 ml-2">
                            {product.price} lei
                          </span>
                        </div>
                        <button
                          disabled={!product.inStock}
                          className={`p-3 rounded-lg transition-colors ${
                            product.inStock
                              ? 'bg-blue-600 hover:bg-blue-700 text-white'
                              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          }`}
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-all flex gap-6"
                  >
                    <div className="relative w-48 h-48 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                      {product.isNew && (
                        <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-semibold">
                          NOU
                        </span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold">{product.name}</h3>
                        <div className="flex space-x-2">
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Heart className="h-5 w-5" />
                          </button>
                          <button className="p-2 hover:bg-gray-100 rounded-lg">
                            <Eye className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{product.description}</p>
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {product.rating} ({product.reviews} recenzii)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          {product.oldPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              {product.oldPrice} lei
                            </span>
                          )}
                          <span className="text-3xl font-bold text-blue-600 ml-2">
                            {product.price} lei
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          {product.inStock ? (
                            <>
                              <span className="text-green-600 font-medium">În Stoc</span>
                              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center space-x-2">
                                <ShoppingCart className="h-5 w-5" />
                                <span>Adaugă în Coș</span>
                              </button>
                            </>
                          ) : (
                            <span className="text-red-600 font-medium">Stoc Epuizat</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Anterior
                </button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                  1
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  2
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  3
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Următor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}