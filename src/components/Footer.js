import Link from 'next/link';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';

export default function Footer() {
  const boroughs = getBoroughs();
  const featuredBoroughs = boroughs.slice(0, 6);
  const featuredServices = services.slice(0, 6);

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-display text-2xl text-white">
                Cosmetic<span className="text-accent-400">Treatment</span>
              </span>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed mb-6">
              London's premier cosmetic treatment comparison service. Connecting you with verified, qualified aesthetic professionals.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <p className="text-primary-200">
                <span className="text-white">Tel:</span> 020 1234 5678
              </p>
              <p className="text-primary-200">
                <span className="text-white">Email:</span> hello@cosmetictreatment.co.uk
              </p>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-accent-400 font-medium mb-6">
              Treatments
            </h3>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link 
                    href={`/${service.slug}`}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/treatments"
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-accent-400 font-medium mb-6">
              London Locations
            </h3>
            <ul className="space-y-3">
              {featuredBoroughs.map((borough) => (
                <li key={borough.slug}>
                  <Link 
                    href={`/locations/${borough.slug}`}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {borough.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  href="/locations"
                  className="text-accent-400 hover:text-accent-300 transition-colors text-sm font-medium"
                >
                  View All →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-accent-400 font-medium mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-primary-200 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Patient Reviews
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-primary-200 hover:text-white transition-colors text-sm">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/free-quote" className="text-primary-200 hover:text-white transition-colors text-sm">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-primary-400">
              © {new Date().getFullYear()} CosmeticTreatment.co.uk. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-xs text-primary-400 hover:text-primary-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-primary-400 hover:text-primary-200 transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
