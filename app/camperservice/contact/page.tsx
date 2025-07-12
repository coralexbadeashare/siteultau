'use client'

import { useState } from 'react'
import Image from 'next/image'
import { 
  Phone, Mail, MapPin, Clock, Send, Facebook, 
  Instagram, CheckCircle, Wrench, Calendar
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  const services = [
    'Reparații și Întreținere',
    'Montaj Accesorii',
    'Verificări Tehnice',
    'Pregătire Sezonieră',
    'Consultanță Tehnică',
    'Altele'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920&h=600&fit=crop"
          alt="Contact CamperService"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Contactează-ne</h1>
              <p className="text-xl text-gray-200">
                Suntem aici să te ajutăm cu orice întrebare sau programare
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Telefon</h3>
              <a href="tel:+40745913161" className="text-blue-600 hover:text-blue-700 font-semibold">
                0745 913 161
              </a>
              <p className="text-sm text-gray-600 mt-1">Urgențe 24/7</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <a href="mailto:office@camperservice.ro" className="text-blue-600 hover:text-blue-700 font-semibold">
                office@camperservice.ro
              </a>
              <p className="text-sm text-gray-600 mt-1">Răspuns în 24h</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Locație</h3>
              <p className="text-gray-700">Cluj-Napoca, Strada Lombului</p>
              <p className="text-sm text-gray-600 mt-1">Ferma 23, Hala 4</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-all">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Program</h3>
              <p className="text-gray-700">Luni - Vineri: 9:00 - 18:00</p>
              <p className="text-sm text-gray-600 mt-1">Sâmbătă: 9:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Trimite-ne un Mesaj</h2>
              <p className="text-gray-600 mb-8">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Mulțumim pentru mesaj!
                  </h3>
                  <p className="text-green-700">
                    Te vom contacta în curând la datele furnizate.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Nume Complet *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Ion Popescu"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="0700 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Serviciu Dorit
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selectează un serviciu</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Descrie-ne cum te putem ajuta..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Trimite Mesajul</span>
                  </button>
                </form>
              )}

              {/* Quick Actions */}
              <div className="mt-12 grid md:grid-cols-2 gap-4">
                <a
                  href="tel:+40745913161"
                  className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex items-center space-x-3 transition-colors"
                >
                  <Phone className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold">Sună Direct</p>
                    <p className="text-sm text-gray-600">Pentru urgențe</p>
                  </div>
                </a>
                <button className="bg-gray-100 hover:bg-gray-200 rounded-lg p-4 flex items-center space-x-3 transition-colors text-left">
                  <Calendar className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-semibold">Programare Online</p>
                    <p className="text-sm text-gray-600">Alege data și ora</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Găsește-ne Pe Hartă</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-96 mb-8 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.0!2d23.6!3d46.77!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ2JzEyLjAiTiAyM8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                />
              </div>

              {/* Why Choose Us */}
              <div className="bg-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Wrench className="h-6 w-6 mr-2 text-blue-600" />
                  De Ce Să Ne Alegi?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Experiență de peste 10 ani în domeniu</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tehnicienii certificați și echipamente moderne</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Garanție pentru toate lucrările efectuate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Prețuri transparente și competitive</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Service mobil la locația ta (pentru anumite servicii)</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="mt-8">
                <h3 className="font-bold text-lg mb-4">Urmărește-ne Pe Social Media</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com/camperservicecluj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition-colors"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://instagram.com/camperservicecluj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white p-3 rounded-lg transition-all"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Întrebări Frecvente</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">
                Cât durează o revizie completă?
              </h3>
              <p className="text-gray-600">
                O revizie completă durează în medie 3-4 ore, în funcție de complexitatea vehiculului 
                și de problemele identificate. Pentru o estimare mai precisă, vă rugăm să ne contactați.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">
                Oferiți garanție pentru lucrări?
              </h3>
              <p className="text-gray-600">
                Da, oferim garanție pentru toate lucrările efectuate. Perioada de garanție variază 
                între 6 luni și 2 ani, în funcție de tipul lucrării și piesele folosite.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-bold text-lg mb-2">
                Pot programa online?
              </h3>
              <p className="text-gray-600">
                Momentan programările se fac telefonic sau prin formularul de contact. 
                Lucrăm la implementarea unui sistem de programări online care va fi disponibil în curând.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}