'use client';

import { useState, useEffect } from 'react';
import { Phone, FileText, CheckCircle, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const handleCallbackClick = () => {
    window.location.href = 'https://wa.me/447480022706?text=I%20saw%20your%20website%20and%20would%20like%20to%20get%20a%20free%20offer%20for%20my%20UK%20VAT-registered%20company.';
  };

  const features = [
    'Get a cash offer within 48 hours',
    'No hidden fees - transparent pricing',
    'Full legal & VAT transfer handled',
    'Confidential & secure process'
  ];

  return (
    <section id='hero' className="relative bg-gray-50 dark:bg-black overflow-hidden" aria-label="Hero section">
  

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-22 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16 items-center">

          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
              Fast, Secure & Confidential
            </p>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              Sell Your UK VAT-Registered Company Fast
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              We buy VAT-registered UK companies from owners who want a clean exit. Get a fair cash offer, smooth transfer, and no hidden fees.
            </p>

            <div className="mt-8 text-left max-w-md mx-auto lg:mx-0">
              <div className="space-y-3">
                {features.map(feature => (
                  <div key={feature} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="tel:+447480022706" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-[#0000ff] hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                Get Your Offer
              </a>
              <button
                onClick={handleCallbackClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-blue-600 bg-transparent border-2 border-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all duration-300"
              >
                <MessageCircle size={20} />
                WhatsApp Us
              </button>
            </div>
          </div>

          {/* Right column - Responsive JotForm */}
          <div id="contact-form" className="w-full h-full lg:mt-0 -mt-8">
            <iframe
              id="JotFormIFrame-252543224958462"
              title="Get Your Free Company Valuation"
              loading="eager"
              allow="geolocation; microphone; camera; fullscreen; payment"
              src="https://form.jotform.com/252543224958462"
              className="w-full h-full border-0 rounded-lg"
              style={{ minHeight: '650px' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}