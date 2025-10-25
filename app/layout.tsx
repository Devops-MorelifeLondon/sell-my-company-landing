import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const open = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UK Nominee Director Services for Non-Residents | Leadforce',
  description:
    'Set up your UK limited company with confidence. Leadforce provides Nominee Director appointment, incorporation support, bank account setup and full compliance for non-UK residents',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link
          rel="preload"
          as="document"
          href="https://form.jotform.com/252543224958462"
        />

        {/* ✅ Microsoft Clarity Script */}
        <Script id="clarity" strategy="beforeInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tvng1ynt64");
          `}
        </Script>

        {/* ✅ Google Tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-810525438"
          strategy="afterInteractive"
        />
        <Script id="google-gtag" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-810525438');
          `}
        </Script>

           {/* Custom Form Submit Event */}
        <Script id="form-submit-event">
          {`
            function trackFormSubmit() {
              gtag('event', 'form_submit', {
                event_category: 'Form',
                event_label: 'Contact Form',
                value: 1
              });
            }
          `}
        </Script>
      </head>

      <body className={open.className}>{children}</body>
    </html>
  )
}
