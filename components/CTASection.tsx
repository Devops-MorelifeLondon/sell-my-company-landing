'use client';

import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const handleGetOfferClick = () => {
    // Scroll to contact form or hero section
    window.location.href = '#contact-form';
  };

  const benefits = [
    'Free, no-obligation cash offer',
    'Fast 48-hour assessment',
    'Transparent pricing - no hidden fees',
    'Full legal & compliance handling',
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-14" aria-label="Call to action">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0000ff] shadow-xl overflow-hidden rounded-xl">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
              width="404"
              height="404"
              fill="none"
              viewBox="0 0 404 404"
              role="img"
              aria-labelledby="svg-pat-1"
            >
              <title id="svg-pat-1">Pattern</title>
              <defs>
                <pattern
                  id="ad119f34-7694-4c31-944c-53c889a09450"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <rect x="0" y="0" width="4" height="4" className="text-white" fill="currentColor"></rect>
                </pattern>
              </defs>
              <rect width="404" height="404" fill="url(#ad119f34-7694-4c31-944c-53c889a09450)"></rect>
            </svg>
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left side: Content */}
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Ready to Sell Your UK VAT-Registered Company?
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl">
                  Submit your details now for a free, no-obligation offer. We'll review your company, send you an offer, 
                  and if you accept we'll handle the legal process and payout.
                </p>
                <p className="mt-2 text-lg text-blue-200">
                  Call Now: <a href="tel:+447480022706" className="underline font-semibold">+44 7480 022706</a><br />
                  Urgent? WhatsApp: <a href="https://wa.me/447480022706" target="_blank" className="underline font-semibold">+44 7480 022706</a><br />
                  Email: <a href="mailto:info@lead-force.co.uk" className="underline font-semibold">info@lead-force.co.uk</a>
                </p>

                <div className="mt-6 space-y-3">
                  {benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center text-blue-100">
                      <CheckCircle className="h-5 w-5 text-blue-300 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side: Button */}
              <div className="lg:text-right mt-6 lg:mt-0">
                <button
                  onClick={handleGetOfferClick}
                  className="inline-flex items-center justify-center gap-2 w-full lg:w-auto bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-300 transform hover:scale-105"
                  aria-label="Get my free offer now"
                >
                  GET MY FREE OFFER
                  <ArrowRight size={20} />
                </button>
                <p className="text-sm text-blue-200 mt-3 text-center lg:text-right">
                  Confidential assessment - no commitment required
                </p>
              </div>
            </div>

            <p className="mt-6 text-blue-200 text-center lg:text-left">
              Your Exit Strategy Starts Here.<br />
              <strong>Leadforce - Your trusted partner for selling UK VAT-registered companies.</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}