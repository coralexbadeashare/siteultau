import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowLeft,
  Target,
  Heart,
  Award,
  Users,
  CheckCircle,
  Calendar,
  TrendingUp
} from 'lucide-react'

export default function DespreNoiPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pasiune pentru Calitate",
      description: "Ne dedicăm să oferim servicii de cea mai înaltă calitate în fiecare zi"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Orientare către Client",
      description: "Satisfacția clienților noștri este prioritatea noastră numărul unu"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Profesionalism",
      description: "Echipă experimentată și echipamente moderne pentru rezultate excelente"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Inovație Continuă",
      description: "Investim constant în echipamente noi și tehnologii moderne"
    }
  ]

  const milestones = [
    {
      year: "2014",
      title: "Înființarea Companiei",
      description: "Am început cu 5 remorci și o viziune clară"
    },
    {
      year: "2016",
      title: "Extindere Servicii",
      description: "Am adăugat servicii de tractare auto și transport marfă"
    },
    {
      year: "2019",
      title: "Flotă Modernizată",
      description: "Investiție majoră în remorci și platforme noi"
    },
    {
      year: "2024",
      title: "Prezent",
      description: "Peste 50 de remorci și 500+ clienți mulțumiți"
    }
  ]

  const team = [
    {
      name: "Alexandru Popescu",
      role: "Fondator & Director General",
      description: "15 ani experiență în transport și logistică"
    },
    {
      name: "Maria Ionescu",
      role: "Manager Operațiuni",
      description: "Specialist în optimizarea proceselor de închiriere"
    },
    {
      name: "Andrei Popa",
      role: "Șef Departament Tehnic",
      description: "Responsabil pentru întreținerea flotei"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <Link href="/welmius" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Despre Noi
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Povestea noastră în servicii de transport și închiriere de remorci
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Povestea <span className="text-orange-600">Welmius</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Welmius a început în 2014 din dorința de a oferi servicii de închiriere 
                remorci și transport de calitate superioară în Cluj și împrejurimi. 
                Ce a început ca o afacere mică de familie cu doar câteva remorci, 
                a crescut într-o companie de încredere cu o flotă modernă și diversificată.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                De-a lungul anilor, am învățat că succesul nostru depinde de satisfacția 
                clienților. De aceea, investim constant în echipamente noi, în training-ul 
                echipei noastre și în îmbunătățirea serviciilor.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Astăzi, Welmius este recunoscut ca un partener de încredere pentru 
                închirieri de remorci, tractări auto și transport marfă, servind atât 
                clienți individuali, cât și companii din diverse industrii.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-video relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop"
                  alt="Echipa Welmius"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center space-x-4">
                  <TrendingUp className="w-12 h-12 text-green-600" />
                  <div>
                    <p className="text-3xl font-bold text-gray-900">10+</p>
                    <p className="text-gray-600">Ani de Creștere</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Evoluția Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Momente importante din istoria companiei
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-3">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-600 font-bold text-lg">{milestone.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesioniștii din spatele succesului Welmius
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-4">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">
                De Ce Să Ne Alegi?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Experiență Dovedită</h3>
                  <p>Peste 10 ani în domeniu</p>
                </div>
                <div>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Echipamente Moderne</h3>
                  <p>Flotă verificată și întreținută</p>
                </div>
                <div>
                  <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Prețuri Corecte</h3>
                  <p>Tarife transparente și competitive</p>
                </div>
              </div>
              <Link href="/welmius/contact" className="btn-secondary bg-white text-orange-600">
                Contactează-ne
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}