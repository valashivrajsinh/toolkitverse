'use client'

import { useState, useMemo } from 'react'
import { Search, Filter, Code, Sparkles } from 'lucide-react'
import ToolCard from '@/components/ToolCard'
import { toolCategories } from '@/config/site'

// Sample tools data - this would typically come from a CMS or API
const toolsData = [
  {
    title: "ChatGPT",
    description: "Advanced AI assistant for writing, coding, and problem-solving. Perfect for students and developers to get instant help with programming questions, code reviews, and technical explanations.",
    logo: "/logos/chatgpt.png",
    category: "ai",
    link: "https://chat.openai.com",
    isSponsored: false,
    isFeatured: true,
    rating: 4.8,
    tags: ["AI", "Coding", "Writing", "Assistant"],
    pricing: "freemium" as const
  },
  {
    title: "GitHub Copilot",
    description: "AI-powered code completion tool that helps you write code faster. Integrates directly with your favorite code editors and supports dozens of programming languages.",
    logo: "/logos/github-copilot.png",
    category: "ai",
    link: "https://github.com/features/copilot",
    isSponsored: false,
    isFeatured: true,
    rating: 4.7,
    tags: ["AI", "Code Completion", "GitHub"],
    pricing: "paid" as const
  },
  {
    title: "Vercel",
    description: "Deploy your React, Next.js, and static sites instantly with zero configuration. Get automatic HTTPS, global CDN, and seamless GitHub integration.",
    logo: "/logos/vercel.png",
    category: "hosting",
    link: "https://vercel.com",
    isSponsored: true,
    isFeatured: true,
    rating: 4.9,
    tags: ["Hosting", "Deployment", "Next.js", "React"],
    pricing: "freemium" as const
  },
  {
    title: "Netlify",
    description: "Build, deploy, and manage modern web projects. Perfect for static sites, JAMstack applications, and serverless functions with continuous deployment from Git.",
    logo: "/logos/netlify.png",
    category: "hosting",
    link: "https://netlify.com",
    isSponsored: false,
    isFeatured: false,
    rating: 4.6,
    tags: ["Hosting", "JAMstack", "Serverless"],
    pricing: "freemium" as const
  },
  {
    title: "Figma",
    description: "Collaborative design tool for creating beautiful interfaces and prototypes. Real-time collaboration, powerful design systems, and developer handoff features.",
    logo: "/logos/figma.png",
    category: "design",
    link: "https://figma.com",
    isSponsored: false,
    isFeatured: true,
    rating: 4.7,
    tags: ["Design", "UI/UX", "Collaboration", "Prototyping"],
    pricing: "freemium" as const
  },
  {
    title: "Canva",
    description: "Easy-to-use design platform for creating social media graphics, presentations, posters, and more. Thousands of templates and design elements included.",
    logo: "/logos/canva.png",
    category: "design",
    link: "https://canva.com",
    isSponsored: true,
    isFeatured: false,
    rating: 4.5,
    tags: ["Design", "Templates", "Social Media"],
    pricing: "freemium" as const
  },
  {
    title: "Notion",
    description: "All-in-one workspace for notes, tasks, wikis, and databases. Perfect for project management, documentation, and team collaboration.",
    logo: "/logos/notion.png",
    category: "productivity",
    link: "https://notion.so",
    isSponsored: false,
    isFeatured: false,
    rating: 4.6,
    tags: ["Productivity", "Notes", "Project Management"],
    pricing: "freemium" as const
  },
  {
    title: "VS Code",
    description: "Free, open-source code editor with support for debugging, syntax highlighting, intelligent code completion, and Git integration.",
    logo: "/logos/vscode.png",
    category: "code",
    link: "https://code.visualstudio.com",
    isSponsored: false,
    isFeatured: false,
    rating: 4.8,
    tags: ["Code Editor", "Development", "Free"],
    pricing: "free" as const
  },
  {
    title: "Prettier",
    description: "Opinionated code formatter that supports many languages. Integrates with most editors and enforces a consistent style by parsing your code.",
    logo: "/logos/prettier.png",
    category: "code",
    link: "https://prettier.io",
    isSponsored: false,
    isFeatured: false,
    rating: 4.4,
    tags: ["Code Formatting", "Development Tools"],
    pricing: "free" as const
  },
  {
    title: "Google Analytics",
    description: "Free web analytics service that tracks and reports website traffic. Essential for understanding your audience and measuring marketing effectiveness.",
    logo: "/logos/google-analytics.png",
    category: "analytics",
    link: "https://analytics.google.com",
    isSponsored: false,
    isFeatured: false,
    rating: 4.3,
    tags: ["Analytics", "Website Traffic", "Google"],
    pricing: "freemium" as const
  },
  {
    title: "Supabase",
    description: "Open source Firebase alternative. Provides a Postgres database, authentication, instant APIs, edge functions, and real-time subscriptions.",
    logo: "/logos/supabase.png",
    category: "database",
    link: "https://supabase.com",
    isSponsored: false,
    isFeatured: false,
    rating: 4.5,
    tags: ["Database", "Backend", "PostgreSQL", "API"],
    pricing: "freemium" as const
  },
  {
    title: "Mailchimp",
    description: "All-in-one marketing platform for email marketing, automation, and audience management. Perfect for growing your business with targeted campaigns.",
    logo: "/logos/mailchimp.png",
    category: "marketing",
    link: "https://mailchimp.com",
    isSponsored: false,
    isFeatured: false,
    rating: 4.2,
    tags: ["Email Marketing", "Automation", "Campaigns"],
    pricing: "freemium" as const
  }
]

export default function DeveloperToolsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedPricing, setSelectedPricing] = useState<string>('all')
  const [sortBy, setSortBy] = useState<string>('featured')

  const filteredAndSortedTools = useMemo(() => {
    // Filter tools based on search and selected category
    const filtered = toolsData.filter(tool => {
      const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
      const matchesPricing = selectedPricing === 'all' || tool.pricing === selectedPricing
      
      return matchesSearch && matchesCategory && matchesPricing
    })

    // Sort tools
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'featured':
          if (a.isFeatured && !b.isFeatured) return -1
          if (!a.isFeatured && b.isFeatured) return 1
          return b.rating - a.rating
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.title.localeCompare(b.title)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, selectedPricing, sortBy])

  const featuredTools = toolsData.filter(tool => tool.isFeatured)
  const sponsoredTools = toolsData.filter(tool => tool.isSponsored)

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Code className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Developer Tools
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover the best tools for developers. From AI-powered coding assistants to hosting platforms, 
            find everything you need to build amazing projects.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white appearance-none"
              >
                <option value="all">All Categories</option>
                {toolCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Pricing Filter */}
            <select
              value={selectedPricing}
              onChange={(e) => setSelectedPricing(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="all">All Pricing</option>
              <option value="free">Free</option>
              <option value="freemium">Freemium</option>
              <option value="paid">Paid</option>
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
            >
              <option value="featured">Featured First</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Alphabetical</option>
            </select>
          </div>
        </div>

        {/* Featured Tools Section */}
        {!searchTerm && selectedCategory === 'all' && selectedPricing === 'all' && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Tools</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.slice(0, 3).map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        )}

        {/* Sponsored Tools Section */}
        {!searchTerm && selectedCategory === 'all' && selectedPricing === 'all' && sponsoredTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sponsored Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sponsoredTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          </div>
        )}

        {/* All Tools Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {searchTerm || selectedCategory !== 'all' || selectedPricing !== 'all' 
                ? `Search Results (${filteredAndSortedTools.length})` 
                : 'All Tools'}
            </h2>
            
            {filteredAndSortedTools.length > 0 && (
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Showing {filteredAndSortedTools.length} of {toolsData.length} tools
              </div>
            )}
          </div>

          {filteredAndSortedTools.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedTools.map((tool) => (
                <ToolCard key={tool.title} {...tool} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Try adjusting your search terms or filters to find what you&apos;re looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedPricing('all')
                }}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Categories Overview */}
        {!searchTerm && selectedCategory === 'all' && selectedPricing === 'all' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {toolCategories.map((category) => {
                const categoryCount = toolsData.filter(tool => tool.category === category.id).length
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className="p-4 bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors text-center group"
                  >
                    <div className="text-3xl mb-2">{category.icon}</div>
                    <div className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {category.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {categoryCount} tools
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
