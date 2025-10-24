'use client';

import {
  Clock,
  ShieldCheck,
  FileText,
  Handshake,
  PoundSterling,
  Lock,
} from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: '48-Hour Offer Guarantee',
    description: 'Get a no-obligation cash offer within 48 hours of submitting your company details.',
  },
  {
    icon: ShieldCheck,
    title: 'Full Confidentiality',
    description: 'Your business and identity stay completely protected throughout the entire process.',
  },
  {
    icon: FileText,
    title: 'Legal & Compliant Transfer',
    description: 'We handle all due diligence, legal transfer and VAT registration changes seamlessly.',
  },
  {
    icon: Handshake,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. You know exactly what you\'ll get and how we\'ll proceed.',
  },
  {
    icon: PoundSterling,
    title: 'Fair Cash Offers',
    description: 'Receive a competitive cash offer based on your company\'s value and compliance status.',
  },
  {
    icon: Lock,
    title: 'Secure Handover',
    description: 'We take over company assets and registrations - you walk away clean with cash in hand.',
  },
];

export default function CompanyAcquisitionBenefits() {
  return (
    <section
      className="bg-gray-50 dark:bg-black py-16 sm:py-14"
      aria-label="Company Acquisition Benefits"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Why Partner With Us
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Sell Your UK VAT-Registered Company Fast, Secure & Confidential
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We're specialist buyers of UK VAT-registered companies. You talk to experienced professionals who understand the market and ensure a smooth, hassle-free exit.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group relative bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-700"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <benefit.icon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}