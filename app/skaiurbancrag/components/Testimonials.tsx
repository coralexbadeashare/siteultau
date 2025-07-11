'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Maria Popescu',
      role: 'Părinte',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      text: 'Fiul meu vine aici de 2 ani și progresul lui este remarcabil. Instructorii sunt foarte dedicați și atmosfera este minunată pentru copii.',
      rating: 5
    },
    {
      name: 'Andrei Ionescu',
      role: 'Climber Avansat',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      text: 'Cel mai bun loc de escaladă din Cluj! Trasee variate, echipament de calitate și o comunitate extraordinară.',
      rating: 5
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Începător',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      text: 'Am început cu ședința de inițiere și acum sunt dependentă de escaladă! Instructorii sunt foarte răbdători și încurajatori.',
      rating: 5
    },
    {
      name: 'Mihai Constantinescu',
      role: 'Student',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      text: 'Reducerea pentru studenți este un mare plus! Vin de 3 ori pe săptămână și mă simt ca acasă aici.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Ce Spun <span className="text-orange-500">Clienții Noștri</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Peste 1000 de membri activi care fac parte din comunitatea SKAI
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <Quote className="w-12 h-12 text-orange-500/20 mb-6" />
            
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="text-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                      />
                      <div className="flex justify-center mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                      <p className="text-lg text-gray-700 mb-6 italic">
                        "{testimonial.text}"
                      </p>
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-orange-500 w-8' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          {/* Background Decoration */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl" />
        </div>

        {/* Social Proof */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-gray-900">1000+</div>
            <div className="text-gray-600">Membri Activi</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-gray-600">Rating Google</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">500+</div>
            <div className="text-gray-600">Copii Instruiți</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gray-900">50+</div>
            <div className="text-gray-600">Evenimente Organizate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials