'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Wrench, Shield, Clock, Package, CheckCircle, Phone, 
  ArrowRight, Droplets, Zap, Flame, Snowflake, Home,
  Gauge, Wifi, Sun, Wind
} from 'lucide-react'

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('reparatii')

  const serviceCategories = {
    reparatii: {
      title: "Reparații și Întreținere",
      icon: Wrench,
      description: "Service complet pentru toate componentele vehiculului dumneavoastră",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      services: [
        {
          name: "Sisteme de Apă",
          icon: Droplets,
          items: [
            "Reparații și înlocuiri pompe de apă",
            "Detectare și reparare scurgeri",
            "Înlocuire țevi și furtunuri",
            "Curățare și dezinfectare rezervoare",
            "Instalare filtre de apă"
          ]
        },
        {
          name: "Instalații Electrice",
          icon: Zap,
          items: [
            "Diagnosticare sistem electric 12V/220V",
            "Înlocuire baterii și sisteme de încărcare",
            "Reparații tablou electric",
            "Instalare prize și întrerupătoare",
            "Verificare și înlocuire cablaje"
          ]
        },
        {
          name: "Sisteme de Gaz",
          icon: Flame,
          items: [
            "Verificare etanșeitate instalație gaz",
            "Înlocuire regulatoare și supape",
            "Service aragaz și cuptor",
            "Reparații boiler pe gaz",
            "Certificare instalație gaz"
          ]
        },
        {
          name: "Caroserie și Etanșare",
          icon: Home,
          items: [
            "Reparații infiltrații apă",
            "Înlocuire garnituri ferestre/uși",
            "Reparații acoperiș și lucarne",
            "Tratamente anticorozive",
            "Reparații fibră de sticlă"
          ]
        }
      ]
    },
    montaj: {
      title: "Montaj Accesorii",
      icon: Package,
      description: "Instalare profesională a echipamentelor și upgrade-uri pentru confort maxim",
      image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop",
      services: [
        {
          name: "Climatizare",
          icon: Wind,
          items: [
            "Montaj aer condiționat pe acoperiș",
            "Instalare AC split pentru rulote",
            "Sisteme de ventilație forțată",
            "Ventilatoare de acoperiș",
            "Perdele termice"
          ]
        },
        {
          name: "Energie Verde",
          icon: Sun,
          items: [
            "Instalare panouri solare",
            "Montaj regulatoare solare MPPT",
            "Sisteme complete off-grid",
            "Baterii litiu și AGM",
            "Invertoare sinus pur"
          ]
        },
        {
          name: "Multimedia",
          icon: Wifi,
          items: [
            "Antene satelit automate",
            "Sisteme TV smart",
            "Internet mobil 4G/5G",
            "Camere marsarier",
            "Sisteme audio premium"
          ]
        },
        {
          name: "Confort",
          icon: Home,
          items: [
            "Montaj cort lateral/frontal",
            "Instalare movers",
            "Suporturi biciclete",
            "Trepte electrice",
            "Sisteme de securitate"
          ]
        }
      ]
    },
    verificari: {
      title: "Verificări Tehnice",
      icon: Shield,
      description: "Inspecții complete pentru siguranța și fiabilitatea vehiculului",
      image: "https://images.unsplash.com/photo-1632823470385-0c8c98e4ac24?w=800&h=600&fit=crop",
      services: [
        {
          name: "Teste de Etanșeitate",
          icon: Droplets,
          items: [
            "Test cu apă sub presiune",
            "Verificare umiditate cu higrometru",
            "Identificare puncte de infiltrare",
            "Raport detaliat cu fotografii",
            "Recomandări de remediere"
          ]
        },
        {
          name: "Verificare Gaz",
          icon: Gauge,
          items: [
            "Test presiune instalație",
            "Verificare cu detector de gaz",
            "Control regulatoare și supape",
            "Verificare aragaz și încălzire",
            "Certificat de conformitate"
          ]
        },
        {
          name: "Diagnostic Electric",
          icon: Zap,
          items: [
            "Test baterii și alternator",
            "Verificare panouri solare",
            "Măsurare consum curent",
            "Test prize și siguranțe",
            "Verificare împământare"
          ]
        },
        {
          name: "Inspecție Generală",
          icon: CheckCircle,
          items: [
            "Verificare sistem frânare",
            "Control suspensie și amortizoare",
            "Test funcționare echipamente",
            "Verificare anvelope și jante",
            "Raport complet 50+ puncte"
          ]
        }
      ]
    },
    sezonier: {
      title: "Pregătire Sezonieră",
      icon: Clock,
      description: "Pregătim vehiculul pentru orice anotimp și condiții meteo",
      image: "https://images.unsplash.com/photo-1516533775068-ba3e7cfe19c8?w=800&h=600&fit=crop",
      services: [
        {
          name: "Pregătire Iarnă",
          icon: Snowflake,
          items: [
            "Golire completă sistem apă",
            "Adăugare antigel special",
            "Protejare robinete și pompe",
            "Verificare sistem încălzire",
            "Izolare suplimentară țevi"
          ]
        },
        {
          name: "Pregătire Vară",
          icon: Sun,
          items: [
            "Curățare și umplere sistem apă",
            "Verificare aer condiționat",
            "Service filtre și aerisiri",
            "Tratament anti-insecte",
            "Verificare cort și prelate"
          ]
        },
        {
          name: "Depozitare",
          icon: Home,
          items: [
            "Curățare completă interior/exterior",
            "Tratament protecție caroserie",
            "Deconectare și încărcare baterii",
            "Protecție anvelope",
            "Servicii pază și monitorizare"
          ]
        },
        {
          name: "Reactivare",
          icon: CheckCircle,
          items: [
            "Verificare completă sisteme",
            "Schimb ulei și filtre",
            "Verificare presiune anvelope",
            "Test toate echipamentele",
            "Curățare și igienizare"
          ]
        }
      ]
    }
  }

  const pricingPackages = [
    {
      name: "Revizie Simplă",
      price: "299 lei",
      description: "Verificare de bază pentru siguranța ta",
      features: [
        "Verificare vizuală generală",
        "Test sistem electric",
        "Verificare presiune anvelope",
        "Raport scris"
      ]
    },
    {
      name: "Revizie Completă",
      price: "599 lei",
      description: "Inspecție detaliată a tuturor sistemelor",
      features: [
        "Tot ce include Revizia Simplă",
        "Test etanșeitate",
        "Verificare instalație gaz",
        "Diagnostic electronic",
        "50+ puncte verificate"
      ],
      popular: true
    },
    {
      name: "Revizie Premium",
      price: "999 lei",
      description: "Service complet cu întreținere preventivă",
      features: [
        "Tot ce include Revizia Completă",
        "Schimb filtre aer/apă",
        "Ungere și gresare",
        "Curățare sistem apă",
        "Garanție extinsă lucrări"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop"
          alt="Service Autorulote"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Serviciile Noastre</h1>
              <p className="text-xl text-gray-200">
                Service complet și profesional pentru autorulote și rulote. 
                Experiență de peste 10 ani în domeniu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Tabs */}
      <section className="sticky top-20 z-40 bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide">
            {Object.entries(serviceCategories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex items-center space-x-3 px-6 py-4 border-b-4 transition-all whitespace-nowrap ${
                    activeTab === key
                      ? 'border-blue-600 bg-blue-50 text-blue-600'
                      : 'border-transparent hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-semibold">{category.title}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Active Service Category */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {Object.entries(serviceCategories).map(([key, category]) => {
            if (key !== activeTab) return null
            
            return (
              <div key={key}>
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                  <div>
                    <h2 className="text-4xl font-bold mb-6">{category.title}</h2>
                    <p className="text-xl text-gray-600 mb-8">
                      {category.description}
                    </p>
                    <div className="bg-blue-50 rounded-xl p-6 mb-8">
                      <h3 className="font-bold text-lg mb-3">De ce să ne alegi?</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Tehnicienii certificați cu experiență vastă</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Piese originale și de calitate premium</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Garanție pentru toate lucrările efectuate</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Prețuri transparente și competitive</span>
                        </li>
                      </ul>
                    </div>
                    <Link
                      href="/camperservice/contact"
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Solicită Programare
                    </Link>
                  </div>
                  <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {category.services.map((service, index) => {
                    const ServiceIcon = service.icon
                    return (
                      <div
                        key={index}
                        className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all"
                      >
                        <div className="flex items-center space-x-3 mb-4">
                          <div className="bg-blue-100 p-3 rounded-lg">
                            <ServiceIcon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-lg">{service.name}</h3>
                        </div>
                        <ul className="space-y-2">
                          {service.items.map((item, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Pachete de Revizie</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alege pachetul potrivit pentru nevoile tale. Toate prețurile includ TVA.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPackages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  pkg.popular ? 'ring-4 ring-blue-600 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Cel Mai Popular
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-4">{pkg.price}</div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/camperservice/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                    }`}
                  >
                    Programează Acum
                  </Link>
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
            Ai Nevoie de Service Urgent?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suntem disponibili pentru urgențe 24/7. Contactează-ne acum!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40745913161"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              <Phone className="mr-2 h-5 w-5" />
              Sună Acum: 0745 913 161
            </a>
            <Link
              href="/camperservice/contact"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Programare Online
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}