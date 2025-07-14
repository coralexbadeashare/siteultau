import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Leaf, Flame, Timer, Heart, ShoppingBag } from 'lucide-react';

export default function Preparate() {
  const products = [
    {
      id: 'zacusca-casa',
      name: 'Zacuscă de Casă',
      description: 'Legume de grădină coapte pe vatră și tocate după rețeta tradițională a bunicii.',
      price: '14 RON',
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7',
      ingredients: 'Vinete 40%, ardei roșu 30%, roșii 20%, ceapă, ulei de floarea soarelui, sare',
      features: ['Copt pe vatră', 'Fără conservanți', '100% vegetal', 'Rețetă tradițională']
    },
    {
      id: 'pasta-ardei',
      name: 'Pastă de Ardei Copți',
      description: 'Ardei roșii copți și curățați manual, transformați într-o pastă cremoasă și aromată.',
      price: '16 RON',
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
      ingredients: 'Ardei roșu copt 95%, ulei de măsline, usturoi, sare',
      features: ['Ardei copți pe jar', 'Curățați manual', 'Bogat în vitamina C', 'Versatil în bucătărie']
    },
    {
      id: 'muraturi-asortate',
      name: 'Murături Asortate',
      description: 'Mix de legume murate în saramură naturală, crocante și pline de probiotice.',
      price: '12 RON',
      weight: '720g',
      image: 'https://images.unsplash.com/photo-1598030343246-eec71cb44231',
      ingredients: 'Castraveți, gogonele, varză, morcovi, conopidă, apă, sare, semințe de muștar',
      features: ['Fermentare naturală', 'Probiotice naturale', 'Fără oțet', 'Crocante']
    },
    {
      id: 'salata-vinete',
      name: 'Salată de Vinete',
      description: 'Vinete coapte pe jar, curățate și tocate fin, cu ulei de floarea soarelui presat la rece.',
      price: '15 RON',
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf',
      ingredients: 'Vinete coapte 80%, ulei de floarea soarelui, ceapă, sare',
      features: ['Vinete de Buzău', 'Coapte pe jar', 'Textură cremoasă', 'Gust afumat']
    },
    {
      id: 'fasole-batuta',
      name: 'Fasole Bătută',
      description: 'Fasole albă gătită lent și transformată într-o cremă fină cu ceapă călită.',
      price: '13 RON',
      weight: '300g',
      image: 'https://images.unsplash.com/photo-1615485290001-2b5e620c0e6b',
      ingredients: 'Fasole albă 70%, ceapă călită, ulei, usturoi, sare, piper',
      features: ['Proteină vegetală', 'Fără gluten', 'Cremă fină', 'Gata de servit']
    },
    {
      id: 'ghiveci-legume',
      name: 'Ghiveci de Legume',
      description: 'Amestec bogat de legume de sezon gătite lent în cuptor pentru o aromă desăvârșită.',
      price: '14 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7',
      ingredients: 'Vinete, dovlecei, ardei, roșii, morcovi, cartofi, ceapă, pătrunjel, ulei, sare',
      features: ['12 tipuri de legume', 'Gătit în cuptor', 'Dietetic', 'Aromă bogată']
    }
  ];

  const process = [
    {
      icon: Leaf,
      title: 'Legume Proaspete',
      description: 'Selectate din grădinile locale la maturitate perfectă'
    },
    {
      icon: Flame,
      title: 'Preparare Tradițională',
      description: 'Coacere pe vatră sau în cuptor pentru aromă autentică'
    },
    {
      icon: Timer,
      title: 'Gătit Lent',
      description: 'Timp îndelungat pentru dezvoltarea aromelor complexe'
    },
    {
      icon: Heart,
      title: 'Ambalat cu Grijă',
      description: 'În borcane sterilizate pentru prospețime îndelungată'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999"
            alt="Preparate din legume"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Preparate din Legume
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Conserve și murături preparate după rețete tradiționale românești, 
            din legume proaspete de grădină
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
            <Leaf className="w-5 h-5" />
            <span>100% Natural, Fără Conservanți Artificiali</span>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul Nostru Artizanal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la grădină la borcan, fiecare pas este făcut cu respect pentru tradiție
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-10 h-10 text-green-600" />
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
              Preparatele Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la clasica zacuscă până la specialități regionale
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.name.includes('Murături') && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Probiotice
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="bg-green-50 rounded-xl p-4 mb-4">
                      <div className="text-sm text-gray-600 mb-1">Ingrediente:</div>
                      <div className="text-sm text-gray-800">{product.ingredients}</div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-1 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-600">{product.price}</div>
                        <div className="text-sm text-gray-500">{product.weight}</div>
                      </div>
                      <Link 
                        href="/amillaria/contact" 
                        className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        Comandă
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Gustul Autentic al Bucătăriei Românești
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Preparatele noastre sunt făcute exact cum le făceau bunicile noastre: 
                cu răbdare, ingrediente simple și multă dragoste. Fiecare borcan 
                conține esența bucătăriei tradiționale românești.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                De la zacusca pregătită toamna pentru iarnă, până la murăturile 
                care însoțesc mesele de sărbătoare, fiecare produs respectă rețetele 
                și metodele transmise din generație în generație.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Legume 100% românești din grădinile locale</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Preparare manuală și coacere tradițională</span>
                </li>
                <li className="flex items-center gap-3 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Fără aditivi, coloranți sau conservanți artificiali</span>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-orange-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488"
                  alt="Preparare tradițională"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Idei de Servire
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🍞</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Aperitive
              </h3>
              <p className="text-gray-600">
                Zacusca și salata de vinete pe pâine prăjită, perfecte pentru orice masă
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🥘</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Garnituri
              </h3>
              <p className="text-gray-600">
                Murăturile și ghiveciul completează perfect mesele de sărbătoare
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Post și Dietă
              </h3>
              <p className="text-gray-600">
                Toate preparatele noastre sunt 100% vegetale, perfecte pentru post
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Adaugă Gust Tradițional Mesei Tale
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Comandă preparatele noastre și bucură-te de gustul autentic românesc
          </p>
          <Link 
            href="/amillaria/contact" 
            className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Comandă Preparate Tradiționale
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}