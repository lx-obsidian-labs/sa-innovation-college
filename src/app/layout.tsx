import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/layout/SkipLink";
import CookieConsent from "@/components/layout/CookieConsent";
import UtilityBar from "@/components/home/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppSupport from "@/components/home/WhatsAppSupport";
import BackToTop from "@/components/layout/BackToTop";
import RouteProgress, { ReadingProgress } from "@/components/ui/RouteProgress";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sainnovationcollege.co.za"),
  title: {
    default: "SA Innovation College | Practical Skills and Career-Focused Courses",
    template: "%s | SA Innovation College",
  },
  description:
    "Build practical skills for work, business and further study through career-focused courses, flexible options and clear Admissions guidance.",
  keywords: [
    "SA Innovation College",
    "traffic officer course",
    "computer literacy",
    "table service course",
    "office administration",
    "facilitator course",
    "assessor course",
    "bookkeeping course",
    "entrepreneurship course",
    "early childhood development",
    "Centurion college",
    "no matric college",
    "South Africa college",
    "accredited courses",
    "SETA accredited training",
  ],
  icons: {
    icon: "/images/Favicon.webp",
    apple: "/images/Favicon.webp",
  },
  authors: [{ name: "SA Innovation College" }],
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.sainnovationcollege.co.za",
    siteName: "SA Innovation College",
    title: "SA Innovation College | Practical Skills and Career-Focused Courses",
      description:
        "Build practical skills for work, business and further study through career-focused courses, flexible options and clear Admissions guidance.",
    images: [
      {
        url: "/images/SA-INNOVATION-COLLEGE-2-scaled.webp",
        width: 1200,
        height: 630,
        alt: "SA Innovation College",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SA Innovation College | Practical Skills and Career-Focused Courses",
    description:
      "Build practical skills for work, business and further study through career-focused courses, flexible options and clear Admissions guidance.",
    images: ["/images/SA-INNOVATION-COLLEGE-2-scaled.webp"],
  },
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
  alternates: {
    canonical: "https://www.sainnovationcollege.co.za",
  },
};

const GA_ID = "G-6WBQW2P9Q1";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`}>
      <head>
        {GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_ID}');`,
              }}
            />
          </>
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "SA Innovation College",
              url: "https://www.sainnovationcollege.co.za",
              logo: "https://www.sainnovationcollege.co.za/images/logo-sa-innovation.webp",
              description: "Practical, flexible and industry-aligned learning designed for school leavers, working professionals, and employers.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "147 Burger Avenue, 1st Floor, Barclays Centre, Lyttelton Manor",
                addressLocality: "Centurion",
                postalCode: "0157",
                addressCountry: "ZA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+27-800-014-568",
                contactType: "admissions",
                availableLanguage: ["English", "Afrikaans", "Zulu", "Sotho"],
              },
              sameAs: [
                "https://www.facebook.com/sainnovationcollege",
                "https://www.instagram.com/sainnovationcollege",
                "https://x.com/sainnovationcol",
                "https://www.linkedin.com/company/sa-innovation-college",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[var(--font-family-body)]">
        <RouteProgress />
        <ReadingProgress />
        <SkipLink />
        <ToastProvider>
          <UtilityBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppSupport />
          <CookieConsent />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
