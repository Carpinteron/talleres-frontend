import { NavLink } from 'react-router-dom'
import Navbar from './Navbar'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <NavLink className="header__brand" to="/">ReactAcademy</NavLink>
        <Navbar />
      </div>
    </header>
  )
}

export default Header