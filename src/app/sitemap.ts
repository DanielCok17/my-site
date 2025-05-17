import type { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL!

  // Main pages
  const routes = [
    '',
    '/#projects',
    '/#services',
    '/#skills',
    '/#testimonials',
    '/#contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Add language variants
  const languageVariants = routes.flatMap((route) => [
    {
      ...route,
      url: `${route.url}?lang=sk`,
    },
    {
      ...route,
      url: `${route.url}?lang=en`,
    },
  ])

  return languageVariants
}
