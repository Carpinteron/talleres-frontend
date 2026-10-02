import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Cursos from './views/Cursos'
import Home from './views/Home'
import Login from './views/Login'
import Nosotros from './views/Nosotros'
import NotFound from './views/NotFound'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Cursos />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
