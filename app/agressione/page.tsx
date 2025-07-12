'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, Trees, Truck, Award, Users, BarChart3, Leaf } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Soluții Complete de Ambalare",
      subtitle: "Produse de înaltă calitate pentru toate nevoile dvs. de ambalare",
      image: "https://images.unsplash.com/photo-1586527155314-1d25428324ff?q=80&w=2070"
    },
    {
      title: "Produse Forestiere Premium",
      subtitle: "Exploatare sustenabilă și produse certificate",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2070"
    },
    {
      title: "Distribuție Națională",
      subtitle: "Rețea extinsă de distribuție în toată România",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const stats = [
    { number: "27+", label: "Ani de Experiență" },
    { number: "500+", label: "Clienți Mulțumiți" },
    { number: "50+", label: "Angajați Dedicați" },
    { number: "100%", label: "Satisfacție Garantată" }
  ]

  const services = [
    {
      icon: Package,
      title: "Ambalaje din Hârtie",
      description: "Soluții complete de ambalare din hârtie și carton pentru toate industriile",
      link: "/agressione/produse/ambalaje"
    },
    {
      icon: Trees,
      title: "Produse Forestiere",
      description: "Exploatare sustenabilă și comercializare de produse din lemn certificate",
      link: "/agressione/produse/forestiere"
    },
    {
      icon: Truck,
      title: "Distribuție en-gros",
      description: "Rețea națională de distribuție cu livrare rapidă și eficientă",
      link: "/agressione/produse/distributie"
    }
  ]

  const features = [
    {
      icon: Award,
      title: "Calitate Certificată",
      description: "Produse certificate conform standardelor internaționale ISO"
    },
    {
      icon: Leaf,
      title: "Sustenabilitate",
      description: "Angajament pentru practici ecologice și sustenabile"
    },
    {
      icon: Users,
      title: "Echipă Expertă",
      description: "Personal calificat cu experiență vastă în industrie"
    },
    {
      icon: BarChart3,
      title: "Creștere Constantă",
      description: "Dezvoltare continuă și investiții în tehnologii moderne"
    }
  ]

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                href="/agressione/produse"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Descoperă Produsele
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/agressione/contact"
                className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center"
              >
                Solicită Ofertă
              </Link>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de produse și servicii pentru a satisface toate nevoile dumneavoastră
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <span className="text-red-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Află mai multe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              De Ce Să Alegeți Agressione?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experiență, calitate și dedicare pentru succesul afacerii dumneavoastră
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Începeți Colaborarea Cu Noi
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Contactați-ne astăzi pentru a discuta despre nevoile dumneavoastră și pentru a primi o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agressione/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Contactează-ne
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/agressione/despre"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              Despre Noi
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }
      `}</style>
    </>
  )
}