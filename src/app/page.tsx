import Link from 'next/link'
import { ArrowRight, Calculator, Code, Download, TrendingUp } from 'lucide-react'
import ToolCard from '@/components/ToolCard'
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
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900/20">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Your All-in-One
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}Productivity Hub
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Free calculators, curated tools, study planners, and resources for students and developers. 
              Everything you need to boost your productivity in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/student-tools"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Explore Student Tools
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/developer-tools"
                className="inline-flex items-center gap-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                <Code className="w-5 h-5" />
                Developer Resources
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Curated Tools</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10k+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Free Access</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Tools Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Access Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Jump straight to our most popular calculators and tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Quick Tool Cards */}
            <Link
              href="/student-tools/gpa-calculator"
              className="group p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300"
            >
              <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">GPA Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Calculate your GPA quickly and accurately</p>
              <ArrowRight className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/student-tools/sip-calculator"
              className="group p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300"
            >
              <TrendingUp className="w-8 h-8 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">SIP Calculator</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Plan your systematic investment journey</p>
              <ArrowRight className="w-4 h-4 text-green-600 dark:text-green-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/developer-tools"
              className="group p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300"
            >
              <Code className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">AI Tools</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Discover the best AI tools for coding</p>
              <ArrowRight className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/downloads"
              className="group p-6 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl border border-orange-200 dark:border-orange-800 hover:shadow-lg transition-all duration-300"
            >
              <Download className="w-8 h-8 text-orange-600 dark:text-orange-400 mb-4" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free Templates</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">Download study planners and templates</p>
              <ArrowRight className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Tools
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
