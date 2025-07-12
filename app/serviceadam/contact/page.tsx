'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { 
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Car,
  Calendar,
  User,
  MessageSquare,
  AlertCircle,
  Info,
  Wrench
} from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    carModel: '',
    service: '',
    date: '',
    message: ''
  })

  const [showSuccess, setShowSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const services = [
    'Diagnosticare computerizată',
    'Reparații mecanice',
    'Reparații electrice',
    'Tinichigerie și vopsitorie',
    'Întreținere periodică',
    'Verificare pre-achiziție',
    'Altele'
  ]

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.name.trim()) newErrors.name = 'Numele este obligatoriu'
    if (!formData.email.trim()) newErrors.email = 'Email-ul este obligatoriu'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email invalid'
    if (!formData.phone.trim()) newErrors.phone = 'Telefonul este obligatoriu'
    else if (!/^07\d{8}$/.test(formData.phone.replace(/\s/g, ''))) newErrors.phone = 'Telefon invalid'
    if (!formData.service) newErrors.service = 'Selectați un serviciu'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      // În producție, aici ar fi logica pentru trimiterea formularului
      console.log('Form submitted:', formData)
      setShowSuccess(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        carModel: '',
        service: '',
        date: '',
        message: ''
      })
      
      setTimeout(() => {
        setShowSuccess(false)
      }, 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] overflow-hidden pt-20">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&h=600&fit=crop"
          alt="Contact Service Adam"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Contact
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Suntem aici pentru a-ți rezolva orice problemă auto
              </p>
              <div className="flex items-center gap-2 text-gray-300">
                <Link href="/serviceadam" className="hover:text-red-500 transition-colors">
                  Acasă
                </Link>
                <span>/</span>
                <span className="text-white">Contact</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <MapPin className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Adresă</h3>
              <p className="text-sm text-gray-600">
                Str. Calea Florești Nr. 123<br />
                Cluj-Napoca, Cluj
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Phone className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <a href="tel:0740123456" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                0740 123 456<br />
                0264 123 456
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Mail className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:contact@serviceadam.ro" className="text-sm text-gray-600 hover:text-red-600 transition-colors">
                contact@serviceadam.ro<br />
                programari@serviceadam.ro
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Clock className="w-10 h-10 text-red-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Program</h3>
              <p className="text-sm text-gray-600">
                L-V: 8:00 - 18:00<br />
                S: 9:00 - 14:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Programează-te Online</h2>
              <p className="text-gray-600 mb-8">
                Completează formularul și te vom contacta în cel mai scurt timp pentru confirmare.
              </p>

              {showSuccess && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-green-800">Mulțumim pentru mesaj!</p>
                    <p className="text-sm text-green-700">Te vom contacta în curând pentru confirmare.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" id="programare">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="Ion Popescu"
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="ion.popescu@email.com"
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 ${
                          errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                        placeholder="0740 123 456"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="carModel" className="block text-sm font-medium text-gray-700 mb-2">
                      Marca și model mașină
                    </label>
                    <div className="relative">
                      <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="carModel"
                        name="carModel"
                        value={formData.carModel}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                        placeholder="Ex: VW Golf 7"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviciu dorit *
                    </label>
                    <div className="relative">
                      <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none z-10" />
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 appearance-none ${
                          errors.service ? 'border-red-500' : 'border-gray-300'
                        }`}
                      >
                        <option value="">Selectează un serviciu</option>
                        {services.map((service) => (
                          <option key={service} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                      Data preferată
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj adițional
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Descrie problema mașinii tale..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors duration-300 flex items-center justify-center gap-2 group font-medium"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Trimite Cererea
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              <h2 className="text-3xl font-bold mb-2">Locația Noastră</h2>
              <p className="text-gray-600 mb-8">
                Ne găsești ușor pe Calea Florești, cu acces facil din toate zonele orașului.
              </p>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-lg h-[400px] mb-8 relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.3971720285247!2d23.5486!3d46.7693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDbCsDQ2JzA5LjUiTiAyM8KwMzInNTUuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale"
                />
              </div>

              {/* Additional Info Cards */}
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5 text-red-600" />
                    Parcare Gratuită
                  </h3>
                  <p className="text-gray-600">
                    Avem locuri de parcare gratuite pentru clienții noștri, direct în fața service-ului.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-600" />
                    Asistență 24/7
                  </h3>
                  <p className="text-gray-600">
                    Pentru urgențe, suntem disponibili non-stop la numărul de asistență rutieră: 
                    <a href="tel:0800123456" className="text-red-600 font-semibold ml-1">0800 123 456</a>
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600" />
                    Transport Gratuit
                  </h3>
                  <p className="text-gray-600">
                    Oferim transport gratuit în Cluj-Napoca pentru clienții care lasă mașina pentru reparații majore.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Întrebări Frecvente</h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  Cât durează o programare pentru diagnosticare?
                </h3>
                <p className="text-gray-600 pl-7">
                  O diagnosticare completă durează între 30-60 de minute, în funcție de complexitatea problemei.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  Pot aștepta în service până se termină reparația?
                </h3>
                <p className="text-gray-600 pl-7">
                  Da, avem o zonă de așteptare confortabilă cu WiFi gratuit, cafea și reviste. Pentru reparații mai lungi, oferim transport gratuit.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  Oferiți garanție pentru lucrările efectuate?
                </h3>
                <p className="text-gray-600 pl-7">
                  Da, toate lucrările noastre au garanție minimă 6 luni, iar pentru anumite componente garanția poate fi extinsă până la 2 ani.
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-semibold mb-2 flex items-start gap-2">
                  <Info className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  Acceptați plata cu cardul?
                </h3>
                <p className="text-gray-600 pl-7">
                  Da, acceptăm toate cardurile majore (Visa, Mastercard, Maestro), precum și plata cash sau prin transfer bancar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}