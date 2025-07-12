import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Users, Star, Target, ArrowRight } from 'lucide-react'

export default function DesprePage() {
  const values = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Excelență",
      description: "Ne străduim să fim cei mai buni în tot ceea ce facem"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Comunitate",
      description: "Construim o familie de oameni pasionați de fitness"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Inovație",
      description: "Adoptăm cele mai noi metode și tehnologii"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Rezultate",
      description: "Ne concentrăm pe atingerea obiectivelor tale"
    }
  ]

  const milestones = [
    { year: "2009", event: "Fondarea Old Gym cu doar 200mp" },
    { year: "2012", event: "Extindere la 500mp și primul campion național" },
    { year: "2015", event: "Deschiderea zonei CrossFit și MMA" },
    { year: "2018", event: "Renovare completă și echipamente noi" },
    { year: "2020", event: "Lansarea programelor online" },
    { year: "2024", event: "5000+ membri activi și 50+ clase/săptămână" }
  ]

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=800&fit=crop"
          alt="Old Gym Despre"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4">Despre Noi</h1>
          <p className="text-xl md:text-2xl text-amber-500 font-bold">
            Povestea Old Gym - 15 Ani de Excelență
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
                Unde <span className="gradient-text">Legendele</span> Se Nasc
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Old Gym a început în 2009 ca un vis al unui grup de pasionați de fitness care doreau să creeze mai mult decât o simplă sală de sport. Voiau să construiască un templu unde oamenii să-și poată depăși limitele și să-și transforme viețile.
              </p>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                De-a lungul anilor, am crescut de la o mică sală de 200mp la unul dintre cele mai mari și moderne centre de fitness din Transilvania. Cu peste 2000mp de spațiu dedicat antrenamentului, oferim membrilor noștri tot ce au nevoie pentru a-și atinge obiectivele.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Suntem mândri că am format peste 50 de campioni naționali și internaționali în diverse discipline: bodybuilding, powerlifting, CrossFit și arte marțiale. Dar cea mai mare realizare a noastră sunt miile de vieți transformate.
              </p>
              <Link 
                href="/oldgym/contact" 
                className="inline-flex items-center bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Alătură-te Familiei
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1623874514711-0f321325f318?w=800&h=600&fit=crop"
                alt="Old Gym Interior"
                width={800}
                height={600}
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-red-600 to-amber-500 text-white p-6 rounded-xl shadow-xl">
                <div className="font-bebas text-5xl mb-1">15+</div>
                <div className="text-lg">Ani de Experiență</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Valorile <span className="gradient-text">Noastre</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Parcursul <span className="gradient-text">Nostru</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-amber-500 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-red-600 to-amber-500 rounded-full relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gray-700" />
                  )}
                </div>
                <div className="flex-grow pl-8">
                  <p className="text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Facilitățile <span className="gradient-text">Noastre</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              2000+ mp dedicați transformării tale
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
                alt="Zona Cardio"
                width={600}
                height={400}
                className="w-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Zona Cardio</h3>
                  <p className="text-gray-300">50+ aparate cardio de ultimă generație</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&h=400&fit=crop"
                alt="Zona Greutăți"
                width={600}
                height={400}
                className="w-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Zona Greutăți</h3>
                  <p className="text-gray-300">Echipamente profesionale pentru toate grupele musculare</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=600&h=400&fit=crop"
                alt="Ring Box & MMA"
                width={600}
                height={400}
                className="w-full group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ring Box & MMA</h3>
                  <p className="text-gray-300">Spațiu dedicat artelor marțiale</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Vino Să Ne <span className="gradient-text">Cunoști</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Programează un tur gratuit al sălii și descoperă cum te putem ajuta să-ți atingi obiectivele
          </p>
          <Link 
            href="/oldgym/contact" 
            className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
          >
            Programează Tur Gratuit
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}