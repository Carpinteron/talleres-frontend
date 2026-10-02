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
    <main className="page-content view">
      <h1>Iniciar sesión</h1>
      <p className="login-microcopy">Esta pantalla es solo una demostración visual. No valida usuarios ni conecta con un backend.</p>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="btn" type="submit" disabled={isDisabled}>Ingresar</button>
        {isSubmitted && <p className="login-status" role="status">Formulario enviado. Esta demo no procesa datos reales.</p>}
      </form>
    </main>
  )
}

export default Login