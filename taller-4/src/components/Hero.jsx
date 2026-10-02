import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="hero view" id="top">
      <div className="hero-text">
        <h1>Aprende <span className="highlight">React</span> desde cero</h1>
        <p>Domina la libreria mas popular del frontend con proyectos prácticos y reales.</p>
        <Link to="/cursos" className="btn">Ver cursos</Link>
      </div>
    </section>
  )
}

export default Hero
