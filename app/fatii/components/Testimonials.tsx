'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Alexandru Popescu",
      role: "Manager Transport International",
      company: "TransEuro Logistics",
      content: "Cursul de manager transport a fost esențial pentru dezvoltarea afacerii mele. Instructorii sunt profesioniști cu experiență vastă în domeniu.",
      rating: 5,
      image: "AP"
    },
    {
      name: "Maria Ionescu",
      role: "Șofer Profesionist",
      company: "AutoBus Express",
      content: "Am obținut certificarea pentru transport persoane prin FATII. Pregătirea a fost excelentă, iar suportul primit pe parcursul cursului a fost remarcabil.",
      rating: 5,
      image: "MI"
    },
    {
      name: "Gheorghe Stancu",
      role: "Consilier ADR",
      company: "ChemTrans Romania",
      content: "Specializarea în transportul mărfurilor periculoase mi-a deschis noi oportunități profesionale. Recomand cu încredere cursurile FATII.",
      rating: 5,
      image: "GS"
    },
    {
      name: "Elena Dumitrescu",
      role: "Instructor Auto",
      company: "Școala de Șoferi Premium",
      content: "Formarea ca instructor auto la FATII a fost o experiență transformatoare. Materialele didactice și metodele de predare sunt la cele mai înalte standarde.",
      rating: 5,
      image: "ED"
    },
    {
      name: "Mihai Constantinescu",
      role: "Șofer Taxi",
      company: "City Taxi București",
      content: "Atestatul profesional obținut prin FATII mi-a permis să lucrez legal ca taximetrist. Cursul a fost bine structurat și foarte util.",
      rating: 5,
      image: "MC"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce Spun Absolvenții Noștri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mii de profesioniști și-au construit cariere de succes după absolvirea cursurilor noastre
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-xl">
            <Quote className="h-12 w-12 text-blue-600 mb-6" />
            
            <div className="space-y-6">
              <div className="flex mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-xl text-gray-700 italic leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonials[currentIndex].image}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-600">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}