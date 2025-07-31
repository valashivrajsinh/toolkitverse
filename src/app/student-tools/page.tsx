import Link from 'next/link'
import { Calculator, TrendingUp, Home, Download, BookOpen, Target } from 'lucide-react'

export default function StudentToolsPage() {
  const tools = [
    {
      title: "GPA Calculator",
      description: "Calculate your Grade Point Average quickly and accurately. Add courses, credits, and grades to get your cumulative GPA.",
      icon: Calculator,
      href: "/student-tools/gpa-calculator",
      color: "blue",
      features: ["Add multiple courses", "Real-time calculation", "Grade scale reference", "Results breakdown"]
    },
    {
      title: "SIP Calculator",
      description: "Plan your Systematic Investment Plan and see how your money can grow over time with the power of compounding.",
      icon: TrendingUp,
      href: "/student-tools/sip-calculator",
      color: "green",
      features: ["Investment planning", "Rupee cost averaging", "Compounding visualization", "Goal-based SIP"]
    },
    {
      title: "EMI Calculator",
      description: "Calculate your Equated Monthly Installment for home loans, personal loans, or any other type of loan.",
      icon: Home,
      href: "/student-tools/emi-calculator",
      color: "orange",
      features: ["Loan EMI calculation", "Payment breakdown", "Interest vs principal", "Amortization schedule"]
    },
    {
      title: "Student Planners",
      description: "Download free student planner templates for Notion and Google Sheets to organize your academic life.",
      icon: Download,
      href: "/student-tools/planners",
      color: "purple",
      features: ["Notion templates", "Google Sheets", "Study schedules", "Assignment trackers"]
    },
    {
      title: "Pomodoro Timer (AI-Enhanced)",
      description: "Boost your focus with an AI-powered Pomodoro timer that adapts to your productivity patterns.",
      icon: Target,
      href: "/student-tools/pomodoro-ai",
      color: "red",
      features: ["Adaptive intervals", "Focus analytics", "Break reminders", "Productivity reports"]
    },
    {
      title: "AI Flashcard Generator",
      description: "Automatically generate study flashcards from your notes or textbook content using AI.",
      icon: BookOpen,
      href: "/student-tools/ai-flashcards",
      color: "teal",
      features: ["OCR support", "Smart question generation", "Spaced repetition", "Export to Anki"]
    },
    {
      title: "Scholarship Finder (Hidden Gems)",
      description: "Discover lesser-known scholarships and grants tailored to your profile and interests.",
      icon: TrendingUp,
      href: "/student-tools/scholarship-finder",
      color: "yellow",
      features: ["Personalized matches", "Hidden opportunities", "Application tracker", "Deadline reminders"]
    },
    {
      title: "Crypto Micro-Investment Calculator",
      description: "See how small, regular crypto investments could grow over time. Great for learning about DCA.",
      icon: Calculator,
      href: "/student-tools/crypto-micro-invest",
      color: "indigo",
      features: ["DCA simulation", "Multiple coins", "Risk visualization", "Historical data"]
    },
    {
      title: "Niche Habit Tracker",
      description: "Track quirky or niche habits (like daily language learning, coding streaks, or water intake) with custom reminders.",
      icon: Home,
      href: "/student-tools/habit-tracker",
      color: "pink",
      features: ["Custom habits", "Streak tracking", "Motivational badges", "Progress export"]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
        title: "text-blue-900 dark:text-blue-100",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        icon: "text-green-600 dark:text-green-400",
        title: "text-green-900 dark:text-green-100",
        button: "bg-green-600 hover:bg-green-700"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        icon: "text-orange-600 dark:text-orange-400",
        title: "text-orange-900 dark:text-orange-100",
        button: "bg-orange-600 hover:bg-orange-700"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "text-purple-600 dark:text-purple-400",
        title: "text-purple-900 dark:text-purple-100",
        button: "bg-purple-600 hover:bg-purple-700"
      }
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              Student Tools
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Powerful tools designed specifically for students. Calculate your GPA, plan your investments, 
            manage loans, and organize your academic life with our free online tools.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {tools.map((tool) => {
            const colorClasses = getColorClasses(tool.color)
            const Icon = tool.icon
            
            return (
              <div
                key={tool.title}
                className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 ${colorClasses.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-8 h-8 ${colorClasses.icon}`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${colorClasses.title} mb-3`}>
                      {tool.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {tool.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <Target className="w-4 h-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      href={tool.href}
                      className={`inline-flex items-center gap-2 ${colorClasses.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      <Icon className="w-5 h-5" />
                      Use {tool.title}
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Use Our Tools Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose Our Student Tools?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Accurate Calculations</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All our calculators use industry-standard formulas to ensure precise and reliable results for your academic and financial planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Student-Focused</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Designed specifically for students with features that matter most to your academic journey and future planning.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Simple, intuitive interfaces that get you the results you need quickly without any complicated setup or registration.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
            <div className="text-gray-600 dark:text-gray-400">Powerful Tools</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">Free to Use</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">10K+</div>
            <div className="text-gray-600 dark:text-gray-400">Students Helped</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
            <div className="text-gray-600 dark:text-gray-400">Available</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose any tool above and start planning your academic and financial future today. 
            No registration required - just click and calculate!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/student-tools/gpa-calculator"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start with GPA Calculator
            </Link>
            <Link
              href="/developer-tools"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore Developer Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
