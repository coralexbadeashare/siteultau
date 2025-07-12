'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Ruler, 
  Weight, 
  Shield,
  Phone,
  CheckCircle,
  Info,
  ArrowLeft
} from 'lucide-react'

export default function RemorciDeInchiriatPage() {
  const [selectedCategory, setSelectedCategory] = useState('toate')

  const trailers = [
    {
      id: 1,
      name: "Remorcă Mică",
      category: "mica",
      dimensions: "2m x 1.2m x 0.4m",
      capacity: "500 kg",
      price: "80 lei/zi",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop",
      features: ["Ideală pentru bagaje", "Ușor de manevrat", "Frână de mână", "Prelată inclusă"],
      available: true
    },
    {
      id: 2,
      name: "Remorcă Medie",
      category: "medie",
      dimensions: "3m x 1.5m x 0.5m",
      capacity: "750 kg",
      price: "120 lei/zi",
      image: "https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=400&h=300&fit=crop",
      features: ["Pentru mobilier", "Sistem de prindere", "Roți duble", "Asigurare inclusă"],
      available: true
    },
    {
      id: 3,
      name: "Remorcă Mare",
      category: "mare",
      dimensions: "4m x 2m x 0.6m",
      capacity: "1500 kg",
      price: "180 lei/zi",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop",
      features: ["Transport marfă", "Sistem hidraulic", "Frâne pe toate roțile", "GPS tracking"],
      available: true
    },
    {
      id: 4,
      name: "Platformă Auto",
      category: "platforma",
      dimensions: "4.5m x 2.1m",
      capacity: "2000 kg",
      price: "250 lei/zi",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=300&fit=crop",
      features: ["Transport auto", "Rampă încărcare", "Sistem blocare roți", "Winch electric"],
      available: false
    },
    {
      id: 5,
      name: "Remorcă Basculantă",
      category: "basculanta",
      dimensions: "3m x 1.8m x 0.6m",
      capacity: "1000 kg",
      price: "150 lei/zi",
      image: "https://images.unsplash.com/photo-1516649302380-1ba4b3a80c80?w=400&h=300&fit=crop",
      features: ["Sistem basculare", "Pentru moloz", "Construcție robustă", "Ușor de descărcat"],
      available: true
    },
    {
      id: 6,
      name: "Remorcă Frigorifică",
      category: "speciala",
      dimensions: "3.5m x 1.8m x 2m",
      capacity: "800 kg",
      price: "300 lei/zi",
      image: "https://images.unsplash.com/photo-1562113215-819c61c2e0e8?w=400&h=300&fit=crop",
      features: ["Temperatură controlată", "Pentru alimente", "Agregat frigorific", "Monitorizare temperatură"],
      available: true
    }
  ]

  const categories = [
    { id: 'toate', name: 'Toate' },
    { id: 'mica', name: 'Mici' },
    { id: 'medie', name: 'Medii' },
    { id: 'mare', name: 'Mari' },
    { id: 'platforma', name: 'Platforme' },
    { id: 'basculanta', name: 'Basculante' },
    { id: 'speciala', name: 'Speciale' }
  ]

  const filteredTrailers = selectedCategory === 'toate' 
    ? trailers 
    : trailers.filter(trailer => trailer.category === selectedCategory)

  const rentalConditions = [
    "Vârsta minimă 21 ani și permis categoria B de minim 2 ani",
    "Document de identitate valabil (CI/Pașaport)",
    "Garanție returnabilă între 500-1500 lei (în funcție de remorcă)",
    "Contract de închiriere semnat",
    "Verificare și predare-primire cu proces verbal"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <Link href="/welmius" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Remorci de Închiriat
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Alegem cea mai potrivită remorcă pentru nevoile tale. 
            Echipamente moderne, verificate tehnic și asigurate.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Trailers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrailers.map((trailer) => (
              <div key={trailer.id} className="trailer-card">
                {!trailer.available && (
                  <div className="badge">Indisponibil</div>
                )}
                <div className="aspect-video relative">
                  <Image
                    src={trailer.image}
                    alt={trailer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {trailer.name}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <Ruler className="w-5 h-5 mr-2 text-orange-500" />
                      <span>{trailer.dimensions}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Weight className="w-5 h-5 mr-2 text-orange-500" />
                      <span>Capacitate: {trailer.capacity}</span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-3xl font-bold text-orange-600">
                      {trailer.price}
                    </p>
                    <p className="text-sm text-gray-500">*Prețuri pentru închirieri mai lungi - negociabile</p>
                  </div>
                  <div className="space-y-1 mb-6">
                    {trailer.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="tel:0742020254" 
                    className={`btn-primary w-full justify-center ${!trailer.available ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={(e) => !trailer.available && e.preventDefault()}
                  >
                    {trailer.available ? 'Rezervă Acum' : 'Indisponibil'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Conditions */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Info className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Condiții de Închiriere
                </h2>
              </div>
              <div className="space-y-4">
                {rentalConditions.map((condition, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{condition}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-orange-50 rounded-xl">
                <p className="text-gray-700 font-medium mb-4">
                  Pentru rezervări și informații suplimentare:
                </p>
                <a href="tel:0742020254" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  0742 020 254
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}