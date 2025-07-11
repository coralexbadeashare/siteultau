'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone, Mountain } from 'lucide-react'

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
    { name: 'Acasă', href: '/skaiurbancrag' },
    { 
      name: 'Info',
      items: [
        { name: 'Tarife', href: '/skaiurbancrag/tarife', icon: '💰' },
        { name: 'Program', href: '/skaiurbancrag/program', icon: '🕐' }
      ]
    },
    { 
      name: 'Cursuri',
      items: [
        { name: 'Ședință de Inițiere', href: '/skaiurbancrag/cursuri/initiere', icon: '🧗' },
        { name: 'Cursuri Copii & Adulți', href: '/skaiurbancrag/cursuri/copii-adulti', icon: '👥' },
        { name: 'Antrenament Personalizat', href: '/skaiurbancrag/cursuri/antrenament-personalizat', icon: '💪' },
        { name: 'Yoga', href: '/skaiurbancrag/cursuri/yoga', icon: '🧘' }
      ]
    },
    {
      name: 'SKAI Kids',
      items: [
        { name: 'Școala Altfel', href: '/skaiurbancrag/skai-kids/scoala-altfel', icon: '🎒' },
        { name: 'Petreceri Aniversare', href: '/skaiurbancrag/skai-kids/petreceri', icon: '🎉' },
        { name: 'Tabere Outdoor', href: '/skaiurbancrag/skai-kids/tabere', icon: '⛺' }
      ]
    },
    { name: 'Evenimente', href: '/skaiurbancrag/evenimente' },
    { name: 'Echipa', href: '/skaiurbancrag/echipa' },
    { name: 'Contact', href: '/skaiurbancrag/contact' }
  ]

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/skaiurbancrag" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center transform -rotate-3 transition-transform hover:rotate-0">
                <Mountain className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-500 rounded-full" />
            </div>
            <div>
              <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-gray-900' : 'text-white'}`}>
                SKAI
              </span>
              <p className={`text-xs -mt-1 ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Urban Crag
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.items ? (
                  <div className="relative group">
                    <button 
                      className={`flex items-center space-x-1 font-medium transition-colors py-2 ${
                        scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    <div className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-lg mt-2 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          <span className="text-xl">{subItem.icon}</span>
                          <span>{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-medium transition-colors ${
                      scrolled ? 'text-gray-700 hover:text-orange-600' : 'text-white hover:text-orange-400'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <a
              href="tel:+40742325429"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all flex items-center space-x-2 shadow-lg hover:shadow-orange-500/25"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">0742 325 429</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-600 focus:outline-none`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="bg-white shadow-lg px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.items ? (
                <div className="space-y-1">
                  <div className="font-medium text-gray-900 px-3 py-2">{item.name}</div>
                  {item.items.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center space-x-3 px-6 py-2 text-gray-600 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{subItem.icon}</span>
                      <span>{subItem.name}</span>
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4 border-t border-gray-200">
            <a
              href="tel:+40742325429"
              className="flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-4 h-4" />
              <span>0742 325 429</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation