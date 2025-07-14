import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, Cherry, Heart, Sparkles, Clock, ShoppingBag } from 'lucide-react';

export default function Dulceturi() {
  const products = [
    {
      id: 'dulceata-capsuni',
      name: 'Dulceață de Căpșuni',
      description: 'Căpșuni parfumate din grădinile transilvănene, preparate după rețeta tradițională cu zahăr minim.',
      price: '16 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1474625121024-7595bfbc57ac',
      fruitContent: '60%',
      ingredients: 'Căpșuni 60%, zahăr, suc de lămâie',
      features: ['Fructe întregi', 'Rețetă tradițională', 'Fără pectină adăugată', 'Aromă intensă']
    },
    {
      id: 'dulceata-visine',
      name: 'Dulceață de Vișine',
      description: 'Vișine acrișoare în sirop aromat, perfecte pentru deserturi sau ca topping pentru clătite.',
      price: '18 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1577003811926-53b288a6e5d0',
      fruitContent: '65%',
      ingredients: 'Vișine 65%, zahăr, suc de lămâie',
      features: ['Vișine întregi cu sâmbure', 'Gust echilibrat', 'Culoare naturală', 'Fără coloranți']
    },
    {
      id: 'gem-prune',
      name: 'Gem de Prune',
      description: 'Prune bine coapte transformate într-un gem cremos, perfect pentru pâine sau prăjituri.',
      price: '15 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b',
      fruitContent: '70%',
      ingredients: 'Prune 70%, zahăr brun, scorțișoară',
      features: ['Conținut mare de fruct', 'Îndulcit natural', 'Scorțișoară Ceylon', 'Textură cremoasă']
    },
    {
      id: 'dulceata-caise',
      name: 'Dulceață de Caise',
      description: 'Jumătăți de caise aromate în sirop delicat, o delicatesă a verii conservată pentru tot anul.',
      price: '17 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1560155069-ad79768f2666',
      fruitContent: '55%',
      ingredients: 'Caise 55%, zahăr, suc de lămâie',
      features: ['Jumătăți de caise', 'Aromă de vară', 'Vitamina A', 'Perfectă pentru deserturi']
    },
    {
      id: 'dulceata-gutui',
      name: 'Dulceață de Gutui',
      description: 'Gutuile parfumate ale toamnei într-o dulceață rafinată cu note florale unice.',
      price: '19 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1615485290001-2b5e620c0e6b',
      fruitContent: '50%',
      ingredients: 'Gutui 50%, zahăr, suc de lămâie, vanilie',
      features: ['Aromă florală', 'Cuburi de gutui', 'Cu vanilie naturală', 'Specialitate de toamnă']
    },
    {
      id: 'gem-zmeura',
      name: 'Gem de Zmeură',
      description: 'Zmeură de pădure cu semințe, bogată în antioxidanți și cu gust intens de fruct.',
      price: '22 RON',
      weight: '350g',
      image: 'https://images.unsplash.com/photo-1568966299102-02d5b9209c55',
      fruitContent: '65%',
      ingredients: 'Zmeură 65%, zahăr',
      features: ['Zmeură sălbatică', 'Bogat în vitamina C', 'Cu semințe naturale', 'Antioxidanți']
    }
  ];

  const tradition = [
    {
      icon: Cherry,
      title: 'Fructe Selectate',
      description: 'Alegem manual doar fructele la maturitate perfectă'
    },
    {
      icon: Clock,
      title: 'Fierbere Lentă',
      description: 'Preparare înceată pentru a păstra aroma și textura'
    },
    {
      icon: Heart,
      title: 'Rețete de Familie',
      description: 'Moștenite din generație în generație'
    },
    {
      icon: Sparkles,
      title: 'Fără Aditivi',
      description: 'Doar fructe, zahăr și suc de lămâie natural'
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 to-purple-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1481391319762-47dff72954d9"
            alt="Dulcețuri artizanale"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Dulcețuri Artizanale
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Preparate cu dragoste după rețete tradiționale românești, 
            cu fructe proaspete și zahăr minim
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
            <Cherry className="w-5 h-5" />
            <span>Conținut de fruct între 50-70%</span>
          </div>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tradiție și Calitate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fiecare borcan păstrează gustul autentic al fructelor românești
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tradition.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-10 h-10 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Gama Noastră de Dulcețuri
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la clasicele dulcețuri de căpșuni până la specialități rare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative h-72 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {product.fruitContent} fruct
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="bg-pink-50 rounded-xl p-4 mb-4">
                      <div className="text-sm text-gray-600 mb-1">Ingrediente:</div>
                      <div className="text-sm font-medium text-gray-800">{product.ingredients}</div>
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
                        <div className="text-2xl font-bold text-pink-600">{product.price}</div>
                        <div className="text-sm text-gray-500">{product.weight}</div>
                      </div>
                      <Link 
                        href="/amillaria/contact" 
                        className="bg-pink-600 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-700 transition-colors flex items-center gap-2"
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

      {/* Perfect Pairings */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cum Să Te Bucuri de Dulcețurile Noastre
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">🥐</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  La Micul Dejun
                </h3>
                <p className="text-gray-600">
                  Pe pâine prăjită, croissante sau clătite pentru un început perfect de zi
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">🍰</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  În Deserturi
                </h3>
                <p className="text-gray-600">
                  Umplutură pentru prăjituri, topping pentru înghețată sau cheesecake
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="text-5xl mb-4">🧀</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cu Brânzeturi
                </h3>
                <p className="text-gray-600">
                  Combinație perfectă cu brânzeturi fine pentru un platou deosebit
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-pink-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1490818387583-1baba5e638af"
                  alt="Preparare dulceață tradițională"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                O Tradiție de Familie
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Dulcețurile noastre sunt preparate după rețete transmise din generație 
                în generație. Fiecare borcan conține nu doar fructe și zahăr, ci și 
                dragostea și grija cu care bunicile noastre preparau dulcețurile pentru 
                familie.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Folosim metode tradiționale de preparare, cu fierbere lentă și amestecate 
                continuu, pentru a obține textura perfectă și a păstra bucăți întregi de 
                fruct. Zahărul este adăugat în cantitate minimă necesară conservării, 
                lăsând fructele să-și exprime pe deplin aroma naturală.
              </p>
              <div className="flex items-center gap-2 text-pink-600 font-semibold">
                <Heart className="w-5 h-5" />
                <span>Preparate cu dragoste din 2004</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Gustă Dulceața Verii în Fiecare Anotimp
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Comandă dulcețurile tale preferate și bucură-te de gustul autentic al fructelor românești
          </p>
          <Link 
            href="/amillaria/contact" 
            className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Comandă Dulcețuri Artizanale
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}