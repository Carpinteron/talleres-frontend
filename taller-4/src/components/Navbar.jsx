import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkClassName = ({ isActive }) =>
    `nav__link${isActive ? ' nav__link--active' : ''}`

  return (
    <header className="header">
      <div className="header__container">
        <NavLink className="header__brand" to="/">ReactAcademy</NavLink>
        <nav className="nav nav--header" aria-label="Navegación principal">
          <NavLink className={linkClassName} to="/" end>Inicio</NavLink>
          <NavLink className={linkClassName} to="/cursos">Cursos</NavLink>
          <NavLink className={linkClassName} to="/nosotros">Nosotros</NavLink>
          <NavLink className={linkClassName} to="/login">Login</NavLink>
        </nav>
      </div>
    </header>
  ) 
}

export default Navbar