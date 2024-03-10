import { useState } from 'react'
import './App.css'
import Saludar from './componentes/Saludar'

function App() {
  const [Nombre, SetNombre] = useState("")

  return (
    <>
    <h1>hola {Nombre}</h1>
    <Saludar seteo={SetNombre} ></Saludar> 
    </>
  )
}

export default App
