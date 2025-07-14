import Link from 'next/link'
import { Brain, Heart, Users, Award, ArrowRight, CheckCircle, Star, Clock, Shield } from 'lucide-react'

export default function HomePage() {
  const services = [
    {
      icon: Brain,
      title: 'Psihoterapie Cognitiv-Comportamentală',
      description: 'Abordare științifică pentru tratarea anxietății, depresiei și altor tulburări psihologice.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Heart,
      title: 'Consiliere Psihologică',
      description: 'Suport profesional pentru dezvoltare personală și gestionarea provocărilor vieții.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-100'
    },
    {
      icon: Users,
      title: 'Terapie de Cuplu și Familie',
      description: 'Îmbunătățirea relațiilor și rezolvarea conflictelor într-un mediu sigur.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Award,
      title: 'Evaluare Psihologică',
      description: 'Evaluări comprehensive pentru diagnostic clinic și planificare terapeutică.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ]

  const benefits = [
    'Abordare personalizată pentru fiecare client',
    'Metode validate științific',
    'Confidențialitate absolută',
    'Experiență clinică vastă',
    'Atmosferă caldă și primitoare',
    'Rezultate măsurabile'
  ]

  const testimonials = [
    {
      text: 'Cristina m-a ajutat să depășesc o perioadă foarte dificilă din viața mea. Profesionalismul și empatia ei au făcut diferența.',
      author: 'Maria D.',
      rating: 5
    },
    {
      text: 'Recomand cu încredere! Terapia cognitiv-comportamentală m-a ajutat să înțeleg și să schimb tiparele negative de gândire.',
      author: 'Alexandru P.',
      rating: 5
    },
    {
      text: 'Un psiholog dedicat și profesionist. M-a ajutat să îmi gestionez anxietatea și să îmi recâștig încrederea în mine.',
      author: 'Elena S.',
      rating: 5
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Brain className="h-12 w-12 text-white" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Găsește-ți echilibrul interior
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto font-light">
              Cabinet de psihologie clinică și psihoterapie cognitiv-comportamentală
            </p>
            
            <blockquote className="text-lg text-white/90 italic max-w-2xl mx-auto">
              &ldquo;Calitatea vieții depinde de relațiile cu cei din jur, dar mai ales de relația cu noi înșine.&rdquo;
            </blockquote>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Link href="/psihologcristinapopa/contact#programare" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
                Programează o consultație
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/psihologcristinapopa/servicii" 
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
                Descoperă serviciile
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">
                Cristina Popa
              </h2>
              <div className="space-y-2">
                <p className="text-xl text-purple-600 font-semibold">Psiholog Clinician</p>
                <p className="text-lg text-gray-600">Psihoterapeut Cognitiv-Comportamental</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Cu o experiență bogată în domeniul psihologiei clinice, sunt dedicată să ofer suport 
                profesional persoanelor care se confruntă cu provocări emoționale și psihologice. 
                Abordarea mea se bazează pe empatie, respect și metode terapeutice validate științific.
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-gray-600">Atestat de liberă practică</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-gray-600">Formare continuă</span>
                </div>
              </div>
              <Link href="/psihologcristinapopa/despre" 
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold">
                Află mai multe despre mine
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-pink-100 shadow-2xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Brain className="h-24 w-24 text-purple-300 mx-auto mb-4" />
                    <p className="text-purple-600 font-semibold">Cabinet de Psihologie</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-6 rounded-xl shadow-xl">
                <p className="text-3xl font-bold">10+</p>
                <p className="text-sm">Ani de experiență</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicii Specializate</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Oferim o gamă completă de servicii psihologice adaptate nevoilor tale individuale
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} 
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className={`inline-flex p-4 ${service.bgColor} rounded-xl mb-6`}>
                    <Icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link href="/psihologcristinapopa/servicii" 
                    className={`inline-flex items-center ${service.color} hover:underline font-semibold`}>
                    Află mai multe
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">De ce să ne alegi?</h2>
            <p className="text-xl text-purple-100">Angajamentul nostru pentru bunăstarea ta</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-200 flex-shrink-0 mt-0.5" />
                <span className="text-white text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ce spun clienții</h2>
            <p className="text-xl text-gray-600">Povești de transformare și vindecare</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.text}&rdquo;</p>
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Fă primul pas către o viață mai echilibrată
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Suntem aici să te sprijinim în călătoria ta către bunăstare emoțională
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/psihologcristinapopa/contact#programare" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200 transform hover:scale-105 shadow-xl">
              <Clock className="mr-2 h-5 w-5" />
              Programează acum
            </Link>
            <Link href="/psihologcristinapopa/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200">
              Contactează-ne
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}