import { Heart, Sparkles, Wind, Mountain, Sun, Moon, Calendar, Clock } from 'lucide-react'
import Link from 'next/link'

const YogaPage = () => {
  const benefits = [
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Flexibilitate Îmbunătățită',
      description: 'Crește amplitudinea mișcărilor pentru prize mai dificile'
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Echilibru și Stabilitate',
      description: 'Dezvoltă controlul corpului pentru trasee tehnice'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Respirație Controlată',
      description: 'Tehnici de respirație pentru gestionarea stresului'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Recuperare Activă',
      description: 'Prevenirea accidentărilor și recuperare mai rapidă'
    }
  ]

  const yogaStyles = [
    {
      style: 'Hatha Yoga',
      description: 'Poziții susținute pentru forță și flexibilitate',
      focus: 'Ideal pentru începători',
      icon: '🧘'
    },
    {
      style: 'Vinyasa Flow',
      description: 'Mișcare dinamică sincronizată cu respirația',
      focus: 'Pentru energie și fluiditate',
      icon: '🌊'
    },
    {
      style: 'Yin Yoga',
      description: 'Poziții pasive pentru țesut conjunctiv',
      focus: 'Recuperare profundă',
      icon: '🌙'
    },
    {
      style: 'Power Yoga',
      description: 'Secvențe intense pentru forță',
      focus: 'Complementar antrenamentului',
      icon: '💪'
    }
  ]

  const schedule = [
    {
      day: 'Miercuri',
      sessions: [
        { time: '18:30 - 20:00', type: 'Yoga pentru Climbers', level: 'Toate nivelurile' }
      ]
    },
    {
      day: 'Vineri',
      sessions: [
        { time: '19:00 - 20:30', type: 'Recovery Yoga', level: 'Relaxare și stretching' }
      ]
    },
    {
      day: 'Duminică',
      sessions: [
        { time: '10:00 - 11:30', type: 'Morning Flow', level: 'Energie pentru weekend' }
      ]
    }
  ]

  const poses = [
    {
      name: 'Pigeon Pose',
      benefits: 'Deschide șoldurile pentru high steps',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop'
    },
    {
      name: 'Warrior III',
      benefits: 'Echilibru și stabilitate pe un picior',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop'
    },
    {
      name: 'Eagle Arms',
      benefits: 'Mobilitate pentru umeri și spate',
      image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&h=300&fit=crop'
    },
    {
      name: 'Lizard Pose',
      benefits: 'Flexibilitate pentru split-uri',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop'
    }
  ]

  const instructor = {
    name: 'Elena Marinescu',
    certification: 'RYT-500, Specialized in Yoga for Athletes',
    experience: '8 ani experiență, 5 ani yoga pentru escaladori',
    philosophy: 'Yoga nu este despre atingerea degetelor de la picioare, ci despre ce înveți în drumul spre ele.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=400&fit=crop'
  }

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-pink-500 to-purple-600 text-white py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8" />
                <span className="text-pink-200 text-lg">Flexibilitate și Echilibru</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Yoga pentru Climbers
              </h1>
              <p className="text-xl text-pink-50 mb-8">
                Îmbunătățește-ți performanța în escaladă prin yoga specializată. 
                Dezvoltă flexibilitatea, echilibrul și concentrarea mentală necesare pentru a depăși limitele.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-pink-200" />
                  <span>3 clase/săptămână</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-pink-200" />
                  <span>90 minute/clasă</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/skaiurbancrag/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition-colors font-semibold text-lg"
                >
                  Rezervă Prima Clasă
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
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop"
                alt="Yoga pentru climbers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-3xl font-bold text-gray-900">40 lei</div>
                <div className="text-gray-600">drop-in class</div>
                <div className="text-sm text-pink-600 mt-1">sau abonament lunar</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            De Ce Yoga pentru Escaladă?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-pink-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yoga Styles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Stiluri de Yoga Practicate
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Fiecare clasă combină elemente din diferite stiluri pentru a răspunde nevoilor escaladorilor
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {yogaStyles.map((style, index) => (
              <div key={index} className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{style.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{style.style}</h3>
                <p className="text-gray-600 mb-3">{style.description}</p>
                <p className="text-sm text-pink-600 font-medium">{style.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Poses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Poziții Cheie pentru Escaladori
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Poziții special selectate pentru a îmbunătăți performanța în escaladă
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {poses.map((pose, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={pose.image}
                  alt={pose.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{pose.name}</h3>
                  <p className="text-sm text-gray-600">{pose.benefits}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Program Săptămânal
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {schedule.map((day, index) => (
                <div key={index} className={`p-6 ${index !== schedule.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    {day.day === 'Duminică' ? <Sun className="w-6 h-6 mr-2 text-yellow-500" /> : 
                     day.day === 'Vineri' ? <Moon className="w-6 h-6 mr-2 text-purple-500" /> :
                     <Calendar className="w-6 h-6 mr-2 text-pink-500" />}
                    {day.day}
                  </h3>
                  {day.sessions.map((session, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2">
                      <div>
                        <p className="font-medium text-gray-900">{session.type}</p>
                        <p className="text-sm text-gray-600">{session.level}</p>
                      </div>
                      <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                        {session.time}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                * Clasele sunt deschise tuturor membrilor SKAI, indiferent de experiența în yoga
              </p>
              <div className="inline-flex items-center space-x-2 bg-white rounded-lg shadow-md px-6 py-3">
                <Sparkles className="w-5 h-5 text-pink-600" />
                <span className="font-medium text-gray-900">Prima clasă GRATUITĂ pentru membri noi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Instructor
          </h2>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-pink-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                <p className="text-pink-600 font-medium mb-4">{instructor.certification}</p>
                <p className="text-gray-700 mb-4">{instructor.experience}</p>
                <blockquote className="italic text-gray-600 border-l-4 border-pink-500 pl-4">
                  "{instructor.philosophy}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Opțiuni de Participare
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Drop-In</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">40 lei</div>
              <p className="text-gray-600 mb-4">per clasă</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Flexibilitate maximă</li>
                <li>✓ Fără angajament</li>
                <li>✓ Ideal pentru început</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-2xl shadow-xl p-8 text-center transform scale-105">
              <div className="bg-white/20 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                RECOMANDAT
              </div>
              <h3 className="text-xl font-semibold mb-2">Abonament Lunar</h3>
              <div className="text-4xl font-bold mb-2">150 lei</div>
              <p className="text-pink-100 mb-4">nelimitat</p>
              <ul className="space-y-2 text-pink-50">
                <li>✓ Toate clasele de yoga</li>
                <li>✓ Workshop-uri gratuite</li>
                <li>✓ Prioritate rezervări</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">10 Clase</h3>
              <div className="text-4xl font-bold text-gray-900 mb-2">300 lei</div>
              <p className="text-gray-600 mb-4">valid 3 luni</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Economisești 100 lei</li>
                <li>✓ Flexibil</li>
                <li>✓ Transferabil</li>
              </ul>
            </div>
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Membrii cu abonament de escaladă beneficiază de 20% reducere la yoga
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Descoperă Echilibrul Perfect
          </h2>
          <p className="text-xl text-pink-50 mb-8 max-w-2xl mx-auto">
            Integrează yoga în rutina ta de antrenament și vezi cum performanța ta în escaladă atinge noi înălțimi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-pink-600 rounded-lg hover:bg-pink-50 transition-colors font-semibold"
            >
              Rezervă Prima Clasă Gratuită
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

export default YogaPage