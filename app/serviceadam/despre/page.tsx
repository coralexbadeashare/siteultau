'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Award,
  Users,
  Target,
  Heart,
  CheckCircle,
  ArrowRight,
  Trophy,
  Briefcase,
  Shield
} from 'lucide-react'

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0)

  const values = [
    {
      icon: Heart,
      title: "Pasiune pentru Automobile",
      description: "Fiecare mașină este tratată cu aceeași grijă și atenție ca și cum ar fi a noastră. Pasiunea pentru automobile ne motivează să oferim cele mai bune servicii."
    },
    {
      icon: Shield,
      title: "Integritate și Transparență",
      description: "Credem în onestitate totală. Clienții noștri primesc întotdeauna informații clare despre lucrări și costuri, fără surprize neplăcute."
    },
    {
      icon: Trophy,
      title: "Excelență în Servicii",
      description: "Ne străduim să depășim așteptările prin calitate superioară, atenție la detalii și servicii care fac diferența."
    },
    {
      icon: Users,
      title: "Orientare către Client",
      description: "Succesul nostru se bazează pe satisfacția clienților. Ascultăm, înțelegem și oferim soluții personalizate pentru fiecare."
    }
  ]

  const timeline = [
    {
      year: "2009",
      title: "Începutul Călătoriei",
      description: "Adam Popescu deschide primul atelier cu doar 2 angajați și o viziune clară: service auto de încredere"
    },
    {
      year: "2012",
      title: "Prima Extindere",
      description: "Mutarea într-un spațiu mai mare și achiziția de echipamente profesionale de diagnosticare"
    },
    {
      year: "2015",
      title: "Certificări Importante",
      description: "Obținerea certificărilor pentru lucrul cu mărci premium și investiții în training continuu"
    },
    {
      year: "2018",
      title: "Modernizare Completă",
      description: "Renovare totală a service-ului și implementarea celor mai noi tehnologii de diagnosticare"
    },
    {
      year: "2020",
      title: "Servicii 24/7",
      description: "Lansarea serviciului de asistență rutieră non-stop pentru clienții noștri"
    },
    {
      year: "2024",
      title: "Lider Regional",
      description: "Peste 10.000 de clienți mulțumiți și poziția de lider în servicii auto din Cluj"
    }
  ]

  const team = [
    {
      name: "Adam Popescu",
      role: "Fondator & Director General",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
      experience: "20+ ani experiență"
    },
    {
      name: "Mihai Ionescu",
      role: "Șef Atelier",
      image: "https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=400&h=400&fit=crop",
      experience: "15+ ani experiență"
    },
    {
      name: "Alexandru Radu",
      role: "Specialist Diagnosticare",
      image: "https://images.unsplash.com/photo-1559548331-f9cb98001426?w=400&h=400&fit=crop",
      experience: "12+ ani experiență"
    },
    {
      name: "Andrei Constantin",
      role: "Expert Electrică Auto",
      image: "https://images.unsplash.com/photo-1596215143922-eedeaba0d91c?w=400&h=400&fit=crop",
      experience: "10+ ani experiență"
    }
  ]

  const certifications = [
    "Certificat ISO 9001:2015",
    "Autorizație RAR",
    "Partener Autorizat Bosch",
    "Certificare Delphi Technologies",
    "Membru ACAROM",
    "Certificare Service Premium"
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
          alt="Service Adam"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Despre Service Adam
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                O poveste de succes construită pe încredere și profesionalism
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <Link href="/serviceadam" className="hover:text-red-500 transition-colors">
                  Acasă
                </Link>
                <span>/</span>
                <span className="text-white">Despre Noi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Povestea Noastră
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Service Adam a început în 2009 dintr-o pasiune autentică pentru automobile și dorința de a oferi servicii de calitate superioară. Ceea ce a început ca un mic atelier cu doi angajați, a crescut într-unul dintre cele mai respectate service-uri auto din Cluj-Napoca.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Fondatorul nostru, Adam Popescu, și-a propus să creeze un service diferit - unul unde transparența, calitatea și respectul față de client sunt valorile fundamentale. După 15 ani, aceste valori rămân la baza a tot ceea ce facem.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Astăzi, Service Adam deservește peste 10.000 de clienți mulțumiți, oferind servicii complete pentru toate mărcile de automobile, folosind tehnologie de ultimă generație și o echipă de profesioniști dedicați.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <Award className="w-10 h-10 text-red-600" />
                  <div>
                    <p className="font-semibold">Service Certificat</p>
                    <p className="text-sm text-gray-600">ISO 9001:2015</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-10 h-10 text-red-600" />
                  <div>
                    <p className="font-semibold">Echipă Expertă</p>
                    <p className="text-sm text-gray-600">20+ Specialiști</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1631629553615-5287f9c1a4f3?w=800&h=600&fit=crop"
                alt="Echipa Service Adam"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 text-white p-6 rounded-lg shadow-xl">
                <div className="text-3xl font-bold">15+ Ani</div>
                <div className="text-lg">De Excelență</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Target className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Misiunea Noastră</h3>
              <p className="text-gray-700 mb-4">
                Să oferim servicii auto de cea mai înaltă calitate, bazate pe transparență totală, prețuri corecte și respect pentru timpul și banii clienților noștri.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Servicii profesionale garantate</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Transparență în comunicare și prețuri</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Respectarea termenelor promise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Briefcase className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Viziunea Noastră</h3>
              <p className="text-gray-700 mb-4">
                Să devenim service-ul auto de referință în România, recunoscut pentru excelență în servicii, inovație tehnologică și grija față de clienți și angajați.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Lider regional în servicii auto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Inovație continuă în tehnologie</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Standard de excelență în industrie</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Valorile Noastre</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi și în fiecare interacțiune
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`bg-gray-800 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:bg-gray-700 ${
                  activeValue === index ? 'ring-2 ring-red-500 transform scale-105' : ''
                }`}
                onClick={() => setActiveValue(index)}
              >
                <value.icon className="w-10 h-10 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Evoluția Noastră</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              O călătorie de creștere continuă și dedicare față de excelență
            </p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" />
            
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 mb-12 relative">
                <div className="flex-shrink-0 relative">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.year}
                  </div>
                  {/* Connection dot */}
                  <div className="absolute top-1/2 -right-2 w-4 h-4 bg-red-600 rounded-full transform -translate-y-1/2" />
                </div>
                <div className="flex-grow pb-8 pl-8">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Echipa Noastră</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesioniști dedicați care fac diferența în fiecare zi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-red-600 mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificări și Acreditări</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dovada competenței și profesionalismului nostru
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <Award className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <p className="text-sm font-medium">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Alătură-te Familiei Service Adam
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experimentează diferența unui service auto care pune clientul pe primul loc
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/serviceadam/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 group font-medium"
            >
              Programează o Vizită
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/serviceadam/servicii"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300 font-medium"
            >
              Descoperă Serviciile
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}