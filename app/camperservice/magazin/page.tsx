'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Wind, Wifi, Droplets, Home, Zap, Sun, Flame, 
  Snowflake, Wrench, Package, Shield, SprayCan,
  Grid, List, Search, Filter, ChevronRight, Truck
} from 'lucide-react'

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    {
      id: 'aer-conditionat',
      name: 'Aer Condiționat',
      icon: Wind,
      count: 24,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Sisteme de climatizare pentru confort maxim'
    },
    {
      id: 'antene-tv',
      name: 'Antene, TV și Multimedia',
      icon: Wifi,
      count: 18,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d0?w=400&h=300&fit=crop',
      description: 'Divertisment și conectivitate în călătorii'
    },
    {
      id: 'apa',
      name: 'Apă',
      icon: Droplets,
      count: 42,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
      description: 'Pompe, rezervoare și accesorii sanitare'
    },
    {
      id: 'caroserie',
      name: 'Caroserie',
      icon: Home,
      count: 36,
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop',
      description: 'Piese și accesorii pentru exterior'
    },
    {
      id: 'electrice',
      name: 'Electrice',
      icon: Zap,
      count: 54,
      image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop',
      description: 'Baterii, invertoare și componente electrice'
    },
    {
      id: 'energie-verde',
      name: 'Energie Verde',
      icon: Sun,
      count: 28,
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=400&h=300&fit=crop',
      description: 'Panouri solare și soluții eco-friendly'
    },
    {
      id: 'gaz',
      name: 'Gaz',
      icon: Flame,
      count: 32,
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=300&fit=crop',
      description: 'Sisteme și accesorii pentru gaz'
    },
    {
      id: 'igienizare',
      name: 'Igienizare și Întreținere',
      icon: SprayCan,
      count: 26,
      image: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=300&fit=crop',
      description: 'Produse de curățare și întreținere'
    },
    {
      id: 'incalzire',
      name: 'Încălzire',
      icon: Flame,
      count: 22,
      image: 'https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?w=400&h=300&fit=crop',
      description: 'Sisteme de încălzire pentru confort termic'
    },
    {
      id: 'materiale-reparatii',
      name: 'Materiale Reparații',
      icon: Wrench,
      count: 48,
      image: 'https://images.unsplash.com/photo-1609205807107-600ec54df814?w=400&h=300&fit=crop',
      description: 'Unelte și materiale pentru reparații'
    },
    {
      id: 'sigilanti',
      name: 'Sigilanți și Adezivi',
      icon: Package,
      count: 34,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop',
      description: 'Produse pentru etanșare și lipire'
    },
    {
      id: 'sisteme-iarna',
      name: 'Sisteme și Soluții Iarnă',
      icon: Snowflake,
      count: 16,
      image: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=400&h=300&fit=crop',
      description: 'Protecție și confort pentru sezonul rece'
    }
  ]

  const featuredBrands = [
    'Dometic', 'Truma', 'Fiamma', 'Thule', 'Thetford', 'Reich', 'Webasto', 'Alde'
  ]

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=600&fit=crop"
          alt="Magazin CamperService"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Magazin Online</h1>
              <p className="text-xl text-gray-200">
                Peste 1000 de produse pentru autorulote și rulote. 
                Livrare rapidă în toată țara.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-md sticky top-20 z-30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Caută categorii..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-5 w-5" />
                <span>Filtre</span>
              </button>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${
                    viewMode === 'grid' 
                      ? 'bg-white shadow-sm' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${
                    viewMode === 'list' 
                      ? 'bg-white shadow-sm' 
                      : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Branduri de Top</h2>
          <div className="flex flex-wrap gap-4">
            {featuredBrands.map((brand) => (
              <span
                key={brand}
                className="px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid/List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Categorii Produse</h2>
            <p className="text-gray-600">
              Găsește exact ce ai nevoie din cele {categories.length} categorii disponibile
            </p>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCategories.map((category) => {
                const Icon = category.icon
                return (
                  <Link
                    key={category.id}
                    href={`/camperservice/magazin/${category.id}`}
                    className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-1"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-white">
                          <h3 className="font-bold text-lg">{category.name}</h3>
                          <span className="bg-white/20 backdrop-blur-sm px-2 py-1 rounded text-sm">
                            {category.count} produse
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start space-x-3">
                        <div className="bg-blue-100 p-2 rounded-lg">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-600 text-sm">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center text-blue-600 font-semibold">
                        Vezi Produse
                        <ChevronRight className="h-5 w-5 ml-1" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredCategories.map((category) => {
                return (
                  <Link
                    key={category.id}
                    href={`/camperservice/magazin/${category.id}`}
                    className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all flex items-center space-x-6"
                  >
                    <div className="relative h-24 w-32 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={category.image}
                        alt={category.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-xl mb-2">{category.name}</h3>
                          <p className="text-gray-600">{category.description}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                            {category.count} produse
                          </span>
                          <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Livrare Rapidă</h3>
              <p className="text-gray-600 text-sm">
                Livrare în 24-48h pentru produsele din stoc
              </p>
            </div>
            <div>
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Garanție</h3>
              <p className="text-gray-600 text-sm">
                Toate produsele au garanție conform legii
              </p>
            </div>
            <div>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Produse Originale</h3>
              <p className="text-gray-600 text-sm">
                Doar produse autentice de la producători verificați
              </p>
            </div>
            <div>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Suport Tehnic</h3>
              <p className="text-gray-600 text-sm">
                Asistență pentru instalare și utilizare
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}