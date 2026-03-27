import { MetadataRoute } from 'next'
import { siteConfig } from '@/lib/site-config'
import { blogPosts } from '@/data/blogPosts'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static routes
  const routes = [
    '',
    '/blog',
    '/ai-tiktok-video-generator',
    '/privacy',
    '/terms',
    '/cookies',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic blog routes
  const blogRoutes = Object.keys(blogPosts).map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...routes, ...blogRoutes]
}
