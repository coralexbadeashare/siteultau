'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Calendar, Send, CheckCircle, Facebook } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nume: '',
    email: '',
    telefon: '',
    serviciu: 'psihoterapie',
    mesaj: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSuccess(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        nume: '',
        email: '',
        telefon: '',
        serviciu: 'psihoterapie',
        mesaj: ''
      })
      setIsSuccess(false)
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: '0740 968 628',
      link: 'tel:0740968628',
      color: 'text-purple-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'psihologcristinapopa@gmail.com',
      link: 'mailto:psihologcristinapopa@gmail.com',
      color: 'text-pink-600'
    },
    {
      icon: MapPin,
      title: 'Locație',
      details: 'Cluj-Napoca, România',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Program',
      details: 'Luni - Vineri: 9:00 - 19:00',
      color: 'text-green-600'
    }
  ]

  const programInfo = [
    'Programările se fac telefonic sau prin email',
    'Prima consultație durează aproximativ 90 de minute',
    'Ședințele ulterioare durează 50 de minute',
    'Anulările sau reprogramările se fac cu minim 24 ore înainte',
    'Oferim și consultații online pentru clienții din afara orașului'
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.1%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Suntem aici pentru tine. Programează o consultație sau pune-ne o întrebare
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                  <Icon className={`h-10 w-10 ${info.color} mb-4`} />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-gray-600 hover:text-purple-600 transition-colors break-all">
                      {info.details}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.details}</p>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimite-ne un mesaj</h2>
              
              {isSuccess ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-gray-600">
                    Te vom contacta în cel mai scurt timp posibil.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="nume" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="nume"
                      required
                      value={formData.nume}
                      onChange={(e) => setFormData({ ...formData, nume: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="telefon"
                        value={formData.telefon}
                        onChange={(e) => setFormData({ ...formData, telefon: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviciu" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu dorit
                    </label>
                    <select
                      id="serviciu"
                      value={formData.serviciu}
                      onChange={(e) => setFormData({ ...formData, serviciu: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    >
                      <option value="psihoterapie">Psihoterapie Individuală</option>
                      <option value="consiliere">Consiliere Psihologică</option>
                      <option value="evaluare">Evaluare Psihologică</option>
                      <option value="cuplu">Terapie de Cuplu</option>
                      <option value="alte">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="mesaj"
                      rows={5}
                      value={formData.mesaj}
                      onChange={(e) => setFormData({ ...formData, mesaj: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
                      placeholder="Descrie pe scurt motivul pentru care dorești să ne contactezi..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-600 text-white py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span>Se trimite...</span>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Trimite mesajul
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Appointment Info */}
            <div id="programare" className="space-y-8">
              <div className="bg-purple-50 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-8 w-8 text-purple-600 mr-3" />
                  Informații Programări
                </h2>
                <ul className="space-y-3">
                  {programInfo.map((info, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{info}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Preferințe de contact
                </h3>
                <p className="text-gray-600 mb-6">
                  Pentru programări urgente, vă rugăm să ne contactați telefonic. 
                  Pentru întrebări generale sau programări ne puteți contacta prin email 
                  sau folosind formularul alăturat.
                </p>
                <div className="space-y-4">
                  <a href="tel:0740968628" 
                    className="flex items-center justify-center w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                    <Phone className="h-5 w-5 mr-2" />
                    Sună acum: 0740 968 628
                  </a>
                  <a href="https://www.facebook.com/psihologcristinapopa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook className="h-5 w-5 mr-2" />
                    Contactează-ne pe Facebook
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Prima consultație
                </h3>
                <p className="text-gray-700 mb-4">
                  Prima întâlnire este un moment important în care ne cunoaștem și stabilim 
                  împreună obiectivele terapeutice. Aceasta include:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Evaluare inițială comprehensivă
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Discutarea motivelor pentru care ai solicitat ajutor
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Stabilirea planului de tratament
                  </li>
                  <li className="flex items-center">
                    <span className="text-purple-600 mr-2">•</span>
                    Răspunsuri la toate întrebările tale
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unde ne găsești</h2>
            <p className="text-xl text-gray-600">Cabinet situat în zona centrală a orașului Cluj-Napoca</p>
          </div>
          <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Cluj-Napoca, România</p>
              <p className="text-sm text-gray-500 mt-2">Adresa exactă va fi comunicată după programare</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}