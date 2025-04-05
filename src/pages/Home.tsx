import ProjectGrid from '../components/ProjectGrid'
import Spotlight from '../components/Spotlight'

export default function Home() {
  return (
    <main className='max-w-7xl mx-auto px-4 py-10'>
      <h1 className='text-6xl font-semibold mb-6 bg-'>Projects</h1>
      <Spotlight />
      <ProjectGrid />
    </main>
  )
}
