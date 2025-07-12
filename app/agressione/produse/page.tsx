'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Package, Trees, Truck, ArrowRight, Check, Star } from 'lucide-react'
import { useState } from 'react'

export default function ProdusePage() {
  const [activeCategory, setActiveCategory] = useState<'ambalaje' | 'forestiere' | 'distributie'>('ambalaje')

  const categories = {
    ambalaje: {
      title: "Ambalaje din Hârtie",
      icon: Package,
      description: "Soluții complete de ambalare pentru toate industriile",
      products: [
        {
          name: "Cutii din Carton Ondulat",
          description: "Cutii rezistente pentru transport și depozitare",
          features: ["Personalizabile", "Reciclabile 100%", "Diverse dimensiuni"],
          image: "https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?q=80&w=2070"
        },
        {
          name: "Pungi de Hârtie",
          description: "Pungi ecologice pentru retail și industrie",
          features: ["Biodegradabile", "Imprimate personalizat", "Rezistente"],
          image: "https://images.unsplash.com/photo-1607823489283-1deb240b9e68?q=80&w=2070"
        },
        {
          name: "Ambalaje Protectoare",
          description: "Soluții de protecție pentru produse fragile",
          features: ["Hârtie antistatică", "Folie cu bule", "Carton ondulat"],
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070"
        },
        {
          name: "Etichete și Role de Hârtie",
          description: "Etichete autoadezive și role pentru diverse aplicații",
          features: ["Termice", "Autoadezive", "Personalizate"],
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2070"
        }
      ]
    },
    forestiere: {
      title: "Produse Forestiere",
      icon: Trees,
      description: "Lemn și produse derivate de înaltă calitate",
      products: [
        {
          name: "Cherestea",
          description: "Lemn de construcție și mobilier",
          features: ["Certificat FSC", "Uscat în cuptor", "Diverse esențe"],
          image: "https://images.unsplash.com/photo-1506806732259-39c2d0268443?q=80&w=2070"
        },
        {
          name: "Plăci OSB și PAL",
          description: "Plăci pentru construcții și mobilier",
          features: ["Rezistente la umiditate", "Diverse grosimi", "Calitate premium"],
          image: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=2069"
        },
        {
          name: "Peleți din Lemn",
          description: "Combustibil ecologic pentru încălzire",
          features: ["ENplus A1", "Putere calorică mare", "Ambalați în saci"],
          image: "https://images.unsplash.com/photo-1609619385002-f40f5f82f6e1?q=80&w=2070"
        },
        {
          name: "Paleți din Lemn",
          description: "Soluții logistice pentru transport",
          features: ["EPAL/EUR", "Tratați termic", "Personalizabili"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
        }
      ]
    },
    distributie: {
      title: "Distribuție en-gros",
      icon: Truck,
      description: "Rețea națională de distribuție rapidă și eficientă",
      products: [
        {
          name: "Distribuție Națională",
          description: "Acoperire completă pe teritoriul României",
          features: ["Livrare în 24-48h", "Tracking în timp real", "Flotă modernă"],
          image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
        },
        {
          name: "Depozitare și Logistică",
          description: "Soluții complete de stocare și manipulare",
          features: ["Depozite climatizate", "Sisteme WMS", "Cross-docking"],
          image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070"
        },
        {
          name: "Servicii Value-Added",
          description: "Servicii suplimentare pentru optimizare",
          features: ["Re-ambalare", "Etichetare", "Asamblare kituri"],
          image: "https://images.unsplash.com/photo-1566576721346-6b1a7e0f1af5?q=80&w=2070"
        },
        {
          name: "Consultanță Supply Chain",
          description: "Optimizarea lanțului de aprovizionare",
          features: ["Analiză costuri", "Rutare optimă", "Reducere stocuri"],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
        }
      ]
    }
  }

  const currentCategory = categories[activeCategory]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
          alt="Produse Agressione"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Produsele Noastre</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Soluții complete pentru ambalare, produse forestiere și distribuție
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-gray-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as 'ambalaje' | 'forestiere' | 'distributie')}
                  className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold transition-all ${
                    activeCategory === key
                      ? 'bg-red-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentCategory.products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/agressione/contact"
                    className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 group-hover:translate-x-2 transition-all"
                  >
                    Solicită Ofertă
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              De Ce Să Alegeți Produsele Noastre?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Calitate garantată și servicii de excepție
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Calitate Certificată",
                description: "Toate produsele sunt certificate conform standardelor internaționale",
                icon: Star
              },
              {
                title: "Prețuri Competitive",
                description: "Oferim cele mai bune prețuri fără a compromite calitatea",
                icon: Package
              },
              {
                title: "Livrare Rapidă",
                description: "Sistem logistic eficient pentru livrări prompte în toată țara",
                icon: Truck
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl text-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Aveți Nevoie de Produsele Noastre?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactați-ne pentru a discuta despre nevoile dumneavoastră specifice și pentru a primi o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agressione/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Solicită Ofertă
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+40264123456"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
            >
              Sună Acum: +40 264 123 456
            </a>
          </div>
        </div>
      </section>
    </>
  )
}