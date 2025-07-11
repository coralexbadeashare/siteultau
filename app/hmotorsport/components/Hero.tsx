'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Play, Car, Wrench, Trophy } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "We Service",
      subtitle: "You Race",
      description: "Asistență tehnică completă pentru competiții de motorsport",
      image: "https://images.unsplash.com/photo-1583500178450-e59e4309b57d?w=1600&h=900&fit=crop",
      cta: "Descoperă Serviciile",
      link: "/hmotorsport/servicii"
    },
    {
      title: "Mașini de Curse",
      subtitle: "Pentru Campioni",
      description: "Închiriere automobile pentru competiții naționale și internaționale",
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1600&h=900&fit=crop",
      cta: "Vezi Flota",
      link: "/hmotorsport/masini"
    },
    {
      title: "Service Auto",
      subtitle: "Profesional",
      description: "Reparații și întreținere pentru mașini de curse și stradale",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1600&h=900&fit=crop",
      cta: "Programează-te",
      link: "/hmotorsport/contact"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-2">
                  {slide.title}
                  <span className="text-red-500"> {slide.subtitle}</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all group shadow-lg hover:shadow-red-600/25"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                    <Play className="w-5 h-5 mr-2" />
                    Vezi Video
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="absolute bottom-10 left-0 right-0">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-red-500 mb-1">
                  <Trophy className="w-6 h-6" />
                  <span className="text-3xl font-bold text-white">15+</span>
                </div>
                <p className="text-sm text-gray-300">Ani Experiență</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-red-500 mb-1">
                  <Car className="w-6 h-6" />
                  <span className="text-3xl font-bold text-white">50+</span>
                </div>
                <p className="text-sm text-gray-300">Curse Asistate</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 text-red-500 mb-1">
                  <Wrench className="w-6 h-6" />
                  <span className="text-3xl font-bold text-white">24/7</span>
                </div>
                <p className="text-sm text-gray-300">Suport Tehnic</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-red-500 w-12' 
                : 'bg-white/50 w-8 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero