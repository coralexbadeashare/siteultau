'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Mountain, Users, Calendar, Play } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Descoperă Pasiunea pentru",
      highlight: "Escaladă",
      description: "Spațiu modern de escaladă și bouldering în inima Clujului",
      image: "https://images.unsplash.com/photo-1522163182402-834f871fd851?w=1600&h=900&fit=crop",
      cta: "Începe Aventura",
      link: "/skaiurbancrag/cursuri/initiere"
    },
    {
      title: "Cursuri pentru",
      highlight: "Toate Vârstele",
      description: "De la copii de 4 ani până la adulți, avem programe pentru toți",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop",
      cta: "Vezi Cursurile",
      link: "/skaiurbancrag/cursuri"
    },
    {
      title: "Antrenament",
      highlight: "Personalizat",
      description: "Îmbunătățește-ți tehnica cu instructorii noștri experimentați",
      image: "https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=1600&h=900&fit=crop",
      cta: "Rezervă o Sesiune",
      link: "/skaiurbancrag/cursuri/antrenament-personalizat"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { icon: <Mountain className="w-6 h-6" />, value: '500m²', label: 'Suprafață Cățărare' },
    { icon: <Users className="w-6 h-6" />, value: '1000+', label: 'Membri Activi' },
    { icon: <Calendar className="w-6 h-6" />, value: '7', label: 'Zile pe Săptămână' }
  ]

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
                  {slide.title}<br />
                  <span className="text-orange-500">{slide.highlight}</span>
                </h1>
                <p className="text-xl text-gray-200 mb-8">
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href={slide.link}
                    className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all group shadow-lg hover:shadow-orange-500/25"
                  >
                    {slide.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all">
                    <Play className="w-5 h-5 mr-2" />
                    Tur Virtual
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="absolute bottom-20 left-0 right-0">
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-2 text-orange-500 mb-1">
                    {stat.icon}
                    <span className="text-3xl font-bold text-white">{stat.value}</span>
                  </div>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
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
                ? 'bg-orange-500 w-12' 
                : 'bg-white/50 w-8 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

export default Hero