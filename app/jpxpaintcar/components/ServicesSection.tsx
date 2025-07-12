import React from 'react'
import Link from 'next/link'
import { Car, Palette, Shield, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: <Car style={{ width: '2rem', height: '2rem' }} />,
      title: "Vopsire Completă",
      description: "Revopsire integrală cu vopsele de înaltă calitate și finisaje impecabile",
      features: ["Pregătire profesională", "Vopsele premium", "Garanție extinsă"]
    },
    {
      icon: <Palette style={{ width: '2rem', height: '2rem' }} />,
      title: "Retușuri și Reparații",
      description: "Eliminăm zgârieturile și loviturile pentru un aspect ca nou",
      features: ["Potrivire perfectă culoare", "Reparații locale", "Finisaj invizibil"]
    },
    {
      icon: <Shield style={{ width: '2rem', height: '2rem' }} />,
      title: "Protecție Ceramică",
      description: "Acoperire ceramică de ultimă generație pentru protecție maximă",
      features: ["Protecție UV", "Hidrofob", "Durabilitate 5+ ani"]
    },
    {
      icon: <Sparkles style={{ width: '2rem', height: '2rem' }} />,
      title: "Polish și Detailing",
      description: "Redăm luciul original și protejăm vopseaua pe termen lung",
      features: ["Corecție vopsea", "Polish profesional", "Protecție ceară"]
    }
  ]

  return (
    <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
            Serviciile Noastre
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '42rem', margin: '0 auto' }}>
            Oferim o gamă completă de servicii pentru ca mașina ta să arate impecabil
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {services.map((service, index) => (
            <div 
              key={index}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                width: '4rem',
                height: '4rem',
                background: 'linear-gradient(135deg, #dc2626, #ea580c)',
                borderRadius: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                marginBottom: '1.5rem'
              }}>
                {service.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#111827', marginBottom: '0.75rem' }}>
                {service.title}
              </h3>
              <p style={{ color: '#6b7280', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {service.description}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {service.features.map((feature, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', color: '#4b5563', marginBottom: '0.5rem' }}>
                    <CheckCircle style={{ width: '1.25rem', height: '1.25rem', color: '#10b981', marginRight: '0.5rem', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.875rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link 
            href="/jpxpaintcar/servicii"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              color: '#dc2626',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#b91c1c';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#dc2626';
            }}
          >
            Vezi toate serviciile
            <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
          </Link>
        </div>
      </div>
    </section>
  )
}