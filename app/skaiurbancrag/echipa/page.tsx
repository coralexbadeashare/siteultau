import { Users, Award, Heart, Mountain, Star, Shield, Zap, Mail } from 'lucide-react'
import Link from 'next/link'

const EchipaPage = () => {
  const team = [
    {
      name: 'Andrei Popescu',
      role: 'Fondator & CEO',
      description: 'Pasionat de escaladă de peste 20 de ani, Andrei a transformat visul său într-o realitate.',
      specialization: ['Management', 'Viziune strategică'],
      achievements: ['Primul 8a din Cluj', 'Fondator SKAI 2015'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      social: { email: 'andrei@skaiurbancrag.ro' }
    },
    {
      name: 'Maria Ionescu',
      role: 'Head Coach',
      description: 'Cu experiență internațională în competiții, Maria conduce programul nostru de performanță.',
      specialization: ['Lead climbing', 'Coaching performanță'],
      achievements: ['Campioană Națională 2019', 'Coach certificat IFSC'],
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      social: { email: 'maria@skaiurbancrag.ro' }
    },
    {
      name: 'Alexandru Radu',
      role: 'Route Setter',
      description: 'Alex creează trasee creative care provoacă și inspiră escaladori de toate nivelurile.',
      specialization: ['Route setting', 'Boulder'],
      achievements: ['Setter la competiții naționale', '500+ trasee create'],
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      social: { email: 'alex@skaiurbancrag.ro' }
    },
    {
      name: 'Elena Marinescu',
      role: 'Instructor Yoga',
      description: 'Elena combină yoga cu escalada pentru a oferi o experiență holistică.',
      specialization: ['Yoga pentru climbers', 'Flexibilitate'],
      achievements: ['RYT-500', 'Specialist mobilitate'],
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      social: { email: 'elena@skaiurbancrag.ro' }
    },
    {
      name: 'Mihai Constantin',
      role: 'Kids Program Director',
      description: 'Mihai face ca fiecare copil să se îndrăgostească de escaladă prin joc și aventură.',
      specialization: ['Programe copii', 'Pedagogie sportivă'],
      achievements: ['500+ copii antrenați', 'Metodologie proprie'],
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      social: { email: 'mihai@skaiurbancrag.ro' }
    },
    {
      name: 'Diana Popa',
      role: 'Community Manager',
      description: 'Diana se asigură că toți membrii SKAI se simt ca acasă.',
      specialization: ['Evenimente', 'Comunitate'],
      achievements: ['100+ evenimente organizate', 'SKAI Family creator'],
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
      social: { email: 'diana@skaiurbancrag.ro' }
    }
  ]

  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pasiune',
      description: 'Trăim și respirăm escaladă în fiecare zi'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Comunitate',
      description: 'Construim legături puternice prin aventuri comune'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Siguranță',
      description: 'Prioritatea numărul unu în tot ce facem'
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Excelență',
      description: 'Ne străduim să fim cei mai buni în tot ce facem'
    }
  ]

  const milestones = [
    { year: '2015', event: 'Fondarea SKAI Urban Crag', icon: '🎯' },
    { year: '2017', event: 'Prima competiție națională găzduită', icon: '🏆' },
    { year: '2019', event: 'Lansarea programului SKAI Kids', icon: '👶' },
    { year: '2020', event: 'Extindere la 1000mp', icon: '📏' },
    { year: '2022', event: '10.000 membri activi', icon: '🎉' },
    { year: '2023', event: 'Parteneriat internațional IFSC', icon: '🌍' }
  ]

  const stats = [
    { number: '8+', label: 'Ani de experiență' },
    { number: '15+', label: 'Profesioniști dedicați' },
    { number: '10k+', label: 'Membri fericiți' },
    { number: '500+', label: 'Evenimente organizate' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Users className="w-10 h-10" />
              <span className="text-orange-200 text-xl">Echipa SKAI</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Oamenii din Spatele Aventurii
            </h1>
            <p className="text-xl text-orange-50 mb-8 max-w-3xl mx-auto">
              O echipă de profesioniști pasionați care transformă SKAI într-un loc special. 
              Cunoaște oamenii care fac posibilă fiecare experiență memorabilă.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-orange-600">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Valorile Noastre
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Echipa Noastră
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Profesioniști dedicați care împărtășesc aceeași pasiune pentru escaladă și dezvoltare personală
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-orange-300 font-medium">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializări:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialization.map((spec, idx) => (
                        <span key={idx} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Realizări:</h4>
                    <ul className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <Award className="w-4 h-4 text-orange-500" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <a
                      href={`mailto:${member.social.email}`}
                      className="flex items-center space-x-2 text-orange-600 hover:text-orange-700"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm font-medium">Contactează</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Povestea Noastră
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-orange-100 rounded-full p-4 text-3xl">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1 bg-white rounded-xl shadow-md p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{milestone.event}</h3>
                        <p className="text-orange-600 font-medium">{milestone.year}</p>
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="hidden md:block">
                          <Zap className="w-6 h-6 text-orange-400" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="text-center mb-8">
              <Mountain className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Misiunea Noastră
              </h2>
            </div>
            
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-gray-700 mb-6">
                Să creăm cel mai vibrant și incluziv spațiu de escaladă din România, 
                unde fiecare persoană poate descoperi puterea interioară, 
                poate depăși limite și poate face parte dintr-o comunitate extraordinară.
              </p>
              <p className="text-lg text-gray-600">
                Credem că escalada este mai mult decât un sport - 
                este o cale spre dezvoltare personală, încredere și conexiuni autentice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Vrei să Faci Parte din Echipa SKAI?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Suntem mereu în căutare de oameni pasionați care vor să inspire și să ajute alții să descopere magia escaladei
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/skaiurbancrag/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              Vezi Pozițiile Deschise
            </Link>
            <a
              href="mailto:careers@skaiurbancrag.ro"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Trimite CV-ul Tău
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EchipaPage