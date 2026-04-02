import { type ReactNode } from 'react'

import { TechTag } from '@/components/atoms/tech-tag'

import { type Job } from '@/type/Job'

interface Props {
  job: Job
}

export function Job({ job }: Props): ReactNode {
  return (
    <div className="group relative grid md:grid-cols-[1fr_3fr] gap-4 md:gap-8 items-baseline">
      <div className="text-sm font-mono text-[#a1a1aa] mt-1">{job.period}</div>
      <div>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
          <span>{job.role} · </span><span className='text-emerald-200'>{job.company}</span>
        </h3>
        <p className="mt-4 text-[#a1a1aa] leading-relaxed">{job.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {job.tech.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
