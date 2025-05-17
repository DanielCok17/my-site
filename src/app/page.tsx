import { skillList } from '@/appData'
import ContactSection from '@/components/Contact/ContactSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import TestimonialSection from '@/components/Testimonials/TestimonialSection'
import { getAllProjects, getAllTestimonials } from '@/services'
import CareerTimeline from '@/components/CareerTimeline'
import { Suspense } from 'react'

export default async function Home() {
  const projects = await getAllProjects()
  const testimonials = await getAllTestimonials()

  return (
    <main>
      <Suspense fallback={null}>
        <Hero />
      </Suspense>
      <Skills skills={skillList} />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <Suspense fallback={null}>
          <ProjectSection projects={projects} />
        </Suspense>
        <Suspense fallback={null}>
          <ServiceSection />
        </Suspense>
        <Suspense fallback={null}>
          <CareerTimeline />
        </Suspense>
        <Suspense fallback={null}>
          <TestimonialSection testimonials={testimonials} />
        </Suspense>
        <Suspense fallback={null}>
          <ContactSection />
        </Suspense>
      </div>
    </main>
  )
}
