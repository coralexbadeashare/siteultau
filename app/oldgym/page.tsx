'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  ArrowRight, 
  Dumbbell, 
  Users, 
  Trophy, 
  Clock,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Target,
  Heart
} from 'lucide-react'

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const features = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Echipamente Premium",
      description: "Aparate de ultimă generație de la cei mai buni producători mondiali"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Antrenori Experți",
      description: "Profesioniști certificați cu experiență în competiții internaționale"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Rezultate Dovedite",
      description: "Mii de transformări reușite și campioni formați"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Program Flexibil",
      description: "Deschis 7 zile pe săptămână, de la 6:00 la 22:00"
    }
  ]

  const classes = [
    {
      name: "Bodybuilding",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop",
      description: "Construiește masa musculară și sculptează-ți corpul",
      intensity: "Intensitate Mare"
    },
    {
      name: "CrossFit",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop",
      description: "Antrenament funcțional de înaltă intensitate",
      intensity: "Intensitate Extremă"
    },
    {
      name: "Yoga & Pilates",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      description: "Flexibilitate, echilibru și pace interioară",
      intensity: "Intensitate Medie"
    },
    {
      name: "Box & MMA",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop",
      description: "Arte marțiale și autoapărare",
      intensity: "Intensitate Mare"
    }
  ]

  const testimonials = [
    {
      name: "Andrei Popescu",
      role: "Campion National Bodybuilding",
      text: "Old Gym mi-a schimbat complet viața. În doar 2 ani am reușit să câștig primul loc la naționale.",
      rating: 5,
      image: "AP"
    },
    {
      name: "Maria Ionescu",
      role: "Fitness Enthusiast",
      text: "Atmosfera de aici este incredibilă! Antrenorii sunt dedicați și echipamentele sunt de top.",
      rating: 5,
      image: "MI"
    },
    {
      name: "Vlad Dumitru",
      role: "CrossFit Athlete",
      text: "Cel mai bun gym din Cluj! Comunitatea este fantastică și te motivează să depășești limite.",
      rating: 5,
      image: "VD"
    }
  ]

  const stats = [
    { number: "5000+", label: "Membri Activi" },
    { number: "15+", label: "Ani Experiență" },
    { number: "50+", label: "Clase/Săptămână" },
    { number: "98%", label: "Clienți Mulțumiți" }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
            alt="Old Gym Hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-7xl md:text-9xl text-white mb-4 animate-slide-down">
            OLD GYM
          </h1>
          <p className="text-2xl md:text-3xl text-amber-500 font-bold mb-8 animate-slide-up">
            FORGE YOUR LEGACY
          </p>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 animate-fade-in">
            Transformă-ți corpul și mintea în cel mai exclusiv templu al fitnessului din Cluj. 
            Alătură-te elitei și descoperă puterea din tine.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link 
              href="/oldgym/preturi" 
              className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center group"
            >
              Începe Transformarea
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/oldgym/clase" 
              className="bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center"
            >
              <Play className="mr-2 w-5 h-5" />
              Vezi Clasele
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gym-pattern">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
              De Ce <span className="gradient-text">OLD GYM</span>?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Nu suntem doar o sală de fitness. Suntem o comunitate de campioni.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-glow bg-gray-900 rounded-xl p-8 text-center hover-lift"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-amber-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-bebas text-6xl md:text-7xl text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-xl text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
              Clase <span className="gradient-text">Populare</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Alege din peste 50 de clase pe săptămână, toate conduse de antrenori experți
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {classes.map((cls, index) => (
              <Link 
                key={index}
                href="/oldgym/clase"
                className="group relative overflow-hidden rounded-xl hover-lift"
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-red-600 text-white text-xs px-3 py-1 rounded-full inline-block mb-3">
                      {cls.intensity}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{cls.name}</h3>
                    <p className="text-gray-300">{cls.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/oldgym/clase" 
              className="inline-flex items-center text-amber-500 font-semibold text-lg hover:text-amber-400 transition-colors"
            >
              Vezi toate clasele
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=1920&h=1080&fit=crop"
            alt="Transformation"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-bebas text-5xl md:text-6xl text-white mb-8">
              Transformarea Ta Începe <span className="gradient-text">Astăzi</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Setează Obiective</h3>
                <p className="text-gray-400">Definim împreună țelurile tale fitness</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Zap className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Antrenează-te Intens</h3>
                <p className="text-gray-400">Programe personalizate pentru rezultate maxime</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Heart className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trăiește Sănătos</h3>
                <p className="text-gray-400">Adoptă un stil de viață care te împlinește</p>
              </div>
            </div>
            <Link 
              href="/oldgym/contact" 
              className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
            >
              Consultație Gratuită
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-5xl md:text-6xl text-white mb-4">
              Povești de <span className="gradient-text">Succes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Membrii noștri vorbesc despre experiența Old Gym
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-8 h-8" />
                </button>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentTestimonial ? 'bg-amber-500 w-8' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-8 h-8" />
                </button>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-amber-500 fill-current" />
                  ))}
                </div>
                <p className="text-xl text-gray-300 italic mb-6">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </p>
                <h3 className="text-xl font-bold text-white">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-amber-500">
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-amber-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-5xl md:text-6xl text-white mb-6">
            Ești Gata Să Începi?
          </h2>
          <p className="text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Primii 50 de membri noi beneficiază de 20% reducere la orice abonament anual
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/oldgym/preturi" 
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
            >
              Vezi Prețurile
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/oldgym/contact" 
              className="bg-black/20 text-white border-2 border-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center"
            >
              Programează Tur Ghidat
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}