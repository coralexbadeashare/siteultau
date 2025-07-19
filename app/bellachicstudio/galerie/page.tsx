"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ZoomIn, Heart, Share2, Camera } from "lucide-react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";

const galleryCategories = [
  { id: "toate", label: "Toate", count: 48 },
  { id: "coafor", label: "Coafor", count: 16 },
  { id: "manichiura", label: "Manichiură", count: 12 },
  { id: "makeup", label: "Makeup", count: 8 },
  { id: "tratamente", label: "Tratamente", count: 6 },
  { id: "salon", label: "Salon", count: 6 },
];

const galleryImages = [
  // Coafor
  { id: 1, category: "coafor", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", title: "Transformare Blond Platinat", likes: 234 },
  { id: 2, category: "coafor", url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800", title: "Balayage Natural", likes: 189 },
  { id: 3, category: "coafor", url: "https://images.unsplash.com/photo-1562322140-8baeacacf3df?w=800", title: "Coafură de Mireasă", likes: 412 },
  { id: 4, category: "coafor", url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800", title: "Bob Asimetric Modern", likes: 156 },
  { id: 5, category: "coafor", url: "https://images.unsplash.com/photo-1523263685509-57c1d050d19f?w=800", title: "Păr Roșcat Vibrant", likes: 278 },
  { id: 6, category: "coafor", url: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800", title: "Bucle Perfecte", likes: 334 },
  { id: 7, category: "coafor", url: "https://images.unsplash.com/photo-1534445538923-ab38438550d2?w=800", title: "Pixie Cut Îndrăzneț", likes: 201 },
  { id: 8, category: "coafor", url: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800", title: "Ombre Caramel", likes: 167 },
  
  // Manichiură
  { id: 9, category: "manichiura", url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800", title: "French Manichiură Clasică", likes: 145 },
  { id: 10, category: "manichiura", url: "https://images.unsplash.com/photo-1606924842614-057c2b84d2b0?w=800", title: "Nail Art Geometric", likes: 223 },
  { id: 11, category: "manichiura", url: "https://images.unsplash.com/photo-1582127133783-430b3795e57e?w=800", title: "Unghii Gel Roz Pastel", likes: 189 },
  { id: 12, category: "manichiura", url: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800", title: "Design Floral Delicat", likes: 267 },
  { id: 13, category: "manichiura", url: "https://images.unsplash.com/photo-1610992015732-3e89e8af4ba5?w=800", title: "Manichiură Chrome", likes: 312 },
  { id: 14, category: "manichiura", url: "https://images.unsplash.com/photo-1607779097040-26e42e018d0c?w=800", title: "Unghii Marmură", likes: 198 },
  
  // Makeup
  { id: 15, category: "makeup", url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800", title: "Machiaj de Seară Glamour", likes: 456 },
  { id: 16, category: "makeup", url: "https://images.unsplash.com/photo-1516975080664-ed798f297bd2?w=800", title: "Natural No-Makeup Look", likes: 234 },
  { id: 17, category: "makeup", url: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800", title: "Smokey Eyes Dramatic", likes: 389 },
  { id: 18, category: "makeup", url: "https://images.unsplash.com/photo-1503236823255-94609f598e71?w=800", title: "Machiaj de Mireasă", likes: 512 },
  
  // Tratamente
  { id: 19, category: "tratamente", url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800", title: "Tratament Facial Hidratant", likes: 178 },
  { id: 20, category: "tratamente", url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800", title: "Masaj Relaxare", likes: 156 },
  { id: 21, category: "tratamente", url: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800", title: "Tratament Anti-Aging", likes: 234 },
  
  // Salon
  { id: 22, category: "salon", url: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800", title: "Zona Coafor", likes: 89 },
  { id: 23, category: "salon", url: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d7?w=800", title: "Sala de Tratamente", likes: 102 },
  { id: 24, category: "salon", url: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800", title: "Recepție Modernă", likes: 78 },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("toate");
  const [likedImages, setLikedImages] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
    
    // Load liked images from localStorage
    const saved = localStorage.getItem("likedImages");
    if (saved) {
      setLikedImages(JSON.parse(saved));
    }
  }, []);

  const filteredImages = selectedCategory === "toate" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const toggleLike = (imageId: number) => {
    const newLiked = likedImages.includes(imageId)
      ? likedImages.filter(id => id !== imageId)
      : [...likedImages, imageId];
    
    setLikedImages(newLiked);
    localStorage.setItem("likedImages", JSON.stringify(newLiked));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 opacity-70" />
          <div className="absolute top-20 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center bg-gradient-to-r from-pink-100 to-purple-100 rounded-full p-4 mb-6">
              <Camera className="h-10 w-10 text-pink-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6">
              Galeria Noastră
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Explorează portofoliul nostru și lasă-te inspirat de transformările realizate de echipa noastră talentată
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-600"
            >
              <div className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-pink-500" />
                <span>Peste 10k aprecieri</span>
              </div>
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-purple-500" />
                <span>{galleryImages.length}+ lucrări</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="h-5 w-5 text-blue-500" />
                <span>Partajează inspirația</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-white/80 backdrop-blur-xl shadow-lg z-40 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-xl"
                    : "bg-gray-100/80 text-gray-700 hover:bg-gray-200 hover:shadow-md"
                }`}
              >
                <span>{category.label}</span>
                <span className={`ml-2 text-sm ${
                  selectedCategory === category.id ? "text-white/80" : "text-gray-500"
                }`}>({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl animate-pulse shadow-lg" />
              ))}
            </div>
          ) : (
            <LightGallery
              speed={500}
              plugins={[lgThumbnail, lgZoom, lgFullscreen, lgShare]}
              elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {filteredImages.map((image, index) => (
                <motion.a
                  key={image.id}
                  href={image.url}
                  data-sub-html={`<h4>${image.title}</h4>`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <Image
                    src={image.url}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-white font-bold text-lg mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {image.title}
                      </h3>
                      <div className="flex items-center justify-between transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleLike(image.id);
                          }}
                          className="flex items-center space-x-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        >
                          <Heart
                            className={`h-5 w-5 transition-all ${
                              likedImages.includes(image.id) 
                                ? "fill-pink-400 text-pink-400 scale-110" 
                                : "text-white hover:text-pink-400"
                            }`}
                          />
                          <span className="text-sm font-medium text-white">
                            {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                          </span>
                        </button>
                        <div className="flex items-center space-x-2">
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                            <ZoomIn className="h-4 w-4 text-white" />
                          </div>
                          <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors cursor-pointer">
                            <Share2 className="h-4 w-4 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-xs font-semibold text-gray-800 capitalize">
                      {image.category}
                    </span>
                  </div>
                </motion.a>
              ))}
            </LightGallery>
          )}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Urmărește-ne pentru mai multe inspirații
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Postăm zilnic transformări, tutoriale și sfaturi de frumusețe pe Instagram
            </p>
            <a
              href="https://instagram.com/bellachicstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl font-semibold gap-3"
            >
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              @bellachicstudio
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}