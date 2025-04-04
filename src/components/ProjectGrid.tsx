import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import FilterBar from './FilterBar'

export default function ProjectGrid() {
  const [activeTag, setActiveTag] = useState('All')
  const uniqueTags = [...new Set(projects.flatMap((p) => p.tags))]

  const filtered =
    activeTag === 'All'
      ? projects
      : projects.filter((p) => p.tags.includes(activeTag))

  return (
    <div>
      <FilterBar
        tags={uniqueTags}
        activeTag={activeTag}
        setActiveTag={setActiveTag}
      />
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}
