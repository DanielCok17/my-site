'use client'

import { MsgIcon, PhoneIcon } from '@/utils/icons'
import ContactForm from './ContactForm'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getTranslations } from '@/utils/i18n'

const ContactSection = () => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en'
  const [t, setT] = useState<any>(null)

  useEffect(() => {
    getTranslations('contact', lang).then(setT)
  }, [lang])

  if (!t) return null // Loader

  return (
    <section
      id="contact"
      className="bg-secondary my-8 grid grid-cols-1 gap-16 rounded-4xl p-8 md:my-16 md:grid-cols-2 md:gap-8 lg:gap-12">
      <div className="flex flex-col justify-between gap-8">
        <div>
          <h3 className="text-neutral text-3xl font-bold">{t.title}</h3>
          <h4 className="text-accent text-2xl font-bold md:text-3xl">{t.subtitle}</h4>
          <p className="text-neutral mt-8">
            {t.description}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-neutral text-lg font-bold">{t.contactInfoTitle}</p>
          <a
            href="mailto:cokydano@gmail.com"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <MsgIcon /> cokydano@gmail.com
          </a>
          <a
            href="tel:+421917387255"
            className="text-neutral hover:text-accent flex items-center gap-1 font-light transition-colors duration-300">
            <PhoneIcon /> +421917387255
          </a>
        </div>
      </div>

      <ContactForm t={t} />
    </section>
  )
}

export default ContactSection
