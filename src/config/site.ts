import { Metadata } from 'next'

// Site Configuration
export const siteConfig = {
  name: "ToolkitVerse",
  description: "Your all-in-one productivity hub for students and developers. Free calculators, tools, planners, and resources to boost your productivity.",
  url: "https://yourdomain.com", // Replace with your actual domain
  ogImage: "https://yourdomain.com/og.jpg", // Replace with your actual domain
  creator: "@yourusername", // Replace with your actual username
  keywords: [
    "productivity tools",
    "student calculator",
    "GPA calculator",
    "developer tools",
    "free tools",
    "student planner",
    "coding resources",
    "SIP calculator",
    "EMI calculator",
    "tech tools",
    "programming resources",
    "free courses"
  ],
  authors: [
    {
      name: "Your Name", // Replace with your actual name
      url: "https://yourdomain.com", // Replace with your actual domain
    }
  ],
  social: {
    twitter: "https://twitter.com/yourusername", // Replace with your actual social links
    github: "https://github.com/yourusername", // Replace with your actual social links
    linkedin: "https://linkedin.com/in/yourusername" // Replace with your actual social links
  }
}

// SEO defaults for metadata
export const defaultMetadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.creator,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
  },
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
}

// Navigation Configuration
export const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Student Tools', href: '/student-tools' },
  { name: 'Developer Tools', href: '/developer-tools' },
  { name: 'Learn', href: '/learn' },
  { name: 'Blog', href: '/blog' },
  { name: 'Downloads', href: '/downloads' },
]

// Tool Categories
export const toolCategories = [
  { id: "ai", name: "AI Tools", icon: "🤖" },
  { id: "hosting", name: "Hosting", icon: "🌐" },
  { id: "design", name: "Design", icon: "🎨" },
  { id: "productivity", name: "Productivity", icon: "⚡" },
  { id: "code", name: "Code Tools", icon: "💻" },
  { id: "marketing", name: "Marketing", icon: "📈" },
  { id: "analytics", name: "Analytics", icon: "📊" },
  { id: "database", name: "Database", icon: "🗄️" }
]

// AdSense Configuration
export const adSenseConfig = {
  client: "ca-pub-xxxxxxxxxxxxxxxx", // Replace with your actual AdSense client ID
  slots: {
    topBanner: "1234567890", // Replace with your actual ad slot IDs
    sidebar: "0987654321",
    inContent: "1122334455",
    footer: "5544332211"
  }
}

// Affiliate Links Configuration
export const affiliateLinks = {
  hostinger: "https://hostinger.com?ref=yourref", // Replace with your actual affiliate links
  canva: "https://canva.com?ref=yourref",
  upstox: "https://upstox.com?ref=yourref",
  gumroad: "https://gumroad.com/yourref"
}

export type ToolCategory = typeof toolCategories[number]
export type NavItem = typeof navItems[number]
