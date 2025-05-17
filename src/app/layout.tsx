import type { Metadata } from 'next'
import './globals.css'
import { Suspense } from 'react'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import { Fira_Code } from 'next/font/google'
import Script from 'next/script'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Daniel Cok | Full-Stack Web Developer'
const description = "Skilled full-stack web developer specializing in React, Next.js, Node.js, and AI solutions. Based in Slovakia. Let's bring your vision to life with modern web technologies."
const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Daniel Cok',
    'Full-Stack Developer',
    'Web Developer',
    'Next.js',
    'React',
    'Portfolio',
    'Slovakia',
    'Frontend',
    'Backend',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Modern Web',
    'AI',
    'Legal Tech',
    'AI Law',
    'AI Legal Assistant',
    'danielcok.sk',
    'danielcok',
    'Bratislava',
    'Web Apps',
    'Software Engineer',
    'Freelancer',
    'Custom Software',
    'Web Design',
    'SEO',
    'OpenAI',
    'LangChain',
    'Qdrant',
  ],
  category: 'technology',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  alternates: {
    canonical: url,
    languages: {
      'en-US': url,
      'sk-SK': `${url}?lang=sk`,
    },
  },
  openGraph: {
    title: 'Daniel Cok | Full-Stack Web Developer',
    description: 'Portfolio of Daniel Cok, a skilled full-stack web developer specializing in React, Next.js, Node.js, and AI-powered solutions. Based in Slovakia.',
    url,
    siteName: 'Daniel Cok Portfolio',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Cok | Full-Stack Web Developer',
      },
    ],
    locale: 'en_US',
    alternateLocale: 'sk_SK',
  },
  twitter: {
    title: 'Daniel Cok | Full-Stack Web Developer',
    description: 'Portfolio of Daniel Cok, a skilled full-stack web developer specializing in React, Next.js, Node.js, and AI-powered solutions. Based in Slovakia.',
    card: 'summary_large_image',
    creator: '@DanielCok',
    site: '@DanielCok',
    images: [
      {
        url: '/twitter-image.png',
        alt: 'Daniel Cok | Full-Stack Web Developer',
      },
    ],
  },
  authors: [{ name: 'Daniel Cok', url: 'https://danielcok.sk' }],
  publisher: 'Daniel Cok',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'abc123def456',
  },
  themeColor: '#011627',
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'msapplication-TileColor': '#011627',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="dark" className={firaCode.className}>
      <body>
        <header>
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
        </header>
        {children}
        <Suspense fallback={null}>
          <ThemeMenu />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `}
        </Script>
      </body>
    </html>
  )
}

export async function getHeroTranslations(lang: 'en' | 'sk') {
  if (lang === 'sk') {
    return (await import('@/messages/hero.sk.json')).default
  }
  return (await import('@/messages/hero.en.json')).default
}

export async function getTranslations(section: string, lang: 'en' | 'sk') {
  return (await import(`@/messages/${section}.${lang}.json`)).default
}
