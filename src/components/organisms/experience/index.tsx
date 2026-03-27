import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import SectionHeading from '../../atoms/section-heading'
import JobEntry from '../../molecules/job-entry'
import Motion from '../../templates/motion'

export default function Experience(): ReactNode {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true })

  return (
    <section className="scroll-mt-24" id="experience">
      <Motion>
        <SectionHeading index="01" title={t('experience.title')} />

        <div className="space-y-12">
          {jobs.map((job) => (
            <JobEntry key={`${job.company}-${job.period}-${job.role}`} job={job} />
          ))}
        </div>
      </Motion>
    </section>
  )
}
