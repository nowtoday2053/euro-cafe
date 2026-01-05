import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Euro Café - Visit Us in Fountain Hills, Arizona',
  description: 'Visit Euro Café in Fountain Hills, Arizona. Find our address, hours, phone number, and get directions. Send us a message or call us today!',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




