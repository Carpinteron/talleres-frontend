import './Tarjeta.css'

function Tarjeta({ icon, title, description, level }) {
  return (
    <article className="tarjeta">
      <div className="tarjeta__icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="tarjeta__level">
        <span className="tarjeta__badge">{level}</span>
      </div>
    </article>
  )
}

export default Tarjeta