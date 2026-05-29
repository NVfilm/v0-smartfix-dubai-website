'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-gray-900">SF</span>
              </div>
              <span className="font-serif text-lg font-bold text-white">Smartfix Dubai</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium home maintenance and repair services across Dubai. Available 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  AC Repair
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Electrical Services
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Plumbing
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-amber-400 transition-colors text-sm">
                  Appliance Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+918796493504" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm">
                <Phone size={16} />
                +91 87964 93504
              </a>
              <a href="mailto:nvgrowthhub@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors text-sm">
                <Mail size={16} />
                nvgrowthhub@gmail.com
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <MapPin size={16} />
                Dubai, UAE
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="py-8 border-t border-white/10 flex items-center justify-between">
          <p className="text-gray-400 text-sm">
            © {currentYear} Smartfix Dubai. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg transition-colors">
              <Facebook size={18} className="text-gray-400 hover:text-amber-400" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg transition-colors">
              <Instagram size={18} className="text-gray-400 hover:text-amber-400" />
            </a>
            <a href="#" className="p-2 bg-white/5 hover:bg-amber-500/20 rounded-lg transition-colors">
              <Linkedin size={18} className="text-gray-400 hover:text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
