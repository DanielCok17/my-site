'use client'

import { Project } from '@/lib/types'
import Image from 'next/image'
import { Earning, GithubIcon, Likes, PreviewIcon, Star, Timer } from '../../utils/icons'

const IconText: React.FC<{ icon: string; text: string }> = ({ icon, text }) => (
  <li className="flex gap-2">
    <Image src={icon} alt={text} className="size-[18px] md:size-5" />
    <span className="text-neutral text-sm">{text}</span>
  </li>
)

interface ProjectCardProps {
  data: Project
  t?: any // translations
}

const ProjectCard: React.FC<ProjectCardProps> = ({ data, t }) => {
  const {
    title,
    shortDescription,
    visitors,
    earned,
    ratings,
    githubStars,
    numberOfSales,
    livePreview,
    githubLink,
    siteAge,
    type,
    cover,
  } = data

  // Map type and status to translation if possible
  let typeLabel = type
  if (t) {
    if (type?.toLowerCase().includes('main')) typeLabel = t.mainProject
    else if (type?.toLowerCase().includes('client')) typeLabel = t.clientWork
    else if (type?.toLowerCase().includes('free')) typeLabel = t.free
    else if (type?.toLowerCase().includes('new')) typeLabel = t.new
    else if (type?.toLowerCase().includes('very popular')) typeLabel = t.veryPopular || type
    else if (type?.toLowerCase().includes('ai predictions')) typeLabel = t.aiPredictions || type
    else if (type?.toLowerCase().includes('ai automation')) typeLabel = t.aiAutomation || type
    else if (type?.toLowerCase().includes('live')) typeLabel = t.live || type
  }

  // Map status labels (like 'Live') in the card body
  const liveLabel = t?.live || 'Live'

  return (
    <div className="bg-secondary border-border flex flex-col justify-between rounded-[14px] border p-5">
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1">
          <div className="flex flex-col flex-wrap gap-3 sm:flex-row sm:items-center">
            <h3 className="text-secondary-content text-lg font-medium md:font-semibold">{title}</h3>
            {typeLabel && (
              <span
                className={`h-7 w-fit rounded-md bg-[#FFFFFF1A] p-1 text-sm ${typeLabel === t?.new ? 'animate-blink text-tag' : 'text-accent'} backdrop-blur-[80px]`}>
                {typeLabel}
              </span>
            )}
          </div>
          <ul className="mt-3 flex flex-col flex-wrap gap-2 sm:flex-row sm:gap-4">
            {(visitors || numberOfSales) && (
              <IconText text={(visitors || numberOfSales)?.toString() || ''} icon={Likes} />
            )}
            {siteAge && <IconText text={siteAge} icon={Timer} />}
            {earned && <IconText text={earned} icon={Earning} />}
            {(ratings || githubStars) && (
              <IconText text={(ratings || githubStars)?.toString() || ''} icon={Star} />
            )}
            {livePreview && <IconText text={liveLabel} icon={Timer} />}
          </ul>
        </div>
        <figure className="flex justify-end overflow-hidden">
          <img
            src={cover}
            width={150}
            height={80}
            alt={`Daniel Cok Project: ${title} - ${shortDescription}`}
            className="h-[80px] w-[150px] rounded-md object-cover shadow-[0px_1.66px_3.74px_-1.25px_#18274B1F]"
          />
        </figure>
      </div>

      <div>
        <div className="bg-primary text-primary-content my-4 h-[100px] overflow-scroll rounded-2xl px-4 py-2">
          <p className="text-[14px] font-normal md:text-base">{shortDescription}</p>
        </div>
        <div className="flex gap-5">
          {livePreview && (
            <a
              href={livePreview}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'project_live_preview_click', {
                    event_category: 'engagement',
                    event_label: `Project: ${title}`,
                  });
                }
              }}
            >
              <PreviewIcon className="h-auto w-[18px] md:w-5" />
              <span>{t?.livePreview || 'Live Preview'}</span>
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              className="text-accent flex gap-2 text-sm underline underline-offset-[3px] transition-all duration-75 ease-linear hover:scale-105 md:text-base"
              target="_blank"
              onClick={() => {
                if (typeof window !== 'undefined' && window.gtag) {
                  window.gtag('event', 'project_github_link_click', {
                    event_category: 'engagement',
                    event_label: `Project: ${title}`,
                  });
                }
              }}
            >
              <GithubIcon className="w-[18px] md:w-5" />
              <span>{t?.githubLink || 'Github Link'}</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
