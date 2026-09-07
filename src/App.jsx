import { useState } from 'react'
import Tarjeta from './components/Tarjeta'
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
             <header className="header">
        <div className="header__container">
        <h2 className="header__brand">ReactAcademy</h2>
        <nav className="nav nav--header" aria-label="Navegación principal">
          <a className="nav__link" href="index.html">Inicio</a>
          <a className="nav__link" href="#our_courses">Cursos</a>
          <a className="nav__link" href="index.html">Nosotros</a> 
        </nav>
        </div>
    </header>
    <section className="hero">
        <div className="hero-text">
            <h1>Aprende <span className="highlight">React</span> desde cero</h1>
            <p>Domina la libreria mas popular del frontend con proyectos prácticos y reales.</p>
            <a href="#our_courses" className="btn">Ver cursos</a>
        </div>
    </section>
    <main id="our_courses">
        <h2>Nuestros Cursos</h2>
        <p><strong>Elige el camino que mejor se adapte a ti</strong></p>
        
        {cursos.map((curso) => (
          <Tarjeta key={curso.title} {...curso} />
        ))}
        
    </main>
    <section className="courses">
        <p>Cuantos estudiantes van a inscribirse?</p>
        <p>Usa los botones para ajustar el número</p>
       <div>
        <button type="button"
          className="counter"
          onClick={() => setCount((count) => count - 1)}
        >
         -
        </button>
        <span id="student-count">{count}</span>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
         +
        </button>
      </div>
      <p>estudiantes inscritos</p>
    </section>
    <footer className="footer">
        <p>&copy; 2026 ReactAcademy. Taller 03 -- React Fundamentos.</p>
    </footer>
    </>
  )
}

export default App
