import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

// SEO Configuration
import { 
  siteConfig, 
  personSchema, 
  professionalServiceSchema, 
  websiteSchema,
  organizationSchema 
} from "./metadata";

const JetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetbrainsMono",
});

// Enhanced Metadata with comprehensive SEO
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    { 
      name: siteConfig.author.name, 
      url: siteConfig.url 
    }
  ],
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Full Stack Software Developer`,
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@marvellousadebayo", // Update with actual Twitter handle
  },
  
  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  // Verification tags (add when you get them)
  verification: {
    google: "your-google-verification-code", // Add after Google Search Console setup
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  
  // Alternate languages
  alternates: {
    canonical: siteConfig.url,
    languages: {
      'en-US': siteConfig.url,
    },
  },
  
  // Category
  category: "Technology",
  
  // Additional metadata
  other: {
    "geo.region": "NG-LA",
    "geo.placename": "Lagos",
    "geo.position": "6.5244;3.3792",
    "ICBM": "6.5244, 3.3792",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="author" content={siteConfig.author.name} />
        <meta name="copyright" content={`© ${new Date().getFullYear()} ${siteConfig.author.name}`} />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/photo.png" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={siteConfig.url} />
      </head>
      <body className={JetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
