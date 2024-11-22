import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Approutes from './routes/AppRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Approutes /> 
    </div>
  )
}

export default App
