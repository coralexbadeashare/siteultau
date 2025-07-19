import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Student Market</h3>
            <p className="text-gray-400 text-sm">
              The trusted marketplace for students to buy and sell textbooks, electronics, furniture, and more within the campus community.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/andrei/listings" className="text-gray-400 hover:text-white transition-colors">Browse Items</Link></li>
              <li><Link href="/andrei/post" className="text-gray-400 hover:text-white transition-colors">Sell Your Items</Link></li>
              <li><Link href="/andrei/chat" className="text-gray-400 hover:text-white transition-colors">Messages</Link></li>
              <li><Link href="/andrei/profile" className="text-gray-400 hover:text-white transition-colors">My Account</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/andrei/listings?category=textbooks" className="text-gray-400 hover:text-white transition-colors">Textbooks</Link></li>
              <li><Link href="/andrei/listings?category=electronics" className="text-gray-400 hover:text-white transition-colors">Electronics</Link></li>
              <li><Link href="/andrei/listings?category=furniture" className="text-gray-400 hover:text-white transition-colors">Furniture</Link></li>
              <li><Link href="/andrei/listings?category=clothing" className="text-gray-400 hover:text-white transition-colors">Clothing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Questions? Contact us at<br />
              <a href="mailto:support@studentmarket.com" className="hover:text-white transition-colors">support@studentmarket.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Student Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}