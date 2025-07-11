import { Star, User, Target, TrendingUp, Clock, Award, CheckCircle, Zap } from 'lucide-react'
import Link from 'next/link'

const PersonalPage = () => {
  const trainingTypes = [
    {
      type: 'Tehnic',
      description: 'Perfecționarea mișcărilor și tehnicilor specifice',
      focus: ['Footwork precis', 'Poziționare corporală', 'Citirea traseelor', 'Eficiență energetică']
    },
    {
      type: 'Fizic',
      description: 'Dezvoltarea forței și rezistenței specifice',
      focus: ['Forță degetelor', 'Core stability', 'Power endurance', 'Flexibilitate dinamică']
    },
    {
      type: 'Mental',
      description: 'Pregătire psihologică și gestionarea fricii',
      focus: ['Vizualizare', 'Concentrare', 'Gestionarea stresului', 'Încredere pe traseu']
    },
    {
      type: 'Tactic',
      description: 'Strategie de competiție și proiectare',
      focus: ['Analiză trasee', 'Timp management', 'Beta reading', 'Strategie competiții']
    }
  ]

  const packages = [
    {
      name: 'Sesiune Unică',
      sessions: '1 ședință',
      price: '150 lei',
      duration: '90 minute',
      includes: [
        'Evaluare inițială',
        'Plan personalizat',
        'Feedback detaliat',
        'Exerciții pentru acasă'
      ],
      popular: false
    },
    {
      name: 'Pachet Starter',
      sessions: '5 ședințe',
      price: '650 lei',
      duration: 'Valid 2 luni',
      includes: [
        'Economisești 100 lei',
        'Program structurat',
        'Monitorizare progres',
        'Suport între ședințe'
      ],
      popular: true
    },
    {
      name: 'Pachet Progress',
      sessions: '10 ședințe',
      price: '1200 lei',
      duration: 'Valid 3 luni',
      includes: [
        'Economisești 300 lei',
        'Plan nutriție inclus',
        'Analiză video',
        'Acces prioritar instructor'
      ],
      popular: false
    }
  ]

  const process = [
    {
      step: 1,
      title: 'Consultație Inițială',
      description: 'Discutăm obiectivele tale și evaluăm nivelul actual'
    },
    {
      step: 2,
      title: 'Plan Personalizat',
      description: 'Creăm un program adaptat nevoilor și țintelor tale'
    },
    {
      step: 3,
      title: 'Antrenament Ghidat',
      description: 'Ședințe 1-la-1 cu feedback constant și ajustări'
    },
    {
      step: 4,
      title: 'Monitorizare & Ajustare',
      description: 'Urmărim progresul și adaptăm planul după necesități'
    }
  ]

  const testimonials = [
    {
      name: 'Andrei M.',
      achievement: 'De la 6a la 7b în 3 luni',
      text: 'Antrenamentul personal mi-a deblocat potențialul. În doar 3 luni am progresat mai mult decât în ultimul an.',
      rating: 5
    },
    {
      name: 'Cristina P.',
      achievement: 'Prima competiție, locul 3',
      text: 'Pregătirea mentală și tactică m-au ajutat enorm. Am reușit să urc pe podium la prima mea competiție!',
      rating: 5
    },
    {
      name: 'Mihai T.',
      achievement: 'Depășit platoul de performanță',
      text: 'După 2 ani blocați pe același nivel, antrenamentul personal mi-a oferit perspectiva și tehnicile necesare pentru a progresa.',
      rating: 5
    }
  ]

  const coaches = [
    {
      name: 'Alexandru Radu',
      specialization: 'Lead & Boulder',
      experience: '10+ ani experiență',
      achievements: ['Campion Național 2019', 'Coach Certificat FRAE'],
      availability: 'L-V: 16:00-21:00'
    },
    {
      name: 'Diana Popescu',
      specialization: 'Tehnică & Flexibilitate',
      experience: '8 ani experiență',
      achievements: ['Instructor Yoga RYT-200', 'Specialist mobilitate'],
      availability: 'Ma, J, S: 10:00-18:00'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-8 h-8" />
                <span className="text-orange-200 text-lg">Antrenament Premium</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Antrenament Personal 1-la-1
              </h1>
              <p className="text-xl text-orange-50 mb-8">
                Accelerează-ți progresul cu un program complet personalizat. 
                Atenție individuală, feedback instant și rezultate garantate.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-orange-200" />
                  <span>100% Personalizat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-orange-200" />
                  <span>Progres Accelerat</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-orange-200" />
                  <span>Orar Flexibil</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/skaiurbancrag/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
                >
                  Rezervă Consultație Gratuită
                </Link>
                <a
                  href="#packages"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
                >
                  Vezi Pachete
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop"
                alt="Antrenament personal"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                <Award className="w-8 h-8 text-orange-500 mb-2" />
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Rată de succes</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Antrenament Complet pe 4 Direcții
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 rounded-lg p-3 w-fit mb-4">
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.type}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.focus.map((item, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Cum Funcționează
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="w-full h-0.5 bg-gradient-to-r from-orange-300 to-orange-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Pachete de Antrenament
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Alege pachetul care se potrivește cel mai bine obiectivelor tale
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  pkg.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Cel Mai Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <p className="text-gray-600 mb-4">{pkg.sessions}</p>
                  <div className="text-4xl font-bold text-gray-900">{pkg.price}</div>
                  <p className="text-sm text-gray-500 mt-1">{pkg.duration}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
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

          <div className="mt-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
            <Zap className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Pachet Corporate & Team Building
            </h3>
            <p className="text-gray-600 mb-4">
              Soluții personalizate pentru echipe și companii. Contactează-ne pentru ofertă!
            </p>
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
            >
              Solicită Ofertă
            </Link>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Antrenorii Noștri
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {coaches.map((coach, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{coach.name}</h3>
                <p className="text-orange-600 font-medium mb-4">{coach.specialization}</p>
                <p className="text-gray-600 mb-4">{coach.experience}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Realizări:</h4>
                  <ul className="space-y-1">
                    {coach.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-sm text-gray-600">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Disponibil: {coach.availability}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Povești de Succes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-orange-200 pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-orange-600">{testimonial.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Investește în Progresul Tău
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Prima consultație este gratuită. Descoperă cum antrenamentul personal 
            poate transforma experiența ta în escaladă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Programează Consultație Gratuită
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Sună Direct: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PersonalPage