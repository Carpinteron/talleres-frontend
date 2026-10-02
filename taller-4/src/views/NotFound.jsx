import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main className="page-content view">
      <h1>Página no encontrada</h1>
      <p>La dirección que buscas no existe.</p>
      <Link className="btn" to="/">Volver al inicio</Link>
    </main>
  )
}

export default NotFound