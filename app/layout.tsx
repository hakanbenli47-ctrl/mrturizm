import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.engellitasima.com"),

  title: {
    default:
      "İstanbul Engelli Taksi | Kadıköy Engelli Ulaşım | Mir Ulaşım",
    template: "%s | Mir Ulaşım",
  },

  description:
    "İstanbul ve Kadıköy'de engelli taksi, tekerlekli sandalye uyumlu araç, hastane, fizik tedavi, etkinlik ve kapıdan kapıya engelli ulaşım hizmeti.",

  keywords: [
    "İstanbul engelli taksi",
    "Kadıköy engelli taksi",
    "İstanbul engelli ulaşım",
    "Kadıköy engelli ulaşım",
    "engelli taksi",
    "engelli taşıma",
    "engelli ulaşım",
    "engelli araç kiralama",
    "İstanbul engelli araç kiralama",
    "tekerlekli sandalye uyumlu araç",
    "tekerlekli sandalye taksi",
    "tekerlekli sandalye araç kiralama",
    "kapıdan kapıya engelli ulaşım",
    "hastane engelli ulaşım",
    "fizik tedavi ulaşımı",
    "fizik tedaviye gidiş geliş",
    "engelli havalimanı transferi",
    "randevulu engelli taksi",
    "erişilebilir ulaşım İstanbul",
    "engelli birey taşıma",
    "düğün engelli ulaşım",
    "engelli gelin arabası",
  ],

  authors: [
    {
      name: "Mir Ulaşım",
      url: "https://www.engellitasima.com",
    },
  ],

  creator: "Mir Ulaşım",
  publisher: "Mir Ulaşım",

  category: "Engelli Ulaşım Hizmeti",

  verification: {
    google: "heCSvV5dFl8WsV_5YaX2HqDV_rPFpd_T7UscktOhKN4",
  },

  icons: {
    icon: "/mir-logo.png",
    shortcut: "/mir-logo.png",
    apple: "/mir-logo.png",
  },

  openGraph: {
    title: "İstanbul Engelli Taksi ve Kadıköy Engelli Ulaşım",
    description:
      "Tekerlekli sandalye uyumlu araçlarla İstanbul genelinde ve Kadıköy'de randevulu, güvenli ve kapıdan kapıya engelli ulaşım hizmeti.",
    url: "https://www.engellitasima.com",
    siteName: "Mir Ulaşım",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/mir-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mir Ulaşım İstanbul Engelli Taksi ve Engelli Ulaşım Hizmeti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "İstanbul Engelli Taksi | Mir Ulaşım",
    description:
      "İstanbul ve Kadıköy'de tekerlekli sandalye uyumlu araçlarla randevulu engelli ulaşım hizmeti.",
    images: ["/mir-og.jpg"],
  },

  alternates: {
    canonical: "https://www.engellitasima.com",
    languages: {
      "tr-TR": "https://www.engellitasima.com",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Mir Ulaşım",
  alternateName: "Engelli Taşıma",
  url: "https://www.engellitasima.com",
  logo: "https://www.engellitasima.com/mir-logo.png",
  image: "https://www.engellitasima.com/mir-og.jpg",
  telephone: "+905533545018",
  description:
    "İstanbul genelinde ve Kadıköy'de tekerlekli sandalye uyumlu araçlarla engelli taksi ve planlı engelli ulaşım hizmeti.",
  areaServed: [
    {
      "@type": "City",
      name: "İstanbul",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kadıköy",
    },
    {
      "@type": "AdministrativeArea",
      name: "Üsküdar",
    },
    {
      "@type": "AdministrativeArea",
      name: "Ataşehir",
    },
    {
      "@type": "AdministrativeArea",
      name: "Maltepe",
    },
    {
      "@type": "AdministrativeArea",
      name: "Kartal",
    },
    {
      "@type": "AdministrativeArea",
      name: "Pendik",
    },
  ],
  serviceType: [
    "İstanbul engelli taksi",
    "Kadıköy engelli taksi",
    "Engelli ulaşım",
    "Tekerlekli sandalye uyumlu araç",
    "Hastane ulaşımı",
    "Fizik tedavi ulaşımı",
    "Kapıdan kapıya engelli ulaşım",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+905533545018",
    contactType: "customer service",
    availableLanguage: "Turkish",
    areaServed: "TR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18187004518"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "AW-18187004518");
          `}
        </Script>

        <Script
          id="mir-ulasim-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}