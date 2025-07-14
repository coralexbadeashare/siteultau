import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle, Phone, Droplets, Wind, Award, Users, Clock, Shield, ThermometerSun, Home, Gauge } from 'lucide-react';

export default function NapocaInstalHome() {
  const services = [
    {
      title: 'Instalații Termice',
      description: 'Centrale termice, sisteme de încălzire în pardoseală, calorifere și termostate inteligente.',
      icon: ThermometerSun,
      href: '/napocainstal/servicii/termice',
      features: ['Centrale pe gaz', 'Încălzire în pardoseală', 'Calorifere moderne', 'Termostate smart'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Instalații Sanitare',
      description: 'Instalații complete de apă și canalizare, montaj obiecte sanitare, sisteme de filtrare.',
      icon: Droplets,
      href: '/napocainstal/servicii/sanitare',
      features: ['Conducte apă/canal', 'Obiecte sanitare', 'Filtre de apă', 'Boilere'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Climatizare',
      description: 'Sisteme de aer condiționat, ventilație și purificare aer pentru confort maxim.',
      icon: Wind,
      href: '/napocainstal/servicii/climatizare',
      features: ['Aer condiționat', 'Ventilație', 'Purificare aer', 'Mentenanță AC'],
      color: 'from-teal-500 to-green-500'
    }
  ];

  const benefits = [
    { icon: Award, title: 'Experiență de 15+ ani', description: 'Expertiză dovedită în domeniu' },
    { icon: Users, title: 'Echipă certificată', description: 'Personal calificat și autorizat' },
    { icon: Clock, title: 'Intervenții rapide', description: 'Disponibili 24/7 pentru urgențe' },
    { icon: Shield, title: 'Garanție extinsă', description: 'Până la 5 ani pentru lucrări' }
  ];

  const stats = [
    { number: '2500+', label: 'Proiecte finalizate' },
    { number: '15+', label: 'Ani experiență' },
    { number: '98%', label: 'Clienți mulțumiți' },
    { number: '24/7', label: 'Asistență urgențe' }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0"
            alt="Instalații profesionale"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Instalații de <span className="text-orange-400">Încredere</span>
            <br />pentru Casa Ta
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Specialiști în instalații termice, sanitare și climatizare. 
            Soluții complete pentru confortul locuinței sau afacerii tale în Cluj-Napoca.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/napocainstal/contact" 
              className="bg-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-xl inline-flex items-center gap-2"
            >
              Solicită Ofertă Gratuită
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
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim soluții complete pentru toate nevoile de instalații ale casei sau afacerii tale
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <div className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                  >
                    Vezi detalii
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experiență, profesionalism și dedicare pentru fiecare proiect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
                  <benefit.icon className="w-10 h-10 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ai Nevoie de Serviciile Noastre?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contactează-ne acum pentru o consultație gratuită și o ofertă personalizată
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/napocainstal/contact" 
              className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              Trimite Cerere
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

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Servicii Specializate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acoperim toate aspectele instalațiilor pentru locuințe și spații comerciale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1607400201515-c5b13b9b2121"
                alt="Instalații rezidențiale"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Instalații Rezidențiale</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Soluții complete pentru case și apartamente: de la instalații sanitare și termice 
                  până la sisteme moderne de climatizare și ventilație.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Instalații noi și renovări complete
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Sisteme inteligente de control
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Soluții eficiente energetic
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c"
                alt="Instalații comerciale"
                width={600}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Gauge className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Instalații Comerciale</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Proiecte complexe pentru birouri, magazine, restaurante și spații industriale, 
                  cu focus pe eficiență și conformitate cu normele în vigoare.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Sisteme HVAC performante
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Instalații conform normelor
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Mentenanță preventivă
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Urgențe Non-Stop</h3>
              <p className="text-xl text-gray-600">
                Intervenții rapide pentru avarii și situații de urgență, 24/7
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-4 rounded-full">
                <Phone className="w-8 h-8 text-red-600 animate-pulse" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Linie urgențe</div>
                <a href="tel:+40744123456" className="text-2xl font-bold text-red-600 hover:text-red-700">
                  0744 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}