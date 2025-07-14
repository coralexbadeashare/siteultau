import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Award, Users, Heart, Brain, Target, Briefcase, Calendar } from 'lucide-react'

export default function DesprePage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Educație',
      items: [
        'Licență în Psihologie - Universitatea Babeș-Bolyai, Cluj-Napoca',
        'Master în Psihologie Clinică - Universitatea Babeș-Bolyai',
        'Formare în Psihoterapie Cognitiv-Comportamentală'
      ]
    },
    {
      icon: Award,
      title: 'Certificări',
      items: [
        'Psiholog Clinician Principal',
        'Psihoterapeut Cognitiv-Comportamental',
        'Atestat de liberă practică - Colegiul Psihologilor din România'
      ]
    },
    {
      icon: Briefcase,
      title: 'Experiență',
      items: [
        'Peste 10 ani de experiență clinică',
        'Voluntar COVID-19 - suport psihologic',
        'Colaborări cu centre medicale de prestigiu'
      ]
    }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Empatie',
      description: 'Înțelegerea profundă a experiențelor și emoțiilor fiecărui client'
    },
    {
      icon: Brain,
      title: 'Profesionalism',
      description: 'Abordare bazată pe dovezi științifice și bune practici'
    },
    {
      icon: Target,
      title: 'Rezultate',
      description: 'Focus pe obiective clare și schimbări pozitive măsurabile'
    },
    {
      icon: Users,
      title: 'Colaborare',
      description: 'Parteneriat terapeutic bazat pe încredere și respect mutual'
    }
  ]

  const specializations = [
    'Tulburări de anxietate',
    'Depresie și tulburări afective',
    'Tulburări obsesiv-compulsive',
    'Stres post-traumatic',
    'Tulburări de personalitate',
    'Probleme relaționale',
    'Dezvoltare personală',
    'Managementul stresului'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Despre Mine
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Psiholog clinician și psihoterapeut dedicat bunăstării tale emoționale
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Brain className="h-32 w-32 text-purple-300 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-purple-800 mb-2">Cristina Popa</h2>
                    <p className="text-purple-600 text-lg">Psiholog Clinician Principal</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-xl">
                <Calendar className="h-8 w-8 mb-2" />
                <p className="font-semibold">Programări disponibile</p>
              </div>
            </div>

            {/* Bio Content */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Bine ai venit!
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Sunt Cristina Popa, psiholog clinician principal și psihoterapeut cognitiv-comportamental, 
                  absolventă a Universității Babeș-Bolyai din Cluj-Napoca. Cu o experiență de peste 10 ani 
                  în domeniul sănătății mentale, sunt dedicată să ofer suport profesional și empatic 
                  persoanelor care doresc să-și îmbunătățească calitatea vieții.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cred cu tărie că fiecare persoană are potențialul de a depăși provocările cu care se 
                  confruntă și de a-și atinge obiectivele personale. Rolul meu este să te ghidez în această 
                  călătorie de descoperire și transformare personală, oferindu-ți instrumentele necesare 
                  pentru a face față dificultăților.
                </p>
                <blockquote className="border-l-4 border-purple-600 pl-4 italic text-gray-600">
                  &ldquo;Calitatea vieții depinde de relațiile cu cei din jur, dar mai ales de relația 
                  cu noi înșine.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Formare Profesională
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <Icon className="h-12 w-12 text-purple-600 mb-6" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{credential.title}</h3>
                  <ul className="space-y-2">
                    {credential.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-purple-600 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Valorile Mele Profesionale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ghidează practica mea terapeutică
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex p-4 bg-white rounded-full shadow-lg mb-4">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Arii de Specializare
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {specializations.map((spec, index) => (
                <div key={index} className="bg-purple-100 text-purple-700 px-4 py-3 rounded-lg font-medium text-sm">
                  {spec}
                </div>
              ))}
            </div>
            <p className="text-gray-700 mb-8">
              Abordarea mea terapeutică se bazează pe metode validate științific, 
              cu focus pe terapia cognitiv-comportamentală, adaptată nevoilor individuale 
              ale fiecărui client.
            </p>
            <Link href="/psihologcristinapopa/servicii" 
              className="inline-flex items-center justify-center px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Descoperă serviciile disponibile
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Hai să lucrăm împreună
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Sunt aici să te susțin în călătoria ta către echilibru și bunăstare
          </p>
          <Link href="/psihologcristinapopa/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Contactează-mă
          </Link>
        </div>
      </section>
    </div>
  )
}