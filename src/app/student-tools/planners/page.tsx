import Link from 'next/link'
import { Download, Calendar, CheckSquare, Target, BookOpen, ArrowLeft } from 'lucide-react'

export default function StudentPlannersPage() {
  const planners = [
    {
      id: 1,
      title: "Ultimate Student Planner - Notion Template",
      description: "Complete academic planning system with semester overview, course tracking, assignment management, and grade calculator.",
      platform: "Notion",
      type: "Template",
      downloadUrl: "/planners/notion-student-planner.zip",
      previewImage: "/previews/notion-planner.png",
      features: [
        "Semester & course planning",
        "Assignment tracker with due dates",
        "Grade calculator integration",
        "Study schedule templates",
        "Habit tracker",
        "Goal setting framework"
      ],
      tags: ["Notion", "Academic", "Planning", "Organization"]
    },
    {
      id: 2,
      title: "Weekly Study Planner - Google Sheets",
      description: "Simple and effective weekly planner designed specifically for students. Track classes, assignments, and study sessions.",
      platform: "Google Sheets",
      type: "Spreadsheet",
      downloadUrl: "/planners/weekly-study-planner.xlsx",
      previewImage: "/previews/sheets-planner.png",
      features: [
        "Weekly schedule template",
        "Assignment deadline tracker",
        "Study session planner",
        "Progress monitoring",
        "Time blocking system",
        "Printable format"
      ],
      tags: ["Google Sheets", "Weekly", "Simple", "Printable"]
    },
    {
      id: 3,
      title: "Exam Preparation Planner",
      description: "Specialized planner for exam season with study schedules, topic tracking, and revision management.",
      platform: "PDF",
      type: "Printable",
      downloadUrl: "/planners/exam-prep-planner.pdf",
      previewImage: "/previews/exam-planner.png",
      features: [
        "Exam schedule overview",
        "Subject-wise study plan",
        "Topic checklist",
        "Revision tracker",
        "Practice test log",
        "Stress management tips"
      ],
      tags: ["PDF", "Exams", "Revision", "Study Plan"]
    },
    {
      id: 4,
      title: "Academic Year Planner",
      description: "Long-term planning template covering the entire academic year with semester breaks, important dates, and goal tracking.",
      platform: "Notion",
      type: "Template",
      downloadUrl: "/planners/academic-year-planner.zip",
      previewImage: "/previews/year-planner.png",
      features: [
        "Full academic year overview",
        "Important dates tracker",
        "Semester planning",
        "Holiday schedule",
        "Long-term goal setting",
        "Academic progress tracking"
      ],
      tags: ["Notion", "Annual", "Long-term", "Goals"]
    },
    {
      id: 5,
      title: "Daily Student Productivity Planner",
      description: "Minimalist daily planner focused on productivity, time management, and maintaining work-life balance.",
      platform: "PDF",
      type: "Printable",
      downloadUrl: "/planners/daily-productivity-planner.pdf",
      previewImage: "/previews/daily-planner.png",
      features: [
        "Daily schedule template",
        "Priority task system",
        "Habit tracking",
        "Reflection prompts",
        "Energy level monitoring",
        "Gratitude section"
      ],
      tags: ["PDF", "Daily", "Productivity", "Mindfulness"]
    },
    {
      id: 6,
      title: "Assignment & Project Tracker",
      description: "Dedicated tracker for managing multiple assignments, projects, and coursework with progress monitoring.",
      platform: "Google Sheets",
      type: "Spreadsheet",
      downloadUrl: "/planners/assignment-tracker.xlsx",
      previewImage: "/previews/assignment-tracker.png",
      features: [
        "Assignment database",
        "Due date alerts",
        "Progress tracking",
        "Grade recording",
        "Subject categorization",
        "Status monitoring"
      ],
      tags: ["Google Sheets", "Assignments", "Projects", "Tracking"]
    }
  ]

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Notion':
        return 'bg-gray-900 text-white'
      case 'Google Sheets':
        return 'bg-green-600 text-white'
      case 'PDF':
        return 'bg-red-600 text-white'
      default:
        return 'bg-blue-600 text-white'
    }
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Notion':
        return '📝'
      case 'Google Sheets':
        return '📊'
      case 'PDF':
        return '📄'
      default:
        return '📋'
    }
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Back Button */}
        <Link 
          href="/student-tools"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Student Tools
        </Link>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calendar className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Student Planners
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Free planning templates and organizational tools to help you stay on top of your academic goals. 
            Available in Notion, Google Sheets, and printable PDF formats.
          </p>
        </div>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Why Use Student Planners?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Stay Organized</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep track of assignments, deadlines, and important dates in one centralized location.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Boost Productivity</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Improve your time management and accomplish more with structured planning systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Improve Grades</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Better organization leads to improved study habits and ultimately better academic performance.
              </p>
            </div>
          </div>
        </section>

        {/* Planners Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Available Planners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planners.map((planner) => (
              <div
                key={planner.id}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Preview Image */}
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
                  <div className="text-6xl opacity-60">
                    {getPlatformIcon(planner.platform)}
                  </div>
                </div>

                <div className="p-6">
                  {/* Platform Badge */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPlatformColor(planner.platform)}`}>
                      {planner.platform}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {planner.type}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {planner.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                    {planner.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {planner.features.slice(0, 4).map((feature, index) => (
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
                      {planner.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Download Button */}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    Free Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Usage Tips */}
        <section className="mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              How to Get Started
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">For Notion Templates:</h3>
                <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Download the template file
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Import into your Notion workspace
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Customize with your courses and schedule
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Start planning and stay organized!
                  </li>
                </ol>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">For Spreadsheets & PDFs:</h3>
                <ol className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Download the file to your device
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    Open with Google Sheets, Excel, or PDF reader
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Make a copy and personalize for your needs
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    Print if needed and start using!
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Take Control of Your Academic Success
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start using these proven planning systems today and see the difference organization makes 
            in your academic performance and stress levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/student-tools/gpa-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Calculate Your GPA
            </Link>
            <Link
              href="/blog"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read Study Tips
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
