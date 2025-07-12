'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Wrench,
  Settings,
  Zap,
  CheckCircle,
  ArrowRight,
  Gauge,
  Cog,
  Shield,
  Paintbrush,
  FileCheck,
  Phone,
  Clock,
  Euro
} from 'lucide-react'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'toate' | 'diagnosticare' | 'mecanica' | 'electrica' | 'tinichigerie' | 'intretinere'>('toate')

  const serviceCategories = {
    diagnosticare: {
      title: "Diagnosticare Computerizată",
      icon: Settings,
      color: "blue",
      services: [
        {
          name: "Diagnosticare completă OBD",
          description: "Scanare completă a sistemelor electronice ale vehiculului",
          price: "De la 100 RON",
          duration: "30-60 min",
          features: ["Citire coduri eroare", "Ștergere erori", "Raport detaliat", "Recomandări reparații"]
        },
        {
          name: "Verificare pre-achiziție",
          description: "Inspecție completă pentru mașini second-hand",
          price: "250 RON",
          duration: "90 min",
          features: ["Test sisteme", "Verificare caroserie", "Test drive", "Raport complet"]
        },
        {
          name: "Diagnosticare motor",
          description: "Analiză detaliată a performanțelor motorului",
          price: "150 RON",
          duration: "45 min",
          features: ["Măsurare compresie", "Analiză emisii", "Verificare turbo", "Optimizare performanță"]
        }
      ]
    },
    mecanica: {
      title: "Reparații Mecanice",
      icon: Wrench,
      color: "green",
      services: [
        {
          name: "Reparații motor",
          description: "Reparații complete pentru toate tipurile de motoare",
          price: "Estimare gratuită",
          duration: "Variabil",
          features: ["Înlocuire pistoane", "Rectificare chiulasă", "Schimb curea distribuție", "Reconditionare motor"]
        },
        {
          name: "Sistem de frânare",
          description: "Întreținere și reparații sistem frânare",
          price: "De la 200 RON",
          duration: "1-3 ore",
          features: ["Înlocuire plăcuțe", "Schimb discuri", "Verificare ABS", "Schimb lichid frână"]
        },
        {
          name: "Transmisie și ambreiaj",
          description: "Reparații cutie viteze și sistem ambreiaj",
          price: "De la 500 RON",
          duration: "4-8 ore",
          features: ["Înlocuire ambreiaj", "Reparații cutie", "Schimb ulei transmisie", "Diagnosticare automată"]
        },
        {
          name: "Suspensie și direcție",
          description: "Reparații complete sistem suspensie",
          price: "De la 300 RON",
          duration: "2-4 ore",
          features: ["Înlocuire amortizoare", "Schimb brațe", "Geometrie roți", "Verificare direcție"]
        }
      ]
    },
    electrica: {
      title: "Reparații Electrice",
      icon: Zap,
      color: "yellow",
      services: [
        {
          name: "Sistem de încărcare",
          description: "Verificare și reparații alternator și baterie",
          price: "De la 150 RON",
          duration: "1-2 ore",
          features: ["Test baterie", "Înlocuire alternator", "Verificare regulator", "Curățare borne"]
        },
        {
          name: "Sistem de pornire",
          description: "Diagnosticare și reparații electromotor",
          price: "De la 200 RON",
          duration: "1-3 ore",
          features: ["Înlocuire electromotor", "Reparații bendix", "Verificare releu", "Test sistem"]
        },
        {
          name: "Instalație electrică",
          description: "Depanare și reparații cablaje auto",
          price: "De la 100 RON/oră",
          duration: "Variabil",
          features: ["Depistare scurtcircuite", "Înlocuire cablaje", "Reparații conectori", "Izolare profesională"]
        },
        {
          name: "Sisteme electronice",
          description: "Reparații module electronice și senzori",
          price: "Estimare gratuită",
          duration: "Variabil",
          features: ["Înlocuire senzori", "Programare module", "Reparații ECU", "Calibrare sisteme"]
        }
      ]
    },
    tinichigerie: {
      title: "Tinichigerie și Vopsitorie",
      icon: Paintbrush,
      color: "purple",
      services: [
        {
          name: "Reparații caroserie",
          description: "Îndreptare și reparare elemente caroserie",
          price: "Estimare gratuită",
          duration: "1-5 zile",
          features: ["Îndreptare tablă", "Sudură profesională", "Înlocuire panouri", "Tratament anticoroziv"]
        },
        {
          name: "Vopsire profesională",
          description: "Vopsire în cabină specializată",
          price: "De la 500 RON/element",
          duration: "2-3 zile",
          features: ["Pregătire suprafață", "Vopsire în cabină", "Lustruire finală", "Garanție culoare"]
        },
        {
          name: "Poliș faruri",
          description: "Reconditionare faruri oxidate",
          price: "150 RON/set",
          duration: "2 ore",
          features: ["Șlefuire profesională", "Polișare", "Protecție UV", "Aspect nou"]
        }
      ]
    },
    intretinere: {
      title: "Întreținere Periodică",
      icon: Shield,
      color: "red",
      services: [
        {
          name: "Schimb ulei și filtre",
          description: "Întreținere de bază pentru motor sănătos",
          price: "De la 150 RON",
          duration: "30-45 min",
          features: ["Ulei premium", "Filtru ulei", "Filtru aer", "Verificare nivele"]
        },
        {
          name: "Revizie completă",
          description: "Verificare completă conform cărții tehnice",
          price: "De la 300 RON",
          duration: "2-3 ore",
          features: ["Verificare 50 puncte", "Schimb lichide", "Test sisteme", "Raport stare"]
        },
        {
          name: "Pregătire ITP",
          description: "Verificare și pregătire pentru inspecția tehnică",
          price: "200 RON",
          duration: "1-2 ore",
          features: ["Verificare frâne", "Test emisii", "Verificare direcție", "Remediere probleme"]
        },
        {
          name: "Climatizare",
          description: "Întreținere și reparații sistem AC",
          price: "De la 200 RON",
          duration: "1 oră",
          features: ["Încărcare freon", "Verificare etanșeitate", "Curățare sistem", "Înlocuire filtru"]
        }
      ]
    }
  }

  const allServices = Object.entries(serviceCategories).flatMap(([key, category]) => 
    category.services.map(service => ({ ...service, category: key, categoryTitle: category.title, icon: category.icon }))
  )

  const filteredServices = activeCategory === 'toate' 
    ? allServices 
    : serviceCategories[activeCategory].services.map(service => ({ 
        ...service, 
        category: activeCategory, 
        categoryTitle: serviceCategories[activeCategory].title,
        icon: serviceCategories[activeCategory].icon 
      }))

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&h=800&fit=crop"
          alt="Service auto"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Serviciile Noastre
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Soluții complete pentru toate nevoile mașinii tale
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <Link href="/serviceadam" className="hover:text-red-500 transition-colors">
                  Acasă
                </Link>
                <span>/</span>
                <span className="text-white">Servicii</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Filter */}
      <section className="py-8 bg-gray-100 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('toate')}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === 'toate'
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Toate Serviciile
            </button>
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as 'toate' | 'diagnosticare' | 'mecanica' | 'electrica' | 'tinichigerie' | 'intretinere')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === key
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                id={service.category}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-red-500 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-full">{service.categoryTitle}</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="flex items-center justify-between mb-6 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2">
                    <Euro className="w-4 h-4 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Preț</p>
                      <p className="font-semibold text-red-600">{service.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Durată</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/serviceadam/contact"
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2 group font-medium"
                >
                  Solicită Serviciul
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Info */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Servicii Profesionale cu Garanție
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Fiecare serviciu pe care îl oferim vine cu garanția calității și a profesionalismului echipei noastre.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Gauge className="w-10 h-10 text-red-500 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Echipamente Moderne</h3>
                  <p className="text-gray-400 text-sm">Tehnologie de ultimă generație pentru diagnosticare precisă</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <FileCheck className="w-10 h-10 text-red-500 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Piese Originale</h3>
                  <p className="text-gray-400 text-sm">Folosim doar piese de calitate cu garanție</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Cog className="w-10 h-10 text-red-500 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Personal Calificat</h3>
                  <p className="text-gray-400 text-sm">Mecanici certificați cu experiență vastă</p>
                </div>
                <div className="bg-gray-800 p-6 rounded-lg">
                  <Shield className="w-10 h-10 text-red-500 mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Garanție Extinsă</h3>
                  <p className="text-gray-400 text-sm">Toate lucrările au garanție minimă 6 luni</p>
                </div>
              </div>

              <Link
                href="/serviceadam/contact"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-300 group font-medium"
              >
                Cere Ofertă Personalizată
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1599256872237-5dcc0fbe9668?w=800&h=600&fit=crop"
                alt="Service auto modern"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-8 rounded-lg shadow-xl">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-lg">Asistență Rutieră</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Procesul Nostru de Lucru</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparență totală din momentul în care ne încredințezi mașina
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "1",
                title: "Programare",
                description: "Programează-te online sau telefonic la ora dorită"
              },
              {
                step: "2",
                title: "Diagnosticare",
                description: "Verificăm complet mașina și identificăm problemele"
              },
              {
                step: "3",
                title: "Ofertă Transparentă",
                description: "Primești o ofertă detaliată cu prețuri clare"
              },
              {
                step: "4",
                title: "Execuție & Livrare",
                description: "Realizăm lucrările și îți predăm mașina la timp"
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ai Nevoie de Un Serviciu Care Nu Este Listat?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne și îți vom oferi o soluție personalizată pentru problema mașinii tale
          </p>
          <a
            href="tel:0740123456"
            className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-medium"
          >
            <Phone className="w-5 h-5" />
            Sună Acum: 0740 123 456
          </a>
        </div>
      </section>
    </>
  )
}