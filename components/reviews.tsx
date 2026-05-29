'use client'

import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Ahmed Al Mansouri',
    rating: 5,
    review: 'Excellent service! The AC technician was very professional and fixed the issue within minutes. Highly recommended!',
    service: 'AC Repair',
  },
  {
    name: 'Fatima Al Marri',
    rating: 5,
    review: 'Best plumbing service in Dubai. The team was punctual, professional, and very affordable. Will use again!',
    service: 'Plumbing Services',
  },
  {
    name: 'Mohammed Hassan',
    rating: 5,
    review: 'Called them for an emergency electrical issue. They responded within 30 minutes and solved it perfectly.',
    service: 'Electrical Services',
  },
  {
    name: 'Sarah Johnson',
    rating: 5,
    review: 'Fantastic experience with the appliance repair team. Very knowledgeable and helped me save money!',
    service: 'Appliance Repair',
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Customer Reviews
          </h2>
          <p className="text-gray-400 text-lg">
            What our satisfied customers say about us
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="glass-hover p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {review.review}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-amber-400 text-sm">{review.service}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Banner */}
        <div className="mt-16 glass-effect p-8 border border-amber-500/30 text-center">
          <p className="text-2xl font-serif italic text-gray-300 mb-4">
            &quot;Smartfix Dubai transformed our approach to home maintenance. Professional, reliable, and affordable!&quot;
          </p>
          <p className="text-amber-400 font-semibold">— Thousands of Happy Customers Across Dubai</p>
        </div>
      </div>
    </section>
  )
}
