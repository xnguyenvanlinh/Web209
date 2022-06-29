import './App.css'
import { useState } from 'react'

function App() {
  const [status, setStatus] = useState(false)
  return (
    <button className="App" onClick={() => setStatus(!status)}>
      {status ? 'You like' : 'Love it'}
    </button>
  )
}

export default App
