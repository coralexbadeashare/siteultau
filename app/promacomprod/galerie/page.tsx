'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ZoomIn } from 'lucide-react'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      title: "Atelier Reparații Motoare",
      category: "Atelier"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Echipamente Moderne",
      category: "Echipamente"
    },
    {
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop",
      title: "Transformator în Lucru",
      category: "Transformatoare"
    },
    {
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop",
      title: "Generator Industrial",
      category: "Generatoare"
    },
    {
      src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop",
      title: "Macara Service",
      category: "Macarale"
    },
    {
      src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?w=800&h=600&fit=crop",
      title: "Motor Electric Mare",
      category: "Motoare"
    },
    {
      src: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&h=600&fit=crop",
      title: "Testare Echipamente",
      category: "Testare"
    },
    {
      src: "https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=800&h=600&fit=crop",
      title: "Bobinaj Motor",
      category: "Bobinaje"
    },
    {
      src: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&h=600&fit=crop",
      title: "Echipă la Lucru",
      category: "Echipă"
    }
  ]

  const categories = ["Toate", ...Array.from(new Set(galleryImages.map(img => img.category)))]
  const [selectedCategory, setSelectedCategory] = useState("Toate")

  const filteredImages = selectedCategory === "Toate" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Galerie Foto
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Explorați atelierul nostru și vedeți echipamentele moderne pe care le folosim 
            pentru a oferi servicii de cea mai înaltă calitate
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="gallery-item group relative aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
                <div className="gallery-overlay">
                  <div className="text-center">
                    <ZoomIn className="w-12 h-12 text-white mb-2 mx-auto" />
                    <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                    <p className="text-blue-200">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                {filteredImages[selectedImage].title}
              </h3>
              <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}