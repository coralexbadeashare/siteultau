"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  {
    label: "Acasă",
    href: "/bellachicstudio",
  },
  {
    label: "Servicii",
    href: "/bellachicstudio/servicii",
    dropdownItems: [
      { label: "Coafor", href: "/bellachicstudio/servicii/coafor" },
      { label: "Manichiură & Pedichiură", href: "/bellachicstudio/servicii/manichiura-pedichiura" },
      { label: "Tratamente Faciale", href: "/bellachicstudio/servicii/tratamente-faciale" },
      { label: "Makeup", href: "/bellachicstudio/servicii/makeup" },
      { label: "Cosmetică", href: "/bellachicstudio/servicii/cosmetica" },
      { label: "Epilare", href: "/bellachicstudio/servicii/epilare" },
    ],
  },
  {
    label: "Promoții",
    href: "/bellachicstudio/promotii",
  },
  {
    label: "Galerie",
    href: "/bellachicstudio/galerie",
  },
  {
    label: "Blog",
    href: "/bellachicstudio/blog",
  },
  {
    label: "Despre Noi",
    href: "/bellachicstudio/despre",
  },
  {
    label: "Contact",
    href: "/bellachicstudio/contact",
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/bellachicstudio" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <span className="text-white font-bold text-xl">BC</span>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-pink-400 rounded-full animate-pulse" />
            </div>
            <div>
              <div className={`font-playfair font-bold text-xl transition-colors duration-300 ${scrolled ? "text-gray-900" : "text-white"}`}>
                Bella Chic
              </div>
              <div className={`text-xs tracking-wider transition-colors duration-300 ${scrolled ? "text-gray-600" : "text-white/80"}`}>
                STUDIO
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className={`relative flex items-center space-x-1 py-2 font-medium transition-all duration-300 ${
                    scrolled ? "text-gray-700 hover:text-pink-600" : "text-white hover:text-pink-300"
                  }`}
                >
                  <span className="relative">
                    {item.label}
                    <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-pink-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      scrolled ? "" : "bg-gradient-to-r from-pink-300 to-purple-300"
                    }`} />
                  </span>
                  {item.dropdownItems && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdownItems && (
                  <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-2xl shadow-2xl py-3 border border-gray-100 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50 opacity-50" />
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="relative block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-pink-100 hover:to-purple-100 hover:text-pink-700 transition-all duration-300 group/item"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{subItem.label}</span>
                            <svg className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0773842417"
              className={`group flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${
                scrolled
                  ? "text-pink-600 border-2 border-pink-600 hover:bg-pink-600 hover:text-white hover:shadow-lg hover:shadow-pink-600/20"
                  : "text-white border-2 border-white/50 hover:bg-white/20 hover:border-white/80 backdrop-blur-sm"
              }`}
            >
              <Phone className="h-4 w-4 group-hover:animate-pulse" />
              <span className="font-semibold">0773 842 417</span>
            </a>
            <Link
              href="/bellachicstudio/programare"
              className="group relative flex items-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl hover:shadow-pink-600/25 transform hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Calendar className="relative h-4 w-4" />
              <span className="relative">Programare</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-md cursor-pointer ${
              scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/20"
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block text-gray-700 hover:text-pink-600 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block text-gray-600 hover:text-pink-600 py-1 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 space-y-3">
                <a
                  href="tel:0773842417"
                  className="flex items-center justify-center space-x-2 px-4 py-3 border border-pink-600 text-pink-600 rounded-full hover:bg-pink-600 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  <span>0773 842 417</span>
                </a>
                <Link
                  href="/bellachicstudio/programare"
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <Calendar className="h-4 w-4" />
                  <span>Programare Online</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}