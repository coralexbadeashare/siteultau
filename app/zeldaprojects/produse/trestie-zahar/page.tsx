import { Leaf, ArrowLeft, ShoppingCart, Info, Flame, Recycle, Droplet } from 'lucide-react'
import Link from 'next/link'

const TrestieZaharPage = () => {
  const products = [
    {
      id: 1,
      name: 'Caserole Meniu Bagasă',
      description: 'Caserole compartimentate pentru meniuri complete',
      image: 'https://images.unsplash.com/photo-1536882240095-0379873feb4e?w=800&h=600&fit=crop',
      features: ['3 compartimente', 'Capac inclus', 'Microunde safe', 'Etanș la lichide'],
      sizes: ['600ml', '800ml', '1000ml'],
      price: 'De la 0.85 lei/buc'
    },
    {
      id: 2,
      name: 'Farfurii din Trestie',
      description: 'Farfurii rotunde și pătrate din bagasă presată',
      image: 'https://images.unsplash.com/photo-1606924735276-fbb5b325e933?w=800&h=600&fit=crop',
      features: ['Rezistente la grăsimi', 'Tăiate cu apă', 'Diverse dimensiuni', 'Stivuibile'],
      sizes: ['18cm', '23cm', '26cm'],
      price: 'De la 0.45 lei/buc'
    },
    {
      id: 3,
      name: 'Boluri Bagasă',
      description: 'Boluri adânci pentru supe, salate și deserturi',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=800&h=600&fit=crop',
      features: ['Termorezistente', 'Forme variate', 'Capace disponibile', 'Anti-scurgere'],
      sizes: ['350ml', '500ml', '750ml'],
      price: 'De la 0.55 lei/buc'
    }
  ]

  const advantages = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Natural',
      description: 'Produs din reziduuri de trestie de zahăr, fără aditivi chimici'
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: 'Rezistent la Căldură',
      description: 'Suportă temperaturi de până la 200°C, ideal pentru microunde și cuptor'
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Impermeabil',
      description: 'Rezistent la lichide și grăsimi pentru până la 2 ore'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Compostabil',
      description: 'Se descompune complet în 60-90 de zile în condiții de compostare'
    }
  ]

  const applications = [
    { name: 'Fast Food & Take-Away', icon: '🍔' },
    { name: 'Catering Evenimente', icon: '🎉' },
    { name: 'Cantine & Spitale', icon: '🏥' },
    { name: 'Food Trucks', icon: '🚚' },
    { name: 'Festivaluri', icon: '🎪' },
    { name: 'Livrări la Domiciliu', icon: '📦' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=1600&h=800&fit=crop"
          alt="Ambalaje din Trestie de Zahăr"
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
              Ambalaje din Trestie de Zahăr
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Bagasa - alternativa eco-friendly perfectă pentru ambalajele alimentare. 
              Rezistente, compostabile și 100% naturale.
            </p>
          </div>
        </div>
      </section>

      {/* Info Banner */}
      <section className="bg-green-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-2">Ce este Bagasa?</h3>
              <p className="text-green-50">
                Bagasa este fibra rămasă după extragerea sucului din trestia de zahăr, 
                transformată în ambalaje alimentare durabile și ecologice.
              </p>
            </div>
            <div className="flex items-center space-x-4 text-3xl">
              <span>🌱</span>
              <span>♻️</span>
              <span>🌍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Avantajele Ambalajelor din Bagasă
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 text-white shadow-lg">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Produse Disponibile
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
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
                    <h4 className="font-medium text-gray-900 mb-2">Caracteristici:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Dimensiuni disponibile:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-green-600">{product.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Aplicații Ideale
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {applications.map((app, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{app.icon}</div>
                <p className="text-sm font-medium text-gray-700">{app.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Treceți la Ambalaje Sustenabile
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Reduceți amprenta de carbon a afacerii dumneavoastră cu ambalaje 
            din trestie de zahăr. Consultanță gratuită și mostre disponibile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Comandă Acum
            </Link>
            <a
              href="tel:+40733076994"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              <Info className="w-5 h-5 mr-2" />
              Solicită Mostre
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TrestieZaharPage