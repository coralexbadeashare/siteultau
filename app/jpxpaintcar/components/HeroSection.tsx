'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const heroSlides = [
    {
      title: "Redăm Strălucirea Mașinii Tale",
      subtitle: "Servicii profesionale de vopsitorie auto cu rezultate impecabile",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=1600&h=900&fit=crop"
    },
    {
      title: "Tehnologie de Ultimă Generație",
      subtitle: "Echipamente moderne și vopsele premium pentru finisaje perfecte",
      image: "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1600&h=900&fit=crop"
    },
    {
      title: "Protecție Ceramică Premium",
      subtitle: "Protejează-ți investiția cu cele mai bune soluții de protecție",
      image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1600&h=900&fit=crop"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  return (
    <section style={{ position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            inset: 0,
            opacity: index === currentSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3))'
          }} />
        </div>
      ))}
      
      <div style={{ position: 'relative', zIndex: 10, maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', color: 'white' }}>
        <div style={{ maxWidth: '48rem' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 'bold', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            {heroSlides[currentSlide].title}
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)', marginBottom: '2rem', opacity: 0.9 }}>
            {heroSlides[currentSlide].subtitle}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link 
              href="/jpxpaintcar/servicii"
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
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
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
              Serviciile Noastre
              <ArrowRight style={{ marginLeft: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
            </Link>
            <a 
              href="tel:+40721234567"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(12px)',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '9999px',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid white',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'white';
                e.currentTarget.style.color = '#1f2937';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.color = 'white';
              }}
            >
              <Phone style={{ marginRight: '0.5rem', width: '1.25rem', height: '1.25rem' }} />
              Sună Acum
            </a>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem' }}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{
              width: index === currentSlide ? '2rem' : '0.75rem',
              height: '0.75rem',
              borderRadius: '9999px',
              background: index === currentSlide ? 'white' : 'rgba(255, 255, 255, 0.5)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>
    </section>
  )
}