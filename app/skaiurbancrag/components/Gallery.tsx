'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=800&h=600&fit=crop', alt: 'Perete de escaladă principal' },
    { src: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop', alt: 'Zona de bouldering' },
    { src: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&h=600&fit=crop', alt: 'Curs pentru copii' },
    { src: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop', alt: 'Antrenament avansat' },
    { src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop', alt: 'Sala de yoga' },
    { src: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=800&h=600&fit=crop', alt: 'Competiție internă' },
    { src: 'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=800&h=600&fit=crop', alt: 'Trasee colorate' },
    { src: 'https://images.unsplash.com/photo-1595909315417-2edd382a56dc?w=800&h=600&fit=crop', alt: 'Echipament modern' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Galerie <span className="text-orange-500">Foto</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descoperă atmosfera din sala noastră și bucuria escaladei
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery