'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export default function GalerieFotoPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
      alt: "Mutare apartament Cluj",
      category: "Mutări Rezidențiale"
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      alt: "Transport mobilă",
      category: "Transport Mobilă"
    },
    {
      src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
      alt: "Duba transport marfă",
      category: "Vehicule"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop",
      alt: "Echipa la lucru",
      category: "Echipa Noastră"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      alt: "Mutare birou",
      category: "Mutări Corporate"
    },
    {
      src: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop",
      alt: "Ambalare profesională",
      category: "Servicii Ambalare"
    },
    {
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
      alt: "Flotă vehicule",
      category: "Vehicule"
    },
    {
      src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop",
      alt: "Transport mobilier",
      category: "Transport Mobilă"
    },
    {
      src: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&h=600&fit=crop",
      alt: "Mutare casă",
      category: "Mutări Rezidențiale"
    },
    {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop",
      alt: "Relocare firmă",
      category: "Mutări Corporate"
    },
    {
      src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=800&h=600&fit=crop",
      alt: "Împachetare cutii",
      category: "Servicii Ambalare"
    },
    {
      src: "https://images.unsplash.com/photo-1520038410233-7141be7e6f97?w=800&h=600&fit=crop",
      alt: "Transport marfă voluminoasă",
      category: "Transport Marfă"
    }
  ];

  const categories = ["Toate", ...Array.from(new Set(galleryImages.map(img => img.category)))];
  const [selectedCategory, setSelectedCategory] = useState("Toate");

  const filteredImages = selectedCategory === "Toate" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevious = () => {
    if (selectedImage === null) return;
    const newIndex = selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1;
    setSelectedImage(newIndex);
  };

  const handleNext = () => {
    if (selectedImage === null) return;
    const newIndex = selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1;
    setSelectedImage(newIndex);
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
            <Camera className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Galerie Foto
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explorați portofoliul nostru de lucrări și vedeți calitatea serviciilor noastre
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="font-semibold">{image.alt}</p>
                    <p className="text-sm text-gray-300">{image.category}</p>
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X className="h-8 w-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="max-w-5xl max-h-[90vh] relative">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              width={1200}
              height={900}
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <p className="text-xl font-semibold">{filteredImages[selectedImage].alt}</p>
              <p className="text-gray-300">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Realizările Noastre în Cifre</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">1000+</p>
              <p className="text-gray-600">Mutări Realizate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600 mb-2">500+</p>
              <p className="text-gray-600">Clienți Corporate</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600 mb-2">15+</p>
              <p className="text-gray-600">Vehicule în Flotă</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-orange-600 mb-2">24/7</p>
              <p className="text-gray-600">Disponibilitate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Impresionat de Lucrările Noastre?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contactați-ne pentru a discuta despre proiectul dvs.
          </p>
          <a
            href="tel:0752816138"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
          >
            Solicită Serviciile Noastre
          </a>
        </div>
      </section>
    </div>
  );
}