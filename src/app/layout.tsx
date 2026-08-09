import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansh Surana | Full-Stack AI Engineer & Systems Developer",
  description: "Portfolio of Ansh Surana. Shipping production AI agent swarms, real-time computer vision systems, and full-stack web platforms every single day.",
  keywords: ["Ansh Surana", "AI Engineer", "Full Stack Developer", "Next.js", "Python", "Computer Vision", "SAM 2", "Autonomous Agents"],
  authors: [{ name: "Ansh Surana" }],
  openGraph: {
    title: "Ansh Surana | Full-Stack AI Engineer & Systems Developer",
    description: "Building autonomous agent swarms, real-time vision systems, and shipping code every day.",
    url: "https://anshsurana.dev",
    siteName: "Ansh Surana Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
