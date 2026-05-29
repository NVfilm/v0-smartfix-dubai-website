'use client'

import { Zap, Droplets, Wind, UtensilsCrossed, Wrench } from 'lucide-react'

const services = [
  {
    icon: Wind,
    title: 'AC Repair & Installation',
    description: 'Professional AC maintenance, repair and installation services',
  },
  {
    icon: Zap,
    title: 'Electrical Services',
    description: 'Expert electrical repairs, maintenance and installations',
  },
  {
    icon: Droplets,
    title: 'Plumbing Services',
    description: 'Complete plumbing solutions for residential needs',
  },
  {
    icon: UtensilsCrossed,
    title: 'Appliance Repair',
    description: 'Refrigerator, washing machine, dishwasher and microwave repair',
  },
  {
    icon: Wrench,
    title: 'Water Heater Repair',
    description: 'Installation and repair of water heating systems',
  },
  {
    icon: Wrench,
    title: 'Emergency Maintenance',
    description: '24/7 emergency home maintenance services available',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Our Premium Services
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive home maintenance and repair solutions tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div 
                key={index}
                className="glass-hover p-6 group cursor-pointer"
              >
                <div className="mb-4 p-3 bg-amber-500/20 rounded-lg w-fit group-hover:bg-amber-500/30 transition-all">
                  <Icon className="text-amber-400" size={28} />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Emergency Banner */}
        <div className="mt-16 glass-effect p-8 border border-amber-500/30 bg-gradient-to-r from-amber-500/10 to-transparent">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🚨</div>
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                Need Emergency Help?
              </h3>
              <p className="text-gray-400">
                Call us anytime - we&apos;re available 24/7 for urgent repairs and emergencies
              </p>
            </div>
            <a 
              href="tel:+918796493504"
              className="ml-auto btn-primary-gold whitespace-nowrap"
            >
              Emergency Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
