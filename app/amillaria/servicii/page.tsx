import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Factory, Package, Users, Palette, Timer, Award, TrendingUp, Handshake } from 'lucide-react';

export default function Servicii() {
  const services = [
    {
      icon: Factory,
      title: 'Presare la Comandă',
      description: 'Transformăm fructele tale în sucuri naturale premium',
      features: [
        'Capacitate de presare: până la 1000kg/zi',
        'Randament garantat: 55-65%',
        'Presare la rece pentru păstrarea nutrienților',
        'Posibilitate de adăugare ingrediente (lămâie, ghimbir)',
        'Minim comandă: 200kg fructe'
      ],
      image: 'https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a'
    },
    {
      icon: Package,
      title: 'Ambalare Personalizată',
      description: 'Îmbuteliere în ambalaje cu eticheta ta proprie',
      features: [
        'Design etichete personalizate',
        'Sticle de 250ml, 500ml, 750ml sau 1L',
        'Ambalare în cutii pentru transport',
        'Aplicare etichete și sigilii',
        'Minim comandă: 100 sticle'
      ],
      image: 'https://images.unsplash.com/photo-1586704235550-6c1473e2abf4'
    },
    {
      icon: Palette,
      title: 'Private Label',
      description: 'Creează-ți propria marcă de produse naturale',
      features: [
        'Dezvoltare rețete exclusive',
        'Consultanță branding și marketing',
        'Producție în serie mică sau mare',
        'Suport pentru certificări',
        'Exclusivitate teritorială'
      ],
      image: 'https://images.unsplash.com/photo-1556228720-da4c5a159f8f'
    },
    {
      icon: Users,
      title: 'Parteneriate HoReCa',
      description: 'Soluții dedicate pentru restaurante, hoteluri și cafenele',
      features: [
        'Produse în ambalaje profesionale',
        'Livrări regulate programate',
        'Prețuri speciale pentru volum',
        'Suport pentru meniuri și rețete',
        'Training personal pentru servire'
      ],
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0'
    }
  ];

  const benefits = [
    { icon: Award, title: 'Experiență de 20 ani', description: 'Know-how și expertiză dovedită în producție' },
    { icon: CheckCircle, title: 'Certificări și Standarde', description: 'Producție conformă cu normele UE' },
    { icon: Timer, title: 'Flexibilitate', description: 'Ne adaptăm la cerințele tale specifice' },
    { icon: TrendingUp, title: 'Scalabilitate', description: 'De la loturi mici la producție industrială' }
  ];

  const process = [
    { step: '1', title: 'Consultanță Inițială', description: 'Analizăm nevoile și definim parametrii proiectului' },
    { step: '2', title: 'Testare și Mostre', description: 'Producem mostre pentru aprobare finală' },
    { step: '3', title: 'Contract și Planificare', description: 'Stabilim termeni clari și calendar de producție' },
    { step: '4', title: 'Producție și Livrare', description: 'Executăm comanda conform specificațiilor' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-indigo-900/70 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
            alt="Servicii B2B"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Servicii pentru Business
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Soluții complete de producție și co-packing pentru afacerea ta
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-6 py-3 rounded-full">
            <Handshake className="w-5 h-5" />
            <span>Partener de încredere pentru peste 50 de branduri</span>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Transformă-ți Ideea în Realitate
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Cu experiența noastră de două decenii în producția de alimente naturale, 
              te putem ajuta să dezvolți și să produci produse de excepție. De la 
              fermieri locali care vor să-și valorifice recolta, până la antreprenori 
              care vor să lanseze un brand nou, suntem partenerul ideal.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                <p className="text-gray-600">Tone de fructe procesate anual</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <p className="text-gray-600">Clienți B2B activi</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">20</div>
                <p className="text-gray-600">Ani de experiență</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">Rată de satisfacție</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre B2B
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluții flexibile adaptate nevoilor tale specifice
            </p>
          </div>

          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href="/amillaria/contact" 
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all"
                  >
                    Solicită Ofertă
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cum Colaborăm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un proces simplu și transparent pentru rezultate excelente
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full">
                      <ArrowRight className="w-8 h-8 text-blue-200 -ml-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              De Ce Să Alegi Amillaria
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Povești de Succes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Clienți mulțumiți care au ales să lucreze cu noi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-4">🍎</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fermier Local
              </h3>
              <p className="text-gray-600 mb-4">
                &ldquo;Am transformat 5 tone de mere în suc premium, obținând de 
                3 ori mai mult decât dacă le vindeam ca fructe. Serviciul a fost 
                impecabil!&rdquo;
              </p>
              <p className="text-sm text-gray-500">- Ioan M., Turda</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-4">🏪</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Magazin Bio
              </h3>
              <p className="text-gray-600 mb-4">
                &ldquo;Amillaria produce pentru noi o gamă exclusivă de sucuri 
                sub marca proprie. Clienții adoră calitatea și gustul autentic.&rdquo;
              </p>
              <p className="text-sm text-gray-500">- Maria P., Cluj</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="text-5xl mb-4">🏨</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hotel 5*
              </h3>
              <p className="text-gray-600 mb-4">
                &ldquo;Oferim oaspeților sucuri naturale Amillaria la micul dejun. 
                Este un detaliu care face diferența în experiența lor.&rdquo;
              </p>
              <p className="text-sm text-gray-500">- Hotel Belvedere</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              Întrebări Frecvente
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Care este cantitatea minimă pentru presare?
                </h3>
                <p className="text-gray-600">
                  Cantitatea minimă este de 200kg de fructe. Pentru cantități mai 
                  mici, putem grupa mai multe comenzi într-o sesiune de producție.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cât durează procesul de la predare la livrare?
                </h3>
                <p className="text-gray-600">
                  În general, procesul durează 3-5 zile lucrătoare, în funcție de 
                  cantitate și complexitatea comenzii. Pentru comenzi mari, termenul 
                  poate fi extins.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Pot aduce propriile ambalaje?
                </h3>
                <p className="text-gray-600">
                  Da, acceptăm ambalaje furnizate de client, cu condiția să fie 
                  conforme cu standardele alimentare și să treacă inspecția noastră 
                  de calitate.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Oferiți servicii de transport?
                </h3>
                <p className="text-gray-600">
                  Pentru comenzi mari, putem asigura transportul în județul Cluj și 
                  județele limitrofe. Pentru alte zone, colaborăm cu firme de curierat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Hai Să Dezvoltăm Împreună Afacerea Ta
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactează-ne pentru o consultanță gratuită și să discutăm 
            cum te putem ajuta să-ți atingi obiectivele
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/amillaria/contact" 
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
            >
              Solicită Consultanță Gratuită
            </a>
            <a 
              href="tel:+40744555666" 
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-block border border-white/30"
            >
              Sună Acum: 0744 555 666
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}