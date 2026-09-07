import './Tarjeta.css'

function Tarjeta({ icon, title, description, level }) {
  return (
    <div className="tarjeta">
      <div className="tarjeta__icon">{icon}</div>

      <h2>{title}</h2>

      <p>{description}</p>

      <div className="tarjeta__level">
        <button className="btn">{level}</button>
      </div>
    </div>
  )
}

export default Tarjeta