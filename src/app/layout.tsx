import localFont from "next/font/local";
import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

import "./globals.css";

const alpino = localFont({
  src: "/assets/fonts/Alpino-Variable.woff2",
  display: "swap",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${alpino.className}`}>{children}</body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
