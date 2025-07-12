import Image from 'next/image'
import Link from 'next/link'
import { 
  Users, Award, Shield, Wrench, Star, 
  Target, Heart, Lightbulb, CheckCircle
} from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Mihai Popescu',
      role: 'Director General',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      description: 'Peste 15 ani experiență în industria auto'
    },
    {
      name: 'Alexandru Ionescu',
      role: 'Șef Service',
      image: 'https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=400&h=400&fit=crop',
      description: 'Specialist în sisteme electrice și climatizare'
    },
    {
      name: 'Radu Marin',
      role: 'Tehnician Senior',
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
      description: 'Expert în reparații caroserie și etanșare'
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Manager Vânzări',
      image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop',
      description: 'Consultanță pentru alegerea echipamentelor'
    }
  ]

  const milestones = [
    { year: '2014', event: 'Înființarea CamperService Cluj' },
    { year: '2016', event: 'Prima extindere - service mobil' },
    { year: '2018', event: 'Parteneriat cu branduri internaționale' },
    { year: '2020', event: 'Lansare magazin online' },
    { year: '2023', event: 'Peste 5000 de clienți mulțumiți' },
    { year: '2025', event: 'Extindere națională în planificare' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Pasiune',
      description: 'Suntem pasionați de ceea ce facem și ne dedicăm fiecărui proiect'
    },
    {
      icon: Shield,
      title: 'Încredere',
      description: 'Construim relații pe termen lung bazate pe transparență și onestitate'
    },
    {
      icon: Lightbulb,
      title: 'Inovație',
      description: 'Adoptăm cele mai noi tehnologii pentru soluții eficiente'
    },
    {
      icon: Target,
      title: 'Excelență',
      description: 'Ne străduim să depășim așteptările în fiecare lucrare'
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=1920&h=800&fit=crop"
          alt="Despre CamperService"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Despre Noi</h1>
              <p className="text-xl text-gray-200">
                Povestea noastră de succes în servicii pentru autorulote și rulote
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                10+ Ani de Excelență în Service
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                CamperService a fost înființat în 2014 din pasiunea pentru călătorii și 
                dorința de a oferi servicii de calitate superioară pentru comunitatea de 
                camping din România.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                De-a lungul anilor, am evoluat de la un mic atelier la unul dintre cele 
                mai respectate centre de service pentru autorulote și rulote din țară, 
                deservind peste 5000 de clienți mulțumiți.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Misiunea noastră este simplă: să facem ca fiecare călătorie să fie sigură, 
                confortabilă și memorabilă pentru clienții noștri.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
                  <p className="text-gray-700">Clienți Mulțumiți</p>
                </div>
                <div className="bg-green-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <p className="text-gray-700">Ani Experiență</p>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=1000&fit=crop"
                alt="CamperService Workshop"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Valorile Noastre</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-10 w-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Echipa Noastră</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Profesioniști dedicați cu pasiune pentru ceea ce fac
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all group"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Parcursul Nostru</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Momente importante în evoluția CamperService
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="flex-1 text-right pr-8">
                  {index % 2 === 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  )}
                </div>
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-blue-200" />
                  )}
                </div>
                <div className="flex-1 text-left pl-8">
                  {index % 2 !== 0 && (
                    <div>
                      <h3 className="text-2xl font-bold text-blue-600">
                        {milestone.year}
                      </h3>
                      <p className="text-gray-600">{milestone.event}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certificări și Parteneriate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recunoaștere și colaborări de prestigiu
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Award className="h-16 w-16 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Service Autorizat</h3>
              <p className="text-gray-600">
                Pentru brandurile Dometic, Truma și Fiamma
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Shield className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
              <p className="text-gray-600">
                Certificare pentru managementul calității
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Star className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">5 Stele Google</h3>
              <p className="text-gray-600">
                Rating perfect din peste 200 de recenzii
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Hai Să Ne Cunoaștem!
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Vizitează-ne la service sau contactează-ne pentru orice întrebare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/camperservice/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all"
            >
              Contactează-ne
            </Link>
            <Link
              href="/camperservice/servicii"
              className="inline-flex items-center bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold transition-all"
            >
              Vezi Serviciile
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}