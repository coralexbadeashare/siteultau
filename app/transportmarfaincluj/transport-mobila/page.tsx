import Image from 'next/image';
import Link from 'next/link';
import { Package, Shield, Phone, ChevronRight, CheckCircle, Heart, Clock, Wrench } from 'lucide-react';

export default function TransportMobilaPage() {
  const services = [
    {
      title: "Ambalare Profesională",
      description: "Folii de protecție, cartoane speciale și materiale de amortizare",
      icon: <Package className="h-8 w-8" />
    },
    {
      title: "Demontare/Montare",
      description: "Echipă specializată pentru demontarea și remontarea mobilierului",
      icon: <Wrench className="h-8 w-8" />
    },
    {
      title: "Transport Securizat",
      description: "Chingi profesionale și sisteme de fixare pentru siguranță maximă",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Manipulare Atentă",
      description: "Personal instruit pentru manipularea obiectelor fragile și valoroase",
      icon: <Heart className="h-8 w-8" />
    }
  ];

  const furnitureTypes = [
    "Mobilier dormitor și living",
    "Mobilier bucătărie",
    "Mobilier birou",
    "Electronice și electrocasnice",
    "Obiecte de artă și tablouri",
    "Piane și instrumente muzicale",
    "Mobilier de grădină",
    "Obiecte fragile și valoroase"
  ];

  const processSteps = [
    {
      step: "1",
      title: "Evaluare și Planificare",
      description: "Analizăm necesitățile și planificăm transportul în detaliu"
    },
    {
      step: "2",
      title: "Pregătire și Ambalare",
      description: "Protejăm fiecare piesă de mobilier cu materiale profesionale"
    },
    {
      step: "3",
      title: "Transport Sigur",
      description: "Transportăm cu grijă folosind vehicule adaptate"
    },
    {
      step: "4",
      title: "Livrare și Montaj",
      description: "Asamblăm mobila la destinație și curățăm zona"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=800&fit=crop"
          alt="Transport Mobilă Cluj"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Transport Mobilă Cluj
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Transportăm mobila dvs. cu grijă maximă - demontare, ambalare, transport și montaj
            </p>
            <a
              href="tel:0752816138"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Programează Transport: 0752-816-138
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Servicii Complete de Transport Mobilă
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Oferim soluții complete pentru transportul mobilierului, de la evaluare inițială 
              până la montajul final în noua locație
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-xl transition-shadow">
                <div className="inline-flex p-4 rounded-xl bg-green-100 text-green-600 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop"
                alt="Tipuri de Mobilier"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Transportăm Orice Tip de Mobilier
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Indiferent de tipul, dimensiunea sau fragilitatea mobilierului, avem experiența 
                și echipamentele necesare pentru un transport în siguranță.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {furnitureTypes.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 bg-green-50 rounded-xl border-l-4 border-green-600">
                <h3 className="font-semibold text-lg mb-2">Atenție Specială Pentru:</h3>
                <p className="text-gray-700">
                  Obiecte fragile, antichități, opere de artă și mobilier de valoare. 
                  Folosim tehnici și materiale speciale pentru protecție maximă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Procesul Nostru de Transport
            </h2>
            <p className="text-gray-600 text-lg">
              Un proces organizat pentru o experiență fără stres
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-600 text-white text-2xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <ChevronRight className="hidden lg:block absolute top-8 -right-4 h-8 w-8 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              De Ce Să Alegeți Serviciile Noastre?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Pentru Persoane Fizice</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Mutări complete de apartamente și case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Servicii de împachetare și despachetare</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Depozitare temporară dacă este necesar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Curățenie după mutare</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Pentru Companii</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Relocări de birouri complete</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Transport echipamente IT securizat</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Planificare pentru minim timp nefuncțional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                    <span>Contracte pe termen lung disponibile</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-4 bg-yellow-50 px-6 py-4 rounded-full">
                <Clock className="h-6 w-6 text-yellow-600" />
                <span className="font-semibold text-gray-800">
                  Economisiți timp și efort - lăsați profesioniștii să se ocupe!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Planificați Transportul Mobilei Dvs.
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Obțineți o cotație gratuită și programați transportul la momentul potrivit pentru dvs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/transportmarfaincluj/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              Solicită Ofertă Gratuită
              <ChevronRight className="h-5 w-5" />
            </Link>
            <a
              href="tel:0752816138"
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-900 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Consultanță Telefonică
            </a>
          </div>
          <p className="mt-8 text-green-200">
            Prețuri începând de la <span className="text-2xl font-bold text-white">80 RON</span> în Cluj-Napoca
          </p>
        </div>
      </section>
    </div>
  );
}