import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ramin Ahmed — Full-Stack Developer",
  description:
    "Full-stack developer and CSE undergraduate at Daffodil International University. I build practical, scalable web applications with React, Next.js, Node.js and modern databases.",
  keywords: [
    "Ramin Ahmed",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Dhaka",
    "Bangladesh",
  ],
  authors: [{ name: "Ramin Ahmed" }],
  openGraph: {
    title: "Ramin Ahmed — Full-Stack Developer",
    description:
      "Full-stack developer building practical, scalable web applications with React, Next.js and Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
