import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      <img className='Logo' src="/src/images/Logo.png" alt='DH-logo' />
      <Link to='/home'><h4>Home</h4></Link>
      <Link to='/contacto'><h4>Contact</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar