'use client'

import { useEffect, useState, useRef } from 'react'
import { Users, Award, Building, Calendar } from 'lucide-react'

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      icon: <Users className="h-8 w-8" />,
      value: 20000,
      label: "Absolvenți Certificați",
      suffix: "+"
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 63,
      label: "Instructori Autorizați",
      suffix: ""
    },
    {
      icon: <Building className="h-8 w-8" />,
      value: 15,
      label: "Centre de Pregătire",
      suffix: ""
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      value: 25,
      label: "Ani de Experiență",
      suffix: "+"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={statsRef} className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cifre Care Vorbesc
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            De peste două decenii, suntem lideri în formarea profesională pentru transporturi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-white/20 rounded-full text-white mb-4">
                {stat.icon}
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                {isVisible && <Counter end={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-blue-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-3xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Membru Fondator EuroTRA
            </h3>
            <p className="text-blue-100 text-lg">
              Suntem membri fondatori ai Asociației Europene pentru Formarea în Transport Rutier, 
              garantând standarde internaționale de calitate în toate programele noastre de formare.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / 2000 // 2 seconds animation

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end])

  return (
    <>
      {count.toLocaleString('ro-RO')}{suffix}
    </>
  )
}