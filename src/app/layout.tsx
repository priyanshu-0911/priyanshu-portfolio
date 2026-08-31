import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Priyanshu Ramchandani — Full-Stack Developer",
  description:
    "Portfolio of Priyanshu Ramchandani, a Full-Stack Developer and Builder. Showcasing projects in Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Priyanshu Ramchandani",
    "Full-Stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Portfolio",
  ],
  authors: [{ name: "Priyanshu Ramchandani" }],
  openGraph: {
    title: "Priyanshu Ramchandani — Full-Stack Developer",
    description: "Builder · Problem Solver · Constantly Learning",
    type: "website",
  },
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
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}