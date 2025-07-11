import { Trophy, Calendar, Users, Clock, Star, Ticket, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const EvenimentePage = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'SKAI Boulder Challenge 2024',
      date: '15 Aprilie 2024',
      time: '10:00 - 18:00',
      type: 'Competiție',
      description: 'Competiție de bouldering pentru toate categoriile de vârstă și nivel',
      participants: '100+ participanți',
      registration: 'Deschisă',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=400&fit=crop',
      color: 'from-red-500 to-orange-600'
    },
    {
      id: 2,
      title: 'Ladies Night Climbing',
      date: '20 Aprilie 2024',
      time: '18:00 - 22:00',
      type: 'Event Social',
      description: 'Seară specială dedicată doamnelor și domnișoarelor pasionate de escaladă',
      participants: '50 locuri',
      registration: 'Deschisă',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=400&fit=crop',
      color: 'from-pink-500 to-purple-600'
    },
    {
      id: 3,
      title: 'Kids Climbing Festival',
      date: '1 Mai 2024',
      time: '10:00 - 16:00',
      type: 'Festival',
      description: 'O zi plină de activități, jocuri și escaladă pentru copii 4-14 ani',
      participants: '200+ copii',
      registration: 'Ultimele locuri',
      image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&h=400&fit=crop',
      color: 'from-blue-500 to-green-500'
    }
  ]

  const pastEvents = [
    {
      title: 'Campionatul Național de Tineret',
      date: 'Martie 2024',
      participants: '150',
      winners: ['Maria Popescu - U16', 'Andrei Ion - U18', 'SKAI Team - Locul 2']
    },
    {
      title: 'SKAI Open 2023',
      date: 'Noiembrie 2023',
      participants: '200',
      winners: ['Alexandru Radu - Senior', 'Diana Marin - Women', 'Record traseu: 8a+']
    },
    {
      title: 'Summer Climbing Camp',
      date: 'August 2023',
      participants: '80',
      winners: ['3 sesiuni complete', '15 trasee noi deschise', 'Parteneriat Salewa']
    }
  ]

  const eventTypes = [
    {
      type: 'Competiții',
      icon: <Trophy className="w-8 h-8" />,
      description: 'Competiții locale și naționale pentru toate nivelurile',
      frequency: 'Lunar'
    },
    {
      type: 'Workshopuri',
      icon: <Users className="w-8 h-8" />,
      description: 'Sesiuni de învățare cu experți în escaladă',
      frequency: 'Bilunar'
    },
    {
      type: 'Evenimente Sociale',
      icon: <Star className="w-8 h-8" />,
      description: 'Seri tematice și întâlniri ale comunității',
      frequency: 'Săptămânal'
    },
    {
      type: 'Festivaluri',
      icon: <Calendar className="w-8 h-8" />,
      description: 'Evenimente mari cu activități diverse',
      frequency: 'Sezonier'
    }
  ]

  const partners = [
    { name: 'Salewa', logo: '🏔️' },
    { name: 'La Sportiva', logo: '👟' },
    { name: 'Petzl', logo: '🔦' },
    { name: 'Black Diamond', logo: '💎' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Trophy className="w-10 h-10" />
              <span className="text-orange-200 text-xl">Evenimente SKAI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Competiții și Evenimente
            </h1>
            <p className="text-xl text-orange-50 mb-8 max-w-3xl mx-auto">
              Alătură-te comunității noastre vibrante! Participă la competiții, 
              workshopuri și evenimente sociale care celebrează pasiunea pentru escaladă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#upcoming"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold text-lg"
              >
                Vezi Evenimente
              </a>
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold text-lg"
              >
                Organizează un Eveniment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tipuri de Evenimente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {eventTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.type}</h3>
                <p className="text-gray-600 mb-3">{type.description}</p>
                <span className="text-sm text-orange-600 font-medium">{type.frequency}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section id="upcoming" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Evenimente Viitoare
          </h2>
          
          <div className="space-y-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-60`} />
                    <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1">
                      <span className="text-sm font-semibold text-gray-900">{event.type}</span>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                        <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-5 h-5" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Users className="w-5 h-5" />
                            <span>{event.participants}</span>
                          </div>
                        </div>
                      </div>
                      <div className="lg:text-right">
                        <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${
                          event.registration === 'Deschisă' 
                            ? 'bg-green-100 text-green-700' 
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          Înscrieri: {event.registration}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{event.description}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/skaiurbancrag/contact"
                        className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold"
                      >
                        Înscrie-te Acum
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                      <button className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-semibold">
                        <Ticket className="w-5 h-5 mr-2" />
                        Mai Multe Detalii
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Evenimente Trecute
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <p className="text-orange-600 font-medium mb-4">{event.date}</p>
                <div className="border-t pt-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <Users className="w-4 h-4 inline mr-1" />
                    {event.participants} participanți
                  </p>
                  <div className="space-y-1">
                    {event.winners.map((winner, idx) => (
                      <p key={idx} className="text-sm text-gray-700">
                        <Star className="w-4 h-4 inline mr-1 text-yellow-500" />
                        {winner}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="#"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              Vezi toate evenimentele trecute
              <ArrowRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cum să Participi
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                  1
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Alege Evenimentul</h3>
                <p className="text-gray-600">
                  Verifică calendarul nostru și alege evenimentul care te interesează
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                  2
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Înscrie-te Online</h3>
                <p className="text-gray-600">
                  Completează formularul de înscriere și plătește taxa de participare
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-3xl">
                  3
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Participă și Distrează-te</h3>
                <p className="text-gray-600">
                  Vino pregătit și bucură-te de experiență alături de comunitatea SKAI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Partenerii Noștri
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl mb-2">{partner.logo}</div>
                <p className="text-gray-600 font-medium">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nu Rata Niciun Eveniment!
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Abonează-te la newsletter-ul nostru și fii primul care află despre competiții și evenimente
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Email-ul tău"
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Abonează-te
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}

export default EvenimentePage