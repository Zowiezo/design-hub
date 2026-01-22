import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block any staging or private admin folders
    },
    sitemap: 'https://thedesignhub.co.za/sitemap.xml',
  }
}