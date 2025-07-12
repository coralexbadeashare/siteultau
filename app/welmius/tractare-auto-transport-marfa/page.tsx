'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Car,
  Package,
  MapPin,
  Phone,
  Shield,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  Zap
} from 'lucide-react'

export default function TractareTransportPage() {
  const [activeService, setActiveService] = useState('tractare')

  const towingServices = [
    {
      icon: <Car className="w-8 h-8" />,
      title: "Tractare Autoturisme",
      description: "Pentru mașini avariate sau defecte",
      features: [
        "Disponibil 24/7",
        "Echipament specializat",
        "Personal calificat",
        "Asigurare inclusa"
      ],
      price: "De la 2 lei/km"
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Tractare Vehicule Grele",
      description: "Dube, camioane mici și vehicule comerciale",
      features: [
        "Platforme speciale",
        "Capacitate până la 3.5t",
        "Manipulare sigură",
        "Transport securizat"
      ],
      price: "De la 3 lei/km"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Intervenții Urgente",
      description: "Asistență rapidă în caz de accident",
      features: [
        "Timp de răspuns rapid",
        "Colaborare cu autoritățile",
        "Documentare incident",
        "Suport complet"
      ],
      price: "Tarif special urgențe"
    }
  ]

  const transportServices = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Transport Marfă Generală",
      description: "Pentru colete și mărfuri diverse",
      features: [
        "Încărcare securizată",
        "Traseu optimizat",
        "Urmărire transport",
        "Livrare la destinație"
      ],
      capacity: "Până la 2000 kg"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Transport Mobilier",
      description: "Mutări și relocări complete",
      features: [
        "Ambalare profesională",
        "Manipulare atentă",
        "Echipă specializată",
        "Asigurare bunuri"
      ],
      capacity: "Volume mari"
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Transport Materiale Construcții",
      description: "Pentru șantiere și proiecte",
      features: [
        "Remorci basculante",
        "Transport moloz",
        "Livrare materiale",
        "Program flexibil"
      ],
      capacity: "Până la 1500 kg"
    }
  ]

  const coverage = [
    "Cluj-Napoca și împrejurimi",
    "Transport județean și interjudețean",
    "Acoperire națională pentru servicii speciale",
    "Colaborări internaționale pentru transport marfă"
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <Link href="/welmius" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Tractare Auto & Transport Marfă
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Servicii profesionale de tractare și transport, disponibile 24/7. 
            Soluții rapide și sigure pentru toate nevoile tale.
          </p>
        </div>
      </section>

      {/* Service Toggle */}
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveService('tractare')}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeService === 'tractare'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Tractare Auto
              </button>
              <button
                onClick={() => setActiveService('transport')}
                className={`px-8 py-3 rounded-lg font-medium transition-all ${
                  activeService === 'transport'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Transport Marfă
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      {activeService === 'tractare' ? (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Servicii de Tractare Auto
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Asistență rutieră profesională pentru orice situație
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {towingServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-2xl font-bold text-blue-600">
                    {service.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-yellow-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <AlertCircle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Apel de Urgență 24/7
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Pentru situații urgente, suntem disponibili non-stop. 
                    Timp mediu de răspuns: 30 minute în zona Cluj-Napoca.
                  </p>
                  <a href="tel:0742020254" className="btn-primary">
                    <Phone className="w-5 h-5" />
                    0742 020 254
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Servicii de Transport Marfă
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Soluții complete pentru transportul mărfurilor tale
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {transportServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-gray-100 rounded-lg px-4 py-2 inline-block">
                    <span className="text-sm text-gray-600">Capacitate:</span>
                    <span className="text-lg font-semibold text-gray-900 ml-2">
                      {service.capacity}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coverage Area */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Acoperire <span className="text-blue-600">Națională</span>
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Oferim servicii de tractare și transport în toată țara, 
                cu accent special pe zona Cluj și Transilvania.
              </p>
              <div className="space-y-4">
                {coverage.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <span className="text-gray-700 text-lg">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-xl">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Tarife Speciale pentru Distanțe Lungi
                </h3>
                <p className="text-gray-700">
                  Oferim reduceri pentru transporturi pe distanțe mai mari de 100 km. 
                  Contactați-ne pentru o ofertă personalizată.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=800&fit=crop"
                  alt="Harta acoperire"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-8 h-8 bg-red-600 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 bg-red-600 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cum Funcționează?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proces simplu și transparent în 4 pași
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Apel</h3>
              <p className="text-gray-600">
                Ne contactezi și ne spui despre situația ta
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluare</h3>
              <p className="text-gray-600">
                Stabilim detaliile și oferim cotație
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Intervenție</h3>
              <p className="text-gray-600">
                Ajungem rapid la locație și preluăm vehiculul/marfa
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Livrare</h3>
              <p className="text-gray-600">
                Transport sigur până la destinație
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-orange-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              Siguranță și Profesionalism
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Toate vehiculele și echipamentele noastre sunt verificate periodic și asigurate. 
              Personal calificat și experimentat pentru manipularea sigură a bunurilor tale.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Asigurare RCA & CMR</h3>
                <p className="text-gray-400">Protecție completă pentru transport</p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Echipamente Certificate</h3>
                <p className="text-gray-400">Verificări tehnice la zi</p>
              </div>
              <div>
                <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Personal Autorizat</h3>
                <p className="text-gray-400">Șoferi profesioniști cu experiență</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}