import { PartyPopper, Gift, Cake, Music, Camera, Clock, Users, Star } from 'lucide-react'
import Link from 'next/link'

const PetreceriPage = () => {
  const packages = [
    {
      name: 'Basic Party',
      duration: '2 ore',
      participants: 'Până la 10 copii',
      price: '800 lei',
      features: [
        'Acces exclusiv zonă petrecere',
        'Instructor dedicat',
        'Echipament pentru toți',
        'Decorațiuni simple',
        'Apă și sucuri'
      ],
      color: 'from-blue-400 to-blue-500',
      popular: false
    },
    {
      name: 'Adventure Party',
      duration: '3 ore',
      participants: 'Până la 15 copii',
      price: '1200 lei',
      features: [
        'Tot ce include Basic +',
        'Animator profesionist',
        'Jocuri și concursuri',
        'Pizza pentru toți',
        'Tort personalizat',
        'Decorațiuni tematice'
      ],
      color: 'from-purple-400 to-pink-500',
      popular: true
    },
    {
      name: 'Ultimate Party',
      duration: '4 ore',
      participants: 'Până la 20 copii',
      price: '1800 lei',
      features: [
        'Tot ce include Adventure +',
        'Fotograf profesionist',
        'Face painting',
        'Candy bar',
        'Cadouri surpriză',
        'Video highlight'
      ],
      color: 'from-orange-400 to-red-500',
      popular: false
    }
  ]

  const themes = [
    { name: 'Superhero Adventure', emoji: '🦸', description: 'Deveniți supereroi pe perete!' },
    { name: 'Princess Castle', emoji: '👸', description: 'Escaladă spre castelul magic' },
    { name: 'Jungle Explorer', emoji: '🌴', description: 'Aventură în jungla urbană' },
    { name: 'Space Mission', emoji: '🚀', description: 'Misiune pe planeta SKAI' },
    { name: 'Pirate Treasure', emoji: '🏴‍☠️', description: 'Căutarea comorii pierdute' },
    { name: 'Dino Discovery', emoji: '🦕', description: 'Exploratori în era dinozaurilor' }
  ]

  const addOns = [
    { item: 'Părinți extra', price: '+50 lei/adult', icon: '👨‍👩‍👧' },
    { item: 'Oră suplimentară', price: '+200 lei', icon: '⏰' },
    { item: 'Copii extra', price: '+40 lei/copil', icon: '👶' },
    { item: 'Meniu special', price: 'La cerere', icon: '🍽️' },
    { item: 'Piñata', price: '+100 lei', icon: '🎊' },
    { item: 'Baloane cu heliu', price: '+150 lei', icon: '🎈' }
  ]

  const timeline = [
    { time: '0:00', activity: 'Primirea invitaților și pregătire' },
    { time: '0:15', activity: 'Încălzire și jocuri de cunoaștere' },
    { time: '0:30', activity: 'Inițiere în escaladă și primele trasee' },
    { time: '1:00', activity: 'Competiții și provocări distractive' },
    { time: '1:30', activity: 'Pauză pentru tort și cadouri' },
    { time: '2:00', activity: 'Jocuri finale și surprize' }
  ]

  const gallery = [
    { src: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop', alt: 'Petrecere copii' },
    { src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop', alt: 'Tort aniversar' },
    { src: 'https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&h=300&fit=crop', alt: 'Copii escaladă' },
    { src: 'https://images.unsplash.com/photo-1606924592584-ffa79285b531?w=400&h=300&fit=crop', alt: 'Decorațiuni petrecere' }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 text-8xl animate-bounce">🎈</div>
          <div className="absolute bottom-10 right-10 text-8xl animate-pulse">🎉</div>
          <div className="absolute top-1/2 left-1/4 text-6xl animate-spin-slow">🎂</div>
          <div className="absolute bottom-1/4 right-1/3 text-6xl">🎁</div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <PartyPopper className="w-10 h-10 text-purple-600" />
              <span className="text-purple-600 text-xl font-semibold">Petreceri de Neuitat</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Sărbătorește
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
                la Înălțime!
              </span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Transformă ziua specială într-o aventură de neuitat! 
              Petreceri de aniversare unice cu escaladă, jocuri și multă distracție.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#packages"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Vezi Pachetele
              </Link>
              <Link
                href="/skaiurbancrag/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
              >
                Rezervă Acum
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Gift className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Pachete Complete</h3>
              <p className="text-sm text-gray-600 mt-1">Tot ce ai nevoie inclus</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Personal Dedicat</h3>
              <p className="text-sm text-gray-600 mt-1">Instructori și animatori</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Camera className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Amintiri Păstrate</h3>
              <p className="text-sm text-gray-600 mt-1">Foto & video incluse</p>
            </div>
            <div className="group">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-full p-6 w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Cake className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900">Tort & Catering</h3>
              <p className="text-sm text-gray-600 mt-1">Meniu personalizat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Pachete de Petrecere
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-105 transition-all ${
                  pkg.popular ? 'ring-4 ring-purple-500' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-bl-2xl">
                    <Star className="w-5 h-5 inline mr-1" />
                    Popular
                  </div>
                )}

                <div className={`h-2 bg-gradient-to-r ${pkg.color}`} />
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="flex items-center space-x-4 text-gray-600 mb-6">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{pkg.participants}</span>
                    </div>
                  </div>
                  
                  <div className="text-4xl font-bold text-gray-900 mb-6">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <span className="text-purple-600 mt-0.5">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/skaiurbancrag/contact"
                    className={`block w-full text-center px-6 py-3 rounded-full font-semibold transition-all ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Rezervă Pachetul
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Themes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Teme de Petrecere
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {themes.map((theme, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{theme.emoji}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{theme.name}</h3>
                <p className="text-gray-600">{theme.description}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 mt-8">
            * Sau creăm o temă personalizată special pentru sărbătorit!
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Cum Decurge Petrecerea
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full px-4 py-2 font-semibold">
                    {item.time}
                  </div>
                  <div className="flex-1 bg-white rounded-xl p-4 shadow-md">
                    <p className="text-gray-700">{item.activity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Personalizează Petrecerea
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {addOns.map((addon, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl mb-2">{addon.icon}</div>
                <h3 className="font-medium text-gray-900 text-sm">{addon.item}</h3>
                <p className="text-purple-600 font-semibold text-sm mt-1">{addon.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Momente de Bucurie
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gallery.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gradient-to-br from-purple-100 to-pink-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12 text-center">
            <div className="text-6xl mb-6">🎉</div>
            <blockquote className="text-xl text-gray-700 italic mb-6">
              "Cea mai reușită petrecere pe care am organizat-o vreodată! 
              Totul a fost perfect - de la decorațiuni la animatori. 
              Copiii au fost în al nouălea cer!"
            </blockquote>
            <cite className="text-gray-900 font-semibold">- Raluca T., mamă</cite>
            <div className="flex justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-500" fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rezervă Data Perfectă!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Weekendurile se ocupă rapid. Contactează-ne acum pentru a-ți rezerva data dorită.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Rezervă Petrecerea
            </Link>
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-semibold text-lg"
            >
              Sună: 0742 325 429
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default PetreceriPage