'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'transport-marfa',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefon",
      details: [
        { label: "Principal", value: "0752-816-138", href: "tel:0752816138" },
        { label: "Secundar", value: "0742-980-519", href: "tel:0742980519" },
        { label: "Urgențe", value: "0725-969-796", href: "tel:0725969796" }
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: [
        { label: "Office", value: "office@transportmarfaincluj.ro", href: "mailto:office@transportmarfaincluj.ro" }
      ]
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresă",
      details: [
        { label: "Sediu", value: "Str. Aurel Vlaicu nr. 2, Cluj-Napoca" }
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Program",
      details: [
        { label: "Disponibilitate", value: "NON-STOP 24/7" }
      ]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Suntem aici pentru a vă ajuta cu toate nevoile de transport și mutări
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="inline-flex p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <div key={idx}>
                      <p className="text-sm text-gray-600">{detail.label}</p>
                      {detail.href ? (
                        <a href={detail.href} className="text-blue-600 hover:text-blue-700 font-medium">
                          {detail.value}
                        </a>
                      ) : (
                        <p className="font-medium">{detail.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Trimiteți-ne un Mesaj</h2>
              <p className="text-gray-600 mb-8">
                Completați formularul de mai jos și vă vom contacta în cel mai scurt timp posibil.
              </p>

              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Mesaj trimis cu succes!
                  </h3>
                  <p className="text-green-700">
                    Vă vom contacta în curând. Mulțumim!
                  </p>
                </div>
              ) : (
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
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="0700 000 000"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
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
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    >
                      <option value="transport-marfa">Transport Marfă</option>
                      <option value="transport-mobila">Transport Mobilă</option>
                      <option value="mutari-firme">Mutări Firme</option>
                      <option value="mutari-mobila">Mutări Mobilă</option>
                      <option value="altele">Altele</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Detalii despre Transport/Mutare *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Descrieți ce doriți să transportați, de unde și unde, data dorită, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg flex items-center justify-center gap-2 transform hover:scale-[1.02] transition-all"
                  >
                    <Send className="h-5 w-5" />
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Unde Ne Găsiți</h2>
              
              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-xl h-[400px] mb-8 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.3537050177707!2d23.589831!3d46.770910!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47490e9c96a5d0f7%3A0x2e8f3a5b3a5d0f7!2sStrada%20Aurel%20Vlaicu%202%2C%20Cluj-Napoca!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Contact Buttons */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold mb-4">Contact Rapid</h3>
                <a
                  href="tel:0752816138"
                  className="flex items-center gap-4 bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-green-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Sună Acum</p>
                    <p className="text-gray-600">0752-816-138</p>
                  </div>
                </a>

                <a
                  href="mailto:office@transportmarfaincluj.ro"
                  className="flex items-center gap-4 bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors group"
                >
                  <div className="bg-blue-600 text-white p-3 rounded-full group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Trimite Email</p>
                    <p className="text-gray-600">office@transportmarfaincluj.ro</p>
                  </div>
                </a>

                <div className="flex gap-4 pt-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                    Instagram
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
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Care sunt zonele acoperite?</h3>
              <p className="text-gray-600">
                Acoperim tot județul Cluj și împrejurimile. Pentru distanțe mai mari, 
                vă rugăm să ne contactați pentru o ofertă personalizată.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Cât timp înainte trebuie să fac rezervarea?</h3>
              <p className="text-gray-600">
                Recomandăm rezervarea cu cel puțin 2-3 zile înainte, dar suntem disponibili 
                și pentru urgențe în funcție de disponibilitate.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Oferiți servicii de ambalare?</h3>
              <p className="text-gray-600">
                Da, oferim servicii complete de ambalare cu materiale profesionale. 
                Acest serviciu poate fi inclus în pachetele Standard și Premium.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}