import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ToolkitVerse - Your All-in-One Productivity Hub for Students & Developers',
  description: 'Free calculators, curated tools, study planners, and resources for students and developers. GPA calculator, developer tools, coding resources, and more - all in one place.',
  keywords: [
    'productivity tools',
    'student calculator',
    'GPA calculator',
    'developer tools',
    'study planner',
    'free tools',
    'coding resources',
    'student resources',
    'budget calculator',
    'SIP calculator'
  ],
  authors: [{ name: 'ToolkitVerse Team' }],
  creator: 'ToolkitVerse',
  publisher: 'ToolkitVerse',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://toolkitverse.netlify.app',
    siteName: 'ToolkitVerse',
    title: 'ToolkitVerse - Your All-in-One Productivity Hub',
    description: 'Free calculators, curated tools, study planners, and resources for students and developers.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ToolkitVerse - Productivity Tools for Students and Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ToolkitVerse - Your All-in-One Productivity Hub',
    description: 'Free calculators, curated tools, study planners, and resources for students and developers.',
    images: ['/og-image.png'],
    creator: '@toolkitverse',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://toolkitverse.netlify.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
