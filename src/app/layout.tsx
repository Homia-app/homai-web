import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://homia-website.vercel.app"),
  title: "Homia — AR-powered Interior Design Marketplace",
  description: "Discover, preview in AR, and buy curated ceramics and wall designs from top global suppliers. Bring editorial interior design to life in your space.",
  openGraph: {
    title: "Homia — AR-powered Interior Design Marketplace",
    description: "Discover, preview in AR, and buy curated ceramics and wall designs from top global suppliers. Bring editorial interior design to life in your space.",
    url: "https://homia-website.vercel.app",
    siteName: "Homia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homia AR interior design preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homia — AR-powered Interior Design Marketplace",
    description: "Discover, preview in AR, and buy curated ceramics and wall designs from top global suppliers. Bring editorial interior design to life in your space.",
    images: ["/images/og-image.jpg"],
    creator: "@homia_app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${spaceGrotesk.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
