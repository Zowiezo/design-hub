import type { Metadata } from "next";
import { Montserrat, Livvic, Poppins } from "next/font/google";
import "../style/global.css"
import ClientLayout from "@/components/ClientLayout";

// Configuration for Montserrat (Your Heading Font)
const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '700'],
  display: 'swap',
})

// Configuration for Poppins (Your Body/Prose Font)
const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600'],
  display: 'swap',
})

// Configuration for Livvic
const livvic = Livvic({
  subsets: ['latin'],
  variable: '--font-livvic',
  weight: ['100', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thedesignhub.co.za'),
  title: {
    default: "The Design Hub | Strategy • Identity • Code",   
    template: "%s | The Design Hub Management"
  },
  description: "A premium Creative Tech Studio curating digital excellence through strategic identity and engineered solutions. From inception to launch, we bring your vision to life.",  keywords: [
    "The Design Hub Management",
    "Incubation Hub Johannesburg", 
    "Creative Tech Studio Johannesburg",
    "Creative Tech Studio South Africa",
    "Strategic Brand Identity South Africa",
    "UI/UX Design Johannesburg",
    "Tech Innovation Mafikeng",
    "UI/UX Design Engineering",
    "Web Development and Consulting",
    "Digital Legacy Architecting",
    "Business Start-up Strategy",
    "Strategy Identity Code",
    "Zoleka Zowie Kubheka"
  ],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.thedesignhub.co.za",
    siteName: "The Design Hub Management",
    title: "The Design Hub | Strategy • Identity • Code",
    description: "Curating Digital Excellence. Bringing Vision to Life through premium design and engineering.",
    images: [{ 
      url: "/og-image.png", 
      width: 1200, 
      height: 630, 
      alt: "The Design Hub Management - Strategy • Identity • Code" 
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Design Hub | Strategy • Identity • Code",
    description: "A Creative Tech Studio specializing in Branding, Engineering, and Consulting.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "The Design Hub Management",
              "alternateName": "The Incubation Hub",
              "url": "https://www.thedesignhub.co.za",
              "logo": "https://www.thedesignhub.co.za/logo.png", 
              "description": "Where Design Meets Innovation. A premium creative tech studio and incubation hub.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Johannesburg",
                "addressRegion": "Gauteng",
                "addressCountry": "ZA"
              },
              "founder": {
                "@type": "Person",
                "name": "Zoleka Zowie Kubheka"
              }
            })
          }}
        />
      </head>
<body className={`${montserrat.variable} ${livvic.variable} ${poppins.variable} font-sans antialiased`}>        
  <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}