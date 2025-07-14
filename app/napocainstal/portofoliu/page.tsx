'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
import { Calendar, MapPin, Home, Building2, Factory } from 'lucide-react';

export default function Portofoliu() {
  const [activeFilter, setActiveFilter] = useState('toate');

  const projects = [
    {
      id: 1,
      title: 'Vila Grigorescu - Instalații Complete',
      category: 'rezidential',
      location: 'Cluj-Napoca, Grigorescu',
      date: 'Decembrie 2023',
      description: 'Instalații termice, sanitare și climatizare pentru vilă de 350mp',
      services: ['Încălzire în pardoseală', 'Centrale termice', 'Aer condiționat multi-split'],
      image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1',
      icon: Home
    },
    {
      id: 2,
      title: 'Clădire Birouri The Office',
      category: 'comercial',
      location: 'Cluj-Napoca, Mărăști',
      date: 'Octombrie 2023',
      description: 'Sistem VRF pentru clădire de birouri clasa A, 2500mp',
      services: ['Sistem VRF Daikin', 'Ventilație cu recuperare', 'BMS integrat'],
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
      icon: Building2
    },
    {
      id: 3,
      title: 'Rezidențial Panoramic',
      category: 'rezidential',
      location: 'Cluj-Napoca, Borhanci',
      date: 'August 2023',
      description: 'Complex rezidențial 120 apartamente - instalații complete',
      services: ['Centrale murale', 'Instalații sanitare', 'Sistem solar apă caldă'],
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00',
      icon: Home
    },
    {
      id: 4,
      title: 'Fabrica Electrolux',
      category: 'industrial',
      location: 'Satu Mare',
      date: 'Iunie 2023',
      description: 'Sistem climatizare hală producție 5000mp',
      services: ['Răcitoare industriale', 'Ventilație industrială', 'Perdele de aer'],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
      icon: Factory
    },
    {
      id: 5,
      title: 'Restaurant La Cantine',
      category: 'comercial',
      location: 'Cluj-Napoca, Centru',
      date: 'Aprilie 2023',
      description: 'Instalații HVAC și sanitare pentru restaurant 200 locuri',
      services: ['Climatizare', 'Ventilație bucătărie', 'Instalații sanitare'],
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      icon: Building2
    },
    {
      id: 6,
      title: 'Vila Feleacu',
      category: 'rezidential',
      location: 'Feleacu, Cluj',
      date: 'Februarie 2023',
      description: 'Sistem complet pentru vilă premium cu piscină interioară',
      services: ['Pompă căldură', 'Încălzire piscină', 'Ventilație cu recuperare'],
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
      icon: Home
    },
    {
      id: 7,
      title: 'Clinica Medlife',
      category: 'comercial',
      location: 'Cluj-Napoca, Gheorgheni',
      date: 'Decembrie 2022',
      description: 'Instalații speciale pentru clinică medicală',
      services: ['Climatizare săli operație', 'Filtrare HEPA', 'Instalații medicale'],
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
      icon: Building2
    },
    {
      id: 8,
      title: 'Depozit Logistic DPD',
      category: 'industrial',
      location: 'Florești, Cluj',
      date: 'Noiembrie 2022',
      description: 'Sistem încălzire și ventilație depozit 3000mp',
      services: ['Aeroterme industriale', 'Ventilație naturală', 'Sisteme antiîngheț'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
      icon: Factory
    }
  ];

  const categories = [
    { id: 'toate', name: 'Toate Proiectele', count: projects.length },
    { id: 'rezidential', name: 'Rezidențial', count: projects.filter(p => p.category === 'rezidential').length },
    { id: 'comercial', name: 'Comercial', count: projects.filter(p => p.category === 'comercial').length },
    { id: 'industrial', name: 'Industrial', count: projects.filter(p => p.category === 'industrial').length }
  ];

  const filteredProjects = activeFilter === 'toate' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/80 z-10" />
          <Image
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5"
            alt="Portofoliu proiecte"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4 z-20 text-white text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Portofoliu Proiecte
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Peste 2500 de proiecte realizate cu succes în ultimii 15 ani
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-100 sticky top-20 z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur p-2 rounded-lg">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-700">Servicii executate:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Rezultate Dovedite</h2>
            <p className="text-xl opacity-90">Cifrele vorbesc despre experiența noastră</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">2500+</div>
              <div className="text-lg">Proiecte Finalizate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <div className="text-lg">Rata de Satisfacție</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-lg">Ani Experiență</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-lg">Specialiști Certificați</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Vrei să Îți Transformăm și Ție Proiectul în Realitate?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactează-ne pentru o consultație gratuită și o ofertă personalizată
          </p>
          <a 
            href="/napocainstal/contact" 
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all inline-block"
          >
            Începe Proiectul Tău
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}