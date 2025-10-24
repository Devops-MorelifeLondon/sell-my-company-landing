'use client';

import { ArrowRight, Check } from 'lucide-react';

export default function AboutSection() {
  const benefits = [
    'Get a fair cash offer for your company',
    'Complete legal and VAT transfer handled',
    'Fast, secure and confidential process'
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-16 sm:py-14" aria-label="About Our Acquisition Service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="text-left">
            <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Your Exit Strategy Partner
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Sell Your UK VAT-Registered Company with Confidence
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              We specialize in acquiring VAT-registered UK companies from owners seeking a clean, hassle-free exit. 
              Our team of experienced professionals understands the market and ensures a smooth transfer process.
            </p>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Whether you're looking to retire, move on to new ventures, or simply want to avoid the lengthy traditional 
              sale process, we provide a secure and efficient solution tailored to your needs.
            </p>

            {/* Benefits List */}
            <div className="mt-6 space-y-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mr-3">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 font-medium text-base">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0000ff] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                Get Your Free Offer
                <ArrowRight size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative h-96 lg:h-full w-full">
            <div className="h-full w-full rounded-2xl overflow-hidden ">
              {/* Replaced with more relevant business transition image */}
              <img 
                src="/banner.png" 
                alt="Business transition and handover process"
                className="w-full h-full object-contain"
              />
              
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#0000ff] rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gray-300 rounded-full opacity-20 blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
}