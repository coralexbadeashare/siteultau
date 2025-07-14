import { Brain, Heart, Target, Shield, Sparkles, Award, CheckCircle } from 'lucide-react'

export default function CompetentePage() {
  const competencies = [
    {
      category: 'Competențe Clinice',
      icon: Brain,
      color: 'purple',
      skills: [
        {
          name: 'Evaluare Psihologică Clinică',
          level: 'Expert',
          description: 'Diagnostic diferențial folosind DSM-5 și instrumente standardizate'
        },
        {
          name: 'Psihoterapie Cognitiv-Comportamentală',
          level: 'Expert',
          description: 'Aplicarea protocoalelor CBT pentru diverse tulburări psihologice'
        },
        {
          name: 'Intervenție în Criză',
          level: 'Avansat',
          description: 'Management eficient al situațiilor de urgență psihologică'
        },
        {
          name: 'Terapia Schemelor',
          level: 'Avansat',
          description: 'Identificarea și modificarea schemelor cognitive disfuncționale'
        }
      ]
    },
    {
      category: 'Competențe Interpersonale',
      icon: Heart,
      color: 'pink',
      skills: [
        {
          name: 'Empatie și Ascultare Activă',
          level: 'Expert',
          description: 'Crearea unui mediu terapeutic sigur și suportiv'
        },
        {
          name: 'Comunicare Terapeutică',
          level: 'Expert',
          description: 'Transmiterea eficientă a informațiilor complexe'
        },
        {
          name: 'Alianță Terapeutică',
          level: 'Expert',
          description: 'Construirea și menținerea unei relații de încredere'
        },
        {
          name: 'Sensibilitate Culturală',
          level: 'Avansat',
          description: 'Adaptarea intervențiilor la diversitatea clienților'
        }
      ]
    },
    {
      category: 'Competențe Specializate',
      icon: Sparkles,
      color: 'blue',
      skills: [
        {
          name: 'Terapie de Cuplu',
          level: 'Avansat',
          description: 'Intervenții sistemice pentru probleme relaționale'
        },
        {
          name: 'Mindfulness și Relaxare',
          level: 'Avansat',
          description: 'Tehnici de conștientizare și reducere a stresului'
        },
        {
          name: 'Terapie Online',
          level: 'Avansat',
          description: 'Adaptarea practicii terapeutice la mediul digital'
        },
        {
          name: 'Psiho-educație',
          level: 'Expert',
          description: 'Dezvoltarea programelor educaționale pentru clienți'
        }
      ]
    }
  ]

  const areasOfExpertise = [
    {
      title: 'Tulburări de Anxietate',
      items: ['Anxietate generalizată', 'Atacuri de panică', 'Fobii specifice', 'Anxietate socială', 'Agorafobie'],
      icon: Shield
    },
    {
      title: 'Tulburări Afective',
      items: ['Depresie majoră', 'Distimie', 'Tulburare bipolară', 'Tulburări afective sezoniere'],
      icon: Heart
    },
    {
      title: 'Tulburări Legate de Traumă',
      items: ['PTSD', 'Stres acut', 'Tulburări de adaptare', 'Trauma complexă'],
      icon: Brain
    },
    {
      title: 'Dezvoltare Personală',
      items: ['Creșterea stimei de sine', 'Managementul stresului', 'Abilități de comunicare', 'Leadership personal'],
      icon: Target
    }
  ]

  const therapeuticApproaches = [
    {
      name: 'Terapie Cognitiv-Comportamentală (CBT)',
      description: 'Identificarea și modificarea gândurilor și comportamentelor disfuncționale'
    },
    {
      name: 'Terapia Acceptării și Angajamentului (ACT)',
      description: 'Dezvoltarea flexibilității psihologice și acceptării experiențelor dificile'
    },
    {
      name: 'Terapia Focalizată pe Emoții',
      description: 'Procesarea și integrarea experiențelor emoționale'
    },
    {
      name: 'Terapia Bazată pe Mindfulness',
      description: 'Cultivarea conștientizării momentului prezent'
    },
    {
      name: 'Terapia Integrativă',
      description: 'Combinarea elementelor din diferite abordări terapeutice'
    }
  ]

  const professionalValues = [
    {
      value: 'Confidențialitate',
      description: 'Respectarea strictă a intimității și informațiilor clienților'
    },
    {
      value: 'Competență',
      description: 'Menținerea standardelor înalte de practică profesională'
    },
    {
      value: 'Integritate',
      description: 'Onestitate și transparență în toate interacțiunile'
    },
    {
      value: 'Respect',
      description: 'Valorizarea unicității și demnității fiecărui client'
    },
    {
      value: 'Responsabilitate',
      description: 'Asumarea angajamentului față de bunăstarea clienților'
    },
    {
      value: 'Dezvoltare Continuă',
      description: 'Îmbunătățirea constantă a cunoștințelor și abilităților'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Competențe Profesionale
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Expertiză construită prin educație, practică și dedicare continuă
            </p>
          </div>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Competențe Cheie</h2>
            <p className="text-xl text-gray-600">Abilități dezvoltate pentru a oferi cel mai bun suport</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {competencies.map((category, index) => {
              const Icon = category.icon
              const bgColor = category.color === 'purple' ? 'bg-purple-50' : category.color === 'pink' ? 'bg-pink-50' : 'bg-blue-50'
              const iconColor = category.color === 'purple' ? 'text-purple-600' : category.color === 'pink' ? 'text-pink-600' : 'text-blue-600'
              
              return (
                <div key={index} className={`${bgColor} rounded-2xl p-8`}>
                  <div className="flex items-center mb-6">
                    <Icon className={`h-8 w-8 ${iconColor} mr-3`} />
                    <h3 className="text-2xl font-semibold text-gray-900">{category.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="bg-white rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900">{skill.name}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            skill.level === 'Expert' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">{skill.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Arii de Expertiză</h2>
            <p className="text-xl text-gray-600">Domenii în care oferim intervenții specializate</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areasOfExpertise.map((area, index) => {
              const Icon = area.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <Icon className="h-10 w-10 text-purple-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <ul className="space-y-1">
                    {area.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-20 bg-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Abordări Terapeutice</h2>
            <p className="text-xl text-gray-600">Metode validate științific pentru rezultate optime</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {therapeuticApproaches.map((approach, index) => (
              <div key={index} className="bg-white rounded-lg p-6 mb-4 shadow hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{approach.name}</h3>
                <p className="text-gray-600">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Valori Profesionale</h2>
            <p className="text-xl text-gray-600">Principiile care ghidează practica noastră</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {professionalValues.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.value}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Competențe puse în slujba ta
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Fiecare client beneficiază de întreaga noastră experiență și dedicare
          </p>
          <a href="/psihologcristinapopa/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
            Programează o consultație
          </a>
        </div>
      </section>
    </div>
  )
}