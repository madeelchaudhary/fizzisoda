import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";
import localFont from "next/font/local";

import Header from "@/components/Header";
import "./globals.css";

const alpino = localFont({
  src: "../../public/assets/fonts/Alpino-Variable.woff2",
  display: "swap",
  variable: "--font-alpino",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={alpino.variable}>
      <body className="overflow-x-hidden bg-yellow-300">
        <Header />
        <main>{children}</main>
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
