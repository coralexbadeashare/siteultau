'use client'

import { useState } from 'react'
import { Car, Gauge, Settings, Fuel, Users, Calendar, Filter, ChevronRight } from 'lucide-react'
import Link from 'next/link'

const CarsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', name: 'Toate', count: 12 },
    { id: 'rally', name: 'Rally', count: 4 },
    { id: 'circuit', name: 'Circuit', count: 4 },
    { id: 'drift', name: 'Drift', count: 2 },
    { id: 'slalom', name: 'Slalom', count: 2 }
  ]

  const cars = [
    {
      id: 1,
      category: 'rally',
      name: 'Mitsubishi Lancer EVO X',
      year: 2015,
      specs: {
        power: '350 CP',
        torque: '450 Nm',
        drivetrain: '4WD',
        engine: '2.0L Turbo'
      },
      image: 'https://images.unsplash.com/photo-1552849397-7a2d7864a9b5?w=800&h=600&fit=crop',
      features: ['Roll cage FIA', 'Suspensie Ohlins', 'Cutie secvențială', 'Sistem telemetrie'],
      dailyRate: '1200€',
      available: true
    },
    {
      id: 2,
      category: 'rally',
      name: 'Subaru Impreza WRX STI',
      year: 2016,
      specs: {
        power: '320 CP',
        torque: '420 Nm',
        drivetrain: 'AWD',
        engine: '2.5L Boxer Turbo'
      },
      image: 'https://images.unsplash.com/photo-1621993202323-f438eec934ff?w=800&h=600&fit=crop',
      features: ['DCCD control', 'AP Racing frâne', 'Intercooler frontal', 'Launch control'],
      dailyRate: '1100€',
      available: true
    },
    {
      id: 3,
      category: 'circuit',
      name: 'BMW M3 E46 GTR',
      year: 2014,
      specs: {
        power: '450 CP',
        torque: '380 Nm',
        drivetrain: 'RWD',
        engine: '3.2L Inline-6'
      },
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=800&h=600&fit=crop',
      features: ['Aero kit GT', 'Suspensie KW V3', 'Cooling upgrade', 'Data logger'],
      dailyRate: '1500€',
      available: true
    },
    {
      id: 4,
      category: 'circuit',
      name: 'Porsche 911 GT3 Cup',
      year: 2018,
      specs: {
        power: '485 CP',
        torque: '470 Nm',
        drivetrain: 'RWD',
        engine: '4.0L Flat-6'
      },
      image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=800&h=600&fit=crop',
      features: ['ABS Motorsport', 'Paddle shift', 'Center lock wheels', 'FIA omologare'],
      dailyRate: '2000€',
      available: false
    },
    {
      id: 5,
      category: 'drift',
      name: 'Nissan 350Z Drift Spec',
      year: 2013,
      specs: {
        power: '420 CP',
        torque: '480 Nm',
        drivetrain: 'RWD',
        engine: 'VQ35 Twin Turbo'
      },
      image: 'https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&h=600&fit=crop',
      features: ['Angle kit 65°', 'Hidraulic handbrake', 'LSD 2-way', 'Bash bars'],
      dailyRate: '900€',
      available: true
    },
    {
      id: 6,
      category: 'drift',
      name: 'BMW E36 M3 Drift',
      year: 2012,
      specs: {
        power: '380 CP',
        torque: '420 Nm',
        drivetrain: 'RWD',
        engine: 'S50 Turbo'
      },
      image: 'https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&h=600&fit=crop',
      features: ['Wisefab suspension', 'Sequential gearbox', 'Cooling kit', 'Roll cage'],
      dailyRate: '850€',
      available: true
    },
    {
      id: 7,
      category: 'rally',
      name: 'Ford Fiesta R5',
      year: 2019,
      specs: {
        power: '280 CP',
        torque: '400 Nm',
        drivetrain: '4WD',
        engine: '1.6L EcoBoost'
      },
      image: 'https://images.unsplash.com/photo-1583500178450-e59e4309b57d?w=800&h=600&fit=crop',
      features: ['M-Sport prepared', 'Sadev gearbox', 'Reiger suspension', 'WRC spec'],
      dailyRate: '1800€',
      available: true
    },
    {
      id: 8,
      category: 'circuit',
      name: 'Honda Civic Type R TCR',
      year: 2020,
      specs: {
        power: '330 CP',
        torque: '410 Nm',
        drivetrain: 'FWD',
        engine: '2.0L VTEC Turbo'
      },
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=600&fit=crop',
      features: ['TCR homologation', 'Xtrac gearbox', 'Öhlins dampers', 'ABS MK60'],
      dailyRate: '1400€',
      available: true
    }
  ]

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.category === activeFilter)

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50 z-10" />
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&h=800&fit=crop"
          alt="H Motorsport Fleet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Flota Noastră de <span className="text-red-500">Mașini</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Automobile de curse pregătite competițional, disponibile pentru închiriere
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-red-500">12</div>
              <div className="text-gray-400">Mașini Disponibile</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">4</div>
              <div className="text-gray-400">Categorii</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">280-485</div>
              <div className="text-gray-400">Cai Putere</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-500">850-2000€</div>
              <div className="text-gray-400">Tarif Zilnic</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-20 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-medium text-gray-700">Filtrează după categorie:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeFilter === filter.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.name} ({filter.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map(car => (
              <div
                key={car.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  {!car.available && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <span className="text-white text-xl font-bold">Indisponibil</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      car.available 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {car.available ? 'Disponibil' : 'Rezervat'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>
                      <p className="text-gray-600">{car.year}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-600">{car.dailyRate}</div>
                      <div className="text-sm text-gray-500">pe zi</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Gauge className="w-4 h-4 text-red-500" />
                      <span>{car.specs.power}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Settings className="w-4 h-4 text-red-500" />
                      <span>{car.specs.drivetrain}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Fuel className="w-4 h-4 text-red-500" />
                      <span>{car.specs.engine}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Car className="w-4 h-4 text-red-500" />
                      <span>{car.specs.torque}</span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Dotări principale:</h4>
                    <div className="space-y-1">
                      {car.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={`/hmotorsport/masini/${car.id}`}
                    className={`mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors ${
                      car.available
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {car.available ? 'Vezi Detalii' : 'Indisponibil'}
                    {car.available && <ChevronRight className="w-4 h-4 ml-1" />}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rental Info */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Informații Închiriere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 rounded-xl p-6">
              <Calendar className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Rezervare Flexibilă</h3>
              <p className="text-gray-400">
                Închiriere pe zile, weekend sau săptămâni întregi. 
                Tarife speciale pentru perioade extinse.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <Users className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Asistență Inclusă</h3>
              <p className="text-gray-400">
                Fiecare închiriere include suport tehnic de bază și 
                consultanță pentru setup-ul mașinii.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-6">
              <Car className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Transport Asigurat</h3>
              <p className="text-gray-400">
                Livrăm și ridicăm mașina direct de la locația competiției, 
                oriunde în țară sau Europa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Rezervă Mașina Perfectă pentru Următoarea Cursă
          </h2>
          <p className="text-xl text-red-50 mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru disponibilitate și oferte personalizate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hmotorsport/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Rezervă Acum
            </Link>
            <a
              href="tel:0740372618"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Consultanță: 0740 372 618
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CarsPage