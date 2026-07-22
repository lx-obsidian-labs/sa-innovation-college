import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SkipLink from "@/components/layout/SkipLink";
import UtilityBar from "@/components/home/UtilityBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppSupport from "@/components/home/WhatsAppSupport";
import BackToTop from "@/components/layout/BackToTop";
import RouteProgress from "@/components/ui/RouteProgress";
import { ToastProvider } from "@/components/ui/Toast";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sainnovationcollege.co.za"),
  title: {
    default: "SA Innovation College | Your Future in Tech Starts Here",
    template: "%s | SA Innovation College",
  },
  description:
    "Globally recognised skills. Industry-ready graduates. No matric required for select programmes. Join 5,000+ students at SA Innovation College.",
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
    title: "SA Innovation College | Your Future in Tech Starts Here",
    description:
      "Globally recognised skills. Industry-ready graduates. No matric required for select programmes.",
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
    title: "SA Innovation College | Your Future in Tech Starts Here",
    description:
      "Globally recognised skills. Industry-ready graduates. No matric required for select programmes.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col font-[var(--font-family-body)]">
        <RouteProgress />
        <SkipLink />
        <ToastProvider>
          <UtilityBar />
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppSupport />
          <BackToTop />
        </ToastProvider>
      </body>
    </html>
  );
}
