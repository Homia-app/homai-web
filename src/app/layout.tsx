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
  metadataBase: new URL("https://www.homia-app.com"),
  title: "Homia & Homlye — AR Interior Marketplace & Store Management",
  description: "Preview floor tiles, wall designs, doors, windows, lighting, and 3D furniture in AR with Homlye, and manage your store, products, and orders with Homia Business on iOS and Android.",
  openGraph: {
    title: "Homia & Homlye — AR Interior Marketplace & Store Management",
    description: "Preview floor tiles, wall designs, doors, windows, lighting, and 3D furniture in AR with Homlye, and manage your store, products, and orders with Homia Business on iOS and Android.",
    url: "https://www.homia-app.com",
    siteName: "Homia",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Homlye & Homia Business AR interior marketplace preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homia & Homlye — AR Interior Marketplace & Store Management",
    description: "Preview floor tiles, wall designs, doors, windows, lighting, and 3D furniture in AR with Homlye, and manage your store with Homia Business.",
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
