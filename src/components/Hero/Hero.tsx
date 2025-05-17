'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'
import { useSearchParams } from 'next/navigation'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const heroTranslations = {
  en: {
    greeting: "Hi - I'm Daniel Cok",
    role: ['FULLSTACK DEVELOPER', 'SLOVAK HACKER', 'SOLOPRENEUR'],
    subtitle: 'Crafting innovative solutions to solve real-world problems',
    hireMe: 'Hire Me',
    linkedin: 'LinkedIn Profile',
  },
  sk: {
    greeting: "Ahoj - som Daniel Cok",
    role: ['FULLSTACK VÝVOJÁR', 'SLOVENSKÝ HACKER', 'SOLOPRENEUR'],
    subtitle: 'Tvorím inovatívne riešenia pre skutočné problémy',
    hireMe: 'Najmi ma',
    linkedin: 'LinkedIn profil',
  },
}

const Hero = () => {
  const searchParams = useSearchParams()
  const lang = searchParams?.get('lang') === 'sk' ? 'sk' : 'en'
  const t = heroTranslations[lang]
  const ellipseRef = useRotatingAnimation()
  const role = useRoleSwitcher({ roles: t.role })

  return (
    <section className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 pt-12 pb-10 md:grid-cols-2 lg:p-4">
        <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
          <h1>
            <span className="text-neutral mb-2 block text-3xl font-bold">{t.greeting}</span>
            <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
          </h1>

          <h2 className="text-neutral mt-3">
            {t.subtitle}
          </h2>

          <div className="mt-6 flex flex-wrap gap-6">
            <a
              href="#contact"
              aria-label="Connect with me"
              className="bg-accent min-w-32 cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E]"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'hire_me_click', {
                    event_category: 'engagement',
                    event_label: 'Hero Hire Me',
                  });
                }
              }}
            >
              {t.hireMe}
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-cok-45a3b6250/"
              aria-label="View LinkedIn Profile"
              className="text-neutral bg-secondary cursor-pointer rounded-lg px-[14px] py-[10px] text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.linkedin}
            </a>
          </div>
        </div>

        <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
          <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
            <Image
              src={HeroImage}
              fill={true}
              priority={true}
              sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
              alt="Daniel Cok - Full-Stack Web Developer, Next.js, React, Slovakia"
              className="object-contain p-7"
            />
            <Ellipse
              ref={ellipseRef}
              className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
