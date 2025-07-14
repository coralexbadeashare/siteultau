'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, GraduationCap, Phone } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const courses = [
    { name: 'Manager Transport', href: '/fatii/cursuri/manager-transport' },
    { name: 'Șofer Profesionist Marfă', href: '/fatii/cursuri/sofer-marfa' },
    { name: 'Șofer Profesionist Persoane', href: '/fatii/cursuri/sofer-persoane' },
    { name: 'Instructor Auto', href: '/fatii/cursuri/instructor' },
    { name: 'Consilier ADR', href: '/fatii/cursuri/adr' },
    { name: 'Transport Animale', href: '/fatii/cursuri/transport-animale' },
    { name: 'Taxi și Închiriere', href: '/fatii/cursuri/taxi' },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-gradient-to-b from-black/50 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/fatii" className="flex items-center space-x-3">
            <GraduationCap className={`h-10 w-10 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
            <span className={`text-2xl font-bold ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              FATII
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/fatii" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Acasă
            </Link>

            <div className="relative group">
              <button className={`flex items-center space-x-1 transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
              }`}>
                <span>Cursuri</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                {courses.map((course) => (
                  <Link
                    key={course.href}
                    href={course.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/fatii/acreditari" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Acreditări
            </Link>

            <Link href="/fatii/chestionare" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Chestionare Online
            </Link>

            <Link href="/fatii/legislatie" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Legislație
            </Link>

            <Link href="/fatii/centre" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Centre de Pregătire
            </Link>

            <Link href="/fatii/contact" className={`transition-colors ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-300'
            }`}>
              Contact
            </Link>

            <a href="tel:+40213160275" className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors">
              <Phone className="h-4 w-4" />
              <span>021 316 02 75</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden bg-white rounded-b-lg shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link href="/fatii" className="block text-gray-700 hover:text-blue-600">
                Acasă
              </Link>
              
              <div>
                <div className="font-semibold text-gray-900 mb-2">Cursuri</div>
                {courses.map((course) => (
                  <Link
                    key={course.href}
                    href={course.href}
                    className="block pl-4 py-2 text-gray-600 hover:text-blue-600"
                  >
                    {course.name}
                  </Link>
                ))}
              </div>

              <Link href="/fatii/acreditari" className="block text-gray-700 hover:text-blue-600">
                Acreditări
              </Link>
              <Link href="/fatii/chestionare" className="block text-gray-700 hover:text-blue-600">
                Chestionare Online
              </Link>
              <Link href="/fatii/legislatie" className="block text-gray-700 hover:text-blue-600">
                Legislație
              </Link>
              <Link href="/fatii/centre" className="block text-gray-700 hover:text-blue-600">
                Centre de Pregătire
              </Link>
              <Link href="/fatii/contact" className="block text-gray-700 hover:text-blue-600">
                Contact
              </Link>

              <a href="tel:+40213160275" className="flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700">
                <Phone className="h-4 w-4" />
                <span>021 316 02 75</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}