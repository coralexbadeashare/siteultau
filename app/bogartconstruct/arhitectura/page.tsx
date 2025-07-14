'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Building, Home, Building2, Award, Filter } from 'lucide-react'

const categories = {
  toate: 'Toate Proiectele',
  rezidential: 'Rezidențial',
  comercial: 'Comercial',
  industrial: 'Industrial',
  cultural: 'Cultural',
}

const projects = [
  {
    id: 1,
    title: 'Vila Modernă Cluj',
    category: 'rezidential',
    location: 'Cluj-Napoca',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940',
    description: 'Vilă de lux cu design minimalist și tehnologii eco-friendly',
  },
  {
    id: 2,
    title: 'Centru Comercial Vivo',
    category: 'comercial',
    location: 'Cluj-Napoca',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?q=80&w=2940',
    description: 'Complex comercial modern cu spații de retail și entertainment',
  },
  {
    id: 3,
    title: 'Hală Industrială Tetarom',
    category: 'industrial',
    location: 'Jucu',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940',
    description: 'Facilitate industrială de ultimă generație',
  },
  {
    id: 4,
    title: 'Complex Rezidențial Park',
    category: 'rezidential',
    location: 'Cluj-Napoca',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2940',
    description: 'Ansamblu rezidențial cu 120 de apartamente și facilități moderne',
  },
  {
    id: 5,
    title: 'Clădire de Birouri The Office',
    category: 'comercial',
    location: 'Cluj-Napoca',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2940',
    description: 'Spații de birouri clase A cu certificare BREEAM',
  },
  {
    id: 6,
    title: 'Centru Cultural Metropolitan',
    category: 'cultural',
    location: 'Cluj-Napoca',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1514063364532-5abd4ddc44e5?q=80&w=2940',
    description: 'Spațiu multifuncțional pentru evenimente culturale',
  },
  {
    id: 7,
    title: 'Vilă Premium Borhanci',
    category: 'rezidential',
    location: 'Cluj-Napoca',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2940',
    description: 'Proprietate exclusivă cu design contemporan',
  },
  {
    id: 8,
    title: 'Depozit Logistic Modern',
    category: 'industrial',
    location: 'Florești',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2e?q=80&w=2940',
    description: 'Centru logistic cu sisteme automatizate',
  },
]

const achievements = [
  { icon: Building, count: '40+', label: 'Proiecte de Arhitectură' },
  { icon: Award, count: '15', label: 'Premii Obținute' },
  { icon: Home, count: '500+', label: 'Locuințe Proiectate' },
  { icon: Building2, count: '25', label: 'Clădiri Comerciale' },
]

export default function ArhitecturaPage() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof categories>('toate')
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = activeCategory === 'toate' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Arhitectură</h1>
            <p className="text-xl text-gray-600">
              Creăm spații care îmbină funcționalitatea cu estetica, transformând viziunile 
              clienților noștri în realități arhitecturale remarcabile.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {achievements.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="bg-white p-6 rounded-lg shadow-md text-center">
                  <Icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-gray-900">{item.count}</div>
                  <div className="text-sm text-gray-600 mt-1">{item.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between mb-12">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">Portofoliu Proiecte</h2>
            <div className="flex items-center space-x-2 overflow-x-auto">
              <Filter className="w-5 h-5 text-gray-500 mr-2" />
              {Object.entries(categories).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key as keyof typeof categories)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${
                    activeCategory === key
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <span className="bg-blue-600 px-3 py-1 rounded-full">
                      {categories[project.category as keyof typeof categories]}
                    </span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-200 mb-2">{project.location}</p>
                  <p className={`text-sm transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Procesul Nostru de Lucru</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Consultare Inițială',
                  description: 'Discutăm cerințele, bugetul și viziunea dumneavoastră pentru proiect.',
                },
                {
                  step: '02',
                  title: 'Conceptualizare',
                  description: 'Dezvoltăm concepte creative care îmbină funcționalitatea cu estetica.',
                },
                {
                  step: '03',
                  title: 'Proiectare Detaliată',
                  description: 'Elaborăm planuri tehnice complete și documentația necesară.',
                },
                {
                  step: '04',
                  title: 'Supervizare Execuție',
                  description: 'Monitorizăm implementarea pentru a asigura calitatea dorită.',
                },
              ].map((item) => (
                <div key={item.step} className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}