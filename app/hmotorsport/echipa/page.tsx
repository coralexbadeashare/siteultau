import { Users, Award, Wrench, Car } from 'lucide-react'
import Link from 'next/link'

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Vlad Cosma',
      role: 'Director General',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      description: 'Peste 20 de ani experiență în motorsport. Pilot și organizator de competiții.',
      expertise: ['Management competiții', 'Strategie curse', 'Relații clienți']
    },
    {
      name: 'Adrian Popescu',
      role: 'Director Tehnic',
      image: 'https://images.unsplash.com/photo-1559548331-f9cb98001426?w=400&h=400&fit=crop',
      description: 'Inginer mecanic specializat în pregătirea mașinilor de curse.',
      expertise: ['Setup competițional', 'Tuning motor', 'Diagnosticare']
    },
    {
      name: 'Mihai Ionescu',
      role: 'Șef Mecanic',
      image: 'https://images.unsplash.com/photo-1542178243-bc20204b769f?w=400&h=400&fit=crop',
      description: 'Coordonează echipa de mecanici și asigură performanța optimă.',
      expertise: ['Reparații rapide', 'Întreținere', 'Logistică tehnică']
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Manager Operațiuni',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      description: 'Responsabilă pentru coordonarea evenimentelor și logistică.',
      expertise: ['Planificare evenimente', 'Coordonare echipă', 'Relații publice']
    },
    {
      name: 'Radu Marinescu',
      role: 'Specialist Electronică',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      description: 'Expert în sisteme electronice și telemetrie pentru mașini de curse.',
      expertise: ['Telemetrie', 'ECU tuning', 'Data analysis']
    },
    {
      name: 'Andrei Gheorghe',
      role: 'Pilot Test',
      image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop',
      description: 'Pilot profesionist responsabil pentru testarea și dezvoltarea setupurilor.',
      expertise: ['Testing', 'Feedback tehnic', 'Dezvoltare setup']
    }
  ]

  const achievements = [
    { icon: <Award className="w-8 h-8" />, title: '5x Campioni Naționali', desc: 'Rally și Circuit' },
    { icon: <Users className="w-8 h-8" />, title: '15+ Ani Experiență', desc: 'În motorsport profesionist' },
    { icon: <Car className="w-8 h-8" />, title: '200+ Curse', desc: 'Asistate cu succes' },
    { icon: <Wrench className="w-8 h-8" />, title: '24/7 Suport', desc: 'Pentru clienții noștri' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&h=800&fit=crop"
          alt="H Motorsport Team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Echipa <span className="text-red-500">H Motorsport</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Profesioniști dedicați cu pasiune pentru motorsport și excelență tehnică
            </p>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full text-red-600 mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cunoaște Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experți pasionați care transformă visurile în realitate pe circuit
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-red-400 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full" />
                        <span className="text-sm text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Alătură-te Echipei Câștigătoare
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Fie că ești pilot sau ai nevoie de serviciile noastre, 
            suntem aici să te ajutăm să reușești.
          </p>
          <Link
            href="/hmotorsport/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            Contactează-ne Acum
          </Link>
        </div>
      </section>
    </main>
  )
}

export default TeamPage