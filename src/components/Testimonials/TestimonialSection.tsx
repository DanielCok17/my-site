'use client'

import { Testimonial } from '@/lib/types'
import { useState, useEffect } from 'react'
import SectionHeading from '../SectionHeading/SectionHeading'
import TestimonialCard from './TestimonialCard'
import { useSearchParams } from 'next/navigation'
import { getTranslations } from '@/utils/i18n'

interface TestimonialSectionProps {
  testimonials: Testimonial[]
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en'
  const [t, setT] = useState<any>(null)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    getTranslations('testimonials', lang).then(setT)
  }, [lang])

  if (!t) return null // Loader

  return (
    <section id="testimonials">
      <SectionHeading
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="hide-scrollbar my-8 flex gap-8 overflow-x-auto">
        {testimonials.map((testimonial, idx) => (
          <TestimonialCard
            key={idx}
            testimonial={testimonial}
            handleActiveCard={() => {
              setActiveCard(idx)
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-1 sm:hidden">
        {testimonials.map((_, idx) => (
          <div
            key={idx}
            className={`${idx === activeCard ? 'bg-accent size-[12px]' : 'size-[10px] bg-white/50'} rounded-full`}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialSection
