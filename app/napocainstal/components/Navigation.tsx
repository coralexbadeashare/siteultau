'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Instalații Termice', href: '/napocainstal/servicii/termice', 
      description: 'Centrale termice, calorifere, încălzire în pardoseală' },
    { name: 'Instalații Sanitare', href: '/napocainstal/servicii/sanitare',
      description: 'Instalații apă, canalizare, obiecte sanitare' },
    { name: 'Climatizare', href: '/napocainstal/servicii/climatizare',
      description: 'Aer condiționat, ventilație, dezumidificare' },
  ];

  return (
    <>
      <div className="bg-blue-900 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="tel:+40744123456" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span>0744 123 456</span>
            </a>
            <a href="mailto:contact@napocainstal.ro" className="flex items-center gap-1 hover:text-blue-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span>contact@napocainstal.ro</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>Cluj-Napoca</span>
          </div>
        </div>
      </div>

      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-4' 
          : 'bg-gradient-to-b from-black/20 to-transparent py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link href="/napocainstal" className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}>
              Napoca<span className="text-orange-500">Instal</span>
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/20'
              }`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/napocainstal" className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'
              }`}>
                Acasă
              </Link>

              <div className="relative group">
                <button className={`flex items-center gap-1 font-medium transition-colors ${
                  scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'
                }`}>
                  Servicii
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>
                <div className="absolute top-full left-0 w-80 mt-2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-6 py-4 hover:bg-blue-50 transition-colors border-b last:border-0"
                    >
                      <div className="font-medium text-gray-900">{service.name}</div>
                      <div className="text-sm text-gray-600 mt-1">{service.description}</div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/napocainstal/despre" className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'
              }`}>
                Despre Noi
              </Link>

              <Link href="/napocainstal/portofoliu" className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'
              }`}>
                Portofoliu
              </Link>

              <Link href="/napocainstal/contact" className={`font-medium transition-colors ${
                scrolled ? 'text-gray-700 hover:text-blue-900' : 'text-white hover:text-orange-300'
              }`}>
                Contact
              </Link>

              <Link 
                href="/napocainstal/contact" 
                className="bg-orange-500 text-white px-6 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Solicită Ofertă
              </Link>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
              <Link href="/napocainstal" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
                Acasă
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-700 font-medium py-2">Servicii</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block pl-4 py-2 text-gray-600 hover:text-blue-900"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link href="/napocainstal/despre" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
                Despre Noi
              </Link>

              <Link href="/napocainstal/portofoliu" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
                Portofoliu
              </Link>

              <Link href="/napocainstal/contact" className="block text-gray-700 hover:text-blue-900 font-medium py-2">
                Contact
              </Link>

              <Link 
                href="/napocainstal/contact" 
                className="block bg-orange-500 text-white text-center px-6 py-3 rounded-full font-medium hover:bg-orange-600 transition-colors"
              >
                Solicită Ofertă
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}