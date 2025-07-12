'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  Wrench, 
  Shield, 
  Clock, 
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  Car,
  Settings,
  Zap,
  Users,
  Phone,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

export default function ServiceAdamHome() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  
  const heroSlides = [
    {
      title: "Service Auto Profesional",
      subtitle: "Expertiza de peste 15 ani în întreținerea și reparația autovehiculelor",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1920&h=1080&fit=crop"
    },
    {
      title: "Tehnologie Modernă",
      subtitle: "Echipamente de ultimă generație pentru diagnosticare precisă",
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1920&h=1080&fit=crop"
    },
    {
      title: "Mecanici Certificați",
      subtitle: "Echipă de profesioniști dedicați calității serviciilor",
      image: "https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=1920&h=1080&fit=crop"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const services = [
    {
      icon: Settings,
      title: "Diagnosticare Computerizată",
      description: "Identificăm rapid și precis orice problemă a mașinii tale folosind tehnologie avansată",
      features: ["Scanare completă", "Raport detaliat", "Soluții clare"]
    },
    {
      icon: Wrench,
      title: "Reparații Mecanice",
      description: "De la probleme simple la reparații complexe, echipa noastră se ocupă de tot",
      features: ["Motor și transmisie", "Sistem de frânare", "Suspensie și direcție"]
    },
    {
      icon: Zap,
      title: "Servicii Electrice",
      description: "Rezolvăm orice problemă electrică, de la baterie la sisteme complexe",
      features: ["Înlocuire baterie", "Reparații alternator", "Sisteme electronice"]
    },
    {
      icon: Car,
      title: "Întreținere Periodică",
      description: "Menține mașina în formă optimă cu serviciile noastre de întreținere",
      features: ["Schimb ulei", "Verificare tehnică", "Înlocuire filtre"]
    }
  ]

  const stats = [
    { number: "15+", label: "Ani Experiență" },
    { number: "10k+", label: "Clienți Mulțumiți" },
    { number: "50k+", label: "Reparații Efectuate" },
    { number: "24/7", label: "Asistență Rutieră" }
  ]

  const testimonials = [
    {
      name: "Alexandru Popescu",
      rating: 5,
      text: "Cel mai bun service din Cluj! Profesioniști adevărați, prețuri corecte și transparență totală.",
      car: "BMW Seria 3"
    },
    {
      name: "Maria Ionescu",
      rating: 5,
      text: "Am găsit în sfârșit un service de încredere. Recomand cu căldură Service Adam!",
      car: "Volkswagen Golf"
    },
    {
      name: "Andrei Munteanu",
      rating: 5,
      text: "Rapiditate, profesionalism și atenție la detalii. Exact ce căutam pentru mașina mea.",
      car: "Audi A4"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </div>
        ))}
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                {heroSlides[currentSlide].title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                {heroSlides[currentSlide].subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/serviceadam/contact"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group font-medium"
                >
                  Programează-te Acum
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/serviceadam/servicii"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center font-medium"
                >
                  Vezi Serviciile
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-red-600 w-8' : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl md:text-5xl font-bold text-red-600 mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii auto pentru a menține mașina ta în condiții perfecte
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/serviceadam/servicii"
              className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 group font-medium"
            >
              Vezi Toate Serviciile
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                De Ce Să Alegi Service Adam?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Cu peste 15 ani de experiență în domeniu, suntem partenerul tău de încredere pentru toate nevoile auto.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Garanție Pentru Lucrări</h3>
                    <p className="text-gray-300">
                      Toate lucrările efectuate beneficiază de garanție extinsă. Calitatea este prioritatea noastră.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Timp de Execuție Rapid</h3>
                    <p className="text-gray-300">
                      Înțelegem că timpul tău este prețios. Lucrăm eficient fără a compromite calitatea.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-red-600 p-3 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Personal Certificat</h3>
                    <p className="text-gray-300">
                      Mecanicii noștri sunt certificați și participă constant la cursuri de perfecționare.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1631629553615-0fb0ce7fc87f?w=800&h=600&fit=crop"
                alt="Mecanic profesionist"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center gap-4">
                  <Users className="w-12 h-12" />
                  <div>
                    <div className="text-3xl font-bold">10,000+</div>
                    <div className="text-sm">Clienți Mulțumiți</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-xl text-gray-600">
              Încrederea clienților noștri este cea mai mare recompensă
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-white rounded-xl p-8 shadow-lg">
                      <div className="flex mb-4 justify-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-700 text-lg mb-6 text-center italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <div className="text-center">
                        <p className="font-semibold text-lg">{testimonial.name}</p>
                        <p className="text-gray-500">{testimonial.car}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Mașina Ta Merită Cel Mai Bun Service
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Programează-te astăzi și beneficiază de o consultație gratuită pentru orice problemă auto
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/serviceadam/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 group font-medium"
            >
              Programare Online
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:0740123456"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center justify-center gap-2 font-medium"
            >
              <Phone className="w-5 h-5" />
              Sună Acum: 0740 123 456
            </a>
          </div>
        </div>
      </section>
    </>
  )
}