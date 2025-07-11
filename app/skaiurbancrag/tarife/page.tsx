import { Check, Star, TrendingUp, Users, Calendar, CreditCard } from 'lucide-react'
import Link from 'next/link'

const TarifePage = () => {
  const membershipPlans = {
    copii: {
      title: 'Copii (4-14 ani)',
      description: 'Tarife speciale pentru micii exploratori',
      icon: '🧒',
      plans: [
        {
          name: 'Intrare Unică',
          price: '45',
          unit: 'lei',
          duration: '1 zi',
          features: [
            'Acces complet la sală',
            'Echipament de bază inclus',
            'Supraveghere instructor',
            'Acces zona copii'
          ],
          popular: false
        },
        {
          name: '10 Intrări',
          price: '350',
          unit: 'lei',
          duration: 'Valid 2 luni',
          features: [
            'Economisești 100 lei',
            'Flexibilitate maximă',
            'Echipament inclus',
            'Poate fi împărțit cu prietenii'
          ],
          popular: false
        },
        {
          name: 'Lunar',
          price: '170',
          unit: 'lei/lună',
          duration: 'Acces nelimitat',
          features: [
            'Cel mai popular!',
            'Acces nelimitat',
            'Include cursuri de grup',
            'Echipament gratuit',
            '10% reducere la evenimente'
          ],
          popular: true
        },
        {
          name: '3 Luni',
          price: '470',
          unit: 'lei',
          duration: '3 luni',
          features: [
            'Economisești 40 lei',
            'Perfect pentru sezon',
            'Include toate beneficiile',
            'Plată în 2 rate'
          ],
          popular: false
        },
        {
          name: '6 Luni',
          price: '850',
          unit: 'lei',
          duration: '6 luni',
          features: [
            'Economisești 170 lei',
            'Cel mai bun preț',
            'Include workshop-uri',
            'Prioritate la evenimente',
            'Cadou surpriză'
          ],
          popular: false
        }
      ]
    },
    adulti: {
      title: 'Adulți',
      description: 'Pentru pasionații de escaladă de toate nivelurile',
      icon: '🧗',
      plans: [
        {
          name: 'Intrare Unică',
          price: '55',
          unit: 'lei',
          duration: '1 zi',
          features: [
            'Acces complet la sală',
            'Închiriere echipament disponibilă',
            'Acces vestiare',
            'Parcare gratuită'
          ],
          popular: false
        },
        {
          name: '10 Intrări',
          price: '400',
          unit: 'lei',
          duration: 'Valid 2 luni',
          features: [
            'Economisești 150 lei',
            'Transferabil',
            'Include guest pass',
            'Acces la evenimente'
          ],
          popular: false
        },
        {
          name: 'Lunar',
          price: '250',
          unit: 'lei/lună',
          duration: 'Acces nelimitat',
          features: [
            'Cel mai popular!',
            'Acces nelimitat',
            'Reduceri echipament',
            'Acces cursuri speciale',
            'Community events'
          ],
          popular: true
        },
        {
          name: '3 Luni',
          price: '650',
          unit: 'lei',
          duration: '3 luni',
          features: [
            'Economisești 100 lei',
            'Include 1 guest pass/lună',
            'Workshop-uri gratuite',
            'Acces early bird'
          ],
          popular: false
        },
        {
          name: '6 Luni',
          price: '1200',
          unit: 'lei',
          duration: '6 luni',
          features: [
            'Economisești 300 lei',
            'Best value!',
            '2 guest passes/lună',
            'Tricou SKAI cadou',
            'VIP events'
          ],
          popular: false
        }
      ]
    }
  }

  const equipment = {
    copii: {
      title: 'Echipament Copii',
      items: [
        { name: 'Încălțăminte escaladă', price: '15 lei/zi' },
        { name: 'Ham', price: '15 lei/zi' },
        { name: 'Săculeț magneziu', price: '10 lei/zi' },
        { name: 'Pachet complet', price: '35 lei/zi', savings: 'Economisești 5 lei' }
      ]
    },
    adulti: {
      title: 'Echipament Adulți',
      items: [
        { name: 'Încălțăminte escaladă', price: '20 lei/zi' },
        { name: 'Ham', price: '20 lei/zi' },
        { name: 'Săculeț magneziu', price: '10 lei/zi' },
        { name: 'Coardă', price: '20 lei/zi' },
        { name: 'Pachet complet', price: '60 lei/zi', savings: 'Economisești 10 lei' }
      ]
    }
  }

  const specialOffers = [
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Reducere Studenți',
      discount: '10%',
      description: 'Pentru toți studenții cu carnet valid',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Pachet Familie Duo',
      discount: '10%',
      description: 'Pentru 2 membri din aceeași familie',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Pachet Familie 3+',
      discount: '15%',
      description: 'Pentru 3 sau mai mulți membri',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Tarife & Abonamente
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            Alege planul care ți se potrivește. Fără taxe ascunse, fără costuri suplimentare.
          </p>
        </div>
      </section>

      {/* Membership Plans */}
      {Object.entries(membershipPlans).map(([category, data]) => (
        <section key={category} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="text-5xl mb-4 block">{data.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{data.title}</h2>
              <p className="text-gray-600">{data.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {data.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" fill="currentColor" />
                      <span>Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-gray-900">
                      {plan.price}
                      <span className="text-lg font-normal text-gray-600 ml-1">{plan.unit}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{plan.duration}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/skaiurbancrag/contact"
                    className={`block w-full text-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Alege
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Equipment Rental */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Închiriere Echipament
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(equipment).map(([category, data]) => (
              <div key={category} className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">{data.title}</h3>
                <div className="space-y-4">
                  {data.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-gray-700">{item.name}</span>
                      <div className="text-right">
                        <span className="font-semibold text-gray-900">{item.price}</span>
                        {item.savings && (
                          <span className="block text-sm text-green-600">{item.savings}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            * Echipamentul este inclus gratuit pentru copii cu abonament lunar sau mai mare
          </p>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Oferte Speciale
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialOffers.map((offer, index) => (
              <div key={index} className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className={`bg-gradient-to-br ${offer.color} p-8 text-white`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-white/20 rounded-lg p-3">
                      {offer.icon}
                    </div>
                    <div className="text-3xl font-bold">{offer.discount}</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
                  <p className="text-white/90">{offer.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              <span className="font-semibold">Notă:</span> Reducerile nu se cumulează. 
              Se aplică cea mai avantajoasă reducere disponibilă.
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <CreditCard className="w-16 h-16 text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Metode de Plată</h3>
            <p className="text-gray-400 mb-8">Acceptăm toate metodele de plată pentru confortul tău</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-300">
              <span className="bg-gray-800 px-4 py-2 rounded-lg">💳 Card</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">💵 Cash</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">📱 Transfer Bancar</span>
              <span className="bg-gray-800 px-4 py-2 rounded-lg">🎫 Tichete Sportive</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ai Întrebări despre Tarife?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Echipa noastră este aici să te ajute să alegi cel mai potrivit plan pentru tine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Contactează-ne
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TarifePage