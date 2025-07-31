import Link from 'next/link'
import { Users, Target, Lightbulb, Heart, Code, BookOpen, Star } from 'lucide-react'

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Former software engineer passionate about making technology accessible to students and developers worldwide.",
      avatar: "👨‍💻"
    },
    {
      name: "Sarah Chen",
      role: "Head of Design", 
      bio: "UX designer with 8+ years of experience creating intuitive educational tools and productivity apps.",
      avatar: "👩‍🎨"
    },
    {
      name: "Mike Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack developer specializing in Next.js, React, and building scalable web applications.",
      avatar: "👨‍💻"
    },
    {
      name: "Emily Davis",
      role: "Content Strategist",
      bio: "Educational content expert focused on creating resources that help students succeed academically.",
      avatar: "👩‍🏫"
    }
  ]

  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Student-Centered",
      description: "Everything we build is designed with students' and developers' real needs in mind."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Quality First",
      description: "We believe in creating tools that are accurate, reliable, and genuinely useful."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We constantly seek new ways to make learning and development more efficient."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Community",
      description: "We're committed to building a supportive community of learners and creators."
    }
  ]

  const milestones = [
    {
      year: "2023",
      title: "ToolkitVerse Launched",
      description: "Started with a simple GPA calculator to help students track their academic progress."
    },
    {
      year: "2023",
      title: "Developer Tools Added",
      description: "Expanded to include curated tools and resources for developers and programmers."
    },
    {
      year: "2024",
      title: "Learning Platform",
      description: "Launched comprehensive learning paths and coding tutorials for beginners."
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 100,000+ users and became a trusted resource for students worldwide."
    }
  ]

  return (
    <div className="min-h-screen py-12 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
              About ToolkitVerse
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We&apos;re on a mission to empower students and developers with the tools, resources, 
            and knowledge they need to succeed in their academic and professional journeys.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              To democratize access to high-quality educational tools and development resources, 
              making learning more accessible, efficient, and enjoyable for everyone.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                <p>
                  ToolkitVerse began in 2023 when our founder, Alex, was struggling to find reliable 
                  and user-friendly academic tools during his computer science studies. Frustrated 
                  by outdated calculators and scattered resources, he decided to build something better.
                </p>
                <p>
                  What started as a simple GPA calculator quickly evolved into a comprehensive platform 
                  serving both students and developers. We realized that the same pain points existed 
                  across different areas of learning and development.
                </p>
                <p>
                  Today, ToolkitVerse is trusted by over 100,000 users worldwide, from high school 
                  students calculating their GPAs to professional developers discovering new tools 
                  and learning cutting-edge technologies.
                </p>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">100K+</div>
                  <div className="text-gray-600 dark:text-gray-400">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">50+</div>
                  <div className="text-gray-600 dark:text-gray-400">Tools & Resources</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">1M+</div>
                  <div className="text-gray-600 dark:text-gray-400">Calculations Made</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">24/7</div>
                  <div className="text-gray-600 dark:text-gray-400">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600 dark:text-blue-400">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <div className="text-blue-600 dark:text-blue-400 font-medium mb-3">
                  {member.role}
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Journey
          </h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {milestone.year}
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Developer Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Curated collection of development tools, resources, and tutorials to accelerate your coding journey.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Student Resources
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Academic calculators, planners, and study tools designed to help students succeed in their education.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Premium Content
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                High-quality templates, guides, and resources for those who need advanced functionality.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Community
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Become part of a growing community of students and developers who are passionate 
            about learning, building, and sharing knowledge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/blog"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Read Our Blog
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
