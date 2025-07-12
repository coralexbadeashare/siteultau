import React from 'react'
import Image from 'next/image'
import { CheckCircle, Users, Award, Wrench, Target } from 'lucide-react'

export default function DesprePage() {
  const values = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excelență",
      description: "Ne străduim să depășim așteptările în fiecare proiect"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Încredere",
      description: "Construim relații de durată bazate pe transparență"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Inovație",
      description: "Adoptăm cele mai noi tehnologii și tehnici"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Precizie",
      description: "Atenție la detalii în fiecare aspect al lucrării"
    }
  ]

  const milestones = [
    { year: "2009", event: "Înființarea JPX Paint Car" },
    { year: "2012", event: "Extinderea atelierului și a echipei" },
    { year: "2015", event: "Introducerea serviciilor de protecție ceramică" },
    { year: "2018", event: "Certificare internațională pentru vopsitorie auto" },
    { year: "2021", event: "Inaugurarea noului centru de detailing" },
    { year: "2024", event: "Peste 5000 de clienți mulțumiți" }
  ]

  const team = [
    {
      name: "Adrian Popescu",
      role: "Fondator & Director General",
      description: "20+ ani experiență în industria auto"
    },
    {
      name: "Mihai Ionescu",
      role: "Șef Atelier Vopsitorie",
      description: "Specialist certificat în tehnologii de vopsire"
    },
    {
      name: "Elena Dumitrescu",
      role: "Manager Relații Clienți",
      description: "Dedicată satisfacției complete a clienților"
    },
    {
      name: "Costin Radu",
      role: "Specialist Detailing",
      description: "Expert în protecție ceramică și polish"
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1600&h=800&fit=crop"
          alt="Atelier JPX Paint Car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Despre Noi</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Pasiune pentru perfecțiune, dedicare pentru excelență
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Povestea Noastră
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                JPX Paint Car a fost înființată în 2009 din pasiunea pentru automobile și dorința de a oferi servicii de vopsitorie auto la cele mai înalte standarde. Ce a început ca un mic atelier, a crescut într-unul dintre cele mai respectate centre de vopsitorie și detailing din București.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                De-a lungul anilor, am investit constant în tehnologie de ultimă generație, în formarea echipei noastre și în dezvoltarea de noi servicii pentru a răspunde nevoilor în continuă evoluție ale clienților noștri.
              </p>
              <p className="text-lg text-gray-700">
                Astăzi, JPX Paint Car este sinonim cu calitatea, profesionalismul și atenția la detalii. Fiecare mașină care intră în atelierul nostru este tratată cu aceeași grijă și dedicare ca și cum ar fi a noastră.
              </p>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
                alt="Echipa JPX Paint Car"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold">15+</div>
                <div>Ani de Experiență</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Parcursul Nostru
            </h2>
            <p className="text-xl text-gray-600">
              Momente cheie în evoluția JPX Paint Car
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-red-600 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-red-600 rounded-full relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-200" />
                  )}
                </div>
                <div className="flex-grow pl-8">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesioniști dedicați care fac diferența
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-red-600 to-orange-600 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-red-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Certificări și Parteneriate
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recunoaștere internațională pentru standardele noastre înalte
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">ISO</div>
                <div className="text-sm text-gray-600">9001:2015</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">PPG</div>
                <div className="text-sm text-gray-600">Certified</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">3M</div>
                <div className="text-sm text-gray-600">Authorized</div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400 mb-2">BASF</div>
                <div className="text-sm text-gray-600">Partner</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Alătură-te Celor Peste 5000 de Clienți Mulțumiți
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Hai să discutăm despre cum putem transforma mașina ta
          </p>
          <a 
            href="/jpxpaintcar/contact" 
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center"
          >
            Contactează-ne Acum
            <CheckCircle className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  )
}