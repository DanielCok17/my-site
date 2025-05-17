'use client'

import { Project } from '@/lib/types'
import SectionHeading from '../SectionHeading/SectionHeading'
import ProjectCard from './ProjectCard'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getTranslations } from '@/utils/i18n'

interface ProjectSectionProps {
  projects: Project[]
}

const ProjectSection: React.FC<ProjectSectionProps> = ({ projects }) => {
  const searchParams = useSearchParams()
  const lang = searchParams.get('lang') === 'sk' ? 'sk' : 'en'
  const [t, setT] = useState<any>(null)

  useEffect(() => {
    getTranslations('projects', lang).then(setT)
  }, [lang])

  if (!t) return null // Loader

  return (
    <section id="projects">
      <SectionHeading title={t.title} />

      <div className="my-8 grid grid-cols-1 gap-8 md:my-12 md:grid-cols-2">
        {projects.map((project) => {
          const title = lang === 'sk' ? project.title_sk || project.title_en || '' : project.title_en || ''
          const shortDescription = lang === 'sk' ? project.shortDescription_sk || project.shortDescription_en || '' : project.shortDescription_en || ''
          return (
            <ProjectCard
              key={project.priority}
              data={{ ...project, title, shortDescription }}
              t={t}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ProjectSection
