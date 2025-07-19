"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, ArrowRight, Palette, Camera, Heart } from "lucide-react";

const makeupServices = [
  {
    name: "Machiaj de Zi",
    description: "Look natural și fresh pentru activitățile zilnice",
    duration: "45 min",
    price: "100 RON",
    features: ["Pregătire ten", "Machiaj natural", "Fixare de lungă durată", "Recomandări produse"],
    icon: "☀️",
  },
  {
    name: "Machiaj de Seară",
    description: "Machiaj sofisticat pentru evenimente speciale",
    duration: "60 min",
    price: "150 RON",
    features: ["Conturare profesională", "Smokey eyes", "Rujuri matte", "Fixare 12h+"],
    icon: "✨",
  },
  {
    name: "Machiaj de Mireasă",
    description: "Pachet complet pentru cea mai importantă zi",
    duration: "120 min",
    price: "400 RON",
    features: ["Probă machiaj", "Machiaj rezistent", "Retușuri incluse", "Deplasare la locație"],
    icon: "👰",
  },
  {
    name: "Machiaj Editorial",
    description: "Machiaj artistic pentru ședințe foto și evenimente",
    duration: "90 min",
    price: "250 RON",
    features: ["Concept creativ", "Tehnici avansate", "Produse profesionale", "Adaptare lighting"],
    icon: "📸",
  },
  {
    name: "Curs Automachiere",
    description: "Învață să te machiezi ca un profesionist",
    duration: "180 min",
    price: "300 RON",
    features: ["Analiză colorit", "Tehnici personalizate", "Kit produse", "Suport online"],
    icon: "🎓",
  },
];

const occasions = [
  {
    title: "Evenimente Corporate",
    description: "Machiaj profesional pentru prezentări, conferințe și ședințe foto corporate",
    image: "https://images.unsplash.com/photo-1560347876-aeef00ee58a1",
  },
  {
    title: "Nunți și Botezuri",
    description: "Machiaj rezistent și fotogenic pentru invitate și nașe",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
  },
  {
    title: "Sesiuni Foto",
    description: "Machiaj profesional adaptat pentru cameră și iluminat de studio",
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2",
  },
  {
    title: "Evenimente Speciale",
    description: "Pentru gale, petreceri tematice și ocazii deosebite",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937",
  },
];

export default function MakeupPage() {
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
              Servicii Makeup
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Artă și tehnică pentru a-ți scoate în evidență frumusețea naturală
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
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
              Tipuri de Machiaj
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De la natural la dramatic, avem soluția perfectă pentru fiecare ocazie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {makeupServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all group"
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="w-5 h-5" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-pink-600">{service.price}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/bellachicstudio/programare"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Rezervă Acum
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Pentru Orice Ocazie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Machiaj adaptat perfect pentru evenimentul tău
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {occasions.map((occasion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={occasion.image}
                    alt={occasion.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{occasion.title}</h3>
                    <p className="text-white/90">{occasion.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Procesul Nostru
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Consultație</h3>
                    <p className="text-gray-600">
                      Discutăm despre eveniment, preferințe și analizăm tipul tău de ten
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Pregătire Ten</h3>
                    <p className="text-gray-600">
                      Curățare, hidratare și aplicare primer pentru o bază perfectă
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Aplicare Machiaj</h3>
                    <p className="text-gray-600">
                      Tehnici profesionale pentru un rezultat impecabil și de durată
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-600 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Finisare & Fixare</h3>
                    <p className="text-gray-600">
                      Spray de fixare și retușuri finale pentru rezistență maximă
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb"
                alt="Makeup process"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Portofoliu
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lucrări recente și transformări spectaculoase
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              >
                <Image
                  src={`https://images.unsplash.com/photo-${
                    [
                      "1487412947147-5cebf100ffc2",
                      "1481214110143-ed630356e1bb",
                      "1560347876-aeef00ee58a1",
                      "1516975080664-ed2fc6a32937",
                      "1595476108010-b4d1f102b1b1",
                      "1570172619644-dfd03ed5d881",
                      "1498842812179-9bea0d0a2dfd",
                      "1522335621554-22bb7c48d99e"
                    ][index]
                  }`}
                  alt={`Makeup ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/bellachicstudio/galerie"
              className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-semibold"
            >
              Vezi toată galeria
              <ArrowRight className="w-5 h-5" />
            </Link>
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
              Rezervă-ți Machiajul Perfect
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Fii încrezătoare și strălucitoare la următorul tău eveniment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                <Palette className="w-5 h-5 mr-2" />
                Programează Acum
              </Link>
              <Link
                href="/bellachicstudio/galerie"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold"
              >
                <Camera className="w-5 h-5 mr-2" />
                Vezi Portofoliul
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}