import { CheckCircle, Award, TrendingUp, Users } from 'lucide-react'
import Link from 'next/link'

const AboutSection = () => {
  const milestones = [
    { year: '2011', event: 'Început import ambalaje din Europa' },
    { year: '2016', event: 'Proiect fonduri europene aprobat' },
    { year: '2020', event: 'Lansare producție tuburi carton' },
    { year: '2024', event: 'Lider regional în ambalaje eco' }
  ]

  const stats = [
    { number: '13+', label: 'Ani Experiență', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '1000+', label: 'Clienți Mulțumiți', icon: <Users className="w-6 h-6" /> },
    { number: '100%', label: 'Material Reciclat', icon: <CheckCircle className="w-6 h-6" /> },
    { number: 'ISO', label: '14001:2015', icon: <Award className="w-6 h-6" /> }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Povestea Noastră de Succes
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Din 2011, Zelda Projects a evoluat de la un importator de ambalaje la un producător 
              de referință în industria tuburilor de carton din România. Cu sprijinul fondurilor 
              europene și o viziune clară pentru sustenabilitate, am construit o fabrică modernă 
              în Cluj-Napoca.
            </p>
            
            {/* Timeline */}
            <div className="space-y-4 mb-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="text-sm font-bold text-green-600">{milestone.year}</span>
                  </div>
                  <div className="flex-shrink-0 w-3 h-3 bg-green-600 rounded-full relative">
                    {index < milestones.length - 1 && (
                      <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-green-200" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/zeldaprojects/despre-noi"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              Află Mai Multe Despre Noi
            </Link>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-700/20 rounded-2xl transform rotate-6" />
            <img
              src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
              alt="Fabrica Zelda Projects"
              className="relative rounded-2xl shadow-xl"
            />
            
            {/* Stats Overlay */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-lg">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2 text-green-600">
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

        {/* Values */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Valorile Noastre
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Calitate</h4>
              <p className="text-gray-600">
                Produse certificate și testate pentru a îndeplini cele mai înalte standarde
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Parteneriat</h4>
              <p className="text-gray-600">
                Relații de lungă durată bazate pe încredere și profesionalism
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Inovație</h4>
              <p className="text-gray-600">
                Investiții continue în tehnologii moderne și soluții sustenabile
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection