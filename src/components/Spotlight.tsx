import { projects } from '../data/projects'

export default function Spotlight() {
  const latest = [...projects].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )[0]

  return (
    <div className='mb-12'>
      <h2 className='text-2xl font-bold mb-4'>⭐ Latest Project</h2>
      <div className='p-4 border rounded-xl flex gap-6'>
        <img
          src={latest.image}
          alt={latest.title}
          className='w-40 h-40 object-cover rounded-lg'
        />
        <div>
          <h3 className='text-xl font-semibold'>{latest.title}</h3>
          <p className='text-gray-600'>{latest.description}</p>
          <div className='mt-2 flex gap-2'>
            <a href={latest.demoLink} className='text-blue-600' target='_blank'>
              Demo
            </a>
            <a href={latest.codeLink} className='text-gray-600' target='_blank'>
              Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
