"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ChevronRight, Search } from "lucide-react";
import { format } from "date-fns";
import { ro } from "date-fns/locale";

const categories = [
  { id: "toate", label: "Toate", count: 128 },
  { id: "ingrijire-par", label: "Îngrijire Păr", count: 32 },
  { id: "unghii", label: "Unghii și Manichiură", count: 28 },
  { id: "tratamente-faciale", label: "Tratamente Faciale", count: 24 },
  { id: "makeup", label: "Makeup și Beauty", count: 18 },
  { id: "tendinte", label: "Tendințe 2025", count: 15 },
  { id: "sfaturi", label: "Sfaturi și Trucuri", count: 11 },
];

const blogPosts = [
  {
    id: 1,
    title: "Tendințe Unghii 2025: Ce se poartă în acest sezon",
    excerpt: "Descoperă cele mai hot tendințe pentru unghii în 2025. De la culori vibrante la design-uri minimaliste, avem toate inspirațiile de care ai nevoie.",
    category: "unghii",
    author: "Maria Ionescu",
    date: new Date("2025-02-15"),
    readTime: 5,
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    featured: true,
  },
  {
    id: 2,
    title: "Ghidul complet pentru îngrijirea părului vopsit",
    excerpt: "Părul vopsit necesită o îngrijire specială. Află care sunt cei mai importanți pași și produsele recomandate pentru a-ți menține culoarea vibrantă.",
    category: "ingrijire-par",
    author: "Ana Popescu",
    date: new Date("2025-02-10"),
    readTime: 8,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800",
  },
  {
    id: 3,
    title: "Machiaj de primăvară: 5 look-uri fresh",
    excerpt: "Primăvara aduce cu ea dorința de prospețime și culoare. Descoperă 5 look-uri de machiaj perfecte pentru acest sezon.",
    category: "makeup",
    author: "Elena Dumitrescu",
    date: new Date("2025-02-05"),
    readTime: 6,
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
  },
  {
    id: 4,
    title: "Tratamente faciale: Când și de ce sunt necesare",
    excerpt: "Află când este momentul potrivit pentru diferite tipuri de tratamente faciale și cum să alegi tratamentul perfect pentru tipul tău de ten.",
    category: "tratamente-faciale",
    author: "Dr. Cristina Radu",
    date: new Date("2025-01-28"),
    readTime: 10,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
  },
  {
    id: 5,
    title: "Tunsori bob: Variante moderne pentru 2025",
    excerpt: "Bob-ul rămâne una dintre cele mai populare tunsori. Descoperă variantele moderne care fac furori în acest an.",
    category: "tendinte",
    author: "Andreea Stancu",
    date: new Date("2025-01-20"),
    readTime: 7,
    image: "https://images.unsplash.com/photo-1562322140-8baeacacf3df?w=800",
  },
  {
    id: 6,
    title: "Secretele unei manichiuri de lungă durată",
    excerpt: "Vrei ca manichiura ta să reziste mai mult? Împărtășim secretele profesioniștilor pentru o manichiură impecabilă.",
    category: "sfaturi",
    author: "Laura Mihăilescu",
    date: new Date("2025-01-15"),
    readTime: 5,
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800",
  },
  {
    id: 7,
    title: "Cum să-ți alegi nuanța perfectă de blond",
    excerpt: "Blondul are multe nuanțe și nu toate se potrivesc oricui. Află cum să alegi nuanța care te avantajează cel mai mult.",
    category: "ingrijire-par",
    author: "Maria Ionescu",
    date: new Date("2025-01-10"),
    readTime: 9,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800",
  },
  {
    id: 8,
    title: "Rutina de skincare pentru ten mixt",
    excerpt: "Tenul mixt poate fi o provocare. Descoperă rutina perfectă care echilibrează zonele uscate și grase ale tenului tău.",
    category: "tratamente-faciale",
    author: "Dr. Cristina Radu",
    date: new Date("2025-01-05"),
    readTime: 12,
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800",
  },
];

const POSTS_PER_PAGE = 6;

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("toate");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "toate" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Featured post (first post marked as featured)
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Blog Bella Chic
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sfaturi de frumusețe, tendințe și trucuri de la experții noștri
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Caută articole..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-12 pr-4 py-4 bg-white rounded-full shadow-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "toate" && !searchQuery && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-96 lg:h-full">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Articol Recomandat
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(featuredPost.date, "d MMMM yyyy", { locale: ro })}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime} min citire
                    </span>
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                      <div>
                        <p className="font-medium text-gray-900">{featuredPost.author}</p>
                        <p className="text-sm text-gray-600">Specialist Beauty</p>
                      </div>
                    </div>
                    <Link
                      href={`/bellachicstudio/blog/${featuredPost.id}`}
                      className="flex items-center text-pink-600 hover:text-pink-700 font-medium"
                    >
                      Citește mai mult
                      <ChevronRight className="h-5 w-5 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorii</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => {
                          setSelectedCategory(category.id);
                          setCurrentPage(1);
                        }}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? "bg-pink-600 text-white"
                            : "hover:bg-gray-100 text-gray-700"
                        }`}
                      >
                        <span>{category.label}</span>
                        <span className={`text-sm ${
                          selectedCategory === category.id ? "text-white/80" : "text-gray-500"
                        }`}>
                          ({category.count})
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {/* Popular Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tag-uri Populare</h3>
                  <div className="flex flex-wrap gap-2">
                    {["#nails2025", "#haircare", "#skincare", "#makeup", "#beauty", "#trending"].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-pink-100 hover:text-pink-700 cursor-pointer transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            {/* Blog Posts Grid */}
            <div className="lg:col-span-3">
              {paginatedPosts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600">Nu am găsit articole care să corespundă criteriilor tale.</p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {paginatedPosts.map((post, index) => (
                      <motion.article
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                      >
                        <Link href={`/bellachicstudio/blog/${post.id}`}>
                          <div className="relative h-48">
                            <Image
                              src={post.image}
                              alt={post.title}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                              <span className="text-xs font-medium text-gray-700 capitalize">
                                {categories.find(c => c.id === post.category)?.label}
                              </span>
                            </div>
                          </div>
                          <div className="p-6">
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center">
                                <Calendar className="h-3 w-3 mr-1" />
                                {format(post.date, "d MMM", { locale: ro })}
                              </span>
                              <span className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {post.readTime} min
                              </span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-pink-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center text-sm">
                                <User className="h-4 w-4 text-gray-400 mr-1" />
                                <span className="text-gray-600">{post.author}</span>
                              </div>
                              <span className="text-pink-600 hover:text-pink-700 font-medium flex items-center">
                                Citește
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </motion.article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-12 flex justify-center">
                      <nav className="flex items-center space-x-2">
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          Anterior
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-lg transition-all ${
                              currentPage === i + 1
                                ? "bg-pink-600 text-white shadow-md"
                                : "bg-white hover:shadow-md"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="px-4 py-2 rounded-lg bg-white shadow hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                        >
                          Următor
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Nu rata niciun articol nou!
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Abonează-te la newsletter și primește săptămânal cele mai noi sfaturi de frumusețe
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Abonează-te
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}