import { Baby, Shield, Star, Heart, Trophy, Smile, Users, Calendar } from 'lucide-react'
import Link from 'next/link'

const CopiiPage = () => {
  const ageGroups = [
    {
      age: '4-7 ani',
      title: 'Micii Exploratori',
      description: 'Program ludic axat pe dezvoltare motorie și încredere',
      features: [
        'Jocuri și povești pe perete',
        'Dezvoltare coordonare',
        'Socializare prin joc',
        'Maxim 6 copii/grupă'
      ],
      schedule: 'Luni, Miercuri, Vineri: 16:00-17:00',
      color: 'from-blue-400 to-blue-500'
    },
    {
      age: '8-11 ani',
      title: 'Aventurierii',
      description: 'Învățare tehnică prin joc și provocări distractive',
      features: [
        'Tehnici de bază',
        'Competiții amicale',
        'Lucru în echipă',
        'Maxim 8 copii/grupă'
      ],
      schedule: 'Luni, Miercuri: 17:00-18:30',
      color: 'from-green-400 to-green-500'
    },
    {
      age: '12-14 ani',
      title: 'Campionii',
      description: 'Antrenament serios cu accent pe performanță',
      features: [
        'Tehnici avansate',
        'Pregătire fizică',
        'Posibilitate competiții',
        'Dezvoltare leadership'
      ],
      schedule: 'Marți, Joi: 17:00-18:30',
      color: 'from-purple-400 to-purple-500'
    }
  ]

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dezvoltare Fizică',
      description: 'Forță, flexibilitate, coordonare și echilibru'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Încredere în Sine',
      description: 'Depășirea fricilor și construirea curajului'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Abilități Sociale',
      description: 'Prietenii noi și lucru în echipă'
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: 'Disciplină și Focus',
      description: 'Concentrare și perseverență'
    }
  ]

  const activities = [
    {
      title: 'Jocuri de Încălzire',
      description: 'Activități distractive pentru pregătirea corpului',
      icon: '🏃'
    },
    {
      title: 'Trasee Tematice',
      description: 'Povești și aventuri pe perete',
      icon: '🗺️'
    },
    {
      title: 'Provocări în Echipă',
      description: 'Colaborare și comunicare',
      icon: '👫'
    },
    {
      title: 'Mini Competiții',
      description: 'Concursuri amicale cu premii',
      icon: '🏆'
    },
    {
      title: 'Jocuri de Echilibru',
      description: 'Exerciții pentru stabilitate',
      icon: '⚖️'
    },
    {
      title: 'Sesiuni Creative',
      description: 'Crearea propriilor trasee',
      icon: '🎨'
    }
  ]

  const testimonials = [
    {
      parent: 'Ana Maria P.',
      text: 'Fiica mea de 6 ani adoră cursurile! A căpătat foarte multă încredere și abia așteaptă fiecare ședință.',
      rating: 5
    },
    {
      parent: 'Bogdan I.',
      text: 'Instructorii sunt fantastici cu copiii. Băiatul meu a învățat nu doar să escaladeze, ci și să-și depășească limitele.',
      rating: 5
    },
    {
      parent: 'Elena D.',
      text: 'Cel mai bun sport pentru dezvoltarea completă a copilului. Recomand cu toată încrederea!',
      rating: 5
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500 to-blue-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-6xl">🧗</div>
          <div className="absolute bottom-10 right-10 text-6xl">🎯</div>
          <div className="absolute top-1/2 left-1/3 text-4xl">⭐</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Baby className="w-8 h-8" />
              <span className="text-blue-200 text-lg">Pentru Micii Aventurieri</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Curs de Escaladă pentru Copii
            </h1>
            <p className="text-xl text-blue-50 mb-8 max-w-3xl mx-auto">
              Un mediu sigur și distractiv unde copiii învață să escaladeze, 
              își dezvoltă încrederea și fac prieteni noi. Programe adaptate pentru fiecare vârstă!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
              >
                Înscrie-ți Copilul
              </Link>
              <a
                href="#age-groups"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                Vezi Grupele de Vârstă
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            De Ce Escalada pentru Copii?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Age Groups */}
      <section id="age-groups" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Programe pe Grupe de Vârstă
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fiecare grupă are un curriculum adaptat vârstei și abilităților copiilor
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-2 bg-gradient-to-r ${group.color}`} />
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{group.title}</h3>
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-lg font-semibold">
                      {group.age}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-6 text-center">{group.description}</p>
                  <ul className="space-y-3 mb-6">
                    {group.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <Star className="w-5 h-5 text-yellow-500" fill="currentColor" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-white rounded-lg p-4">
                    <Calendar className="w-5 h-5 text-blue-600 mb-2" />
                    <p className="text-sm font-medium text-gray-900">{group.schedule}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Activități în Cadrul Cursurilor
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{activity.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-8">
              <Shield className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Siguranța Este Prioritatea Noastră
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Măsuri de Siguranță</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Instructori certificați și specializați pe lucrul cu copii</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Echipament verificat și adaptat pentru copii</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Supraveghere constantă și raport instructor-copii optim</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                    <span className="text-gray-700">Zone special amenajate pentru diferite vârste</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Pentru Părinți</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <span className="text-gray-700">Comunicare constantă despre progresul copilului</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <span className="text-gray-700">Posibilitate de a asista la ședințe</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <span className="text-gray-700">Rapoarte periodice de evaluare</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2" />
                    <span className="text-gray-700">Grup WhatsApp pentru părinți</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ce Spun Părinții
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="font-semibold text-gray-900">- {testimonial.parent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center">
            <Smile className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Tarife Speciale pentru Copii
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Ședință de Probă</h3>
                <div className="text-3xl font-bold mb-2">GRATUIT</div>
                <p className="text-blue-100">Prima experiență</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Abonament Lunar</h3>
                <div className="text-3xl font-bold mb-2">300 lei</div>
                <p className="text-blue-100">8 ședințe/lună</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Pachet Trimestrial</h3>
                <div className="text-3xl font-bold mb-2">800 lei</div>
                <p className="text-blue-100">Economisești 100 lei</p>
              </div>
            </div>
            <p className="text-lg text-blue-100 mb-8">
              * Reducere 10% pentru al doilea copil din aceeași familie
            </p>
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              Programează o Ședință de Probă
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Oferă-i Copilului Tău o Aventură Unică!
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Alătură-te celor peste 500 de copii care au descoperit bucuria escaladei la SKAI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              Înscrie-l Acum
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CopiiPage