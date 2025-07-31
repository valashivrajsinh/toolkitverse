'use client'

import { useEffect } from 'react'

interface AdSpaceProps {
  slot: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical' | 'square'
  className?: string
  style?: React.CSSProperties
}

export default function AdSpace({ 
  slot, 
  format = 'auto', 
  className = '',
  style 
}: AdSpaceProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - Google AdSense script will be loaded externally
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log('AdSense error:', err)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_CLIENT || 'ca-pub-xxxxxxxxxxxxxxxx'}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}

// Pre-defined ad components for common placements
export function TopBannerAd() {
  return (
    <AdSpace
      slot="1234567890"
      format="horizontal"
      className="w-full max-w-4xl mx-auto my-8"
      style={{ minHeight: '100px' }}
    />
  )
}

export function SidebarAd() {
  return (
    <AdSpace
      slot="0987654321"
      format="rectangle"
      className="w-full max-w-sm"
      style={{ minHeight: '250px' }}
    />
  )
}

export function InContentAd() {
  return (
    <AdSpace
      slot="1122334455"
      format="rectangle"
      className="w-full max-w-lg mx-auto my-12"
      style={{ minHeight: '300px' }}
    />
  )
}

export function FooterAd() {
  return (
    <AdSpace
      slot="5544332211"
      format="horizontal"
      className="w-full max-w-6xl mx-auto my-6"
      style={{ minHeight: '90px' }}
    />
  )
}

// Demo ad placeholder component for development
export function DemoAdPlaceholder({ 
  type = 'banner',
  className = '' 
}: { 
  type?: 'banner' | 'rectangle' | 'sidebar' | 'footer'
  className?: string 
}) {
  const getAdDimensions = () => {
    switch (type) {
      case 'banner':
        return 'h-24 md:h-32'
      case 'rectangle':
        return 'h-64 w-full max-w-sm'
      case 'sidebar':
        return 'h-96 w-full max-w-xs'
      case 'footer':
        return 'h-20 md:h-24'
      default:
        return 'h-32'
    }
  }

  return (
    <div className={`bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 flex items-center justify-center ${getAdDimensions()} ${className}`}>
      <div className="text-center p-4">
        <div className="text-gray-500 dark:text-gray-400 font-medium text-sm">
          📢 Advertisement Space
        </div>
        <div className="text-gray-400 dark:text-gray-500 text-xs mt-1">
          {type.charAt(0).toUpperCase() + type.slice(1)} Ad Placement
        </div>
      </div>
    </div>
  )
}
