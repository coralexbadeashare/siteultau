'use client'

import { ArrowRight, Package, Leaf, Award } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Tuburi de Carton Industrial",
      subtitle: "100% Reciclat",
      description: "Producător român de tuburi de carton pentru industrii textile, auto și tipografii",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=900&fit=crop",
      cta: "Descoperă Produsele",
      link: "/zeldaprojects/produse/tuburi-standard"
    },
    {
      title: "Ambalaje Ecologice",
      subtitle: "Pentru Un Viitor Sustenabil",
      description: "Soluții complete de ambalare biodegradabilă și compostabilă",
      image: "https://images.unsplash.com/photo-1536939459926-301728717817?w=1600&h=900&fit=crop",
      cta: "Vezi Catalogul",
      link: "/zeldaprojects/produse"
    },
    {
      title: "Certificat ISO 14001:2015",
      subtitle: "Calitate Garantată",
      description: "Standarde internaționale pentru managementul mediului",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&h=900&fit=crop",
      cta: "Află Mai Multe",
      link: "/zeldaprojects/despre-noi"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${
                  index === currentSlide 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-10 absolute'
                }`}
              >
                <div className="flex items-center space-x-2 mb-4">
                  <Leaf className="w-6 h-6 text-green-500" />
                  <span className="text-green-500 font-semibold">{slide.subtitle}</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors group"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/zeldaprojects/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white/10 backdrop-blur text-white border border-white/20 rounded-lg hover:bg-white/20 transition-colors"
                  >
                    Solicită Ofertă
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Quick Stats */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center space-x-2 text-green-500 mb-1">
                <Package className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">2020</span>
              </div>
              <p className="text-sm text-gray-300">Înființare</p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 text-green-500 mb-1">
                <Award className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">ISO</span>
              </div>
              <p className="text-sm text-gray-300">14001:2015</p>
            </div>
            <div>
              <div className="flex items-center justify-center space-x-2 text-green-500 mb-1">
                <Leaf className="w-5 h-5" />
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <p className="text-sm text-gray-300">Reciclat</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero