'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Truck } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/transportmarfaincluj', label: 'Acasă' },
    { href: '/transportmarfaincluj/transport-marfa', label: 'Transport Marfă' },
    { href: '/transportmarfaincluj/transport-mobila', label: 'Transport Mobilă' },
    { href: '/transportmarfaincluj/mutari-firme', label: 'Mutări Firme' },
    { href: '/transportmarfaincluj/mutari-mobila', label: 'Mutări Mobilă' },
    { href: '/transportmarfaincluj/galerie-foto', label: 'Galerie Foto' },
    { href: '/transportmarfaincluj/contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg py-2' : 'bg-gradient-to-b from-black/50 to-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/transportmarfaincluj" className="flex items-center gap-3">
            <Truck className={`h-8 w-8 ${scrolled ? 'text-blue-600' : 'text-white'}`} />
            <div>
              <h1 className={`text-xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
                Transport Marfă Cluj
              </h1>
              <p className={`text-xs ${scrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Mereu aproape de client!
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex gap-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-medium hover:text-blue-600 transition-colors ${
                      scrolled ? 'text-gray-700' : 'text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:0752816138"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-semibold">0752-816-138</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block py-2 text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t">
              <a
                href="tel:0752816138"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors justify-center"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">0752-816-138</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}