import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isDisabled = !email.trim() || !password.trim() || isSubmitted

  function handleSubmit(event) {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="login-page view">
      <section className="login-card" aria-labelledby="login-title">
        <div className="login-card__header">
          <span className="login-kicker">React  Academy</span>
          <h1 id="login-title">Iniciar sesión</h1>
          <p className="login-microcopy">Esta pantalla es solo una demostración visual. No valida usuarios ni conecta con un backend.</p>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-field">
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={isSubmitted}
              required
            />
          </div>
          <div className="login-field">
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              disabled={isSubmitted}
              required
            />
          </div>
          <button
            className={`btn login-submit-button${isSubmitted ? ' login-submit-button--submitted' : ''}`}
            type="submit"
            disabled={isDisabled}
          >
            {isSubmitted ? <><span aria-hidden="true">✓</span> Enviado</> : 'Ingresar'}
          </button>
          {isSubmitted && (
            <p className="login-status" role="status">
              Formulario enviado. Esta demo no procesa datos reales.
            </p>
          )}
        </form>
      </section>
    </main>
  )
}

export default Login