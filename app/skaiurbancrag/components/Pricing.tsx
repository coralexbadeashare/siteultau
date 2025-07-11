import Link from 'next/link'
import { Check, Star, TrendingUp } from 'lucide-react'

const Pricing = () => {
  const pricingPlans = {
    copii: {
      title: 'Copii (4-14 ani)',
      plans: [
        { name: 'Intrare Unică', price: '45', unit: 'lei', features: ['Acces o zi', 'Echipament inclus*'] },
        { name: '10 Intrări', price: '350', unit: 'lei', features: ['Valid 2 luni', 'Economisești 100 lei', 'Echipament inclus*'] },
        { name: 'Abonament 1 Lună', price: '170', unit: 'lei', features: ['Acces nelimitat', 'Cel mai popular', 'Echipament inclus*'], popular: true },
        { name: 'Abonament 3 Luni', price: '470', unit: 'lei', features: ['Acces nelimitat', 'Economisești 40 lei', 'Echipament inclus*'] },
        { name: 'Abonament 6 Luni', price: '850', unit: 'lei', features: ['Acces nelimitat', 'Economisești 170 lei', 'Echipament inclus*'] }
      ]
    },
    adulti: {
      title: 'Adulți',
      plans: [
        { name: 'Intrare Unică', price: '55', unit: 'lei', features: ['Acces o zi', 'Închiriere echipament*'] },
        { name: '10 Intrări', price: '400', unit: 'lei', features: ['Valid 2 luni', 'Economisești 150 lei', 'Închiriere echipament*'] },
        { name: 'Abonament 1 Lună', price: '250', unit: 'lei', features: ['Acces nelimitat', 'Cel mai popular', 'Închiriere echipament*'], popular: true },
        { name: 'Abonament 3 Luni', price: '650', unit: 'lei', features: ['Acces nelimitat', 'Economisești 100 lei', 'Închiriere echipament*'] },
        { name: 'Abonament 6 Luni', price: '1200', unit: 'lei', features: ['Acces nelimitat', 'Economisești 300 lei', 'Închiriere echipament*'] }
      ]
    }
  }

  const equipment = {
    copii: [
      { item: 'Încălțăminte escaladă', price: '15 lei' },
      { item: 'Ham', price: '15 lei' },
      { item: 'Săculeț magneziu', price: '10 lei' }
    ],
    adulti: [
      { item: 'Încălțăminte escaladă', price: '20 lei' },
      { item: 'Ham', price: '20 lei' },
      { item: 'Săculeț magneziu', price: '10 lei' },
      { item: 'Coardă', price: '20 lei' }
    ]
  }

  const discounts = [
    { type: 'Studenți', discount: '10%', description: 'Cu carnet de student valid' },
    { type: 'Pachet Familie (2 membri)', discount: '10%', description: 'Pentru 2 membri din aceeași familie' },
    { type: 'Pachet Familie (3+ membri)', discount: '15%', description: 'Pentru 3 sau mai mulți membri' }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Tarife <span className="text-orange-500">Transparente</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alege planul care ți se potrivește. Fără costuri ascunse, fără surprize.
          </p>
        </div>

        {/* Pricing Tables */}
        {Object.entries(pricingPlans).map(([category, data]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              {data.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {data.plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-orange-500 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" fill="currentColor" />
                      <span>Popular</span>
                    </div>
                  )}
                  
                  <div className="text-center mb-4">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{plan.name}</h4>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-1">{plan.unit}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Equipment Rental */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {Object.entries(equipment).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Închiriere Echipament - {category === 'copii' ? 'Copii' : 'Adulți'}
              </h3>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.item}</span>
                    <span className="font-semibold text-gray-900">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Discounts */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-10 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Reduceri Speciale</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {discounts.map((discount, index) => (
              <div key={index} className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-2">{discount.discount}</div>
                <h4 className="text-lg font-semibold mb-2">{discount.type}</h4>
                <p className="text-orange-100 text-sm">{discount.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-6 text-orange-100">
            * Reducerile nu se cumulează
          </p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/skaiurbancrag/contact"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-lg font-medium"
          >
            Începe Acum
            <TrendingUp className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Pricing