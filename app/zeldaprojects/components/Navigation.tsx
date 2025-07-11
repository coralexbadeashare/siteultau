'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Package, Leaf, Factory, Phone } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState('')

  const productCategories = [
    {
      title: 'Ambalaje Ecologice',
      icon: <Leaf className="w-4 h-4" />,
      items: [
        { name: 'Tacâmuri', href: '/zeldaprojects/produse/tacamuri' },
        { name: 'Ambalaje din trestie de zahăr', href: '/zeldaprojects/produse/trestie-zahar' },
        { name: 'Ambalaje din hârtie și carton', href: '/zeldaprojects/produse/hartie-carton' },
        { name: 'Folii biodegradabile', href: '/zeldaprojects/produse/folii' },
        { name: 'Utilaje de ambalat', href: '/zeldaprojects/produse/utilaje' }
      ]
    },
    {
      title: 'Ambalaje Catering',
      icon: <Package className="w-4 h-4" />,
      items: [
        { name: 'Caserole PP', href: '/zeldaprojects/produse/caserole-pp' },
        { name: 'Caserole PET', href: '/zeldaprojects/produse/caserole-pet' },
        { name: 'Caserole rotunde', href: '/zeldaprojects/produse/caserole-rotunde' },
        { name: 'Platouri evenimente', href: '/zeldaprojects/produse/platouri' },
        { name: 'Caserole aluminiu', href: '/zeldaprojects/produse/aluminiu' }
      ]
    },
    {
      title: 'Producție',
      icon: <Factory className="w-4 h-4" />,
      items: [
        { name: 'Tuburi standard', href: '/zeldaprojects/produse/tuburi-standard' },
        { name: 'Tuburi cu rezistență sporită', href: '/zeldaprojects/produse/tuburi-rezistenta' }
      ]
    }
  ]

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/zeldaprojects" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <Package className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zelda Projects</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/zeldaprojects" className="text-gray-700 hover:text-green-600 transition-colors">
              Acasă
            </Link>
            
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors py-2"
                onMouseEnter={() => setDropdownOpen('products')}
                onMouseLeave={() => setDropdownOpen('')}
              >
                <span>Produse</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {dropdownOpen === 'products' && (
                <div 
                  className="absolute top-full left-0 w-[600px] bg-white shadow-xl rounded-lg -mt-1 p-6 grid grid-cols-3 gap-6"
                  onMouseEnter={() => setDropdownOpen('products')}
                  onMouseLeave={() => setDropdownOpen('')}
                >
                  {productCategories.map((category, idx) => (
                    <div key={idx}>
                      <div className="flex items-center space-x-2 mb-3 text-green-600">
                        {category.icon}
                        <h3 className="font-semibold">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <Link 
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-green-600 transition-colors"
                            >
                              {item.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/zeldaprojects/despre-noi" className="text-gray-700 hover:text-green-600 transition-colors">
              Despre Noi
            </Link>
            
            <Link href="/zeldaprojects/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>

            <Link 
              href="/zeldaprojects/contact" 
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>0733 076 994</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              href="/zeldaprojects"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Acasă
            </Link>
            
            <div className="px-3 py-2">
              <div className="font-semibold text-gray-900 mb-2">Produse</div>
              {productCategories.map((category, idx) => (
                <div key={idx} className="mb-4">
                  <div className="flex items-center space-x-2 mb-2 text-green-600">
                    {category.icon}
                    <span className="text-sm font-medium">{category.title}</span>
                  </div>
                  <div className="ml-6 space-y-1">
                    {category.items.map((item, itemIdx) => (
                      <Link
                        key={itemIdx}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-green-600 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <Link 
              href="/zeldaprojects/despre-noi"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>
            
            <Link 
              href="/zeldaprojects/contact"
              className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <div className="px-3 py-2">
              <Link 
                href="/zeldaprojects/contact"
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-4 h-4" />
                <span>0733 076 994</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation