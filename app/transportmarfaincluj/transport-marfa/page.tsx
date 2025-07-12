import Image from 'next/image';
import Link from 'next/link';
import { Truck, Clock, Shield, Phone, ChevronRight, CheckCircle, MapPin, Euro } from 'lucide-react';

export default function TransportMarfaPage() {
  const services = [
    "Transport marfă generală",
    "Transport mobilier și echipamente",
    "Transport materiale construcții",
    "Transport colete și bagaje",
    "Transport produse fragile",
    "Servicii de încărcare/descărcare"
  ];

  const vehicleSpecs = [
    { label: "Capacitate", value: "3.5 tone" },
    { label: "Volum util", value: "22 m³" },
    { label: "Lungime", value: "4.2 m" },
    { label: "Lățime", value: "2.1 m" },
    { label: "Înălțime", value: "2.3 m" },
    { label: "Tip acces", value: "Ușă spate + laterală" }
  ];

  const pricingInfo = [
    {
      type: "Transport Local Cluj",
      price: "De la 80 RON",
      details: "Pentru transporturi în oraș"
    },
    {
      type: "Transport Județean",
      price: "1.7 RON/km",
      details: "Tarif dus-întors pentru distanțe mai mari"
    },
    {
      type: "Servicii Adiționale",
      price: "După caz",
      details: "Încărcare/descărcare, ambalare specială"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&h=800&fit=crop"
          alt="Transport Marfă Cluj"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Transport Marfă Cluj
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Servicii profesionale de transport marfă cu dube moderne și echipă experimentată
            </p>
            <a
              href="tel:0752816138"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Comandă Transport: 0752-816-138
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Transport Rapid și Sigur pentru Orice Tip de Marfă
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Cu o experiență de peste 5 ani în domeniul transporturilor, oferim servicii complete 
                de transport marfă în Cluj-Napoca și împrejurimi. Dispunem de vehicule moderne, 
                echipamente profesionale și o echipă dedicată pentru a asigura livrarea în siguranță 
                a mărfii dumneavoastră.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/transportmarfaincluj/contact"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Solicită Ofertă
                  <ChevronRight className="h-5 w-5" />
                </Link>
                <a
                  href="tel:0752816138"
                  className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Sună Direct
                </a>
              </div>
            </div>
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop"
                alt="Servicii Transport Marfă"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Flota Noastră</h2>
            <p className="text-gray-600 text-lg">
              Vehicule moderne, întreținute perfect pentru siguranța mărfii dvs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop"
                alt="Duba Transport"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Specificații Vehicule</h3>
              <div className="grid grid-cols-2 gap-4">
                {vehicleSpecs.map((spec, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <p className="text-sm text-gray-600 mb-1">{spec.label}</p>
                    <p className="text-xl font-semibold text-blue-600">{spec.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                <h4 className="font-semibold text-lg mb-2">Avantaje Cheie:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Acces facil pentru încărcare/descărcare</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Sistem de fixare și chingi profesionale</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Prelată impermeabilă pentru protecție</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Tarife Transparente</h2>
            <p className="text-gray-600 text-lg">
              Prețuri corecte, fără costuri ascunse
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {pricingInfo.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg border border-blue-100">
                <h3 className="text-xl font-bold mb-3">{item.type}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <Euro className="h-6 w-6 text-blue-600" />
                  <span className="text-3xl font-bold text-blue-600">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.details}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 bg-gray-50 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">De Ce Să Ne Alegeți?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600 mb-3">
                  <Clock className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-1">Punctualitate</h4>
                <p className="text-sm text-gray-600">Respectăm programul stabilit</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-3">
                  <Shield className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-1">Siguranță</h4>
                <p className="text-sm text-gray-600">Marfa dvs. este în mâini sigure</p>
              </div>
              <div className="text-center">
                <div className="inline-flex p-3 rounded-full bg-purple-100 text-purple-600 mb-3">
                  <Truck className="h-6 w-6" />
                </div>
                <h4 className="font-semibold mb-1">Profesionalism</h4>
                <p className="text-sm text-gray-600">Echipă calificată și echipament modern</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Aveți Nevoie de Transport Marfă?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Suntem disponibili NON-STOP pentru a vă oferi cele mai bune soluții de transport
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0752816138"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              0752-816-138
            </a>
            <a
              href="tel:0742980519"
              className="inline-flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-900 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              0742-980-519
            </a>
          </div>
          <div className="mt-6 flex items-center justify-center gap-2 text-blue-200">
            <MapPin className="h-5 w-5" />
            <span>Acoperim tot județul Cluj și împrejurimile</span>
          </div>
        </div>
      </section>
    </div>
  );
}