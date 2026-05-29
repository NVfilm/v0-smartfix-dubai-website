import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"], variable: '--font-geist-sans' });
const _geistMono = Geist_Mono({ subsets: ["latin"], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Smartfix Dubai - Premium Home Maintenance Services',
  description: 'Fast, Reliable & Professional Experts for AC Repair, Electrical, Plumbing & Home Appliances in Dubai',
  keywords: 'AC repair, electrical repair, plumbing, home maintenance, Dubai services',
  openGraph: {
    title: 'Smartfix Dubai - Premium Home Maintenance Services',
    description: 'Fast, Reliable & Professional Home Maintenance Services in Dubai',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#1a1a1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark scroll-smooth">
      <body className={`${_geist.variable} ${_geistMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
