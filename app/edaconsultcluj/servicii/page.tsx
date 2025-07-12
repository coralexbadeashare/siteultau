import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Home, Baby, Sofa, Hammer, CheckCircle } from 'lucide-react'
import '../styles/globals.css'

export default function ServicesPage() {
  const heroStyle = {
    height: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative' as const,
    overflow: 'hidden',
  }

  const sectionStyle = {
    padding: '5rem 0',
  }

  const serviceDetailStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
    alignItems: 'center',
    marginBottom: '5rem',
  }

  const checkItemStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.75rem',
    marginBottom: '1rem',
  }

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=2052"
            alt="Servicii tâmplărie"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', padding: '0 1rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
            Serviciile Noastre
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            Soluții complete de tâmplărie și mobilier, de la design la instalare
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section style={sectionStyle}>
        <div className="container">
          {/* Tâmplărie Construcții */}
          <div id="tamplarie" style={{ ...serviceDetailStyle, scrollMarginTop: '6rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%' }}>
                  <Home size={32} color="#d97706" />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Tâmplărie Construcții</h2>
              </div>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Producem tâmplărie de cea mai înaltă calitate pentru proiecte rezidențiale și comerciale.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Uși Interior și Exterior</h4>
                    <p style={{ color: '#6b7280' }}>Uși din lemn masiv, personalizate după specificațiile tale</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Ferestre și Obloane</h4>
                    <p style={{ color: '#6b7280' }}>Ferestre eficiente energetic cu design clasic sau modern</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Scări din Lemn</h4>
                    <p style={{ color: '#6b7280' }}>Scări elegante și durabile pentru orice tip de spațiu</p>
                  </div>
                </div>
              </div>

              <Link href="#contact" className="btn btn-primary">
                Solicită Ofertă
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?q=80&w=2070"
                alt="Tâmplărie construcții"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Mobilier pentru Copii */}
          <div id="mobilier" style={{ ...serviceDetailStyle, scrollMarginTop: '6rem' }}>
            <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074"
                alt="Mobilier pentru copii"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%' }}>
                  <Baby size={32} color="#d97706" />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Mobilier pentru Copii</h2>
              </div>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Creăm mobilier sigur și atractiv pentru cei mici, cu atenție la fiecare detaliu.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Pătuțuri și Leagăne</h4>
                    <p style={{ color: '#6b7280' }}>Design-uri sigure și confortabile pentru somnul bebelușilor</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Scaune și Bănci</h4>
                    <p style={{ color: '#6b7280' }}>Mobilier adaptat înălțimii copiilor, durabil și stabil</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Echipamente de Joacă</h4>
                    <p style={{ color: '#6b7280' }}>Țarcuri și echipamente de joacă pentru interior și exterior</p>
                  </div>
                </div>
              </div>

              <Link href="#contact" className="btn btn-primary">
                Solicită Ofertă
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Mobilier Personalizat */}
          <div id="copii" style={{ ...serviceDetailStyle, scrollMarginTop: '6rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%' }}>
                  <Sofa size={32} color="#d97706" />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Mobilier Personalizat</h2>
              </div>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Transformăm ideile tale în piese de mobilier unice, adaptate perfect spațiului tău.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Lemn Masiv</h4>
                    <p style={{ color: '#6b7280' }}>Mobilier premium din esențe nobile de lemn</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Placaj și MDF</h4>
                    <p style={{ color: '#6b7280' }}>Soluții moderne și accesibile pentru orice buget</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Design Personalizat</h4>
                    <p style={{ color: '#6b7280' }}>Creăm exact ceea ce îți dorești, de la schiță la produs final</p>
                  </div>
                </div>
              </div>

              <Link href="#contact" className="btn btn-primary">
                Solicită Ofertă
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070"
                alt="Mobilier personalizat"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>

          {/* Reparații și Montaj */}
          <div id="reparatii" style={{ ...serviceDetailStyle, scrollMarginTop: '6rem' }}>
            <div style={{ position: 'relative', height: '500px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2071"
                alt="Reparații mobilier"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                <div style={{ backgroundColor: '#fef3c7', padding: '0.75rem', borderRadius: '50%' }}>
                  <Hammer size={32} color="#d97706" />
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Meșterul Tâmplar</h2>
              </div>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Servicii profesionale de montaj și reparații la domiciliu, realizate de echipa noastră specializată.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Montaj Profesional</h4>
                    <p style={{ color: '#6b7280' }}>Instalare corectă și rapidă a mobilierului și tâmplăriei</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Reparații la Domiciliu</h4>
                    <p style={{ color: '#6b7280' }}>Rezolvăm orice problemă direct la tine acasă</p>
                  </div>
                </div>
                <div style={checkItemStyle}>
                  <CheckCircle size={24} color="#d97706" style={{ flexShrink: 0, marginTop: '0.125rem' }} />
                  <div>
                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Echipamente Moderne</h4>
                    <p style={{ color: '#6b7280' }}>Dube echipate complet pentru intervenții rapide și eficiente</p>
                  </div>
                </div>
              </div>

              <Link href="#contact" className="btn btn-primary">
                Solicită Ofertă
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" style={{ padding: '5rem 0', backgroundColor: '#d97706' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1.5rem' }}>
            Începe Proiectul Tău Astăzi
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contactează-ne pentru o consultație gratuită și o ofertă personalizată
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
            <a 
              href="tel:+40740123456"
              className="btn"
              style={{ backgroundColor: 'white', color: '#d97706', padding: '1rem 2rem' }}
            >
              Sună Acum: +40 740 123 456
            </a>
            <a 
              href="mailto:contact@edaconsult.ro"
              className="btn btn-secondary"
              style={{ padding: '1rem 2rem' }}
            >
              Trimite Email
            </a>
          </div>
        </div>
      </section>
    </>
  )
}