"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Scissors, Heart, Sparkles, Palette, Zap, Users, Phone } from "lucide-react";

const services = [
  {
    id: "coafor",
    title: "Coafor",
    icon: Scissors,
    description: "Transformă-ți părul într-o operă de artă cu serviciile noastre profesionale de coafor",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800",
    services: [
      "Tunsori moderne pentru femei și bărbați",
      "Vopsit profesional cu produse premium",
      "Coafuri pentru evenimente speciale",
      "Tratamente de îngrijire și regenerare",
      "Extensii de păr naturale",
      "Styling profesional",
    ],
    priceRange: "50 - 500 RON",
  },
  {
    id: "manichiura-pedichiura",
    title: "Manichiură & Pedichiură",
    icon: Heart,
    description: "Unghii perfecte cu tehnici moderne și design personalizat pentru orice ocazie",
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800",
    services: [
      "Manichiură clasică și semipermanentă",
      "Pedichiură medicală și estetică", 
      "Construcție unghii cu gel",
      "Nail art personalizat",
      "Tratamente pentru unghii fragile",
      "Design 3D și decorațiuni speciale",
    ],
    priceRange: "40 - 250 RON",
  },
  {
    id: "tratamente-faciale",
    title: "Tratamente Faciale",
    icon: Sparkles,
    description: "Îngrijire avansată pentru toate tipurile de ten cu tehnologii de ultimă generație",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800",
    services: [
      "Curățare facială profundă",
      "Hidrodermabraziune",
      "Tratament DERMAPEN",
      "Mezoterapie facială",
      "Tratamente anti-aging",
      "Masaj facial și drenaj limfatic",
    ],
    priceRange: "100 - 600 RON",
  },
  {
    id: "makeup",
    title: "Makeup Profesional",
    icon: Palette,
    description: "Machiaj profesional pentru evenimente speciale și cursuri de auto-machiaj",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800",
    services: [
      "Machiaj de zi și de seară",
      "Machiaj pentru nunți și evenimente",
      "Conturing și highlighting",
      "Cursuri de auto-machiaj",
      "Consultanță de imagine",
      "Machiaj pentru ședințe foto",
    ],
    priceRange: "150 - 500 RON",
  },
  {
    id: "cosmetica",
    title: "Cosmetică",
    icon: Zap,
    description: "Tratamente cosmetice avansate pentru frumusețe și îngrijire completă",
    image: "https://images.unsplash.com/photo-1516975080664-ed798f297bd2?w=800",
    services: [
      "Tratamente corporale",
      "Masaj de relaxare și terapeutic",
      "Împachetări cu alge și nămol",
      "Tratamente anticelulitice",
      "Exfoliere corporală",
      "Aromaterapie",
    ],
    priceRange: "80 - 400 RON",
  },
  {
    id: "epilare",
    title: "Epilare",
    icon: Users,
    description: "Servicii profesionale de epilare pentru o piele catifelată și netedă",
    image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d7?w=800",
    services: [
      "Epilare cu ceară tradițională",
      "Epilare cu zahăr (sugaring)",
      "Epilare definitivă IPL",
      "Modelarea sprâncenelor",
      "Epilare facială delicată",
      "Pachete complete de epilare",
    ],
    priceRange: "30 - 350 RON",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-50 to-pink-100 opacity-70" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-purple-700">
              Experiență de peste 10 ani
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-playfair font-bold text-gray-900 mb-6"
          >
            Serviciile Noastre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
          >
            Descoperă gama completă de servicii de înfrumusețare oferite de echipa noastră de profesioniști. 
            Fiecare serviciu este personalizat pentru a-ți evidenția frumusețea naturală.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 -mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link href={`/bellachicstudio/servicii/${service.id}`}>
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-[1.02] border border-gray-100">
                    <div className="flex flex-col md:flex-row">
                      <div className="relative w-full md:w-2/5 h-72 md:h-auto">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:bg-gradient-to-r" />
                        <div className="absolute top-4 left-4">
                          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                            <service.icon className="h-7 w-7 text-pink-600" />
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 p-8 md:p-10">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                        <div className="space-y-3 mb-6">
                          {service.services.slice(0, 3).map((item, i) => (
                            <div key={i} className="flex items-start group/item">
                              <div className="w-6 h-6 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg flex items-center justify-center mr-3 mt-0.5 group-hover/item:scale-110 transition-transform">
                                <span className="w-2 h-2 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full" />
                              </div>
                              <span className="text-gray-700 group-hover/item:text-gray-900 transition-colors">{item}</span>
                            </div>
                          ))}
                          <p className="text-sm text-gray-500 italic pl-9">+{service.services.length - 3} servicii suplimentare</p>
                        </div>
                        <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                          <div>
                            <p className="text-sm text-gray-500 mb-1">Prețuri începând de la</p>
                            <p className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">{service.priceRange}</p>
                          </div>
                          <div className="flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all">
                            <span>Vezi detalii</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="group-hover:translate-x-1 transition-transform">
                              <path d="M7 5L12 10L7 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
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
              Nu știi ce serviciu să alegi?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
              Echipa noastră de specialiști te va consilia pentru a alege serviciile potrivite nevoilor tale
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 shadow-xl font-semibold gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Programează o consultație gratuită
              </Link>
              <a
                href="tel:0773842417"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-full hover:bg-white/20 hover:border-white/50 transform hover:scale-105 transition-all duration-300 font-semibold gap-2"
              >
                <Phone className="w-5 h-5" />
                Sună-ne pentru detalii
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}