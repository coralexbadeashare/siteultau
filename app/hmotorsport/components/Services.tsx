import { Car, Wrench, Settings, Fuel, Users, Clock } from 'lucide-react'
import Link from 'next/link'

const Services = () => {
  const services = [
    {
      icon: <Car className="w-10 h-10" />,
      title: 'Închiriere Mașini de Curse',
      description: 'Automobile performante pentru competiții naționale și internaționale',
      features: ['Mașini pregătite competițional', 'Transport inclus', 'Asistență la cursă'],
      color: 'from-red-600 to-red-700'
    },
    {
      icon: <Wrench className="w-10 h-10" />,
      title: 'Asistență Tehnică Completă',
      description: 'Suport tehnic profesional pentru toate tipurile de competiții',
      features: ['Mecanici experimentați', 'Piese de schimb', 'Setup competițional'],
      color: 'from-orange-600 to-orange-700'
    },
    {
      icon: <Settings className="w-10 h-10" />,
      title: 'Service Auto Specializat',
      description: 'Reparații și întreținere pentru mașini de curse și stradale',
      features: ['Diagnosticare computerizată', 'Tuning motor', 'Pregătire tehnică'],
      color: 'from-gray-600 to-gray-700'
    }
  ]

  const additionalServices = [
    { icon: <Fuel className="w-6 h-6" />, name: 'Furnizare Combustibil', desc: 'Combustibil special pentru curse' },
    { icon: <Users className="w-6 h-6" />, name: 'Echipă Suport', desc: 'Personal calificat la evenimente' },
    { icon: <Clock className="w-6 h-6" />, name: 'Disponibilitate 24/7', desc: 'Asistență non-stop în competiții' }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim soluții complete pentru piloți și echipe de motorsport, 
            de la închiriere mașini până la asistență tehnică completă
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`} />
              <div className="p-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/hmotorsport/servicii"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  Detalii complete →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gray-900 rounded-2xl p-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Servicii Suplimentare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-red-600 rounded-lg p-3 text-white flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{service.name}</h4>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/hmotorsport/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-800 transition-all shadow-lg hover:shadow-red-600/25 text-lg font-medium"
          >
            Solicită Ofertă Personalizată
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services