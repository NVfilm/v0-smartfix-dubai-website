'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Send email via API (you'll need to set up the backend)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', service: '', location: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Error submitting form. Please try again or contact us directly.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left - Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-8">
              Book Expert Technician Now
            </h2>

            <div className="space-y-6">
              <div className="glass-hover p-6 flex gap-4">
                <div className="p-3 bg-amber-500/20 rounded-lg h-fit">
                  <Phone className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Call Us</h3>
                  <a href="tel:+918796493504" className="text-amber-400 hover:text-amber-300 transition-colors">
                    +91 87964 93504
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="glass-hover p-6 flex gap-4">
                <div className="p-3 bg-amber-500/20 rounded-lg h-fit">
                  <Mail className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <a href="mailto:nvgrowthhub@gmail.com" className="text-amber-400 hover:text-amber-300 transition-colors">
                    nvgrowthhub@gmail.com
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Response within 2 hours</p>
                </div>
              </div>

              <div className="glass-hover p-6 flex gap-4">
                <div className="p-3 bg-amber-500/20 rounded-lg h-fit">
                  <MessageCircle className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">WhatsApp</h3>
                  <a 
                    href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    Chat with us
                  </a>
                  <p className="text-gray-400 text-sm mt-1">Quick response guaranteed</p>
                </div>
              </div>

              <div className="glass-hover p-6 flex gap-4">
                <div className="p-3 bg-amber-500/20 rounded-lg h-fit">
                  <MapPin className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Service Area</h3>
                  <p className="text-gray-400">Dubai, UAE</p>
                  <p className="text-gray-400 text-sm mt-1">Covering all areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div>
            <div className="glass-effect p-8 border border-amber-500/20">
              {submitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 font-semibold">✓ Thank you! We&apos;ll contact you within 2 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="+971..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="AC Repair">AC Repair & Installation</option>
                    <option value="Electrical">Electrical Services</option>
                    <option value="Plumbing">Plumbing Services</option>
                    <option value="Appliance">Appliance Repair</option>
                    <option value="Water Heater">Water Heater Repair</option>
                    <option value="Emergency">Emergency Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Location in Dubai
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors"
                    placeholder="Your location"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-2 text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-800/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    placeholder="Describe your issue..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary-gold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Submitting...' : 'Book Now'}
                </button>

                <p className="text-gray-500 text-xs text-center">
                  We&apos;ll respond within 2 hours with a quote and availability
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
