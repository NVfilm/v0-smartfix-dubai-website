'use client'

import Link from 'next/link'
import { Phone, MessageCircle, X } from 'lucide-react'
import { useState } from 'react'

export function FloatingCTA() {
  const [showWhatsApp, setShowWhatsApp] = useState(true)

  if (!showWhatsApp) return null

  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all animate-pulse"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>

      {/* Call Button */}
      <a
        href="tel:+918796493504"
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
      >
        <Phone size={20} />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* Close Button */}
      <button
        onClick={() => setShowWhatsApp(false)}
        className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full text-gray-400 hover:text-white transition-all"
      >
        <X size={20} />
      </button>
    </div>
  )
}
