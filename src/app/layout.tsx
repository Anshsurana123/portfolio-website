import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ansh Surana — Systems Engineer & AI Developer",
  description:
    "Building vector databases, voice AI, real-time vision systems, and production infrastructure. Open source everything.",
  keywords: [
    "Ansh Surana",
    "Systems Engineer",
    "AI Developer",
    "Rust",
    "Go",
    "Python",
    "Vector Database",
    "Computer Vision",
  ],
  authors: [{ name: "Ansh Surana" }],
  openGraph: {
    title: "Ansh Surana — Systems Engineer & AI Developer",
    description:
      "Building vector databases, voice AI, real-time vision systems, and production infrastructure.",
    url: "https://anshsurana.dev",
    siteName: "Ansh Surana",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`} style={{ fontFamily: "var(--font-sans), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
