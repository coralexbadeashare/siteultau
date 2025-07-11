import { Factory, ArrowLeft, ShoppingCart, Ruler, Settings, Package, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const TuburiStandardPage = () => {
  const specifications = [
    {
      diameter: '50-100mm',
      wallThickness: '2-5mm',
      length: 'Până la 3m',
      applications: ['Textile', 'Folii subțiri', 'Hârtie'],
      loadCapacity: 'Până la 50kg'
    },
    {
      diameter: '100-150mm',
      wallThickness: '3-8mm',
      length: 'Până la 4m',
      applications: ['Industria tipografică', 'Materiale plastice', 'Etichete'],
      loadCapacity: 'Până la 150kg'
    },
    {
      diameter: '150-200mm',
      wallThickness: '5-12mm',
      length: 'Până la 6m',
      applications: ['Industria textilă grea', 'Covoare', 'Materiale construcții'],
      loadCapacity: 'Până la 300kg'
    }
  ]

  const features = [
    {
      icon: <Ruler className="w-6 h-6" />,
      title: 'Dimensiuni Personalizate',
      description: 'Producem tuburi conform specificațiilor dumneavoastră exacte'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Toleranțe Precise',
      description: 'Toleranțe de ±1mm pentru diametre și ±0.5mm pentru grosimi'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: '100% Reciclat',
      description: 'Fabricate exclusiv din carton reciclat de înaltă calitate'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Calitate Certificată',
      description: 'Toate produsele sunt testate și certificate ISO 14001:2015'
    }
  ]

  const industries = [
    { name: 'Industria Textilă', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop' },
    { name: 'Tipografii', image: 'https://images.unsplash.com/photo-1569163139394-de4798aa4e8a?w=400&h=300&fit=crop' },
    { name: 'Producători Folii', image: 'https://images.unsplash.com/photo-1565520651265-1148c3b277f4?w=400&h=300&fit=crop' },
    { name: 'Industria Hârtiei', image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop' }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1586864387789-628af9feed72?w=1600&h=800&fit=crop"
          alt="Tuburi de Carton Standard"
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
              Tuburi de Carton Standard
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Soluții industriale de înaltă calitate pentru bobinare și ambalare. 
              100% reciclat, 100% reciclabil.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-white py-8 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">50-200mm</div>
              <div className="text-gray-600">Diametre</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">Până la 6m</div>
              <div className="text-gray-600">Lungime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-gray-600">Reciclat</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">±1mm</div>
              <div className="text-gray-600">Toleranță</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Caracteristici Principale
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-green-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Specificații Tehnice
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-50 rounded-lg overflow-hidden">
              <thead className="bg-green-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Diametru</th>
                  <th className="px-6 py-4 text-left">Grosime Perete</th>
                  <th className="px-6 py-4 text-left">Lungime Max</th>
                  <th className="px-6 py-4 text-left">Aplicații</th>
                  <th className="px-6 py-4 text-left">Capacitate</th>
                </tr>
              </thead>
              <tbody>
                {specifications.map((spec, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100 transition-colors">
                    <td className="px-6 py-4 font-medium">{spec.diameter}</td>
                    <td className="px-6 py-4">{spec.wallThickness}</td>
                    <td className="px-6 py-4">{spec.length}</td>
                    <td className="px-6 py-4">
                      <ul className="text-sm">
                        {spec.applications.map((app, idx) => (
                          <li key={idx}>• {app}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-4 font-medium text-green-600">{spec.loadCapacity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-gray-600 text-center">
            * Putem produce și alte dimensiuni la cerere. Contactați-ne pentru specificații personalizate.
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Industrii Deservite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <h3 className="text-white font-semibold p-4">{industry.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Procesul de Producție
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Selectare Materie Primă</h3>
              <p className="text-gray-600 text-sm">Carton reciclat de înaltă calitate, selectat și sortat</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Bobinare Spiralată</h3>
              <p className="text-gray-600 text-sm">Tehnologie modernă de bobinare pentru rezistență maximă</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Tăiere la Dimensiune</h3>
              <p className="text-gray-600 text-sm">Tăiere precisă conform specificațiilor clientului</p>
            </div>
            <div className="text-center">
              <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Control Calitate</h3>
              <p className="text-gray-600 text-sm">Verificare dimensională și teste de rezistență</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Factory className="w-16 h-16 text-white/80 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Comandați Tuburi de Carton Standard
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Producție rapidă, livrare națională zilnică. 
            Prețuri competitive pentru comenzi en-gros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Solicitați Ofertă
            </Link>
            <a
              href="tel:+40733076994"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Sunați Acum: 0733 076 994
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TuburiStandardPage