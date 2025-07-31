import Link from 'next/link'
import { Download, Star, FileText, ExternalLink, Crown, Zap } from 'lucide-react'

const downloadCategories = [
  'All',
  'Templates',
  'Cheat Sheets', 
  'Study Guides',
  'Code Snippets',
  'Design Assets',
  'Productivity Tools'
]

const downloads = [
  {
    id: 1,
    title: "Complete React Developer Portfolio Template",
    description: "Professional portfolio template built with React, TypeScript, and Tailwind CSS. Includes dark mode, responsive design, and modern animations.",
    category: "Templates",
    type: "React Template",
    price: 29.99,
    originalPrice: 49.99,
    rating: 4.9,
    downloads: 2847,
    featured: true,
    preview: "/previews/react-portfolio.jpg",
    downloadUrl: "https://gumroad.com/l/react-portfolio",
    tags: ["React", "TypeScript", "Portfolio", "Responsive"],
    features: [
      "Modern design with dark/light mode",
      "Responsive across all devices", 
      "TypeScript for better development",
      "Smooth animations and transitions",
      "SEO optimized",
      "Easy customization"
    ]
  },
  {
    id: 2,
    title: "JavaScript Fundamentals Cheat Sheet",
    description: "Comprehensive reference guide covering ES6+ features, array methods, async/await, and modern JavaScript concepts.",
    category: "Cheat Sheets",
    type: "PDF Guide",
    price: 9.99,
    rating: 4.8,
    downloads: 5672,
    featured: true,
    preview: "/previews/js-cheatsheet.jpg",
    downloadUrl: "https://gumroad.com/l/js-cheatsheet",
    tags: ["JavaScript", "ES6", "Reference", "Beginner"],
    features: [
      "20+ pages of content",
      "Visual examples and code snippets",
      "ES6+ modern features",
      "Printable format",
      "Quick reference cards",
      "Beginner friendly"
    ]
  },
  {
    id: 3,
    title: "Study Planner & Goal Tracker Bundle",
    description: "Digital planner templates for Notion, GoodNotes, and PDF. Includes goal tracking, habit formation, and productivity systems.",
    category: "Study Guides", 
    type: "Digital Planner",
    price: 19.99,
    originalPrice: 34.99,
    rating: 4.7,
    downloads: 3241,
    featured: false,
    preview: "/previews/study-planner.jpg",
    downloadUrl: "https://gumroad.com/l/study-planner",
    tags: ["Planning", "Productivity", "Goals", "Students"],
    features: [
      "Multiple format support",
      "Goal tracking system",
      "Habit tracker included",
      "Weekly/monthly layouts",
      "Progress visualization",
      "Customizable templates"
    ]
  },
  {
    id: 4,
    title: "CSS Grid & Flexbox Complete Guide",
    description: "Visual learning guide with interactive examples, real-world layouts, and practical exercises for mastering CSS layouts.",
    category: "Cheat Sheets",
    type: "Interactive Guide",
    price: 14.99,
    rating: 4.9,
    downloads: 4156,
    featured: false,
    preview: "/previews/css-guide.jpg",
    downloadUrl: "https://gumroad.com/l/css-layouts",
    tags: ["CSS", "Layout", "Grid", "Flexbox"],
    features: [
      "Interactive code examples",
      "50+ layout patterns",
      "Browser compatibility guide",
      "Responsive design patterns",
      "Practice exercises",
      "Video explanations"
    ]
  },
  {
    id: 5,
    title: "Python Data Science Toolkit",
    description: "Collection of Jupyter notebooks, datasets, and scripts for data analysis, visualization, and machine learning projects.",
    category: "Code Snippets",
    type: "Code Bundle",
    price: 24.99,
    rating: 4.6,
    downloads: 1923,
    featured: false,
    preview: "/previews/python-toolkit.jpg",
    downloadUrl: "https://gumroad.com/l/python-ds",
    tags: ["Python", "Data Science", "Machine Learning", "Jupyter"],
    features: [
      "20+ Jupyter notebooks",
      "Real datasets included",
      "ML algorithm examples",
      "Data visualization scripts",
      "Comprehensive documentation",
      "Regular updates"
    ]
  },
  {
    id: 6,
    title: "Minimalist UI Design System",
    description: "Complete design system with components, icons, and guidelines for creating clean, modern interfaces.",
    category: "Design Assets",
    type: "Design System",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.8,
    downloads: 2156,
    featured: false,
    preview: "/previews/ui-system.jpg",
    downloadUrl: "https://gumroad.com/l/ui-system",
    tags: ["Design", "UI", "Components", "Figma"],
    features: [
      "200+ UI components",
      "Icon library included",
      "Color palette system",
      "Typography guidelines",
      "Figma & Sketch files",
      "Documentation included"
    ]
  }
]

const freeResources = [
  {
    title: "Git Commands Reference Card",
    description: "Quick reference for essential Git commands and workflows.",
    downloadUrl: "/free/git-reference.pdf",
    format: "PDF"
  },
  {
    title: "HTML5 Semantic Elements Guide", 
    description: "Complete guide to modern HTML5 semantic elements and accessibility.",
    downloadUrl: "/free/html5-guide.pdf",
    format: "PDF"
  },
  {
    title: "Study Schedule Template",
    description: "Customizable study schedule template for effective time management.",
    downloadUrl: "/free/study-schedule.pdf",
    format: "PDF"
  },
  {
    title: "Color Palette Generator",
    description: "Web-based tool for generating harmonious color palettes for your projects.",
    downloadUrl: "/tools/color-generator",
    format: "Web Tool"
  }
]

export default function DownloadsPage() {
  const featuredDownloads = downloads.filter(item => item.featured)
  const regularDownloads = downloads.filter(item => !item.featured)

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Download className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Downloads
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Premium templates, guides, and resources to accelerate your learning and boost your productivity. 
            Plus free resources to get you started.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {downloadCategories.map((category) => (
            <button
              key={category}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Downloads */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Featured Products
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredDownloads.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-yellow-200 dark:border-yellow-800"
              >
                {/* Featured Badge */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-8">
                      <div className="text-6xl mb-4">
                        {item.category === 'Templates' ? '🎨' : 
                         item.category === 'Cheat Sheets' ? '📋' : '📚'}
                      </div>
                      <p className="text-lg opacity-90">{item.type}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold">
                    Featured
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Rating and Downloads */}
                  <div className="flex items-center gap-6 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{item.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 dark:text-gray-400">{item.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">What&apos;s Included:</h4>
                    <ul className="space-y-2">
                      {item.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Get Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            All Products
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularDownloads.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                  <div className="text-white text-4xl">
                    {item.category === 'Templates' ? '🎨' : 
                     item.category === 'Cheat Sheets' ? '📋' : 
                     item.category === 'Code Snippets' ? '💻' : 
                     item.category === 'Design Assets' ? '🎭' : '📚'}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-sm">
                      {item.type}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-yellow-500 fill-current" />
                      <span className="text-gray-600 dark:text-gray-400 text-sm">{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                    {item.description.substring(0, 100)}...
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900 dark:text-white">
                        ${item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          ${item.originalPrice}
                        </span>
                      )}
                    </div>
                    <Link
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Resources */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Zap className="w-6 h-6 text-green-600 dark:text-green-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Free Resources
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-green-200 dark:border-green-800"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                    <FileText className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <span className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs font-medium">
                    {resource.format}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {resource.description}
                </p>

                <Link
                  href={resource.downloadUrl}
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Free Download
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Custom Solutions?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Need a custom template, design, or development solution? We offer personalized services 
            tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Custom Quote
            </Link>
            <Link
              href="/blog"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Browse Tutorials
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
