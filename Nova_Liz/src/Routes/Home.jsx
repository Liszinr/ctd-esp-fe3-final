import React from 'react'
import Card from '../Components/Card'
import {userCharContext} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = userCharContext()
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {/* {odontoList.list.map(characters => <Card characters={characters}/>)}
        <Card {...characters}/> */}
        {state.list.map((character) => <Card character={character} key={character.id}/>)}
      </div>
    </main>
  )
}

export default Home