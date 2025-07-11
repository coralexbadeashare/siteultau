import { GraduationCap, Clock, Users, Calendar, CheckCircle, ArrowRight, Shield, Heart, Mountain } from 'lucide-react'
import Link from 'next/link'

const InitierePage = () => {
  const curriculum = [
    {
      week: 'Săptămâna 1',
      title: 'Introducere și Siguranță',
      topics: [
        'Familiarizarea cu sala și echipamentul',
        'Reguli de siguranță fundamentale',
        'Poziția corectă a corpului',
        'Primii pași pe perete'
      ]
    },
    {
      week: 'Săptămâna 2',
      title: 'Tehnici de Bază',
      topics: [
        'Tipuri de prize și cum să le folosești',
        'Mișcare eficientă pe perete',
        'Echilibru și transfer de greutate',
        'Tehnica picioarelor'
      ]
    },
    {
      week: 'Săptămâna 3',
      title: 'Progresie și Încredere',
      topics: [
        'Trasee mai complexe',
        'Gestionarea fricii de înălțime',
        'Tehnici de odihnă pe traseu',
        'Planificarea rutei'
      ]
    },
    {
      week: 'Săptămâna 4',
      title: 'Consolidare și Evaluare',
      topics: [
        'Recapitulare tehnică completă',
        'Trasee de evaluare',
        'Planul de dezvoltare ulterioară',
        'Introducere în comunitatea SKAI'
      ]
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Siguranță Maximă',
      description: 'Învățare într-un mediu controlat cu echipament de ultimă generație'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Dezvoltare Fizică',
      description: 'Îmbunătățește forța, flexibilitatea și coordonarea'
    },
    {
      icon: <Mountain className="w-6 h-6" />,
      title: 'Depășire Personală',
      description: 'Învinge-ți fricile și descoperă-ți potențialul'
    }
  ]

  const faqs = [
    {
      question: 'Am nevoie de experiență anterioară?',
      answer: 'Nu, cursul este special conceput pentru începători absoluți. Vom începe de la zero și vom progresa în ritmul tău.'
    },
    {
      question: 'Ce echipament am nevoie?',
      answer: 'Pentru primele ședințe, doar haine sportive confortabile. Noi îți punem la dispoziție încălțăminte de escaladă, ham și toate cele necesare.'
    },
    {
      question: 'Câți participanți sunt într-o grupă?',
      answer: 'Maximum 6-8 persoane per grupă pentru a asigura atenție personalizată fiecărui cursant.'
    },
    {
      question: 'Ce se întâmplă dacă lipsesc de la o ședință?',
      answer: 'Poți recupera ședința cu altă grupă în aceeași săptămână sau săptămâna următoare.'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-500 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="w-8 h-8" />
                <span className="text-green-200 text-lg">Curs pentru Începători</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Curs de Inițiere în Escaladă
              </h1>
              <p className="text-xl text-green-50 mb-8">
                Fă primul pas într-o aventură care îți va schimba perspectiva. 
                În doar 4 săptămâni, vei învăța tot ce ai nevoie pentru a escalada în siguranță și cu încredere.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-green-200" />
                  <span>4 săptămâni</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-green-200" />
                  <span>Max 8 cursanți</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-green-200" />
                  <span>2 ședințe/săptămână</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/skaiurbancrag/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold text-lg"
                >
                  Înscrie-te Acum
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="#curriculum"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
                >
                  Vezi Programul
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop"
                alt="Curs de inițiere"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6">
                <div className="text-3xl font-bold text-gray-900">350 lei</div>
                <div className="text-gray-600">pentru întreg cursul</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="bg-green-100 rounded-full p-3 w-14 h-14 flex items-center justify-center mx-auto mb-4 text-green-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Programul Cursului
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Un curriculum structurat care te va transforma din începător într-un escalador încrezător
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {curriculum.map((week, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{week.week}</h3>
                    <p className="text-green-600">{week.title}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {week.topics.map((topic, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ce Include Cursul
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">8 Ședințe Practice</h4>
                <p className="text-gray-600">2 ședințe pe săptămână, 90 minute fiecare</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Echipament Inclus</h4>
                <p className="text-gray-600">Ham, încălțăminte și tot ce ai nevoie</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Manual Digital</h4>
                <p className="text-gray-600">Ghid complet cu tehnici și exerciții</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Certificat de Absolvire</h4>
                <p className="text-gray-600">Dovada competențelor dobândite</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Acces la Comunitate</h4>
                <p className="text-gray-600">Grup WhatsApp cu toți absolvenții</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Reducere 10%</h4>
                <p className="text-gray-600">La abonamentul lunar după absolvire</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Întrebări Frecvente
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Începe Aventura Ta în Escaladă
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Locuri limitate disponibile. Înscrie-te acum și fă primul pas către o nouă pasiune!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
            >
              Rezervă Locul Tău
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

export default InitierePage