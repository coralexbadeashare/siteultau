import Image from 'next/image';
import Link from 'next/link';
import { Home, Package, Heart, Sparkles, Phone, ChevronRight, CheckCircle, Box, Truck, Calendar } from 'lucide-react';

export default function MutariMobilaPage() {
  const services = [
    {
      title: "Ambalare Completă",
      description: "Împachetăm toate bunurile dvs. cu materiale profesionale",
      icon: <Package className="h-8 w-8" />
    },
    {
      title: "Demontare/Montare",
      description: "Dezmembrare și reasamblare mobilier la destinație",
      icon: <Box className="h-8 w-8" />
    },
    {
      title: "Transport Securizat",
      description: "Vehicule dotate special pentru protecția mobilei",
      icon: <Truck className="h-8 w-8" />
    },
    {
      title: "Curățenie Finală",
      description: "Servicii de curățenie după mutare (opțional)",
      icon: <Sparkles className="h-8 w-8" />
    }
  ];

  const packages = [
    {
      name: "Pachet BASIC",
      price: "De la 80 RON",
      features: [
        "Transport mobilă și bunuri",
        "Echipă de 2 persoane",
        "Chingi și materiale fixare",
        "Asigurare de bază"
      ],
      recommended: false
    },
    {
      name: "Pachet STANDARD",
      price: "De la 150 RON",
      features: [
        "Tot ce include BASIC +",
        "Ambalare mobilă în folie",
        "Demontare/montare mobilier simplu",
        "Cutii pentru obiecte mici",
        "Echipă de 3 persoane"
      ],
      recommended: true
    },
    {
      name: "Pachet PREMIUM",
      price: "De la 250 RON",
      features: [
        "Tot ce include STANDARD +",
        "Ambalare completă a tuturor bunurilor",
        "Demontare/montare mobilier complex",
        "Curățenie după mutare",
        "Coordonator dedicat",
        "Depozitare temporară (dacă e necesar)"
      ],
      recommended: false
    }
  ];

  const movingTips = [
    {
      title: "Înainte de Mutare",
      tips: [
        "Faceți o listă cu toate bunurile",
        "Sortați și donați ce nu mai folosiți",
        "Fotografiați mobila pentru reasamblare",
        "Împachetați obiectele de valoare separat"
      ]
    },
    {
      title: "În Ziua Mutării",
      tips: [
        "Pregătiți o geantă cu esențiale",
        "Verificați toate camerele și dulapurile",
        "Păstrați documentele importante cu dvs.",
        "Faceți poze pentru asigurare"
      ]
    },
    {
      title: "După Mutare",
      tips: [
        "Verificați starea bunurilor",
        "Despachetați întâi lucrurile esențiale",
        "Actualizați adresa la utilități",
        "Familiarizați-vă cu noua zonă"
      ]
    }
  ];

  const statistics = [
    { value: "1000+", label: "Mutări Realizate" },
    { value: "98%", label: "Clienți Mulțumiți" },
    { value: "24/7", label: "Disponibilitate" },
    { value: "5 ani", label: "Experiență" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=800&fit=crop"
          alt="Mutări Mobilă Cluj"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/80 to-orange-600/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mutări Mobilă Cluj
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Mutări complete fără stres - de la împachetare până la aranjarea în noua locuință
            </p>
            <a
              href="tel:0752816138"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Programează Mutarea: 0752-816-138
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Servicii Complete de Mutare
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Ne ocupăm de tot procesul de mutare pentru ca dvs. să vă puteți concentra 
              pe noua etapă din viața dvs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-orange-50 rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="inline-flex p-4 rounded-xl bg-orange-100 text-orange-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Pachete de Servicii
            </h2>
            <p className="text-gray-600 text-lg">
              Alegeți pachetul care se potrivește cel mai bine nevoilor dvs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <div 
                key={index} 
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-all ${
                  pkg.recommended ? 'ring-4 ring-orange-400' : ''
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-orange-500 text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Recomandat
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-orange-600">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/transportmarfaincluj/contact"
                    className={`block text-center py-3 rounded-lg font-semibold transition-colors ${
                      pkg.recommended 
                        ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    Alege Pachetul
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-orange-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moving Tips */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Sfaturi Utile pentru Mutare
            </h2>
            <p className="text-gray-600 text-lg">
              Ghidul nostru pentru o mutare organizată și fără stres
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {movingTips.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <ChevronRight className="h-5 w-5 text-orange-500 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&h=600&fit=crop"
                alt="Echipa noastră de mutări"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                De Ce Clienții Ne Aleg
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Heart className="h-8 w-8 text-red-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Grijă pentru Bunurile Dvs.</h3>
                    <p className="text-gray-600">
                      Tratăm fiecare obiect ca și cum ar fi al nostru. Folosim materiale 
                      de calitate și tehnici profesionale de ambalare.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Home className="h-8 w-8 text-blue-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Experiență Vastă</h3>
                    <p className="text-gray-600">
                      Cu peste 1000 de mutări realizate, știm cum să gestionăm orice 
                      situație și tip de locuință.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Sparkles className="h-8 w-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">Servicii Extra</h3>
                    <p className="text-gray-600">
                      Oferim servicii adiționale precum curățenie, depozitare temporară 
                      și chiar ajutor la aranjarea noii locuințe.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Mutarea Dvs. Începe Aici
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru o evaluare gratuită și un plan personalizat de mutare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transportmarfaincluj/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              Obțineți Ofertă Gratuită
              <ChevronRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:0752816138"
              className="inline-flex items-center justify-center gap-2 bg-orange-700 hover:bg-orange-800 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Sună Acum
            </a>
          </div>
          <p className="mt-8 text-orange-200">
            <CheckCircle className="inline h-5 w-5 mr-2" />
            Toate mutările sunt asigurate • Fără costuri ascunse • Garanție servicii
          </p>
        </div>
      </section>
    </div>
  );
}