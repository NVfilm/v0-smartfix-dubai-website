import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Stats } from '@/components/stats'
import { About } from '@/components/about'
import { Reviews } from '@/components/reviews'
import { FAQ } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { FloatingCTA } from '@/components/floating-cta'

export default function Home() {
  return (
    <main className="w-full bg-background text-foreground">
      <Header />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  )
}
