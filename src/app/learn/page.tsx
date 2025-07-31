import Link from 'next/link'
import { BookOpen, Download, ExternalLink, Clock, Users, Star, Zap } from 'lucide-react'

export default function LearnToCodePage() {
  const roadmaps = [
    {
      title: "Frontend Development",
      description: "Complete roadmap to become a frontend developer with HTML, CSS, JavaScript, React, and modern tools.",
      technologies: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Next.js"],
      difficulty: "Beginner to Advanced",
      duration: "6-12 months",
      icon: "🎨",
      color: "blue"
    },
    {
      title: "Backend Development",
      description: "Learn server-side programming with Node.js, databases, APIs, and cloud deployment.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "AWS"],
      difficulty: "Intermediate",
      duration: "8-12 months",
      icon: "⚙️",
      color: "green"
    },
    {
      title: "Full Stack Development",
      description: "Comprehensive path covering both frontend and backend development for complete web applications.",
      technologies: ["React", "Node.js", "Databases", "DevOps", "Testing"],
      difficulty: "Intermediate to Advanced",
      duration: "12-18 months",
      icon: "🚀",
      color: "purple"
    },
    {
      title: "Mobile Development",
      description: "Build mobile apps with React Native, Flutter, or native iOS/Android development.",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
      difficulty: "Intermediate",
      duration: "6-10 months",
      icon: "📱",
      color: "orange"
    }
  ]

  const courses = [
    {
      title: "freeCodeCamp",
      description: "Comprehensive coding curriculum with certificates in web development, data science, and more.",
      url: "https://freecodecamp.org",
      provider: "freeCodeCamp",
      type: "Interactive",
      duration: "300+ hours",
      rating: 4.8,
      students: "400k+",
      topics: ["Web Development", "Data Science", "Machine Learning", "Python"]
    },
    {
      title: "The Odin Project",
      description: "Free full-stack curriculum with projects and community support for web development.",
      url: "https://theodinproject.com",
      provider: "The Odin Project",
      type: "Project-based",
      duration: "1000+ hours",
      rating: 4.7,
      students: "200k+",
      topics: ["Full Stack", "JavaScript", "Ruby", "Git"]
    },
    {
      title: "Codecademy (Free Tier)",
      description: "Interactive coding lessons with hands-on practice in various programming languages.",
      url: "https://codecademy.com",
      provider: "Codecademy",
      type: "Interactive",
      duration: "Variable",
      rating: 4.5,
      students: "50M+",
      topics: ["Python", "JavaScript", "HTML/CSS", "SQL"]
    },
    {
      title: "MDN Web Docs",
      description: "Comprehensive documentation and tutorials for web technologies by Mozilla.",
      url: "https://developer.mozilla.org",
      provider: "Mozilla",
      type: "Documentation",
      duration: "Self-paced",
      rating: 4.9,
      students: "Millions",
      topics: ["HTML", "CSS", "JavaScript", "Web APIs"]
    },
    {
      title: "CS50x - Harvard",
      description: "Harvard's introduction to computer science and programming, available free on edX.",
      url: "https://cs50.harvard.edu/x/",
      provider: "Harvard University",
      type: "University Course",
      duration: "10-20 hours/week",
      rating: 4.9,
      students: "4M+",
      topics: ["Computer Science", "C", "Python", "Web Development"]
    },
    {
      title: "JavaScript.info",
      description: "Modern JavaScript tutorial covering everything from basics to advanced concepts.",
      url: "https://javascript.info",
      provider: "JavaScript.info",
      type: "Tutorial",
      duration: "Self-paced",
      rating: 4.8,
      students: "1M+",
      topics: ["JavaScript", "DOM", "Node.js", "Browser APIs"]
    }
  ]

  const cheatsheets = [
    {
      title: "JavaScript Cheat Sheet",
      description: "Essential JavaScript syntax, methods, and concepts in one place.",
      downloadUrl: "/cheatsheets/javascript.pdf",
      topics: ["Syntax", "Functions", "Objects", "Arrays", "ES6+"]
    },
    {
      title: "React Cheat Sheet",
      description: "React hooks, components, props, and state management quick reference.",
      downloadUrl: "/cheatsheets/react.pdf",
      topics: ["Hooks", "Components", "Props", "State", "Lifecycle"]
    },
    {
      title: "CSS Flexbox & Grid",
      description: "Visual guide to CSS Flexbox and Grid layout properties and values.",
      downloadUrl: "/cheatsheets/css-layout.pdf",
      topics: ["Flexbox", "Grid", "Layout", "Properties", "Examples"]
    },
    {
      title: "Git Commands",
      description: "Most commonly used Git commands for version control and collaboration.",
      downloadUrl: "/cheatsheets/git.pdf",
      topics: ["Branching", "Merging", "Remote", "Staging", "History"]
    }
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-600 dark:text-blue-400",
        button: "bg-blue-600 hover:bg-blue-700"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-600 dark:text-green-400",
        button: "bg-green-600 hover:bg-green-700"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-600 dark:text-purple-400",
        button: "bg-purple-600 hover:bg-purple-700"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        text: "text-orange-600 dark:text-orange-400",
        button: "bg-orange-600 hover:bg-orange-700"
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
              Learn to Code
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Start your coding journey with our curated learning paths, free courses, and quick reference guides. 
            Everything you need to become a developer.
          </p>
        </div>

        {/* Learning Roadmaps */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Learning Roadmaps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {roadmaps.map((roadmap) => {
              const colorClasses = getColorClasses(roadmap.color)
              return (
                <div
                  key={roadmap.title}
                  className={`${colorClasses.bg} ${colorClasses.border} border rounded-2xl p-8 transition-all duration-300 hover:shadow-lg`}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="text-4xl">{roadmap.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {roadmap.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {roadmap.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Duration: {roadmap.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Level: {roadmap.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {roadmap.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className={`w-full ${colorClasses.button} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}>
                    View Roadmap
                  </button>
                </div>
              )
            })}
          </div>
        </section>

        {/* Free Courses */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Free Online Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  <Link
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {course.description}
                </p>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-gray-600 dark:text-gray-400">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-gray-600 dark:text-gray-400">{course.rating}/5.0</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded">
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <Link
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Start Learning
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Cheat Sheets */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Quick Reference Cheat Sheets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cheatsheets.map((sheet) => (
              <div
                key={sheet.title}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {sheet.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {sheet.description}
                    </p>
                  </div>
                  <Download className="w-6 h-6 text-gray-400" />
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {sheet.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-xs rounded"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Getting Started Guide */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose a learning path that fits your goals and start building amazing projects. 
            Join millions of developers who started their journey with these resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/developer-tools"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Developer Tools
            </Link>
            <Link
              href="/student-tools"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Student Resources
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
