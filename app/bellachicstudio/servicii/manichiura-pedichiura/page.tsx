"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, ArrowRight } from "lucide-react";

const services = [
  {
    name: "Manichiură Clasică",
    description: "Îngrijire completă a unghiilor și cuticulelor, aplicare ojă",
    duration: "45 min",
    price: "60 RON",
    features: ["Baie de parafină", "Masaj mâini", "Ojă clasică"],
  },
  {
    name: "Manichiură Semipermanentă",
    description: "Ojă semipermanentă cu rezistență până la 3 săptămâni",
    duration: "60 min",
    price: "80 RON",
    features: ["Pregătire unghii", "Bază și top coat", "Uscare UV/LED"],
  },
  {
    name: "Manichiură cu Gel",
    description: "Construcție sau prelungire cu gel pentru unghii perfecte",
    duration: "90 min",
    price: "120 RON",
    features: ["Construcție gel", "Model la alegere", "Finisaj perfect"],
  },
  {
    name: "Nail Art",
    description: "Design personalizat și modele artistice pe unghii",
    duration: "30 min",
    price: "+40 RON",
    features: ["Modele personalizate", "Pietricele", "Folie transfer"],
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059798b",
  "https://images.unsplash.com/photo-1610992015732-2449b76344bc",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66",
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6",
];

export default function ManicurePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Servicii Manichiură
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mâini îngrijite și unghii perfecte cu serviciile noastre profesionale de manichiură
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Tipuri de Manichiură
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Alege serviciul perfect pentru tine din gama noastră variată
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-5 h-5" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                  </div>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/bellachicstudio/programare"
                    className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Programează
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Treatments */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Tratamente Speciale
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Tratament cu Parafină
                  </h3>
                  <p className="text-gray-600">
                    Hidratare intensivă pentru mâini uscate și crăpate. Parafa caldă 
                    ajută la ameliorarea durerilor articulare și îmbunătățește circulația.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Întărire cu IBX
                  </h3>
                  <p className="text-gray-600">
                    Sistem revoluționar de întărire a unghiilor naturale. Perfect pentru 
                    unghii fragile și casante.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Reconstrucție Unghii
                  </h3>
                  <p className="text-gray-600">
                    Serviciu specializat pentru unghii deteriorate sau roase. Redăm 
                    forma și aspectul natural al unghiilor.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1604654894610-df63bc536371"
                alt="Tratamente manichiură"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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
              Galerie Lucrări
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspiră-te din lucrările noastre recente
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Manichiură ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="text-white">
                    <p className="font-semibold">Design #{index + 1}</p>
                    <p className="text-sm opacity-90">Click pentru detalii</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Întrebări Frecvente
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "Cât durează oja semipermanentă?",
                a: "Oja semipermanentă rezistă între 2-3 săptămâni, în funcție de îngrijire și activitățile zilnice.",
              },
              {
                q: "Pot face manichiură dacă am unghiile fragile?",
                a: "Da, avem tratamente speciale pentru întărirea unghiilor fragile. Recomandăm tratamentul IBX sau gel de construcție.",
              },
              {
                q: "Ce diferență este între gel și semipermanent?",
                a: "Gelul permite construcție și prelungire, fiind mai rezistent. Semipermanentul este mai subțire și natural, ideal pentru unghii sănătoase.",
              },
              {
                q: "Cât de des trebuie să vin pentru întreținere?",
                a: "Recomandăm vizite la 2-3 săptămâni pentru semipermanent și 3-4 săptămâni pentru gel.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
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
            <h2 className="text-4xl font-playfair font-bold text-white mb-6">
              Programează-te Acum
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Echipa noastră de specialiști te așteaptă pentru a-ți oferi cele mai bune servicii de manichiură
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Programare Online
              </Link>
              <Link
                href="/bellachicstudio/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold"
              >
                Contactează-ne
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}