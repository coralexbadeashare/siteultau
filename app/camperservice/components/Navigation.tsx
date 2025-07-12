'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingCart, User, ChevronDown, Wrench, Phone } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/camperservice', label: 'Acasă' },
    { href: '/camperservice/despre', label: 'Despre Noi' },
    { href: '/camperservice/servicii', label: 'Servicii' },
    { href: '/camperservice/magazin', label: 'Magazin' },
    { href: '/camperservice/blog', label: 'Blog' },
    { href: '/camperservice/contact', label: 'Contact' }
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-4' : 'bg-gradient-to-b from-black/50 to-transparent py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/camperservice" className="flex items-center space-x-3">
            <div className={`bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg ${scrolled ? '' : 'shadow-lg'}`}>
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                CamperService
              </h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Service & Accesorii
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+40745913161"
              className={`flex items-center space-x-2 ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">0745 913 161</span>
            </a>
            <Link
              href="/camperservice/cont"
              className={`p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'hover:bg-gray-100 text-gray-700' 
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <User className="h-5 w-5" />
            </Link>
            <Link
              href="/camperservice/cos"
              className="relative p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl">
            <div className="p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-4">
                <a
                  href="tel:+40745913161"
                  className="flex items-center space-x-2 text-blue-600"
                >
                  <Phone className="h-4 w-4" />
                  <span className="font-medium">0745 913 161</span>
                </a>
                <div className="flex space-x-4">
                  <Link
                    href="/camperservice/cont"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <User className="h-5 w-5" />
                    <span>Contul Meu</span>
                  </Link>
                  <Link
                    href="/camperservice/cos"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Coș ({cartItems})</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}