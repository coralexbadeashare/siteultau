'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Clock, Flame, Calendar, ArrowRight } from 'lucide-react'

export default function ClasePage() {
  const [selectedCategory, setSelectedCategory] = useState('toate')

  const categories = [
    { id: 'toate', name: 'Toate Clasele' },
    { id: 'strength', name: 'Forță' },
    { id: 'cardio', name: 'Cardio' },
    { id: 'flexibility', name: 'Flexibilitate' },
    { id: 'combat', name: 'Combat' }
  ]

  const classes = [
    {
      id: 'bodybuilding',
      name: 'Bodybuilding',
      category: 'strength',
      description: 'Construiește masa musculară și sculptează-ți corpul cu tehnici avansate de antrenament.',
      image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&h=600&fit=crop',
      duration: '60-90 min',
      level: 'Toate nivelurile',
      frequency: 'Zilnic',
      calories: '400-600',
      benefits: [
        'Creștere masă musculară',
        'Definire musculară',
        'Forță crescută',
        'Metabolism accelerat'
      ]
    },
    {
      id: 'crossfit',
      name: 'CrossFit',
      category: 'strength',
      description: 'Antrenament funcțional de înaltă intensitate care combină haltere, gimnastică și cardio.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      duration: '60 min',
      level: 'Intermediar/Avansat',
      frequency: '5x/săptămână',
      calories: '600-800',
      benefits: [
        'Condiție fizică completă',
        'Forță funcțională',
        'Rezistență cardio',
        'Comunitate puternică'
      ]
    },
    {
      id: 'fitness',
      name: 'Fitness & Cardio',
      category: 'cardio',
      description: 'Antrenament cardiovascular pentru arderea grăsimilor și îmbunătățirea rezistenței.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop',
      duration: '45-60 min',
      level: 'Toate nivelurile',
      frequency: 'Zilnic',
      calories: '400-500',
      benefits: [
        'Ardere grăsimi',
        'Sănătate cardiovasculară',
        'Rezistență îmbunătățită',
        'Tonifiere generală'
      ]
    },
    {
      id: 'yoga',
      name: 'Yoga',
      category: 'flexibility',
      description: 'Echilibru perfect între minte și corp prin posturi, respirație și meditație.',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop',
      duration: '60-75 min',
      level: 'Toate nivelurile',
      frequency: '6x/săptămână',
      calories: '200-350',
      benefits: [
        'Flexibilitate crescută',
        'Reducere stres',
        'Echilibru și coordonare',
        'Pace interioară'
      ]
    },
    {
      id: 'box',
      name: 'Box & Kickboxing',
      category: 'combat',
      description: 'Antrenament de box tradițional combinat cu tehnici de kickboxing pentru fitness și autoapărare.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&h=600&fit=crop',
      duration: '60 min',
      level: 'Toate nivelurile',
      frequency: '4x/săptămână',
      calories: '600-800',
      benefits: [
        'Ardere calorică intensă',
        'Tehnici autoapărare',
        'Coordonare și reflexe',
        'Eliberare stres'
      ]
    },
    {
      id: 'spinning',
      name: 'Spinning',
      category: 'cardio',
      description: 'Antrenament pe bicicletă staționară cu muzică motivațională și intensitate variabilă.',
      image: 'https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=800&h=600&fit=crop',
      duration: '45 min',
      level: 'Toate nivelurile',
      frequency: '5x/săptămână',
      calories: '500-700',
      benefits: [
        'Cardio intens',
        'Tonifiere picioare',
        'Rezistență crescută',
        'Low impact'
      ]
    }
  ]

  const schedule = {
    luni: [
      { time: '07:00', class: 'Fitness & Cardio', trainer: 'Maria Pop' },
      { time: '09:00', class: 'Yoga', trainer: 'Ana Ionescu' },
      { time: '18:00', class: 'CrossFit', trainer: 'Radu Mihai' },
      { time: '19:00', class: 'Box & Kickboxing', trainer: 'Vlad Popa' },
      { time: '20:00', class: 'Spinning', trainer: 'Elena Rusu' }
    ],
    marti: [
      { time: '07:00', class: 'Spinning', trainer: 'Elena Rusu' },
      { time: '10:00', class: 'Bodybuilding', trainer: 'Andrei Stan' },
      { time: '17:00', class: 'Yoga', trainer: 'Ana Ionescu' },
      { time: '18:30', class: 'Fitness & Cardio', trainer: 'Maria Pop' },
      { time: '20:00', class: 'CrossFit', trainer: 'Radu Mihai' }
    ]
  }

  const filteredClasses = selectedCategory === 'toate' 
    ? classes 
    : classes.filter(cls => cls.category === selectedCategory)

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1600&h=800&fit=crop"
          alt="Old Gym Clase"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4">Clasele Noastre</h1>
          <p className="text-xl md:text-2xl text-amber-500 font-bold">
            Găsește Antrenamentul Perfect Pentru Tine
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-900 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredClasses.map((cls) => (
              <div key={cls.id} className="card-glow bg-gray-900 rounded-xl overflow-hidden hover-lift">
                <div className="aspect-video relative">
                  <Image
                    src={cls.image}
                    alt={cls.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{cls.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {cls.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4" />
                        {cls.calories} cal
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{cls.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Nivel:</span>
                      <span className="text-amber-500">{cls.level}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Frecvență:</span>
                      <span className="text-amber-500">{cls.frequency}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Beneficii:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {cls.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href="/oldgym/contact" 
                    className="block text-center bg-gradient-to-r from-red-600 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Înscrie-te la Clasă
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Program <span className="gradient-text">Săptămânal</span>
            </h2>
            <p className="text-xl text-gray-400">
              Exemplu de program pentru Luni și Marți
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(schedule).map(([day, daySchedule]) => (
              <div key={day} className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-white mb-6 capitalize flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-amber-500" />
                  {day}
                </h3>
                <div className="space-y-4">
                  {daySchedule.map((session, idx) => (
                    <div key={idx} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                      <div>
                        <p className="text-white font-semibold">{session.class}</p>
                        <p className="text-sm text-gray-400">{session.trainer}</p>
                      </div>
                      <span className="text-amber-500 font-semibold">{session.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link 
              href="/oldgym/contact" 
              className="inline-flex items-center text-amber-500 font-semibold hover:text-amber-400 transition-colors"
            >
              Vezi programul complet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Prima Clasă Este <span className="gradient-text">Gratuită</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Vino să experimentezi energia Old Gym. Alege orice clasă și participă gratuit!
          </p>
          <Link 
            href="/oldgym/contact" 
            className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
          >
            Rezervă Clasa Gratuită
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}