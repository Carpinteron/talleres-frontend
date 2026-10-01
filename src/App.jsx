import { useState } from 'react'
import Counter from './components/Counter'
import CourseList from './components/CourseList'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import './index.css'

const cursos = [
  {
    icon:'📘',
    title: 'React Básico',
    description: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    level: 'Principiante',
  },
  {
    icon:'📗',
    title: 'React Hooks',
    description: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    level: 'Intermedio',
  },
  {
    icon:'📙',
    title: 'Estado Global',
    description: 'Gestiona el estado con Context API y aprende cuando usarlo.',
    level: 'Intermedio',
  },
  {
    icon:'📕',
    title: 'React Avanzado',
    description: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    level: 'Avanzado',
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <CourseList courses={cursos} />
      <Counter value={count} onChange={setCount} />
      <Footer />
    </>
  )
}

export default App
