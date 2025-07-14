'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Filter, ShoppingBag, Apple, Cherry, Leaf } from 'lucide-react';

export default function Produse() {
  const [activeCategory, setActiveCategory] = useState('toate');

  const categories = [
    { id: 'toate', name: 'Toate Produsele', icon: ShoppingBag },
    { id: 'sucuri', name: 'Sucuri Naturale', icon: Apple },
    { id: 'dulceata', name: 'Dulcețuri', icon: Cherry },
    { id: 'preparate', name: 'Preparate', icon: Leaf },
  ];

  const products = [
    // Sucuri
    {
      id: 1,
      name: 'Suc Natural de Mere',
      category: 'sucuri',
      price: '18 RON',
      volume: '750ml',
      description: '100% mere românești presate la rece',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
      features: ['Fără zahăr adăugat', 'Fără conservanți', 'Pasteurizat']
    },
    {
      id: 2,
      name: 'Suc de Pere',
      category: 'sucuri',
      price: '20 RON',
      volume: '750ml',
      description: 'Pere dulci din livezile transilvănene',
      image: 'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0',
      features: ['Presare la rece', 'Bogat în fibre', 'Natural 100%']
    },
    {
      id: 3,
      name: 'Suc de Caise',
      category: 'sucuri',
      price: '22 RON',
      volume: '750ml',
      description: 'Caise coapte culese manual',
      image: 'https://images.unsplash.com/photo-1560155069-ad79768f2666',
      features: ['Vitamina A', 'Antioxidanți', 'Gust intens']
    },
    // Dulcețuri
    {
      id: 4,
      name: 'Dulceață de Căpșuni',
      category: 'dulceata',
      price: '16 RON',
      volume: '350g',
      description: 'Căpșuni proaspete și zahăr minim',
      image: 'https://images.unsplash.com/photo-1474625121024-7595bfbc57ac',
      features: ['60% fruct', 'Rețetă tradițională', 'Fără pectină']
    },
    {
      id: 5,
      name: 'Dulceață de Vișine',
      category: 'dulceata',
      price: '18 RON',
      volume: '350g',
      description: 'Vișine întregi în sirop natural',
      image: 'https://images.unsplash.com/photo-1577003811926-53b288a6e5d0',
      features: ['Fructe întregi', 'Gust echilibrat', 'Artizanal']
    },
    {
      id: 6,
      name: 'Gem de Prune',
      category: 'dulceata',
      price: '15 RON',
      volume: '350g',
      description: 'Prune românești fără zahăr adăugat',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b',
      features: ['Fără zahăr', 'Îndulcit natural', 'Textură fină']
    },
    // Preparate
    {
      id: 7,
      name: 'Zacuscă de Casă',
      category: 'preparate',
      price: '14 RON',
      volume: '300g',
      description: 'Legume coapte după rețeta bunicii',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7',
      features: ['Rețetă tradițională', 'Fără aditivi', 'Vegetal 100%']
    },
    {
      id: 8,
      name: 'Pastă de Ardei Copți',
      category: 'preparate',
      price: '16 RON',
      volume: '300g',
      description: 'Ardei copți pe vatră',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
      features: ['Ardei românești', 'Copt tradițional', 'Fără conservanți']
    },
    {
      id: 9,
      name: 'Murături Asortate',
      category: 'preparate',
      price: '12 RON',
      volume: '720g',
      description: 'Legume murate în saramură naturală',
      image: 'https://images.unsplash.com/photo-1598030343246-eec71cb44231',
      features: ['Fermentare naturală', 'Probiotice', 'Crocante']
    }
  ];

  const filteredProducts = activeCategory === 'toate' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Produsele Noastre Naturale
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descoperă gama completă de produse artizanale preparate cu dragoste 
            din ingrediente 100% naturale românești
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600 font-medium">Filtrează după categorie:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                    {product.volume}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">
                      {product.price}
                    </span>
                    <Link
                      href={`/amillaria/produse/${product.category}#${product.id}`}
                      className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
                    >
                      Vezi Detalii
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Comandă Produsele Tale Preferate
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Livrăm în toată țara produse proaspete, direct din atelierul nostru
            </p>
            <Link 
              href="/amillaria/contact" 
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
            >
              Plasează Comandă
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}