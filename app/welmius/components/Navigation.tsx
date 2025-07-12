'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Truck, Phone } from 'lucide-react'

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
    { name: 'Acasă', href: '/welmius' },
    { name: 'Remorci de închiriat', href: '/welmius/remorci-de-inchiriat' },
    { name: 'Despre noi', href: '/welmius/despre-noi' },
    { name: 'Tractare auto / Transport marfă', href: '/welmius/tractare-auto-transport-marfa' },
    { name: 'Informații utile', href: '/welmius/informatii-utile' },
    { name: 'Contact', href: '/welmius/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/welmius" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/50 transition-all duration-300">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">WELMIUS</h1>
              <p className="text-xs text-orange-600">Transport & Închirieri</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
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
              href="tel:0742020254" 
              className="btn-primary ml-6"
            >
              <Phone className="w-4 h-4" />
              0742 020 254
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-x-0 top-20 bg-white shadow-lg transform transition-transform duration-300 ${
        isMenuOpen ? 'translate-y-0' : '-translate-y-full pointer-events-none'
      }`}>
        <div className="container mx-auto px-4 py-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="block py-3 text-gray-700 hover:text-orange-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:0742020254" 
            className="btn-primary w-full mt-4 justify-center"
          >
            <Phone className="w-4 h-4" />
            0742 020 254
          </a>
        </div>
      </div>
    </nav>
  )
}