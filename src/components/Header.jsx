function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <h2 className="header__brand">ReactAcademy</h2>
        <nav className="nav nav--header" aria-label="Navegación principal">
          <a className="nav__link" href="#top">Inicio</a>
          <a className="nav__link" href="#our_courses">Cursos</a>
          <a className="nav__link" href="#footer">Nosotros</a>
        </nav>
      </div>
    </header>
  )
}

export default Header