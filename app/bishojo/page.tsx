'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, Palette, Camera, Calendar, Star, ArrowRight, CheckCircle, Phone, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function BishojoPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600',
      title: 'Frumusețea Ta, Arta Mea',
      subtitle: 'Machiaj profesional pentru fiecare ocazie specială'
    },
    {
      image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600',
      title: 'Strălucește în Ziua Ta',
      subtitle: 'Machiaj de mireasă care te face să radiezi'
    },
    {
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600',
      title: 'Cursuri de Makeup',
      subtitle: 'Învață secretele profesioniștilor'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroSlides.length])

  const services = [
    {
      icon: <Sparkles className="h-12 w-12 text-pink-500" />,
      title: 'Machiaj de Mireasă',
      description: 'Machiaj rezistent și elegant pentru cea mai importantă zi din viața ta',
      price: 'de la 500 RON',
      features: ['Proba de machiaj inclusă', 'Produse premium', 'Rezistență 12+ ore']
    },
    {
      icon: <Camera className="h-12 w-12 text-pink-500" />,
      title: 'Machiaj Evenimente',
      description: 'Look-uri spectaculoase pentru evenimente speciale și ședințe foto',
      price: 'de la 250 RON',
      features: ['Consultanță personalizată', 'Stil adaptat evenimentului', 'Retușuri gratuite']
    },
    {
      icon: <Palette className="h-12 w-12 text-pink-500" />,
      title: 'Cursuri de Makeup',
      description: 'Învață tehnici profesionale de machiaj în sesiuni personalizate',
      price: 'de la 150 RON/oră',
      features: ['Materiale incluse', 'Certificate de absolvire', 'Suport post-curs']
    }
  ]

  const portfolioItems = [
    { id: 1, image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=400', category: 'Mireasă' },
    { id: 2, image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400', category: 'Editorial' },
    { id: 3, image: 'https://images.unsplash.com/photo-1594647210801-5124307e0b05?w=400', category: 'Evenimente' },
    { id: 4, image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400', category: 'Beauty' },
    { id: 5, image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830cc4?w=400', category: 'Mireasă' },
    { id: 6, image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400', category: 'Fashion' }
  ]

  const testimonials = [
    {
      name: 'Alexandra M.',
      role: 'Mireasă 2023',
      content: 'Am fost absolut încântată de profesionalismul și talentul Anei. Machiajul a rezistat perfect toată ziua!',
      rating: 5
    },
    {
      name: 'Maria P.',
      role: 'Cursantă',
      content: 'Cursurile sunt foarte bine structurate și am învățat tehnici pe care le aplic zilnic. Recomand cu căldură!',
      rating: 5
    },
    {
      name: 'Elena D.',
      role: 'Eveniment Corporate',
      content: 'Servicii excelente! Punctualitate, atenție la detalii și rezultate care au depășit așteptările.',
      rating: 5
    }
  ]

  return (
    <div>
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
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105"
            >
              Programează o Consultație
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Serviciile Mele</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim servicii complete de machiaj profesional adaptate nevoilor tale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <p className="text-2xl font-bold text-pink-500 mb-6">{service.price}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-pink-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="#contact"
                  className="block text-center bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition-colors"
                >
                  Rezervă Acum
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portofoliu" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Portofoliul Meu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descoperă câteva dintre cele mai recente lucrări ale mele
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src={item.image}
                  alt={`Portfolio ${item.category}`}
                  width={400}
                  height={500}
                  className="object-cover w-full h-[400px] group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-lg font-semibold">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1595475884562-073c30d45670?w=600"
                alt="Makeup Artist"
                width={600}
                height={700}
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-pink-500 text-white p-6 rounded-2xl">
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm">Ani Experiență</p>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Despre Mine</h2>
              <p className="text-lg text-gray-600 mb-6">
                Sunt Ana, makeup artist profesionist cu o pasiune pentru evidențierea frumuseții naturale a fiecărei femei. 
                Cu peste 5 ani de experiență în industrie, am avut privilegiul de a lucra cu sute de cliente fericite.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Specializată în machiaj de mireasă și evenimente speciale, folosesc doar produse profesionale de înaltă 
                calitate pentru a asigura un look perfect și de lungă durată.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pink-500">500+</p>
                  <p className="text-gray-600">Cliente Fericite</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg text-center">
                  <p className="text-3xl font-bold text-pink-500">100+</p>
                  <p className="text-gray-600">Mirese Radiate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Ce Spun Clientele</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Feedback-ul clienților mei este cea mai mare recompensă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-pink-500 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Hai să Creăm Magia Împreună!</h2>
            <p className="text-xl mb-8 text-pink-100">
              Sunt aici să te ajut să arăți și să te simți extraordinar în ziua ta specială
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Calendar className="h-8 w-8 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Program Flexibil</h3>
                <p className="text-pink-100">Luni - Duminică</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Phone className="h-8 w-8 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Telefon</h3>
                <p className="text-pink-100">+40 723 456 789</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                <Mail className="h-8 w-8 mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">Email</h3>
                <p className="text-pink-100">contact@bishojobeauty.ro</p>
              </div>
            </div>

            <a
              href="tel:+40723456789"
              className="inline-flex items-center bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105"
            >
              Sună Acum pentru Programare
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
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
    </div>
  )
}