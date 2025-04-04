import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <div className='flex flex-col items-center justify-center min-h-screen text-gray-600'>
        <h2 className='text-2xl font-semibold'>Project Not Found</h2>
        <Link to='/' className='text-blue-600 mt-4 hover:underline'>
          Go back to Home
        </Link>
      </div>
    )
  }

  return (
    <div className='max-w-5xl mx-auto p-6'>
      <Link
        to='/'
        className='text-blue-600 hover:underline text-sm mb-4 inline-block'
      >
        ← Back to Dashboard
      </Link>

      <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
        <img
          src={project.image}
          alt={project.title}
          className='w-full h-64 object-cover'
        />
        <div className='p-6'>
          <h1 className='text-3xl font-bold mb-2'>{project.title}</h1>
          <p className='text-gray-700 text-base mb-4'>{project.description}</p>

          <div className='flex flex-wrap gap-2 mb-6'>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className='text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='flex gap-4'>
            <a
              href={project.demoLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition'
            >
              Live Demo
            </a>
            <a
              href={project.codeLink}
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg text-sm transition'
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
