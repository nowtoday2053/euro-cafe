import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | Euro Café - Our Story & Mediterranean Roots',
  description: 'Learn about Euro Café, a family-owned Mediterranean and European café in Fountain Hills, Arizona. Discover our story, values, and commitment to quality ingredients.',
}

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Euro Café family"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-cream">
            Family tradition meets Mediterranean passion
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-4xl font-serif font-bold text-earth mb-6">
                A Family Legacy
              </h2>
              <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                Euro Café was born from a simple dream: to share the authentic flavors 
                and warm hospitality of the Mediterranean with our community in Fountain 
                Hills. As a family-owned establishment, we bring generations of culinary 
                tradition to every dish we serve.
              </p>
              <p className="text-lg text-warm-gray mb-6 leading-relaxed">
                Our journey began when our family moved to Arizona, bringing with us 
                cherished recipes passed down through the years. We noticed that while 
                the Southwest had many wonderful restaurants, there was something special 
                missing—the authentic, home-cooked feel of Mediterranean cuisine, prepared 
                with the same care and attention you'd find in a family kitchen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image and Text Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Fresh ingredients"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-serif font-bold text-earth mb-6">
                Quality Ingredients, Authentic Flavors
              </h2>
              <p className="text-lg text-warm-gray mb-4 leading-relaxed">
                We believe that great food starts with great ingredients. That's why we 
                source the freshest produce, select premium meats and cheeses, and use 
                traditional methods that have stood the test of time.
              </p>
              <p className="text-lg text-warm-gray mb-4 leading-relaxed">
                From our house-made hummus and tzatziki to our freshly baked pastries, 
                every item on our menu is crafted with attention to detail. We don't 
                cut corners—we take the time to do things right, because that's how 
                our family has always done it.
              </p>
              <ul className="space-y-3 text-lg text-warm-gray mt-6">
                <li className="flex items-start">
                  <span className="text-terracotta mr-3">✓</span>
                  <span>Locally sourced ingredients whenever possible</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-3">✓</span>
                  <span>Traditional recipes passed down through generations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-3">✓</span>
                  <span>Fresh preparation daily, no shortcuts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-terracotta mr-3">✓</span>
                  <span>House-made sauces, dressings, and pastries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mediterranean Roots Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif font-bold text-earth mb-6">
              Our Mediterranean Roots
            </h2>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              The Mediterranean region is known for its emphasis on fresh, simple ingredients, 
              shared meals, and the joy of gathering around the table. These values are at the 
              heart of everything we do at Euro Café.
            </p>
            <p className="text-lg text-warm-gray mb-8 leading-relaxed">
              Whether you're joining us for a morning coffee, a leisurely brunch, or a 
              satisfying lunch, we want you to feel like you're part of our extended family. 
              Our goal is to create a space where the community can come together, share 
              stories, and enjoy authentic cuisine in a warm, welcoming atmosphere.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-5xl mb-4">🍽️</div>
                <h3 className="text-xl font-serif font-semibold text-earth mb-2">
                  Authentic Cuisine
                </h3>
                <p className="text-warm-gray">
                  Traditional recipes with modern presentation
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👨‍👩‍👧‍👦</div>
                <h3 className="text-xl font-serif font-semibold text-earth mb-2">
                  Family Values
                </h3>
                <p className="text-warm-gray">
                  Warm hospitality and personal service
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🌿</div>
                <h3 className="text-xl font-serif font-semibold text-earth mb-2">
                  Quality Focus
                </h3>
                <p className="text-warm-gray">
                  Fresh ingredients and careful preparation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="section-padding bg-sage text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Part of the Fountain Hills Community
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            We're proud to be part of the Fountain Hills community. From supporting local 
            events to providing a welcoming space for neighbors to gather, we're committed 
            to being more than just a restaurant—we're a gathering place for friends and family.
          </p>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Thank you for being part of our story. We look forward to serving you and 
            sharing our passion for authentic Mediterranean cuisine.
          </p>
        </div>
      </section>
    </div>
  )
}





