'use client'
import { serviceData } from '../../appData'
import SectionHeading from '../SectionHeading/SectionHeading'
import ServiceCard from './ServiceCard'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getTranslations } from '@/utils/i18n'

const ServiceSection = () => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en'
  const [t, setT] = useState<any>(null)

  useEffect(() => {
    getTranslations('services', lang).then(setT)
  }, [lang])

  if (!t) return null // Loader

  return (
    <section id="services" className="my-14">
      <SectionHeading
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-8 md:mt-[3.75rem] md:grid-cols-3">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={t[service.key] || service.title}
            shortDescription={t[service.key + 'Desc'] || service.shortDescription}
          />
        ))}
      </div>
    </section>
  )
}

export default ServiceSection
