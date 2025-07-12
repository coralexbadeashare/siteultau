'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Facebook,
  Instagram,
  MessageCircle,
  ArrowLeft
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
        phone: '',
        email: '',
        message: ''
      })
    }, 3000)
  }

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="py-16 hero-gradient">
        <div className="container mx-auto px-4">
          <Link href="/oasis-expres" className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Înapoi la Acasă
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contactează-ne
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Suntem aici pentru a răspunde la toate întrebările tale. 
            Contactează-ne prin formularul de mai jos sau direct la telefon.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-card p-8">
              <h2 className="text-3xl font-bold text-white mb-8">
                Trimite-ne un Mesaj
              </h2>
              {isSubmitted ? (
                <div className="bg-green-500/20 border border-green-500/50 text-green-400 px-6 py-4 rounded-lg flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 flex-shrink-0" />
                  <span>Mesajul a fost trimis cu succes! Te vom contacta în curând.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="form-input"
                      placeholder="Introduceți numele"
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
                      className="form-input"
                      placeholder="07XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
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
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
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
                      placeholder="Scrieți mesajul dvs. aici..."
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
              {/* Direct Contact Card */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Contact Direct
                </h3>
                <div className="space-y-4">
                  <a 
                    href="tel:0772006156" 
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Telefon</p>
                      <p className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        0772 006 156
                      </p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:info@oasis-expres.ro" 
                    className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <p className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        info@oasis-expres.ro
                      </p>
                    </div>
                  </a>
                  
                  <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center text-white">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Program</p>
                      <p className="text-xl font-semibold text-white">
                        NON-STOP 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Urmărește-ne
                </h3>
                <p className="text-gray-400 mb-6">
                  Fii la curent cu ultimele noutăți și oferte speciale
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <a 
                    href="https://www.facebook.com/OasisExpresCarwash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-blue-600/20 transition-all group"
                  >
                    <Facebook className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">Facebook</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/oasis.expres.carwash/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-purple-600/20 transition-all group"
                  >
                    <Instagram className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">Instagram</span>
                  </a>
                  <a 
                    href="https://www.tiktok.com/@oasis.expres.carwash" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-4 bg-white/5 rounded-lg hover:bg-gray-600/20 transition-all group"
                  >
                    <MessageCircle className="w-8 h-8 text-white mb-2 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400">TikTok</span>
                  </a>
                </div>
              </div>

              {/* Happy Hour Card */}
              <div className="glass-card p-8 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Happy Hour Special
                </h3>
                <p className="text-gray-300 mb-4">
                  Profită de reducere de 20% la toate programele de spălare în intervalul:
                </p>
                <div className="text-3xl font-bold text-yellow-400">
                  22:00 - 08:00
                </div>
                <p className="text-sm text-gray-400 mt-2">
                  Valabil în fiecare zi a săptămânii
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}