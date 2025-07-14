'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, Building, Compass, Ruler, Award, Users, Clock, ArrowRight } from 'lucide-react'

const heroSlides = [
  {
    id: 1,
    title: 'Concert Hall New York',
    subtitle: 'Arhitectură modernă pentru spații culturale',
    image: 'https://images.unsplash.com/photo-1514063364532-5abd4ddc44e5?q=80&w=2940',
  },
  {
    id: 2,
    title: 'Hotel Modern Londra',
    subtitle: 'Design contemporan pentru ospitalitate de lux',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2940',
  },
  {
    id: 3,
    title: 'Proiect Rezidențial Paris',
    subtitle: 'Locuințe moderne în inima orașului',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2940',
  },
]

const services = [
  {
    title: 'Arhitectură',
    description: 'Proiectare arhitecturală completă pentru clădiri rezidențiale, comerciale și industriale',
    icon: Building,
    href: '/bogartconstruct/arhitectura',
    projects: '40+',
  },
  {
    title: 'Urbanism',
    description: 'Planificare urbană și design peisagistic pentru dezvoltări integrate',
    icon: Compass,
    href: '/bogartconstruct/urbanism',
    projects: '25+',
  },
  {
    title: 'Proiectare Structurală',
    description: 'Soluții ingenioase pentru structuri durabile și eficiente',
    icon: Ruler,
    href: '/bogartconstruct/proiectare-structurala',
    projects: '100+',
  },
]

const stats = [
  { number: '1000+', label: 'Proiecte Finalizate' },
  { number: '25+', label: 'Ani de Experiență' },
  { number: '50+', label: 'Profesioniști în Echipă' },
  { number: '100%', label: 'Clienți Mulțumiți' },
]

export default function BogartConstructHome() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  return (
    <>
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-4xl px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl animate-fade-in-delay">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Transformăm Ideile în Opere de Artă</h2>
            <p className="text-lg text-gray-600">
              Fondat în 1999 de Mircea și Bogdan Petrina, Bogart Construct este un birou de arhitectură și design 
              cu peste 1000 de proiecte de succes. Combinăm experiența vastă cu tehnologia modernă pentru a crea 
              spații care inspiră și durează.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-semibold">
                      {service.projects} Proiecte
                    </span>
                    <Link
                      href={service.href}
                      className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Detalii
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">De Ce Să Alegeți Bogart Construct?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Experiență Dovedită</h3>
                    <p className="text-blue-100">
                      Peste 25 de ani de excelență în arhitectură și design, cu proiecte premiate internațional.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Echipă Profesionistă</h3>
                    <p className="text-blue-100">
                      Arhitecți și ingineri cu experiență vastă, folosind cele mai moderne tehnologii de proiectare.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="w-8 h-8 text-blue-300 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Livrare la Timp</h3>
                    <p className="text-blue-100">
                      Ne respectăm angajamentele și livrăm proiectele conform termenelor stabilite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940"
                alt="Modern architecture"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Începeți Proiectul Dvs. Astăzi</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o consultație gratuită și descoperiți cum putem transforma viziunea 
            dumneavoastră în realitate.
          </p>
          <Link
            href="/bogartconstruct/contact"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contactați-ne
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }
      `}</style>
    </>
  )
}