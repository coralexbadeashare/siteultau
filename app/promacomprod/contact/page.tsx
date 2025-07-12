'use client'

import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to a server
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Adrese",
      details: [
        "Atelier: Str. Lombului, fn",
        "Sediu: Str. Calea Turzii, nr. 162-168A",
        "Cluj Napoca, România"
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: [
        "Fix: 0264-481744",
        "Mobil: 0744-525355"
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: [
        "promacomprod@yahoo.com"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Program",
      details: [
        "Luni - Vineri: 08:00 - 17:00",
        "Sâmbătă: 08:00 - 13:00",
        "Duminică: Închis"
      ]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-700 to-blue-600">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            Contact
          </h1>
          <p className="text-xl text-blue-100 text-center max-w-3xl mx-auto">
            Suntem aici pentru a vă ajuta. Contactați-ne pentru orice întrebare sau 
            pentru a solicita o ofertă personalizată
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Trimiteți-ne un Mesaj
              </h2>
              {isSubmitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6" />
                  <span>Mesajul a fost trimis cu succes! Vă vom contacta în curând.</span>
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
                        className="form-input"
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
                        className="form-input"
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
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subiect *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="form-input"
                      >
                        <option value="">Selectați un subiect</option>
                        <option value="oferta">Solicitare Ofertă</option>
                        <option value="urgenta">Reparație Urgentă</option>
                        <option value="intrebare">Întrebare Generală</option>
                        <option value="programare">Programare Service</option>
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
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Informații de Contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {info.title === "Telefon" || info.title === "Email" ? (
                              <a 
                                href={
                                  info.title === "Telefon" 
                                    ? `tel:${detail.replace(/[^\d]/g, '')}` 
                                    : `mailto:${detail}`
                                } 
                                className="hover:text-blue-700 transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency CTA */}
              <div className="mt-8 bg-gradient-to-r from-red-600 to-red-500 rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Urgențe 24/7</h3>
                <p className="mb-4">Pentru situații urgente, sunați direct:</p>
                <a 
                  href="tel:0744525355" 
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold inline-flex items-center hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  0744-525355
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Locațiile Noastre
            </h2>
            <p className="text-gray-600">
              Avem două locații în Cluj-Napoca pentru a vă servi mai bine
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Atelier Principal</h3>
              <p className="text-gray-600 mb-4">Str. Lombului, fn, Cluj Napoca</p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sediu Administrativ</h3>
              <p className="text-gray-600 mb-4">Str. Calea Turzii, nr. 162-168A, Cluj Napoca</p>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}