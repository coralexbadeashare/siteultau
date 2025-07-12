'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Zap, 
  Settings, 
  Wrench, 
  CheckCircle, 
  Phone, 
  ArrowRight,
  Shield,
  Award,
  Users,
  Clock
} from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Reparații Motoare Electrice",
      description: "Reparații complete pentru motoare de toate tipurile și puterile",
      link: "/promacomprod/servicii"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Rebobinări Transformatoare",
      description: "Rebobinări profesionale pentru transformatoare de putere",
      link: "/promacomprod/servicii"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Întreținere Macarale",
      description: "Servicii autorizate ISCIR pentru macarale și poduri rulante",
      link: "/promacomprod/servicii"
    }
  ]

  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Autorizați ISCIR",
      description: "Certificări complete pentru lucrări de înaltă calitate"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "20+ Ani Experiență",
      description: "Expertiză dovedită în domeniul reparațiilor electrice"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Echipă Profesionistă",
      description: "Personal calificat și dedicat excelenței"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timp Rapid de Execuție",
      description: "Lucrări realizate prompt fără compromisuri de calitate"
    }
  ]

  const stats = [
    { number: "20+", label: "Ani Experiență" },
    { number: "500+", label: "Motoare Reparate" },
    { number: "100%", label: "Clienți Mulțumiți" },
    { number: "24/7", label: "Suport Tehnic" }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-700/80"></div>
        <div className="relative z-10 container mx-auto px-4 pt-20">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
              Specialist în Reparații
              <span className="text-yellow-400 block">Motoare Electrice</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Peste 20 de ani de experiență în reparații motoare electrice, 
              transformatoare și întreținere echipamente industriale. 
              Autorizați ISCIR pentru calitate garantată.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              <Link 
                href="/promacomprod/contact" 
                className="btn-primary inline-flex items-center justify-center"
              >
                Solicită Ofertă
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href="/promacomprod/servicii" 
                className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-flex items-center justify-center"
              >
                Vezi Serviciile
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii pentru echipamente electrice industriale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                href={service.link}
                className="service-card bg-gray-50 rounded-xl p-8 text-center hover:bg-white border border-gray-200"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white mx-auto mb-6">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <span className="text-blue-700 font-semibold inline-flex items-center group">
                  Detalii 
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                De Ce Să Alegeți <span className="text-blue-700">Promacom Prod</span>?
              </h2>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 flex-shrink-0">
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
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop"
                  alt="Atelier Promacom Prod"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Satisfacție Garantată</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul Nostru de Lucru
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Urmăm un proces strict pentru a asigura calitatea maximă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnosticare</h3>
              <p className="text-gray-600">Evaluare completă a defecțiunilor</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Ofertare</h3>
              <p className="text-gray-600">Prezentare soluții și costuri transparente</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Reparație</h3>
              <p className="text-gray-600">Execuție profesională cu piese de calitate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Testare</h3>
              <p className="text-gray-600">Verificare riguroasă și garanție</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Aveți Nevoie de Reparații Urgente?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Suntem disponibili 24/7 pentru urgențe. Contactați-ne acum pentru o intervenție rapidă!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0264481744" 
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              0264-481744
            </a>
            <Link 
              href="/promacomprod/contact" 
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Trimite Mesaj
            </Link>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clienții Noștri Ne Recomandă
            </h2>
            <p className="text-gray-600">
              Colaborăm cu companii de top din diverse industrii
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white rounded-lg p-8 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}