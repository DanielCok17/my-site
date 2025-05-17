export async function getTranslations(section: string, lang: 'en' | 'sk') {
  return (await import(`@/messages/${section}.${lang}.json`)).default
} 