'use client';

import { CheckCircle, DollarSign, FileText, Shield, Clock, Handshake } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Confidentiality Guaranteed',
    description: 'Your business and identity stay completely protected throughout the entire acquisition process.'
  },
  {
    icon: Clock,
    title: 'Fast-Track Process',
    description: 'Get a no-obligation offer within 48 hours, and we complete the acquisition when you\'re ready.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees, no surprises. You know exactly what you\'ll get and how we\'ll proceed.'
  },
  {
    icon: FileText,
    title: 'Legal & Compliant Transfer',
    description: 'We handle all due diligence, legal transfer and VAT registration changes seamlessly.'
  },
  {
    icon: CheckCircle,
    title: 'Expert Buyers',
    description: 'We\'re specialist buyers of UK VAT-registered companies with experienced professionals who understand the market.'
  },
  {
    icon: Handshake,
    title: 'Smooth Handover',
    description: 'You simply hand over and we take over - we handle everything so you can walk away clean with cash in hand.'
  }
];

export default function WhyChooseUs() {
  return (
    <section id='whychooseus' className="bg-white dark:bg-gray-900 py-16 sm:py-14" aria-label="Why choose our acquisition service">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
            Why Partner With Us
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Sell Your Company with Confidence
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            We're specialist buyers of UK VAT-registered companies. You talk to experienced professionals who understand the market and ensure a smooth, hassle-free exit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-[#0000ff] p-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:brightness-110"
              >
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}