import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Droplets, Wrench, Filter, Phone, Waves } from 'lucide-react';

export default function InstalatiSanitare() {
  const services = [
    {
      title: 'Instalații de Apă',
      description: 'Sisteme complete de alimentare cu apă potabilă și distribuție',
      features: [
        'Conducte PPR, PE și multistrat',
        'Sisteme de hidrofor și pompare',
        'Reductoare de presiune și filtre',
        'Izolații termice și fonice'
      ]
    },
    {
      title: 'Canalizare și Scurgeri',
      description: 'Instalații de evacuare ape uzate menajere și pluviale',
      features: [
        'Conducte PVC și PP silențioase',
        'Sifoane de pardoseală și rigole',
        'Separatoare de grăsimi',
        'Pompe pentru ape uzate'
      ]
    },
    {
      title: 'Obiecte Sanitare',
      description: 'Montaj profesional pentru toate tipurile de obiecte sanitare',
      features: [
        'Vase WC suspendate și clasice',
        'Lavoare și chiuvete moderne',
        'Căzi și cabine de duș',
        'Baterii și accesorii premium'
      ]
    },
    {
      title: 'Sisteme de Filtrare',
      description: 'Soluții avansate pentru tratarea și purificarea apei',
      features: [
        'Filtre mecanice și carbon activ',
        'Sisteme de osmoză inversă',
        'Dedurizatoare și deferizatoare',
        'UV și dezinfecție'
      ]
    }
  ];

  const specialServices = [
    {
      title: 'Detectare și Reparare Avarii',
      icon: Wrench,
      description: 'Localizare precisă a pierderilor și reparații rapide fără distrugeri majore'
    },
    {
      title: 'Instalații pentru Piscine',
      icon: Waves,
      description: 'Sisteme complete de filtrare, încălzire și tratare apă pentru piscine'
    },
    {
      title: 'Sisteme de Recuperare Apă',
      icon: Filter,
      description: 'Colectare și reutilizare apă pluvială pentru irigații și uz menajer'
    }
  ];

  const quality = [
    { title: 'Materiale Certificate', description: 'Folosim doar produse de calitate superioară' },
    { title: 'Garanție Lucrări', description: 'Minim 2 ani pentru toate instalațiile' },
    { title: 'Echipă Specializată', description: 'Instalatori autorizați și cu experiență' },
    { title: 'Prețuri Corecte', description: 'Tarife transparente și competitive' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7"
            alt="Instalații sanitare"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Instalații Sanitare
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Soluții complete pentru sistemele de apă și canalizare ale locuinței tale
          </p>
          <Link 
            href="/napocainstal/contact" 
            className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Solicită Ofertă Gratuită
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicii de Instalații Sanitare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la proiectare până la execuție, oferim servicii complete
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Servicii Specializate
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Examples */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Exemple de Lucrări Realizate
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-2xl overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
                  alt="Baie modernă"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Renovare Baie Completă</h3>
                <p className="text-gray-600">Instalații sanitare complete pentru băi moderne</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d"
                  alt="Bucătărie modernă"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Instalații Bucătărie</h3>
                <p className="text-gray-600">Sisteme complete apă și canalizare pentru bucătării</p>
              </div>
            </div>

            <div className="bg-gray-100 rounded-2xl overflow-hidden group">
              <div className="h-64 relative">
                <Image
                  src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a"
                  alt="Sistem filtrare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Sistem Tratare Apă</h3>
                <p className="text-gray-600">Instalare sisteme complete de filtrare și purificare</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Calitate Garantată
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quality.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">Avarii? Suntem aici 24/7!</h3>
              <p className="text-xl opacity-90">
                Intervenții rapide pentru orice urgență sanitară
              </p>
            </div>
            <a 
              href="tel:+40744123456" 
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6" />
              Urgențe: 0744 123 456
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ai Nevoie de Instalații Sanitare?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru consultanță gratuită și cele mai bune soluții
          </p>
          <Link 
            href="/napocainstal/contact" 
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
          >
            Începe Proiectul Tău
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}