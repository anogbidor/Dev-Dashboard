import { Link } from 'react-router-dom'
import { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/projects/${project.id}`}>
      <div className='bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-48 object-cover'
        />
        <div className='p-4'>
          <h3 className='text-lg font-bold'>{project.title}</h3>
          <p className='text-sm text-gray-600'>{project.description}</p>
          <div className='flex flex-wrap mt-2 gap-1'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-xs bg-gray-200 px-2 py-0.5 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}
