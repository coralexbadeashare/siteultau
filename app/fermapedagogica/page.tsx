'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Users, Leaf, Sun, Heart, Calendar, Clock, Star, TreePine, Sparkles, Bird, Flower2 } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const slides = [
    {
      title: "Bun Venit la Ferma Pedagogică!",
      subtitle: "Un loc magic unde copiii învață prin joacă și explorare",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074"
    },
    {
      title: "Prieteni Blânzi și Veseli",
      subtitle: "Întâlnește animalele noastre prietenoase",
      image: "https://images.unsplash.com/photo-1595301245377-1b0b863de10f?q=80&w=2070"
    },
    {
      title: "Aventuri în Natură",
      subtitle: "Descoperă secretele fermei și bucuria vieții la țară",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const activities = [
    {
      icon: Users,
      title: "Vizite Școlare",
      description: "Programe educative adaptate pentru grădinițe și școli",
      color: "bg-blue-100 text-blue-600",
      link: "/fermapedagogica/vizite-scolare"
    },
    {
      icon: Sparkles,
      title: "Ateliere Creative",
      description: "Activități practice: gătit, grădinărit, meșteșuguri",
      color: "bg-purple-100 text-purple-600",
      link: "/fermapedagogica/ateliere"
    },
    {
      icon: Sun,
      title: "Tabere de Vară",
      description: "Săptămâni pline de aventură și învățare în natură",
      color: "bg-yellow-100 text-yellow-600",
      link: "/fermapedagogica/tabere"
    },
    {
      icon: Calendar,
      title: "Evenimente Speciale",
      description: "Sărbători tematice și petreceri de aniversare",
      color: "bg-pink-100 text-pink-600",
      link: "/fermapedagogica/evenimente"
    }
  ]

  const features = [
    {
      icon: Heart,
      title: "Animale Prietenoase",
      description: "Cai, ponei, iepurași, găini, rațe, capre și multe altele"
    },
    {
      icon: TreePine,
      title: "Spații Verzi",
      description: "5 hectare de natură, livadă și grădină de legume"
    },
    {
      icon: Users,
      title: "Ghizi Specializați",
      description: "Educatori pasionați și cu experiență în lucrul cu copiii"
    },
    {
      icon: Leaf,
      title: "Educație Ecologică",
      description: "Învățăm despre sustenabilitate și protejarea naturii"
    }
  ]

  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Părinte",
      content: "Cea mai frumoasă experiență pentru copilul meu! A învățat atât de multe despre animale și natură într-un mod distractiv.",
      rating: 5
    },
    {
      name: "Prof. Ionescu Ana",
      role: "Învățătoare",
      content: "Recomand cu căldură! Programul educativ este excelent, iar copiii sunt fascinați de tot ce văd și fac aici.",
      rating: 5
    },
    {
      name: "Familia Georgescu",
      role: "Vizitatori",
      content: "Un loc minunat pentru întreaga familie. Copiii au fost încântați, iar noi am petrecut o zi relaxantă în natură.",
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section with Slider */}
      <section className="relative h-screen overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40" />
          </div>
        ))}
        
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <div className="animate-bounce-slow mb-6">
              <Flower2 className="w-16 h-16 mx-auto text-yellow-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {slides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in-delay">
              {slides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
              <Link
                href="/fermapedagogica/rezervare"
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                Rezervă o Vizită
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/fermapedagogica/despre"
                className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
              >
                Descoperă Povestea
              </Link>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
              O Experiență Educativă Unică
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              La Ferma Pedagogică, copiii descoperă lumea fascinantă a animalelor și naturii 
              într-un mediu sigur, distractiv și educativ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => (
              <Link
                key={index}
                href={activity.link}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                <div className="p-8">
                  <div className={`w-16 h-16 ${activity.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <activity.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {activity.description}
                  </p>
                  <span className="text-green-600 font-semibold inline-flex items-center group-hover:translate-x-2 transition-transform">
                    Află mai multe
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                De Ce Să Ne Alegeți?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Ferma Pedagogică oferă o experiență completă de învățare în natură, 
                unde teoria întâlnește practica într-un mod captivant și memorabil.
              </p>
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      <feature.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1548291915-e0d25b0e5e3e?q=80&w=2070"
                  alt="Copii la fermă"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1593787406536-3676a152d9cb?q=80&w=2070"
                  alt="Animale fermă"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                <Bird className="w-16 h-16 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Ce Spun Vizitatorii Noștri
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Părinți, profesori și copii împărtășesc experiențele lor la fermă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Vino Să Ne Cunoaștem!
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Programează o vizită și oferă copilului tău o zi de neuitat la fermă, 
            plină de aventură, învățare și prieteni noi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fermapedagogica/rezervare"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-all transform hover:scale-105 inline-flex items-center justify-center shadow-lg"
            >
              Rezervă Acum
              <Calendar className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/fermapedagogica/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <Phone className="mr-2 w-5 h-5" />
              0745 123 456
            </Link>
          </div>
        </div>
      </section>

      {/* Info Bar */}
      <section className="py-8 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-green-700" />
              <span className="font-semibold text-green-800">Marți - Duminică: 9:00 - 18:00</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-green-700" />
              <span className="font-semibold text-green-800">Comuna Florești, Cluj</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-green-700" />
              <a href="tel:0745123456" className="font-semibold text-green-800 hover:text-green-900">
                0745 123 456
              </a>
            </div>
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

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.6s both;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}

import { Phone, MapPin } from 'lucide-react'