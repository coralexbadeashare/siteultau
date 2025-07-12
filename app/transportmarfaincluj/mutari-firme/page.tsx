import Image from 'next/image';
import Link from 'next/link';
import { Building, Clock, Shield, Users, Phone, ChevronRight, CheckCircle, BarChart, Briefcase, Server } from 'lucide-react';

export default function MutariFirmePage() {
  const services = [
    {
      title: "Planificare Detaliată",
      description: "Analiză completă și plan personalizat pentru relocare",
      icon: <BarChart className="h-8 w-8" />
    },
    {
      title: "Minim Downtime",
      description: "Relocare în weekend sau după program pentru continuitate",
      icon: <Clock className="h-8 w-8" />
    },
    {
      title: "Echipamente IT Securizate",
      description: "Transport special pentru servere și echipamente sensibile",
      icon: <Server className="h-8 w-8" />
    },
    {
      title: "Coordonator Dedicat",
      description: "Un singur punct de contact pe tot parcursul relocării",
      icon: <Users className="h-8 w-8" />
    }
  ];

  const relocationType = [
    "Birouri și sedii administrative",
    "Spații comerciale și magazine", 
    "Clinici și cabinete medicale",
    "Săli de conferință și training",
    "Depozite și spații industriale",
    "Laboratoare și centre de cercetare",
    "Studiouri și spații creative",
    "Centre de date și servere"
  ];

  const benefits = [
    {
      title: "Experiență Dovedită",
      points: [
        "Peste 500 de relocări de succes",
        "Clienți din diverse industrii",
        "Proiecte de toate dimensiunile"
      ]
    },
    {
      title: "Echipă Specializată",
      points: [
        "Personal instruit pentru relocări corporate",
        "Coordonatori de proiect dedicați",
        "Tehnicieni IT pentru echipamente sensibile"
      ]
    },
    {
      title: "Servicii Complete",
      points: [
        "De la planificare la implementare finală",
        "Ambalare și etichetare sistematică",
        "Reinstalare și organizare la destinație"
      ]
    }
  ];

  const process = [
    {
      phase: "Faza 1",
      title: "Audit și Planificare",
      tasks: ["Evaluare locație actuală", "Inventariere bunuri", "Stabilire timeline", "Identificare riscuri"]
    },
    {
      phase: "Faza 2", 
      title: "Pregătire Pre-Mutare",
      tasks: ["Ambalare sistematică", "Etichetare și catalogare", "Backup date critice", "Comunicare echipe"]
    },
    {
      phase: "Faza 3",
      title: "Execuție Relocare", 
      tasks: ["Transport securizat", "Monitorizare în timp real", "Coordonare echipe", "Raportare progres"]
    },
    {
      phase: "Faza 4",
      title: "Instalare și Verificare",
      tasks: ["Dezambalare organizată", "Reconectare echipamente", "Testare funcționalitate", "Predare finală"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=800&fit=crop"
          alt="Mutări Firme Cluj"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-purple-600/40" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Mutări și Relocări Firme
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl">
              Soluții profesionale de relocare pentru afacerea dvs. - minimizăm întreruperile și maximizăm eficiența
            </p>
            <a
              href="tel:0752816138"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
            >
              <Phone className="h-5 w-5" />
              Consultanță Gratuită: 0752-816-138
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Servicii Specializate pentru Relocări Corporate
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Înțelegem că timpul este esențial în business. De aceea oferim servicii complete 
              de relocare, adaptate pentru a minimiza impactul asupra activității dvs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-purple-50 rounded-2xl p-6 hover:shadow-xl transition-all group">
                <div className="inline-flex p-4 rounded-xl bg-purple-100 text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Procesul Nostru de Relocare în 4 Faze
          </h2>

          <div className="max-w-5xl mx-auto">
            {process.map((phase, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="flex gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    {index < process.length - 1 && (
                      <div className="w-1 h-full bg-purple-200 mx-auto mt-2" />
                    )}
                  </div>
                  <div className="flex-grow pb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-purple-600 font-semibold">{phase.phase}</span>
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {phase.tasks.map((task, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{task}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types & Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Tipuri de Relocări pe Care le Gestionăm
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {relocationType.map((type, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Building className="h-5 w-5 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700">{type}</span>
                  </div>
                ))}
              </div>
              <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
                <h3 className="font-semibold text-lg mb-2">Soluții Personalizate</h3>
                <p className="text-gray-700">
                  Fiecare afacere este unică. Dezvoltăm planuri de relocare adaptate 
                  specific nevoilor și constrângerilor dvs. operaționale.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                De Ce Să Ne Alegeți?
              </h2>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-xl font-bold mb-3 text-purple-600">{benefit.title}</h3>
                    <ul className="space-y-2">
                      {benefit.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                          <span className="text-gray-700">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="h-16 w-16 mx-auto mb-6 text-purple-200" />
            <h2 className="text-3xl font-bold mb-4">
              Relocare de Succes
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              &ldquo;Am mutat un birou cu peste 50 de angajați într-un singur weekend. 
              Luni dimineața, totul funcționa perfect în noua locație.&rdquo;
            </p>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">48h</p>
                <p className="text-purple-200">Timp total relocare</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">0</p>
                <p className="text-purple-200">Zile lucru pierdute</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold mb-2">100%</p>
                <p className="text-purple-200">Satisfacție client</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Planificați Relocarea Afacerii Dvs.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Obțineți o consultanță gratuită și un plan personalizat de relocare
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/transportmarfaincluj/contact"
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
              >
                Solicită Plan de Relocare
                <ChevronRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:0752816138"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold transform hover:scale-105 transition-all"
              >
                <Phone className="h-5 w-5" />
                Discutați cu un Expert
              </a>
            </div>
            <p className="mt-6 text-gray-600">
              <Shield className="inline h-5 w-5 text-green-600 mr-2" />
              Toate bunurile sunt asigurate pe perioada transportului
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}