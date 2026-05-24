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
      "Engelli Taşıma | Engelli Araç Kiralama ve Engelli Taksi Hizmeti",
    template: "%s | Engelli Taşıma",
  },

  description:
    "Engelli Taşıma; engelli araç kiralama, engelli taksi, gelin arabası, gezi, yemek, düğün organizasyonu, planlı etkinlik ve fizik tedaviye gidiş-geliş ulaşım hizmetleri sunar.",

  keywords: [
    "engelli taşıma",
    "engelli araç kiralama",
    "engelli taksi",
    "engelli ulaşım",
    "tekerlekli sandalye araç kiralama",
    "tekerlekli sandalye uyumlu araç",
    "engelli birey taşıma",
    "engelli gelin arabası",
    "gelin arabası",
    "fizik tedavi ulaşım",
    "fizik tedaviye gidiş geliş",
    "engelli transfer",
    "erişilebilir ulaşım",
    "İstanbul engelli araç kiralama",
    "İstanbul engelli taksi",
    "İstanbul engelli ulaşım",
    "randevulu engelli araç",
    "planlı engelli ulaşım",
  ],

  verification: {
    google: "heCSvV5dFl8WsV_5YaX2HqDV_rPFpd_T7UscktOhKN4",
  },

  icons: {
    icon: "/mir-logo.png",
    shortcut: "/mir-logo.png",
    apple: "/mir-logo.png",
  },

  openGraph: {
    title:
      "Engelli Taşıma | Engelli Araç Kiralama ve Engelli Taksi Hizmeti",
    description:
      "Engelli araç kiralama, engelli taksi, gelin arabası, gezi, yemek, düğün organizasyonu ve fizik tedaviye gidiş-geliş ulaşım hizmetleri.",
    url: "https://www.engellitasima.com",
    siteName: "Engelli Taşıma",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/mir-og.jpg",
        width: 1200,
        height: 630,
        alt: "Engelli Taşıma - Engelli Araç Kiralama ve Engelli Taksi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Engelli Taşıma | Engelli Araç Kiralama ve Engelli Taksi Hizmeti",
    description:
      "Engelli araç kiralama, engelli taksi, gelin arabası ve fizik tedaviye gidiş-geliş ulaşım hizmetleri.",
    images: ["/mir-og.jpg"],
  },

  alternates: {
    canonical: "https://www.engellitasima.com",
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
      <body className="min-h-full flex flex-col">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18187004518"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18187004518');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}