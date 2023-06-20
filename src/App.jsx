import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Data from './Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h2 className="text-[30px] p-3">Registration form</h2>
      <Data/>
    </div>
  )
}

export default App
