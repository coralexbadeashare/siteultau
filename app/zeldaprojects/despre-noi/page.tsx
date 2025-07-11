import { Award, Target, Users, Leaf, TrendingUp } from 'lucide-react'
import Link from 'next/link'

const AboutPage = () => {
  const timeline = [
    { 
      year: '2011', 
      title: 'Începutul Călătoriei',
      description: 'Am început ca importator de ambalaje din țări europene precum Italia, Turcia, Bulgaria, Polonia și Elveția.'
    },
    { 
      year: '2016', 
      title: 'Viziune pentru Viitor',
      description: 'Am depus un proiect pentru fonduri europene în vederea înființării unei linii de producție tuburi de carton industrial.'
    },
    { 
      year: '2020', 
      title: 'Lansare Producție',
      description: 'Am implementat cu succes linia de producție și am început fabricarea tuburilor de carton 100% reciclat.'
    },
    { 
      year: '2024', 
      title: 'Lider Regional',
      description: 'Am devenit unul dintre principalii producători de tuburi de carton și distribuitori de ambalaje ecologice din România.'
    }
  ]

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Sustenabilitate',
      description: 'Folosim exclusiv materiale reciclate și promovăm economia circulară în toate procesele noastre.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Calitate Certificată',
      description: 'Suntem certificați ISO 14001:2015, garantând cele mai înalte standarde de management al mediului.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Orientare către Client',
      description: 'Oferim soluții personalizate și suport complet pentru fiecare client în parte.'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Inovație Continuă',
      description: 'Investim constant în tehnologii moderne și dezvoltarea de produse noi.'
    }
  ]

  const team = [
    {
      name: 'Alexandru Popescu',
      role: 'Director General',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Maria Ionescu',
      role: 'Director Producție',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Andrei Gheorghe',
      role: 'Director Vânzări',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Elena Dumitrescu',
      role: 'Manager Calitate',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&h=800&fit=crop"
          alt="Despre Zelda Projects"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Despre Zelda Projects
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl">
              Povestea noastră de succes în industria ambalajelor ecologice și a tuburilor de carton
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Misiunea Noastră
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Zelda Projects SRL este dedicată furnizării de soluții de ambalare sustenabile 
                și de înaltă calitate pentru afacerile din România și Europa. Ne angajăm să 
                contribuim la protejarea mediului prin utilizarea exclusivă a materialelor reciclate 
                și prin promovarea economiei circulare.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Cu o experiență de peste 13 ani în industrie și o fabrică modernă în Cluj-Napoca, 
                suntem pregătiți să răspundem celor mai exigente cerințe ale clienților noștri.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 rounded-lg p-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Viziunea Noastră</h3>
                  <p className="text-gray-600">Să devenim liderul regional în ambalaje sustenabile</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop"
                alt="Fabrica Zelda Projects"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold">ISO 14001</div>
                <div className="text-sm">Certificat 2015</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Evoluția Noastră
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-green-200" />
            
            {/* Timeline Items */}
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6">
                    <div className="text-green-600 font-bold text-xl mb-2">{item.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Valorile Care Ne Ghidează
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Echipa Noastră
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Profesioniști dedicați cu experiență vastă în industria ambalajelor
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai Să Construim Împreună Un Viitor Sustenabil
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Contactați-ne pentru a discuta cum putem ajuta afacerea dumneavoastră 
            cu soluții de ambalare ecologice și eficiente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zeldaprojects/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Contactează-ne
            </Link>
            <Link
              href="/zeldaprojects/produse"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Vezi Produsele
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AboutPage