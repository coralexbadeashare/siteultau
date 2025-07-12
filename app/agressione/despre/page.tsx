import Image from 'next/image'
import Link from 'next/link'
import { Target, Eye, Heart, Shield } from 'lucide-react'

export default function DesprePage() {
  const values = [
    {
      icon: Target,
      title: "Excelență",
      description: "Ne străduim să oferim produse și servicii de cea mai înaltă calitate"
    },
    {
      icon: Shield,
      title: "Integritate",
      description: "Conducem afacerile cu onestitate și transparență"
    },
    {
      icon: Heart,
      title: "Pasiune",
      description: "Suntem pasionați de ceea ce facem și de succesul clienților noștri"
    },
    {
      icon: Eye,
      title: "Inovație",
      description: "Căutăm constant modalități noi și îmbunătățite de a servi clienții"
    }
  ]

  const milestones = [
    { year: "1997", event: "Înființarea Agressione Group" },
    { year: "2002", event: "Extinderea producției de ambalaje" },
    { year: "2008", event: "Certificare ISO 9001" },
    { year: "2012", event: "Deschiderea noului centru de distribuție" },
    { year: "2018", event: "Implementarea tehnologiilor eco-friendly" },
    { year: "2024", event: "Leader în industria de ambalaje din România" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070"
          alt="Despre Agressione"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Despre Noi</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              27 de ani de excelență în producția și distribuția de produse din hârtie și forestiere
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Înființată în 1997, Agressione Group S.A. a început ca o mică afacere de familie în Cluj-Napoca, 
                  cu viziunea de a deveni un lider în industria de ambalaje și produse forestiere din România.
                </p>
                <p>
                  De-a lungul anilor, am crescut constant, investind în tehnologie modernă, extindându-ne 
                  capacitatea de producție și construind relații solide cu clienții noștri. Astăzi, cu peste 
                  50 de angajați dedicați, deservim peste 500 de clienți în toată țara.
                </p>
                <p>
                  Ne mândrim cu angajamentul nostru față de sustenabilitate și responsabilitate socială. 
                  Toate produsele noastre sunt fabricate urmând cele mai înalte standarde de calitate și 
                  cu respect pentru mediul înconjurător.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/agressione/contact"
                  className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  Contactează-ne
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2051"
                alt="Fabrica Agressione"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Misiunea Noastră</h3>
              <p className="text-gray-600 leading-relaxed">
                Să oferim soluții complete și inovatoare de ambalare și produse forestiere, 
                contribuind la succesul clienților noștri prin calitate superioară, servicii 
                excelente și practici sustenabile care protejează mediul pentru generațiile viitoare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Viziunea Noastră</h3>
              <p className="text-gray-600 leading-relaxed">
                Să fim recunoscuți ca lideri naționali în industria de ambalaje și produse forestiere, 
                fiind prima alegere pentru clienții care caută calitate, inovație și responsabilitate 
                ecologică în parteneriatele lor de afaceri.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Valorile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Parcursul Nostru</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Momente cheie în dezvoltarea companiei noastre
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-red-500 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-red-500 rounded-full mx-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-red-500/30" />
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-gray-300">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Echipa Noastră</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesioniști dedicați cu experiență vastă în industrie
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Management Executiv", count: "5", desc: "Lideri cu viziune și experiență" },
              { name: "Echipa de Producție", count: "30+", desc: "Specialiști în fabricație și calitate" },
              { name: "Vânzări & Support", count: "15+", desc: "Dedicați satisfacției clienților" }
            ].map((team, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{team.name}</h3>
                <p className="text-gray-600">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Haideți Să Construim Împreună
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Suntem întotdeauna în căutare de noi oportunități și parteneriate. 
            Contactați-ne pentru a discuta cum putem colabora.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agressione/contact"
              className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
            >
              Începe o Conversație
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