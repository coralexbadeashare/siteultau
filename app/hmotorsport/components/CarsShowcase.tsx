'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Car, Gauge, Settings, ArrowRight } from 'lucide-react'

const CarsShowcase = () => {
  const [activeCategory, setActiveCategory] = useState<'rally' | 'circuit' | 'drift'>('rally')

  const categories = {
    rally: {
      name: 'Rally',
      cars: [
        {
          name: 'Mitsubishi Lancer EVO X',
          specs: '300+ CP, 4WD, Turbo',
          image: 'https://images.unsplash.com/photo-1552849397-7a2d7864a9b5?w=600&h=400&fit=crop',
          features: ['Suspensie competițională', 'Roll cage FIA', 'Sistem telemetrie']
        },
        {
          name: 'Subaru Impreza WRX STI',
          specs: '320 CP, AWD, 2.5L Turbo',
          image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=600&h=400&fit=crop',
          features: ['Cutie secvențială', 'Diferențial spate', 'Frâne AP Racing']
        }
      ]
    },
    circuit: {
      name: 'Circuit',
      cars: [
        {
          name: 'BMW M3 E46 GTR',
          specs: '450 CP, RWD, 3.2L',
          image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=600&h=400&fit=crop',
          features: ['Aerodinamică GT', 'Suspensie KW', 'Data logging']
        },
        {
          name: 'Porsche 911 GT3 Cup',
          specs: '500 CP, RWD, 4.0L',
          image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=600&h=400&fit=crop',
          features: ['Caroserie carbon', 'ABS competițional', 'Cooling îmbunătățit']
        }
      ]
    },
    drift: {
      name: 'Drift',
      cars: [
        {
          name: 'Nissan 350Z Drift Spec',
          specs: '400+ CP, RWD, VQ35 Turbo',
          image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=600&h=400&fit=crop',
          features: ['Unghi drift mărit', 'Handbrake hidraulic', 'LSD 2-way']
        },
        {
          name: 'BMW E36 Drift',
          specs: '350 CP, RWD, M50 Turbo',
          image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=600&h=400&fit=crop',
          features: ['Coilover BC Racing', 'Cooling kit', 'Welded diff']
        }
      ]
    }
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flota Noastră de <span className="text-red-500">Mașini de Curse</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Automobile pregătite competițional pentru toate tipurile de motorsport. 
            Fiecare mașină este întreținută la cele mai înalte standarde.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key as 'rally' | 'circuit' | 'drift')}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === key
                  ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {categories[activeCategory].cars.map((car, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-1">{car.name}</h3>
                  <p className="text-red-400 font-medium">{car.specs}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 gap-3">
                  {car.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-gray-300">
                      <Settings className="w-4 h-4 text-red-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Banner */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Car className="w-12 h-12 text-white/80 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">Transport Inclus</h4>
              <p className="text-red-100">Livrăm mașina direct la locația competiției</p>
            </div>
            <div>
              <Gauge className="w-12 h-12 text-white/80 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">Setup Personalizat</h4>
              <p className="text-red-100">Reglaje adaptate stilului fiecărui pilot</p>
            </div>
            <div>
              <Settings className="w-12 h-12 text-white/80 mx-auto mb-3" />
              <h4 className="text-xl font-semibold text-white mb-2">Asistență Completă</h4>
              <p className="text-red-100">Echipă tehnică disponibilă pe toată durata</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/hmotorsport/masini"
            className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold group"
          >
            Vezi Toate Mașinile
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CarsShowcase