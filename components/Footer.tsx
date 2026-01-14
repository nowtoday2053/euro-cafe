import Link from 'next/link'
import { FiFacebook, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-earth text-cream">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">Euro Café</h3>
            <p className="text-cream/90 mb-4">
              A family-owned Mediterranean and European café bringing authentic flavors to Fountain Hills, Arizona.
            </p>
            <a
              href="https://www.facebook.com/europizzacafe/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-cream hover:text-white transition-colors"
              aria-label="Follow us on Facebook"
            >
              <FiFacebook className="h-5 w-5" />
              <span>Follow us on Facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-cream/90 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-cream/90 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-cream/90 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-cream/90 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-cream/90 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-4 text-white">Visit Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-cream/90">
                  12625 N Saguaro Blvd STE 101<br />
                  Fountain Hills, AZ 85268
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+14808360207"
                  className="text-cream/90 hover:text-white transition-colors"
                >
                  (480) 836-0207
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <FiClock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div className="text-cream/90">
                  <p>Open: 7:30 AM - 9:00 PM</p>
                  <p>Closed: Tuesday</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-cream/80">
          <p>&copy; {currentYear} Euro Café. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

