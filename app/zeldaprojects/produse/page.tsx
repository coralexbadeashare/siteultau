'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Package, Leaf, Factory, Coffee, Search, ArrowRight } from 'lucide-react'

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'Toate Produsele', icon: <Package className="w-4 h-4" /> },
    { id: 'tuburi', name: 'Tuburi de Carton', icon: <Factory className="w-4 h-4" /> },
    { id: 'eco', name: 'Ambalaje Ecologice', icon: <Leaf className="w-4 h-4" /> },
    { id: 'catering', name: 'Ambalaje Catering', icon: <Coffee className="w-4 h-4" /> }
  ]

  const products = [
    {
      id: 1,
      category: 'tuburi',
      name: 'Tuburi Standard',
      description: 'Tuburi de carton pentru diverse aplicații industriale',
      image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&h=400&fit=crop',
      features: ['Diametre: 50-200mm', 'Grosime perete: 2-15mm', 'Lungime: până la 6m'],
      link: '/zeldaprojects/produse/tuburi-standard'
    },
    {
      id: 2,
      category: 'tuburi',
      name: 'Tuburi cu Rezistență Sporită',
      description: 'Pentru aplicații ce necesită rezistență superioară',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
      features: ['Capacitate încărcare mare', 'Rezistență la umiditate', 'Aplicații speciale'],
      link: '/zeldaprojects/produse/tuburi-rezistenta'
    },
    {
      id: 3,
      category: 'eco',
      name: 'Tacâmuri Biodegradabile',
      description: 'Furculițe, linguri și cuțite din materiale naturale',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=400&fit=crop',
      features: ['Lemn de mesteacăn', 'PLA compostabil', 'Certificate EN 13432'],
      link: '/zeldaprojects/produse/tacamuri'
    },
    {
      id: 4,
      category: 'eco',
      name: 'Ambalaje Trestie de Zahăr',
      description: 'Caserole și farfurii din bagasă',
      image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=600&h=400&fit=crop',
      features: ['100% compostabile', 'Rezistente la grăsimi', 'Microunde safe'],
      link: '/zeldaprojects/produse/trestie-zahar'
    },
    {
      id: 5,
      category: 'eco',
      name: 'Pungi și Folii Bio',
      description: 'Alternative ecologice la plasticul convențional',
      image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&h=400&fit=crop',
      features: ['Biodegradabile', 'Rezistente', 'Diverse dimensiuni'],
      link: '/zeldaprojects/produse/folii'
    },
    {
      id: 6,
      category: 'catering',
      name: 'Caserole PP',
      description: 'Caserole transparente pentru alimente',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop',
      features: ['Capac etanș', 'Microunde safe', 'Reutilizabile'],
      link: '/zeldaprojects/produse/caserole-pp'
    },
    {
      id: 7,
      category: 'catering',
      name: 'Caserole PET',
      description: 'Ideale pentru salate și produse reci',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop',
      features: ['Cristal clear', 'Reciclabile', 'Stivuibile'],
      link: '/zeldaprojects/produse/caserole-pet'
    },
    {
      id: 8,
      category: 'catering',
      name: 'Platouri Evenimente',
      description: 'Soluții elegante pentru catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
      features: ['Design premium', 'Compartimentate', 'Capace transparente'],
      link: '/zeldaprojects/produse/platouri'
    },
    {
      id: 9,
      category: 'catering',
      name: 'Cutii Pizza',
      description: 'Cutii din carton pentru pizza',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
      features: ['Carton ondulat', 'Păstrează căldura', 'Personalizabile'],
      link: '/zeldaprojects/produse/cutii-pizza'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catalogul Nostru de Produse</h1>
          <p className="text-xl text-green-50 max-w-3xl">
            Descoperă gama completă de tuburi de carton industrial și ambalaje ecologice. 
            Toate produsele noastre respectă cele mai înalte standarde de calitate și sustenabilitate.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activeFilter === category.id
                      ? 'bg-green-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.icon}
                  <span>{category.name}</span>
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Caută produse..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nu am găsit produse
              </h3>
              <p className="text-gray-600">
                Încercați să modificați filtrele sau termenii de căutare
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map(product => (
                <Link
                  key={product.id}
                  href={product.link}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      {product.category === 'eco' && (
                        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <Leaf className="w-4 h-4" />
                          <span>Eco</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-green-600 font-medium group-hover:text-green-700">
                      <span>Vezi Detalii</span>
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">
              Nu ați găsit ce căutați?
            </h3>
            <p className="text-green-50 mb-6 max-w-2xl mx-auto">
              Contactați-ne pentru soluții personalizate. Putem produce tuburi și ambalaje 
              conform specificațiilor dumneavoastră.
            </p>
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Solicitați Ofertă Personalizată
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsPage