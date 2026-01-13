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
  const featuredReviews = getFeaturedReviews(6);
  const generalFaqs = getGeneralFaqs().slice(0, 5);
  const recentBlogs = getRecentBlogs(4);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden min-h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/85 to-gray-900/40" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-accent-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
                Trusted by 10,000+ Londoners
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
                Look Your Best, Feel Your Best
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Compare London's top aesthetic clinics and practitioners. Free quotes in 2 hours.
              </p>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-xs text-gray-300">Verified Clinics</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-300">Patient Rating</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-white">2hr</div>
                  <div className="text-xs text-gray-300">Avg Response</div>
                </div>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  <div className="w-10 h-10 rounded-full bg-primary-500 border-2 border-white flex items-center justify-center text-xs font-bold">+99</div>
                </div>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-white">127 people</span> requested quotes today
                </div>
              </div>
            </div>

            <div>
              <LeadForm 
                title="Get 3 Free Quotes"
                subtitle="Top clinics will call you within 2 hours"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
              London's Premier Cosmetic Treatment Comparison Service
            </h2>
          </div>
          
          <div className="max-w-none text-gray-600">
            <p className="mb-8 leading-relaxed text-lg">
              Finding the right cosmetic treatment provider in London can feel overwhelming. With hundreds of clinics offering everything from Botox and dermal fillers to advanced skin rejuvenation therapies, how do you know which practitioner is right for you? That's where Cosmetic Treatment comes in. We've built the UK's most comprehensive comparison platform, connecting you with verified, qualified aesthetic professionals across Greater London and the surrounding areas.
            </p>
            
            {/* Highlight Boxes */}
            <div className="grid grid-cols-3 gap-4 my-10">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">500+</div>
                <div className="text-sm font-medium text-gray-700">Verified Clinics</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">2 Hrs</div>
                <div className="text-sm font-medium text-gray-700">Quote Response</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-100">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">100%</div>
                <div className="text-sm font-medium text-gray-700">Free Service</div>
              </div>
            </div>
            
            <p className="mb-6 leading-relaxed text-lg">
              Our mission is simple: to help you make confident, informed decisions about your cosmetic treatments. Every clinic in our network has been carefully vetted for qualifications, patient reviews, and treatment outcomes. Whether you're considering your first aesthetic procedure or you're looking for a new provider, we take the guesswork out of the process by delivering personalised quotes from up to three top-rated clinics within just two hours.
            </p>
            
            <p className="leading-relaxed text-lg">
              From non-surgical treatments like lip fillers, chemical peels, and laser hair removal to more advanced procedures such as Profhilo, polynucleotides, and hair transplants, we cover the full spectrum of modern aesthetic medicine. Our service is completely free for patients—no hidden fees, no obligations. Simply tell us what you're looking for, and let London's best clinics compete for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              What Treatment Are You Looking For?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a treatment to compare prices from verified London clinics
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Why Choose Cosmetic Treatment?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to connecting you with the best aesthetic providers in London
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Trust Signal 1 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Verified Practitioners Only</h3>
              <p className="text-gray-600 leading-relaxed">
                Every clinic in our network is thoroughly vetted. We verify GMC/NMC registrations, insurance, qualifications, and patient reviews before any provider can join our platform.
              </p>
            </div>

            {/* Trust Signal 2 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-accent-100 text-accent-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Free Service</h3>
              <p className="text-gray-600 leading-relaxed">
                Our comparison service is completely free for patients. No hidden charges, no booking fees, no obligation. Get quotes, compare options, and decide on your own terms.
              </p>
            </div>

            {/* Trust Signal 3 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fast Response Times</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive calls from up to 3 qualified clinics within 2 hours of your enquiry. Our streamlined process means you can compare quotes and book consultations the same day.
              </p>
            </div>

            {/* Trust Signal 4 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">London-Wide Coverage</h3>
              <p className="text-gray-600 leading-relaxed">
                With 500+ partner clinics across 100+ London locations, from Central London to the suburbs, we'll connect you with quality providers near your home or workplace.
              </p>
            </div>

            {/* Trust Signal 5 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine Patient Reviews</h3>
              <p className="text-gray-600 leading-relaxed">
                Read authentic reviews from real patients. Our 4.9/5 average rating across 2,800+ reviews helps you choose practitioners with proven track records.
              </p>
            </div>

            {/* Trust Signal 6 */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Guidance</h3>
              <p className="text-gray-600 leading-relaxed">
                Not sure which treatment is right for you? Our comprehensive guides and blog articles help you understand your options before you speak to a clinic.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/free-quote"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-accent-600 transition text-lg shadow-lg hover:shadow-xl"
            >
              Get Your Free Quotes Today →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Get Quotes in 3 Simple Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tell Us What You Need</h3>
              <p className="text-gray-600">
                Pick your treatment and location. Takes 30 seconds.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Calls From Top Clinics</h3>
              <p className="text-gray-600">
                Up to 3 verified clinics will call you within 2 hours with quotes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-primary-100 text-primary-600 rounded-2xl flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Your Consultation</h3>
              <p className="text-gray-600">
                Compare prices and reviews. Choose the best fit for you.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/free-quote"
              className="inline-block bg-accent-500 text-white px-8 py-4 rounded-lg font-bold hover:bg-accent-600 transition text-lg shadow-lg hover:shadow-xl"
            >
              Get 3 Free Quotes →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Snippets Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Latest From Our Blog
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert advice, treatment guides, and industry insights to help you make informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBlogs.map((blog) => (
              <article key={blog.slug} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition group">
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-2">
                    {blog.category || 'Treatment Guide'}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition line-clamp-2">
                    <Link href={`/blog/${blog.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{blog.author}</span>
                    <Link 
                      href={`/blog/${blog.slug}`}
                      className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition"
            >
              View All Articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Locations */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Find Clinics Near You
            </h2>
            <p className="text-xl text-gray-600">
              100+ locations across London
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {boroughs.map((borough) => (
              <Link
                key={borough.slug}
                href={`/locations/${borough.slug}`}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:border-primary-300 hover:shadow-md transition group text-center"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition">
                  {borough.name}
                </h3>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/locations"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All 100+ Locations →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Real Results From Real Patients
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <span className="text-gray-600">4.9/5 from 2,847 reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/reviews"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
          </div>

          <FAQAccordion faqs={generalFaqs} />

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="text-primary-600 font-semibold hover:text-primary-700 transition"
            >
              View All FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974')" }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Your Best Look Is One Click Away
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 10,000+ Londoners who found their ideal cosmetic treatment provider
          </p>
          <Link
            href="/free-quote"
            className="inline-block bg-accent-500 text-white px-10 py-5 rounded-lg font-bold hover:bg-accent-600 transition text-xl shadow-lg hover:shadow-xl"
          >
            Get 3 Free Quotes Now →
          </Link>
          <p className="mt-4 text-gray-400 text-sm">No spam. No obligation. Just quotes from top clinics.</p>
        </div>
      </section>
    </>
  );
}
