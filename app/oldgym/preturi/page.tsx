'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, X, Star, ArrowRight, Zap, Crown, Shield } from 'lucide-react'

export default function PreturiPage() {
  const [billingCycle, setBillingCycle] = useState<'lunar' | 'anual'>('lunar')

  const plans = [
    {
      name: 'Basic',
      icon: <Zap className="w-8 h-8" />,
      description: 'Perfect pentru începători',
      monthlyPrice: 149,
      annualPrice: 1490,
      savings: 298,
      color: 'from-gray-600 to-gray-700',
      features: [
        { name: 'Acces sala fitness', included: true },
        { name: 'Vestiare și dușuri', included: true },
        { name: 'Evaluare fizică inițială', included: true },
        { name: 'Plan antrenament basic', included: true },
        { name: 'Acces clase grup', included: false },
        { name: 'Antrenor personal', included: false },
        { name: 'Plan nutriție', included: false },
        { name: 'Acces zona SPA', included: false }
      ]
    },
    {
      name: 'Premium',
      icon: <Star className="w-8 h-8" />,
      description: 'Cel mai popular abonament',
      monthlyPrice: 249,
      annualPrice: 2490,
      savings: 498,
      color: 'from-red-600 to-amber-500',
      popular: true,
      features: [
        { name: 'Acces sala fitness', included: true },
        { name: 'Vestiare și dușuri', included: true },
        { name: 'Evaluare fizică inițială', included: true },
        { name: 'Plan antrenament personalizat', included: true },
        { name: 'Acces toate clasele grup', included: true },
        { name: '2 sesiuni antrenor personal/lună', included: true },
        { name: 'Plan nutriție basic', included: true },
        { name: 'Acces zona SPA', included: false }
      ]
    },
    {
      name: 'Elite',
      icon: <Crown className="w-8 h-8" />,
      description: 'Experiența completă Old Gym',
      monthlyPrice: 399,
      annualPrice: 3990,
      savings: 798,
      color: 'from-amber-500 to-amber-600',
      features: [
        { name: 'Acces sala fitness 24/7', included: true },
        { name: 'Vestiare VIP', included: true },
        { name: 'Evaluări fizice trimestriale', included: true },
        { name: 'Plan antrenament avansat', included: true },
        { name: 'Acces toate clasele grup', included: true },
        { name: '4 sesiuni antrenor personal/lună', included: true },
        { name: 'Plan nutriție personalizat', included: true },
        { name: 'Acces zona SPA & Saună', included: true }
      ]
    }
  ]

  const additionalServices = [
    {
      name: 'Antrenament Personal',
      price: '150 RON/sesiune',
      description: 'Sesiune 1-la-1 cu antrenor certificat'
    },
    {
      name: 'Pachet 10 Sesiuni PT',
      price: '1200 RON',
      description: 'Economisești 300 RON'
    },
    {
      name: 'Evaluare InBody',
      price: '100 RON',
      description: 'Analiză completă compoziție corporală'
    },
    {
      name: 'Plan Nutriție Personalizat',
      price: '300 RON',
      description: 'Plan alimentar adaptat obiectivelor tale'
    }
  ]

  const corporatePlans = [
    { employees: '5-10', discount: '10%' },
    { employees: '11-25', discount: '15%' },
    { employees: '26-50', discount: '20%' },
    { employees: '50+', discount: 'Personalizat' }
  ]

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=800&fit=crop"
          alt="Old Gym Prețuri"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4">Abonamente</h1>
          <p className="text-xl md:text-2xl text-amber-500 font-bold">
            Investește În Cea Mai Bună Versiune A Ta
          </p>
        </div>
      </section>

      {/* Pricing Toggle */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4">
            <span className={`text-lg font-semibold ${billingCycle === 'lunar' ? 'text-white' : 'text-gray-500'}`}>
              Lunar
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'lunar' ? 'anual' : 'lunar')}
              className="relative w-20 h-10 bg-gray-700 rounded-full transition-colors"
            >
              <div className={`absolute top-1 w-8 h-8 bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-transform ${
                billingCycle === 'anual' ? 'translate-x-10' : 'translate-x-1'
              }`} />
            </button>
            <span className={`text-lg font-semibold ${billingCycle === 'anual' ? 'text-white' : 'text-gray-500'}`}>
              Anual
            </span>
            <span className="ml-2 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
              Economisești 2 luni
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-600 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Cel Mai Popular
                  </div>
                )}
                <div className={`card-glow bg-gray-900 rounded-2xl p-8 h-full flex flex-col ${
                  plan.popular ? 'border-2 border-amber-500' : ''
                }`}>
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400">{plan.description}</p>
                  </div>

                  <div className="text-center mb-8">
                    <div className="text-5xl font-bold text-white mb-2">
                      {billingCycle === 'lunar' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12)}
                      <span className="text-2xl text-gray-400"> RON</span>
                    </div>
                    <p className="text-gray-400">
                      {billingCycle === 'lunar' ? 'pe lună' : 'pe lună (facturat anual)'}
                    </p>
                    {billingCycle === 'anual' && (
                      <p className="text-green-400 text-sm mt-2">
                        Economisești {plan.savings} RON/an
                      </p>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-600 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-gray-300' : 'text-gray-600'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/oldgym/contact" 
                    className={`block text-center py-4 rounded-xl font-bold text-lg transition-all ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white hover:shadow-2xl transform hover:scale-105'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    Alege {plan.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Servicii <span className="gradient-text">Adiționale</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                <p className="text-3xl font-bold text-amber-500 mb-3">{service.price}</p>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-bebas text-4xl md:text-5xl text-white mb-4">
                Abonamente <span className="gradient-text">Corporate</span>
              </h2>
              <p className="text-xl text-gray-400">
                Soluții personalizate pentru companii care investesc în sănătatea angajaților
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {corporatePlans.map((plan, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{plan.discount}</div>
                    <p className="text-gray-400">{plan.employees} angajați</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span>Facturare lunară</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span>Manager cont dedicat</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Shield className="w-5 h-5 text-amber-500" />
                  <span>Rapoarte utilizare</span>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link 
                  href="/oldgym/contact" 
                  className="inline-flex items-center bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                >
                  Solicită Ofertă Corporate
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bebas text-4xl text-white text-center mb-12">
              Întrebări Frecvente
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pot să îmi schimb abonamentul?
                </h3>
                <p className="text-gray-400">
                  Da, poți face upgrade oricând. Pentru downgrade, poți schimba la sfârșitul perioadei curente de facturare.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Există perioadă de probă?
                </h3>
                <p className="text-gray-400">
                  Oferim un antrenament gratuit de probă pentru a experimenta atmosfera Old Gym înainte de a te abona.
                </p>
              </div>
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pot să îmi suspende abonamentul?
                </h3>
                <p className="text-gray-400">
                  Da, poți suspenda abonamentul pentru maxim 30 de zile pe an în caz de vacanță sau probleme medicale.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gym-pattern">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-bebas text-4xl md:text-5xl text-white mb-6">
            Începe Transformarea <span className="gradient-text">Astăzi</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Alătură-te comunității Old Gym și descoperă ce înseamnă cu adevărat să fii în cea mai bună formă a ta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/oldgym/contact" 
              className="btn-primary bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-flex items-center justify-center"
            >
              Alege Abonamentul
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/oldgym/contact" 
              className="bg-white/10 backdrop-blur text-white border-2 border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all inline-flex items-center justify-center"
            >
              Antrenament Gratuit
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}