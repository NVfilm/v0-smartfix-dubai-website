'use client'

import { useEffect, useState } from 'react'

interface Stat {
  label: string
  value: number
  suffix: string
}

const stats: Stat[] = [
  { label: 'Happy Customers', value: 10000, suffix: '+' },
  { label: 'Repairs Completed', value: 5000, suffix: '+' },
  { label: 'Customer Satisfaction', value: 99, suffix: '%' },
  { label: 'Years of Excellence', value: 8, suffix: '+' },
]

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const increment = target / 30
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 50)
    return () => clearInterval(timer)
  }, [target])

  return (
    <span className="font-bold text-4xl sm:text-5xl text-amber-400">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Trusted Across Dubai
          </h2>
          <p className="text-gray-400 text-lg">
            Our commitment to excellence reflected in numbers
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="glass-hover p-8 text-center group">
              <div className="mb-4">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 font-medium group-hover:text-amber-400 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="glass-effect p-6 border border-amber-500/20 text-center">
            <div className="text-3xl mb-3">✓</div>
            <h3 className="text-white font-bold mb-2">Licensed & Certified</h3>
            <p className="text-gray-400 text-sm">All technicians are certified professionals</p>
          </div>
          <div className="glass-effect p-6 border border-amber-500/20 text-center">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-white font-bold mb-2">Insurance Covered</h3>
            <p className="text-gray-400 text-sm">Your property is fully protected</p>
          </div>
          <div className="glass-effect p-6 border border-amber-500/20 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="text-white font-bold mb-2">Fast Response</h3>
            <p className="text-gray-400 text-sm">Quick emergency response guaranteed</p>
          </div>
        </div>
      </div>
    </section>
  )
}
