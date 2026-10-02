import { useState } from 'react'
import Counter from '../components/Counter'

function Nosotros() {
  const [count, setCount] = useState(0)

  return <Counter value={count} onChange={setCount} />
}

export default Nosotros
