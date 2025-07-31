import Link from 'next/link'
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark, User } from 'lucide-react'
import { notFound } from 'next/navigation'

// This would typically come from a CMS or markdown files
const blogPosts = [
  {
    slug: 'best-programming-languages-2024',
    title: 'The Best Programming Languages to Learn in 2024',
    excerpt: 'Discover which programming languages are in high demand and offer the best career prospects for developers in 2024.',
    content: `# The Best Programming Languages to Learn in 2024

The technology landscape is constantly evolving, and choosing the right programming language to learn can significantly impact your career prospects.

## Top Programming Languages for 2024

### 1. JavaScript
JavaScript continues to dominate the programming landscape in 2024. As the backbone of web development, it's essential for both frontend and backend development.

### 2. Python
Python remains one of the most popular and versatile programming languages, especially in data science, AI, and machine learning.

Ready to start coding? Check out our learning resources and developer tools to accelerate your programming journey.`,
    author: 'Tech Team',
    publishedAt: '2024-01-15',
    readTime: '8 min read',
    category: 'Programming',
    tags: ['JavaScript', 'Python', 'TypeScript', 'Career'],
    featured: true,
    image: '/blog/programming-languages-2024.jpg'
  }
]

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-4xl">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden mb-12">
          {/* Hero Image */}
          <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <div className="text-6xl mb-4">📚</div>
              <p className="text-lg opacity-90">{post.category}</p>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-8 lg:p-12">
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600 dark:text-gray-400">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 mb-12 pb-8 border-b border-gray-200 dark:border-gray-700">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
              <button className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors">
                <Bookmark className="w-4 h-4" />
                Save
              </button>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div className="text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog?tag=${tag.toLowerCase().replace(' ', '-')}`}
                    className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 px-3 py-1 rounded-full text-sm transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Enjoyed this article?
          </h2>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter for more programming tips, career advice, and study resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900 border-0"
            />
            <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </div>
    </div>
  )
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | ToolkitVerse Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    }
  }
}

// Generate static params for static generation
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
