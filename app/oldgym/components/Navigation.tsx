'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Dumbbell, ChevronDown } from 'lucide-react'

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
    { name: 'Acasă', href: '/oldgym' },
    { name: 'Despre', href: '/oldgym/despre' },
    { 
      name: 'Clase', 
      href: '/oldgym/clase',
      dropdown: [
        { name: 'Fitness', href: '/oldgym/clase#fitness' },
        { name: 'Bodybuilding', href: '/oldgym/clase#bodybuilding' },
        { name: 'CrossFit', href: '/oldgym/clase#crossfit' },
        { name: 'Yoga', href: '/oldgym/clase#yoga' },
        { name: 'Box', href: '/oldgym/clase#box' },
      ]
    },
    { name: 'Antrenori', href: '/oldgym/antrenori' },
    { name: 'Prețuri', href: '/oldgym/preturi' },
    { name: 'Contact', href: '/oldgym/contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-black/80 to-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/oldgym" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-8 h-8 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bebas text-white tracking-wider">OLD GYM</h1>
              <p className="text-xs text-gray-400 -mt-1">FORGE YOUR LEGACY</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <>
                    <button className="flex items-center space-x-1 text-white font-medium hover:text-amber-500 transition-colors">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top">
                      <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-3 text-gray-300 hover:bg-red-600 hover:text-white transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link 
                    href={link.href}
                    className="text-white font-medium hover:text-amber-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              href="/oldgym/contact" 
              className="bg-gradient-to-r from-red-600 to-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Începe Acum
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link 
                  href={link.href} 
                  className="block py-3 text-white hover:text-amber-500 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-gray-400 hover:text-amber-500 text-sm"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link 
              href="/oldgym/contact" 
              className="block mt-4 bg-gradient-to-r from-red-600 to-amber-500 text-white text-center py-3 rounded-full font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Începe Acum
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}