import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Flame, ThermometerSun, Gauge, Shield, Clock, Phone } from 'lucide-react';

export default function InstalatiTermice() {
  const services = [
    {
      title: 'Centrale Termice',
      description: 'Montaj și configurare centrale termice pe gaz, electrice sau pe combustibil solid',
      features: [
        'Centrale murale și de pardoseală',
        'Sisteme cu condensare pentru eficiență maximă',
        'Integrare cu sisteme smart home',
        'Garanție extinsă și service autorizat'
      ]
    },
    {
      title: 'Încălzire în Pardoseală',
      description: 'Sisteme moderne de încălzire radiantă pentru confort termic superior',
      features: [
        'Distribuție uniformă a căldurii',
        'Economie de energie până la 30%',
        'Compatibil cu toate tipurile de pardoseli',
        'Control individual pe zone'
      ]
    },
    {
      title: 'Calorifere și Radiatoare',
      description: 'Instalare radiatoare moderne din oțel, aluminiu sau fontă',
      features: [
        'Design modern și eficiență termică',
        'Valve termostatice pentru control precis',
        'Radiatoare decorative și de baie',
        'Calcul termic pentru dimensionare optimă'
      ]
    },
    {
      title: 'Sisteme Solare',
      description: 'Panouri solare termice pentru apă caldă menajeră și încălzire',
      features: [
        'Reducere costuri până la 70%',
        'Integrare cu sistemul existent',
        'Monitorizare și control la distanță',
        'Eligibil pentru programe de finanțare'
      ]
    }
  ];

  const process = [
    { step: 1, title: 'Consultanță', description: 'Evaluare gratuită și propunere tehnică personalizată' },
    { step: 2, title: 'Proiectare', description: 'Calcule termice și plan de execuție detaliat' },
    { step: 3, title: 'Instalare', description: 'Montaj profesional cu echipamente certificate' },
    { step: 4, title: 'Punere în Funcțiune', description: 'Testare, configurare și instruire utilizare' },
    { step: 5, title: 'Mentenanță', description: 'Service periodic și asistență tehnică' }
  ];

  const benefits = [
    { icon: Flame, title: 'Eficiență Energetică', description: 'Sisteme moderne cu consum redus' },
    { icon: Shield, title: 'Garanție Extinsă', description: 'Până la 5 ani pentru lucrări' },
    { icon: Gauge, title: 'Control Precis', description: 'Termostate inteligente și zonare' },
    { icon: Clock, title: 'Service Rapid', description: 'Intervenții în maxim 24 ore' }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
            alt="Instalații termice"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Instalații Termice
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Soluții complete de încălzire pentru confortul termic al locuinței tale
          </p>
          <Link 
            href="/napocainstal/contact" 
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
          >
            Solicită Consultanță Gratuită
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Serviciile Noastre de Instalații Termice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim soluții complete pentru toate tipurile de sisteme de încălzire
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ThermometerSun className="w-6 h-6 text-orange-600" />
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul Nostru de Lucru
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De la consultanță până la mentenanță, suntem alături de tine
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="flex gap-4 mb-8 last:mb-0">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="w-0.5 h-16 bg-orange-200 mx-6 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Avantajele Colaborării cu Noi
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vrei un Sistem de Încălzire Eficient?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o evaluare gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/napocainstal/contact" 
              className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Programează Consultanță
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+40744123456" 
              className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all inline-flex items-center gap-2 border border-white/30"
            >
              <Phone className="w-5 h-5" />
              Sună Acum: 0744 123 456
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}