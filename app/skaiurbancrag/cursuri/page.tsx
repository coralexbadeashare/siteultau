import { Users, Baby, User, Trophy, GraduationCap, Heart, Star, Clock } from 'lucide-react'
import Link from 'next/link'

const CursuriPage = () => {
  const courses = [
    {
      id: 'initiere',
      title: 'Curs de Inițiere',
      subtitle: 'Perfect pentru începători',
      description: 'Învață bazele escaladei într-un mediu sigur și prietenos',
      icon: <GraduationCap className="w-8 h-8" />,
      duration: '4 săptămâni',
      level: 'Începător',
      age: '10+ ani',
      color: 'from-green-500 to-green-600',
      features: [
        'Tehnici de bază',
        'Siguranță și echipament',
        'Noduri esențiale',
        'Progresie graduală'
      ],
      price: 'de la 350 lei',
      image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?w=800&h=600&fit=crop'
    },
    {
      id: 'copii',
      title: 'Curs pentru Copii',
      subtitle: 'Vârste 4-14 ani',
      description: 'Program special adaptat pentru micii exploratori',
      icon: <Baby className="w-8 h-8" />,
      duration: '8 săptămâni',
      level: 'Toate nivelurile',
      age: '4-14 ani',
      color: 'from-blue-500 to-blue-600',
      features: [
        'Grupe pe vârste',
        'Jocuri și exerciții',
        'Dezvoltare motorie',
        'Încredere și curaj'
      ],
      price: 'de la 300 lei/lună',
      image: 'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&h=600&fit=crop'
    },
    {
      id: 'adulti',
      title: 'Curs pentru Adulți',
      subtitle: 'Toate nivelurile',
      description: 'De la începător la avansat, găsește nivelul potrivit',
      icon: <User className="w-8 h-8" />,
      duration: '6 săptămâni',
      level: 'Variabil',
      age: '15+ ani',
      color: 'from-purple-500 to-purple-600',
      features: [
        'Tehnici avansate',
        'Antrenament forță',
        'Strategie de escaladă',
        'Pregătire competiții'
      ],
      price: 'de la 400 lei',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    },
    {
      id: 'echipa',
      title: 'Echipa de Performanță',
      subtitle: 'Pentru cei pasionați',
      description: 'Antrenament intensiv pentru competiții și performanță',
      icon: <Trophy className="w-8 h-8" />,
      duration: 'Program anual',
      level: 'Avansat',
      age: '10+ ani',
      color: 'from-red-500 to-red-600',
      features: [
        'Antrenor dedicat',
        'Plan personalizat',
        'Competiții naționale',
        'Echipament sponsorizat'
      ],
      price: 'Selecție necesară',
      image: 'https://images.unsplash.com/photo-1682695796497-31a44224d6d6?w=800&h=600&fit=crop'
    },
    {
      id: 'yoga',
      title: 'Yoga pentru Climbers',
      subtitle: 'Flexibilitate și echilibru',
      description: 'Îmbunătățește-ți performanța prin yoga specializată',
      icon: <Heart className="w-8 h-8" />,
      duration: 'Drop-in sau abonament',
      level: 'Toate nivelurile',
      age: '16+ ani',
      color: 'from-pink-500 to-pink-600',
      features: [
        'Flexibilitate',
        'Echilibru și core',
        'Respirație',
        'Recuperare activă'
      ],
      price: '40 lei/ședință',
      image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop'
    },
    {
      id: 'personal',
      title: 'Antrenament Personal',
      subtitle: '1-la-1 cu antrenorul',
      description: 'Progres accelerat cu atenție personalizată',
      icon: <Star className="w-8 h-8" />,
      duration: 'Flexibil',
      level: 'Personalizat',
      age: 'Toate vârstele',
      color: 'from-orange-500 to-orange-600',
      features: [
        'Program personalizat',
        'Atenție individuală',
        'Progres rapid',
        'Orar flexibil'
      ],
      price: '150 lei/ședință',
      image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=800&h=600&fit=crop'
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 flex items-center">
            <GraduationCap className="w-12 h-12 mr-4" />
            Cursuri
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            Programe de antrenament pentru toate vârstele și nivelurile. 
            Alege cursul potrivit și începe aventura escaladei alături de instructorii noștri certificați.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/skaiurbancrag/cursuri/${course.id}`}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${course.color} opacity-60`} />
                    <div className="absolute top-4 left-4 bg-white/20 backdrop-blur rounded-lg p-3 text-white">
                      {course.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{course.title}</h3>
                    <p className="text-orange-600 font-medium mb-3">{course.subtitle}</p>
                    <p className="text-gray-600 mb-4">{course.description}</p>

                    {/* Info Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {course.duration}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {course.level}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {course.age}
                      </span>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-4">
                      {course.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-lg font-semibold text-gray-900">{course.price}</span>
                      <span className="text-orange-600 group-hover:translate-x-1 transition-transform">
                        Vezi detalii →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            De Ce să Alegi Cursurile SKAI?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-orange-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Instructori Certificați</h3>
              <p className="text-gray-600">Echipă de profesioniști cu experiență internațională</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Grupe Mici</h3>
              <p className="text-gray-600">Maximum 8 participanți pentru atenție personalizată</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Progres Garantat</h3>
              <p className="text-gray-600">Metodologie dovedită și evaluare continuă</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexibilitate</h3>
              <p className="text-gray-600">Multiple opțiuni de orar și recuperare ședințe</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nu Știi Ce Curs să Alegi?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Contactează-ne și te vom ajuta să găsești programul perfect pentru tine
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Sună Acum: 0742 325 429
            </a>
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Trimite un Mesaj
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CursuriPage