'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Brain, Heart, Calendar } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Acasă', href: '/psihologcristinapopa' },
    { name: 'Despre Mine', href: '/psihologcristinapopa/despre' },
    { 
      name: 'Servicii', 
      href: '/psihologcristinapopa/servicii',
      dropdown: [
        { name: 'Psihoterapie Individuală', href: '/psihologcristinapopa/servicii#psihoterapie' },
        { name: 'Consiliere Psihologică', href: '/psihologcristinapopa/servicii#consiliere' },
        { name: 'Evaluare Psihologică', href: '/psihologcristinapopa/servicii#evaluare' }
      ]
    },
    { name: 'Studii', href: '/psihologcristinapopa/studii' },
    { name: 'Competențe', href: '/psihologcristinapopa/competente' },
    { name: 'Contact', href: '/psihologcristinapopa/contact' },
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-gradient-to-b from-purple-900/20 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/psihologcristinapopa" className="flex items-center space-x-3">
            <div className="relative">
              <Brain className={`h-10 w-10 ${isScrolled ? 'text-purple-600' : 'text-white'} transition-colors`} />
              <Heart className="h-5 w-5 text-pink-500 absolute -bottom-1 -right-1" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} transition-colors`}>
                Cristina Popa
              </h1>
              <p className={`text-xs ${isScrolled ? 'text-purple-600' : 'text-purple-200'} transition-colors`}>
                Psiholog & Psihoterapeut
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`flex items-center space-x-1 py-2 px-3 rounded-md transition-all duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-purple-600 hover:bg-purple-50' 
                      : 'text-white hover:text-purple-200 hover:bg-white/10'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />}
                </Link>
                
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/psihologcristinapopa/contact#programare"
              className="inline-flex items-center space-x-2 bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Calendar className="h-5 w-5" />
              <span>Programează-te</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="px-4 py-6 space-y-3">
          {navItems.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md transition-colors"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-4 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/psihologcristinapopa/contact#programare"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block w-full text-center bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors"
          >
            Programează-te
          </Link>
        </div>
      </div>
    </nav>
  )
}