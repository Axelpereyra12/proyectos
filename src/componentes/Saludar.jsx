import { useEffect, useState } from 'react'

function Saludar(props) {
  const {seteo}= props 
  

  let Mostrar = (e)=>{
    seteo(e.target.value)
  };

  useEffect (()=>{
    console.log("hols")
  },)



    return (
      <> 
          <label htmlFor="inp">ingrese el nombre</label>
          <input type="text" id='inp' onChange={Mostrar}/>
      </>
    );
}

export default Saludar;