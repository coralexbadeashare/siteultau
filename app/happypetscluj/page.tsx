'use client'

import { Heart, Scissors, Home, Dog, MessageCircle, Star, ArrowRight, Check, Users, Award, Clock } from 'lucide-react'
import Image from 'next/image'

export default function HappyPetsClujPage() {
  const services = [
    {
      icon: Scissors,
      title: "Grooming Profesional",
      description: "Servicii complete de înfrumusețare pentru câini și pisici. Tuns, spălat, coafat și îngrijire unghii.",
      features: ["Tuns rasă specifică", "Baie și uscare", "Tăiere unghii", "Curățare urechi"],
      price: "De la 80 RON"
    },
    {
      icon: Home,
      title: "Pet Sitting",
      description: "Îngrijire la domiciliu pentru animalele tale când ești plecat. Vizite zilnice sau cazare.",
      features: ["Hrănire programată", "Plimbări zilnice", "Joacă și socializare", "Administrare medicamente"],
      price: "De la 50 RON/zi"
    },
    {
      icon: Dog,
      title: "Plimbări Zilnice",
      description: "Plimbări regulate pentru câinele tău. Individual sau în grup, adaptat nevoilor fiecărui câine.",
      features: ["30-60 minute", "Trasee variate", "Grupuri mici", "Raport zilnic"],
      price: "De la 30 RON"
    },
    {
      icon: MessageCircle,
      title: "Consultanță Comportamentală",
      description: "Sfaturi experți pentru probleme de comportament și educație de bază.",
      features: ["Evaluare comportament", "Plan personalizat", "Tehnici pozitive", "Suport continuu"],
      price: "De la 150 RON/ședință"
    }
  ]

  const testimonials = [
    {
      name: "Ana Maria",
      pet: "Proprietar de Golden Retriever",
      text: "Sunt foarte mulțumită de serviciile Happy Pets! Max arată întotdeauna fantastic după grooming și echipa este foarte profesionistă.",
      rating: 5
    },
    {
      name: "Bogdan Popa",
      pet: "Proprietar de 2 pisici",
      text: "Pet sitting-ul a fost salvarea mea când am plecat în vacanță. Pisicile mele au fost foarte bine îngrijite și am primit updates zilnice.",
      rating: 5
    },
    {
      name: "Elena Mureșan",
      pet: "Proprietar de Beagle",
      text: "Plimbările zilnice sunt perfecte pentru Benny! E mult mai calm și fericit de când merge regulat cu Happy Pets.",
      rating: 5
    }
  ]

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <Heart className="h-16 w-16 text-pink-500 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Îngrijire cu <span className="text-pink-500">Dragoste</span> pentru Prietenii Tăi Blănoși
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Servicii profesionale de grooming, pet sitting și plimbări în Cluj-Napoca. 
              Pentru că animalele tale merită ce e mai bun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#servicii" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition-all transform hover:scale-105 inline-flex items-center">
                Descoperă Serviciile
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a href="tel:+40744123456" className="bg-white text-pink-500 border-2 border-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all transform hover:scale-105">
                Sună Acum: 0744 123 456
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform">
              <Users className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">500+</h3>
              <p className="text-gray-600">Clienți Fericiți</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Heart className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">1000+</h3>
              <p className="text-gray-600">Animale Îngrijite</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Award className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">5 Ani</h3>
              <p className="text-gray-600">Experiență</p>
            </div>
            <div className="transform hover:scale-105 transition-transform">
              <Clock className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-gray-800">24/7</h3>
              <p className="text-gray-600">Suport Urgențe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicii" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Serviciile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii pentru a asigura fericirea și sănătatea animalelor tale
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all hover:shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-100 p-4 rounded-full mr-4">
                    <service.icon className="h-8 w-8 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-pink-500 font-semibold">{service.price}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pink-500 text-white py-3 rounded-full hover:bg-pink-600 transition-colors font-semibold">
                  Rezervă Acum
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="despre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                De Ce Să Alegi <span className="text-pink-500">Happy Pets Cluj</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Suntem o echipă de profesioniști pasionați de animale, dedicați să oferim cele mai bune servicii 
                pentru companionii tăi blănoși. Cu peste 5 ani de experiență în domeniu, înțelegem nevoile 
                unice ale fiecărui animal.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Calificat</h3>
                    <p className="text-gray-600">Toți membrii echipei noastre sunt certificați și au experiență vastă în îngrijirea animalelor.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Abordare Personalizată</h3>
                    <p className="text-gray-600">Fiecare animal este unic, de aceea adaptăm serviciile noastre la nevoile specifice ale fiecăruia.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-pink-100 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-6 w-6 text-pink-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Siguranță și Confort</h3>
                    <p className="text-gray-600">Facilități moderne și echipamente de ultimă generație pentru confortul maxim al animalelor.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-8">
                <Image 
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=600&fit=crop" 
                  alt="Happy dog at grooming salon" 
                  width={600} 
                  height={600} 
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimoniale" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Ce Spun Clienții Noștri</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Satisfacția clienților și bunăstarea animalelor sunt prioritățile noastre
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 transform hover:scale-105 transition-all">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.pet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-pink-500 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Programează o Întâlnire Astăzi!
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Suntem aici pentru a-ți ajuta prietenul blănos să arate și să se simtă minunat. 
            Contactează-ne pentru o consultație gratuită!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+40744123456" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center">
              <Heart className="mr-2 h-5 w-5" />
              Sună Acum: 0744 123 456
            </a>
            <a href="mailto:contact@happypetscluj.ro" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-500 transition-all transform hover:scale-105">
              Trimite Email
            </a>
          </div>
          <div className="mt-12 text-lg">
            <p className="mb-2">Str. Florilor 12, Cluj-Napoca</p>
            <p>Luni - Sâmbătă: 9:00 - 19:00</p>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
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
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  )
}