import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gallery | Euro Café - Photos of Our Café, Food & Atmosphere',
  description: 'Browse photos of Euro Café including our interior, delicious food, and inviting patio atmosphere in Fountain Hills, Arizona.',
}

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

