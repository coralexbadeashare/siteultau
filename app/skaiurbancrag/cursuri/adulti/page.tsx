import { User, Target, TrendingUp, Brain, Dumbbell, Clock, Calendar, Users } from 'lucide-react'
import Link from 'next/link'

const AdultiPage = () => {
  const levels = [
    {
      level: 'Începător',
      title: 'Primii Pași pe Perete',
      duration: '6 săptămâni',
      sessions: '2 ședințe/săptămână',
      description: 'Pentru cei care nu au mai escaladat niciodată sau au experiență minimă',
      objectives: [
        'Învățarea echipamentului și siguranței',
        'Tehnici de bază de mișcare',
        'Construirea încrederii pe perete',
        'Pregătire fizică de bază'
      ],
      color: 'from-green-500 to-green-600',
      price: '400 lei',
      image: 'https://images.unsplash.com/photo-1549880181-56a44cf4a9a5?w=800&h=600&fit=crop'
    },
    {
      level: 'Intermediar',
      title: 'Tehnici Avansate',
      duration: '8 săptămâni',
      sessions: '2-3 ședințe/săptămână',
      description: 'Pentru cei care stăpânesc bazele și vor să progreseze',
      objectives: [
        'Tehnici avansate de prindere',
        'Citirea traseelor complexe',
        'Antrenament specific forță',
        'Introducere în lead climbing'
      ],
      color: 'from-blue-500 to-blue-600',
      price: '500 lei',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    },
    {
      level: 'Avansat',
      title: 'Performanță și Competiție',
      duration: 'Program continuu',
      sessions: '3-4 ședințe/săptămână',
      description: 'Pentru escaladori experimentați care vizează performanța',
      objectives: [
        'Antrenament personalizat',
        'Pregătire pentru competiții',
        'Tehnici de proiectare',
        'Nutriție și recuperare'
      ],
      color: 'from-purple-500 to-purple-600',
      price: '600 lei/lună',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop'
    }
  ]

  const trainingComponents = [
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Pregătire Fizică',
      description: 'Exerciții specifice pentru forță, rezistență și flexibilitate'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Tehnică și Strategie',
      description: 'Învățarea mișcărilor eficiente și citirea traseelor'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Obiective Clare',
      description: 'Stabilirea și atingerea țintelor personale'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunitate',
      description: 'Antrenament în grup și suport reciproc'
    }
  ]

  const schedule = {
    beginner: [
      { day: 'Luni', time: '18:30 - 20:00', focus: 'Tehnică de bază' },
      { day: 'Miercuri', time: '18:30 - 20:00', focus: 'Aplicații practice' }
    ],
    intermediate: [
      { day: 'Marți', time: '18:30 - 20:00', focus: 'Tehnică avansată' },
      { day: 'Joi', time: '18:30 - 20:00', focus: 'Antrenament forță' },
      { day: 'Sâmbătă', time: '10:00 - 11:30', focus: 'Sesiune opțională' }
    ],
    advanced: [
      { day: 'Luni', time: '20:00 - 21:30', focus: 'Antrenament specific' },
      { day: 'Miercuri', time: '20:00 - 21:30', focus: 'Proiecte și tehnici' },
      { day: 'Vineri', time: '18:30 - 20:00', focus: 'Pregătire competiții' }
    ]
  }

  const benefits = [
    'Grupe mici (max 8 persoane) pentru atenție personalizată',
    'Instructori certificați cu experiență internațională',
    'Program flexibil cu posibilitate de recuperare',
    'Acces la echipament profesional',
    'Evaluare periodică și feedback constructiv',
    'Comunitate activă și evenimente sociale'
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-8 h-8" />
                <span className="text-purple-200 text-lg">Pentru Adulți Ambițioși</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cursuri de Escaladă pentru Adulți
              </h1>
              <p className="text-xl text-purple-50 mb-8">
                Indiferent de nivelul tău, avem programul perfect pentru a te ajuta să progresezi. 
                De la primii pași pe perete până la pregătirea pentru competiții.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-purple-200" />
                  <span>Ore flexibile</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-purple-200" />
                  <span>Grupe mici</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-purple-200" />
                  <span>Progres garantat</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/skaiurbancrag/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold text-lg"
                >
                  Începe Acum
                </Link>
                <a
                  href="#levels"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
                >
                  Vezi Nivelurile
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop"
                alt="Escaladă adulți"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training Components */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce Include Antrenamentul
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trainingComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {component.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section id="levels" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Alege Nivelul Tău
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Programe structurate pentru fiecare etapă a călătoriei tale în escaladă
          </p>

          <div className="space-y-12">
            {levels.map((level, index) => (
              <div key={index} className="bg-gray-50 rounded-3xl overflow-hidden shadow-xl">
                <div className={`h-2 bg-gradient-to-r ${level.color}`} />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                  <div>
                    <div className="mb-6">
                      <span className={`bg-gradient-to-r ${level.color} text-white px-4 py-2 rounded-full text-sm font-semibold`}>
                        {level.level}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{level.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{level.description}</p>
                    
                    <div className="flex flex-wrap gap-4 mb-6">
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Clock className="w-5 h-5" />
                        <span>{level.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-700">
                        <Calendar className="w-5 h-5" />
                        <span>{level.sessions}</span>
                      </div>
                    </div>

                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Obiective:</h4>
                    <ul className="space-y-2 mb-6">
                      {level.objectives.map((objective, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                          <span className="text-gray-700">{objective}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{level.price}</div>
                        <p className="text-gray-600">pentru întreg programul</p>
                      </div>
                      <Link
                        href="/skaiurbancrag/contact"
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${level.color} text-white rounded-lg hover:opacity-90 transition-opacity font-semibold`}
                      >
                        Înscrie-te
                      </Link>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src={level.image}
                      alt={level.title}
                      className="rounded-2xl shadow-lg w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Orar Cursuri
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Începători</h3>
              <div className="space-y-4">
                {schedule.beginner.map((session, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4">
                    <div className="font-medium text-gray-900">{session.day}</div>
                    <div className="text-sm text-gray-600">{session.time}</div>
                    <div className="text-sm text-green-600">{session.focus}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Intermediari</h3>
              <div className="space-y-4">
                {schedule.intermediate.map((session, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <div className="font-medium text-gray-900">{session.day}</div>
                    <div className="text-sm text-gray-600">{session.time}</div>
                    <div className="text-sm text-blue-600">{session.focus}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Avansați</h3>
              <div className="space-y-4">
                {schedule.advanced.map((session, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <div className="font-medium text-gray-900">{session.day}</div>
                    <div className="text-sm text-gray-600">{session.time}</div>
                    <div className="text-sm text-purple-600">{session.focus}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              De Ce să Alegi Cursurile Noastre
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-purple-600 text-white rounded-full p-1 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pregătit să Începi Călătoria Ta în Escaladă?
          </h2>
          <p className="text-xl text-purple-50 mb-8 max-w-2xl mx-auto">
            Alătură-te comunității noastre de peste 300 de adulți pasionați de escaladă
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              Programează o Evaluare Gratuită
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

export default AdultiPage