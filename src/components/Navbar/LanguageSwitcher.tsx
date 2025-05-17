'use client'
import { useSearchParams, usePathname } from 'next/navigation'

const LanguageSwitcher = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en'

  // Zachová ostatné query parametre
  const getHref = (newLang: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('lang', newLang)
    return `${pathname}?${params.toString()}`
  }

  return (
    <div className="flex items-center gap-2 px-4 md:px-0 md:ml-4">
      <a href={getHref('sk')} className={`transition-colors text-xs md:text-sm px-2 py-1 rounded ${lang === 'sk' ? 'bg-accent text-[#00071E] font-bold underline' : 'text-tertiary-content hover:text-accent'}`}>SK</a>
      <span className="text-tertiary-content">|</span>
      <a href={getHref('en')} className={`transition-colors text-xs md:text-sm px-2 py-1 rounded ${lang === 'en' ? 'bg-accent text-[#00071E] font-bold underline' : 'text-tertiary-content hover:text-accent'}`}>EN</a>
    </div>
  )
}

export default LanguageSwitcher 