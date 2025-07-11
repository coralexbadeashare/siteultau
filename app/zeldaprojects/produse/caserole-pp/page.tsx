import { Package, ArrowLeft, ShoppingCart, Thermometer, Recycle, Shield, Eye } from 'lucide-react'
import Link from 'next/link'

const CaserolePPPage = () => {
  const products = [
    {
      id: 1,
      name: 'Caserole PP Transparente',
      description: 'Caserole cu capac etanș pentru vizibilitate maximă',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=600&fit=crop',
      volumes: ['250ml', '500ml', '750ml', '1000ml'],
      features: ['Capac ermetic', 'Microunde safe', 'Congelator safe', 'Stivuibile'],
      temperature: '-20°C până la +120°C'
    },
    {
      id: 2,
      name: 'Caserole PP Negre',
      description: 'Ideale pentru meniuri premium și prezentare elegantă',
      image: 'https://images.unsplash.com/photo-1606767804538-f7b87f0f2b2e?w=800&h=600&fit=crop',
      volumes: ['500ml', '750ml', '1000ml', '1500ml'],
      features: ['Design premium', 'Rezistente la grăsimi', 'Reutilizabile', 'BPA free'],
      temperature: '-20°C până la +120°C'
    },
    {
      id: 3,
      name: 'Caserole PP Compartimentate',
      description: 'Perfect pentru meniuri complete cu 2-3 compartimente',
      image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=800&h=600&fit=crop',
      volumes: ['800ml', '1000ml', '1200ml'],
      features: ['2-3 compartimente', 'Separare alimente', 'Porționare ușoară', 'Capac transparent'],
      temperature: '-20°C până la +120°C'
    }
  ]

  const advantages = [
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: 'Termorezistente',
      description: 'Rezistă la temperaturi de la -20°C până la +120°C'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Siguranță Alimentară',
      description: 'Certificate pentru contact direct cu alimentele, fără BPA'
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Transparență Cristal',
      description: 'Vizibilitate perfectă a conținutului pentru prezentare atractivă'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Reciclabile',
      description: 'Material PP 100% reciclabil, cod reciclare 5'
    }
  ]

  const useCases = [
    { name: 'Restaurante & Catering', description: 'Pentru livrări și take-away profesional' },
    { name: 'Magazine Alimentare', description: 'Ambalare produse proaspete și preparate' },
    { name: 'Food Delivery', description: 'Transport sigur al mâncărurilor calde și reci' },
    { name: 'Evenimente Corporate', description: 'Servire elegantă pentru evenimente speciale' },
    { name: 'Meal Prep', description: 'Pregătire și stocare meniuri săptămânale' },
    { name: 'Industria HoReCa', description: 'Soluții complete pentru ospitalitate' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=1600&h=800&fit=crop"
          alt="Caserole PP"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/zeldaprojects/produse"
              className="inline-flex items-center text-white mb-4 hover:text-green-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Înapoi la Produse
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Caserole din Polipropilenă (PP)
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Soluții profesionale de ambalare pentru industria alimentară. 
              Rezistente, sigure și 100% reciclabile.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Banner */}
      <section className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🔥</span>
              <span className="font-medium">Microunde Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">❄️</span>
              <span className="font-medium">Congelator Safe</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">♻️</span>
              <span className="font-medium">100% Reciclabil</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🛡️</span>
              <span className="font-medium">BPA Free</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            De Ce Să Alegeți Caserole PP?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Gama Noastră de Caserole PP
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Volume disponibile:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.volumes.map((volume, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                          {volume}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Caracteristici:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Temperatură:</span> {product.temperature}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Aplicații și Utilizări
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{useCase.name}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Info */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Informații Tehnice
          </h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Specificații Material:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Material: Polipropilenă (PP) virgină</li>
                  <li>• Densitate: 0.90-0.91 g/cm³</li>
                  <li>• Transparență: Cristal clear sau opac</li>
                  <li>• Grosime pereți: 0.5-1.2mm</li>
                  <li>• Cod reciclare: 5 (PP)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Certificări:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Contact alimentar conform EU 10/2011</li>
                  <li>• FDA approved pentru SUA</li>
                  <li>• BPA și ftalați free</li>
                  <li>• ISO 22000 pentru siguranță alimentară</li>
                  <li>• Teste de migrare conforme</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Package className="w-16 h-16 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Comandați Caserole PP Premium
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Stoc permanent pentru cele mai populare dimensiuni. 
            Livrare rapidă în toată țara. Prețuri speciale pentru volume mari.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Solicitați Ofertă
            </Link>
            <a
              href="tel:+40733076994"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Comandă Telefonică: 0733 076 994
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CaserolePPPage