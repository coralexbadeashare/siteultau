'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Zap, 
  Settings, 
  Wrench, 
  Shield,
  CheckCircle,
  ArrowRight,
  Phone,
  Gauge,
  Cog,
  CircuitBoard
} from 'lucide-react'

export default function ServicesPage() {
  const mainServices = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Reparații Motoare Electrice",
      description: "Servicii complete de reparații pentru motoare electrice de toate tipurile",
      features: [
        "Diagnosticare completă cu echipamente moderne",
        "Reparații bobinaje și înlocuire rulmenți",
        "Echilibrare dinamică rotori",
        "Testare la parametri nominali",
        "Garanție 12 luni pentru lucrări"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: "Rebobinări Transformatoare",
      description: "Rebobinări profesionale pentru transformatoare de putere mică și medie",
      features: [
        "Rebobinări cu conductor de cupru de calitate",
        "Izolații moderne de înaltă performanță",
        "Testare riguroasă după rebobinare",
        "Optimizare parametri electrici",
        "Certificat de conformitate"
      ],
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&h=600&fit=crop"
    },
    {
      icon: <Cog className="w-12 h-12" />,
      title: "Reparații Generatoare",
      description: "Întreținere și reparații pentru generatoare industriale",
      features: [
        "Revizie completă sisteme de răcire",
        "Înlocuire diode și regulatoare",
        "Verificare și reparații excitație",
        "Testare în sarcină",
        "Service preventiv programat"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=600&fit=crop"
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Întreținere Macarale și Poduri Rulante",
      description: "Servicii autorizate ISCIR pentru echipamente de ridicat",
      features: [
        "Verificări tehnice ISCIR",
        "Întreținere preventivă și corectivă",
        "Înlocuire cabluri și componente uzate",
        "Modernizări sisteme de comandă",
        "Instruire personal operator"
      ],
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&h=600&fit=crop"
    }
  ]

  const additionalServices = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Echilibrare Dinamică",
      description: "Echilibrare rotori pentru eliminarea vibrațiilor"
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "Modernizări Echipamente",
      description: "Upgrade sisteme de control și automatizare"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Mentenanță Preventivă",
      description: "Programe personalizate de întreținere"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Serviciile Noastre
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Oferim soluții complete pentru toate tipurile de echipamente electrice industriale, 
            cu personal calificat și echipamente moderne
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/promacomprod/contact" 
                    className="btn-primary inline-flex items-center"
                  >
                    Solicită Ofertă
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video relative rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-yellow-400 text-gray-900 p-4 rounded-lg shadow-xl">
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm">Ani Experiență</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Servicii Complementare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 text-center shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Aveți Nevoie de Serviciile Noastre?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o evaluare gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:0264481744" 
              className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              Sunați Acum
            </a>
            <Link 
              href="/promacomprod/contact" 
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-flex items-center justify-center"
            >
              Formular Contact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}