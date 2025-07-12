import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Shield, Users, Wrench, Home, Baby, Hammer, MapPin, Phone, Mail } from 'lucide-react'
import './styles/globals.css'

export default function HomePage() {
  const heroStyle = {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
  }

  const heroImageStyle = {
    position: 'absolute' as const,
    inset: 0,
    zIndex: 0,
  }

  const heroOverlayStyle = {
    position: 'absolute' as const,
    inset: 0,
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))',
  }

  const heroContentStyle = {
    position: 'relative' as const,
    zIndex: 10,
    color: 'white',
    maxWidth: '800px',
    padding: '0 1rem',
  }

  const sectionStyle = {
    padding: '5rem 0',
  }

  const serviceCardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    height: '100%',
  }

  const iconBoxStyle = {
    backgroundColor: '#fef3c7',
    padding: '0.75rem',
    borderRadius: '50%',
    display: 'inline-flex',
    marginBottom: '1rem',
  }

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={heroImageStyle}>
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070"
            alt="Atelier tâmplărie"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={heroOverlayStyle} />
        </div>
        
        <div style={heroContentStyle}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Tâmplărie din <span style={{ color: '#d97706' }}>Lemn Masiv</span>
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#e5e7eb' }}>
            Peste 13 ani de experiență în producția de mobilier și tâmplărie de calitate superioară
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link href="/edaconsultcluj/servicii" className="btn btn-primary">
              Descoperă Serviciile
              <ArrowRight size={20} />
            </Link>
            <Link href="#contact" className="btn btn-secondary">
              Solicită Ofertă
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ ...sectionStyle, backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Serviciile Noastre
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Oferim o gamă completă de servicii de tâmplărie și mobilier personalizat
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Service 1 */}
            <div style={serviceCardStyle} className="card">
              <div style={{ height: '16rem', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1606676539940-12768ce0e762?q=80&w=2069"
                  alt="Tâmplărie construcții"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <Home size={48} color="white" />
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Tâmplărie Construcții</h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Uși, ferestre și scări din lemn masiv, realizate cu precizie și atenție la detalii
                </p>
                <Link href="/edaconsultcluj/servicii#tamplarie" style={{ color: '#d97706', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Află mai multe
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div style={serviceCardStyle} className="card">
              <div style={{ height: '16rem', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070"
                  alt="Mobilier la comandă"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <Baby size={48} color="white" />
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Mobilier pentru Copii</h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Pătuțuri, scaune, țarcuri și echipamente de joacă, sigure și durabile
                </p>
                <Link href="/edaconsultcluj/servicii#mobilier" style={{ color: '#d97706', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Află mai multe
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div style={serviceCardStyle} className="card">
              <div style={{ height: '16rem', position: 'relative', overflow: 'hidden' }}>
                <Image
                  src="https://images.unsplash.com/photo-1621615048502-1d8f3b4b2b18?q=80&w=2070"
                  alt="Reparații mobilier"
                  fill
                  style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
                  <Hammer size={48} color="white" />
                </div>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Meșterul Tâmplar</h3>
                <p style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  Servicii de montaj și reparații la domiciliu, cu echipă calificată și echipamente moderne
                </p>
                <Link href="/edaconsultcluj/servicii#reparatii" style={{ color: '#d97706', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Află mai multe
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                De ce să alegi <span style={{ color: '#d97706' }}>EDA Consult?</span>
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                Cu peste 13 ani de experiență în domeniu, suntem partenerul de încredere pentru toate nevoile tale de tâmplărie.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={iconBoxStyle}>
                    <Shield size={24} color="#d97706" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Calitate Garantată</h3>
                    <p style={{ color: '#6b7280' }}>
                      Folosim doar lemn de cea mai bună calitate și tehnologii moderne de producție
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={iconBoxStyle}>
                    <Users size={24} color="#d97706" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Echipă Profesionistă</h3>
                    <p style={{ color: '#6b7280' }}>
                      Personal calificat cu experiență vastă în domeniul tâmplăriei
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={iconBoxStyle}>
                    <Wrench size={24} color="#d97706" />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Echipamente Moderne</h3>
                    <p style={{ color: '#6b7280' }}>
                      Linii de producție moderne achiziționate prin fonduri europene
                    </p>
                  </div>
                </div>
              </div>

              <Link href="/edaconsultcluj/despre-noi" className="btn btn-primary" style={{ marginTop: '2rem', display: 'inline-flex' }}>
                Află Povestea Noastră
                <ArrowRight size={20} />
              </Link>
            </div>

            <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2086"
                alt="Atelier EDA Consult"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ ...sectionStyle, backgroundColor: '#111827', color: 'white' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'white' }}>
              Hai să Discutăm Proiectul Tău
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem' }}>
              Suntem aici să transformăm ideile tale în realitate. Contactează-ne pentru o consultație gratuită.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#d97706', marginBottom: '1rem', margin: '0 auto 1rem' }}>
                  <MapPin size={32} color="white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Adresă</h3>
                <p style={{ color: '#d1d5db' }}>
                  Baciu, str. Molidului, nr. 6<br />
                  Județul Cluj
                </p>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#d97706', marginBottom: '1rem', margin: '0 auto 1rem' }}>
                  <Phone size={32} color="white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Telefon</h3>
                <a href="tel:+40740123456" style={{ color: '#d1d5db', textDecoration: 'none' }}>
                  +40 740 123 456
                </a>
              </div>

              <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '1rem', padding: '2rem' }}>
                <div style={{ ...iconBoxStyle, backgroundColor: '#d97706', marginBottom: '1rem', margin: '0 auto 1rem' }}>
                  <Mail size={32} color="white" />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Email</h3>
                <a href="mailto:contact@edaconsult.ro" style={{ color: '#d1d5db', textDecoration: 'none' }}>
                  contact@edaconsult.ro
                </a>
              </div>
            </div>

            <a href="tel:+40740123456" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 3rem' }}>
              Sună Acum
              <Phone size={24} />
            </a>
          </div>
        </div>
      </section>

    </>
  )
}