import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Euro Café | Mediterranean & European Café in Fountain Hills, Arizona',
  description: 'Family-owned Mediterranean and European café in Fountain Hills, Arizona. Serving authentic cuisine with quality ingredients in a warm, inviting atmosphere.',
  keywords: 'Euro Café, Mediterranean café, European café, Fountain Hills, Arizona, family restaurant, authentic cuisine, coffee, brunch, lunch',
  openGraph: {
    title: 'Euro Café | Mediterranean & European Café',
    description: 'Family-owned Mediterranean and European café in Fountain Hills, Arizona.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}



