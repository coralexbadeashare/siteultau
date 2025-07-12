'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Users, Palette, Sun, Calendar, Clock, ArrowRight, Check, Star, Sparkles, Heart } from 'lucide-react'
import { useState } from 'react'

export default function ActivitatiPage() {
  const [activeCategory, setActiveCategory] = useState<'scolare' | 'ateliere' | 'tabere' | 'evenimente'>('scolare')

  const categories = {
    scolare: {
      title: "Vizite Școlare",
      icon: Users,
      description: "Programe educative pentru grădinițe și școli",
      color: "bg-blue-100 text-blue-600",
      programs: [
        {
          title: "Micii Fermieri (3-6 ani)",
          duration: "2-3 ore",
          description: "Program adaptat pentru preșcolari cu activități simple și interactive",
          activities: [
            "Hrănirea animalelor mici",
            "Plimbare cu poneiul",
            "Colectarea ouălor",
            "Povești despre animale"
          ],
          price: "35 lei/copil",
          image: "https://images.unsplash.com/photo-1536656930059-2bc7a5c20c49?q=80&w=2070"
        },
        {
          title: "Exploratori la Fermă (7-10 ani)",
          duration: "3-4 ore",
          description: "Descoperă secretele vieții la fermă prin activități practice",
          activities: [
            "Tur ghidat al fermei",
            "Atelier de grădinărit",
            "Prepararea pâinii",
            "Jocuri educative în natură"
          ],
          price: "45 lei/copil",
          image: "https://images.unsplash.com/photo-1517686748843-bb360cfc62b3?q=80&w=2070"
        },
        {
          title: "Ferma Sustenabilă (11-14 ani)",
          duration: "4-5 ore",
          description: "Program avansat despre agricultura ecologică și sustenabilitate",
          activities: [
            "Workshop eco-farming",
            "Compostare și reciclare",
            "Proiecte de permacultură",
            "Dezbatere despre mediu"
          ],
          price: "55 lei/copil",
          image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070"
        }
      ]
    },
    ateliere: {
      title: "Ateliere Creative",
      icon: Palette,
      description: "Activități practice și meșteșuguri tradiționale",
      color: "bg-purple-100 text-purple-600",
      programs: [
        {
          title: "Atelier de Gătit Sănătos",
          duration: "2 ore",
          description: "Învață să prepari mâncăruri delicioase cu ingrediente de la fermă",
          activities: [
            "Prepararea pâinii de casă",
            "Salate cu legume proaspete",
            "Smoothie-uri naturale",
            "Degustare produse fermă"
          ],
          price: "60 lei/persoană",
          image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
        },
        {
          title: "Meșteșuguri Tradiționale",
          duration: "3 ore",
          description: "Redescoperă tradițiile românești prin activități practice",
          activities: [
            "Țesut și împâslit",
            "Olărit pentru începători",
            "Pictură pe lemn",
            "Confecționare jucării naturale"
          ],
          price: "70 lei/persoană",
          image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=2070"
        },
        {
          title: "Grădinărit pentru Copii",
          duration: "2 ore",
          description: "Mâini mici, plante mari - învață să cultivi propria grădină",
          activities: [
            "Plantare în ghivece",
            "Îngrijirea plantelor",
            "Crearea unui herbarium",
            "Decorațiuni din natură"
          ],
          price: "40 lei/copil",
          image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070"
        }
      ]
    },
    tabere: {
      title: "Tabere de Vară",
      icon: Sun,
      description: "Aventuri de neuitat în vacanța de vară",
      color: "bg-yellow-100 text-yellow-600",
      programs: [
        {
          title: "Tabăra Micilor Naturaliști",
          duration: "5 zile",
          description: "O săptămână plină de descoperiri și aventuri în natură",
          activities: [
            "Explorare natură și drumeții",
            "Îngrijirea animalelor",
            "Ateliere creative zilnice",
            "Seri de povești la foc de tabără"
          ],
          price: "450 lei/copil",
          image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070"
        },
        {
          title: "Tabăra de Echitație",
          duration: "7 zile",
          description: "Învață să călărești și să îngrijești caii",
          activities: [
            "Lecții zilnice de echitație",
            "Îngrijirea cailor",
            "Plimbări în natură",
            "Teoria echitației"
          ],
          price: "800 lei/copil",
          image: "https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2070"
        },
        {
          title: "Eco-Camp",
          duration: "5 zile",
          description: "Tabără dedicată sustenabilității și protecției mediului",
          activities: [
            "Proiecte eco-friendly",
            "Construcție adăposturi naturale",
            "Orientare în natură",
            "Zero waste challenge"
          ],
          price: "500 lei/copil",
          image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=2070"
        }
      ]
    },
    evenimente: {
      title: "Evenimente Speciale",
      icon: Calendar,
      description: "Sărbători și petreceri memorabile la fermă",
      color: "bg-pink-100 text-pink-600",
      programs: [
        {
          title: "Petreceri de Aniversare",
          duration: "3 ore",
          description: "Sărbătorește ziua specială într-un cadru magic",
          activities: [
            "Tur personalizat fermă",
            "Jocuri și concursuri",
            "Plimbare cu căruța",
            "Tort și gustări eco"
          ],
          price: "De la 500 lei/petrecere",
          image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070"
        },
        {
          title: "Halloween la Fermă",
          duration: "4 ore",
          description: "O seară magică plină de surprize și distracție",
          activities: [
            "Vânătoare de comori",
            "Sculptat dovleci",
            "Costume și machiaj",
            "Povești de groază prietenoase"
          ],
          price: "50 lei/copil",
          image: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?q=80&w=2070"
        },
        {
          title: "Crăciun la Fermă",
          duration: "3 ore",
          description: "Magia sărbătorilor în atmosfera caldă a fermei",
          activities: [
            "Atelier ornamente naturale",
            "Colinde la grajd",
            "Ciocolată caldă și turtă dulce",
            "Întâlnire cu Moș Crăciun"
          ],
          price: "60 lei/copil",
          image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2069"
        }
      ]
    }
  }

  const currentCategory = categories[activeCategory]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2070"
          alt="Activități Ferma Pedagogică"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-900/40" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Activități și Programe</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Experiențe educative unice pentru toate vârstele
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="py-12 bg-green-50 sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(categories).map(([key, category]) => {
              const Icon = category.icon
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof typeof categories)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === key
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {category.title}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className={`inline-flex items-center justify-center w-20 h-20 ${currentCategory.color} rounded-full mb-4`}>
              <currentCategory.icon className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              {currentCategory.title}
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              {currentCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {currentCategory.programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-600" />
                      <span className="text-sm font-semibold text-gray-700">{program.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{program.title}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Activități incluse:</h4>
                    <ul className="space-y-2">
                      {program.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Preț</p>
                      <p className="text-lg font-bold text-green-600">{program.price}</p>
                    </div>
                    <Link
                      href="/fermapedagogica/rezervare"
                      className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center group-hover:scale-105"
                    >
                      Rezervă
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-green-800 mb-4">
                De Ce Să Alegi Programele Noastre?
              </h2>
              <p className="text-xl text-green-700">
                Oferim experiențe educative de calitate într-un mediu sigur și stimulant
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Personal Calificat",
                  description: "Educatori cu experiență și pasiune pentru lucrul cu copiii",
                  icon: Star
                },
                {
                  title: "Siguranță Garantată",
                  description: "Mediu securizat și activități adaptate fiecărei vârste",
                  icon: Shield
                },
                {
                  title: "Experiențe Autentice",
                  description: "Contact direct cu natura și animalele într-un cadru real",
                  icon: Heart
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Rezervă o Experiență de Neuitat
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Alege programul potrivit și oferă copilului tău o zi plină de învățare și distracție la fermă
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fermapedagogica/rezervare"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Rezervă Acum
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/fermapedagogica/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Întrebări? Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { Shield } from 'lucide-react'