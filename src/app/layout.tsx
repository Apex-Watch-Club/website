import "./globals.css";
import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Apex Watch Club",
  description: "The Future of Luxury Watch Ownership and Trading",
  openGraph: {
    title: "Apex Watch Club",
    description: "The Future of Luxury Watch Ownership and Trading",
    url: "https://www.apexwatchclub.com/",
    images: "",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Watch Club",
    description: "The Future of Luxury Watch Ownership and Trading",
    creator: "Apex Watch Club",
    images: [""],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={ebGaramond.className}>{children}</body>
    </html>
  );
}
