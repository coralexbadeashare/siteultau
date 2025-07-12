import Image from 'next/image'
import Link from 'next/link'
import { Package, Truck, Settings, HeadphonesIcon, ClipboardCheck, Recycle } from 'lucide-react'

export default function ServiciiPage() {
  const services = [
    {
      icon: Package,
      title: "Ambalare Personalizată",
      description: "Dezvoltăm soluții de ambalare adaptate nevoilor specifice ale produselor dumneavoastră",
      features: [
        "Design personalizat",
        "Prototipare rapidă",
        "Testare rezistență",
        "Producție flexibilă"
      ]
    },
    {
      icon: Truck,
      title: "Logistică Integrată",
      description: "Servicii complete de transport și distribuție pentru optimizarea lanțului de aprovizionare",
      features: [
        "Transport național",
        "Tracking în timp real",
        "Gestiune stocuri",
        "Distribuție just-in-time"
      ]
    },
    {
      icon: Settings,
      title: "Consultanță Tehnică",
      description: "Expertiză profesională pentru alegerea celor mai potrivite soluții de ambalare",
      features: [
        "Analiză nevoi",
        "Optimizare costuri",
        "Îmbunătățire procese",
        "Training personal"
      ]
    },
    {
      icon: HeadphonesIcon,
      title: "Suport Dedicat",
      description: "Echipă de suport disponibilă pentru a răspunde tuturor întrebărilor și cerințelor",
      features: [
        "Asistență 24/5",
        "Manager cont dedicat",
        "Răspuns rapid",
        "Rezolvare probleme"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Managementul Calității",
      description: "Sistem riguros de control al calității pentru a asigura standarde înalte",
      features: [
        "Certificare ISO 9001",
        "Testare continuă",
        "Rapoarte calitate",
        "Îmbunătățire continuă"
      ]
    },
    {
      icon: Recycle,
      title: "Soluții Eco-Friendly",
      description: "Angajament pentru sustenabilitate prin produse și procese ecologice",
      features: [
        "Materiale reciclabile",
        "Reducere deșeuri",
        "Certificare FSC",
        "Carbon neutral"
      ]
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Consultare Inițială",
      description: "Analizăm nevoile dumneavoastră specifice și identificăm cea mai bună soluție"
    },
    {
      number: "02",
      title: "Propunere Personalizată",
      description: "Dezvoltăm o ofertă detaliată adaptată cerințelor și bugetului dumneavoastră"
    },
    {
      number: "03",
      title: "Prototipare și Testare",
      description: "Creăm prototipuri și efectuăm teste pentru a asigura funcționalitatea optimă"
    },
    {
      number: "04",
      title: "Producție și Livrare",
      description: "Producem și livrăm conform specificațiilor agregate și termenelor stabilite"
    },
    {
      number: "05",
      title: "Suport Post-Vânzare",
      description: "Oferim asistență continuă și optimizări pentru satisfacție maximă"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074"
          alt="Servicii Agressione"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Serviciile Noastre</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Soluții complete adaptate nevoilor afacerii dumneavoastră
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ce Putem Face Pentru Dumneavoastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii pentru a vă ajuta să vă atingeți obiectivele de afaceri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-600 transition-colors">
                  <service.icon className="w-8 h-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Procesul Nostru de Lucru
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proces simplificat pentru rezultate excepționale
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-12 last:mb-0">
                <div className="flex-shrink-0 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mr-6">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="w-0.5 h-16 bg-red-200 ml-10 mt-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Beneficiile Colaborării cu Agressione
              </h2>
              <div className="space-y-6">
                {[
                  "Experiență de peste 27 de ani în industrie",
                  "Portofoliu diversificat de produse și servicii",
                  "Echipă dedicată de profesioniști",
                  "Tehnologie modernă și procese eficiente",
                  "Angajament pentru calitate și sustenabilitate",
                  "Prețuri competitive și termene de livrare rapide"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-0.5 mr-4" />
                    <p className="text-gray-300 text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                alt="Echipa Agressione"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Industrii pe Care le Deservim
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experiență vastă în diverse sectoare industriale
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Alimentară",
              "Farmaceutică", 
              "Cosmetice",
              "Electronică",
              "Textile",
              "Automotive",
              "Retail",
              "E-commerce"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Să Discutăm Despre Proiectul Dumneavoastră
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Suntem aici pentru a vă ajuta să găsiți cea mai bună soluție pentru nevoile dumneavoastră
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agressione/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Programează o Consultare
            </Link>
            <Link
              href="/agressione/produse"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-colors inline-flex items-center justify-center"
            >
              Vezi Produsele Noastre
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}