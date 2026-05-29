'use client'

import { Phone, MessageCircle, Calendar } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-40"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="fade-in-up">
            <div className="inline-block mb-6 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full">
              <span className="text-amber-400 text-sm font-semibold">🏆 Dubai&apos;s Trusted Home Services</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Premium Home Maintenance Services in Dubai
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Fast, Reliable & Professional Experts for AC Repair, Electrical, Plumbing & Home Appliances. Available 24/7 for emergencies.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">10K+</div>
                <div className="text-xs text-gray-400 mt-1">Happy Customers</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">5K+</div>
                <div className="text-xs text-gray-400 mt-1">Repairs Done</div>
              </div>
              <div className="glass-effect p-4 text-center">
                <div className="text-2xl font-bold text-amber-400">99%</div>
                <div className="text-xs text-gray-400 mt-1">Satisfaction</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="btn-primary-gold flex items-center justify-center gap-2"
              >
                <Calendar size={20} />
                Book Now
              </a>
              <a 
                href="tel:+918796493504" 
                className="btn-secondary-dark flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Technician
              </a>
              <a 
                href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-dark flex items-center justify-center gap-2"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right Side - Premium Image Placeholder */}
          <div className="relative hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl blur-xl"></div>
              <div className="relative glass-effect p-8 rounded-2xl backdrop-blur-xl border border-amber-500/20 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔧</div>
                  <p className="text-gray-400">Professional Technicians</p>
                  <p className="text-amber-400 font-semibold mt-2">Available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
