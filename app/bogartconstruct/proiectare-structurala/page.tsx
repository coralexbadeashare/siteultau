'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Ruler, Calculator, Shield, Cog, BarChart3, FileCheck } from 'lucide-react'

const structuralProjects = [
  {
    id: 1,
    title: 'Structură Hală Industrială 5000mp',
    type: 'Industrial',
    structure: 'Structură metalică',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940',
    specs: {
      area: '5000 mp',
      height: '12 m',
      span: '30 m',
      load: '500 kg/mp',
    },
  },
  {
    id: 2,
    title: 'Complex Rezidențial P+10',
    type: 'Rezidențial',
    structure: 'Cadre din beton armat',
    image: 'https://images.unsplash.com/photo-1590986201364-ce95a5a8e6fa?q=80&w=2940',
    specs: {
      area: '12000 mp',
      height: '35 m',
      floors: '11',
      units: '120',
    },
  },
  {
    id: 3,
    title: 'Pasarelă Pietonală',
    type: 'Infrastructură',
    structure: 'Structură mixtă',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2940',
    specs: {
      length: '45 m',
      width: '3.5 m',
      clearance: '5.5 m',
      load: '5 kN/mp',
    },
  },
  {
    id: 4,
    title: 'Centru Comercial Mall',
    type: 'Comercial',
    structure: 'Prefabricate + monolit',
    image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?q=80&w=2940',
    specs: {
      area: '25000 mp',
      height: '18 m',
      levels: '3',
      parking: '500 locuri',
    },
  },
  {
    id: 5,
    title: 'Siloz Cereale 10000t',
    type: 'Agricol',
    structure: 'Beton precomprimat',
    image: 'https://images.unsplash.com/photo-1625649767223-08d3cbeb88a8?q=80&w=2940',
    specs: {
      capacity: '10000 t',
      height: '35 m',
      diameter: '20 m',
      cells: '6',
    },
  },
  {
    id: 6,
    title: 'Stadion 15000 Locuri',
    type: 'Sport',
    structure: 'Structură metalică + beton',
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2940',
    specs: {
      capacity: '15000',
      area: '35000 mp',
      roof: 'Consolă 25m',
      tribune: '4',
    },
  },
]

const services = [
  {
    icon: Ruler,
    title: 'Proiectare Structuri',
    description: 'Calcul și dimensionare pentru toate tipurile de structuri',
    features: ['Structuri din beton armat', 'Structuri metalice', 'Structuri mixte', 'Structuri din lemn'],
  },
  {
    icon: Calculator,
    title: 'Verificări Tehnice',
    description: 'Expertize tehnice și verificări de conformitate',
    features: ['Verificare proiecte', 'Expertize tehnice', 'Audit structural', 'Evaluare seismică'],
  },
  {
    icon: Shield,
    title: 'Consolidări',
    description: 'Soluții de consolidare și reabilitare structurală',
    features: ['Consolidări seismice', 'Reabilitări structurale', 'Reparații capitale', 'Modernizări'],
  },
  {
    icon: Cog,
    title: 'Consultanță Tehnică',
    description: 'Asistență tehnică pe parcursul execuției',
    features: ['Asistență șantier', 'Monitorizare execuție', 'Soluții tehnice', 'Optimizări'],
  },
]

const expertise = [
  { value: '100+', label: 'Proiecte Structurale' },
  { value: '50M+', label: 'mp Proiectați' },
  { value: '25+', label: 'Ani Experiență' },
  { value: '15', label: 'Ingineri Specialiști' },
]

export default function ProiectareStructuralaPage() {
  const [selectedService, setSelectedService] = useState(0)

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Proiectare Structurală</h1>
            <p className="text-xl text-gray-600">
              Soluții ingenioase pentru structuri sigure și eficiente, 
              folosind cele mai avansate tehnologii de calcul și proiectare.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {expertise.map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-3xl font-bold text-slate-800 mb-2">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Servicii de Proiectare Structurală</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={service.title}
                  className={`bg-gray-50 rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                    selectedService === index ? 'ring-2 ring-blue-600 shadow-lg' : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedService(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Proiecte Reprezentative</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {structuralProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.structure}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {Object.entries(project.specs).map(([key, value]) => (
                      <div key={key} className="bg-gray-50 px-3 py-2 rounded">
                        <span className="text-gray-500 capitalize">{key}:</span>
                        <span className="font-medium ml-1">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Procesul Nostru de Lucru</h2>
            
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-300 -translate-x-1/2 hidden md:block" />
              
              <div className="space-y-12">
                {[
                  {
                    title: 'Analiza Cerințelor',
                    description: 'Studiem cerințele funcționale și normativele aplicabile',
                    icon: FileCheck,
                  },
                  {
                    title: 'Conceptualizare',
                    description: 'Dezvoltăm variante de soluții structurale optime',
                    icon: Cog,
                  },
                  {
                    title: 'Calcul Structural',
                    description: 'Modelare 3D și analiză cu software specializat',
                    icon: Calculator,
                  },
                  {
                    title: 'Detaliere Tehnică',
                    description: 'Elaborare planșe de execuție și detalii constructive',
                    icon: Ruler,
                  },
                  {
                    title: 'Monitorizare Execuție',
                    description: 'Asistență tehnică și verificări pe parcursul execuției',
                    icon: BarChart3,
                  },
                ].map((step, index) => {
                  const Icon = step.icon
                  return (
                    <div key={step.title} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className="flex-1" />
                      <div className="relative z-10 bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1 px-4 md:px-12">
                        <div className={`bg-gray-50 p-6 rounded-lg ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Tehnologii și Software Utilizate</h2>
            <p className="text-xl mb-12 text-blue-100">
              Folosim cele mai avansate instrumente pentru proiectare și analiză structurală
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['AutoCAD', 'Revit Structure', 'ETABS', 'SAP2000', 'SAFE', 'Tekla Structures', 'Robot Structural', 'Advance Steel'].map((software) => (
                <div key={software} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <p className="font-medium">{software}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}