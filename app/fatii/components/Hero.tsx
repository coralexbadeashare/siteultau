'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Award, Users, BookOpen, CheckCircle } from 'lucide-react'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Academia de Transport Profesional",
      subtitle: "Cursuri autorizate pentru profesioniști în transport",
      bg: "bg-gradient-to-r from-blue-900 to-blue-700"
    },
    {
      title: "Peste 20.000 de Absolvenți",
      subtitle: "Alătură-te comunității de profesioniști certificați",
      bg: "bg-gradient-to-r from-purple-900 to-purple-700"
    },
    {
      title: "Centre în Toată România",
      subtitle: "Pregătire profesională aproape de tine",
      bg: "bg-gradient-to-r from-green-900 to-green-700"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className={`absolute inset-0 ${slide.bg}`}>
            <div className="absolute inset-0 bg-black/40" />
          </div>
        </div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate-fade-in-delay">
            {slides[currentSlide].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Link
              href="/fatii/cursuri"
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-lg font-semibold">Vezi Cursurile</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/fatii/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-900 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <span className="text-lg font-semibold">Contactează-ne</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fade-in-delay-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-200">
              <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certificări Recunoscute</h3>
              <p className="text-gray-200">Diplome valabile în toată Uniunea Europeană</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-200">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instructori Experți</h3>
              <p className="text-gray-200">63 de formatori autorizați cu experiență vastă</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 transform hover:scale-105 transition-all duration-200">
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Materiale Actualizate</h3>
              <p className="text-gray-200">Conform ultimelor reglementări legislative</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" />
    </section>
  )
}