'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Brain, Heart, Users, Award, Shield, Target, Clock, ArrowRight, CheckCircle } from 'lucide-react'

export default function ServiciiPage() {
  const [activeCategory, setActiveCategory] = useState<'psihoterapie' | 'consiliere' | 'evaluare'>('psihoterapie')

  const services = {
    psihoterapie: {
      title: 'Psihoterapie Cognitiv-Comportamentală',
      icon: Brain,
      color: 'purple',
      description: 'Terapie bazată pe dovezi științifice pentru tratarea diverselor tulburări psihologice',
      conditions: [
        {
          name: 'Tulburări de anxietate',
          details: ['Anxietate generalizată', 'Atacuri de panică', 'Fobie socială', 'Fobii specifice']
        },
        {
          name: 'Tulburări afective',
          details: ['Depresie', 'Distimie', 'Tulburare bipolară', 'Tulburări afective sezoniere']
        },
        {
          name: 'Tulburări obsesiv-compulsive',
          details: ['TOC clasic', 'Tulburări de spectru TOC', 'Comportamente repetitive']
        },
        {
          name: 'Stres post-traumatic',
          details: ['PTSD', 'Trauma complexă', 'Stres acut', 'Tulburări de adaptare']
        },
        {
          name: 'Tulburări de personalitate',
          details: ['Borderline', 'Evitantă', 'Dependentă', 'Obsesiv-compulsivă']
        },
        {
          name: 'Probleme relaționale',
          details: ['Conflicte de cuplu', 'Divorț/separare', 'Probleme familiale', 'Codependență']
        }
      ],
      benefits: [
        'Identificarea și modificarea gândurilor disfuncționale',
        'Dezvoltarea abilităților de coping sănătoase',
        'Îmbunătățirea reglării emoționale',
        'Creșterea rezilienței psihologice',
        'Prevenirea recăderilor'
      ]
    },
    consiliere: {
      title: 'Consiliere Psihologică și Dezvoltare Personală',
      icon: Heart,
      color: 'pink',
      description: 'Suport pentru creștere personală și îmbunătățirea calității vieții',
      areas: [
        {
          name: 'Dezvoltare personală',
          services: ['Creșterea stimei de sine', 'Descoperirea valorilor personale', 'Stabilirea obiectivelor', 'Dezvoltarea potențialului']
        },
        {
          name: 'Managementul emoțiilor',
          services: ['Reglare emoțională', 'Gestionarea furiei', 'Procesarea durerii', 'Dezvoltarea inteligenței emoționale']
        },
        {
          name: 'Abilități de viață',
          services: ['Comunicare asertivă', 'Managementul timpului', 'Luarea deciziilor', 'Rezolvarea problemelor']
        },
        {
          name: 'Stres și burnout',
          services: ['Tehnici de relaxare', 'Echilibru viață-muncă', 'Prevenirea epuizării', 'Strategii de coping']
        },
        {
          name: 'Tranziții de viață',
          services: ['Schimbări de carieră', 'Pensionare', 'Mutări/relocări', 'Evenimente majore de viață']
        },
        {
          name: 'Sănătate și wellness',
          services: ['Managementul greutății', 'Stil de viață sănătos', 'Motivație pentru schimbare', 'Aderența la tratament']
        }
      ],
      process: [
        'Evaluare inițială comprehensivă',
        'Stabilirea obiectivelor clare',
        'Plan personalizat de dezvoltare',
        'Monitorizare și ajustare continuă',
        'Suport între ședințe'
      ]
    },
    evaluare: {
      title: 'Evaluare Psihologică Clinică',
      icon: Award,
      color: 'blue',
      description: 'Evaluări comprehensive pentru diagnostic și planificare terapeutică',
      types: [
        {
          name: 'Evaluare clinică',
          includes: ['Interviu clinic structurat', 'Istoric psihologic detaliat', 'Evaluare simptomatologie', 'Diagnostic DSM-5']
        },
        {
          name: 'Evaluare cognitivă',
          includes: ['Funcții executive', 'Memorie și atenție', 'Procesare informațională', 'Abilități de rezolvare a problemelor']
        },
        {
          name: 'Evaluare emoțională',
          includes: ['Stări afective', 'Reglare emoțională', 'Alexitimie', 'Inteligență emoțională']
        },
        {
          name: 'Evaluare de personalitate',
          includes: ['Trăsături de personalitate', 'Stiluri de coping', 'Mecanisme de apărare', 'Patternuri relaționale']
        },
        {
          name: 'Evaluare contextuală',
          includes: ['Context familial', 'Mediu profesional', 'Suport social', 'Factori de stres']
        }
      ],
      instruments: [
        'Chestionare standardizate validate',
        'Scale clinice de evaluare',
        'Teste psihometrice',
        'Metode proiective',
        'Observație clinică'
      ]
    }
  }

  const currentService = services[activeCategory]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Serviciile Noastre
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii psihologice adaptate nevoilor tale individuale
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {Object.entries(services).map(([key, service]) => {
              const Icon = service.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as 'psihoterapie' | 'consiliere' | 'evaluare')}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-200 ${
                    activeCategory === key
                      ? `bg-${service.color}-600 text-white shadow-lg transform scale-105`
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                  style={activeCategory === key ? { backgroundColor: service.color === 'purple' ? '#9333ea' : service.color === 'pink' ? '#ec4899' : '#3b82f6' } : {}}
                >
                  <Icon className="h-6 w-6" />
                  <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex p-4 bg-purple-100 rounded-full mb-6">
              <currentService.icon className="h-12 w-12 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{currentService.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{currentService.description}</p>
          </div>

          {/* Psihoterapie Content */}
          {activeCategory === 'psihoterapie' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Condiții Tratate
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentService.conditions?.map((condition, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{condition.name}</h4>
                      <ul className="space-y-1">
                        {condition.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-600 text-sm flex items-center">
                            <CheckCircle className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Beneficiile Terapiei
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {currentService.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Target className="h-6 w-6 text-purple-600 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Consiliere Content */}
          {activeCategory === 'consiliere' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Arii de Intervenție
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentService.areas?.map((area, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{area.name}</h4>
                      <ul className="space-y-1">
                        {area.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-600 text-sm flex items-center">
                            <Heart className="h-4 w-4 text-pink-500 mr-2 flex-shrink-0" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-pink-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Procesul de Consiliere
                </h3>
                <div className="max-w-3xl mx-auto">
                  {currentService.process?.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 mb-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Evaluare Content */}
          {activeCategory === 'evaluare' && (
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                  Tipuri de Evaluare
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {currentService.types?.map((type, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">{type.name}</h4>
                      <ul className="space-y-2">
                        {type.includes.map((include, includeIndex) => (
                          <li key={includeIndex} className="text-gray-600 text-sm flex items-start">
                            <Shield className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            {include}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Instrumente Utilizate
                </h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {currentService.instruments?.map((instrument, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Award className="h-6 w-6 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-700">{instrument}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cum Funcționează?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Contact Inițial', description: 'Programează o consultație prin telefon sau email' },
              { step: 2, title: 'Prima Întâlnire', description: 'Evaluare inițială și stabilirea obiectivelor' },
              { step: 3, title: 'Plan Terapeutic', description: 'Dezvoltarea unui plan personalizat de tratament' },
              { step: 4, title: 'Ședințe Regulate', description: 'Întâlniri săptămânale pentru progres continuu' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 text-white rounded-full text-2xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Întrebări Frecvente
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'Cât durează o ședință de terapie?',
                a: 'O ședință standard durează 50 de minute. Prima întâlnire poate dura până la 90 de minute pentru evaluarea completă.'
              },
              {
                q: 'Care este frecvența ședințelor?',
                a: 'De obicei, ședințele au loc săptămânal, dar frecvența poate fi ajustată în funcție de nevoile individuale și progresul terapeutic.'
              },
              {
                q: 'Cât timp durează un proces terapeutic?',
                a: 'Durata terapiei variază în funcție de complexitatea problemelor și obiectivele stabilite. Unele persoane văd îmbunătățiri în 8-12 ședințe, altele pot avea nevoie de mai mult timp.'
              },
              {
                q: 'Este confidențială terapia?',
                a: 'Da, toate informațiile partajate în terapie sunt strict confidențiale, cu excepția situațiilor prevăzute de lege (risc iminent pentru sine sau alții).'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ești gata să faci primul pas?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Contactează-ne pentru a programa o consultație inițială
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/psihologcristinapopa/contact#programare" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
              <Clock className="mr-2 h-5 w-5" />
              Programează acum
            </Link>
            <Link href="/psihologcristinapopa/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}