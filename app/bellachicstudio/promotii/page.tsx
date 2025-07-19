"use client";

import { motion } from "framer-motion";
import { Tag, Gift, Clock, Calendar, Sparkles, Heart, Users, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const promotions = [
  {
    id: 1,
    type: "ofertă-specială",
    title: "Pachet Coafor Complet",
    subtitle: "Tuns + Vopsit + Coafat",
    description: "Transformare completă la un preț special pentru părul tău",
    discount: "25% REDUCERE",
    originalPrice: "400 RON",
    discountPrice: "300 RON",
    validUntil: "31 Martie 2025",
    conditions: ["Valabil Luni-Joi", "Programare necesară", "Nu se cumulează cu alte oferte"],
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600",
    featured: true,
  },
  {
    id: 2,
    type: "abonament",
    title: "Abonament Coafor 4+1 Gratuit",
    subtitle: "Pentru clienți fideli",
    description: "Plătești 4 servicii și primești al 5-lea gratuit",
    priceRange: {
      "Păr Scurt": "230 RON",
      "Păr Mediu": "270 RON",
      "Păr Lung": "280 RON",
      "Păr Foarte Lung": "320 RON",
    },
    validUntil: "Nelimitat",
    conditions: ["Valabil Luni-Vineri", "Include: spălat, tuns, coafat", "Transferabil către prieteni"],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600",
    tag: "POPULAR",
  },
  {
    id: 3,
    type: "pachet",
    title: "Beauty Day Special",
    subtitle: "O zi dedicată frumuseții tale",
    description: "Manichiură + Pedichiură + Tratament facial",
    discount: "30% REDUCERE",
    originalPrice: "450 RON",
    discountPrice: "315 RON",
    validUntil: "15 Aprilie 2025",
    conditions: ["Durata: 3-4 ore", "Include produse premium", "Ceai și gustări incluse"],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600",
  },
  {
    id: 4,
    type: "sezonier",
    title: "Ofertă de Primăvară",
    subtitle: "Pregătește-te pentru noul sezon",
    description: "20% reducere la toate tratamentele faciale",
    discount: "20% OFF",
    validUntil: "30 Aprilie 2025",
    conditions: ["Pentru toate tipurile de ten", "Consultație gratuită inclusă", "Produse naturale"],
    image: "https://images.unsplash.com/photo-1516975080664-ed798f297bd2?w=600",
  },
  {
    id: 5,
    type: "grup",
    title: "Petrecere de Burlăcițe",
    subtitle: "Pachet special pentru grupuri",
    description: "Makeup + Manichiură pentru minim 4 persoane",
    discount: "15% REDUCERE/PERSOANĂ",
    originalPrice: "200 RON/pers",
    discountPrice: "170 RON/pers",
    conditions: ["Minim 4 persoane", "Prosecco gratuit", "Rezervare cu 7 zile înainte"],
    image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600",
    tag: "GRUP",
  },
  {
    id: 6,
    type: "student",
    title: "Reducere pentru Studente",
    subtitle: "Cu carnet de student valid",
    description: "15% reducere la toate serviciile",
    discount: "15% REDUCERE",
    validUntil: "Permanent",
    conditions: ["Carnet de student valid", "Nu se cumulează", "Toate serviciile incluse"],
    image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600",
  },
];

const categories = [
  { id: "toate", label: "Toate", icon: Sparkles },
  { id: "ofertă-specială", label: "Oferte Speciale", icon: Tag },
  { id: "abonament", label: "Abonamente", icon: Users },
  { id: "pachet", label: "Pachete", icon: Gift },
  { id: "sezonier", label: "Sezoniere", icon: Calendar },
  { id: "grup", label: "Pentru Grupuri", icon: Heart },
  { id: "student", label: "Student", icon: Star },
];

export default function PromotionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("toate");

  const filteredPromotions = selectedCategory === "toate" 
    ? promotions 
    : promotions.filter(promo => promo.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-purple-600/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center mb-4">
              <Tag className="h-12 w-12 text-pink-600 mr-3" />
              <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900">
                Promoții Speciale
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descoperă ofertele noastre exclusive și economisește la serviciile tale preferate. 
              Actualizăm constant promoțiile pentru a-ți oferi cele mai bune prețuri!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sticky top-20 bg-white/90 backdrop-blur-md shadow-sm z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-5 py-2.5 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-pink-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <category.icon className="h-4 w-4 mr-2" />
                <span className="font-medium">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPromotions.map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 ${
                  promo.featured ? "ring-2 ring-pink-500 transform scale-105" : ""
                }`}
              >
                <div className="relative h-48">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />
                  {promo.discount && (
                    <div className="absolute top-4 left-4 bg-pink-600 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                      {promo.discount}
                    </div>
                  )}
                  {promo.tag && (
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {promo.tag}
                    </div>
                  )}
                  {promo.featured && (
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <p className="text-white font-semibold">⭐ Ofertă Recomandată</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-1">{promo.title}</h3>
                  <p className="text-pink-600 font-medium mb-3">{promo.subtitle}</p>
                  <p className="text-gray-600 mb-4">{promo.description}</p>

                  {/* Price Display */}
                  {promo.originalPrice && promo.discountPrice && (
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-gray-400 line-through text-lg">{promo.originalPrice}</span>
                      <span className="text-3xl font-bold text-pink-600">{promo.discountPrice}</span>
                    </div>
                  )}

                  {/* Price Range for Subscriptions */}
                  {promo.priceRange && (
                    <div className="bg-gray-50 rounded-lg p-3 mb-4">
                      {Object.entries(promo.priceRange).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1">
                          <span className="text-gray-600">{key}:</span>
                          <span className="font-semibold text-gray-900">{value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Validity */}
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Valabil până: {promo.validUntil}</span>
                  </div>

                  {/* Conditions */}
                  <div className="space-y-1 mb-6">
                    {promo.conditions.map((condition, idx) => (
                      <div key={idx} className="flex items-start text-sm text-gray-600">
                        <span className="text-pink-400 mr-2">✓</span>
                        <span>{condition}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="/bellachicstudio/programare"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Rezervă Acum
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Gift className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Nu rata nicio ofertă!
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Abonează-te la newsletter-ul nostru și primește promoții exclusive direct pe email
            </p>
            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Adresa ta de email"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-pink-600 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Abonează-te
              </button>
            </form>
            <p className="text-sm text-white/70 mt-4">
              *Poți să te dezabonezi oricând. Citește politica noastră de confidențialitate.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Termeni și Condiții Generale
          </h3>
          <div className="bg-white rounded-2xl shadow-md p-8">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <span className="text-pink-600 mr-3">•</span>
                <span>Toate promoțiile sunt valabile în limita locurilor disponibile</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3">•</span>
                <span>Ofertele nu se cumulează între ele sau cu alte reduceri</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3">•</span>
                <span>Programările trebuie făcute cu minim 24 de ore înainte</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3">•</span>
                <span>Anulările se acceptă cu minim 12 ore înainte de programare</span>
              </li>
              <li className="flex items-start">
                <span className="text-pink-600 mr-3">•</span>
                <span>Bella Chic Studio își rezervă dreptul de a modifica sau anula promoțiile</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}