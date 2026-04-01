import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import { SectionHeading } from '@/components/atoms/section-heading'
import { Motion } from '@/components/templates/motion'

import { Job } from './components/job'

export function Experience(): ReactNode {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="experience">
      <Motion>
        <SectionHeading index="01" title={t('experience.title')} />

        <div className="space-y-12">
          {jobs.map((job) => (
            <Job key={`${job.company}-${job.period}-${job.role}`} job={job} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
