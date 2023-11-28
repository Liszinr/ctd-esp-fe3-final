import React, { useState } from "react";
import '../../src/main.css';

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState()
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (event) => {
      event.preventDefault()
      if(nombre.length > 5 && nombre === nombre.trim()){
        setShow(true)
        setError(false)
      } else {
        setError(true)
      }
  }


return (
  <div>
      {!show && 
          <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', alignItems: 'Center'}}>
              <label>Full name</label>
              <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>
            
              <label>Email</label>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
              <br />
              <button>Enviar</button>
          </form>
       } 
      {show && <h5 style={{color: 'Green'}}>“Gracias {nombre}, te contactaremos cuando antes vía mail”</h5>}
      {error && <h5 style={{color: 'red'}}>Por favor chequea que la información sea correcta</h5>}  
  </div>
)
};

export default Form;
