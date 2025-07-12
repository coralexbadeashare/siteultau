'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import { Award, Clock, Shield, Wrench, Star, Phone, ArrowRight } from 'lucide-react'

export default function HomePage() {
  const stats = [
    { number: "15+", label: "Ani Experiență" },
    { number: "5000+", label: "Mașini Vopsite" },
    { number: "100%", label: "Clienți Mulțumiți" },
    { number: "5★", label: "Rating Google" }
  ]

  const testimonials = [
    {
      name: "Alexandru M.",
      car: "BMW Seria 5",
      rating: 5,
      text: "Profesionalism desăvârșit! Mașina arată mai bine decât când am cumpărat-o nouă."
    },
    {
      name: "Maria P.",
      car: "Audi Q5",
      rating: 5,
      text: "Am rămas impresionată de atenția la detalii și calitatea lucrării. Recomand cu încredere!"
    },
    {
      name: "George T.",
      car: "Mercedes C-Class",
      rating: 5,
      text: "Servicii de top! Echipa JPX Paint Car a depășit toate așteptările mele."
    }
  ]

  return (
    <div style={{ minHeight: '100vh' }}>
      <HeroSection />
      <ServicesSection />

      {/* Why Choose Us Section */}
      <section style={{ padding: '5rem 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>
                De Ce Să Alegi JPX Paint Car?
              </h2>
              <p style={{ fontSize: '1.25rem', color: '#6b7280', marginBottom: '2rem' }}>
                Cu peste 15 ani de experiență în domeniu, suntem lideri în servicii de vopsitorie auto profesională.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {[
                  { icon: <Award />, title: 'Calitate Premium', desc: 'Folosim doar materiale de cea mai înaltă calitate și tehnologii moderne' },
                  { icon: <Clock />, title: 'Rapiditate', desc: 'Respectăm termenele promise și lucrăm eficient fără compromisuri' },
                  { icon: <Shield />, title: 'Garanție Extinsă', desc: 'Oferim garanție pentru toate lucrările efectuate' },
                  { icon: <Wrench />, title: 'Echipă Expertă', desc: 'Tehnicienii noștri sunt certificați și cu experiență vastă' }
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div style={{
                      width: '3rem',
                      height: '3rem',
                      background: '#fee2e2',
                      borderRadius: '0.5rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {React.cloneElement(item.icon, { style: { width: '1.5rem', height: '1.5rem', color: '#dc2626' } })}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#111827', marginBottom: '0.5rem' }}>
                        {item.title}
                      </h3>
                      <p style={{ color: '#6b7280' }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1632823469850-2f77dd9c7f93?w=800&h=600&fit=crop"
                alt="Atelier JPX Paint Car"
                width={800}
                height={600}
                style={{ borderRadius: '1rem', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              />
              <div style={{
                position: 'absolute',
                bottom: '-2rem',
                left: '-2rem',
                background: '#dc2626',
                color: 'white',
                padding: '2rem',
                borderRadius: '1rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>15+</div>
                <div style={{ fontSize: '1.125rem' }}>Ani de Excelență</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #dc2626, #ea580c)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.25rem', opacity: 0.9 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{ padding: '5rem 0', background: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>
              Ce Spun Clienții Noștri
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Mândria noastră sunt clienții mulțumiți
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '80rem', margin: '0 auto' }}>
            {testimonials.map((testimonial, index) => (
              <div key={index} style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', marginBottom: '1rem' }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} style={{ width: '1.25rem', height: '1.25rem', color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p style={{ fontWeight: '600', color: '#111827' }}>{testimonial.name}</p>
                  <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>{testimonial.car}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #111827, #1f2937)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', color: 'white', marginBottom: '1.5rem' }}>
            Pregătit să Îți Transformi Mașina?
          </h2>
          <p style={{ fontSize: '1.25rem', color: '#d1d5db', marginBottom: '2rem', maxWidth: '42rem', margin: '0 auto 2rem' }}>
            Contactează-ne astăzi pentru o consultație gratuită și o ofertă personalizată
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Link 
              href="/jpxpaintcar/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#dc2626',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#b91c1c';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#dc2626';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Solicită Ofertă
              <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
            </Link>
            <a 
              href="tel:+40721234567"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'white',
                color: '#111827',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#f3f4f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'white';
              }}
            >
              <Phone style={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              0721 234 567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}