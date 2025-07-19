"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Numele trebuie să aibă minim 3 caractere"),
  email: z.string().email("Email invalid"),
  phone: z.string().min(10, "Număr de telefon invalid"),
  service: z.string().min(1, "Selectează un serviciu"),
  message: z.string().min(10, "Mesajul trebuie să aibă minim 10 caractere"),
  honeypot: z.string().max(0),
});

type ContactFormData = z.infer<typeof contactSchema>;

const services = [
  "Coafor",
  "Manichiură & Pedichiură",
  "Tratamente Faciale",
  "Makeup",
  "Cosmetică",
  "Epilare",
  "Altele",
];

const businessHours = [
  { day: "Luni - Vineri", hours: "9:00 - 21:00", open: true },
  { day: "Sâmbătă", hours: "9:00 - 19:00", open: true },
  { day: "Duminică", hours: "Doar cu programare", open: false },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    if (data.honeypot) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form data:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
          <div className="absolute top-20 right-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob" />
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-semibold text-purple-700">
                Suntem aici pentru tine
              </span>
            </motion.div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Contactează-ne
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Suntem aici pentru tine! Programează-te, întreabă-ne sau vizitează-ne în salonul nostru din Militari
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="relative py-20 -mt-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-pink-500/20">
                  <Phone className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Telefon</h3>
                <div className="space-y-1">
                  <a href="tel:0314251011" className="text-gray-700 hover:text-pink-600 transition-colors block font-medium">
                    031 425 10 11
                  </a>
                  <a href="tel:0773842417" className="text-lg text-pink-600 hover:text-pink-700 transition-colors block font-bold">
                    0773 842 417
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/20">
                  <Mail className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Email</h3>
                <a href="mailto:bellachicstudio@gmail.com" className="text-gray-700 hover:text-purple-600 transition-colors break-all font-medium">
                  bellachicstudio@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-pink-500/20">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Adresă</h3>
                <p className="text-gray-700 font-medium">
                  Str. Cupolei nr. 5B<br />
                  Sector 6, Zona Lujerului
                </p>
                <button className="mt-3 text-sm text-pink-600 hover:text-pink-700 font-semibold group-hover:underline cursor-pointer">
                  Vezi pe hartă →
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-3xl shadow-xl p-8 text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-lg shadow-purple-500/20">
                  <Clock className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">Program</h3>
                <div className="space-y-2">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="text-sm">
                      <span className="text-gray-700 font-medium">{schedule.day}:</span>
                      <div className={`font-semibold ${schedule.open ? "text-green-600" : "text-amber-600"}`}>
                        {schedule.hours}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-40 right-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-40 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold mb-4">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Trimite-ne un mesaj
                </span>
              </h2>
              <p className="text-gray-700 mb-8 text-lg">
                Completează formularul de mai jos și te vom contacta în cel mai scurt timp posibil.
              </p>

              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 border border-green-400 rounded-lg flex items-center"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-green-700">Mesajul tău a fost trimis cu succes!</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                    Nume complet *
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    className="w-full px-5 py-3.5 border border-purple-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                    placeholder="Ion Popescu"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className="w-full px-5 py-3.5 border border-purple-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                      placeholder="ion@exemplu.ro"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Telefon *
                    </label>
                    <input
                      {...register("phone")}
                      type="tel"
                      className="w-full px-5 py-3.5 border border-purple-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300"
                      placeholder="0700 000 000"
                    />
                    {errors.phone && (
                      <p className="mt-2 text-sm text-red-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-2">
                    Serviciu dorit *
                  </label>
                  <select
                    {...register("service")}
                    className="w-full px-5 py-3.5 border border-purple-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Selectează un serviciu</option>
                    {services.map(service => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.service.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                    Mesaj *
                  </label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-5 py-3.5 border border-purple-200 rounded-2xl focus:ring-4 focus:ring-pink-500/20 focus:border-pink-500 transition-all duration-300 resize-none"
                    placeholder="Spune-ne cum te putem ajuta..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {/* Honeypot field */}
                <input
                  {...register("honeypot")}
                  type="text"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-pink-600/25 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
                  whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2" />
                      <span className="relative">Se trimite...</span>
                    </>
                  ) : (
                    <>
                      <Send className="relative h-5 w-5 mr-2" />
                      <span className="relative">Trimite Mesajul</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="h-full min-h-[600px] lg:sticky lg:top-32"
            >
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden h-full border border-gray-100">
                <div className="absolute top-4 left-4 right-4 z-10 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900">Bella Chic Studio</h3>
                      <p className="text-sm text-gray-700">Str. Cupolei 5B, Sector 6</p>
                    </div>
                    <a 
                      href="https://goo.gl/maps/your-location"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Deschide în Maps
                    </a>
                  </div>
                </div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.6521831674614!2d26.030851315513924!3d44.42457667910231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201c3a5e4c5b5%3A0x1c4b3b3b3b3b3b3b!2sStrada%20Cupolei%205B%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1625581234567!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-playfair font-bold text-white mb-8">
              Urmărește-ne pe Social Media
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Fii la curent cu ultimele tendințe și oferte speciale
            </p>
            <div className="flex justify-center space-x-6">
              <motion.a
                href="https://facebook.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-blue-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Facebook className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://instagram.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-pink-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Instagram className="h-8 w-8" />
              </motion.a>
              <motion.a
                href="https://youtube.com/bellachicstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/20 backdrop-blur-md text-white rounded-2xl flex items-center justify-center hover:bg-white hover:text-red-600 transform hover:scale-110 transition-all duration-300 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Youtube className="h-8 w-8" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}