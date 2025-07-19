"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, MapPin, Phone, Star, Heart, Users, Award, Instagram } from "lucide-react";
import ServiceCard from "./components/ServiceCard";
import TestimonialCard from "./components/TestimonialCard";
import { motion } from "framer-motion";

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600",
    title: "Frumusețea Ta, Pasiunea Noastră",
    subtitle: "Descoperă experiența unui salon de lux în Militari",
  },
  {
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1600",
    title: "Transformă-ți Stilul",
    subtitle: "Echipă profesională, rezultate excepționale",
  },
  {
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600",
    title: "Răsfăț și Relaxare",
    subtitle: "Tratamente premium pentru tine",
  },
];

const services = [
  {
    icon: "✂️",
    title: "Coafor",
    description: "Tunsori moderne, vopsit profesional și coafuri pentru evenimente",
    link: "/bellachicstudio/servicii/coafor",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400",
  },
  {
    icon: "💅",
    title: "Manichiură & Pedichiură",
    description: "Unghii perfecte cu tehnici moderne și design personalizat",
    link: "/bellachicstudio/servicii/manichiura-pedichiura",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400",
  },
  {
    icon: "✨",
    title: "Tratamente Faciale",
    description: "Îngrijire avansată pentru toate tipurile de ten",
    link: "/bellachicstudio/servicii/tratamente-faciale",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400",
  },
  {
    icon: "💄",
    title: "Makeup Profesional",
    description: "Machiaj pentru evenimente speciale și cursuri de auto-machiaj",
    link: "/bellachicstudio/servicii/makeup",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400",
  },
];

const testimonials = [
  {
    name: "Maria Ionescu",
    rating: 5,
    text: "Cel mai bun salon din Militari! Echipa este profesională și prietenoasă.",
    service: "Coafor & Manichiură",
  },
  {
    name: "Alexandra Popescu",
    rating: 5,
    text: "Tratamentele faciale sunt extraordinare. Pielea mea arată fantastic!",
    service: "Tratamente Faciale",
  },
  {
    name: "Elena Dumitrescu",
    rating: 5,
    text: "Machiajul pentru nunta mea a fost perfect. Recomand cu încredere!",
    service: "Makeup Profesional",
  },
];

const stats = [
  { icon: Users, value: "5000+", label: "Clienți Fericiți" },
  { icon: Award, value: "10+", label: "Ani Experiență" },
  { icon: Heart, value: "99%", label: "Satisfacție Clienți" },
  { icon: Star, value: "4.9", label: "Rating Google" },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>
        
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <div className="relative h-full">
              <div
                className="absolute inset-0 bg-cover bg-center transform transition-transform duration-[10s] ease-out"
                style={{ 
                  backgroundImage: `url(${slide.image})`,
                  transform: index === currentSlide ? 'scale(1.1)' : 'scale(1)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              <div className="relative h-full flex items-center px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: index === currentSlide ? 1 : 0, x: index === currentSlide ? 0 : -30 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      className="inline-block mb-6"
                    >
                      <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-sm font-medium border border-white/20">
                        ✨ Bine ai venit la salonul tău de lux
                      </span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-white mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 leading-relaxed">
                      {slide.subtitle}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/bellachicstudio/programare"
                          className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow-2xl shadow-pink-600/25 overflow-hidden"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          <Calendar className="relative mr-2 h-5 w-5" />
                          <span className="relative">Programează-te Acum</span>
                        </Link>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Link
                          href="/bellachicstudio/servicii"
                          className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
                        >
                          <span className="mr-2">Vezi Serviciile</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  {/* Hero Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: index === currentSlide ? 1 : 0, y: index === currentSlide ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="absolute bottom-20 right-0 hidden lg:flex items-center space-x-8"
                  >
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">5000+</div>
                      <div className="text-white/70 text-sm">Clienți Fericiți</div>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">10+</div>
                      <div className="text-white/70 text-sm">Ani Experiență</div>
                    </div>
                    <div className="w-px h-12 bg-white/30" />
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">4.9★</div>
                      <div className="text-white/70 text-sm">Rating Google</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative h-3 transition-all duration-500 rounded-full overflow-hidden cursor-pointer ${
                index === currentSlide ? "w-12 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
              }`}
            >
              {index === currentSlide && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 5, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-8 hidden lg:block"
        >
          <div className="flex items-center space-x-2 text-white/70">
            <span className="text-sm">Scroll pentru mai mult</span>
            <motion.svg
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 bg-gradient-to-br from-pink-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Cpath%20d=%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-white mb-4">
              De ce să ne alegi pe noi?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Experiența și pasiunea noastră vorbesc prin rezultate
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ scale: 1 }}
                    whileInView={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="text-4xl lg:text-5xl font-bold text-white mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/90 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-pink-50/30 to-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-semibold text-purple-700">
                Servicii Premium
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent">
                Serviciile Noastre
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Oferim o gamă completă de servicii de înfrumusețare pentru a-ți satisface toate nevoile
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring" }}
                viewport={{ once: true }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              href="/bellachicstudio/servicii"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <span>Vezi Toate Serviciile</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-pink-50 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                {/* Main image */}
                <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800"
                    alt="Salon Interior"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
                
                {/* Floating cards */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
                  className="absolute -bottom-8 -right-8 bg-gradient-to-br from-pink-600 to-purple-600 text-white p-8 rounded-3xl shadow-2xl"
                >
                  <div className="text-4xl font-bold mb-1">10+</div>
                  <div className="text-lg">Ani de Experiență</div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
                  className="absolute -top-6 -left-6 bg-white p-6 rounded-2xl shadow-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-400 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">5000+</div>
                      <div className="text-sm text-gray-700">Clienți Fericiți</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Despre Bella Chic Studio
              </h2>
              <p className="text-gray-700 mb-6">
                Suntem un salon de înfrumusețare modern situat în zona Lujerului, Militari. 
                Cu o echipă tânără și profesionistă, ne dedicăm să oferim servicii de cea mai înaltă 
                calitate într-un ambient relaxant și primitor.
              </p>
              <p className="text-gray-700 mb-8">
                De la coafuri moderne la tratamente faciale avansate, fiecare serviciu este 
                personalizat pentru a-ți evidenția frumusețea naturală și a-ți oferi încredere.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-pink-600 mr-3" />
                  <div>
                    <div className="font-semibold">Program Flexibil</div>
                    <div className="text-sm text-gray-700">L-V: 9-21, S: 9-19</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-pink-600 mr-3" />
                  <div>
                    <div className="font-semibold">Locație Centrală</div>
                    <div className="text-sm text-gray-700">Zona Lujerului</div>
                  </div>
                </div>
              </div>
              
              <Link
                href="/bellachicstudio/despre"
                className="inline-flex items-center text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Află mai multe despre noi
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-4">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-xl text-gray-700">
              Peste 5000 de clienți fericiți ne-au acordat încrederea lor
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ești gata pentru o transformare?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Programează-te acum și beneficiază de serviciile noastre profesionale
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Programează-te Online
              </Link>
              <a
                href="tel:0773842417"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 font-bold"
              >
                <Phone className="h-5 w-5" />
                0773 842 417
              </a>
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mx-auto w-fit"
            >
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Str. Cupolei nr. 5B, Sector 6, Zona Lujerului</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="relative py-24 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-pink-300 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-semibold text-purple-700">
                Follow Us
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Urmărește-ne pe Instagram
              </span>
            </h2>
            <p className="text-xl text-gray-700 mb-8">
              <a href="https://instagram.com/bellachicstudio" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 transition-colors">
                @bellachicstudio
              </a> pentru inspirație zilnică
            </p>
            
            {/* Instagram stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center justify-center space-x-8 mb-12"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">15.2K</div>
                <div className="text-sm text-gray-700">Followers</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">2.3K</div>
                <div className="text-sm text-gray-700">Posts</div>
              </div>
              <div className="w-px h-12 bg-gray-300" />
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-700">Engagement</div>
              </div>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05, type: "spring" }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={`https://images.unsplash.com/photo-${
                      [
                        "1560066984-138dadb4c035",
                        "1522337360788-8b13dee7a37e",
                        "1487412947147-5cebf100ffc2",
                        "1604654894610-df63bc536371",
                        "1570172619644-dfd03ed5d881",
                        "1562322140-8baeacacf3df",
                        "1516975080664-ed798f297bd2",
                        "1633681926022-84c23e8cb2d7",
                      ][i - 1]
                    }?w=400`}
                    alt={`Instagram ${i}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  
                  {/* Instagram UI elements */}
                  <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex justify-between items-start">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-gray-900">NEW</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex space-x-4">
                          <button className="hover:scale-110 transition-transform">
                            <Heart className="h-6 w-6 fill-white" />
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                          </button>
                          <button className="hover:scale-110 transition-transform">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.684C18.886 16.938 19 17.482 19 18c0 .482-.114.938-.316 1.342m0-2.684a3 3 0 110 2.684M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </button>
                        </div>
                        <button className="hover:scale-110 transition-transform">
                          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="text-white">
                        <div className="font-semibold text-sm">{Math.floor(Math.random() * 500) + 100} aprecieri</div>
                        <div className="text-xs opacity-75">acum {Math.floor(Math.random() * 24) + 1} ore</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://instagram.com/bellachicstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              <Instagram className="h-5 w-5 mr-2" />
              <span>Urmărește-ne pe Instagram</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}