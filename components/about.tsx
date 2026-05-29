'use client'

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-6">
              Dubai&apos;s Trusted Home Maintenance Experts
            </h2>
            
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              We provide premium-quality home maintenance and repair services across Dubai. Our expert technicians specialize in AC repair, electrical work, plumbing, and appliance repair with fast response times and professional service standards.
            </p>

            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              We focus on customer satisfaction, reliability, and affordable premium service. Every technician on our team is fully trained, certified, and committed to delivering excellence on every job.
            </p>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-amber-400 text-2xl flex-shrink-0">🎯</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Our Mission</h3>
                  <p className="text-gray-400 text-sm">Deliver premium home maintenance services with reliability and professionalism</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-400 text-2xl flex-shrink-0">👁️</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Our Vision</h3>
                  <p className="text-gray-400 text-sm">To be Dubai&apos;s most trusted and preferred home services provider</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-amber-400 text-2xl flex-shrink-0">💎</div>
                <div>
                  <h3 className="text-white font-bold mb-1">Our Values</h3>
                  <p className="text-gray-400 text-sm">Excellence, integrity, reliability, and customer-first approach</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Team & Experience */}
          <div className="space-y-6">
            <div className="glass-effect p-8 border border-amber-500/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Professional Team</h3>
              <p className="text-gray-400 mb-4">Our team consists of experienced, certified technicians with years of expertise in home maintenance and repairs.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">50+ Certified Technicians</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">8+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Fully Trained & Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">24/7 Available</span>
                </div>
              </div>
            </div>

            <div className="glass-effect p-8 border border-amber-500/20">
              <h3 className="text-2xl font-serif font-bold text-white mb-4">Experience Highlights</h3>
              <p className="text-gray-400 mb-4">Proven track record of delivering premium services consistently.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">10,000+ Happy Customers</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">5,000+ Repairs Completed</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">99% Satisfaction Rate</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-gray-300">Award Winning Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
