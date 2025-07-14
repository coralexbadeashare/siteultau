import Image from 'next/image'
import Link from 'next/link'
import { Battery, Zap, Shield, Clock, ArrowRight, CheckCircle, Wrench, Truck, Phone, MapPin, Mail } from 'lucide-react'

export default function RTXSolutionsHome() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <ServicesSection />
      <BenefitsSection />
      <CTASection />
      <ContactSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="relative pt-20 min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940"
          alt="Industrial batteries"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Putere și Fiabilitate pentru Industria Ta
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            RTX Solutions - Lider în soluții de baterii industriale și sisteme de alimentare neîntreruptibilă
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold text-lg">
              Solicită Consultanță
            </Link>
            <Link href="#products" className="bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all text-center font-semibold text-lg">
              Vezi Produsele
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Performanță Superioară",
      description: "Baterii de înaltă calitate cu durată de viață extinsă și performanță constantă"
    },
    {
      icon: Shield,
      title: "Garanție Extinsă",
      description: "Până la 5 ani garanție pentru toate produsele noastre industriale"
    },
    {
      icon: Clock,
      title: "Disponibilitate 24/7",
      description: "Suport tehnic și intervenții de urgență non-stop"
    },
    {
      icon: Wrench,
      title: "Service Profesional",
      description: "Echipă certificată pentru instalare și mentenanță"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            De Ce RTX Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cu peste 15 ani de experiență, suntem partenerul de încredere pentru soluții complete de alimentare
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsSection() {
  const products = [
    {
      id: 'industrial',
      title: 'Baterii Industriale',
      description: 'Soluții de stocare energie pentru aplicații industriale grele',
      image: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=2940',
      features: ['Capacitate mare', 'Ciclu de viață extins', 'Rezistență la temperaturi extreme']
    },
    {
      id: 'automotive',
      title: 'Baterii Auto',
      description: 'Baterii pentru vehicule comerciale și flote auto',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=2874',
      features: ['Start rapid', 'Durabilitate sporită', 'Tehnologie AGM/EFB']
    },
    {
      id: 'solar',
      title: 'Baterii Solare',
      description: 'Stocare energie pentru sisteme fotovoltaice',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2872',
      features: ['Deep cycle', 'Eficiență maximă', 'Compatibilitate universală']
    },
    {
      id: 'ups',
      title: 'Sisteme UPS',
      description: 'Alimentare neîntreruptibilă pentru aplicații critice',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940',
      features: ['Protecție totală', 'Transfer instant', 'Monitorizare remotă']
    }
  ]

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Gama Noastră de Produse
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluții complete pentru toate nevoile dumneavoastră de stocare și alimentare cu energie
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} id={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="#contact" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold">
                  Află mai multe
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      title: 'Consultanță Tehnică',
      description: 'Analiză completă a nevoilor și recomandări personalizate',
      icon: Battery
    },
    {
      title: 'Instalare Profesională',
      description: 'Montaj și punere în funcțiune de către specialiști certificați',
      icon: Wrench
    },
    {
      title: 'Service & Mentenanță',
      description: 'Program complet de întreținere preventivă și reparații',
      icon: Shield
    },
    {
      title: 'Transport & Livrare',
      description: 'Livrare rapidă în toată țara cu vehicule specializate',
      icon: Truck
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Servicii Complete
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la consultanță la implementare și suport continuu
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:bg-blue-50 transition-colors">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitsSection() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">
              Economisiți Timp și Bani cu RTX Solutions
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white text-lg">Reducere cu până la 30% a costurilor de mentenanță</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white text-lg">Creșterea duratei de viață a echipamentelor cu 50%</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white text-lg">Zero timpi morți datorită sistemelor de backup</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-white text-lg">ROI garantat în mai puțin de 2 ani</span>
              </li>
            </ul>
          </div>
          
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2940"
              alt="Industrial facility"
              fill
              className="object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">
          Începeți Să Economisiți Astăzi
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Contactați-ne pentru o evaluare gratuită și descoperiți cum putem optimiza sistemul dumneavoastră de alimentare
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg">
            Programează Consultanță Gratuită
          </Link>
          <a href="tel:+40712345678" className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg flex items-center justify-center">
            <Phone className="mr-2 h-5 w-5" />
            Sună Acum: +40 712 345 678
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Contactați-ne
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Trimiteți-ne un Mesaj</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Nume Complet</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Ion Popescu"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="ion.popescu@companie.ro"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+40 7XX XXX XXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Mesaj</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Descrieți nevoile dumneavoastră..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Trimite Mesajul
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Informații de Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Adresă</p>
                      <p className="text-gray-600">Strada Industriei 23<br />Sector 3, București<br />România</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Telefon</p>
                      <p className="text-gray-600">+40 712 345 678<br />+40 21 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@rtxsolutions.ro<br />vanzari@rtxsolutions.ro</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Program de Lucru</h4>
                <div className="space-y-1 text-gray-600">
                  <p>Luni - Vineri: 08:00 - 18:00</p>
                  <p>Sâmbătă: 09:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                  <p className="text-blue-600 font-semibold mt-3">Urgențe 24/7: +40 799 999 999</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}