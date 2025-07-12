'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Car,
  MessageSquare,
  Calendar
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    service: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        service: '',
        message: ''
      })
    }, 3000)
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
      title: "Adresă",
      content: ["Str. Industriei Nr. 25", "București, Sector 3"],
      link: "https://maps.google.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Telefon",
      content: ["0721 234 567", "031 123 4567"],
      link: "tel:+40721234567"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: ["contact@jpxpaintcar.ro", "programari@jpxpaintcar.ro"],
      link: "mailto:contact@jpxpaintcar.ro"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Program",
      content: ["Luni - Vineri: 08:00 - 18:00", "Sâmbătă: 09:00 - 14:00"],
      link: null
    }
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=1600&h=600&fit=crop"
          alt="Contact JPX Paint Car"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative z-10 container mx-auto px-4 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Contact</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Suntem aici pentru a-ți transforma visul în realitate
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-orange-600 rounded-xl flex items-center justify-center text-white mb-6">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.content.map((line, idx) => (
                    <p key={idx} className="text-gray-600">
                      {info.link && idx === 0 ? (
                        <a href={info.link} className="hover:text-red-600 transition-colors">
                          {line}
                        </a>
                      ) : (
                        line
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Solicită o Ofertă
              </h2>
              <p className="text-gray-600 mb-8">
                Completează formularul și te vom contacta în cel mai scurt timp posibil.
              </p>

              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    Mulțumim pentru mesaj!
                  </h3>
                  <p className="text-gray-600">
                    Te vom contacta în curând.
                  </p>
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
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
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="email@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                      Model Mașină
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="carModel"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                        placeholder="BMW Seria 5, 2020"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu Dorit
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                    >
                      <option value="">Selectează un serviciu</option>
                      <option value="vopsire-completa">Vopsire Completă</option>
                      <option value="retusuri">Retușuri și Reparații</option>
                      <option value="protectie-ceramica">Protecție Ceramică</option>
                      <option value="folie-protectie">Folie de Protecție</option>
                      <option value="polish">Polish și Detailing</option>
                      <option value="evaluare">Doar Evaluare</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                      placeholder="Descrie ce dorești să realizăm pentru mașina ta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-red-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-red-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Trimite Cererea</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-full min-h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&h=600&fit=crop"
                  alt="Locație JPX Paint Car"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Vizitează-ne la Atelier
                  </h3>
                  <p className="text-white/90 mb-4">
                    Te așteptăm pentru o evaluare gratuită și consultanță personalizată
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all inline-flex items-center space-x-2 self-start"
                  >
                    <MapPin className="w-5 h-5" />
                    <span>Vezi pe Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Modalități Rapide de Contact
            </h2>
            <p className="text-xl text-gray-600">
              Alege metoda care ți se potrivește cel mai bine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <a 
              href="tel:+40721234567"
              className="bg-gradient-to-br from-red-600 to-orange-600 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sună Direct</h3>
              <p className="opacity-90">Răspundem imediat în timpul programului</p>
            </a>

            <a 
              href="https://wa.me/40721234567"
              className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
            >
              <MessageSquare className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="opacity-90">Trimite-ne poze cu mașina ta</p>
            </a>

            <a 
              href="#calendar"
              className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-8 text-center hover:shadow-xl transition-all transform hover:scale-105"
            >
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Programare Online</h3>
              <p className="opacity-90">Alege ziua și ora care ți se potrivește</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Întrebări Frecvente despre Programări
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Pot obține o estimare de preț prin telefon?
                </h3>
                <p className="text-gray-700">
                  Da, pentru lucrări simple putem oferi o estimare orientativă. Pentru o ofertă exactă, 
                  recomandăm o evaluare la atelier sau trimiterea unor fotografii pe WhatsApp.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Oferă servicii de transport/ridicare auto?
                </h3>
                <p className="text-gray-700">
                  Da, pentru lucrări majore putem asigura transportul vehiculului. Costul variază în funcție de distanță.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Care este timpul de așteptare pentru o programare?
                </h3>
                <p className="text-gray-700">
                  În general, putem programa evaluări în 1-2 zile lucrătoare. Pentru lucrări, timpul depinde de complexitate și disponibilitate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}