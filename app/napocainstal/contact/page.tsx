'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const services = [
    'Instalații Termice',
    'Instalații Sanitare',
    'Climatizare',
    'Urgență / Avarie',
    'Consultanță Tehnică',
    'Altele'
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
        service: '',
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

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: [
        { label: 'Birou', value: '0264 123 456' },
        { label: 'Mobil', value: '0744 123 456' },
        { label: 'Urgențe 24/7', value: '0744 123 456' }
      ]
    },
    {
      icon: Mail,
      title: 'Email',
      details: [
        { label: 'General', value: 'contact@napocainstal.ro' },
        { label: 'Ofertare', value: 'oferte@napocainstal.ro' },
        { label: 'Service', value: 'service@napocainstal.ro' }
      ]
    },
    {
      icon: MapPin,
      title: 'Adresă',
      details: [
        { label: 'Sediu', value: 'Str. Fabricii Nr. 123' },
        { label: 'Oraș', value: 'Cluj-Napoca, Cluj' },
        { label: 'Cod Poștal', value: '400123' }
      ]
    },
    {
      icon: Clock,
      title: 'Program',
      details: [
        { label: 'Luni - Vineri', value: '08:00 - 18:00' },
        { label: 'Sâmbătă', value: '09:00 - 14:00' },
        { label: 'Duminică', value: 'Închis' }
      ]
    }
  ];

  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Contactează-ne</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Suntem aici să te ajutăm cu toate nevoile tale de instalații. 
            Nu ezita să ne contactezi pentru orice întrebare sau ofertă.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, i) => (
                    <div key={i}>
                      <span className="text-sm text-gray-600">{detail.label}:</span>
                      <p className="font-medium text-gray-900">{detail.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Trimite-ne un Mesaj
              </h2>
              <p className="text-gray-600 mb-8">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="email@exemplu.ro"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0744 123 456"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Selectează serviciul</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Descrie pe scurt ce servicii ai nevoie..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium">Mesaj trimis cu succes!</p>
                      <p className="text-green-700 text-sm">Te vom contacta în cel mai scurt timp posibil.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
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
                  className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Locația Noastră
              </h2>
              <div className="bg-gray-200 rounded-2xl h-[600px] relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.5489687879945!2d23.5919!3d46.7712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ2JzE2LjMiTiAyM8KwMzUnMzAuOCJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              
              <div className="mt-6 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Indicații de orientare:</h3>
                <ul className="space-y-1 text-gray-700">
                  <li>• Lângă Metro Cluj</li>
                  <li>• Stație autobuz: Fabricii (liniile 24, 25, 46B)</li>
                  <li>• Parcare gratuită disponibilă</li>
                  <li>• Acces facil din centrul orașului (10 min)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ai o Urgență?</h2>
            <p className="text-xl mb-6">
              Suntem disponibili 24/7 pentru situații de urgență
            </p>
            <a 
              href="tel:+40744123456" 
              className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
            >
              <Phone className="w-6 h-6 animate-pulse" />
              Sună Acum: 0744 123 456
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}