'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Phone, MapPin, Clock, Car, Info, CheckCircle, ArrowRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: '',
    visitType: '',
    groupSize: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        visitDate: '',
        visitType: '',
        groupSize: '',
        message: ''
      })
    }, 5000)
  }

  const visitInfo = [
    {
      icon: Clock,
      title: "Program de Vizitare",
      details: [
        "Marți - Vineri: 9:00 - 18:00",
        "Sâmbătă - Duminică: 9:00 - 19:00",
        "Luni: Închis (întreținere)"
      ]
    },
    {
      icon: MapPin,
      title: "Locație",
      details: [
        "Strada Fermei Nr. 25",
        "Comuna Florești, Cluj",
        "La 15 minute de Cluj-Napoca"
      ]
    },
    {
      icon: Phone,
      title: "Contact Rapid",
      details: [
        "Tel: 0745 123 456",
        "WhatsApp disponibil",
        "Răspundem în 24h"
      ]
    },
    {
      icon: Car,
      title: "Acces și Parcare",
      details: [
        "Parcare gratuită",
        "Acces facil cu autocarul",
        "Stație transport public la 500m"
      ]
    }
  ]

  const priceInfo = [
    { type: "Vizită individuală", price: "25 lei/copil, 15 lei/adult" },
    { type: "Grupuri școlare (min. 15 pers)", price: "20 lei/copil" },
    { type: "Ateliere creative", price: "De la 40 lei/persoană" },
    { type: "Petreceri private", price: "De la 500 lei" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074"
          alt="Contact Ferma Pedagogică"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-green-900/40" />
        <div className="relative h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Vizitează-ne</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Planifică o zi minunată la fermă
            </p>
          </div>
        </div>
      </section>

      {/* Visit Info Cards */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visitInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                <ul className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div>
              <h2 className="text-3xl font-bold text-green-800 mb-6">Rezervă o Vizită</h2>
              <p className="text-gray-600 mb-8">
                Completează formularul și te vom contacta pentru confirmare în maximum 24 de ore.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Mulțumim pentru rezervare!</h3>
                  <p className="text-green-700">Te vom contacta curând cu detaliile vizitei.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nume Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Data Dorită *
                      </label>
                      <input
                        type="date"
                        id="visitDate"
                        name="visitDate"
                        value={formData.visitDate}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="visitType" className="block text-sm font-medium text-gray-700 mb-2">
                        Tip Vizită *
                      </label>
                      <select
                        id="visitType"
                        name="visitType"
                        value={formData.visitType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      >
                        <option value="">Selectează</option>
                        <option value="individual">Vizită Individuală/Familie</option>
                        <option value="scoala">Grup Școlar</option>
                        <option value="atelier">Atelier Creativ</option>
                        <option value="petrecere">Petrecere Privată</option>
                        <option value="tabara">Tabără</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="groupSize" className="block text-sm font-medium text-gray-700 mb-2">
                        Număr Persoane *
                      </label>
                      <input
                        type="number"
                        id="groupSize"
                        name="groupSize"
                        value={formData.groupSize}
                        onChange={handleChange}
                        required
                        min="1"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj / Cerințe Speciale
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      placeholder="Spune-ne mai multe despre vizita dorită..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all flex items-center justify-center ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-green-600 hover:bg-green-700 transform hover:scale-[1.02]'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Se trimite...
                      </>
                    ) : (
                      <>
                        Trimite Rezervarea
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Price Info */}
              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 mr-2 text-yellow-600" />
                  Informații Tarife
                </h3>
                <ul className="space-y-3">
                  {priceInfo.map((item, index) => (
                    <li key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{item.type}</span>
                      <span className="font-semibold text-green-600">{item.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  * Prețurile includ toate activitățile standard. Pentru programe personalizate, 
                  vă rugăm să ne contactați.
                </p>
              </div>

              {/* Important Info */}
              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Informații Importante
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Rezervările se fac cu minim 2 zile înainte
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Grupurile școlare beneficiază de reduceri
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Oferim facilități pentru persoane cu dizabilități
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Avem zonă de picnic și loc de joacă
                  </li>
                </ul>
              </div>

              {/* Contact Direct */}
              <div className="bg-white border-2 border-green-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Preferați să Sunați?
                </h3>
                <p className="text-gray-600 mb-4">
                  Suntem disponibili pentru întrebări și rezervări telefonice.
                </p>
                <a
                  href="tel:0745123456"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  0745 123 456
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">Cum Ajungi la Noi</h2>
            <p className="text-lg text-green-700 max-w-3xl mx-auto">
              Suntem ușor de găsit, la doar 15 minute de Cluj-Napoca
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2733.158!2d23.524!3d46.749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ0JzU2LjQiTiAyM8KwMzEnMjYuNCJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3">Din Cluj-Napoca</h3>
                <ol className="space-y-2 text-gray-600 text-sm">
                  <li>1. Ieșire spre Florești pe DN1</li>
                  <li>2. După 10km, virați dreapta la indicator</li>
                  <li>3. Continuați 2km pe drumul comunal</li>
                  <li>4. Ferma este pe partea stângă</li>
                </ol>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-gray-900 mb-3">Transport Public</h3>
                <p className="text-gray-600 text-sm">
                  Autobuz 28 până la stația Florești Centru, apoi 10 minute pe jos 
                  sau taxi local (5 lei).
                </p>
              </div>
              
              <div className="bg-green-100 rounded-xl p-6">
                <h3 className="font-bold text-green-800 mb-2">GPS Coordonate</h3>
                <p className="text-green-700 font-mono text-sm">
                  46.749000, 23.524000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
              Întrebări Frecvente
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  q: "Ce trebuie să aducem cu noi?",
                  a: "Recomandăm îmbrăcăminte confortabilă, încălțăminte închisă, pălărie și protecție solară vara. Apa potabilă este disponibilă la fermă."
                },
                {
                  q: "Se poate vizita ferma pe timp de ploaie?",
                  a: "Da, avem și spații acoperite. Însă recomandăm cizme de cauciuc și haine de ploaie pentru confort maxim."
                },
                {
                  q: "Sunt permise fotografiile?",
                  a: "Absolut! Încurajăm fotografiile pentru amintiri frumoase. Doar respectați intimitatea altor vizitatori."
                },
                {
                  q: "Aveți unde să mâncăm?",
                  a: "Avem o zonă de picnic unde puteți aduce mâncare proprie. De asemenea, oferim gustări și băuturi la cantina fermei."
                }
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <h3 className="font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-700">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}