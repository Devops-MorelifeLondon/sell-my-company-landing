import './globals.css'
import type { Metadata } from 'next'
import { Inter, Open_Sans } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })
const open = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'UK Nominee Director Services for Non-Residents | Leadforce',
  description: 'Set up your UK limited company with confidence. Leadforce provides Nominee Director appointment, incorporation support, bank account setup and full compliance for non-UK residents',
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
        <link rel="preload" as="document" href="https://form.jotform.com/252543224958462" />

        {/* Microsoft Clarity Script */}
        <Script id="clarity" >
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tvng1ynt64");
          `}
        </Script>

      </head>
      <body className={open.className}>{children}</body>
    </html>
  )
}
