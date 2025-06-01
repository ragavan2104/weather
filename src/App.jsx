import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    < >
    <div className='bg-transparent w-fit m-auto'>
     <Api  />
     </div>
    </>
  )
}

export default App
