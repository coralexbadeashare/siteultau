'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Acasă', href: '/bishojo' },
    { name: 'Servicii', href: '/bishojo#servicii' },
    { name: 'Portofoliu', href: '/bishojo#portofoliu' },
    { name: 'Despre Mine', href: '/bishojo#despre' },
    { name: 'Contact', href: '/bishojo#contact' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/30 to-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/bishojo" className="flex items-center space-x-2">
            <Heart className={`h-8 w-8 ${scrolled ? 'text-pink-500' : 'text-white'} fill-current`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              Bishojo Beauty
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-pink-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/bishojo#contact"
              className="bg-pink-500 text-white px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
            >
              Programează-te
            </Link>
          </div>

          <button
            className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-pink-500 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/bishojo#contact"
                className="block bg-pink-500 text-white text-center px-6 py-2 rounded-full hover:bg-pink-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Programează-te
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation