import Link from 'next/link'
import { ArrowRight, Users, UserCheck, Baby, PartyPopper, Tent, School } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: 'Ședință de Inițiere',
      description: 'Primul pas în lumea escaladei. Învață bazele în siguranță cu instructorii noștri.',
      features: ['Instructor dedicat', 'Echipament inclus', 'Durata: 2 ore', 'Certificate'],
      link: '/skaiurbancrag/cursuri/initiere',
      color: 'from-blue-500 to-blue-600',
      popular: false
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: 'Cursuri Copii & Adulți',
      description: 'Programe structurate pentru toate vârstele și nivelurile de experiență.',
      features: ['Grupe mici (6-8 persoane)', 'Progres monitorizat', 'Flexibilitate orar', 'Atmosferă prietenoasă'],
      link: '/skaiurbancrag/cursuri/copii-adulti',
      color: 'from-orange-500 to-orange-600',
      popular: true
    },
    {
      icon: <Baby className="w-10 h-10" />,
      title: 'SKAI Kids Special',
      description: 'Activități dedicate copiilor: petreceri, tabere și programe școlare.',
      features: ['Petreceri aniversare', 'Tabere de vară', 'Școala Altfel', 'Supraveghere constantă'],
      link: '/skaiurbancrag/skai-kids',
      color: 'from-purple-500 to-purple-600',
      popular: false
    }
  ]

  const additionalServices = [
    {
      icon: <PartyPopper className="w-6 h-6" />,
      title: 'Petreceri Private',
      description: 'Organizăm petreceri de aniversare memorabile pentru copii',
      link: '/skaiurbancrag/skai-kids/petreceri'
    },
    {
      icon: <Tent className="w-6 h-6" />,
      title: 'Tabere Outdoor',
      description: 'Aventuri în natură cu activități de escaladă și team building',
      link: '/skaiurbancrag/skai-kids/tabere'
    },
    {
      icon: <School className="w-6 h-6" />,
      title: 'Școala Altfel',
      description: 'Programe educaționale interactive pentru grupuri școlare',
      link: '/skaiurbancrag/skai-kids/scoala-altfel'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Serviciile Noastre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De la prima experiență până la antrenament avansat, 
            avem programul perfect pentru tine
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-orange-500' : ''
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                  Popular
                </div>
              )}
              
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
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2 text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={service.link}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  Detalii
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Servicii Speciale pentru Copii
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Link
                key={index}
                href={service.link}
                className="bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 rounded-lg p-3 text-white flex-shrink-0">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Nu știi de unde să începi?</p>
          <Link
            href="/skaiurbancrag/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg hover:shadow-orange-500/25 text-lg font-medium"
          >
            Contactează-ne pentru Consultanță
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services