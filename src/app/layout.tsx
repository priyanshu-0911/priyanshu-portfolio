import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://portfolio.priyanshuramchandani41.workers.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Priyanshu Ramchandani | Full-Stack Developer",
    template: "%s | Priyanshu Ramchandani",
  },

  description:
    "Portfolio of Priyanshu Ramchandani, a Full-Stack Developer building modern web experiences with React, Next.js, TypeScript and backend technologies.",

  keywords: [
    "Priyanshu Ramchandani",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "India Developer",
  ],

  authors: [
    {
      name: "Priyanshu Ramchandani",
    },
  ],

  creator: "Priyanshu Ramchandani",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    title: "Priyanshu Ramchandani | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web experiences, interfaces and practical digital products.",
    siteName: "Priyanshu Ramchandani",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Ramchandani | Full-Stack Developer",
    description:
      "Full-Stack Developer building modern web experiences and practical digital products.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Priyanshu Ramchandani",
      url: siteUrl,
      jobTitle: "Full-Stack Developer",
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "REST APIs",
        "MySQL",
        "Tailwind CSS",
        "Framer Motion",
        "GSAP",
        "3D Web Development",
      ],
      sameAs: [
        "https://github.com/priyanshu-0911",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Priyanshu Ramchandani",
      description:
        "Portfolio of Priyanshu Ramchandani, a Full-Stack Developer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(structuredData)}
        </Script>

        <SmoothScroll />

        {children}
      </body>
    </html>
  );
}