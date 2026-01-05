'use client'

import Image from 'next/image'

const menuPdfs = [
  { name: 'Menu 1', file: '/menus/menu1.pdf' },
  { name: 'Menu 2', file: '/menus/menu2.pdf' },
  { name: 'Menu 3', file: '/menus/menu3.pdf' },
  { name: 'Menu 4', file: '/menus/menu4.pdf' },
  { name: 'Menu 5', file: '/menus/menu5.pdf' },
  { name: 'Menu 6', file: '/images/p1.jpg', isImage: true },
]

export default function Menu() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
            alt="Euro Café menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Menu
          </h1>
          <p className="text-xl md:text-2xl text-cream">
            Authentic flavors from the Mediterranean and Europe
          </p>
        </div>
      </section>

      {/* Menu PDFs Display Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-4">
              Our Menus
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              Browse our complete menus below. Each section showcases our delicious offerings.
            </p>
          </div>

          <div className="space-y-16">
            {menuPdfs.map((menu, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 bg-cream">
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth text-center">
                    {menu.name}
                  </h3>
                </div>
                <div className="w-full bg-gray-50">
                  {menu.isImage ? (
                    <div className="w-full relative" style={{ minHeight: '800px' }}>
                      <Image
                        src={menu.file}
                        alt={`${menu.name} - Euro Café`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                      />
                    </div>
                  ) : (
                    <iframe
                      src={`${menu.file}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                      className="w-full"
                      style={{ height: '1200px', minHeight: '800px' }}
                      title={`${menu.name} - Euro Café`}
                    ></iframe>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Note Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <p className="text-lg text-warm-gray mb-4">
            <strong>Note:</strong> Menu items and prices are subject to change. 
            Please ask your server about daily specials and seasonal offerings.
          </p>
          <p className="text-lg text-warm-gray">
            We accommodate dietary restrictions and allergies whenever possible. 
            Please inform your server of any special dietary needs.
          </p>
        </div>
      </section>
    </div>
  )
}
