import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Wind, Snowflake, Sun, Gauge, Shield, Phone, Fan, Zap } from 'lucide-react';

export default function Climatizare() {
  const services = [
    {
      title: 'Aer Condiționat Rezidențial',
      description: 'Sisteme split și multi-split pentru locuințe',
      features: [
        'Unități cu inverter pentru eficiență',
        'Funcții încălzire/răcire',
        'Filtre antibacteriene și anti-alergene',
        'Control WiFi și programare'
      ]
    },
    {
      title: 'Climatizare Comercială',
      description: 'Soluții profesionale pentru birouri și magazine',
      features: [
        'Sisteme VRF/VRV scalabile',
        'Unități tip caseta și canal',
        'Management centralizat BMS',
        'Eficiență energetică maximă'
      ]
    },
    {
      title: 'Ventilație și Recuperare',
      description: 'Sisteme de ventilație cu recuperare de căldură',
      features: [
        'Aer proaspăt filtrat continuu',
        'Recuperare căldură până la 95%',
        'Control umiditate și CO2',
        'Integrare cu sisteme smart'
      ]
    },
    {
      title: 'Purificare Aer',
      description: 'Soluții avansate pentru calitatea aerului interior',
      features: [
        'Filtre HEPA și carbon activ',
        'Tehnologie UV-C germicidă',
        'Ionizare și ozonare controlată',
        'Monitorizare calitate aer'
      ]
    }
  ];

  const brands = [
    'Daikin', 'Mitsubishi', 'LG', 'Samsung', 'Fujitsu', 'Gree'
  ];

  const process = [
    { 
      icon: Gauge, 
      title: 'Evaluare Tehnică', 
      description: 'Analiză detaliată a spațiului și calculul sarcinii termice' 
    },
    { 
      icon: Wind, 
      title: 'Alegere Sistem', 
      description: 'Recomandare echipamente potrivite nevoilor și bugetului' 
    },
    { 
      icon: Zap, 
      title: 'Instalare Profesională', 
      description: 'Montaj conform standardelor cu echipă certificată' 
    },
    { 
      icon: Shield, 
      title: 'Service & Mentenanță', 
      description: 'Întreținere periodică pentru performanță optimă' 
    }
  ];

  const benefits = [
    { number: '50%', label: 'Economie energie cu inverter' },
    { number: '10 ani', label: 'Garanție compresor' },
    { number: '24h', label: 'Instalare rapidă' },
    { number: '99.9%', label: 'Filtrare bacterii și viruși' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-green-900/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1558489580-faa74691fdc5"
            alt="Sisteme de climatizare"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Climatizare & Ventilație
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Sisteme moderne pentru confort termic perfect în orice anotimp
          </p>
          <Link 
            href="/napocainstal/contact" 
            className="bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Configurează Sistemul Tău
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Soluții Complete de Climatizare
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tehnologii avansate pentru controlul perfect al climatului interior
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Wind className="w-6 h-6 text-teal-600" />
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

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Tehnologii Moderne pentru Confortul Tău
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Snowflake className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Răcire Eficientă</h3>
                    <p className="text-gray-600">
                      Sisteme cu tehnologie inverter care asigură temperaturi constante 
                      cu consum minim de energie
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Sun className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Încălzire Performantă</h3>
                    <p className="text-gray-600">
                      Pompe de căldură aer-aer cu eficiență ridicată chiar și la 
                      temperaturi exterioare de -25°C
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Fan className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Aer Curat și Sănătos</h3>
                    <p className="text-gray-600">
                      Filtre avansate care elimină 99.9% din bacterii, viruși, 
                      alergeni și particule PM2.5
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556906918-c3071a97a956"
                alt="Sistem climatizare modern"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cum Lucrăm
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proces transparent și profesional pentru rezultate perfecte
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500 transition-colors">
                  <step.icon className="w-10 h-10 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lucrăm cu Cele Mai Bune Branduri
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {benefits.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance CTA */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Contract Service & Mentenanță
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Asigură-ți funcționarea optimă a sistemului de climatizare cu serviciul nostru de mentenanță preventivă
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Verificări periodice programate</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Curățare și dezinfectare unități</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Prioritate la intervențiile de urgență</span>
                  </li>
                </ul>
                <Link 
                  href="/napocainstal/contact" 
                  className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors inline-flex items-center gap-2"
                >
                  Detalii Contract Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="text-center">
                <div className="text-6xl font-bold text-orange-500 mb-2">-20%</div>
                <p className="text-xl text-gray-700">Reducere la contract anual</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pregătit pentru Confort Perfect?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Lasă-ne să-ți oferim cea mai bună soluție de climatizare pentru spațiul tău
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/napocainstal/contact" 
              className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Solicită Consultanță
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+40744123456" 
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-flex items-center gap-2 border border-white/30"
            >
              <Phone className="w-5 h-5" />
              0744 123 456
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}