import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Apple, Droplets, Leaf, Award, ShoppingBag } from 'lucide-react';

export default function SucuriNaturale() {
  const products = [
    {
      id: 'suc-mere',
      name: 'Suc Natural de Mere',
      description: '100% mere românești din livezile Transilvaniei, presate la rece pentru a păstra toate vitaminele și mineralele.',
      price: '18 RON',
      volume: '750ml',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
      nutritional: {
        calories: '46 kcal/100ml',
        carbs: '11.4g',
        sugars: '10.3g',
        fiber: '0.2g'
      },
      ingredients: '100% mere',
      benefits: ['Rica în vitamina C', 'Antioxidanți naturali', 'Fără zahăr adăugat', 'Susține digestia']
    },
    {
      id: 'suc-pere',
      name: 'Suc de Pere',
      description: 'Pere dulci și aromate, culese la maturitate perfectă și presate delicat pentru un gust rafinat.',
      price: '20 RON',
      volume: '750ml',
      image: 'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0',
      nutritional: {
        calories: '43 kcal/100ml',
        carbs: '10.5g',
        sugars: '9.8g',
        fiber: '0.3g'
      },
      ingredients: '100% pere',
      benefits: ['Bogat în fibre', 'Potasiu natural', 'Hidratare optimă', 'Gust dulce natural']
    },
    {
      id: 'suc-caise',
      name: 'Suc de Caise',
      description: 'Caise coapte din soiuri tradiționale românești, cu aromă intensă și culoare vibrantă.',
      price: '22 RON',
      volume: '750ml',
      image: 'https://images.unsplash.com/photo-1560155069-ad79768f2666',
      nutritional: {
        calories: '48 kcal/100ml',
        carbs: '11.1g',
        sugars: '9.2g',
        fiber: '0.4g'
      },
      ingredients: '100% caise',
      benefits: ['Vitamina A', 'Beta-caroten', 'Susține vederea', 'Antioxidanți']
    },
    {
      id: 'suc-prune',
      name: 'Suc de Prune',
      description: 'Prune bine coapte transformate într-un elixir natural pentru sănătatea digestivă.',
      price: '19 RON',
      volume: '750ml',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b',
      nutritional: {
        calories: '51 kcal/100ml',
        carbs: '12.4g',
        sugars: '11.2g',
        fiber: '0.5g'
      },
      ingredients: '100% prune',
      benefits: ['Fibre solubile', 'Sorbitol natural', 'Ajută digestia', 'Fier și potasiu']
    },
    {
      id: 'suc-visine',
      name: 'Suc de Vișine',
      description: 'Vișine acrișoare presate pentru un suc plin de antioxidanți și aromă intensă.',
      price: '24 RON',
      volume: '750ml',
      image: 'https://images.unsplash.com/photo-1577003811926-53b288a6e5d0',
      nutritional: {
        calories: '50 kcal/100ml',
        carbs: '12.2g',
        sugars: '10.6g',
        fiber: '0.3g'
      },
      ingredients: '100% vișine',
      benefits: ['Antociani', 'Antiinflamator', 'Melatonină naturală', 'Vitamina C']
    }
  ];

  const process = [
    {
      icon: Apple,
      title: 'Selecție Manuală',
      description: 'Alegem cu grijă doar fructele perfect coapte și sănătoase'
    },
    {
      icon: Droplets,
      title: 'Presare la Rece',
      description: 'Tehnologie modernă care păstrează nutrienții intacți'
    },
    {
      icon: Leaf,
      title: 'Filtrare Ușoară',
      description: 'Eliminăm impuritățile păstrând pulpa naturală'
    },
    {
      icon: Award,
      title: 'Pasteurizare Blândă',
      description: 'La 82°C pentru siguranță fără a pierde vitamine'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-yellow-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1621506289937-a8e4df240d0b"
            alt="Sucuri naturale de fructe"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sucuri 100% Naturale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Presate la rece din fructe românești, fără zahăr adăugat, 
            fără conservanți, doar natură pură în sticlă
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5" />
            <span>Randament 55-65% suc din fructe proaspete</span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cum Preparăm Sucurile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proces atent care păstrează gustul și nutrienții naturali
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gama Noastră de Sucuri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fiecare sticlă conține esența pură a fructelor românești
            </p>
          </div>

          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={product.id} id={product.id} className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    {product.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Preț</div>
                      <div className="text-2xl font-bold text-orange-600">{product.price}</div>
                      <div className="text-sm text-gray-500">{product.volume}</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="text-sm text-gray-600 mb-1">Ingrediente</div>
                      <div className="font-semibold text-green-700">{product.ingredients}</div>
                      <div className="text-sm text-green-600">Fără adaosuri</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Beneficii pentru sănătate:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Valori nutriționale (100ml):</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>Calorii: {product.nutritional.calories}</div>
                      <div>Carbohidrați: {product.nutritional.carbs}</div>
                      <div>Zaharuri: {product.nutritional.sugars}</div>
                      <div>Fibre: {product.nutritional.fiber}</div>
                    </div>
                  </div>

                  <Link 
                    href="/amillaria/contact" 
                    className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-all"
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Comandă Acum
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">
              De Ce Să Alegi Sucurile Noastre?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">🍎</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fructe 100% Românești
                </h3>
                <p className="text-gray-600">
                  Colaborăm doar cu producători locali pentru fructe de cea mai bună calitate
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">❄️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Presare la Rece
                </h3>
                <p className="text-gray-600">
                  Tehnologie care păstrează toate vitaminele și mineralele din fructe
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Fără Aditivi
                </h3>
                <p className="text-gray-600">
                  Fără zahăr adăugat, fără conservanți, fără coloranți - doar fructe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Comandă Sucurile Tale Preferate
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Livrăm în toată țara sticle cu sănătate și energie naturală
          </p>
          <Link 
            href="/amillaria/contact" 
            className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Contactează-ne pentru Comandă
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}