import { Trophy, Medal, Target, Zap, Calendar, Users, Star, Award } from 'lucide-react'
import Link from 'next/link'

const EchipaPage = () => {
  const achievements = [
    { year: '2023', title: 'Campionat Național', results: '3 Medalii de Aur, 5 de Argint' },
    { year: '2023', title: 'Cupa României', results: '2 locuri pe podium' },
    { year: '2022', title: 'Balkan Championship', results: 'Locul 2 echipe juniori' },
    { year: '2022', title: 'National Boulder League', results: '8 sportivi în Top 10' }
  ]

  const coaches = [
    {
      name: 'Andrei Popescu',
      role: 'Antrenor Principal',
      experience: '15 ani experiență, fost campion național',
      specialization: 'Lead & Speed',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Maria Ionescu',
      role: 'Antrenor Boulder',
      experience: '10 ani experiență, certificare IFSC',
      specialization: 'Boulder & Tehnică',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ]

  const trainingSchedule = [
    { day: 'Luni', sessions: ['16:00-18:00 Juniori', '18:00-20:00 Seniori'] },
    { day: 'Marți', sessions: ['16:00-18:00 Pregătire fizică', '18:00-20:00 Tehnică'] },
    { day: 'Miercuri', sessions: ['16:00-18:00 Boulder', '18:00-20:00 Lead'] },
    { day: 'Joi', sessions: ['16:00-18:00 Speed', '18:00-20:00 Proiecte'] },
    { day: 'Vineri', sessions: ['16:00-18:00 Simulare competiție'] },
    { day: 'Sâmbătă', sessions: ['09:00-12:00 Antrenament complet'] }
  ]

  const requirements = [
    'Vârstă minimă: 10 ani',
    'Experiență minimă: 1 an de escaladă',
    'Capacitate de a escalada trasee 6a+ (French)',
    'Dedicare pentru antrenament regulat',
    'Dorință de participare la competiții',
    'Atitudine pozitivă și spirit de echipă'
  ]

  const benefits = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Participare la Competiții',
      description: 'Acces la competiții naționale și internaționale'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Antrenament Intensiv',
      description: 'Program personalizat de pregătire fizică și tehnică'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Echipă Unită',
      description: 'Parte dintr-o comunitate de sportivi dedicați'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Sponsorizare',
      description: 'Suport pentru echipament și deplasări la competiții'
    }
  ]

  const selectionProcess = [
    {
      step: 1,
      title: 'Aplicație Online',
      description: 'Completează formularul cu experiența ta'
    },
    {
      step: 2,
      title: 'Evaluare Tehnică',
      description: 'Test practic pe diferite tipuri de trasee'
    },
    {
      step: 3,
      title: 'Interviu',
      description: 'Discuție despre obiective și motivație'
    },
    {
      step: 4,
      title: 'Perioadă de Probă',
      description: '2 săptămâni de antrenament cu echipa'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-red-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <span className="text-red-200 text-lg">Excelență în Escaladă</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Echipa de Performanță SKAI
            </h1>
            <p className="text-xl text-red-50 mb-8 max-w-3xl mx-auto">
              Alătură-te elitei escaladei românești. Antrenament profesionist, 
              competiții naționale și internaționale, și o comunitate de campioni.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold text-lg"
              >
                Aplică pentru Selecție
              </Link>
              <a
                href="#achievements"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                Vezi Performanțele
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600">25+</div>
              <div className="text-gray-600">Sportivi Activi</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">50+</div>
              <div className="text-gray-600">Medalii Naționale</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">15+</div>
              <div className="text-gray-600">Competiții/An</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600">3</div>
              <div className="text-gray-600">Antrenori Certificați</div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Performanțe Recente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-600">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{achievement.title}</h3>
                    <p className="text-gray-600 mt-1">{achievement.results}</p>
                  </div>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                    {achievement.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Antrenorii Noștri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center">
                <img
                  src={coach.image}
                  alt={coach.name}
                  className="w-32 h-32 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{coach.name}</h3>
                <p className="text-red-600 font-medium mb-2">{coach.role}</p>
                <p className="text-gray-600 mb-2">{coach.experience}</p>
                <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
                  {coach.specialization}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Program */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Program de Antrenament
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2 text-red-600" />
                Orar Săptămânal
              </h3>
              <div className="space-y-4">
                {trainingSchedule.map((day, index) => (
                  <div key={index} className="border-b border-gray-200 pb-3">
                    <h4 className="font-medium text-gray-900 mb-1">{day.day}</h4>
                    <div className="space-y-1">
                      {day.sessions.map((session, idx) => (
                        <p key={idx} className="text-sm text-gray-600">{session}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Structura Antrenamentului
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Antrenament tehnic specific pentru boulder, lead și speed</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pregătire fizică generală și specifică</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Pregătire mentală și tactică de competiție</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Target className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Analiză video și feedback personalizat</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Perioade de Pregătire
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium text-gray-900">Pre-sezon</span>
                    <span className="text-gray-600">Septembrie - Noiembrie</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium text-gray-900">Sezon Competițional</span>
                    <span className="text-gray-600">Decembrie - Iunie</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="font-medium text-gray-900">Tranziție</span>
                    <span className="text-gray-600">Iulie - August</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Beneficiile Membrilor Echipei
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-red-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4 text-red-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Procesul de Selecție
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Căutăm sportivi talentați și dedicați care vor să exceleze în escaladă
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {selectionProcess.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {index < selectionProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 bg-red-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cerințe Minime</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Star className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <span className="text-gray-700">{requirement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Medal className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ești Pregătit pentru Următorul Nivel?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Alătură-te echipei SKAI și transformă-ți pasiunea în performanță
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold"
            >
              Aplică pentru Selecție
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Întrebări? Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EchipaPage