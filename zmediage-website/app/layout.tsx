import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ZMEDIAGE | Premium Branding & Digital Growth Agency",
    template: "%s | ZMEDIAGE",
  },
  description:
    "ZMEDIAGE is a premium creative branding and digital growth agency helping businesses establish a powerful online presence through strategy, design, websites, and marketing.",
  keywords: [
    "branding agency",
    "digital marketing",
    "web development",
    "brand identity",
    "social media management",
    "performance marketing",
    "creative design",
    "business consulting",
    "India",
    "ZMEDIAGE",
  ],
  authors: [{ name: "ZMEDIAGE" }],
  creator: "ZMEDIAGE",
  publisher: "ZMEDIAGE",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zmediage.com",
    siteName: "ZMEDIAGE",
    title: "ZMEDIAGE | Premium Branding & Digital Growth Agency",
    description:
      "Building brands that inspire trust and drive sustainable growth through strategy, creativity, and technology.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ZMEDIAGE - Premium Branding Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ZMEDIAGE | Premium Branding & Digital Growth Agency",
    description:
      "Building brands that inspire trust and drive sustainable growth through strategy, creativity, and technology.",
    images: ["/images/og-image.jpg"],
    creator: "@zmediage",
  },
  alternates: {
    canonical: "https://zmediage.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="min-h-screen bg-dark text-foreground antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
