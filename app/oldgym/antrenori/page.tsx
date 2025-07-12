import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Star, Award, Instagram, ArrowRight } from 'lucide-react'

export default function AntrenoriPage() {
  const trainers = [
    {
      name: 'Andrei Stan',
      role: 'Head Coach - Bodybuilding',
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop',
      experience: '15+ ani experiență',
      certifications: [
        'IFBB Pro Card',
        'Nutriție Sportivă Certificată',
        'Antrenor Personal NASM'
      ],
      achievements: [
        'Campion Național Bodybuilding 2018',
        'Locul 2 - Arnold Classic Europe 2020',
        '100+ transformări de succes'
      ],
      specialties: ['Bodybuilding', 'Transformări corporale', 'Nutriție'],
      instagram: '@andrei_stan_fitness'
    },
    {
      name: 'Radu Mihai',
      role: 'Lead Trainer - CrossFit',
      image: 'https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?w=600&h=800&fit=crop',
      experience: '10+ ani experiență',
      certifications: [
        'CrossFit Level 3',
        'Olympic Weightlifting',
        'Mobility Specialist'
      ],
      achievements: [
        'Participant CrossFit Games 2019',
        'Campion Regional 2021',
        'Coach al anului 2022'
      ],
      specialties: ['CrossFit', 'Olympic Lifting', 'Mobilitate'],
      instagram: '@radu_crossfit'
    },
    {
      name: 'Maria Pop',
      role: 'Senior Trainer - Fitness',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=600&h=800&fit=crop',
      experience: '8+ ani experiență',
      certifications: [
        'ACE Certified',
        'Pilates Instructor',
        'Pre/Postnatal Specialist'
      ],
      achievements: [
        'Fitness Model International',
        '500+ clienți mulțumiți',
        'Speaker la conferințe fitness'
      ],
      specialties: ['Fitness General', 'Tonifiere', 'Antrenament Femei'],
      instagram: '@maria_fitness_life'
    },
    {
      name: 'Vlad Popa',
      role: 'Combat Sports Coach',
      image: 'https://images.unsplash.com/photo-1544168190-79c17527004f?w=600&h=800&fit=crop',
      experience: '12+ ani experiență',
      certifications: [
        'Box - Centura Neagră',
        'MMA Coach Certificate',
        'Krav Maga Instructor'
      ],
      achievements: [
        'Fost campion național Box',
        'Antrenor echipa națională juniori',
        '50+ lupători pregătiți'
      ],
      specialties: ['Box', 'Kickboxing', 'MMA', 'Autoapărare'],
      instagram: '@vlad_combat_coach'
    },
    {
      name: 'Ana Ionescu',
      role: 'Yoga & Wellness Expert',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=800&fit=crop',
      experience: '10+ ani experiență',
      certifications: [
        'RYT 500 Yoga Alliance',
        'Ayurveda Practitioner',
        'Meditation Teacher'
      ],
      achievements: [
        'Retreat-uri internaționale',
        '1000+ ore predate',
        'Autor carte "Yoga pentru Toți"'
      ],
      specialties: ['Hatha Yoga', 'Vinyasa', 'Meditație', 'Wellness'],
      instagram: '@ana_yoga_life'
    },
    {
      name: 'Elena Rusu',
      role: 'Spinning & Cardio Expert',
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&h=800&fit=crop',
      experience: '7+ ani experiență',
      certifications: [
        'Spinning Certified',
        'HIIT Specialist',
        'Group Fitness Instructor'
      ],
      achievements: [
        'Maraton Spinning 12 ore',
        'Instructor preferat 3 ani la rând',
        'Creator program "Spin & Burn"'
      ],
      specialties: ['Spinning', 'HIIT', 'Cardio Dance'],
      instagram: '@elena_spin_master'
    }
  ]

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&h=800&fit=crop"
          alt="Old Gym Antrenori"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4">Antrenorii Noștri</h1>
          <p className="text-xl md:text-2xl text-amber-500 font-bold">
            Experți Dedicați Transformării Tale
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          La Old Gym, suntem mândri de echipa noastră de antrenori profesioniști. 
          Fiecare membru al echipei noastre aduce experiență vastă, certificări recunoscute 
          internațional și o pasiune autentică pentru a te ajuta să-ți atingi obiectivele.
        </p>
      </section>

      {/* Trainers Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
              <div key={index} className="card-glow bg-gray-900 rounded-xl overflow-hidden hover-lift">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={trainer.image}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{trainer.name}</h3>
                    <p className="text-amber-500">{trainer.role}</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Trophy className="w-5 h-5" />
                      <span className="text-sm font-semibold">{trainer.experience}</span>
                    </div>
                    <a 
                      href={`https://instagram.com/${trainer.instagram.slice(1)}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      <Instagram className="w-4 h-4" />
                      <span className="text-sm">{trainer.instagram}</span>
                    </a>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      Certificări
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {trainer.certifications.map((cert, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      Realizări
                    </h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {trainer.achievements.slice(0, 2).map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Specializări:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((specialty, idx) => (
                        <span 
                          key={idx}
                          className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link 
                    href="/oldgym/contact" 
                    className="block text-center bg-gradient-to-r from-red-600 to-amber-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                  >
                    Antrenează-te cu {trainer.name.split(' ')[0]}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Ce Ne Face <span className="gradient-text">Speciali</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Experiență Dovedită</h3>
              <p className="text-gray-400">
                Fiecare antrenor are minimum 7 ani experiență și sute de transformări reușite
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certificări Premium</h3>
              <p className="text-gray-400">
                Toți antrenorii noștri dețin certificări internaționale și se formează continuu
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Star className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Abordare Personalizată</h3>
              <p className="text-gray-400">
                Fiecare client primește un plan adaptat nevoilor și obiectivelor sale specifice
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Antrenament Personal <span className="gradient-text">Premium</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Beneficiază de atenția exclusivă a antrenorilor noștri experți și accelerează-ți rezultatele
          </p>
          <Link 
            href="/oldgym/contact" 
            className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
          >
            Programează Consultație Gratuită
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}