import Link from 'next/link'
import Image from 'next/image'
import { FiClock, FiMapPin, FiArrowRight } from 'react-icons/fi'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home | Euro Café - Mediterranean & European Café in Fountain Hills',
  description: 'Welcome to Euro Café, a family-owned Mediterranean and European café in Fountain Hills, Arizona. Experience authentic cuisine in a warm, inviting atmosphere.',
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/indoor.jpg"
            alt="Euro Café interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance">
            Welcome to Euro Café
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cream max-w-2xl mx-auto">
            Authentic Mediterranean & European cuisine in the heart of Fountain Hills
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-primary inline-flex items-center justify-center">
              View Menu
              <FiArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-terracotta inline-flex items-center justify-center">
              Visit Us
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-6">
                Our Story
              </h2>
              <p className="text-lg text-warm-gray mb-4 leading-relaxed">
                Euro Café is a family-owned restaurant that brings the authentic flavors 
                of the Mediterranean and Europe to Fountain Hills, Arizona. Our passion 
                for quality ingredients and traditional recipes has been passed down through 
                generations, creating a dining experience that feels like home.
              </p>
              <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                We believe in the power of good food to bring people together. Every dish 
                is prepared with care, using fresh, locally-sourced ingredients whenever 
                possible. From our morning pastries to our evening meals, we invite you 
                to taste the difference that family tradition makes.
              </p>
              <Link href="/about" className="btn-secondary inline-flex items-center">
                Learn More About Us
                <FiArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/p1.jpg"
                alt="Euro Café outdoor patio"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Food Highlights Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth mb-4">
              What We Serve
            </h2>
            <p className="text-lg text-warm-gray max-w-2xl mx-auto">
              From traditional breakfasts to authentic Mediterranean lunches, 
              every dish tells a story of quality and care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Breakfast & Brunch',
                description: 'Start your day with our European-inspired breakfasts and fresh pastries.',
                image: '/images/food.jpg',
              },
              {
                title: 'Mediterranean Lunch',
                description: 'Authentic flavors from Greece, Italy, and the Mediterranean region.',
                image: '/images/pizza.jpg',
              },
              {
                title: 'Coffee & Pastries',
                description: 'European-style coffee and handcrafted pastries made fresh daily.',
                image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-semibold text-earth mb-3">
                    {item.title}
                  </h3>
                  <p className="text-warm-gray leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Location & Hours Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location */}
            <div className="bg-cream p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FiMapPin className="h-8 w-8 text-terracotta mr-4" />
                <h3 className="text-3xl font-serif font-bold text-earth">Location</h3>
              </div>
              <p className="text-lg text-warm-gray mb-4">
                12625 N Saguaro Blvd STE 101<br />
                Fountain Hills, AZ 85268
              </p>
              <Link
                href="/contact"
                className="text-terracotta hover:text-terracotta-dark font-medium inline-flex items-center"
              >
                Get Directions
                <FiArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Hours */}
            <div className="bg-cream p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <FiClock className="h-8 w-8 text-terracotta mr-4" />
                <h3 className="text-3xl font-serif font-bold text-earth">Hours</h3>
              </div>
              <div className="space-y-2 text-lg text-warm-gray">
                <p><strong>Monday - Saturday:</strong> 7:00 AM - 3:00 PM</p>
                <p><strong>Sunday:</strong> 8:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facebook CTA Section */}
      <section className="section-padding bg-sage text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Follow Our Journey
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            See our daily specials, behind-the-scenes moments, and community events on Facebook
          </p>
          <a
            href="https://www.facebook.com/europizzacafe/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white text-white hover:bg-white hover:text-sage inline-flex items-center"
          >
            Follow Us on Facebook
            <FiArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </>
  )
}

