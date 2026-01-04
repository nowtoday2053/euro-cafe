'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiPhone, FiMapPin, FiClock, FiFacebook } from 'react-icons/fi'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    // In production, you would send this to your backend/API
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Contact Euro Café"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 container-custom text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Visit Us
          </h1>
          <p className="text-xl md:text-2xl text-cream">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information & Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-serif font-bold text-earth mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FiMapPin className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-earth mb-1">
                      Address
                    </h3>
                    <p className="text-lg text-warm-gray">
                      12625 N Saguaro Blvd STE 101<br />
                      Fountain Hills, AZ 85268
                    </p>
                    <a
                      href="https://maps.google.com/?q=12625+N+Saguaro+Blvd+STE+101+Fountain+Hills+AZ+85268"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-terracotta hover:text-terracotta-dark font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiPhone className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-earth mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:+14808360207"
                      className="text-lg text-warm-gray hover:text-terracotta transition-colors"
                    >
                      (480) 836-0207
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiClock className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-earth mb-1">
                      Hours
                    </h3>
                    <div className="text-lg text-warm-gray space-y-1">
                      <p><strong>Monday - Saturday:</strong> 7:00 AM - 3:00 PM</p>
                      <p><strong>Sunday:</strong> 8:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FiFacebook className="h-6 w-6 text-terracotta mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-earth mb-1">
                      Follow Us
                    </h3>
                    <a
                      href="https://www.facebook.com/europizzacafe/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg text-warm-gray hover:text-terracotta transition-colors"
                    >
                      Euro Pizza Cafe
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps?q=12625+N+Saguaro+Blvd+STE+101,+Fountain+Hills,+AZ+85268&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: '400px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Euro Café Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-earth mb-4">
              Send Us a Message
            </h2>
            <p className="text-lg text-warm-gray">
              Have a question or want to make a reservation? We'd love to hear from you.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-earth mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-earth mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta outline-none transition-colors"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="block text-sm font-medium text-earth mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta outline-none transition-colors"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-earth mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-terracotta focus:border-terracotta outline-none transition-colors resize-none"
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

