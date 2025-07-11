import { Shield, Users, Clock, Mountain, Heart, Award } from 'lucide-react'
import Link from 'next/link'

const Features = () => {
  const features = [
    {
      icon: <Mountain className="w-8 h-8" />,
      title: 'Trasee Variate',
      description: 'Peste 100 de trasee de diferite grade de dificultate, actualizate constant',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Siguranță Maximă',
      description: 'Echipament certificat și verificat periodic, personal calificat',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunitate Prietenoasă',
      description: 'Alătură-te unei comunități pasionate și primitoare',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Program Flexibil',
      description: 'Deschis 7 zile pe săptămână cu ore extinse',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pentru Toate Vârstele',
      description: 'Programe speciale pentru copii de la 4 ani și adulți',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Instructori Experimentați',
      description: 'Antrenori certificați cu experiență în competiții',
      color: 'from-yellow-500 to-yellow-600'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            De Ce Să Alegi <span className="text-orange-500">SKAI</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferim cea mai completă experiență de escaladă urbană din Cluj, 
            cu facilități moderne și o atmosferă prietenoasă
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-100 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Special Feature */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full transform translate-x-1/2 -translate-y-1/2" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Spațiu Special Amenajat pentru Yoga
              </h3>
              <p className="text-orange-50 mb-6">
                Pe lângă escaladă, oferim și clase de yoga pentru a-ți completa 
                antrenamentul cu exerciții de flexibilitate și echilibru mental.
              </p>
              <Link
                href="/skaiurbancrag/cursuri/yoga"
                className="inline-flex items-center px-6 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
              >
                Descoperă Yoga
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-8xl">🧘‍♀️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features