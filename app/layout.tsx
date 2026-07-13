import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rank with Imran | SEO Specialist",
  description:
    "Professional SEO Specialist helping businesses improve Google rankings, increase organic traffic, and grow online visibility.",
  keywords: [
    "SEO Specialist",
    "Technical SEO",
    "Local SEO",
    "On Page SEO",
    "SEO Audit",
    "WordPress SEO",
  ],
  authors: [{ name: "Imran" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}