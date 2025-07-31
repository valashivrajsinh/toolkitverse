import { ExternalLink, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ToolCategory } from '@/config/site'

interface ToolCardProps {
  title: string
  description: string
  logo?: string
  category: ToolCategory['id']
  link: string
  isSponsored?: boolean
  isFeatured?: boolean
  rating?: number
  tags?: string[]
  pricing?: 'free' | 'freemium' | 'paid'
}

export default function ToolCard({
  title,
  description,
  logo,
  link,
  isSponsored = false,
  isFeatured = false,
  rating,
  tags = [],
  pricing = 'free'
}: ToolCardProps) {
  return (
    <div className={`
      relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 
      shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group
      ${isFeatured ? 'ring-2 ring-blue-500' : ''}
      ${isSponsored ? 'border-yellow-300 dark:border-yellow-600' : ''}
    `}>
      {/* Sponsored Badge */}
      {isSponsored && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-xs font-medium px-2 py-1 rounded-full">
            Sponsored
          </span>
        </div>
      )}

      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3 h-3 fill-current" />
            Featured
          </span>
        </div>
      )}

      <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
        <div className="p-6">
          {/* Logo and Title */}
          <div className="flex items-start gap-4 mb-4">
            {logo && (
              <div className="flex-shrink-0">
                <Image
                  src={logo}
                  alt={`${title} logo`}
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {title}
              </h3>
              
              {/* Rating */}
              {rating && (
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300 dark:text-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {rating.toFixed(1)}
                  </span>
                </div>
              )}
            </div>

            {/* External Link Icon */}
            <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 overflow-hidden">
            {description}
          </p>

          {/* Tags and Pricing */}
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Pricing Badge */}
            <span className={`
              text-xs font-medium px-2 py-1 rounded-full
              ${pricing === 'free' 
                ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                : pricing === 'freemium'
                ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
              }
            `}>
              {pricing === 'free' ? 'Free' : pricing === 'freemium' ? 'Freemium' : 'Paid'}
            </span>
          </div>
        </div>
      </Link>
    </div>
  )
}
