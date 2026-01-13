'use client';

import { useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [locationsDropdownOpen, setLocationsDropdownOpen] = useState(false);

  const boroughs = getBoroughs();
  const featuredBoroughs = boroughs.slice(0, 10);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-display text-2xl text-primary-800">
              Cosmetic<span className="text-primary-600">Treatment</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary-700 transition-colors text-sm tracking-wide">
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-700 transition-colors flex items-center space-x-1 text-sm tracking-wide">
                <span>Treatments</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-4 w-72 z-50">
                  <div className="bg-white shadow-lg border border-gray-100 py-3">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/${service.slug}`}
                        className="block px-5 py-2.5 text-gray-600 hover:bg-cream-100 hover:text-primary-700 transition-colors text-sm"
                      >
                        {service.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 mx-5">
                      <Link
                        href="/treatments"
                        className="block py-2 text-primary-700 font-medium text-sm"
                      >
                        View All Treatments →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsDropdownOpen(true)}
              onMouseLeave={() => setLocationsDropdownOpen(false)}
            >
              <button className="text-gray-700 hover:text-primary-700 transition-colors flex items-center space-x-1 text-sm tracking-wide">
                <span>Locations</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {locationsDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-4 w-64 z-50">
                  <div className="bg-white shadow-lg border border-gray-100 py-3">
                    {featuredBoroughs.map((borough) => (
                      <Link
                        key={borough.slug}
                        href={`/locations/${borough.slug}`}
                        className="block px-5 py-2.5 text-gray-600 hover:bg-cream-100 hover:text-primary-700 transition-colors text-sm"
                      >
                        {borough.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-2 pt-2 mx-5">
                      <Link
                        href="/locations"
                        className="block py-2 text-primary-700 font-medium text-sm"
                      >
                        View All Locations →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link href="/about" className="text-gray-700 hover:text-primary-700 transition-colors text-sm tracking-wide">
              About
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-700 transition-colors text-sm tracking-wide">
              Journal
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-700 transition-colors text-sm tracking-wide">
              Contact
            </Link>
            
            {/* CTA Button - Elegant */}
            <Link
              href="/free-quote"
              className="bg-primary-700 text-white px-6 py-2.5 text-sm tracking-wide hover:bg-primary-800 transition-colors"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-100">
            <div className="space-y-4">
              <Link href="/" className="block py-2 text-gray-700 text-sm tracking-wide">Home</Link>
              
              <div className="py-2">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Treatments</span>
                <div className="mt-3 space-y-2">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className="block py-1.5 text-gray-600 text-sm"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link href="/treatments" className="block py-1.5 text-primary-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>

              <div className="py-2">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Locations</span>
                <div className="mt-3 space-y-2">
                  {featuredBoroughs.slice(0, 5).map((borough) => (
                    <Link
                      key={borough.slug}
                      href={`/locations/${borough.slug}`}
                      className="block py-1.5 text-gray-600 text-sm"
                    >
                      {borough.name}
                    </Link>
                  ))}
                  <Link href="/locations" className="block py-1.5 text-primary-700 text-sm font-medium">
                    View All →
                  </Link>
                </div>
              </div>

              <Link href="/about" className="block py-2 text-gray-700 text-sm tracking-wide">About</Link>
              <Link href="/blog" className="block py-2 text-gray-700 text-sm tracking-wide">Journal</Link>
              <Link href="/contact" className="block py-2 text-gray-700 text-sm tracking-wide">Contact</Link>
              
              <Link
                href="/free-quote"
                className="block mt-6 bg-primary-700 text-white px-6 py-3.5 text-center text-sm tracking-wide"
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
