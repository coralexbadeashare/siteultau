'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Car, 
  Palette, 
  Shield, 
  Sparkles, 
  Film,
  Wrench,
  CheckCircle,
  ArrowRight,
  Clock,
  Euro
} from 'lucide-react'

export default function ServiciiPage() {
  const [activeService, setActiveService] = useState('vopsire-completa')

  const services = {
    'vopsire-completa': {
      title: 'Vopsire Completă',
      icon: <Car className="w-8 h-8" />,
      description: 'Revopsirea integrală a vehiculului cu materiale premium și finisaje impecabile',
      image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=600&fit=crop',
      details: [
        'Demontare completă a pieselor necesare',
        'Pregătire profesională a suprafețelor',
        'Aplicare grund și straturi de bază',
        'Vopsire în cabină specializată',
        'Aplicare lac de protecție UV',
        'Polisare finală pentru luciu perfect'
      ],
      duration: '5-7 zile',
      price: 'De la 2500 €',
      benefits: [
        'Aspect ca nou pentru vehiculul tău',
        'Protecție împotriva coroziunii',
        'Creșterea valorii de revânzare',
        'Garanție 5 ani pentru lucrare'
      ]
    },
    'retusuri': {
      title: 'Retușuri și Reparații',
      icon: <Palette className="w-8 h-8" />,
      description: 'Eliminarea zgârieturilor, loviturilor și imperfecțiunilor locale',
      image: 'https://images.unsplash.com/photo-1632823470768-1b2a77b10e16?w=800&h=600&fit=crop',
      details: [
        'Evaluare detaliată a zonei afectate',
        'Șlefuire și pregătire locală',
        'Potrivire perfectă a culorii',
        'Aplicare vopsea și lac',
        'Integrare invizibilă cu vopseaua existentă',
        'Finisare profesională'
      ],
      duration: '1-3 zile',
      price: 'De la 150 €',
      benefits: [
        'Costuri reduse față de revopsire completă',
        'Timp redus de execuție',
        'Rezultate invizibile',
        'Păstrarea vopselei originale'
      ]
    },
    'protectie-ceramica': {
      title: 'Protecție Ceramică',
      icon: <Shield className="w-8 h-8" />,
      description: 'Acoperire nano-ceramică pentru protecție maximă și luciu de durată',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop',
      details: [
        'Spălare și decontaminare completă',
        'Corecție vopsea (dacă e necesar)',
        'Aplicare strat ceramic profesional',
        'Tratament hidrofob avansat',
        'Protecție UV și chimică',
        'Instruire întreținere'
      ],
      duration: '1-2 zile',
      price: 'De la 500 €',
      benefits: [
        'Protecție 5+ ani',
        'Efect hidrofob puternic',
        'Ușurință în curățare',
        'Luciu intens și durabil',
        'Rezistență la zgârieturi ușoare'
      ]
    },
    'folie-protectie': {
      title: 'Folie de Protecție PPF',
      icon: <Film className="w-8 h-8" />,
      description: 'Folie transparentă de protecție pentru zone vulnerabile sau întregul vehicul',
      image: 'https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&h=600&fit=crop',
      details: [
        'Măsurători precise computerizate',
        'Decupare folie pe șabloane digitale',
        'Aplicare profesională fără bule',
        'Protecție invizibilă de 8-10 ani',
        'Auto-vindecare la zgârieturi mici',
        'Demontabilă fără urme'
      ],
      duration: '2-5 zile',
      price: 'De la 800 €',
      benefits: [
        'Protecție împotriva pietrelor și zgârieturilor',
        'Menține vopseaua originală intactă',
        'Crește valoarea vehiculului',
        'Garanție până la 10 ani'
      ]
    },
    'polish': {
      title: 'Polish și Detailing',
      icon: <Sparkles className="w-8 h-8" />,
      description: 'Redarea luciului original și protejarea vopselei pe termen lung',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
      details: [
        'Spălare și decontaminare cu clay bar',
        'Corecție vopsea în 2-3 etape',
        'Polish cu paste profesionale',
        'Aplicare ceară sau sealant',
        'Tratament cauciucuri și plastic',
        'Curățare și protecție jante'
      ],
      duration: '1 zi',
      price: 'De la 200 €',
      benefits: [
        'Elimină micro-zgârieturile',
        'Redă luciul original',
        'Protecție 6-12 luni',
        'Aspect revigorat complet'
      ]
    }
  }

  const processSteps = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Evaluare Gratuită",
      description: "Inspectăm vehiculul și oferim consultanță personalizată"
    },
    {
      icon: <Euro className="w-6 h-6" />,
      title: "Ofertă Transparentă",
      description: "Primești o ofertă detaliată cu toate costurile incluse"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Programare Flexibilă",
      description: "Alegi perioada care ți se potrivește cel mai bine"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Execuție & Livrare",
      description: "Realizăm lucrarea și îți predăm mașina impecabilă"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1600&h=800&fit=crop"
          alt="Servicii JPX Paint Car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Serviciile Noastre</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Soluții complete pentru aspectul perfect al mașinii tale
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveService(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                  activeService === key
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Details */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src={services[activeService as keyof typeof services].image}
                  alt={services[activeService as keyof typeof services].title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {services[activeService as keyof typeof services].title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  {services[activeService as keyof typeof services].description}
                </p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-xl font-semibold text-gray-900">Ce include:</h3>
                  <ul className="space-y-2">
                    {services[activeService as keyof typeof services].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm">Durată estimată</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      {services[activeService as keyof typeof services].duration}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-gray-600 mb-1">
                      <Euro className="w-5 h-5" />
                      <span className="text-sm">Preț</span>
                    </div>
                    <p className="text-xl font-semibold text-gray-900">
                      {services[activeService as keyof typeof services].price}
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Beneficii:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services[activeService as keyof typeof services].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3" />
                        <span className="text-gray-700 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link 
                  href="/jpxpaintcar/contact" 
                  className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 inline-flex items-center"
                >
                  Solicită Ofertă
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
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
              Simplu, transparent și orientat către rezultate perfecte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 relative">
                  {step.icon}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-full top-1/2 transform -translate-y-1/2 w-full">
                      <div className="flex items-center">
                        <div className="w-full border-t-2 border-dashed border-gray-300" />
                        <ArrowRight className="w-6 h-6 text-gray-400 -ml-3" />
                      </div>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-xl text-gray-600">
              Răspunsuri la cele mai comune întrebări
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Cât durează o vopsire completă?
              </h3>
              <p className="text-gray-700">
                O vopsire completă durează între 5-7 zile lucrătoare, în funcție de complexitatea lucrării și de timpul necesar pentru uscare și finisare.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Oferiți garanție pentru lucrări?
              </h3>
              <p className="text-gray-700">
                Da, oferim garanție pentru toate lucrările: 5 ani pentru vopsire completă, 3 ani pentru retușuri, și până la 10 ani pentru folie de protecție.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Puteți potrivi exact culoarea originală?
              </h3>
              <p className="text-gray-700">
                Folosim tehnologie computerizată de potrivire a culorilor și baze de date actualizate pentru a reproduce exact nuanța originală a vehiculului.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Care este diferența dintre protecția ceramică și ceară?
              </h3>
              <p className="text-gray-700">
                Protecția ceramică oferă o durabilitate de 5+ ani și rezistență superioară, în timp ce ceara tradițională durează 6-12 luni și necesită reaplicare frecventă.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformă-ți Mașina Astăzi
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o evaluare gratuită și o ofertă personalizată
          </p>
          <Link 
            href="/jpxpaintcar/contact" 
            className="bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Programează o Consultație
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}