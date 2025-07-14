'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Facebook, Instagram, Users } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const subjects = [
    'Comandă produse',
    'Servicii de presare',
    'Private label',
    'Parteneriat B2B',
    'Vizită la atelier',
    'Altele'
  ];

  const locations = [
    {
      title: 'Sediu Cluj-Napoca',
      address: 'Str. Principală nr. 123',
      city: 'Cluj-Napoca, Cluj',
      type: 'Birou & Showroom',
      features: ['Punct de vânzare', 'Consultanță', 'Degustări']
    },
    {
      title: 'Atelier Producție Berindu',
      address: 'Str. Livezilor nr. 45',
      city: 'Berindu, Cluj',
      type: 'Producție & Depozit',
      features: ['Presare fructe', 'Producție', 'Preluare comenzi mari']
    }
  ];

  const team = [
    {
      name: 'Dorina Pop',
      role: 'Co-fondator',
      phone: '0744 555 666',
      email: 'dorina@amillaria.ro',
      specialty: 'Producție și Rețete'
    },
    {
      name: 'Sorin Pop',
      role: 'Co-fondator',
      phone: '0744 777 888',
      email: 'sorin@amillaria.ro',
      specialty: 'Parteneriate și Dezvoltare'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 pt-32 bg-gradient-to-br from-green-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contactează-ne</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suntem aici să răspundem întrebărilor tale și să găsim împreună 
            cele mai bune soluții pentru nevoile tale
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-orange-50 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                    <p className="text-green-600">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{member.specialty}</p>
                <div className="space-y-2">
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                    <Phone className="w-4 h-4" />
                    <span>{member.phone}</span>
                  </a>
                  <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-gray-700 hover:text-green-600">
                    <Mail className="w-4 h-4" />
                    <span>{member.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Urmărește-ne pe Social Media
            </h2>
            <div className="flex justify-center gap-4">
              <a
                href="https://facebook.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Locațiile Noastre
            </h2>
            <p className="text-gray-600">
              Două locații pentru a te servi mai bine
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-green-100 to-orange-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-24 h-24 text-green-600/20" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{location.title}</h3>
                  <p className="text-green-600 font-medium mb-4">{location.type}</p>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-700">{location.address}</p>
                    <p className="text-gray-700">{location.city}</p>
                  </div>
                  <div className="space-y-1">
                    {location.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Program de Lucru</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Luni - Vineri: 09:00 - 18:00</p>
                  <p>Sâmbătă: 09:00 - 14:00 (doar magazin Cluj)</p>
                  <p>Duminică: Închis</p>
                  <p className="text-sm text-gray-600 mt-2">
                    * Pentru preluare comenzi mari, programul poate fi flexibil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Trimite-ne un Mesaj
              </h2>
              <p className="text-gray-600">
                Completează formularul și te vom contacta în cel mai scurt timp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-gray-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Ion Popescu"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="email@exemplu.ro"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0744 123 456"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Selectează subiectul</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mb-6">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Spune-ne cum te putem ajuta..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 mb-6">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-green-800 font-medium">Mesaj trimis cu succes!</p>
                    <p className="text-green-700 text-sm">Te vom contacta în cel mai scurt timp posibil.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-red-800 font-medium">A apărut o eroare!</p>
                    <p className="text-red-700 text-sm">Te rugăm să încerci din nou sau să ne contactezi telefonic.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-green-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Se trimite...
                  </>
                ) : (
                  <>
                    Trimite Mesajul
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87566.89709726067!2d23.5219!3d46.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9c91324fef%3A0x30af90fd8dc2d5f6!2sCluj-Napoca%2C%20Romania!5e0!3m2!1sen!2sro!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>

      <Footer />
    </>
  );
}