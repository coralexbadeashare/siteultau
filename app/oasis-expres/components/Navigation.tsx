'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Droplet, Phone } from 'lucide-react'

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
    { name: 'Acasă', href: '/oasis-expres' },
    { name: 'Cum Funcționează', href: '/oasis-expres#cum-functioneaza' },
    { name: 'Programe & Prețuri', href: '/oasis-expres#preturi' },
    { name: 'Galerie', href: '/oasis-expres#galerie' },
    { name: 'Contact', href: '/oasis-expres/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/oasis-expres" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Droplet className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">OASIS EXPRES</h1>
              <p className="text-xs text-cyan-400">Spălătorie Auto Premium</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="nav-link"
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:0772006156" 
              className="btn-primary ml-4"
            >
              <Phone className="w-4 h-4" />
              0772 006 156
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-20 bg-gray-900/95 backdrop-blur-xl transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block py-3 text-white hover:text-cyan-400 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:0772006156" 
            className="btn-primary w-full mt-4 justify-center"
          >
            <Phone className="w-4 h-4" />
            0772 006 156
          </a>
        </div>
      </div>
    </nav>
  )
}