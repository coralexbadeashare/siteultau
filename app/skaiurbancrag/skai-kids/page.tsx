import { Baby, PartyPopper, Sun, Users, Star, Heart, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

const SkaiKidsPage = () => {
  const programs = [
    {
      id: 'after-school',
      title: 'After School',
      age: '6-14 ani',
      description: 'Program zilnic de activități după școală cu transport inclus',
      icon: <Sun className="w-8 h-8" />,
      features: [
        'Transport de la școală',
        'Masă sănătoasă inclusă',
        'Teme asistate',
        'Escaladă și jocuri'
      ],
      color: 'from-yellow-400 to-orange-500',
      link: '/skaiurbancrag/skai-kids/after-school'
    },
    {
      id: 'petreceri',
      title: 'Petreceri Aniversare',
      age: '4-14 ani',
      description: 'Sărbătorește ziua specială cu o aventură de neuitat',
      icon: <PartyPopper className="w-8 h-8" />,
      features: [
        'Pachete personalizate',
        'Animator dedicat',
        'Tort și gustări',
        'Decorațiuni tematice'
      ],
      color: 'from-pink-400 to-purple-500',
      link: '/skaiurbancrag/skai-kids/petreceri'
    },
    {
      id: 'tabere',
      title: 'Tabere de Vară',
      age: '7-14 ani',
      description: 'Aventuri în natură și escaladă outdoor',
      icon: <Sun className="w-8 h-8" />,
      features: [
        'Escaladă în natură',
        'Activități outdoor',
        'Dezvoltare personală',
        'Supraveghere 24/7'
      ],
      color: 'from-green-400 to-blue-500',
      link: '/skaiurbancrag/skai-kids/tabere'
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Mediu Sigur',
      description: 'Supraveghere constantă și echipament adaptat vârstei'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Dezvoltare Armonioasă',
      description: 'Fizică, emoțională și socială prin joc și mișcare'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Prietenii Noi',
      description: 'Socializare într-un mediu pozitiv și încurajator'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Încredere în Sine',
      description: 'Depășirea limitelor și construirea curajului'
    }
  ]

  const activities = [
    { name: 'Escaladă', emoji: '🧗' },
    { name: 'Jocuri Interactive', emoji: '🎮' },
    { name: 'Arte & Craft', emoji: '🎨' },
    { name: 'Experimente Științifice', emoji: '🔬' },
    { name: 'Teatru & Povești', emoji: '🎭' },
    { name: 'Sport & Mișcare', emoji: '⚽' }
  ]

  const stats = [
    { number: '500+', label: 'Copii Fericiți' },
    { number: '100+', label: 'Petreceri Organizate' },
    { number: '15+', label: 'Tabere de Succes' },
    { number: '4.9/5', label: 'Rating Părinți' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl animate-bounce">🎈</div>
          <div className="absolute bottom-10 right-10 text-8xl animate-pulse">🌟</div>
          <div className="absolute top-1/2 left-1/4 text-6xl animate-spin-slow">🎯</div>
          <div className="absolute bottom-1/4 right-1/3 text-6xl animate-bounce">🏆</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Baby className="w-10 h-10 text-purple-600" />
              <span className="text-purple-600 text-xl font-semibold">SKAI Kids</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Unde Copiii Devin
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Mici Eroi
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Programe speciale de escaladă și activități creative pentru copii. 
              Un loc unde aventura întâlnește învățarea într-un mediu sigur și distractiv!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#programs"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Descoperă Programele
              </Link>
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Înscrie-ți Copilul
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Programele Noastre
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Activități special create pentru diferite vârste și nevoi
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <Link
                key={program.id}
                href={program.link}
                className="group transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden h-full">
                  <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                  <div className="p-8">
                    <div className={`bg-gradient-to-br ${program.color} rounded-2xl p-4 w-fit mb-6 text-white group-hover:scale-110 transition-transform`}>
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                    <p className="text-purple-600 font-semibold mb-3">{program.age}</p>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    
                    <ul className="space-y-3">
                      {program.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                      Află mai multe →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            De Ce SKAI Kids?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 w-24 h-24 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-purple-600">{benefit.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Activități Diverse și Distractive
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transform hover:scale-105 transition-all"
              >
                <div className="text-5xl mb-3">{activity.emoji}</div>
                <p className="font-medium text-gray-800">{activity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 text-center">
            <div className="text-6xl mb-6">🌟</div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              &ldquo;SKAI Kids a fost cea mai bună decizie pentru fiica mea. Nu doar că a învățat să escaladeze, 
              dar a căpătat încredere, a făcut prieteni noi și abia așteaptă fiecare zi să vină aici!&rdquo;
            </blockquote>
            <cite className="text-gray-900 font-semibold">- Maria P., mamă</cite>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Hai să Creăm Amintiri de Neuitat!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Alătură-te comunității SKAI Kids și oferă copilului tău o experiență unică
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Înscrie-te Acum
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SkaiKidsPage