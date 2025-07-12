'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const services = [
    { name: 'Vopsire Completă', href: '/jpxpaintcar/servicii#vopsire-completa' },
    { name: 'Retușuri și Reparații', href: '/jpxpaintcar/servicii#retusuri' },
    { name: 'Protecție Ceramică', href: '/jpxpaintcar/servicii#protectie-ceramica' },
    { name: 'Folie de Protecție', href: '/jpxpaintcar/servicii#folie-protectie' },
    { name: 'Polish și Detailing', href: '/jpxpaintcar/servicii#polish' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/jpxpaintcar" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-orange-600 rounded-lg flex items-center justify-center transform rotate-45">
              <span className="text-white font-bold text-xl transform -rotate-45">JPX</span>
            </div>
            <div className={`transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              <h1 className="text-xl font-bold">JPX Paint Car</h1>
              <p className="text-xs">Excelență în Vopsitorie Auto</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/jpxpaintcar" 
              className={`font-medium transition-colors hover:text-red-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Acasă
            </Link>
            
            <Link 
              href="/jpxpaintcar/despre" 
              className={`font-medium transition-colors hover:text-red-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Despre Noi
            </Link>

            <div className="relative group">
              <button className={`font-medium transition-colors hover:text-red-600 flex items-center space-x-1 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <span>Servicii</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              href="/jpxpaintcar/galerie" 
              className={`font-medium transition-colors hover:text-red-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Galerie
            </Link>

            <Link 
              href="/jpxpaintcar/contact" 
              className={`font-medium transition-colors hover:text-red-600 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+40721234567" 
              className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>0721 234 567</span>
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <Link href="/jpxpaintcar" className="block py-2 text-gray-700 hover:text-red-600">
              Acasă
            </Link>
            <Link href="/jpxpaintcar/despre" className="block py-2 text-gray-700 hover:text-red-600">
              Despre Noi
            </Link>
            <Link href="/jpxpaintcar/servicii" className="block py-2 text-gray-700 hover:text-red-600">
              Servicii
            </Link>
            <Link href="/jpxpaintcar/galerie" className="block py-2 text-gray-700 hover:text-red-600">
              Galerie
            </Link>
            <Link href="/jpxpaintcar/contact" className="block py-2 text-gray-700 hover:text-red-600">
              Contact
            </Link>
            <div className="pt-4 border-t mt-4">
              <a href="tel:+40721234567" className="flex items-center space-x-2 text-red-600">
                <Phone className="w-4 h-4" />
                <span>0721 234 567</span>
              </a>
              <a href="mailto:contact@jpxpaintcar.ro" className="flex items-center space-x-2 text-red-600 mt-2">
                <Mail className="w-4 h-4" />
                <span>contact@jpxpaintcar.ro</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}