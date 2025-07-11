import { CheckCircle, Award, Users, Target } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const stats = [
    { number: '15+', label: 'Ani Experiență', icon: <Award className="w-6 h-6" /> },
    { number: '200+', label: 'Curse Asistate', icon: <Target className="w-6 h-6" /> },
    { number: '50+', label: 'Piloți Mulțumiți', icon: <Users className="w-6 h-6" /> },
    { number: '24/7', label: 'Disponibilitate', icon: <CheckCircle className="w-6 h-6" /> }
  ]

  const values = [
    { title: 'Pasiune', desc: 'Motorsportul este în sângele nostru' },
    { title: 'Profesionalism', desc: 'Standarde înalte în toate serviciile' },
    { title: 'Inovație', desc: 'Tehnologii moderne și soluții creative' },
    { title: 'Dedicare', desc: 'Succes garantat pentru fiecare client' }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Experiență și Pasiune pentru
              <span className="text-red-600"> Motorsport</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              H Motorsport este liderul în servicii de suport pentru competiții auto din România. 
              Cu peste 15 ani de experiență, oferim soluții complete pentru piloți și echipe care 
              doresc să exceleze în motorsport.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              De la închirierea mașinilor de curse pregătite competițional până la asistență 
              tehnică completă, suntem partenerul de încredere pentru succesul dumneavoastră 
              pe circuit.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/hmotorsport/echipa"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Cunoaște Echipa →
            </Link>
          </div>

          {/* Stats & Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop"
                alt="H Motorsport Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Stats Overlay */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-full max-w-lg px-4">
              <div className="bg-white rounded-xl shadow-2xl p-6">
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2 text-red-600">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4">Misiunea Noastră</h3>
            <p className="text-lg text-red-50">
              "Să oferim cele mai bune servicii de suport tehnic pentru motorsport, 
              permițând piloților să se concentreze pe ceea ce fac cel mai bine - să câștige curse. 
              Succesul clienților noștri este succesul nostru."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About