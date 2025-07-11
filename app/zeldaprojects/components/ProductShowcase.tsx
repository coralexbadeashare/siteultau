'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Package, Leaf, Factory, Coffee } from 'lucide-react'

const ProductShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<'tuburi' | 'ecologice' | 'catering'>('tuburi')

  const categories = {
    tuburi: {
      name: 'Tuburi de Carton',
      icon: <Factory className="w-5 h-5" />,
      description: 'Tuburi industriale standard și cu rezistență sporită',
      products: [
        {
          name: 'Tuburi Standard',
          image: 'https://images.unsplash.com/photo-1586864387789-628af9feed72?w=600&h=400&fit=crop',
          specs: 'Diametre variate • Grosimi pereți personalizate',
          link: '/zeldaprojects/produse/tuburi-standard'
        },
        {
          name: 'Tuburi Rezistență Sporită',
          image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop',
          specs: 'Pentru industrii grele • Capacitate mare de încărcare',
          link: '/zeldaprojects/produse/tuburi-rezistenta'
        }
      ]
    },
    ecologice: {
      name: 'Ambalaje Ecologice',
      icon: <Leaf className="w-5 h-5" />,
      description: 'Soluții sustenabile pentru ambalare',
      products: [
        {
          name: 'Tacâmuri Biodegradabile',
          image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&h=400&fit=crop',
          specs: 'Lemn • PLA • Compostabile',
          link: '/zeldaprojects/produse/tacamuri'
        },
        {
          name: 'Ambalaje Trestie de Zahăr',
          image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=600&h=400&fit=crop',
          specs: '100% compostabile • Rezistente la căldură',
          link: '/zeldaprojects/produse/trestie-zahar'
        },
        {
          name: 'Pungi și Folii Bio',
          image: 'https://images.unsplash.com/photo-1604187351574-c75ca79f5807?w=600&h=400&fit=crop',
          specs: 'Biodegradabile • Certificate EN 13432',
          link: '/zeldaprojects/produse/folii'
        }
      ]
    },
    catering: {
      name: 'Ambalaje Catering',
      icon: <Coffee className="w-5 h-5" />,
      description: 'Soluții complete pentru HoReCa',
      products: [
        {
          name: 'Caserole PP/PET',
          image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=600&h=400&fit=crop',
          specs: 'Termosudabile • Transparente • Rezistente',
          link: '/zeldaprojects/produse/caserole-pp'
        },
        {
          name: 'Platouri Evenimente',
          image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop',
          specs: 'Design elegant • Capacități variate',
          link: '/zeldaprojects/produse/platouri'
        },
        {
          name: 'Cutii Pizza',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop',
          specs: 'Carton ondulat • Păstrează căldura',
          link: '/zeldaprojects/produse/cutii-pizza'
        }
      ]
    }
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Gama Noastră de Produse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la tuburi industriale la ambalaje ecologice, oferim soluții complete pentru toate nevoile dumneavoastră
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as 'tuburi' | 'ecologice' | 'catering')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === key
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="mb-8">
          <p className="text-center text-gray-600 mb-8">
            {categories[activeCategory].description}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories[activeCategory].products.map((product, index) => (
              <Link
                key={index}
                href={product.link}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {product.specs}
                  </p>
                  <div className="flex items-center text-green-600 font-medium">
                    <span>Vezi Detalii</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/zeldaprojects/produse"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg group"
          >
            <Package className="w-5 h-5 mr-2" />
            Vezi Toate Produsele
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase