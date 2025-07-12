'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Zap } from 'lucide-react'

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

  const navLinks = [
    { name: 'Acasă', href: '/promacomprod' },
    { name: 'Servicii', href: '/promacomprod/servicii' },
    { name: 'Galerie Foto', href: '/promacomprod/galerie' },
    { name: 'Contact', href: '/promacomprod/contact' },
    { name: 'Hartă', href: '/promacomprod/harta' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/promacomprod" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md">
              <Zap className="w-7 h-7 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">PROMACOM PROD</h1>
              <p className="text-xs text-gray-600">Reparații Motoare Electrice</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="nav-link text-gray-700 font-medium hover:text-blue-700 transition-colors relative"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/promacomprod/contact" 
              className="btn-primary"
            >
              Solicită Ofertă
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="block py-3 text-gray-700 hover:text-blue-700 font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/promacomprod/contact" 
              className="block mt-4 bg-gradient-to-r from-blue-700 to-blue-600 text-white text-center py-3 rounded-lg font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicită Ofertă
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}