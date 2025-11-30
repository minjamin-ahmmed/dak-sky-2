import type React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { DakSkyLoader } from "@/components/nexivo-loader";
import { Suspense } from "react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dak-sky - B2B Logistics & Freight Forwarding Experts",
  description:
    "Reliable international freight forwarding services. Import from China to Bangladesh, export to Europe. Air freight, sea freight, door-to-door delivery, warehousing, and product sourcing solutions.",
  generator: "Dak-sky.com",
  keywords: [
    "Dak-sky",
    "logistics",
    "freight forwarding",
    "air freight",
    "sea freight",
    "China to Bangladesh import",
    "Bangladesh to Europe export",
    "door to door delivery",
    "warehousing solutions",
    "product sourcing",
    "supply chain management",
    "international shipping",
    "cargo services",
    "freight services",
    "logistics company Bangladesh",
    "customs clearance",
    "B2B logistics",
  ],
  authors: [{ name: "Dak-sky Team" }],
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }],
  },
  openGraph: {
    title: "Dak-sky - B2B Logistics & Freight Forwarding Experts",
    description:
      "Reliable international freight forwarding services. Import from China to Bangladesh, export to Europe. Air freight, sea freight, door-to-door delivery, warehousing, and product sourcing solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="smooth-scroll" suppressHydrationWarning>
      <body className={`font-sans ${spaceGrotesk.variable} antialiased`}>
        <DakSkyLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              <ScrollToTop />
            </div>
          </Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
