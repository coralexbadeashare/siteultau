import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Leaf, Heart, Award, Users, ShoppingBag, CheckCircle, Cherry, Apple, Sparkles, Instagram } from 'lucide-react';

export default function AmillariaHome() {
  const products = [
    {
      title: 'Sucuri Naturale',
      description: '100% fructe românești presate la rece, fără adaosuri, fără conservanți',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
      href: '/amillaria/produse/sucuri',
      features: ['Presare la rece', 'Fără zahăr adăugat', 'Fără conservanți'],
      icon: Apple,
      color: 'from-orange-400 to-red-500'
    },
    {
      title: 'Dulcețuri Artizanale',
      description: 'Preparate după rețete tradiționale, cu fructe culese manual din livezi transilvănene',
      image: 'https://images.unsplash.com/photo-1474625121024-7595bfbc57ac',
      href: '/amillaria/produse/dulceata',
      features: ['Rețete tradiționale', 'Fructe locale', 'Zahăr minim'],
      icon: Cherry,
      color: 'from-pink-400 to-purple-500'
    },
    {
      title: 'Preparate din Legume',
      description: 'Conserve, murături și paste vegetale preparate natural, ca la bunica',
      image: 'https://images.unsplash.com/photo-1609501676725-7186f017a4b7',
      href: '/amillaria/produse/preparate',
      features: ['Fără aditivi', 'Procesare minimă', 'Gust autentic'],
      icon: Leaf,
      color: 'from-green-400 to-teal-500'
    }
  ];

  const values = [
    { 
      icon: Leaf, 
      title: 'Natural 100%', 
      description: 'Folosim doar ingrediente naturale, fără aditivi sau conservanți artificiali' 
    },
    { 
      icon: Heart, 
      title: 'Pasiune de Familie', 
      description: 'O afacere de familie care pune suflet în fiecare produs din 2004' 
    },
    { 
      icon: Award, 
      title: 'Calitate Premium', 
      description: 'Selectăm cu grijă cele mai bune fructe și legume românești' 
    },
    { 
      icon: Users, 
      title: 'Producători Locali', 
      description: 'Colaborăm cu fermieri locali pentru ingrediente proaspete și autentice' 
    }
  ];

  const process = [
    { step: '01', title: 'Selecție Riguroasă', description: 'Alegem manual cele mai bune fructe și legume' },
    { step: '02', title: 'Procesare Delicată', description: 'Presare la rece și preparare cu metode tradiționale' },
    { step: '03', title: 'Conservare Naturală', description: 'Pasteurizare blândă pentru păstrarea nutrienților' },
    { step: '04', title: 'Ambalare cu Grijă', description: 'Sticle și borcane care păstrează prospețimea' }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-transparent to-orange-900/20 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1610832958506-aa56368176cf"
            alt="Fructe naturale românești"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-6 py-3 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 font-medium">Din 2004, cu dragoste din Transilvania</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gray-900">
              Natural înseamnă
              <span className="block text-green-600">Viață</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-gray-700 max-w-3xl mx-auto">
              Natura, tradiția și autenticitatea sunt esența poveștii noastre. 
              Aducem bogăția naturii mai aproape de tine prin produse artizanale de excepție.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/amillaria/produse" 
                className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-700 transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Descoperă Produsele
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="/amillaria/povestea-noastra" 
                className="bg-white/90 backdrop-blur text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all inline-flex items-center gap-2 shadow-xl"
              >
                Povestea Noastră
                <Heart className="w-5 h-5 text-red-500" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-gray-600/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-600/30 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Produsele Noastre Naturale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fiecare produs este o poveste despre natură, tradiție și grijă pentru sănătatea ta
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl shadow-lg">
                    <product.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={product.href}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all group"
                  >
                    Descoperă gama completă
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560707303-4e980ce876ad"
                      alt="Livadă de meri"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1464226184884-fa280b87c399"
                      alt="Recoltare manuală"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1523049673857-eb18f1d7b578"
                      alt="Fructe proaspete"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
                      alt="Procesare naturală"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="inline-block text-green-600 font-semibold mb-4">Povestea Noastră</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                O Familie, O Pasiune, 
                <span className="text-green-600"> Două Decenii</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  În 2004, Dorina și Sorin Pop au pus bazele Amillaria cu o viziune simplă: 
                  să aducă pe mesele românilor produse naturale, autentice, preparate cu 
                  dragoste și respect pentru natură.
                </p>
                <p>
                  Situați în inima Transilvaniei, colaborăm cu fermieri locali și culegem 
                  manual fructele din livezile montane, păstrând astfel esența și gustul 
                  autentic al fiecărui ingredient.
                </p>
                <p>
                  Fiecare borcan și sticlă care iese din atelierul nostru poartă cu sine 
                  nu doar gustul desăvârșit al naturii, ci și povestea unei familii care 
                  crede că natural înseamnă viață.
                </p>
              </div>
              <Link 
                href="/amillaria/povestea-noastra" 
                className="inline-flex items-center gap-2 mt-8 bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-all"
              >
                Citește întreaga poveste
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Valorile Care Ne Ghidează
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fiecare decizie pe care o luăm este ghidată de principiile care definesc Amillaria
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-all duration-300">
                  <value.icon className="w-10 h-10 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Procesul Nostru Artizanal
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la recoltare până la ambalare, fiecare pas este făcut cu grijă și atenție
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-green-100 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/3 -right-4 w-8">
                      <ArrowRight className="w-8 h-8 text-green-200" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/amillaria/cum-producem" 
              className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
            >
              Vezi procesul complet de producție
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gustă Natura în Forma Ei Pură
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Alege produse naturale, alege sănătate, alege Amillaria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/amillaria/produse" 
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Vezi Toate Produsele
            </Link>
            <Link 
              href="/amillaria/contact" 
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-flex items-center gap-2 border border-white/30"
            >
              Contactează-ne
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Urmărește-ne pe Instagram
            </h2>
            <p className="text-gray-600">@amillaria.natural</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative h-64 bg-gray-200 rounded-xl overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}