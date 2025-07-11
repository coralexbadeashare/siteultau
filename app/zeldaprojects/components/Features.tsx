import { Truck, Recycle, Shield, Clock, Settings, Users } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Livrare Națională',
      description: 'Transport zilnic în toată țara cu livrare în aceeași zi sau a doua zi',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: '100% Reciclat',
      description: 'Tuburi de carton produse exclusiv din materiale reciclate',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Certificat ISO',
      description: 'Certificare ISO 14001:2015 pentru managementul mediului',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Procesare Rapidă',
      description: 'Sistem computerizat pentru procesare rapidă a comenzilor',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Producție Modernă',
      description: 'Linie de producție finanțată prin fonduri europene',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Suport Dedicat',
      description: 'Echipă profesionistă pentru asistență și consultanță',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            De Ce Să Alegeți Zelda Projects?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem lideri în producția de tuburi de carton și distribuția de ambalaje ecologice, 
            oferind soluții sustenabile pentru afacerea dumneavoastră
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Angajament pentru Sustenabilitate
              </h3>
              <p className="text-green-50 mb-4">
                Din 2020, producem tuburi de carton industrial folosind exclusiv materiale reciclate, 
                contribuind la protejarea mediului și reducerea deșeurilor.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Reducerea amprentei de carbon</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Economie circulară</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  <span>Produse biodegradabile și compostabile</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl" />
                <Recycle className="w-48 h-48 text-white/80 relative" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features