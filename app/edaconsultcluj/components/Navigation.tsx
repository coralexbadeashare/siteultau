'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import styles from './Navigation.module.css'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : styles.navTransparent}`}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <Link 
            href="/edaconsultcluj" 
            className={`${styles.logo} ${scrolled ? styles.logoColored : styles.logoWhite}`}
          >
            EDA CONSULT
          </Link>

          {/* Desktop Navigation */}
          <div className={styles.desktopNav}>
            <Link 
              href="/edaconsultcluj" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : ''}`}
            >
              Acasă
            </Link>
            
            <div className={styles.dropdownWrapper}>
              <button 
                className={`${styles.dropdownButton} ${styles.navLink} ${scrolled ? styles.navLinkDark : ''}`}
              >
                Servicii
                <ChevronDown size={16} />
              </button>
              <div className={styles.dropdownMenu}>
                <Link href="/edaconsultcluj/servicii" className={styles.dropdownLink}>
                  Toate Serviciile
                </Link>
                <Link href="/edaconsultcluj/servicii#tamplarie" className={styles.dropdownLink}>
                  Tâmplărie Construcții
                </Link>
                <Link href="/edaconsultcluj/servicii#mobilier" className={styles.dropdownLink}>
                  Mobilier la Comandă
                </Link>
                <Link href="/edaconsultcluj/servicii#reparatii" className={styles.dropdownLink}>
                  Reparații
                </Link>
              </div>
            </div>

            <Link 
              href="/edaconsultcluj/despre-noi" 
              className={`${styles.navLink} ${scrolled ? styles.navLinkDark : ''}`}
            >
              Despre Noi
            </Link>

            <Link href="/edaconsultcluj#contact" className={styles.contactBtn}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${styles.mobileMenuBtn} ${styles.navLink} ${scrolled ? styles.navLinkDark : ''}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={styles.mobileNav}>
            <Link 
              href="/edaconsultcluj"
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Acasă
            </Link>
            <Link 
              href="/edaconsultcluj/servicii"
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Servicii
            </Link>
            <Link 
              href="/edaconsultcluj/despre-noi"
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Despre Noi
            </Link>
            <Link 
              href="/edaconsultcluj#contact"
              className={styles.mobileLink}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}