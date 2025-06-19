import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/components/language-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "مدقق - نظام كشف الاحتيال المتقدم",
    template: "%s | مدقق - Modaqqeq",
  },
  description: "نظام متطور لكشف الاحتيال المالي والتلاعب في التوظيف لوزارة الموارد البشرية والتنمية الاجتماعية",
  keywords: ["fraud detection", "MHRSD", "Saudi Arabia", "كشف الاحتيال", "وزارة الموارد البشرية"],
  authors: [{ name: "Ministry of Human Resources and Social Development" }],
  creator: "MHRSD",
  publisher: "MHRSD",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: "en_US",
    url: "https://modaqqeq.mhrsd.gov.sa",
    title: "مدقق - نظام كشف الاحتيال المتقدم",
    description: "نظام متطور لكشف الاحتيال المالي والتلاعب في التوظيف",
    siteName: "Modaqqeq",
  },
  twitter: {
    card: "summary_large_image",
    title: "مدقق - نظام كشف الاحتيال",
    description: "نظام متطور لكشف الاحتيال المالي والتلاعب في التوظيف",
  },
    generator: 'v0.dev'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className={`${inter.variable} ${cairo.variable} font-arabic antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="min-h-screen bg-background text-foreground">{children}</div>
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
