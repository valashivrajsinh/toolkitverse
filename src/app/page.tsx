import Link from 'next/link'
import { ArrowRight, Calculator, Code, Download, TrendingUp, Sparkles, Zap } from 'lucide-react'
import ToolCard from '@/components/ToolCard'
import { DemoAdPlaceholder } from '@/components/AdSpace'
import { toolCategories } from '@/config/site'

// Sample featured tools data
const featuredTools = [
  {
    title: "ChatGPT",
    description: "Advanced AI assistant for writing, coding, and problem-solving. Perfect for students and developers.",
    logo: "/logos/chatgpt.png",
    category: "ai" as const,
    link: "https://chat.openai.com",
    isSponsored: false,
    isFeatured: true,
    rating: 4.8,
    tags: ["AI", "Writing", "Coding"],
    pricing: "freemium" as const
  },
  {
    title: "Vercel",
    description: "Deploy your React, Next.js, and static sites instantly with zero configuration.",
    logo: "/logos/vercel.png",
    category: "hosting" as const,
    link: "https://vercel.com",
    isSponsored: true,
    isFeatured: true,
    rating: 4.9,
    tags: ["Hosting", "Deployment"],
    pricing: "freemium" as const
  },
  {
    title: "Figma",
    description: "Collaborative design tool for creating beautiful interfaces and prototypes.",
    logo: "/logos/figma.png",
    category: "design" as const,
    link: "https://figma.com",
    isSponsored: false,
    isFeatured: true,
    rating: 4.7,
    tags: ["Design", "Collaboration"],
    pricing: "freemium" as const
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-700/25 bg-[size:60px_60px] opacity-30"></div>
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-6 py-3 mb-8 shadow-lg">
              <Sparkles className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                🚀 New: AI-powered study tools launched!
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight">
              Your All-in-One
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                Productivity Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Free calculators, curated tools, study planners, and resources for students and developers. 
              Everything you need to boost your productivity in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link
                href="/student-tools"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Calculator className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                Explore Student Tools
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                href="/developer-tools"
                className="group inline-flex items-center gap-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Code className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Developer Resources
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Curated Tools</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">10k+</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Happy Users</div>
              </div>
              <div className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Banner Ad */}
      <div className="container mx-auto px-4 py-8">
        <DemoAdPlaceholder type="banner" className="mx-auto" />
      </div>

      {/* Quick Tools Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Most Popular
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Quick Access Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Jump straight to our most popular calculators and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Quick Tool Cards */}
            <Link
              href="/student-tools/gpa-calculator"
              className="group relative p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-2xl border border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-blue-200 dark:bg-blue-800/30 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <Calculator className="w-10 h-10 text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">GPA Calculator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Calculate your GPA quickly and accurately with grade breakdown</p>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium">
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/student-tools/sip-calculator"
              className="group relative p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl border border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-green-200 dark:bg-green-800/30 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <TrendingUp className="w-10 h-10 text-green-600 dark:text-green-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">SIP Calculator</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Plan your systematic investment journey with detailed projections</p>
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/developer-tools"
              className="group relative p-8 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-2xl border border-purple-200 dark:border-purple-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-200 dark:bg-purple-800/30 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <Code className="w-10 h-10 text-purple-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">AI Tools</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Discover the best AI tools for coding and productivity</p>
              <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium">
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>

            <Link
              href="/downloads"
              className="group relative p-8 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl border border-orange-200 dark:border-orange-800 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-orange-200 dark:bg-orange-800/30 rounded-full -mr-10 -mt-10 opacity-50"></div>
              <Download className="w-10 h-10 text-orange-600 dark:text-orange-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Free Templates</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">Download study planners and premium templates</p>
              <div className="flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium">
                <span>Try Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* In-Content Ad */}
      <div className="container mx-auto px-4 py-12">
        <DemoAdPlaceholder type="rectangle" className="mx-auto" />
      </div>

      {/* Featured Tools Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Featured & Sponsored
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Tools
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Hand-picked tools that our community loves most
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.title} {...tool} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/developer-tools"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View All Tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Explore by Category
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Find exactly what you need with our organized tool categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {toolCategories.map((category) => (
              <Link
                key={category.id}
                href={`/developer-tools?category=${category.id}`}
                className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all duration-300"
              >
                <div className="text-center">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 text-lg mb-8">
              Get notified about new tools, resources, and productivity tips
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            
            <p className="text-blue-200 text-sm mt-4">
              Join 5,000+ students and developers. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
