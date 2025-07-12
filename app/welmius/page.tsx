'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Truck, 
  Package, 
  Shield, 
  Clock, 
  Phone,
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Wrench
} from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Închiriere Remorci",
      description: "Remorci de toate dimensiunile pentru transportul mărfurilor tale. Echipamente moderne și bine întreținute.",
      link: "/welmius/remorci-de-inchiriat",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Tractare Auto",
      description: "Servicii profesionale de tractare pentru toate tipurile de vehicule. Disponibil 24/7 pentru urgențe.",
      link: "/welmius/tractare-auto-transport-marfa",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Transport Marfă",
      description: "Soluții complete de transport pentru mărfuri de toate dimensiunile. Livrare rapidă și sigură.",
      link: "/welmius/tractare-auto-transport-marfa",
      color: "from-purple-500 to-purple-600"
    }
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Echipamente Verificate",
      description: "Toate remorcile și platformele sunt verificate tehnic și asigurate"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Disponibilitate 24/7",
      description: "Servicii de tractare disponibile non-stop pentru urgențe"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Personal Profesionist",
      description: "Echipă experimentată și dedicată pentru servicii de calitate"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Prețuri Competitive",
      description: "Tarife transparente și accesibile pentru toate serviciile"
    }
  ]

  const stats = [
    { number: "500+", label: "Clienți Mulțumiți" },
    { number: "50+", label: "Remorci Disponibile" },
    { number: "24/7", label: "Disponibilitate" },
    { number: "10+", label: "Ani Experiență" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="hero-gradient min-h-[70vh] flex items-center relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeInUp">
                Închiriere Remorci &
                <span className="block text-yellow-400">Transport Profesional</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                Partenerul tău de încredere pentru închirieri de remorci, 
                tractări auto și transport marfă în Cluj și împrejurimi.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <Link href="/welmius/remorci-de-inchiriat" className="btn-secondary bg-white">
                  Vezi Remorci
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="tel:0742020254" className="btn-primary">
                  <Phone className="w-5 h-5" />
                  Sună Acum
                </a>
              </div>
            </div>
            <div className="relative animate-float">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
                  alt="Remorci și Transport"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">100%</p>
                    <p className="text-sm text-gray-600">Clienți Mulțumiți</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii de transport și închiriere pentru toate nevoile tale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="service-card group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-orange-600 font-semibold inline-flex items-center group-hover:gap-3 transition-all">
                  Vezi Detalii 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                De Ce Să Alegi <span className="text-orange-600">Welmius</span>?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
                  alt="Servicii Transport"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-xl">
                <Wrench className="w-8 h-8 mb-2" />
                <div className="text-lg font-bold">Service</div>
                <div className="text-sm">Profesional</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6">
                Ai Nevoie de Transport sau Închiriere?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Contactează-ne acum pentru o ofertă personalizată. 
                Suntem aici să te ajutăm cu soluții rapide și eficiente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:0742020254" className="btn-secondary bg-white text-orange-600">
                  <Phone className="w-5 h-5" />
                  0742 020 254
                </a>
                <Link href="/welmius/contact" className="btn-primary bg-white/20 backdrop-blur-sm border-2 border-white">
                  Trimite Mesaj
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Echipamentele Noastre
            </h2>
            <p className="text-xl text-gray-600">
              Remorci și platforme moderne pentru toate tipurile de transport
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop"
                alt="Remorcă transport"
                fill
                className="object-cover"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?w=400&h=300&fit=crop"
                alt="Platformă auto"
                fill
                className="object-cover"
              />
            </div>
            <div className="gallery-item">
              <Image
                src="https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=400&h=300&fit=crop"
                alt="Transport marfă"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Link href="/welmius/remorci-de-inchiriat" className="btn-primary">
              Vezi Toate Remorcile
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}