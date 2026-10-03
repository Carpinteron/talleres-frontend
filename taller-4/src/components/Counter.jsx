function Counter({ value, onChange }) {
  const decrease = () => onChange((currentValue) => Math.max(0, currentValue - 1))
  const increase = () => onChange((currentValue) => currentValue + 1)

  return (
    <main className="courses view ambient-surface" aria-labelledby="counter-title">
      <p id="counter-title">¿Cuántos estudiantes van a inscribirse?</p>
      <p>Usa los botones para ajustar el número</p>
      <div>
        <button type="button" className="counter" onClick={decrease} aria-label="Reducir estudiantes">
          -
        </button>
        <span key={value} id="student-count" aria-live="polite">{value}</span>
        <button type="button" className="counter" onClick={increase} aria-label="Aumentar estudiantes">
          +
        </button>
      </div>
      <p>estudiantes inscritos</p>
    </main>
  )
}

export default Counter