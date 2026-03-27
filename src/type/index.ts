export interface Job {
  role: string
  company: string
  period: string
  description: string
  tech: string[]
}

export interface SkillCategory {
  title: string
  items: string[]
}

export interface EducationItem {
  degree: string
  institution: string
  period: string
  description: string
}
