"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Star, TrendingUp } from "lucide-react";

const services = [
  {
    name: "Tunsori Dame",
    description: "Tunsori moderne adaptate tipului tău de păr și formei feței",
    duration: "45-60 min",
    price: "80-120 RON",
  },
  {
    name: "Vopsit Complet",
    description: "Colorare profesională cu produse premium L'Oréal și Wella",
    duration: "120-180 min",
    price: "150-300 RON",
  },
  {
    name: "Balayage & Ombre",
    description: "Tehnici moderne de colorare pentru un look natural și luminos",
    duration: "180-240 min",
    price: "250-450 RON",
  },
  {
    name: "Coafuri Evenimente",
    description: "Coafuri elegante pentru nunți, botezuri și evenimente speciale",
    duration: "60-90 min",
    price: "150-300 RON",
  },
  {
    name: "Tratamente Keratină",
    description: "Tratamente profesionale pentru regenerarea și întărirea părului",
    duration: "120-180 min",
    price: "200-400 RON",
  },
  {
    name: "Extensii Păr Natural",
    description: "Aplicare extensii din păr 100% natural pentru volum și lungime",
    duration: "180-300 min",
    price: "400-800 RON",
  },
];

const benefits = [
  "Stilisti cu experiență de peste 10 ani",
  "Produse profesionale de top",
  "Consultanță personalizată gratuită",
  "Garanție pentru serviciile prestate",
  "Atmosferă relaxantă și prietenoasă",
  "Program flexibil, inclusiv weekend",
];

const gallery = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
  "https://images.unsplash.com/photo-1562322140-8baeacacf3df?w=600",
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=600",
];

export default function CoaforPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600"
          alt="Coafor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-white mb-4">
                Servicii Coafor
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Transformă-ți părul într-o operă de artă cu stilistii noștri experți
              </p>
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Programează-te Acum
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Serviciile Noastre de Coafor
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim o gamă completă de servicii de coafor, de la tunsori simple la transformări complete
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{service.duration}</span>
                  </div>
                  <div className="font-semibold text-pink-600">{service.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                De ce să alegi serviciile noastre?
              </h2>
              <p className="text-gray-600 mb-8">
                La Bella Chic Studio, fiecare client beneficiază de atenție personalizată și servicii de cea mai înaltă calitate. 
                Stilistii noștri sunt mereu la curent cu ultimele tendințe și tehnici din domeniu.
              </p>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-pink-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {gallery.map((image, index) => (
                <div
                  key={index}
                  className={`relative ${index % 2 === 1 ? "mt-8" : ""} h-64 rounded-2xl overflow-hidden shadow-lg`}
                >
                  <Image
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2500+", label: "Clienți Fericiți" },
              { value: "15+", label: "Stiliști Experți" },
              { value: "50+", label: "Premii Câștigate" },
              { value: "4.9", label: "Rating Google", icon: Star },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-white"
              >
                <div className="text-3xl font-bold mb-2 flex items-center justify-center">
                  {stat.value}
                  {stat.icon && <stat.icon className="h-6 w-6 ml-1" />}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <TrendingUp className="h-8 w-8 text-pink-600 mr-2" />
              <h2 className="text-4xl font-playfair font-bold text-gray-900">
                Tendințe 2025
              </h2>
            </div>
            <p className="text-xl text-gray-600">
              Fii mereu în trend cu cele mai noi stiluri și tehnici
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Bob Texturat",
                description: "Tunsoarea anului - modernă, versatilă și ușor de întreținut",
                image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19f?w=400",
              },
              {
                title: "Balayage Natural",
                description: "Reflexe naturale pentru un look luminos și sofisticat",
                image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400",
              },
              {
                title: "Pixie Cut Modern",
                description: "Îndrăzneț și feminin - perfect pentru o schimbare radicală",
                image: "https://images.unsplash.com/photo-1534445538923-ab38438550d2?w=400",
              },
            ].map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={trend.image}
                    alt={trend.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{trend.title}</h3>
                  <p className="text-gray-600">{trend.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
              Pregătit pentru o transformare?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Programează-te acum și lasă-ne să-ți creăm look-ul perfect
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white rounded-full hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Programează-te Online
              </Link>
              <Link
                href="/bellachicstudio/galerie"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 border-2 border-pink-600 rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all duration-300"
              >
                Vezi Galeria Noastră
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}