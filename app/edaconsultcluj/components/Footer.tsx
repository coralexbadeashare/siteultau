import Link from 'next/link'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function Footer() {
  const footerStyle = {
    backgroundColor: '#111827',
    color: 'white',
    padding: '3rem 0 1rem',
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '2rem',
  }

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
    color: '#d97706',
  }

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    display: 'block',
    padding: '0.25rem 0',
    transition: 'color 0.3s ease',
  }

  const contactItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem',
  }

  const iconStyle = {
    flexShrink: 0,
    marginTop: '0.25rem',
    color: '#d97706',
  }

  const borderTopStyle = {
    borderTop: '1px solid #374151',
    paddingTop: '2rem',
    marginTop: '2rem',
    textAlign: 'center' as const,
    color: '#6b7280',
    fontSize: '0.875rem',
  }

  return (
    <footer style={footerStyle}>
      <div className="container">
        <div style={gridStyle}>
          {/* Company Info */}
          <div>
            <h3 style={{ ...headingStyle, fontSize: '1.5rem' }}>EDA CONSULT</h3>
            <p style={{ color: '#9ca3af', marginBottom: '1rem' }}>
              Peste 13 ani de experiență în producția de tâmplărie și reparații de mobilier.
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              SC EDA CONSULT SRL<br />
              CUI: 20227696<br />
              Înființată: 2006
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 style={headingStyle}>Servicii</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/edaconsultcluj/servicii#tamplarie" style={linkStyle}>
                Tâmplărie Construcții
              </Link>
              <Link href="/edaconsultcluj/servicii#mobilier" style={linkStyle}>
                Mobilier Personalizat
              </Link>
              <Link href="/edaconsultcluj/servicii#copii" style={linkStyle}>
                Mobilier pentru Copii
              </Link>
              <Link href="/edaconsultcluj/servicii#reparatii" style={linkStyle}>
                Reparații Mobilier
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={headingStyle}>Link-uri Rapide</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/edaconsultcluj" style={linkStyle}>
                Acasă
              </Link>
              <Link href="/edaconsultcluj/despre-noi" style={linkStyle}>
                Despre Noi
              </Link>
              <Link href="/edaconsultcluj/servicii" style={linkStyle}>
                Servicii
              </Link>
              <Link href="/edaconsultcluj#contact" style={linkStyle}>
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={headingStyle}>Contact</h4>
            <div>
              <div style={contactItemStyle}>
                <MapPin size={20} style={iconStyle} />
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  Baciu, str. Molidului, nr. 6<br />
                  Județul Cluj
                </p>
              </div>
              <div style={contactItemStyle}>
                <Phone size={20} style={iconStyle} />
                <a href="tel:+40740123456" style={{ ...linkStyle, marginBottom: 0 }}>
                  +40 740 123 456
                </a>
              </div>
              <div style={contactItemStyle}>
                <Mail size={20} style={iconStyle} />
                <a href="mailto:contact@edaconsult.ro" style={{ ...linkStyle, marginBottom: 0 }}>
                  contact@edaconsult.ro
                </a>
              </div>
              <div style={contactItemStyle}>
                <Clock size={20} style={iconStyle} />
                <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>
                  Luni - Vineri: 8:00 - 17:00
                </p>
              </div>
            </div>
          </div>
        </div>

        <div style={borderTopStyle}>
          <p>
            © 2024 EDA CONSULT SRL. Toate drepturile rezervate.
          </p>
        </div>
      </div>

    </footer>
  )
}