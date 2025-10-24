import { Metadata } from 'next';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import ServicesSection from '@/components/ServicesSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import AboutSection from '@/components/About';
import CompanyLogoSlider from '@/components/slider';
import AwardsSection from '@/components/AwardsSection';
import FeaturedInSection from '@/components/News';
import UkSellingServices from '@/components/UkSellingServices';
import TestimonialsAndFAQs from '@/components/TestimonialsAndFAQs';
import {

  FaWhatsapp
} from "react-icons/fa6";







export const metadata: Metadata = {
  title: 'Sell Your UK VAT-Registered Company Fast & Secure | Leadforce',
  description: 'Get a fair cash offer for your UK VAT-registered company. Fast, secure & confidential acquisition process. No hidden fees, legal transfer handled for you.',
  keywords: 'sell UK company, VAT-registered company sale, UK company acquisition, business exit strategy, company transfer UK, VAT registration transfer',
  openGraph: {
    title: 'Sell Your UK VAT-Registered Company Fast & Secure | Leadforce',
    description: 'Get a fair cash offer for your UK VAT-registered company. Fast, secure & confidential acquisition process. No hidden fees, legal transfer handled for you.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sell Your UK VAT-Registered Company Fast & Secure | Leadforce',
    description: 'Get a fair cash offer for your UK VAT-registered company. Fast, secure & confidential acquisition process. No hidden fees, legal transfer handled for you.',
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: 'https://nominee.lead-force.io',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Leadforce Ltd",
  "alternateName": "LeadForce",
  "url": "https://nominee.lead-force.io",
  "logo": "https://lead-force.co.uk/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+44-333-242-0790",
    "contactType": "customer service",
    "email": "info@lead-force.co.uk",
    "availableLanguage": "English"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Winsor And Newton Building, Whitefriars Avenue",
    "addressLocality": "Harrow, Wealdstone",
    "postalCode": "HA3 5RN",
    "addressCountry": "GB"
  },
  "description": "We buy VAT-registered UK companies from owners who want a clean exit. Get a fair cash offer, smooth transfer, and no hidden fees.",
  "foundingDate": "2019",
  "identifier": "12177886",
  "sameAs": [
    "https://find-and-update.company-information.service.gov.uk/company/12177886"
  ]
};
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <main role="main">
        <Header />
        <HeroSection />
        <CompanyLogoSlider />
        <UkSellingServices />
        <AboutSection />
        <WhyChooseUs />
        <AwardsSection />
        <ServicesSection />
        <TestimonialsAndFAQs />
        {/* <FeaturedInSection /> */}
        <CTASection />
        <Footer />

        {/* ✅ WhatsApp button */}
        <a
          href="https://wa.me/447480022706"
          target="_blank"
          rel="noopener noreferrer"
          className="z-50 fixed bottom-4 right-2 md:right-4  text-sm flex items-center gap-2 bg-[#18d96c] hover:bg-green-600 text-white font-medium px-4 py-2 rounded-md shadow-lg transition"
        >
          <FaWhatsapp className='text-[20px]'/>
          
          Chat on WhatsApp
        </a>
      </main>
    </>
  );
}