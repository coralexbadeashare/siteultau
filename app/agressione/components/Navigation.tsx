'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

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
        : 'bg-gradient-to-b from-black/80 to-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/agressione" className="flex items-center space-x-2">
            <span className={`text-3xl font-bold transition-colors ${
              scrolled ? 'text-red-600' : 'text-white'
            }`}>
              AGRESSIONE
            </span>
            <span className={`text-sm transition-colors ${
              scrolled ? 'text-gray-600' : 'text-gray-300'
            }`}>
              GROUP
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/agressione" className={`font-medium transition-colors hover:text-red-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Acasă
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className={`font-medium transition-colors hover:text-red-600 flex items-center space-x-1 ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}>
                <span>Produse</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/agressione/produse/ambalaje" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                  Ambalaje din Hârtie
                </Link>
                <Link href="/agressione/produse/forestiere" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
                  Produse Forestiere
                </Link>
                <Link href="/agressione/produse/distributie" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors rounded-b-lg">
                  Distribuție en-gros
                </Link>
              </div>
            </div>

            <Link href="/agressione/despre" className={`font-medium transition-colors hover:text-red-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Despre Noi
            </Link>
            
            <Link href="/agressione/servicii" className={`font-medium transition-colors hover:text-red-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Servicii
            </Link>
            
            <Link href="/agressione/contact" className={`font-medium transition-colors hover:text-red-600 ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}>
              Contact
            </Link>
            
            <Link 
              href="/agressione/contact" 
              className="bg-red-600 text-white px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Solicită Ofertă
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
            <Link href="/agressione" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              Acasă
            </Link>
            <Link href="/agressione/produse" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              Produse
            </Link>
            <Link href="/agressione/despre" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              Despre Noi
            </Link>
            <Link href="/agressione/servicii" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              Servicii
            </Link>
            <Link href="/agressione/contact" className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors">
              Contact
            </Link>
            <div className="px-6 py-3">
              <Link 
                href="/agressione/contact" 
                className="block w-full bg-red-600 text-white text-center px-6 py-2 rounded-full font-medium hover:bg-red-700 transition-colors"
              >
                Solicită Ofertă
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}