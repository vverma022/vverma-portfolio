import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    default: "vasu.dev",
    template: "%s | vasu.dev",
  },
  description: "Part-time developer, full-time nerd.",
  openGraph: {
    title: "vasu.dev",
    description: "Part-time developer, full-time nerd.",
    url: "https://vverma-portfolio.vercel.app",
    siteName: "vasu.dev",
    locale: "en-US",
    type: "website",
    images: [
      {
        url: "/logo1.png", // Path to the Open Graph image
        width: 1200,
        height: 630,
        alt: "vasu.dev - Part-time developer, full-time nerd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "vasu.dev",
    description: "Part-time developer, full-time nerd.",
    images: ["/logo1.png"], // Same image for consistency
    creator: "@vasiuuuu_", // Replace with your Twitter handle
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
  icons: {
    shortcut: "/logo.png", // Standard favicon for URL bar
    icon: [
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" }, // High-resolution
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" }, // Standard
    ],
    apple: "/logo.png", // For Apple devices
  },
  themeColor: "#000000", // Browser theme color for mobile
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
