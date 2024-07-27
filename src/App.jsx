import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState("8");
  const [allowNumber, setallowNumber] = useState("false");
  const [allCharacter,setallowCharacter] = useState("false");

  const passGenerate = ()=>{}
  return (
    <>
     <h1 className='text-4xl text-center text-black'>Password Generator</h1>
    </>
  )
}

export default App
