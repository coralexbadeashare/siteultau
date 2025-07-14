import { GraduationCap, Award, BookOpen, Users, Calendar, CheckCircle } from 'lucide-react'

export default function StudiiPage() {
  const educationTimeline = [
    {
      year: '2008-2011',
      title: 'Licență în Psihologie',
      institution: 'Universitatea Babeș-Bolyai, Cluj-Napoca',
      description: 'Facultatea de Psihologie și Științe ale Educației',
      achievements: [
        'Specializare în Psihologie Clinică',
        'Lucrare de licență: Impactul terapiei cognitiv-comportamentale în tratarea anxietății',
        'Media generală: 9.50'
      ]
    },
    {
      year: '2011-2013',
      title: 'Master în Psihologie Clinică',
      institution: 'Universitatea Babeș-Bolyai, Cluj-Napoca',
      description: 'Program acreditat de Colegiul Psihologilor din România',
      achievements: [
        'Specializare în evaluare și intervenție psihologică',
        'Practică clinică supervizată - 500 ore',
        'Disertație: Eficiența intervențiilor cognitive în tulburările de dispoziție'
      ]
    },
    {
      year: '2013-2016',
      title: 'Formare în Psihoterapie Cognitiv-Comportamentală',
      institution: 'Asociația de Terapie Cognitiv-Comportamentală din România',
      description: 'Program de formare acreditat internațional',
      achievements: [
        '750 ore de formare teoretică și practică',
        'Supervizare individuală și de grup',
        'Certificare ca psihoterapeut cognitiv-comportamental'
      ]
    }
  ]

  const continuousEducation = [
    {
      year: '2023',
      courses: [
        'Terapia de cuplu - abordări moderne',
        'Mindfulness în practica clinică',
        'Trauma și reziliență'
      ]
    },
    {
      year: '2022',
      courses: [
        'Terapia schemelor - nivel avansat',
        'Intervenții în criză și urgențe psihologice',
        'Psihoterapie online - bune practici'
      ]
    },
    {
      year: '2021',
      courses: [
        'ACT - Terapia acceptării și angajamentului',
        'Tehnici de relaxare și managementul stresului',
        'Evaluare psihologică computerizată'
      ]
    },
    {
      year: '2020',
      courses: [
        'COVID-19: Impactul psihologic și intervenții',
        'Terapia cognitiv-comportamentală pentru tulburări de somn',
        'Supervizare în psihoterapie'
      ]
    }
  ]

  const certifications = [
    {
      icon: Award,
      title: 'Psiholog Clinician Principal',
      issuer: 'Colegiul Psihologilor din România',
      date: '2018',
      details: 'Atestat de liberă practică în psihologie clinică'
    },
    {
      icon: Award,
      title: 'Psihoterapeut Cognitiv-Comportamental',
      issuer: 'Federația Română de Psihoterapie',
      date: '2016',
      details: 'Certificare în psihoterapie cognitiv-comportamentală'
    },
    {
      icon: Award,
      title: 'Formator în Psihologie',
      issuer: 'Autoritatea Națională pentru Calificări',
      date: '2019',
      details: 'Certificat de formator pentru programe de dezvoltare profesională'
    }
  ]

  const workshops = [
    'Workshop internațional: "Noi direcții în terapia cognitiv-comportamentală" - Barcelona, 2022',
    'Conferința Națională de Psihologie Clinică - București, 2021',
    'Simpozion: "Sănătate mentală în era digitală" - Cluj-Napoca, 2023',
    'Training: "EMDR în tratamentul traumei" - București, 2020',
    'Curs: "Terapia bazată pe compasiune" - Online, 2021'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Studii și Formare
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              O călătorie continuă de învățare și dezvoltare profesională
            </p>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Parcurs Academic</h2>
            <p className="text-xl text-gray-600">Educație solidă în domeniul psihologiei clinice</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {educationTimeline.map((item, index) => (
              <div key={index} className="relative">
                {index !== educationTimeline.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-0.5 bg-purple-200"></div>
                )}
                
                <div className="flex items-start mb-12">
                  <div className="flex-shrink-0 w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="ml-6 flex-grow">
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                        <span className="text-purple-600 font-medium">{item.year}</span>
                      </div>
                      <p className="text-gray-700 font-medium mb-2">{item.institution}</p>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certificări Profesionale</h2>
            <p className="text-xl text-gray-600">Acreditări și atestări în domeniul psihologiei</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <Icon className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
                  <p className="text-purple-600 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                  <p className="text-gray-600 text-sm">{cert.details}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Continuous Education */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Formare Continuă</h2>
            <p className="text-xl text-gray-600">Actualizare constantă a cunoștințelor și competențelor</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {continuousEducation.map((yearData, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{yearData.year}</h3>
                </div>
                <ul className="space-y-2">
                  {yearData.courses.map((course, courseIndex) => (
                    <li key={courseIndex} className="flex items-start">
                      <BookOpen className="h-4 w-4 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{course}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops & Conferences */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Workshop-uri și Conferințe</h2>
            <p className="text-xl text-gray-600">Participare activă în comunitatea profesională</p>
          </div>

          <div className="max-w-4xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
            <ul className="space-y-4">
              {workshops.map((workshop, index) => (
                <li key={index} className="flex items-start">
                  <Users className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{workshop}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Experiență bazată pe educație solidă
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Formarea continuă ne permite să oferim cele mai eficiente metode terapeutice
          </p>
          <a href="/psihologcristinapopa/servicii" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Descoperă serviciile noastre
          </a>
        </div>
      </section>
    </div>
  )
}