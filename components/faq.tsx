'use client'

import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'What are your service hours?',
    answer: 'We are available 24/7 for all services. You can call or WhatsApp us anytime for urgent repairs or to schedule appointments.',
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, we provide warranty on all repairs. Most repairs come with a 30-day warranty, and replacement parts carry manufacturer warranty.',
  },
  {
    question: 'How quickly can you respond to emergencies?',
    answer: 'We guarantee response within 30 minutes for emergency calls across Dubai. Our dispatch system ensures fastest response time.',
  },
  {
    question: 'Are your technicians certified?',
    answer: 'Absolutely! All our technicians are fully certified, trained, and insured. We only employ professionals with proven expertise.',
  },
  {
    question: 'Do you provide upfront pricing?',
    answer: 'Yes, we provide transparent pricing. We give free diagnostics and upfront quotes before starting any repair work.',
  },
  {
    question: 'Can I book online?',
    answer: 'You can book through our website contact form, WhatsApp, or by calling us directly. We confirm all bookings within 2 hours.',
  },
]

function FAQItem({ item, isOpen, onToggle }: { item: typeof faqs[0]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glass-hover">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between hover:bg-white/10 transition-colors"
      >
        <span className="text-lg font-semibold text-white text-left">{item.question}</span>
        <ChevronDown
          size={24}
          className={`text-amber-400 flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      {isOpen && (
        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/10">
          {item.answer}
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg">
            Find answers to common questions about our services
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              item={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 glass-effect p-8 border border-amber-500/30 text-center">
          <h3 className="text-2xl font-serif font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-400 mb-6">
            Contact us directly - our team is always ready to help
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+918796493504" className="btn-primary-gold">
              Call Us
            </a>
            <a 
              href="https://wa.me/918796493504?text=Hello%20Smartfix%20Dubai" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary-dark"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
