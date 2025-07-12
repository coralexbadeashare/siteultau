'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Info, Sparkles, Star } from 'lucide-react'
import { useState } from 'react'

export default function AnimalePage() {
  const [selectedAnimal, setSelectedAnimal] = useState<string | null>(null)

  const animals = [
    {
      id: 'cai',
      name: 'Cai și Ponei',
      description: 'Prietenii mari și mici ai fermei',
      image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2070',
      details: {
        about: 'Caii și poneii noștri sunt dresați special pentru interacțiunea cu copiii. Sunt blânzi, prietenoși și adoră să fie mângâiați.',
        funFacts: [
          'Avem 3 cai mari și 4 ponei',
          'Cel mai bătrân cal, Max, are 15 ani',
          'Poneiul Bella este favoritul copiilor'
        ],
        activities: ['Plimbări călare', 'Hrănire', 'Periaj și îngrijire'],
        color: 'bg-amber-100 text-amber-700'
      }
    },
    {
      id: 'iepuri',
      name: 'Iepurași',
      description: 'Pufoșii adorabili ai fermei',
      image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?q=80&w=2070',
      details: {
        about: 'Familia noastră de iepurași este foarte prietenoasă. Copiii pot să-i țină în brațe și să-i hrănească cu legume proaspete.',
        funFacts: [
          '12 iepurași de diferite rase',
          'Cel mai mic cântărește doar 800g',
          'Le place foarte mult morcovii și salata'
        ],
        activities: ['Hrănire cu legume', 'Mângâiere', 'Observarea comportamentului'],
        color: 'bg-pink-100 text-pink-700'
      }
    },
    {
      id: 'gaini',
      name: 'Găini și Rațe',
      description: 'Producătorii de ouă ai fermei',
      image: 'https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=2074',
      details: {
        about: 'Avem o varietate de păsări de curte, inclusiv găini ouătoare și rațe. Copiii pot colecta ouăle proaspete în fiecare dimineață.',
        funFacts: [
          '20 de găini și 8 rațe',
          'Produc aproximativ 15 ouă pe zi',
          'Găinile noastre sunt crescute liber'
        ],
        activities: ['Colectarea ouălor', 'Hrănire', 'Învățare despre ciclul de viață'],
        color: 'bg-orange-100 text-orange-700'
      }
    },
    {
      id: 'capre',
      name: 'Căprițe',
      description: 'Acrobatele vesele ale fermei',
      image: 'https://images.unsplash.com/photo-1524024973431-2ad916746881?q=80&w=2070',
      details: {
        about: 'Căprițele noastre sunt foarte jucăușe și energice. Le place să se cațăre și să sară, oferind un spectacol amuzant pentru vizitatori.',
        funFacts: [
          '6 căprițe de diferite vârste',
          'Cea mai tânără are doar 3 luni',
          'Le place să facă gimnastică pe platforme'
        ],
        activities: ['Hrănire cu fân', 'Jocuri interactive', 'Observarea acrobațiilor'],
        color: 'bg-green-100 text-green-700'
      }
    },
    {
      id: 'oi',
      name: 'Oi',
      description: 'Blândețea îmbrăcată în lână',
      image: 'https://images.unsplash.com/photo-1484557985045-edf25e08da73?q=80&w=2073',
      details: {
        about: 'Oile noastre sunt foarte calme și prietenoase. Primăvara, copiii pot asista la tunsul oilor și pot învăța despre procesarea lânii.',
        funFacts: [
          '8 oi adulte și miei primăvara',
          'Lâna lor se tunde de 2 ori pe an',
          'Sunt excelente la întreținerea ierbii'
        ],
        activities: ['Hrănire', 'Atingerea lânii', 'Observarea mieilor (primăvara)'],
        color: 'bg-gray-100 text-gray-700'
      }
    },
    {
      id: 'porci',
      name: 'Purcei',
      description: 'Gurmanzi simpatici și inteligenți',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=2073',
      details: {
        about: 'Purceii noștri vietnamezi sunt foarte inteligenți și curioși. Contrar miturilor, sunt animale foarte curate și organizate.',
        funFacts: [
          '4 purcei vietnamezi',
          'Sunt mai inteligenți decât câinii',
          'Le place să facă baie de noroi vara'
        ],
        activities: ['Hrănire', 'Jocuri de inteligență', 'Observarea comportamentului'],
        color: 'bg-red-100 text-red-700'
      }
    }
  ]

  const selectedAnimalData = animals.find(a => a.id === selectedAnimal)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1595301245377-1b0b863de10f?q=80&w=2070"
          alt="Animalele Fermei"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-900/40" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4 animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Animalele Noastre</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Întâlnește locuitorii fermei - prieteni blânzi și veseli
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Sparkles className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              O Familie Mare și Fericită
            </h2>
            <p className="text-lg text-green-700 leading-relaxed">
              La ferma noastră, fiecare animal are un nume și o poveste. Sunt îngrijiți cu 
              dragoste și sunt obișnuiți cu vizitatorii, în special cu copiii. Toate animalele 
              noastre sunt prietenoase și le place să interacționeze cu oamenii.
            </p>
          </div>
        </div>
      </section>

      {/* Animals Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
                onClick={() => setSelectedAnimal(animal.id)}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{animal.name}</h3>
                    <p className="text-white/90">{animal.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <button className="w-full bg-green-600 text-white py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                    <Info className="w-5 h-5 mr-2" />
                    Află Mai Multe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animal Details Modal */}
      {selectedAnimal && selectedAnimalData && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedAnimal(null)}>
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedAnimalData.image}
                alt={selectedAnimalData.name}
                fill
                className="object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedAnimal(null)}
                className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedAnimalData.name}</h2>
              
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {selectedAnimalData.details.about}
                </p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Lucruri Interesante
                </h3>
                <ul className="space-y-2">
                  {selectedAnimalData.details.funFacts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span className="text-gray-700">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Activități cu {selectedAnimalData.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAnimalData.details.activities.map((activity, index) => (
                    <span 
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm font-medium ${selectedAnimalData.details.color}`}
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/fermapedagogica/rezervare"
                className="block w-full bg-green-600 text-white text-center py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
              >
                Rezervă o Vizită
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Fun Facts Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">
              Știați Că...?
            </h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Câteva lucruri fascinante despre animalele de la fermă
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { fact: "Găinile pot recunoaște peste 100 de fețe diferite", icon: "🐔" },
              { fact: "Iepurii pot sări până la 90 cm înălțime", icon: "🐰" },
              { fact: "Caprele au vedere la 320-340 de grade", icon: "🐐" },
              { fact: "Porcii sunt al 4-lea cel mai inteligent animal", icon: "🐷" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="text-gray-700">{item.fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Vino Să-ți Faci Prieteni Noi!
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Animalele noastre abia așteaptă să te cunoască. Programează o vizită și 
            trăiește experiența unică de a interacționa cu ele
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fermapedagogica/rezervare"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              <Heart className="mr-2 w-5 h-5" />
              Rezervă o Vizită
            </Link>
            <Link
              href="/fermapedagogica/activitati"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center justify-center"
            >
              Vezi Activitățile
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

import { X } from 'lucide-react'