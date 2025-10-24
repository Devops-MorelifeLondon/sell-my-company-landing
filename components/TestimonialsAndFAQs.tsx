'use client';

import { ChevronDown, Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote:
      'The entire process was incredibly smooth and transparent. From initial offer to final payment, everything was handled professionally.',
    author: 'M. Chen, Former Business Owner',
  },
  {
    quote:
      "After 15 years running my business, I wanted a clean exit. Leadforce made it happen quickly and confidentially - no stress, no hidden fees.",
    author: 'Sarah T., Retail Business Owner',
  },
  {
    quote:
      'What impressed me most was the speed. Offer within 48 hours, full payment within a week. Exactly what I needed for my retirement plans.',
    author: 'James R., Manufacturing Business',
  },
];

const faqs = [
  {
    question: 'Is it legal to sell a UK VAT-registered company?',
    answer: 'Yes - as long as all statutory obligations have been met (VAT returns, corporate filings) and the transfer is done via proper legal process. We guide you through the entire transfer.',
  },
  {
    question: 'How fast can I get paid?',
    answer: 'We aim to provide an offer within 48 hours of your submission and complete payment once legal documentation and transfer are signed.',
  },
  {
    question: 'What happens to outstanding liabilities or VAT issues?',
    answer: 'We conduct due diligence to identify any liabilities. We only proceed when both parties are clear - you will not be left with hidden obligations.',
  },
  {
    question: 'Will you take over the VAT registration?',
    answer: 'Yes, once the transaction is complete we will assume control of the VAT registration or arrange for its closure/transfer as needed.',
  },
  {
    question: 'What if my company has low trading or no current activity?',
    answer: 'That can still work - we evaluate each company individually and will provide an offer according to condition, trading status and compliance history.',
  },
  {
    question: 'Are there any hidden fees or charges?',
    answer: 'No - we believe in transparent pricing. You know exactly what you will receive and there are no surprise deductions.',
  },
  {
    question: 'How confidential is the process?',
    answer: 'Your business and identity stay completely protected throughout. We handle everything discreetly and professionally.',
  },
  {
    question: 'What information do I need to provide initially?',
    answer: 'Just basic company details - company name, VAT number, and some basic trading information. We keep the initial process simple and straightforward.',
  },
  {
    question: 'Can I sell if I have outstanding VAT returns?',
    answer: 'We can help you get up to date with compliance requirements before proceeding with the sale.',
  },
  {
    question: 'What types of companies do you typically acquire?',
    answer: 'We specialize in VAT-registered UK limited companies across various sectors, including dormant companies and those with active trading history.',
  },
];

export default function TestimonialsAndFAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-16 sm:py-14" aria-label="Testimonials and FAQs">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-semibold text-blue-600 uppercase tracking-wider animate-pulse-slow">
            Trusted by UK Sellers
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight animate-fade-in-up">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0000ff] flex flex-col flex-1 justify-around text-white p-6 shadow-xl card-hover animate-fade-in-up animate-delay-100"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill='#EFBF04' className="w-5 h-5 text-[#EFBF04] mr-1" />
                ))}
              </div>
              <p className="italic text-blue-100 mb-4">"{t.quote}"</p>
              <p className="font-semibold text-white">{t.author}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="mt-20 max-w-3xl mx-auto">
          <p className="font-semibold text-blue-600 uppercase tracking-wider text-center animate-pulse-slow">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight text-center animate-fade-in-up">
            Common Questions About Selling Your Company
          </h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#0000ff] text-white rounded-md overflow-hidden shadow-lg border border-blue-600 card-hover animate-fade-in-up animate-delay-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold focus:outline-none"
                >
                  {faq.question}
                  <ChevronDown
                    className={`w-6 h-6 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="p-5 pt-2 text-blue-100 border-t border-blue-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}