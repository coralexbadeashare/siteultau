'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Leaf, Sun } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-4' 
        : 'bg-gradient-to-b from-green-900/80 to-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/fermapedagogica" className="flex items-center space-x-2">
            <div className="flex items-center">
              <Leaf className={`w-8 h-8 transition-colors ${
                scrolled ? 'text-green-600' : 'text-yellow-400'
              }`} />
              <Sun className={`w-6 h-6 -ml-2 transition-colors ${
                scrolled ? 'text-yellow-500' : 'text-yellow-300'
              }`} />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors leading-tight ${
                scrolled ? 'text-green-700' : 'text-white'
              }`}>
                Ferma Pedagogică
              </h1>
              <p className={`text-xs transition-colors ${
                scrolled ? 'text-green-600' : 'text-green-100'
              }`}>
                Educație prin Natură
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/fermapedagogica" className={`font-medium transition-colors hover:text-green-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Acasă
            </Link>
            
            <Link href="/fermapedagogica/despre" className={`font-medium transition-colors hover:text-green-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Despre Noi
            </Link>

            {/* Activities Dropdown */}
            <div className="relative group">
              <button className={`font-medium transition-colors hover:text-green-600 flex items-center space-x-1 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <span>Activități</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/fermapedagogica/activitati/vizite-scolare" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                  Vizite Școlare
                </Link>
                <Link href="/fermapedagogica/activitati/ateliere" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                  Ateliere Creative
                </Link>
                <Link href="/fermapedagogica/activitati/tabere" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
                  Tabere de Vară
                </Link>
                <Link href="/fermapedagogica/activitati/evenimente" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors rounded-b-lg">
                  Evenimente Speciale
                </Link>
              </div>
            </div>

            <Link href="/fermapedagogica/animale" className={`font-medium transition-colors hover:text-green-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Animalele Noastre
            </Link>
            
            <Link href="/fermapedagogica/galerie" className={`font-medium transition-colors hover:text-green-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Galerie
            </Link>
            
            <Link href="/fermapedagogica/contact" className={`font-medium transition-colors hover:text-green-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Vizitează-ne
            </Link>
            
            <Link 
              href="/fermapedagogica/rezervare" 
              className="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Rezervă o Vizită
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-xl overflow-hidden">
            <Link href="/fermapedagogica" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Acasă
            </Link>
            <Link href="/fermapedagogica/despre" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Despre Noi
            </Link>
            <Link href="/fermapedagogica/activitati" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Activități
            </Link>
            <Link href="/fermapedagogica/animale" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Animalele Noastre
            </Link>
            <Link href="/fermapedagogica/galerie" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Galerie
            </Link>
            <Link href="/fermapedagogica/contact" className="block px-6 py-3 text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors">
              Vizitează-ne
            </Link>
            <div className="px-6 py-3">
              <Link 
                href="/fermapedagogica/rezervare" 
                className="block w-full bg-green-600 text-white text-center px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors"
              >
                Rezervă o Vizită
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}