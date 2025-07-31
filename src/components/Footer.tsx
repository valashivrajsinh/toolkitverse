"use client"

import Link from 'next/link'
import { Github, Twitter, Linkedin, Mail, Heart, Sparkles } from 'lucide-react'
import { siteConfig } from '@/config/site'
import { DemoAdPlaceholder } from './AdSpace'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
      {/* Footer Ad */}
      <div className="container mx-auto px-4 py-8">
        <DemoAdPlaceholder type="footer" className="mx-auto" />
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                TV
              </div>
              <span className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                {siteConfig.name}
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Your all-in-one productivity hub for students and developers. 
              Free tools, resources, and guides to boost your productivity.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                Stay Updated
              </h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-blue-700 rounded-xl transition-all duration-300 hover:scale-110 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:text-white" />
              </Link>
              <Link
                href="mailto:hello@toolkitverse.com"
                className="p-3 bg-gray-800 hover:bg-green-600 rounded-xl transition-all duration-300 hover:scale-110 group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 group-hover:text-white" />
              </Link>
            </div>
          </div>

          {/* Student Tools */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-4">Student Tools</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/student-tools/gpa-calculator" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  GPA Calculator
                </Link>
              </li>
              <li>
                <Link href="/student-tools/sip-calculator" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  SIP Calculator
                </Link>
              </li>
              <li>
                <Link href="/student-tools/emi-calculator" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  EMI Calculator
                </Link>
              </li>
              <li>
                <Link href="/student-tools/planners" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-blue-400 transition-colors"></span>
                  Student Planners
                </Link>
              </li>
            </ul>
          </div>

          {/* Developer Resources */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-l-4 border-purple-500 pl-4">Developer Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/developer-tools" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/developer-tools?category=hosting" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                  Free Hosting
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                  Learning Roadmaps
                </Link>
              </li>
              <li>
                <Link href="/developer-tools?category=code" className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors"></span>
                  Code Formatters
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white border-l-4 border-green-500 pl-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full group-hover:bg-green-400 transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex items-center space-x-3 text-gray-300">
              <span>© {currentYear} {siteConfig.name}. Made with</span>
              <Heart className="w-5 h-5 text-red-500 animate-pulse fill-current" />
              <span>for students and developers worldwide.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>🚀 Powered by</span>
              <span className="text-blue-400 font-medium">Next.js</span>
              <span>•</span>
              <span className="text-purple-400 font-medium">TypeScript</span>
              <span>•</span>
              <span className="text-cyan-400 font-medium">Tailwind CSS</span>
            </div>
          </div>
          
          {/* Legal Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-6 border-t border-gray-700">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-gray-400 hover:text-white transition-colors duration-300">
              Sitemap
            </Link>
          </div>
          
          {/* Back to Top Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full text-white font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="w-4 h-4" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
