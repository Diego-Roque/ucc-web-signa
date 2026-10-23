import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UCC-Signa",
  description:
    "Plataforma SaaS integral para automatizar el cumplimiento de obligaciones fiscales en control volumétrico de hidrocarburos y petrolíferos.",
  icons: { icon: "/images/ucc-logo.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={geist.variable}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          <FloatingButtons />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
