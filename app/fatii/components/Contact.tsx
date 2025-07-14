'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const locations = [
    {
      city: "București",
      address: "Str. Occidentului nr. 5, Sector 1",
      phone: "021 316 02 75"
    },
    {
      city: "Cluj-Napoca",
      address: "Str. Memorandumului nr. 28",
      phone: "0264 432 123"
    },
    {
      city: "Timișoara",
      address: "Bd. Mihai Viteazu nr. 34",
      phone: "0256 220 445"
    },
    {
      city: "Constanța",
      address: "Str. Mihai Eminescu nr. 56",
      phone: "0241 618 200"
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactează-ne
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Suntem aici să te ajutăm să îți construiești o carieră de succes în transporturi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trimite-ne un mesaj
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nume complet
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Ion Popescu"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="ion@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="0722 123 456"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Curs de interes
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selectează un curs</option>
                    <option value="manager-transport">Manager Transport</option>
                    <option value="sofer-marfa">Șofer Profesionist Marfă</option>
                    <option value="sofer-persoane">Șofer Profesionist Persoane</option>
                    <option value="instructor">Instructor Auto</option>
                    <option value="adr">Consilier ADR</option>
                    <option value="taxi">Taxi și Închiriere</option>
                    <option value="altul">Altul</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Spune-ne cum te putem ajuta..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
                >
                  <Send className="h-5 w-5" />
                  <span className="text-lg font-semibold">Trimite Mesajul</span>
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Informații de Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Telefon Principal</p>
                    <a href="tel:+40213160275" className="text-gray-600 hover:text-blue-600">
                      021 316 02 75
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:contact@fatii.ro" className="text-gray-600 hover:text-blue-600">
                      contact@fatii.ro
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Program</p>
                    <p className="text-gray-600">Luni - Vineri: 09:00 - 18:00</p>
                    <p className="text-gray-600">Sâmbătă: 09:00 - 13:00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Centre de Pregătire
              </h3>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div key={index} className="flex items-start space-x-3 pb-4 border-b border-gray-200 last:border-0">
                    <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">{location.city}</p>
                      <p className="text-sm text-gray-600">{location.address}</p>
                      <a href={`tel:${location.phone.replace(/\s/g, '')}`} className="text-sm text-blue-600 hover:text-blue-700">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}