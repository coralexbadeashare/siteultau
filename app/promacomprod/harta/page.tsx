'use client'

import React from 'react'
import { MapPin, Phone, Clock, Navigation } from 'lucide-react'

export default function MapPage() {
  const locations = [
    {
      name: "Atelier Principal",
      address: "Str. Lombului, fn",
      city: "Cluj Napoca",
      description: "Atelierul nostru principal unde se efectuează toate reparațiile majore",
      phone: "0264-481744",
      hours: "Luni - Vineri: 08:00 - 17:00"
    },
    {
      name: "Sediu Administrativ",
      address: "Str. Calea Turzii, nr. 162-168A",
      city: "Cluj Napoca",
      description: "Birouri administrative și primire clienți",
      phone: "0744-525355",
      hours: "Luni - Vineri: 08:00 - 17:00"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Locațiile Noastre
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Găsiți-ne ușor în Cluj-Napoca. Avem două locații pentru a vă servi mai bine
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
                <div className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {location.name}
                      </h2>
                      <p className="text-gray-600">{location.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Navigation className="w-5 h-5 text-blue-700" />
                      <div>
                        <p className="font-semibold text-gray-900">{location.address}</p>
                        <p className="text-gray-600">{location.city}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-blue-700" />
                      <a 
                        href={`tel:${location.phone.replace(/[^\d]/g, '')}`}
                        className="text-gray-900 hover:text-blue-700 transition-colors"
                      >
                        {location.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-blue-700" />
                      <p className="text-gray-600">{location.hours}</p>
                    </div>
                  </div>

                  <button className="btn-primary w-full">
                    Obține Direcții
                  </button>
                </div>

                {/* Map Placeholder */}
                <div className="h-64 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Hartă Interactivă</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 bg-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Informații Utile pentru Vizită
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-gray-900">P</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Parcare Gratuită</h4>
                <p className="text-gray-600">Spații de parcare disponibile la ambele locații</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚌</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Transport Public</h4>
                <p className="text-gray-600">Acces facil cu mijloacele de transport în comun</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">♿</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Acces Facilitat</h4>
                <p className="text-gray-600">Acces pentru persoane cu dizabilități</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Programați o Vizită
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Veniți să ne cunoașteți personal și să discutăm despre nevoile dumneavoastră
          </p>
          <a 
            href="tel:0264481744" 
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all inline-flex items-center justify-center"
          >
            <Phone className="mr-2 w-5 h-5" />
            Sunați pentru Programare
          </a>
        </div>
      </section>
    </div>
  )
}