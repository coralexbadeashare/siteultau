"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Clock, Star, ArrowRight, Sparkles } from "lucide-react";

const treatments = [
  {
    name: "Tratament Facial Clasic",
    description: "Curățare profundă, tonifiere și hidratare pentru toate tipurile de ten",
    duration: "60 min",
    price: "120 RON",
    features: ["Demachiere", "Curățare profundă", "Masaj facial", "Mască hidratantă"],
  },
  {
    name: "Tratament Anti-Aging",
    description: "Tratament intensiv pentru reducerea ridurilor și redarea elasticității",
    duration: "90 min",
    price: "250 RON",
    features: ["Acid hialuronic", "Colagen", "Masaj lifting", "Mască anti-rid"],
  },
  {
    name: "Hidrodermabraziune",
    description: "Exfoliere avansată cu jet de apă pentru o piele radiantă",
    duration: "75 min",
    price: "200 RON",
    features: ["Exfoliere profundă", "Extracție impurități", "Infuzie ser", "Protecție SPF"],
  },
  {
    name: "Tratament Acnee",
    description: "Tratament specializat pentru tenul acneic și problemat",
    duration: "90 min",
    price: "180 RON",
    features: ["Curățare antibacteriană", "Extracție comedoane", "LED terapie", "Mască calmantă"],
  },
  {
    name: "Dermapen",
    description: "Micro-needling pentru stimularea colagenului și reducerea cicatricilor",
    duration: "60 min",
    price: "300 RON",
    features: ["Anestezie topică", "Micro-needling", "Ser regenerant", "Mască calmantă"],
  },
  {
    name: "Peeling Chimic",
    description: "Reînnoire celulară profundă pentru un ten luminos",
    duration: "45 min",
    price: "150 RON",
    features: ["Acid glicolic/salicilic", "Neutralizare", "Ser calmant", "Protecție solară"],
  },
];

const skinTypes = [
  {
    type: "Ten Uscat",
    description: "Necesită hidratare intensivă și protecție",
    treatments: ["Tratament Hidratant", "Mezoterapie", "Mască cu acid hialuronic"],
    icon: "💧",
  },
  {
    type: "Ten Gras",
    description: "Control sebum și curățare profundă",
    treatments: ["Curățare profundă", "Peeling salicilic", "Mască cu argila"],
    icon: "✨",
  },
  {
    type: "Ten Mixt",
    description: "Echilibrare și tratament personalizat",
    treatments: ["Tratament echilibrant", "Hidratare zonală", "Exfoliere blândă"],
    icon: "⚖️",
  },
  {
    type: "Ten Sensibil",
    description: "Îngrijire delicată și calmare",
    treatments: ["Tratament calmant", "Mască anti-iritații", "Produse hipoalergenice"],
    icon: "🌸",
  },
];

export default function CosmeticaPage() {
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
              Tratamente Faciale
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Redescoperă frumusețea naturală a pielii tale cu tratamentele noastre profesionale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Treatments Grid */}
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
              Tratamentele Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluții personalizate pentru fiecare tip de ten și nevoie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{treatment.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{treatment.duration}</span>
                    </div>
                    <div className="text-xl font-bold text-pink-600">{treatment.price}</div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {treatment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/bellachicstudio/programare"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-md transform hover:scale-105 transition-all duration-300 text-sm"
                  >
                    Programează
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skin Types Section */}
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
              Analiză Tip de Ten
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Identificăm tipul tău de ten pentru a-ți oferi tratamentul perfect
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skinTypes.map((skin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">{skin.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{skin.type}</h3>
                <p className="text-gray-600 text-sm mb-4">{skin.description}</p>
                <div className="space-y-1">
                  {skin.treatments.map((treatment, idx) => (
                    <p key={idx} className="text-sm text-gray-700">• {treatment}</p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-6">
                Tehnologii Avansate
              </h2>
              <p className="text-gray-600 mb-8">
                Folosim cele mai moderne echipamente și tehnologii pentru rezultate vizibile și de durată.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Hidrodermabraziune</h3>
                    <p className="text-gray-600 text-sm">
                      Tehnologie non-invazivă pentru exfoliere și hidratare profundă
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LED Terapie</h3>
                    <p className="text-gray-600 text-sm">
                      Lumină terapeutică pentru tratarea acneei și stimularea colagenului
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Dermapen</h3>
                    <p className="text-gray-600 text-sm">
                      Micro-needling pentru regenerarea pielii și reducerea cicatricilor
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
              className="relative h-[500px] rounded-2xl overflow-hidden order-1 lg:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
                alt="Tratamente faciale"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Gallery */}
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
              Rezultate Vizibile
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transformări reale ale clienților noștri
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  &ldquo;Rezultate extraordinare! Tenul meu arată cu 10 ani mai tânăr după seria de tratamente.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900">Client Anonim</p>
                    <p className="text-sm text-gray-500">Tratament Anti-Aging</p>
                  </div>
                </div>
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
              Consultație Gratuită
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Vino pentru o analiză gratuită a tenului și recomandări personalizate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-semibold"
              >
                Programează Consultație
              </Link>
              <Link
                href="/bellachicstudio/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-full hover:bg-white hover:text-pink-600 transition-all duration-300 font-semibold"
              >
                Întrebări?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}