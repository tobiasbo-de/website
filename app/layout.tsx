import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { site } from "@/content/site";

const inter = localFont({
  src: "../public/Inter-VariableFont_opsz,wght.ttf",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

const splineSansMono = localFont({
  src: "../public/SplineSansMono-VariableFont_wght.ttf",
  variable: "--font-spline-mono",
  display: "swap",
  weight: "300 700",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${splineSansMono.variable} h-full antialiased`}
    >
      <body className="bg-background text-foreground flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
