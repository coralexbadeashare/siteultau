'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageSquare } from 'lucide-react'
import Link from 'next/link'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Adresă',
      details: ['Strada Frunzișului 106', 'Cluj-Napoca 400664', 'România'],
      action: { text: 'Vezi pe hartă', link: '#map' }
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Telefon',
      details: ['+40 742 325 429', 'Luni - Vineri: 9:00 - 21:00', 'Weekend: 10:00 - 18:00'],
      action: { text: 'Sună acum', link: 'tel:+40742325429' }
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@skaiurbancrag.ro', 'Răspundem în 24 ore'],
      action: { text: 'Trimite email', link: 'mailto:info@skaiurbancrag.ro' }
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Program',
      details: ['L-V: 16:00 - 22:00', 'S-D: 15:00 - 19:00', 'Sărbători: Închis'],
      action: { text: 'Vezi programul complet', link: '/skaiurbancrag/program' }
    }
  ]

  const quickLinks = [
    { title: 'Vreau să încep escalada', link: '/skaiurbancrag/cursuri/initiere' },
    { title: 'Prețuri și abonamente', link: '/skaiurbancrag/tarife' },
    { title: 'Cursuri pentru copii', link: '/skaiurbancrag/cursuri/copii' },
    { title: 'Organizez o petrecere', link: '/skaiurbancrag/skai-kids/petreceri' },
    { title: 'Evenimente și competiții', link: '/skaiurbancrag/evenimente' },
    { title: 'Echipa noastră', link: '/skaiurbancrag/echipa' }
  ]

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-orange-50 max-w-3xl">
            Ai întrebări? Vrei să te înscrii la un curs? Suntem aici să te ajutăm să începi aventura escaladei!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="bg-orange-100 rounded-lg p-3 w-fit mb-4 text-orange-600">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <a
                  href={info.action.link}
                  className="text-orange-600 hover:text-orange-700 font-medium text-sm"
                >
                  {info.action.text} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Links */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Trimite-ne un Mesaj
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subiect *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Selectează un subiect</option>
                      <option value="info">Informații generale</option>
                      <option value="cursuri">Cursuri și antrenamente</option>
                      <option value="abonamente">Abonamente și prețuri</option>
                      <option value="evenimente">Evenimente și competiții</option>
                      <option value="petreceri">Petreceri aniversare</option>
                      <option value="corporate">Evenimente corporate</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Spune-ne cum te putem ajuta..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    * Câmpuri obligatorii
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-semibold"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Trimite Mesajul
                  </button>
                </div>
              </form>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Linkuri Rapide
              </h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.link}
                    className="block bg-gray-50 rounded-lg p-4 hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-gray-900 font-medium">{link.title}</span>
                    <span className="text-orange-600 text-sm block mt-1">Vezi detalii →</span>
                  </Link>
                ))}
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Urmărește-ne
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/skaiurbancrag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://instagram.com/skaiurbancrag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-600 text-white p-3 rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://wa.me/40742325429"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Unde Ne Găsești
          </h2>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              {/* Map placeholder - in production, integrate with Google Maps or similar */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.4887997168!2d23.608722!3d46.7833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ3JzAwLjAiTiAyM8KwMzYnMzEuNCJF!5e0!3m2!1sen!2sro!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[500px]"
              />
            </div>
            
            <div className="p-6 bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Transport Public</h3>
                  <p className="text-gray-600">
                    Autobuz: 24, 25, 26B<br />
                    Stație: Frunzișului
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parcare</h3>
                  <p className="text-gray-600">
                    Parcare gratuită disponibilă<br />
                    50+ locuri
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Repere</h3>
                  <p className="text-gray-600">
                    Lângă Dedeman<br />
                    Vizavi de OMV
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Întrebări Frecvente
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900">
                Pot veni să încerc escalada fără experiență?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Absolut! Oferim ședințe de inițiere pentru începători și tot echipamentul necesar. 
                Instructorii noștri te vor ghida pas cu pas.
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900">
                Ce trebuie să aduc cu mine?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Doar haine sportive confortabile și apă. Noi îți punem la dispoziție încălțăminte 
                de escaladă, ham și toate cele necesare.
              </div>
            </details>
            
            <details className="bg-white rounded-lg shadow-md">
              <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900">
                De la ce vârstă pot escalada copiii?
              </summary>
              <div className="px-6 pb-4 text-gray-600">
                Acceptăm copii de la 4 ani în sus. Avem programe special adaptate pentru 
                fiecare grupă de vârstă și instructori specializați pe lucrul cu copiii.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Pregătit să Începi Aventura?
          </h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            Nu ezita să ne contactezi pentru orice întrebare. Suntem aici să te ajutăm!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+40742325429"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Sună Acum: 0742 325 429
            </a>
            <a
              href="https://wa.me/40742325429"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur text-white border-2 border-white/30 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactPage