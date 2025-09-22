import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import HomePage from './components/Home/HomePage'
import Publications from './components/Publications/Publications'
import People from './components/People/People'
import Research from './components/Research/Research'
import Projects from './components/Projects/Projects'
import Events from './components/Events/Events'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path='/publications' element={<Publications />} />
        <Route path='/people' element={<People />} />
        <Route path='/research' element={<Research />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/events' element={<Events />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
