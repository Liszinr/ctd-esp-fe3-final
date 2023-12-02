import React from 'react'
import Card from '../Components/Card'
import {useCharContext} from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const {state} = useCharContext()
  return (
    <main className="" >
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {/* {odontoList.list.map(characters => <Card characters={characters}/>)}
        <Card {...characters}/> */}
        {state.list.map(character => <Card icon={'⭐'} character={character} key={character.id}/>)}
      </div>
    </main>
  )
}

export default Home