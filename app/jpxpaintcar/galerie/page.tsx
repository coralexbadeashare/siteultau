'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Car, Palette, Shield } from 'lucide-react'

interface GalleryItem {
  id: number
  category: 'vopsire' | 'retusuri' | 'protectie'
  title: string
  description: string
  before?: string
  after: string
  car: string
}

export default function GaleriePage() {
  const [selectedCategory, setSelectedCategory] = useState<'toate' | 'vopsire' | 'retusuri' | 'protectie'>('toate')
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)
  const [showBefore, setShowBefore] = useState(false)

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      category: 'vopsire',
      title: 'Vopsire Completă BMW Seria 5',
      description: 'Transformare completă din negru în albastru metalic',
      before: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&h=600&fit=crop',
      car: 'BMW Seria 5'
    },
    {
      id: 2,
      category: 'retusuri',
      title: 'Reparație Accident Lateral',
      description: 'Eliminare completă a urmelor de accident pe aripa laterală',
      before: 'https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&h=600&fit=crop',
      car: 'Mercedes C-Class'
    },
    {
      id: 3,
      category: 'protectie',
      title: 'Protecție Ceramică Audi Q7',
      description: 'Aplicare strat ceramic 9H pentru protecție maximă',
      after: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&h=600&fit=crop',
      car: 'Audi Q7'
    },
    {
      id: 4,
      category: 'vopsire',
      title: 'Revopsire Porsche 911',
      description: 'Restaurare culoare originală Guards Red',
      before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop',
      car: 'Porsche 911'
    },
    {
      id: 5,
      category: 'retusuri',
      title: 'Eliminare Zgârieturi Profunde',
      description: 'Reparație zgârieturi multiple pe portiera șoferului',
      before: 'https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop',
      car: 'Tesla Model S'
    },
    {
      id: 6,
      category: 'protectie',
      title: 'Folie PPF Range Rover',
      description: 'Protecție completă cu folie transparentă',
      after: 'https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&h=600&fit=crop',
      car: 'Range Rover Sport'
    },
    {
      id: 7,
      category: 'vopsire',
      title: 'Schimbare Culoare VW Golf',
      description: 'De la gri la verde militar mat',
      before: 'https://images.unsplash.com/photo-1609621838510-5ad474b7d25d?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&h=600&fit=crop',
      car: 'VW Golf GTI'
    },
    {
      id: 8,
      category: 'retusuri',
      title: 'Restaurare Bară Față',
      description: 'Reparație completă după impact frontal minor',
      before: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop',
      after: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop',
      car: 'Audi A4'
    },
    {
      id: 9,
      category: 'protectie',
      title: 'Detailing Complet Ferrari',
      description: 'Polish și protecție ceramică pentru supercar',
      after: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800&h=600&fit=crop',
      car: 'Ferrari 488'
    }
  ]

  const categories = [
    { id: 'toate', name: 'Toate Lucrările', icon: null },
    { id: 'vopsire', name: 'Vopsire Completă', icon: <Car className="w-5 h-5" /> },
    { id: 'retusuri', name: 'Retușuri', icon: <Palette className="w-5 h-5" /> },
    { id: 'protectie', name: 'Protecție', icon: <Shield className="w-5 h-5" /> }
  ]

  const filteredItems = selectedCategory === 'toate' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  const handlePrevImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1
    setSelectedImage(galleryItems[prevIndex])
    setShowBefore(false)
  }

  const handleNextImage = () => {
    if (!selectedImage) return
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id)
    const nextIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0
    setSelectedImage(galleryItems[nextIndex])
    setShowBefore(false)
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1632823470768-1b2a77b10e16?w=1600&h=600&fit=crop"
          alt="Galerie JPX Paint Car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Galerie Lucrări</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Rezultate care vorbesc de la sine
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id as typeof selectedCategory)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group cursor-pointer"
              >
                <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.car}</p>
                  </div>
                  {item.before && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                      Înainte/După
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Nu există lucrări în această categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4">
          <button
            onClick={() => {
              setSelectedImage(null)
              setShowBefore(false)
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-6xl mx-auto w-full">
            <div className="relative">
              <Image
                src={showBefore && selectedImage.before ? selectedImage.before : selectedImage.after}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              
              {selectedImage.before && (
                <button
                  onClick={() => setShowBefore(!showBefore)}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-white transition-colors"
                >
                  {showBefore ? 'Vezi După' : 'Vezi Înainte'}
                </button>
              )}
            </div>
            
            <div className="mt-6 text-white text-center">
              <h2 className="text-2xl font-bold mb-2">{selectedImage.title}</h2>
              <p className="text-lg opacity-90 mb-1">{selectedImage.car}</p>
              <p className="opacity-80">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vrei Să Vezi Mașina Ta Aici?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru a discuta despre transformarea pe care ți-o dorești
          </p>
          <a 
            href="/jpxpaintcar/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Solicită o Consultație
          </a>
        </div>
      </section>
    </div>
  )
}