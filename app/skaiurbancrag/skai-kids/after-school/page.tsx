import { Clock, Bus, Apple, BookOpen, Users, CheckCircle, Heart } from 'lucide-react'
import Link from 'next/link'

const AfterSchoolPage = () => {
  const dailySchedule = [
    { time: '12:00 - 13:00', activity: 'Preluare de la școală', icon: '🚌' },
    { time: '13:00 - 14:00', activity: 'Prânz sănătos și socializare', icon: '🍽️' },
    { time: '14:00 - 15:30', activity: 'Teme asistate și studiu', icon: '📚' },
    { time: '15:30 - 16:00', activity: 'Gustare și relaxare', icon: '🍎' },
    { time: '16:00 - 17:30', activity: 'Escaladă și activități sportive', icon: '🧗' },
    { time: '17:30 - 18:00', activity: 'Activități creative și jocuri', icon: '🎨' },
    { time: '18:00 - 19:00', activity: 'Preluare părinți (program flexibil)', icon: '👨‍👩‍👧' }
  ]

  const benefits = [
    {
      icon: <Bus className="w-6 h-6" />,
      title: 'Transport Inclus',
      description: 'Preluăm copiii direct de la școală cu microbuze sigure'
    },
    {
      icon: <Apple className="w-6 h-6" />,
      title: 'Mese Sănătoase',
      description: 'Prânz cald și gustări nutritive preparate fresh'
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: 'Suport Școlar',
      description: 'Profesori calificați pentru ajutor la teme'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Dezvoltare Completă',
      description: 'Activități fizice, creative și sociale'
    }
  ]

  const schools = [
    'Școala Gimnazială "Ioan Bob"',
    'Colegiul Național "George Coșbuc"',
    'Școala "Iuliu Hațieganu"',
    'Liceul "Onisifor Ghibu"',
    'Școala Internațională Cluj',
    'Alte școli din zona centrală'
  ]

  const packages = [
    {
      name: 'Zilnic',
      price: '120 lei',
      period: 'per zi',
      features: [
        'Program complet 12:00-19:00',
        'Transport inclus',
        'Prânz și gustare',
        'Toate activitățile'
      ],
      popular: false
    },
    {
      name: 'Săptămânal',
      price: '500 lei',
      period: 'per săptămână',
      features: [
        'Economisești 100 lei',
        'Flexibilitate zile',
        'Recuperare absențe',
        'Raport săptămânal'
      ],
      popular: false
    },
    {
      name: 'Lunar',
      price: '1600 lei',
      period: 'per lună',
      features: [
        'Cea mai bună valoare',
        'Prioritate înscriere',
        'Evenimente speciale',
        'Evaluare lunară'
      ],
      popular: true
    }
  ]

  const activities = [
    { day: 'Luni', special: 'Club de Știință - Experimente distractive' },
    { day: 'Marți', special: 'Atelier de Arte - Pictură și modelaj' },
    { day: 'Miercuri', special: 'Sport Day - Jocuri de echipă' },
    { day: 'Joi', special: 'Cooking Class - Gătim sănătos' },
    { day: 'Vineri', special: 'Movie & Games - Relaxare și distracție' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-400 to-orange-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Clock className="w-8 h-8" />
                <span className="text-yellow-100 text-lg">Program After School</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                După Școală, Aventura Continuă!
              </h1>
              <p className="text-xl text-yellow-50 mb-8">
                Un program complet care combină suportul educațional cu activități sportive și creative. 
                Transport de la școală, mese sănătoase și o echipă dedicată pentru dezvoltarea armonioasă a copilului tău.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <span className="font-semibold">6-14 ani</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <span className="font-semibold">Luni - Vineri</span>
                </div>
                <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                  <span className="font-semibold">12:00 - 19:00</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/skaiurbancrag/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-yellow-50 transition-colors font-semibold text-lg"
                >
                  Înscrie-te Acum
                </Link>
                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
                >
                  Vezi Programul
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560785496-3c9d27877182?w=800&h=600&fit=crop"
                alt="After School Program"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <Users className="w-8 h-8 text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-gray-600">copii per grupă</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section id="schedule" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Programul Zilnic
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            O zi plină de activități educative și distractive
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {dailySchedule.map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 flex items-center space-x-4 hover:shadow-lg transition-shadow">
                  <div className="text-3xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{item.time}</div>
                    <div className="text-gray-600">{item.activity}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Special Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Activități Speciale Săptămânale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">{activity.day}</h3>
                <p className="text-sm text-gray-600">{activity.special}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Școli Partenere
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Asigurăm transport de la următoarele instituții de învățământ
          </p>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schools.map((school, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{school}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-600 mt-6">
              * Pentru alte școli, contactați-ne pentru verificarea disponibilității
            </p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pachete Flexibile
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Recomandat
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                  <p className="text-gray-600">{pkg.period}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/skaiurbancrag/contact"
                  className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition-colors ${
                    pkg.popular
                      ? 'bg-orange-500 text-white hover:bg-orange-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Alege Pachetul
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 text-center max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ofertă Specială Frați
            </h3>
            <p className="text-gray-600 mb-4">
              Reducere 15% pentru al doilea copil din aceeași familie
            </p>
            <div className="flex items-center justify-center space-x-2 text-orange-600">
              <Heart className="w-5 h-5" />
              <span className="font-semibold">Familie mai mare, reduceri mai mari!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-yellow-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <blockquote className="text-xl text-gray-700 italic mb-6 text-center">
              &ldquo;Programul After School de la SKAI a fost salvarea noastră! 
              Copiii sunt preluați în siguranță, își fac temele cu ajutor calificat 
              și se întorc acasă obosiți dar fericiți după escaladă. Recomand cu căldură!&rdquo;
            </blockquote>
            <div className="text-center">
              <cite className="text-gray-900 font-semibold">- Andreea M., mamă a doi copii</cite>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-500">⭐</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Oferă Copilului Tău cel Mai Bun After School!
          </h2>
          <p className="text-xl text-yellow-50 mb-8 max-w-2xl mx-auto">
            Locuri limitate disponibile. Înscrie-te acum pentru anul școlar 2024-2025!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-yellow-50 transition-colors font-semibold"
            >
              Rezervă un Loc
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

export default AfterSchoolPage