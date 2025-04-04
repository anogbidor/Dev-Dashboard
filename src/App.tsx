import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProjectDetail from './pages/ProjectDetail' // we’ll create this next

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/projects/:id' element={<ProjectDetail />} />
    </Routes>
  )
}

export default App
