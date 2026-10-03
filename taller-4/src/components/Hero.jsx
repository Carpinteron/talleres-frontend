import { Link } from 'react-router-dom'

function Hero() {
  return (
    <main className="hero view ambient-surface" id="top">
      <div className="hero__content">
        <h1>Aprende <span className="highlight">React</span> desde cero</h1>
        <p>Domina la librería más popular del frontend con proyectos prácticos y reales.</p>
        <Link to="/cursos" className="btn">Ver cursos</Link>
      </div>
    </main>
  )
}

export default Hero
