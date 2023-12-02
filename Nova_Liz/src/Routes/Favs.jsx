import React from "react";
import Card from "../Components/Card";
import { useCharContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const favs = localStorage.getItem('favs')
  const parsedFavs = JSON.parse(favs)
  const {state} = useCharContext()

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {parsedFavs.map(fav => <Card icon={'❌'} character={fav} key={fav.id}/>)}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
