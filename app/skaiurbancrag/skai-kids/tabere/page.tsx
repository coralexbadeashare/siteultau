import { Sun, Mountain, Tent, Map, Users, Calendar, Star, Heart } from 'lucide-react'
import Link from 'next/link'

const TaberePage = () => {
  const camps = [
    {
      name: 'Adventure Camp',
      duration: '5 zile',
      age: '7-10 ani',
      location: 'Cheile Turzii',
      price: '1500 lei',
      dates: ['3-7 Iulie', '17-21 Iulie', '7-11 August'],
      activities: [
        'Escaladă în natură',
        'Drumeții montane',
        'Orientare cu busola',
        'Foc de tabără',
        'Jocuri de echipă'
      ],
      included: [
        'Transport dus-întors',
        'Cazare pensiune 3*',
        '3 mese + 2 gustări/zi',
        'Echipament complet',
        'Asigurare medicală'
      ]
    },
    {
      name: 'Extreme Camp',
      duration: '7 zile',
      age: '11-14 ani',
      location: 'Munții Apuseni',
      price: '2200 lei',
      dates: ['10-16 Iulie', '24-30 Iulie', '14-20 August'],
      activities: [
        'Escaladă multipitch',
        'Via ferrata',
        'Rapel și tiroliana',
        'Speologie ușoară',
        'Supraviețuire în natură'
      ],
      included: [
        'Transport premium',
        'Cazare cabană montană',
        'Meniu complet adaptat',
        'Ghizi montani certificați',
        'Certificat absolvire'
      ]
    },
    {
      name: 'Day Camp Urban',
      duration: 'Luni-Vineri',
      age: '6-12 ani',
      location: 'Cluj-Napoca',
      price: '500 lei/săptămână',
      dates: ['Toată vara'],
      activities: [
        'Escaladă indoor/outdoor',
        'Excursii de o zi',
        'Ateliere creative',
        'Sporturi diverse',
        'Piscină și jocuri apă'
      ],
      included: [
        'Program 9:00-17:00',
        'Prânz și 2 gustări',
        'Transport excursii',
        'Materiale activități',
        'Tricou tabără cadou'
      ]
    }
  ]

  const dailySchedule = {
    overnight: [
      { time: '07:30', activity: 'Deșteptarea și gimnastică' },
      { time: '08:00', activity: 'Mic dejun energizant' },
      { time: '09:00', activity: 'Activitate principală (escaladă/drumeție)' },
      { time: '12:30', activity: 'Prânz și odihnă' },
      { time: '14:00', activity: 'Ateliere și jocuri' },
      { time: '16:00', activity: 'Gustare și timp liber' },
      { time: '17:00', activity: 'Sport și competiții' },
      { time: '19:00', activity: 'Cină' },
      { time: '20:00', activity: 'Program de seară (foc tabără/film/jocuri)' },
      { time: '21:30', activity: 'Pregătire de culcare' },
      { time: '22:00', activity: 'Stingerea' }
    ],
    day: [
      { time: '09:00', activity: 'Sosire și activități de încălzire' },
      { time: '10:00', activity: 'Activitate principală' },
      { time: '12:00', activity: 'Prânz' },
      { time: '13:00', activity: 'Odihnă/jocuri liniștite' },
      { time: '14:00', activity: 'Ateliere creative' },
      { time: '15:30', activity: 'Gustare' },
      { time: '16:00', activity: 'Sport și jocuri' },
      { time: '17:00', activity: 'Plecare acasă' }
    ]
  }

  const team = [
    {
      name: 'Dan Popescu',
      role: 'Coordonator Tabere',
      qualification: 'Instructor montan, Salvator montan',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
    },
    {
      name: 'Ana Ionescu',
      role: 'Animator Principal',
      qualification: 'Pedagog, Instructor escaladă',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop'
    },
    {
      name: 'Mihai Radu',
      role: 'Ghid Montan',
      qualification: 'Ghid certificat, Paramedic',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
    }
  ]

  const benefits = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Aventură în Natură',
      description: 'Experiențe autentice în mijlocul naturii'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Prietenii pe Viață',
      description: 'Legături create prin aventuri comune'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Dezvoltare Personală',
      description: 'Încredere, curaj și independență'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Amintiri de Neuitat',
      description: 'Momente magice care rămân pentru totdeauna'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🏕️</div>
          <div className="absolute bottom-10 right-10 text-8xl">🧗</div>
          <div className="absolute top-1/2 left-1/4 text-6xl">🌲</div>
          <div className="absolute bottom-1/4 right-1/3 text-6xl">⛰️</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sun className="w-10 h-10 text-green-600" />
              <span className="text-green-600 text-xl font-semibold">Tabere de Vară SKAI</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Aventuri
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                de Vară
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Tabere de escaladă și aventură în natură pentru copii curajoși. 
              Experiențe care dezvoltă caracterul și creează amintiri pentru o viață!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#camps"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Vezi Taberele
              </Link>
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Rezervă un Loc
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Camps */}
      <section id="camps" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Programele Noastre de Tabără
          </h2>

          <div className="space-y-12">
            {camps.map((camp, index) => (
              <div key={index} className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6">
                      <h3 className="text-3xl font-bold text-gray-900">{camp.name}</h3>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                        {camp.age}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                          <Calendar className="w-5 h-5" />
                          <span className="font-medium">Durată:</span>
                        </div>
                        <p className="text-gray-900 font-semibold">{camp.duration}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 text-gray-600 mb-2">
                          <Map className="w-5 h-5" />
                          <span className="font-medium">Locație:</span>
                        </div>
                        <p className="text-gray-900 font-semibold">{camp.location}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Activități:</h4>
                      <ul className="space-y-2">
                        {camp.activities.map((activity, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-700">
                            <span className="text-green-600">•</span>
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Date disponibile:</h4>
                      <div className="flex flex-wrap gap-2">
                        {camp.dates.map((date, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                            {date}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-gray-900">{camp.price}</div>
                        <p className="text-gray-600">per copil</p>
                      </div>
                      <Link
                        href="/skaiurbancrag/contact"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:shadow-lg transition-all font-semibold"
                      >
                        Rezervă Acum
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 lg:p-12">
                    <h4 className="font-semibold text-gray-900 mb-4">Ce este inclus:</h4>
                    <ul className="space-y-3">
                      {camp.included.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            O Zi în Tabără
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tabere cu Cazare</h3>
              <div className="space-y-3">
                {dailySchedule.overnight.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-3">
                    <span className="font-medium text-green-600">{item.time}</span>
                    <span className="text-gray-700">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Tabere de Zi</h3>
              <div className="space-y-3">
                {dailySchedule.day.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-3">
                    <span className="font-medium text-blue-600">{item.time}</span>
                    <span className="text-gray-700">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Echipa Noastră de Profesioniști
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-8">
              <Tent className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Siguranța Copiilor - Prioritatea Noastră
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Măsuri de Siguranță</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-700">Personal calificat și verificat</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-700">Raport 1:6 instructor/copii</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-700">Protocol medical și prim ajutor</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2" />
                    <span className="text-gray-700">Comunicare zilnică cu părinții</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ce să Aduci</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Rucsac, sac de dormit (pentru overnight)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Îmbrăcăminte sport și de schimb</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Protecție solară și pălărie</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Sticlă de apă reutilizabilă</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Aventura Vieții îl Așteaptă!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Locuri limitate pentru fiecare sesiune. Rezervă acum pentru vara 2024!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Rezervă un Loc
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Întrebări? Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TaberePage