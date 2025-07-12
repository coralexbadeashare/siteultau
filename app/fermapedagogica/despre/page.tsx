import Image from 'next/image'
import Link from 'next/link'
import { Heart, Leaf, Users, Award, TreePine, Flower2, Bird, Sun } from 'lucide-react'

export default function DesprePage() {
  const values = [
    {
      icon: Heart,
      title: "Dragoste pentru Natură",
      description: "Cultivăm respectul și grija față de mediul înconjurător"
    },
    {
      icon: Users,
      title: "Educație Experiențială",
      description: "Învățare prin practică și interacțiune directă"
    },
    {
      icon: Leaf,
      title: "Sustenabilitate",
      description: "Practici ecologice și responsabilitate față de viitor"
    },
    {
      icon: Award,
      title: "Excelență Educativă",
      description: "Programe certificate și personal calificat"
    }
  ]

  const team = [
    {
      name: "Ana Maria Ionescu",
      role: "Fondator & Director",
      description: "Pedagog cu 15 ani experiență în educație experiențială",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=2070"
    },
    {
      name: "Mihai Popa",
      role: "Coordonator Activități",
      description: "Specialist în zootehnie și pasionat de educație outdoor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070"
    },
    {
      name: "Elena Dumitru",
      role: "Educator Principal",
      description: "Profesor pentru învățământ primar cu specializare în pedagogie alternativă",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2088"
    }
  ]

  const milestones = [
    { year: "2018", event: "Deschiderea fermei cu primele 10 animale" },
    { year: "2019", event: "Prima tabără de vară cu 50 de copii" },
    { year: "2020", event: "Lansarea programelor școlare acreditate" },
    { year: "2021", event: "Extinderea la 5 hectare și 30+ animale" },
    { year: "2022", event: "Certificare eco și parteneriate cu 20+ școli" },
    { year: "2024", event: "Peste 5000 de copii vizitatori anual" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2046"
          alt="Despre Ferma Pedagogică"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-900/40" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-6">
              <Flower2 className="w-12 h-12 text-yellow-400 animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Povestea Noastră</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Din pasiune pentru educație și dragoste pentru natură
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-green-800 mb-6">
                O Viziune Devenită Realitate
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Ferma Pedagogică s-a născut din visul unei familii de a crea un spațiu unde 
                  copiii din mediul urban să poată reconecta cu natura și să învețe despre 
                  viața la țară într-un mod autentic și captivant.
                </p>
                <p>
                  Începută în 2018 cu doar câteva animale și multă pasiune, ferma noastră a 
                  crescut organic, devenind astăzi un centru educațional recunoscut, care 
                  primește anual mii de vizitatori - copii, familii și grupuri școlare.
                </p>
                <p>
                  Ne mândrim că oferim o experiență unică, unde educația se împletește armonios 
                  cu joaca, iar copiii descoperă valori importante precum responsabilitatea, 
                  grija față de animale și respectul pentru mediul înconjurător.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-green-100 px-6 py-3 rounded-full">
                  <span className="text-green-700 font-semibold">6+ ani experiență</span>
                </div>
                <div className="bg-yellow-100 px-6 py-3 rounded-full">
                  <span className="text-yellow-700 font-semibold">5000+ copii fericiți</span>
                </div>
                <div className="bg-blue-100 px-6 py-3 rounded-full">
                  <span className="text-blue-700 font-semibold">30+ animale prietenoase</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2070"
                alt="Copii la fermă"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 p-6 rounded-2xl shadow-lg">
                <Sun className="w-12 h-12 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Misiunea Noastră</h3>
              <p className="text-gray-700">
                Să oferim copiilor experiențe educative autentice în natură, dezvoltând 
                respectul pentru mediu, animalele și agricultura sustenabilă, într-un 
                cadru sigur, distractiv și stimulant pentru învățare.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Bird className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">Viziunea Noastră</h3>
              <p className="text-gray-700">
                Să devenim cel mai iubit centru de educație experiențială din România, 
                unde fiecare copil descoperă bucuria de a învăța prin contact direct 
                cu natura și animalele, formând o generație responsabilă și conectată cu mediul.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Valorile Noastre</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-green-800 mb-4">Echipa Noastră</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Oamenii pasionați care fac posibilă magia de la fermă
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gradient-to-br from-green-700 to-green-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Călătoria Noastră</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Pași importanți în dezvoltarea fermei
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-center mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right">
                  <span className="text-yellow-400 font-bold text-lg">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-yellow-400 rounded-full mx-8 relative">
                  {index !== milestones.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-yellow-400/30" />
                  )}
                </div>
                <div className="flex-grow">
                  <p className="text-green-100">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-6">
            Fii Parte din Povestea Noastră
          </h2>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
            Vino să ne cunoști personal și să descoperi magia fermei pedagogice. 
            Te așteptăm cu drag!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/fermapedagogica/contact"
              className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center shadow-lg"
            >
              Vizitează-ne
            </Link>
            <Link
              href="/fermapedagogica/activitati"
              className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors inline-flex items-center justify-center"
            >
              Vezi Activitățile
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}