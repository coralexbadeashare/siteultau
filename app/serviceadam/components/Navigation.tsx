'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, Clock, ChevronDown } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/serviceadam', label: 'Acasă' },
    { 
      href: '/serviceadam/servicii', 
      label: 'Servicii',
      dropdown: [
        { href: '/serviceadam/servicii#diagnosticare', label: 'Diagnosticare' },
        { href: '/serviceadam/servicii#mecanica', label: 'Mecanică' },
        { href: '/serviceadam/servicii#electrica', label: 'Electrică' },
        { href: '/serviceadam/servicii#tinichigerie', label: 'Tinichigerie' },
      ]
    },
    { href: '/serviceadam/despre', label: 'Despre Noi' },
    { href: '/serviceadam/contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-sm shadow-lg' 
        : 'bg-gradient-to-b from-black/80 via-black/50 to-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-1 text-xs">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3" />
              <a href="tel:0740123456" className="hover:underline">0740 123 456</a>
            </span>
            <span className="hidden sm:flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Luni-Vineri: 8:00-18:00, Sâmbătă: 9:00-14:00
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/serviceadam" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">SA</span>
            </div>
            <span className="text-2xl font-bold text-white">Service Adam</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-red-400 transition-colors duration-200 flex items-center gap-1 font-medium"
                >
                  {link.label}
                  {link.dropdown && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-black/95 backdrop-blur-sm rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-red-600/20 hover:text-red-400 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/serviceadam/contact"
              className="bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
            >
              Programează-te
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-red-400 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-sm rounded-lg mb-4">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block text-white hover:text-red-400 py-3 px-4 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-8">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-300 hover:text-red-400 py-2 px-4 text-sm transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/serviceadam/contact"
              className="block mx-4 mt-4 text-center bg-red-600 text-white px-6 py-2.5 rounded-lg hover:bg-red-700 transition-colors duration-200 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Programează-te
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}