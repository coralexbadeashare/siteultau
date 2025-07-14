'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Map, Trees, Users, Layers, Target, Lightbulb } from 'lucide-react'

const urbanProjects = [
  {
    id: 1,
    title: 'Plan Urbanistic Zonal Sopor',
    type: 'PUZ',
    area: '25 hectare',
    status: 'Aprobat',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2940',
    description: 'Dezvoltare rezidențială mixtă cu spații verzi generoase',
    features: ['500 unități locative', 'Parc central 3ha', 'Zone comerciale integrate'],
  },
  {
    id: 2,
    title: 'Masterplan Cartier Bună Ziua',
    type: 'Masterplan',
    area: '45 hectare',
    status: 'În implementare',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940',
    description: 'Cartier rezidențial modern cu infrastructură completă',
    features: ['1200 apartamente', 'Școală și grădiniță', 'Centre comunitare'],
  },
  {
    id: 3,
    title: 'Regenerare Urbană Centru Istoric',
    type: 'Regenerare',
    area: '15 hectare',
    status: 'În dezvoltare',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a?q=80&w=2940',
    description: 'Revitalizarea zonei istorice cu păstrarea identității locale',
    features: ['Pietonalizare străzi', 'Restaurare clădiri istorice', 'Spații publice noi'],
  },
  {
    id: 4,
    title: 'Parc Industrial Cluj Est',
    type: 'PUZ Industrial',
    area: '80 hectare',
    status: 'Aprobat',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2940',
    description: 'Zonă industrială modernă cu facilități logistice',
    features: ['Zone industriale flexibile', 'Acces feroviar', 'Infrastructură verde'],
  },
  {
    id: 5,
    title: 'Dezvoltare Florești Nord',
    type: 'PUG',
    area: '120 hectare',
    status: 'În aprobare',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?q=80&w=2940',
    description: 'Extindere urbană integrată cu focus pe sustenabilitate',
    features: ['Zone mixte', 'Transport public integrat', 'Coridoare verzi'],
  },
  {
    id: 6,
    title: 'Smart City Concept Cluj',
    type: 'Strategie Urbană',
    area: 'Municipiu',
    status: 'În implementare',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2940',
    description: 'Strategie de dezvoltare urbană inteligentă',
    features: ['IoT infrastructură', 'Mobilitate verde', 'Servicii digitale'],
  },
]

const services = [
  {
    icon: Map,
    title: 'Planuri Urbanistice',
    description: 'PUG, PUZ, PUD - documentații complete de urbanism',
  },
  {
    icon: Layers,
    title: 'Masterplanuri',
    description: 'Concepte integrate pentru dezvoltări de mari dimensiuni',
  },
  {
    icon: Trees,
    title: 'Peisagistică Urbană',
    description: 'Design de spații verzi și amenajări peisagere',
  },
  {
    icon: Users,
    title: 'Consultare Publică',
    description: 'Facilitare dialog comunitar și participare publică',
  },
  {
    icon: Target,
    title: 'Strategii Urbane',
    description: 'Planificare strategică pentru dezvoltare durabilă',
  },
  {
    icon: Lightbulb,
    title: 'Smart City',
    description: 'Soluții inteligente pentru orașe moderne',
  },
]

export default function UrbanismPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Urbanism</h1>
            <p className="text-xl text-gray-600">
              Dezvoltăm comunități sustenabile prin planificare urbană integrată, 
              punând accent pe calitatea vieții și protecția mediului.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                  <Icon className="w-12 h-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Proiecte de Urbanism</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {urbanProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Aprobat' ? 'bg-green-100 text-green-800' :
                      project.status === 'În implementare' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'În aprobare' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 font-medium">{project.type}</span>
                    <span className="text-sm text-gray-500">{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Map className="w-4 h-4 mr-2" />
                    <span>{project.area}</span>
                  </div>
                  
                  <div className={`transition-all duration-300 ${
                    selectedProject === project.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold mb-2">Caracteristici principale:</h4>
                      <ul className="space-y-1">
                        {project.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-600 mr-2">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Abordarea Noastră în Urbanism</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-semibold mb-4">Principii de Design Urban</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">1.</span>
                    <div>
                      <strong>Sustenabilitate</strong>
                      <p className="text-gray-600 mt-1">Integrarea soluțiilor ecologice și eficiente energetic</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">2.</span>
                    <div>
                      <strong>Conectivitate</strong>
                      <p className="text-gray-600 mt-1">Rețele de transport integrate și accesibilitate optimă</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">3.</span>
                    <div>
                      <strong>Comunitate</strong>
                      <p className="text-gray-600 mt-1">Spații publice vibrante care încurajează interacțiunea socială</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">4.</span>
                    <div>
                      <strong>Identitate</strong>
                      <p className="text-gray-600 mt-1">Păstrarea caracterului local și valorificarea patrimoniului</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Procesul de Planificare</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Analiză Teritorială</h4>
                    <p className="text-sm text-gray-600 mt-1">Studiu complet al contextului urban și natural</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Consultare Stakeholderi</h4>
                    <p className="text-sm text-gray-600 mt-1">Dialog cu autoritățile, investitorii și comunitatea</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Concept și Strategie</h4>
                    <p className="text-sm text-gray-600 mt-1">Dezvoltarea viziunii și obiectivelor de dezvoltare</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-600">Implementare și Monitorizare</h4>
                    <p className="text-sm text-gray-600 mt-1">Suport în execuție și evaluare continuă</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}