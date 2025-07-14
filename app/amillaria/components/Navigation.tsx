'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Leaf, ShoppingBag, Facebook, Instagram } from 'lucide-react';

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

  const products = [
    { name: 'Sucuri Naturale', href: '/amillaria/produse/sucuri', description: '100% fructe presate la rece' },
    { name: 'Dulcețuri', href: '/amillaria/produse/dulceata', description: 'Rețete tradiționale artizanale' },
    { name: 'Preparate', href: '/amillaria/produse/preparate', description: 'Conserve și murături naturale' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-4' 
        : 'bg-white/90 backdrop-blur-sm py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/amillaria" className="flex items-center gap-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <span className="text-2xl font-bold text-gray-900">
              Amillaria
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/amillaria" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Acasă
            </Link>

            <Link href="/amillaria/povestea-noastra" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Povestea Noastră
            </Link>

            <Link href="/amillaria/cum-producem" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Cum Producem
            </Link>

            <div className="relative group">
              <button className="flex items-center gap-1 font-medium text-gray-700 hover:text-green-600 transition-colors">
                Produsele Noastre
                <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 w-64 mt-2 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2">
                {products.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="block px-6 py-4 hover:bg-green-50 transition-colors border-b last:border-0"
                  >
                    <div className="font-medium text-gray-900">{product.name}</div>
                    <div className="text-sm text-gray-600 mt-1">{product.description}</div>
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/amillaria/servicii" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Servicii
            </Link>

            <Link href="/amillaria/contact" className="font-medium text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>

            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-300">
              <a
                href="https://facebook.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <Link 
                href="/amillaria/produse" 
                className="bg-green-600 text-white px-5 py-2 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Magazin
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden mt-4 ${isOpen ? 'block' : 'hidden'}`}>
          <div className="bg-white rounded-lg shadow-lg p-4 space-y-3">
            <Link href="/amillaria" className="block text-gray-700 hover:text-green-600 font-medium py-2">
              Acasă
            </Link>
            
            <Link href="/amillaria/povestea-noastra" className="block text-gray-700 hover:text-green-600 font-medium py-2">
              Povestea Noastră
            </Link>

            <Link href="/amillaria/cum-producem" className="block text-gray-700 hover:text-green-600 font-medium py-2">
              Cum Producem
            </Link>

            <div className="space-y-2">
              <div className="text-gray-700 font-medium py-2">Produsele Noastre</div>
              {products.map((product) => (
                <Link
                  key={product.href}
                  href={product.href}
                  className="block pl-4 py-2 text-gray-600 hover:text-green-600"
                >
                  {product.name}
                </Link>
              ))}
            </div>

            <Link href="/amillaria/servicii" className="block text-gray-700 hover:text-green-600 font-medium py-2">
              Servicii
            </Link>

            <Link href="/amillaria/contact" className="block text-gray-700 hover:text-green-600 font-medium py-2">
              Contact
            </Link>

            <div className="flex gap-4 pt-4 border-t">
              <a
                href="https://facebook.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/amillaria"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}