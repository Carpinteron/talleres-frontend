import './Tarjeta.css'

function Tarjeta({ icon, title, description, level }) {
  return (
    <div className="tarjeta">
      <div className="tarjeta__icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="tarjeta__level">
        <span className="btn">{level}</span>
      </div>
    </div>
  )
}

export default Tarjeta