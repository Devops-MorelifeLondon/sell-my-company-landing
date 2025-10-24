'use client';

import { Mail, Phone, MapPin, Building, ChevronsRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  const quickLinks = [
    { name: 'Buy UK Readymade Company', href: 'https://www.lead-force.co.uk/buy-readymade-company' },
    { name: 'UK Company Formation', href: 'https://www.lead-force.co.uk/uk-company-formation-for-non-residents' },
    { name: 'UK Business Bank Account', href: 'https://www.lead-force.co.uk/uk-business-bank-account-for-non-residents' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Company Info */}
          <div className="md:col-span-2 lg:col-span-1">
            <img src="/logo/leadforce_white.png" className='w-32' alt="" />
            <p className="mt-4 text-gray-400 leading-relaxed">
             Your expert partner for buying UK VAT-registered companies - fast, secure exits for business owners.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2" aria-label="Footer navigation">
              {quickLinks.map(link => (
                <a
                  key={link.name}
                  target='_blank'
                  href={link.href}
                  className="flex items-center text-gray-300 hover:text-[#0000ff] hover:translate-x-1 transition-all"
                  aria-label={`Go to ${link.name}`}
                >
                  <ChevronsRight className="w-4 h-4 mr-2" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                <a href="mailto:info@lead-force.co.uk" className="text-gray-300 hover:text-white transition-colors">
                  info@lead-force.co.uk
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                <a href="tel:+443332420790" className="text-gray-300 hover:text-white transition-colors">
                  0333 242 0790
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <a
                  href="https://wa.me/447480022706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-3 text-[#18d96c]   font-medium  transition"
                >
                  <FaWhatsapp className='text-[20px]' />

                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Office Address */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Office</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#0000ff] flex-shrink-0 mt-1" />
                <address className="text-gray-400 not-italic leading-relaxed">
                  Winsor And Newton Building,<br />
                  Harrow, Wealdstone, HA3 5RN,<br />
                  United Kingdom
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Building className="w-5 h-5 text-[#0000ff] flex-shrink-0" />
                <span className="text-gray-400 text-sm">Company No: 12177886</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="text-center text-sm text-gray-500">
            <p>
              LeadForce is a trading name of Leadforce Ltd. All services are subject to our terms and local regulations.
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} Leadforce Ltd. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
