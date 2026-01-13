import Link from 'next/link';
import LeadForm from '@/components/LeadForm';
import ServiceCard from '@/components/ServiceCard';
import ReviewCard from '@/components/ReviewCard';
import FAQAccordion from '@/components/FAQAccordion';
import { services } from '@/data/services';
import { getBoroughs } from '@/data/locations';
import { getFeaturedReviews } from '@/data/reviews';
import { getGeneralFaqs } from '@/data/faqs';
import { getRecentBlogs } from '@/data/blogs';

export default function HomePage() {
  const boroughs = getBoroughs();
  const featuredReviews = getFeaturedReviews(3);
  const generalFaqs = getGeneralFaqs().slice(0, 5);
  const recentBlogs = getRecentBlogs(3);

  return (
    <>
      {/* Hero Section - Elegant Asymmetric Layout */}
      <section className="relative bg-primary-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950 via-primary-900/95 to-primary-900/80" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-xl">
              <div className="w-12 h-0.5 bg-accent-400 mb-8" />
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                London's Premier Aesthetic Treatment Service
              </h1>
              
              <p className="text-lg text-primary-100 mb-10 leading-relaxed">
                Connecting you with verified, qualified aesthetic professionals. 
                Experience excellence in cosmetic treatments across Greater London.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-quote"
                  className="bg-white text-primary-900 px-8 py-4 text-sm tracking-wide hover:bg-cream-100 transition-colors text-center"
                >
                  Book Consultation
                </Link>
                <Link
                  href="/treatments"
                  className="border border-white/30 text-white px-8 py-4 text-sm tracking-wide hover:bg-white/10 transition-colors text-center"
                >
                  View Treatments
                </Link>
              </div>
            </div>

            <div className="hidden lg:block">
              <LeadForm 
                title="Request a Consultation"
                subtitle="Receive expert advice within 2 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Form */}
      <section className="lg:hidden bg-cream-100 py-12">
        <div className="max-w-lg mx-auto px-4">
          <LeadForm 
            title="Request a Consultation"
            subtitle="Receive expert advice within 2 hours"
          />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">About Us</span>
              <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-6">
                A Comprehensive Approach to Aesthetic Excellence
              </h2>
              <div className="w-12 h-0.5 bg-accent-400 mb-8" />
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Cosmetic Treatment provides a comprehensive and fully integrated comparison service, 
                  connecting you with exceptional hand-picked aesthetic practitioners and clinics across London.
                </p>
                <p>
                  Our network of medical professionals have devoted their careers to specialising within 
                  their field of expertise. This enables us to offer each patient a complete service, 
                  putting you at the centre of what we do: <em className="text-gray-900">delivering the right 
                  treatment, at the right time, with the best outcomes.</em>
                </p>
                <p>
                  We deliver a patient-centred model providing innovative modern treatments to meet 
                  your demands. Focused on best patient outcomes and minimal downtime, we ensure each 
                  individual treatment fits conveniently around your busy life.
                </p>
              </div>
              
              <Link 
                href="/about" 
                className="inline-block mt-8 text-primary-700 text-sm font-medium hover:text-primary-900 transition-colors"
              >
                Learn More About Us →
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?q=80&w=800" 
                alt="Aesthetic clinic consultation"
                className="w-full h-auto"
              />
              {/* Stats overlay */}
              <div className="absolute -bottom-8 -left-8 bg-primary-800 text-white p-8 hidden md:block">
                <div className="text-4xl font-display text-accent-400 mb-2">500+</div>
                <div className="text-sm text-primary-200">Verified Practitioners</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">Our Treatments</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              Comprehensive Aesthetic Services
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto mb-6" />
            <p className="text-gray-600">
              From non-surgical rejuvenation to advanced aesthetic procedures, 
              delivered by highly specialised expert practitioners.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/treatments"
              className="inline-block border border-primary-700 text-primary-700 px-8 py-4 text-sm tracking-wide hover:bg-primary-700 hover:text-white transition-colors"
            >
              View All Treatments
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Trust Signals */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">Why Choose Us</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              Excellence as Standard
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Verified Practitioners</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every clinic in our network undergoes thorough vetting. We verify GMC/NMC registrations, 
                insurance, qualifications, and patient outcomes.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Prompt Response</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receive personalised recommendations from qualified practitioners within 2 hours. 
                Our streamlined process respects your time.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">London-Wide Coverage</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                With 500+ partner clinics across 100+ London locations, we connect you with 
                quality providers near your home or workplace.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Complimentary Service</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our comparison service is entirely free for patients. No hidden charges, 
                no booking fees, no obligation whatsoever.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access comprehensive treatment guides and expert articles to help you 
                understand your options before consultation.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-cream-200 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Patient-Centred Care</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your wellbeing is paramount. We connect you with practitioners who prioritise 
                safety, quality, and natural-looking results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">Patient Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              What Our Patients Say
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-block text-primary-700 text-sm font-medium hover:text-primary-900 transition-colors"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">Our Locations</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              Serving All of London
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto mb-6" />
            <p className="text-gray-600">
              Find qualified aesthetic practitioners across Greater London
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boroughs.slice(0, 15).map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}`}
                className="bg-cream-100 p-4 text-center hover:bg-primary-700 hover:text-white transition-colors group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-white transition-colors">
                  {borough.name}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/locations"
              className="inline-block text-primary-700 text-sm font-medium hover:text-primary-900 transition-colors"
            >
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Journal/Blog Section */}
      <section className="py-20 md:py-28 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">Journal</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              Expert Insights & Advice
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <article key={blog.slug} className="bg-white group">
                <div className="p-8">
                  <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">
                    {blog.category || 'Treatment Guide'}
                  </span>
                  <h3 className="font-display text-xl text-gray-900 mt-3 mb-4 group-hover:text-primary-700 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${blog.slug}`}
                    className="text-primary-700 text-sm font-medium hover:text-primary-900 transition-colors"
                  >
                    Read Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block border border-primary-700 text-primary-700 px-8 py-4 text-sm tracking-wide hover:bg-primary-700 hover:text-white transition-colors"
            >
              View All Articles
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-accent-600 font-medium">FAQs</span>
            <h2 className="font-display text-3xl md:text-4xl text-gray-900 mt-4 mb-4">
              Common Questions
            </h2>
            <div className="w-12 h-0.5 bg-accent-400 mx-auto" />
          </div>

          <FAQAccordion faqs={generalFaqs} />

          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-block text-primary-700 text-sm font-medium hover:text-primary-900 transition-colors"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-primary-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068')" }}
        />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="w-12 h-0.5 bg-accent-400 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl mb-6">
            Begin Your Journey Today
          </h2>
          <p className="text-lg text-primary-200 mb-10 max-w-xl mx-auto">
            Connect with London's finest aesthetic practitioners. 
            Complimentary consultations, no obligation.
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-white text-primary-900 px-10 py-4 text-sm tracking-wide hover:bg-cream-100 transition-colors"
          >
            Request Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
