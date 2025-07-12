'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Phone, Truck, Package, Home, Building, Clock, Shield, Users, ChevronRight, Star, CheckCircle } from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Transport Marfă Profesional în Cluj",
      subtitle: "Servicii rapide și sigure pentru toate nevoile dvs.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=1080&fit=crop"
    },
    {
      title: "Mutări Mobilă fără Stres",
      subtitle: "Echipă experimentată, ambalare profesională",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=1080&fit=crop"
    },
    {
      title: "Relocări Firme Complete",
      subtitle: "Minimizăm timpul de nefuncționare al afacerii dvs.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const services = [
    {
      icon: <Truck className="h-12 w-12" />,
      title: "Transport Marfă",
      description: "Transport sigur și rapid pentru orice tip de marfă în Cluj și împrejurimi",
      features: ["Dube de 3.5t - 22m³", "Prețuri de la 80 RON", "Disponibil 24/7"],
      link: "/transportmarfaincluj/transport-marfa",
      color: "blue"
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Transport Mobilă",
      description: "Servicii complete de transport mobilă cu ambalare și protecție",
      features: ["Ambalare profesională", "Demontare/Montare", "Asigurare bunuri"],
      link: "/transportmarfaincluj/transport-mobila",
      color: "green"
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Mutări Firme",
      description: "Relocări complete pentru birouri și spații comerciale",
      features: ["Planificare detaliată", "Minim timp nefuncționare", "Echipă specializată"],
      link: "/transportmarfaincluj/mutari-firme",
      color: "purple"
    },
    {
      icon: <Package className="h-12 w-12" />,
      title: "Mutări Mobilă",
      description: "Mutări complete pentru locuințe cu servicii all-inclusive",
      features: ["Împachetare totală", "Curățenie finală", "Depozitare temporară"],
      link: "/transportmarfaincluj/mutari-mobila",
      color: "orange"
    }
  ];

  const features = [
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Disponibil NON-STOP",
      description: "Suntem la dispoziția dvs. 24/7 pentru urgențe și programări"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Transport Sigur",
      description: "Echipament profesional și personal calificat pentru siguranța bunurilor"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Echipă Experimentată",
      description: "Peste 5 ani de experiență în domeniul transporturilor și mutărilor"
    }
  ];

  const testimonials = [
    {
      name: "Maria Popescu",
      role: "Client Rezidențial",
      content: "Servicii excelente! Echipa a fost punctuală, profesionistă și foarte atentă cu mobila mea.",
      rating: 5
    },
    {
      name: "Andrei Ionescu",
      role: "Director Firmă",
      content: "Am relocat biroul cu 50 de angajați într-o singură zi. Totul a decurs perfect!",
      rating: 5
    },
    {
      name: "Elena Marin",
      role: "Client Transport",
      content: "Prețuri corecte și servicii de calitate. Recomand cu încredere!",
      rating: 5
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
        
        <div className="relative h-full flex items-center justify-center text-white">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
              {heroSlides[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
              <a
                href="tel:0752816138"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
              >
                <Phone className="h-5 w-5" />
                Sună Acum: 0752-816-138
              </a>
              <Link
                href="/transportmarfaincluj/contact"
                className="bg-white/20 backdrop-blur hover:bg-white/30 text-white border-2 border-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
              >
                Solicită Ofertă
                <ChevronRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serviciile Noastre</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Oferim o gamă completă de servicii de transport și mutări, adaptate nevoilor dvs. specifice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className={`inline-flex p-4 rounded-2xl bg-${service.color}-100 text-${service.color}-600 mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.link}
                    className={`inline-flex items-center gap-2 text-${service.color}-600 font-semibold hover:gap-3 transition-all`}
                  >
                    Detalii
                    <ChevronRight className="h-5 w-5" />
                  </Link>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-${service.color}-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex p-4 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Prețuri Începând de la 80 RON</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Obțineți o cotație personalizată pentru nevoile dvs. de transport sau mutare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0752816138"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              0752-816-138
            </a>
            <a
              href="tel:0742980519"
              className="bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              0742-980-519
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-gray-600 text-lg">Satisfacția clienților este prioritatea noastră</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  );
}