'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  ArrowLeft,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Car,
  Facebook,
  Instagram
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
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
        service: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      details: ["0742 020 254"],
      action: "tel:0742020254"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["contact@welmius.ro"],
      action: "mailto:contact@welmius.ro"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Program",
      details: [
        "Luni - Vineri: 08:00 - 18:00",
        "Sâmbătă: 08:00 - 14:00",
        "Duminică: Închis",
        "Urgențe 24/7"
      ]
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Locație",
      details: ["Cluj-Napoca", "și împrejurimi"]
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-500 to-orange-600 py-16">
        <div className="container mx-auto px-4">
          <Link href="/welmius" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Suntem aici să te ajutăm. Contactează-ne pentru orice întrebare sau pentru a rezerva serviciile noastre.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Trimite-ne un Mesaj
              </h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Mesajul a fost trimis cu succes! Te vom contacta în curând.</span>
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
                        placeholder="Ion Popescu"
                      />
                    </div>
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
                        className="form-input"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu Dorit *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-input"
                    >
                      <option value="">Selectează un serviciu</option>
                      <option value="inchiriere-remorca">Închiriere Remorcă</option>
                      <option value="tractare-auto">Tractare Auto</option>
                      <option value="transport-marfa">Transport Marfă</option>
                      <option value="altele">Altele</option>
                    </select>
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
                      rows={5}
                      className="form-input resize-none"
                      placeholder="Descrie-ne cum te putem ajuta..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <Send className="w-5 h-5" />
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                          {info.title}
                        </h3>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {info.action ? (
                              <a 
                                href={info.action} 
                                className="hover:text-orange-600 transition-colors"
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

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-4">
                  <Car className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Urgențe 24/7</h3>
                </div>
                <p className="mb-6">
                  Pentru tractări de urgență sau situații neprevăzute, suntem disponibili non-stop.
                </p>
                <a 
                  href="tel:0742020254" 
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold inline-flex items-center hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Apelează Acum
                </a>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Urmărește-ne
                </h3>
                <p className="text-gray-600 mb-4">
                  Fii la curent cu ultimele noutăți și oferte speciale
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Zona de Acoperire
            </h2>
            <p className="text-xl text-gray-600">
              Oferim servicii în Cluj-Napoca și în toată zona metropolitană
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Hartă interactivă</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-center text-white">
            <MessageSquare className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Ai întrebări frecvente?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Consultă secțiunea noastră de informații utile pentru răspunsuri rapide
            </p>
            <Link href="/welmius/informatii-utile" className="btn-secondary bg-white text-orange-600">
              Vezi Întrebări Frecvente
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}