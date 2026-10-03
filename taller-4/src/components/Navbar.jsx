import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClassName = ({ isActive }) =>
    `nav__link${isActive ? ' nav__link--active' : ''}`

  return (
    <nav className="nav nav--header" aria-label="Navegación principal">
      <NavLink className={linkClassName} to="/" end>Inicio</NavLink>
      <NavLink className={linkClassName} to="/cursos">Cursos</NavLink>
      <NavLink className={linkClassName} to="/nosotros">Nosotros</NavLink>
      <NavLink className={linkClassName} to="/login">Login</NavLink>
    </nav>
  ) 
}

export default Navbar