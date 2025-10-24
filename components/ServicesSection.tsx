'use client';

import {
  Clock,
  FileCheck,
  Handshake,
  Shield,
  PoundSterling,
  UserCheck
} from 'lucide-react';

const processSteps = [
  {
    icon: FileCheck,
    title: 'Submit Company Details',
    description: 'Fill out our short form with your company name, VAT number and basic info. We\'ll assess and provide a preliminary cash offer.'
  },
  {
    icon: Handshake,
    title: 'Agree Terms & Sign',
    description: 'Once you accept our offer, we complete all legal paperwork and you receive the agreed payment securely.'
  },
  {
    icon: UserCheck,
    title: 'Transfer & Closure',
    description: 'We take over company assets, update all registrations (including HMRC VAT) and you walk away clean with cash in hand.'
  },
  {
    icon: Clock,
    title: '48-Hour Offer Guarantee',
    description: 'Get a no-obligation cash offer within 48 hours of submitting your company details for review.'
  },
  {
    icon: Shield,
    title: 'Full Due Diligence',
    description: 'We conduct comprehensive due diligence to identify any liabilities, ensuring no hidden obligations are left behind.'
  },
  {
    icon: PoundSterling,
    title: 'Fair Cash Payment',
    description: 'Receive a competitive cash offer based on your company\'s value, trading status and compliance history.'
  },
];

export default function ProcessSection() {
  return (
    <section id='process' className="bg-gray-50 dark:bg-black py-16 sm:py-14" aria-label="Our acquisition process">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Simple & Secure
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Our Easy 3-Step Acquisition Process
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Selling your VAT-registered company has never been easier. We handle all the legal and compliance work while you get a fair cash offer and clean exit.
          </p>
        </div>

        {/* Process Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step) => (
            <div
              key={step.title}
              className="group relative bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-blue-700"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-white/20">
                  <step.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm text-blue-100">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}