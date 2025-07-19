"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Heart, Star, Target, Sparkles, CheckCircle } from "lucide-react";

const teamMembers = [
  {
    name: "Maria Ionescu",
    role: "Fondator & Stilist Principal",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400",
    experience: "15 ani experiență",
    specialties: ["Colorare Creativă", "Tunsori Moderne", "Coafuri Evenimente"],
  },
  {
    name: "Ana Popescu",
    role: "Specialist Manichiură",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400",
    experience: "10 ani experiență",
    specialties: ["Nail Art", "Manichiură Gel", "Pedichiură Medicală"],
  },
  {
    name: "Elena Dumitrescu",
    role: "Cosmetician Principal",
    image: "https://images.unsplash.com/photo-1559599101-f09722fb4948?w=400",
    experience: "12 ani experiență",
    specialties: ["Tratamente Faciale", "Dermapen", "Hidrodermabraziune"],
  },
  {
    name: "Cristina Radu",
    role: "Specialist Makeup",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400",
    experience: "8 ani experiență",
    specialties: ["Makeup Mireasă", "Makeup Editorial", "Cursuri Makeup"],
  },
];

const values = [
  {
    icon: Heart,
    title: "Pasiune",
    description: "Fiecare serviciu este realizat cu pasiune și dedicare pentru frumusețea ta.",
  },
  {
    icon: Star,
    title: "Excelență",
    description: "Ne străduim să oferim servicii de cea mai înaltă calitate în fiecare zi.",
  },
  {
    icon: Users,
    title: "Comunitate",
    description: "Construim relații durabile cu clienții noștri, bazate pe încredere.",
  },
  {
    icon: Target,
    title: "Inovație",
    description: "Suntem mereu la curent cu ultimele tendințe și tehnici din industrie.",
  },
];

const milestones = [
  { year: "2015", event: "Deschiderea salonului Bella Chic Studio" },
  { year: "2017", event: "Extinderea echipei și a serviciilor oferite" },
  { year: "2019", event: "Renovare completă și modernizare salon" },
  { year: "2021", event: "Lansarea programului de fidelitate" },
  { year: "2023", event: "Peste 5000 de clienți fericiți" },
  { year: "2025", event: "10 ani de excelență în frumusețe" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-gray-900 mb-4">
              Despre Bella Chic Studio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              O poveste de pasiune, dedicare și frumusețe care a început în 2015
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                Povestea Noastră
              </h2>
              <p className="text-gray-600 mb-4">
                Bella Chic Studio a început ca un vis al Mariei Ionescu, o stilistă pasionată 
                care își dorea să creeze un spațiu unde frumusețea și relaxarea să se îmbine perfect. 
                Din 2015, am crescut de la un mic salon la unul dintre cele mai apreciate studiouri 
                de înfrumusețare din zona Militari.
              </p>
              <p className="text-gray-600 mb-4">
                Cu o echipă de profesioniști dedicați și o viziune clară asupra excelenței, 
                am reușit să transformăm mii de clienți și să le oferim nu doar servicii de 
                înfrumusețare, ci experiențe memorabile.
              </p>
              <p className="text-gray-600">
                Astăzi, Bella Chic Studio reprezintă mai mult decât un salon - suntem o 
                comunitate unde fiecare client este tratat cu grijă și profesionalism, 
                iar frumusețea ta interioară și exterioară sunt celebrate în egală măsură.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400"
                  alt="Salon interior"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg"
                />
                <Image
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400"
                  alt="Team at work"
                  width={300}
                  height={400}
                  className="rounded-2xl shadow-lg mt-8"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-pink-600 text-white p-6 rounded-2xl shadow-xl">
                <div className="text-3xl font-bold">10+</div>
                <div>Ani de Experiență</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile Noastre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare zi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Echipa Noastră
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profesioniști pasionați care transformă frumusețea în artă
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-pink-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience}</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-pink-400 mr-2" />
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-playfair font-bold text-white mb-4">
              Parcursul Nostru
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Momente importante din istoria Bella Chic Studio
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/30"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                } mb-8`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                    <div className="text-2xl font-bold text-white">{milestone.year}</div>
                    <div className="text-white/90">{milestone.event}</div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
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
              Recunoaștere și Premii
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aprecierea clienților și a industriei pentru munca noastră
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Best Beauty Salon 2023",
                description: "Premiul pentru excelență în servicii de înfrumusețare",
              },
              {
                icon: Star,
                title: "4.9/5 Rating Google",
                description: "Peste 500 de recenzii pozitive de la clienții noștri",
              },
              {
                icon: Sparkles,
                title: "Top 10 Saloane București",
                description: "Recunoscut ca unul dintre cele mai bune saloane din capitală",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <award.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{award.title}</h3>
                <p className="text-gray-600">{award.description}</p>
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
              Hai să facem cunoștință!
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Vino să ne cunoști personal și să descoperi cum putem transforma frumusețea ta
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/bellachicstudio/programare"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                Programează o Vizită
              </Link>
              <Link
                href="/bellachicstudio/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 border-2 border-pink-600 rounded-full hover:bg-pink-50 transform hover:scale-105 transition-all duration-300"
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