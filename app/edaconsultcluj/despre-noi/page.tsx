import Image from 'next/image'
import Link from 'next/link'
import { Award, Calendar, Target, Lightbulb, ArrowRight } from 'lucide-react'
import '../styles/globals.css'

export default function AboutPage() {
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

  const valueCardStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    padding: '2rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
  }

  const timelineItemStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    position: 'relative' as const,
  }

  const timelineDotStyle = {
    width: '2rem',
    height: '2rem',
    backgroundColor: '#d97706',
    borderRadius: '50%',
    border: '4px solid white',
    boxShadow: '0 0 0 2px #d97706',
    position: 'absolute' as const,
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  }

  return (
    <>
      {/* Hero Section */}
      <section style={heroStyle}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070"
            alt="Despre EDA Consult"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4))' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', color: 'white', padding: '0 1rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', marginBottom: '1.5rem', color: 'white' }}>
            Despre Noi
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            O tradiție de excelență în tâmplărie din 2006
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section style={sectionStyle}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>
                Povestea <span style={{ color: '#d97706' }}>EDA Consult</span>
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Înființată în 2006, SC EDA CONSULT SRL s-a născut din pasiunea pentru lemnul de calitate și dorința de a crea produse durabile care să reziste testului timpului.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '1.5rem' }}>
                Cu sediul în Baciu, județul Cluj, atelierul nostru modern este echipat cu linii de producție de ultimă generație, achiziționate prin fonduri europene. Această investiție ne permite să oferim produse de cea mai înaltă calitate, respectând cele mai stricte standarde din industrie.
              </p>
              <p style={{ fontSize: '1.125rem', color: '#6b7280', marginBottom: '2rem' }}>
                În 2017, am lansat divizia &ldquo;Meșterul Tâmplar&rdquo;, extinzându-ne serviciile pentru a include montaj și reparații la domiciliu. Cu dube complet echipate și personal calificat, suntem pregătiți să intervenim rapid și eficient oriunde în județul Cluj.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div style={{ backgroundColor: '#fef3c7', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d97706', marginBottom: '0.5rem' }}>13+</h3>
                  <p style={{ fontWeight: '500' }}>Ani de Experiență</p>
                </div>
                <div style={{ backgroundColor: '#fef3c7', borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center' }}>
                  <h3 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#d97706', marginBottom: '0.5rem' }}>1000+</h3>
                  <p style={{ fontWeight: '500' }}>Proiecte Realizate</p>
                </div>
              </div>
            </div>
            
            <div style={{ position: 'relative', height: '600px', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)' }}>
              <Image
                src="https://images.unsplash.com/photo-1600566752229-250ed79470f8?q=80&w=2139"
                alt="Atelierul EDA Consult"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section style={{ ...sectionStyle, backgroundColor: '#f9fafb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem' }}>
              Valorile Noastre
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Principiile care ne ghidează în fiecare proiect
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            <div style={valueCardStyle} className="card">
              <div style={{ backgroundColor: '#fef3c7', width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Award size={32} color="#d97706" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Calitate Superioară</h3>
              <p style={{ color: '#6b7280' }}>
                Folosim doar cele mai bune materiale și tehnici pentru a garanta durabilitatea produselor noastre
              </p>
            </div>

            <div style={valueCardStyle} className="card">
              <div style={{ backgroundColor: '#fef3c7', width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Calendar size={32} color="#d97706" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Punctualitate</h3>
              <p style={{ color: '#6b7280' }}>
                Respectăm termenele stabilite și ne asigurăm că fiecare proiect este livrat la timp
              </p>
            </div>

            <div style={valueCardStyle} className="card">
              <div style={{ backgroundColor: '#fef3c7', width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Target size={32} color="#d97706" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Atenție la Detalii</h3>
              <p style={{ color: '#6b7280' }}>
                Fiecare proiect beneficiază de atenția noastră meticuloasă la cele mai mici detalii
              </p>
            </div>

            <div style={valueCardStyle} className="card">
              <div style={{ backgroundColor: '#fef3c7', width: '4rem', height: '4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Lightbulb size={32} color="#d97706" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>Inovație</h3>
              <p style={{ color: '#6b7280' }}>
                Îmbinăm tradiția meșteșugărească cu tehnologiile moderne pentru rezultate excepționale
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={sectionStyle}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', marginBottom: '3rem' }}>
            Evoluția Noastră
          </h2>

          <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', width: '4px', height: '100%', backgroundColor: '#fef3c7' }}></div>

            {/* Timeline items */}
            <div style={timelineItemStyle}>
              <div style={{ flex: 1, textAlign: 'right', paddingRight: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2006</h3>
                <p style={{ color: '#6b7280' }}>Înființarea SC EDA CONSULT SRL în Săvădisla, Cluj</p>
              </div>
              <div style={timelineDotStyle}></div>
              <div style={{ flex: 1, paddingLeft: '2rem' }}></div>
            </div>

            <div style={timelineItemStyle}>
              <div style={{ flex: 1, paddingRight: '2rem' }}></div>
              <div style={timelineDotStyle}></div>
              <div style={{ flex: 1, textAlign: 'left', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2010</h3>
                <p style={{ color: '#6b7280' }}>Mutarea în sediul modern din Baciu și achiziția de echipamente noi</p>
              </div>
            </div>

            <div style={timelineItemStyle}>
              <div style={{ flex: 1, textAlign: 'right', paddingRight: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2015</h3>
                <p style={{ color: '#6b7280' }}>Accesare fonduri europene pentru modernizarea liniilor de producție</p>
              </div>
              <div style={timelineDotStyle}></div>
              <div style={{ flex: 1, paddingLeft: '2rem' }}></div>
            </div>

            <div style={timelineItemStyle}>
              <div style={{ flex: 1, paddingRight: '2rem' }}></div>
              <div style={timelineDotStyle}></div>
              <div style={{ flex: 1, textAlign: 'left', paddingLeft: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2017</h3>
                <p style={{ color: '#6b7280' }}>Lansarea diviziei &ldquo;Meșterul Tâmplar&rdquo; pentru servicii la domiciliu</p>
              </div>
            </div>

            <div style={{ ...timelineItemStyle, marginBottom: 0 }}>
              <div style={{ flex: 1, textAlign: 'right', paddingRight: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>2024</h3>
                <p style={{ color: '#6b7280' }}>Continuăm să creștem și să inovăm pentru clienții noștri</p>
              </div>
              <div style={timelineDotStyle}></div>
              <div style={{ flex: 1, paddingLeft: '2rem' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #d97706 0%, #b45309 100%)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'white', marginBottom: '1.5rem' }}>
            Hai să Construim Împreună
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'rgba(255, 255, 255, 0.9)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Suntem aici să transformăm viziunea ta în realitate. Contactează-ne pentru o consultație gratuită.
          </p>
          <Link href="/edaconsultcluj/servicii" className="btn" style={{ backgroundColor: 'white', color: '#d97706', padding: '1rem 2rem', fontSize: '1.125rem' }}>
            Explorează Serviciile
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

    </>
  )
}