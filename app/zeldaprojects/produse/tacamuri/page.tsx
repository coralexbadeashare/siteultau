import { Leaf, ArrowLeft, ShoppingCart, Info, Package, Recycle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const TacamuriPage = () => {
  const products = [
    {
      id: 1,
      name: 'Set Tacâmuri Lemn Mesteacăn',
      description: 'Furculițe, linguri și cuțite din lemn de mesteacăn FSC certificat',
      image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=800&h=600&fit=crop',
      features: ['100% biodegradabil', 'Rezistent la căldură', 'FSC certificat', 'Fără chimicale'],
      price: 'De la 0.15 lei/buc',
      minOrder: 'Comandă minimă: 1000 buc'
    },
    {
      id: 2,
      name: 'Tacâmuri PLA Compostabile',
      description: 'Alternative eco-friendly din acid polilactic derivat din porumb',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      features: ['Compostabil industrial', 'Aspect premium', 'Rezistent', 'EN 13432 certificat'],
      price: 'De la 0.20 lei/buc',
      minOrder: 'Comandă minimă: 500 buc'
    },
    {
      id: 3,
      name: 'Set Tacâmuri Bambus',
      description: 'Tacâmuri elegante din bambus natural',
      image: 'https://images.unsplash.com/photo-1550223640-23097fc71cb2?w=800&h=600&fit=crop',
      features: ['Material regenerabil', 'Antibacterian natural', 'Design elegant', 'Reutilizabil'],
      price: 'De la 0.25 lei/buc',
      minOrder: 'Comandă minimă: 500 buc'
    }
  ]

  const benefits = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: '100% Ecologic',
      description: 'Toate produsele noastre sunt biodegradabile și compostabile'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Certificate',
      description: 'Produse certificate FSC și EN 13432 pentru compostabilitate'
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Zero Deșeuri',
      description: 'Contribuiți la reducerea deșeurilor de plastic'
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: 'Ambalare Eco',
      description: 'Livrare în ambalaje reciclabile și biodegradabile'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=1600&h=800&fit=crop"
          alt="Tacâmuri Biodegradabile"
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
              Tacâmuri Biodegradabile
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Soluții sustenabile pentru servirea mesei - tacâmuri din materiale naturale, 
              100% biodegradabile și compostabile
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-green-600">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Gama Noastră de Tacâmuri Ecologice
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
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
                  
                  <ul className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-4">
                    <p className="text-lg font-semibold text-green-600 mb-1">{product.price}</p>
                    <p className="text-sm text-gray-500">{product.minOrder}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Comandați Tacâmuri Ecologice
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Oferte personalizate pentru HoReCa, evenimente și catering. 
            Consultanță gratuită pentru alegerea soluției optime.
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
              <Info className="w-5 h-5 mr-2" />
              Consultanță Gratuită
            </a>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            De Ce Să Alegeți Tacâmuri Biodegradabile?
          </h3>
          <div className="prose prose-lg text-gray-700">
            <p>
              În contextul actual al protejării mediului, tacâmurile biodegradabile reprezintă 
              o alternativă responsabilă la produsele din plastic de unică folosință. 
              Acestea se descompun natural în 3-6 luni în condiții de compostare.
            </p>
            <p>
              Produsele noastre sunt ideale pentru:
            </p>
            <ul>
              <li>Restaurante și cafenele eco-friendly</li>
              <li>Evenimente și festivaluri sustenabile</li>
              <li>Catering pentru conferințe și evenimente corporate</li>
              <li>Servicii de livrare la domiciliu</li>
              <li>Cantine școlare și spitale</li>
            </ul>
            <p>
              Toate tacâmurile noastre respectă standardele europene de siguranță alimentară 
              și sunt testate pentru contact direct cu alimentele.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default TacamuriPage