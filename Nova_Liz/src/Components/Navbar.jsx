import React from 'react'
import { Link } from 'react-router-dom'
import {useCharContext} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {state, dispatch} = useCharContext()

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' }); // Enviar acción al contexto para cambiar el tema
  };

  return (
    <nav className='navBar'>
      <img className='Logo' src="/src/images/Logo.png" alt='DH-logo' />
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/home'><h4>Home</h4></Link>
      <Link to='/contacto'><h4>Contact</h4></Link>
      <Link to='/favs'><h4>Favs</h4></Link>
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button className='themeButton' onClick={toggleTheme}>Change theme{state ? '🌞' : '🌗'}</button>
    </nav>
  )
}

export default Navbar