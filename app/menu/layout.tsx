import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Menu | Euro Café - Mediterranean & European Menu',
  description: 'Browse our menu featuring authentic Mediterranean and European cuisine. From breakfast and brunch to lunch, coffee, and pastries.',
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}



