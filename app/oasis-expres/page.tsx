'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Droplet, 
  Shield, 
  Clock, 
  CreditCard, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Sparkles,
  Timer,
  Zap,
  ChevronDown,
  ChevronUp,
  Play,
  X
} from 'lucide-react'

export default function HomePage() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const programs = [
    {
      name: "DIAMOND",
      icon: <Sparkles className="w-8 h-8" />,
      price: "65 LEI",
      happyHourPrice: "52 LEI",
      features: [
        "Protecție ceramică premium",
        "Spălare completă cu 7 faze",
        "Ceară protectivă specială",
        "Uscare cu aer ionizat",
        "Luciu diamant garantat",
        "Protecție UV extinsă"
      ],
      gradient: "from-purple-600 to-pink-600",
      featured: true
    },
    {
      name: "DELUXE",
      icon: <Star className="w-8 h-8" />,
      price: "55 LEI",
      happyHourPrice: "44 LEI",
      features: [
        "Spălare premium cu 6 faze",
        "Ceară de protecție",
        "Polish special",
        "Uscare avansată",
        "Protecție vopsea"
      ],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      name: "PREMIUM",
      icon: <Shield className="w-8 h-8" />,
      price: "45 LEI",
      happyHourPrice: "36 LEI",
      features: [
        "Spălare standard cu 5 faze",
        "Șamponare intensivă",
        "Clătire cu presiune",
        "Uscare standard"
      ],
      gradient: "from-green-600 to-teal-600"
    },
    {
      name: "STANDARD",
      icon: <Droplet className="w-8 h-8" />,
      price: "35 LEI",
      happyHourPrice: "28 LEI",
      features: [
        "Spălare de bază",
        "Șamponare",
        "Clătire",
        "Uscare rapidă"
      ],
      gradient: "from-gray-600 to-gray-700"
    }
  ]

  const steps = [
    {
      number: "01",
      title: "Intrare în Spălătorie",
      description: "Conduceți vehiculul în interiorul spălătoriei automate"
    },
    {
      number: "02",
      title: "Selectare Program",
      description: "Alegeți programul dorit de pe ecranul tactil"
    },
    {
      number: "03",
      title: "Plată Rapidă",
      description: "Plătiți cash, cu cardul sau cu telefonul"
    },
    {
      number: "04",
      title: "Poziționare Automată",
      description: "Urmați instrucțiunile pentru poziționarea corectă"
    },
    {
      number: "05",
      title: "Proces de Spălare",
      description: "Relaxați-vă în timp ce tehnologia face treaba"
    },
    {
      number: "06",
      title: "Finalizare",
      description: "Ieșiți cu mașina strălucitoare și protejată"
    }
  ]

  const faqItems = [
    {
      question: "Ce înseamnă spălare touchless?",
      answer: "Spălarea touchless înseamnă că mașina dvs. este curățată folosind doar jeturi de apă cu presiune înaltă și soluții speciale, fără perii sau alte elemente care să atingă caroseria. Aceasta previne zgârieturile și protejează vopseaua."
    },
    {
      question: "Cât durează o spălare completă?",
      answer: "În funcție de programul ales, o spălare completă durează între 5-10 minute. Programul DIAMOND durează aproximativ 10 minute, în timp ce STANDARD durează doar 5 minute."
    },
    {
      question: "Ce metode de plată acceptați?",
      answer: "Acceptăm plăți în numerar, cu cardul bancar, prin telefon (Apple Pay, Google Pay) și smartwatch. De asemenea, oferim carduri de fidelitate pentru clienții frecvenți."
    },
    {
      question: "Ce este Happy Hour?",
      answer: "Happy Hour este perioada dintre 22:00 și 08:00 când oferim reduceri de 20% la toate programele de spălare. Este perfect pentru cei care preferă să evite aglomerația."
    },
    {
      question: "Este sigur pentru toate tipurile de mașini?",
      answer: "Da! Tehnologia touchless este sigură pentru toate tipurile de vehicule, inclusiv mașini de lux, SUV-uri și vehicule comerciale ușoare. Înălțimea maximă acceptată este de 2,3m."
    },
    {
      question: "Pot rămâne în mașină în timpul spălării?",
      answer: "Da, puteți rămâne în siguranță în vehicul pe tot parcursul procesului de spălare. Vă recomandăm să închideți geamurile și să opriți ștergătoarele."
    }
  ]

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop",
      title: "Spălare Touchless în Acțiune"
    },
    {
      src: "https://images.unsplash.com/photo-1594051673969-07fbc5d0fc7d?w=800&h=600&fit=crop",
      title: "Rezultate Impecabile"
    },
    {
      src: "https://images.unsplash.com/photo-1600661703520-33c5d999e2e0?w=800&h=600&fit=crop",
      title: "Tehnologie Modernă"
    },
    {
      src: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&h=600&fit=crop",
      title: "Interior Spălătorie"
    },
    {
      src: "https://images.unsplash.com/photo-1601584263093-e159f30e4aae?w=800&h=600&fit=crop",
      title: "Proces Automatizat"
    },
    {
      src: "https://images.unsplash.com/photo-1590242184854-066d42de6b0e?w=800&h=600&fit=crop",
      title: "Finisare Perfectă"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen hero-gradient relative flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 water-drop" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-40 left-40 water-drop" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-40 right-60 water-drop" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-20 left-20 water-drop" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fadeInUp">
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="text-white font-medium">Tehnologie Touchless Avansată</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              Spălătorie Auto
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                OASIS EXPRES
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
              Curățare perfectă fără atingere. Deschis NON-STOP pentru confortul tău.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
              <Link href="#preturi" className="btn-primary">
                Vezi Prețurile
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="tel:0772006156" className="btn-secondary">
                <Phone className="w-5 h-5" />
                Sună Acum
              </a>
            </div>

            <div className="happy-hour-badge mx-auto animate-pulse">
              <Clock className="w-4 h-4" />
              Happy Hour: 22:00 - 08:00 | Reducere 20%
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="cum-functioneaza" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cum Funcționează?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Proces simplu și rapid în doar 6 pași
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="glass-card p-8 hover:scale-105 transition-transform duration-300">
                <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs & Pricing Section */}
      <section id="preturi" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Programe & Prețuri
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Alegeți programul perfect pentru nevoile dumneavoastră
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <div 
                key={index} 
                className={`pricing-card p-8 ${program.featured ? 'featured scale-105' : ''}`}
              >
                {program.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomandat
                  </div>
                )}
                
                <div className={`w-20 h-20 bg-gradient-to-br ${program.gradient} rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-lg`}>
                  {program.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{program.name}</h3>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white">{program.price}</div>
                  <div className="text-sm text-yellow-400">
                    Happy Hour: {program.happyHourPrice}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  program.featured 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Alege {program.name}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 glass-card px-8 py-4">
              <Timer className="w-6 h-6 text-yellow-400" />
              <div className="text-left">
                <p className="text-white font-semibold">Economisește cu Happy Hour!</p>
                <p className="text-gray-400 text-sm">Zilnic între 22:00 - 08:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                De Ce Să Alegi <span className="text-cyan-400">Oasis Expres</span>?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      100% Touchless
                    </h3>
                    <p className="text-gray-400">
                      Fără perii sau contact direct. Tehnologie avansată care protejează vopseaua.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Deschis NON-STOP
                    </h3>
                    <p className="text-gray-400">
                      Disponibil 24/7 pentru confortul tău. Vino oricând îți convine.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Plăți Flexibile
                    </h3>
                    <p className="text-gray-400">
                      Cash, card, telefon sau smartwatch. Alege metoda preferată.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white flex-shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Rapid și Eficient
                    </h3>
                    <p className="text-gray-400">
                      Spălare completă în doar 5-10 minute. Economisești timp prețios.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&h=600&fit=crop"
                  alt="Oasis Expres Technology"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <button className="absolute inset-0 flex items-center justify-center group">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </button>
              </div>
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Întrebări Frecvente
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Găsește răspunsuri la cele mai comune întrebări
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                >
                  <span className="text-white">{item.question}</span>
                  {activeAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-cyan-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className={`faq-answer ${activeAccordion === index ? 'active' : ''}`}>
                  <p className="px-6 pb-6 text-gray-400">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galerie" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Galerie Foto
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Vezi rezultatele noastre impecabile
            </p>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover"
                />
                <div className="gallery-overlay">
                  <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Vino la Oasis Expres Astăzi!
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experimentează cea mai modernă spălătorie auto touchless. 
              Deschis NON-STOP pentru confortul tău.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0772006156" className="btn-primary">
                <Phone className="w-5 h-5" />
                Sună Pentru Detalii
              </a>
              <Link href="/oasis-expres/contact" className="btn-secondary">
                Contactează-ne
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex items-center justify-center">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].title}
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}