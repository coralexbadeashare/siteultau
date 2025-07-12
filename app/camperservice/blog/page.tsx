'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Calendar, User, Clock, ArrowRight, Search, 
  Tag, TrendingUp, MessageCircle, Share2
} from 'lucide-react'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const blogPosts = [
    {
      id: 1,
      title: 'Cum să nu îți iei țeapă când cumperi o rulotă',
      excerpt: 'Ghid complet pentru verificarea unei rulote second-hand. Află ce trebuie să verifici înainte de cumpărare pentru a evita problemele costisitoare.',
      author: 'Mihai Popescu',
      date: '15 Ianuarie 2025',
      readTime: '8 min',
      category: 'Ghiduri',
      image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=800&h=600&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Cu banii de un all-inclusive îți cumperi o rulotă',
      excerpt: 'Analiza comparativă între costurile unei vacanțe all-inclusive și investiția într-o rulotă proprie. Libertatea de a călători merită investiția?',
      author: 'Ana Ionescu',
      date: '12 Ianuarie 2025',
      readTime: '6 min',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1543857182-68106299b6b2?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Stilul de viață nomad - corporatism din rulotă',
      excerpt: 'Tot mai mulți profesioniști aleg să lucreze remote din autorulote. Află cum să îți amenajezi biroul mobil perfect.',
      author: 'Radu Marin',
      date: '10 Ianuarie 2025',
      readTime: '10 min',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&h=600&fit=crop',
      trending: true
    },
    {
      id: 4,
      title: 'Top dotări campervan în 2025 pentru maxim de confort',
      excerpt: 'Cele mai noi tehnologii și accesorii care transformă un simplu campervan într-o casă pe roți de lux.',
      author: 'Elena Dumitrescu',
      date: '8 Ianuarie 2025',
      readTime: '7 min',
      category: 'Tehnologie',
      image: 'https://images.unsplash.com/photo-1533591380348-14193f1de18f?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Top 10 lucruri bune de luat cu tine în off camping',
      excerpt: 'Lista esențială pentru camping în natură, departe de facilitățile moderne. Pregătește-te pentru aventură!',
      author: 'Cristian Popa',
      date: '5 Ianuarie 2025',
      readTime: '5 min',
      category: 'Ghiduri',
      image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'Întreținerea de iarnă pentru autorulote',
      excerpt: 'Ghid pas cu pas pentru pregătirea autorulotei pentru sezonul rece. Protejează-ți investiția împotriva înghețului.',
      author: 'Mihai Popescu',
      date: '2 Ianuarie 2025',
      readTime: '9 min',
      category: 'Întreținere',
      image: 'https://images.unsplash.com/photo-1516431883659-655d41c09bf9?w=800&h=600&fit=crop'
    }
  ]

  const categories = [
    { id: 'all', name: 'Toate', count: blogPosts.length },
    { id: 'ghiduri', name: 'Ghiduri', count: 2 },
    { id: 'lifestyle', name: 'Lifestyle', count: 2 },
    { id: 'tehnologie', name: 'Tehnologie', count: 1 },
    { id: 'intretinere', name: 'Întreținere', count: 1 }
  ]

  const popularTags = [
    'camping', 'autorulote', 'rulote', 'off-grid', 'vanlife', 
    'remote work', 'întreținere', 'accesorii', 'călătorii'
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || 
                           post.category.toLowerCase() === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1530268729831-4b0b9e170218?w=1920&h=800&fit=crop"
          alt="Blog CamperService"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Blog CamperService</h1>
              <p className="text-xl text-gray-200">
                Sfaturi, ghiduri și inspirație pentru pasionații de camping și călătorii
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="bg-white shadow-md sticky top-20 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Caută articole..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Post */}
            {filteredPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Articol Recomandat</h2>
                <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="relative h-96">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-3xl font-bold mb-4 hover:text-blue-600 transition-colors">
                      <Link href={`/camperservice/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} citire
                        </div>
                      </div>
                      <Link
                        href={`/camperservice/blog/${post.id}`}
                        className="flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Citește mai mult
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            ))}

            {/* Regular Posts */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredPosts.filter(post => !post.featured).map(post => (
                <article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                    {post.trending && (
                      <div className="absolute top-4 right-4 bg-orange-500 text-white p-2 rounded-full">
                        <TrendingUp className="h-4 w-4" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-xs font-semibold text-blue-600 uppercase">
                        {post.category}
                      </span>
                      <span className="text-gray-400">•</span>
                      <span className="text-xs text-gray-500">{post.readTime} citire</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                      <Link href={`/camperservice/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-gray-500">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <Link
                        href={`/camperservice/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-semibold"
                      >
                        Citește →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Categories */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Categorii</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full flex items-center justify-between px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className={`text-sm ${
                      selectedCategory === category.id ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      ({category.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Tag-uri Populare</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <Link
                    key={tag}
                    href={`/camperservice/blog?tag=${tag}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-blue-100 text-sm rounded-full transition-colors"
                  >
                    <Tag className="inline h-3 w-3 mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Abonează-te la Newsletter</h3>
              <p className="text-blue-100 mb-4">
                Primește cele mai noi articole și oferte direct în inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Email-ul tău"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-white"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Abonează-te
                </button>
              </form>
            </div>

            {/* Social Share */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">Urmărește-ne</h3>
              <div className="flex space-x-3">
                <a
                  href="https://facebook.com/camperservicecluj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com/camperservicecluj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-lg flex items-center justify-center transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Load More */}
      <div className="text-center pb-12">
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
          Încarcă Mai Multe Articole
        </button>
      </div>
    </div>
  )
}