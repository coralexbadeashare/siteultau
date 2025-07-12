'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Facebook,
  Instagram,
  Youtube,
  Car,
  Users,
  Dumbbell,
  Calendar
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    goal: '',
    experience: '',
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
        goal: '',
        experience: '',
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

  const facilities = [
    {
      icon: <Dumbbell className="w-6 h-6" />,
      title: "Sala Principală",
      description: "2000+ mp echipamente premium"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Săli Clase Grup",
      description: "3 săli dedicate pentru clase"
    },
    {
      icon: <Car className="w-6 h-6" />,
      title: "Parcare Gratuită",
      description: "100+ locuri pentru membri"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Deschis 7/7",
      description: "Program extins pentru flexibilitate"
    }
  ]

  return (
    <div className="bg-black pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=600&fit=crop"
          alt="Old Gym Contact"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-bebas text-6xl md:text-8xl text-white mb-4">Contact</h1>
          <p className="text-xl md:text-2xl text-amber-500 font-bold">
            Suntem Aici Pentru Tine
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Adresă</h3>
              <p className="text-gray-400">
                Str. Victoriei Nr. 45<br />
                Cluj-Napoca, Cluj<br />
                România
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 text-amber-500 hover:text-amber-400 transition-colors"
              >
                Vezi pe hartă →
              </a>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Telefon</h3>
              <p className="text-gray-400 space-y-2">
                <a href="tel:+40745123456" className="block hover:text-amber-500 transition-colors">
                  0745 123 456
                </a>
                <a href="tel:+40264123456" className="block hover:text-amber-500 transition-colors">
                  0264 123 456
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Luni-Vineri: 8:00-21:00
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email</h3>
              <p className="text-gray-400 space-y-2">
                <a href="mailto:contact@oldgym.ro" className="block hover:text-amber-500 transition-colors">
                  contact@oldgym.ro
                </a>
                <a href="mailto:info@oldgym.ro" className="block hover:text-amber-500 transition-colors">
                  info@oldgym.ro
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Răspuns în 24h
              </p>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 text-center hover:bg-gray-800 transition-colors">
              <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-amber-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Program</h3>
              <div className="text-gray-400 space-y-1 text-sm">
                <p>Luni - Vineri: 06:00 - 22:00</p>
                <p>Sâmbătă: 08:00 - 20:00</p>
                <p>Duminică: 09:00 - 18:00</p>
              </div>
              <p className="text-sm text-amber-500 mt-4">
                Membri Elite: Acces 24/7
              </p>
            </div>
          </div>

          {/* Contact Form & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Programează o <span className="gradient-text">Vizită</span>
              </h2>
              <p className="text-gray-400 mb-8">
                Completează formularul și te vom contacta în maxim 24 de ore pentru a programa un tur gratuit al sălii.
              </p>

              {isSubmitted ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Mulțumim pentru mesaj!
                  </h3>
                  <p className="text-gray-400">
                    Te vom contacta în curând.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nume Complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="Ion Popescu"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                        Telefon *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                        placeholder="07XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="email@exemplu.ro"
                    />
                  </div>

                  <div>
                    <label htmlFor="goal" className="block text-sm font-medium text-gray-300 mb-2">
                      Obiectivul Tău Principal
                    </label>
                    <select
                      id="goal"
                      name="goal"
                      value={formData.goal}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selectează un obiectiv</option>
                      <option value="pierdere-greutate">Pierdere în greutate</option>
                      <option value="masa-musculara">Creștere masă musculară</option>
                      <option value="tonifiere">Tonifiere</option>
                      <option value="performanta">Performanță sportivă</option>
                      <option value="sanatate">Sănătate generală</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-300 mb-2">
                      Experiență Fitness
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                    >
                      <option value="">Selectează nivelul tău</option>
                      <option value="incepator">Începător (0-6 luni)</option>
                      <option value="intermediar">Intermediar (6 luni - 2 ani)</option>
                      <option value="avansat">Avansat (2+ ani)</option>
                      <option value="profesionist">Profesionist/Competitor</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Mesaj
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                      placeholder="Spune-ne mai multe despre obiectivele tale..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Trimite Cererea</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>

            {/* Map/Info Section */}
            <div className="space-y-8">
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=400&fit=crop"
                    alt="Old Gym Location"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Vizitează-ne la Sală
                      </h3>
                      <p className="text-gray-300">
                        Tur gratuit disponibil în fiecare zi
                      </p>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <Link 
                    href="https://maps.google.com" 
                    target="_blank" 
                    className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all inline-flex items-center"
                  >
                    <MapPin className="w-5 h-5 mr-2" />
                    Vezi pe Google Maps
                  </Link>
                </div>
              </div>

              <div className="bg-gray-900 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Facilități <span className="gradient-text">Premium</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {facilities.map((facility, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-red-600/20 to-amber-500/20 rounded-lg flex items-center justify-center text-amber-500 flex-shrink-0">
                        {facility.icon}
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{facility.title}</h4>
                        <p className="text-gray-400 text-sm">{facility.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-600 to-amber-500 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Urmărește-ne
                </h3>
                <p className="text-white/90 mb-6">
                  Fii la curent cu ultimele noutăți și evenimente
                </p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  >
                    <Youtube className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-bebas text-4xl text-white text-center mb-12">
              Întrebări Frecvente
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Am nevoie de experiență pentru a mă înscrie?
                </h3>
                <p className="text-gray-400">
                  Deloc! Suntem aici pentru toți, de la începători la atleți profesioniști. 
                  Antrenorii noștri te vor ghida pas cu pas.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Pot vizita sala înainte de a mă abona?
                </h3>
                <p className="text-gray-400">
                  Absolut! Oferim tur gratuit al sălii și o sesiune de probă pentru a experimenta 
                  atmosfera Old Gym.
                </p>
              </div>

              <div className="bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-2">
                  Ce trebuie să aduc la prima vizită?
                </h3>
                <p className="text-gray-400">
                  Doar echipament sportiv confortabil și o sticlă de apă. Prosopul este obligatoriu 
                  și îl poți închiria de la recepție dacă nu ai unul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}