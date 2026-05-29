'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 w-full glass-effect border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">SF</span>
              </div>
              <span className="font-serif text-xl font-bold text-white hidden sm:inline">Smartfix Dubai</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Services
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              About Us
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Reviews
            </button>
            <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Contact
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+918796493504" className="px-4 py-2 rounded-lg text-white border border-white/20 hover:border-white/40 hover:bg-white/5 transition-all text-sm font-medium">
              Call Now
            </a>
            <a href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai" target="_blank" rel="noopener noreferrer" className="btn-primary-gold text-sm">
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-3 mt-4">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                About Us
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                Reviews
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                FAQ
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-amber-400 transition-colors text-sm font-medium text-left">
                Contact
              </button>
              <div className="flex gap-2 mt-2">
                <a href="tel:+918796493504" className="flex-1 px-3 py-2 rounded-lg text-white border border-white/20 hover:border-white/40 text-center transition-all text-sm">
                  Call
                </a>
                <a href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai" target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary-gold text-sm text-center">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
