import { Car, Wrench, Settings, Fuel, Users, Clock, Shield, Gauge, Package } from 'lucide-react'
import Link from 'next/link'

const ServicesPage = () => {
  const mainServices = [
    {
      icon: <Car className="w-12 h-12" />,
      title: 'Închiriere Mașini de Curse',
      description: 'Automobile pregătite competițional pentru toate tipurile de motorsport',
      features: [
        'Rally, Circuit, Drift, Slalom',
        'Transport la locația competiției',
        'Setup personalizat pentru fiecare pilot',
        'Asigurare completă inclusă'
      ],
      details: [
        { label: 'Categorii disponibile', value: 'Rally, Circuit, Drift' },
        { label: 'Pregătire', value: 'FIA/FRAS conform' },
        { label: 'Disponibilitate', value: 'Național și internațional' },
        { label: 'Prețuri', value: 'De la 800€/zi' }
      ],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: 'Asistență Tehnică Completă',
      description: 'Suport tehnic profesional pentru competiții și evenimente motorsport',
      features: [
        'Echipă de mecanici experimentați',
        'Service mobil la competiții',
        'Piese de schimb originale',
        'Telemetrie și analiză date'
      ],
      details: [
        { label: 'Personal', value: '5+ mecanici certificați' },
        { label: 'Echipament', value: 'Atelier mobil complet' },
        { label: 'Răspuns', value: 'Intervenție rapidă' },
        { label: 'Disponibilitate', value: '24/7 în competiții' }
      ],
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: <Settings className="w-12 h-12" />,
      title: 'Service Auto Specializat',
      description: 'Reparații și pregătire pentru mașini de curse și automobile stradale',
      features: [
        'Diagnosticare computerizată',
        'Tuning și optimizare motor',
        'Suspensie și frânare sport',
        'Pregătire omologare FRAS'
      ],
      details: [
        { label: 'Specializări', value: 'Motorsport & Tuning' },
        { label: 'Echipamente', value: 'Tehnologie de ultimă generație' },
        { label: 'Garanție', value: '12 luni piese și manoperă' },
        { label: 'Program', value: 'Luni-Vineri 8:00-18:00' }
      ],
      color: 'from-gray-600 to-gray-700'
    }
  ]

  const additionalServices = [
    {
      icon: <Fuel className="w-8 h-8" />,
      title: 'Combustibil Competiție',
      description: 'Furnizare combustibil special pentru curse (98-102 octani)'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Piese și Consumabile',
      description: 'Anvelope competiție, plăcuțe frână, lichide speciale'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Consultanță Tehnică',
      description: 'Sfaturi pentru alegerea și pregătirea mașinii de curse'
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Setup și Reglaje',
      description: 'Optimizare suspensie, geometrie, aerodinamică'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Training Piloți',
      description: 'Cursuri de pilotaj sportiv cu instructori licențiați'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Cronometrare',
      description: 'Servicii de cronometrare pentru antrenamente'
    }
  ]

  const process = [
    { step: 1, title: 'Consultare', desc: 'Discutăm nevoile și obiectivele tale' },
    { step: 2, title: 'Planificare', desc: 'Elaborăm un plan personalizat' },
    { step: 3, title: 'Pregătire', desc: 'Pregătim tehnic tot ce este necesar' },
    { step: 4, title: 'Executare', desc: 'Implementăm cu profesionalism' },
    { step: 5, title: 'Suport', desc: 'Asistență continuă pe parcurs' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1600&h=800&fit=crop"
          alt="H Motorsport Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Servicii <span className="text-red-500">Profesionale</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Soluții complete pentru motorsport - de la închiriere mașini până la asistență tehnică completă
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicii Principale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trei piloni principali pentru succesul tău în motorsport
            </p>
          </div>

          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${service.color} rounded-2xl text-white mb-6 shadow-xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/hmotorsport/contact"
                    className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Solicită Serviciul →
                  </Link>
                </div>
                
                <div className="flex-1 bg-white rounded-2xl shadow-xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Detalii Tehnice</h4>
                  <div className="space-y-4">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-200">
                        <span className="text-gray-600">{detail.label}</span>
                        <span className="font-medium text-gray-900">{detail.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Servicii Suplimentare
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full text-red-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Procesul Nostru de Lucru
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-4">
            {process.map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-red-600/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pregătit pentru Următoarea Cursă?
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Contactează-ne acum pentru o consultare gratuită și descoperă cum te putem ajuta să câștigi
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hmotorsport/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Solicită Ofertă
            </Link>
            <a
              href="tel:0740372618"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Sună Acum: 0740 372 618
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ServicesPage