'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Wrench, Shield, Clock, Star, ArrowRight, Truck, Package, Phone } from 'lucide-react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Service Profesional pentru Autorulote și Rulote",
      subtitle: "Experiență de peste 10 ani în întreținerea și repararea vehiculelor de camping",
      image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1920&h=1080&fit=crop",
      cta: "Programează o Vizită"
    },
    {
      title: "Accesorii Premium pentru Aventura Ta",
      subtitle: "Gamă completă de produse pentru confort maxim în călătoriile tale",
      image: "https://images.unsplash.com/photo-1543857182-68106299b6b2?w=1920&h=1080&fit=crop",
      cta: "Vezi Magazinul"
    },
    {
      title: "Pregătește-te pentru Sezonul de Camping",
      subtitle: "Verificări complete și pregătire pentru siguranța călătoriilor tale",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=1920&h=1080&fit=crop",
      cta: "Servicii Sezoniere"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      icon: Wrench,
      title: "Reparații și Întreținere",
      description: "Service complet pentru toate sistemele vehiculului dumneavoastră",
      features: ["Sisteme de apă", "Instalații electrice", "Sisteme de gaz", "Caroserie"]
    },
    {
      icon: Package,
      title: "Montaj Accesorii",
      description: "Instalare profesională a echipamentelor și accesoriilor",
      features: ["Aer condiționat", "Panouri solare", "Antene satelit", "Sisteme multimedia"]
    },
    {
      icon: Shield,
      title: "Verificări Tehnice",
      description: "Inspecții complete pentru siguranța dumneavoastră",
      features: ["Test etanșeitate", "Verificare gaz", "Test electric", "Diagnostic complet"]
    },
    {
      icon: Clock,
      title: "Pregătire Sezonieră",
      description: "Pregătim vehiculul pentru orice anotimp",
      features: ["Degivrare țevi", "Antigel", "Verificare baterii", "Etanșare"]
    }
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Aer Condiționat DualClima 8400H",
      price: "10.000 lei",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      category: "Climatizare"
    },
    {
      id: 2,
      name: "Panou Solar 200W Premium",
      price: "2.500 lei",
      image: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&h=400&fit=crop",
      category: "Energie Verde"
    },
    {
      id: 3,
      name: "Antenă Satelit Automată",
      price: "4.200 lei",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3e?w=600&h=400&fit=crop",
      category: "Multimedia"
    },
    {
      id: 4,
      name: "Invertor 2000W Sinus Pur",
      price: "3.800 lei",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
      category: "Electrice"
    }
  ]

  const testimonials = [
    {
      name: "Maria Popescu",
      rating: 5,
      text: "Service excelent! Am adus rulota pentru o revizie completă și echipa a fost foarte profesionistă. Recomand cu încredere!",
      vehicle: "Caravelair Antares 470"
    },
    {
      name: "Ion Gheorghe",
      rating: 5,
      text: "Montaj rapid și profesional pentru sistemul de aer condiționat. Prețuri corecte și personal foarte amabil.",
      vehicle: "Fiat Ducato Camper"
    },
    {
      name: "Ana Marin",
      rating: 5,
      text: "Cea mai bună alegere pentru service autorulote în Cluj! Atenție la detalii și soluții pentru orice problemă.",
      vehicle: "Hymer B-Class"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-xl mb-8 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <Link
                    href="/camperservice/contact"
                    className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105"
                  >
                    {slide.cta}
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 transition-all ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              } rounded-full`}
            />
          ))}
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-blue-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Ani Experiență</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Clienți Mulțumiți</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Asistență Urgențe</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-blue-100">Garanție Lucrări</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii pentru autorulote și rulote, 
              asigurând funcționarea perfectă a vehiculului dumneavoastră
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <ChevronRight className="h-4 w-4 mr-2 text-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/camperservice/servicii"
              className="inline-flex items-center bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Vezi Toate Serviciile
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Produse Recomandate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Accesorii și echipamente de top pentru confortul și siguranța călătoriilor tale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
              >
                <div className="relative h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors">
                      Detalii
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/camperservice/magazin"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Vezi Toate Produsele
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-xl text-gray-600">
              Peste 5000 de clienți mulțumiți ne recomandă
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ai Nevoie de Service sau Accesorii?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suntem aici să te ajutăm! Programează o vizită sau consultă magazinul nostru online
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camperservice/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Programează Service
            </Link>
            <Link
              href="/camperservice/magazin"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <Truck className="mr-2 h-5 w-5" />
              Magazin Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}