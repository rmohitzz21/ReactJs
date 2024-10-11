import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <h1 className=' text-white rounded-xl bg-green-600 p-5'>Tailwind Css</h1>
     <Card username='Mohit' btnText='Chek in'/>
     <Card username='Zula'/>
    </>
  )
}

export default App
