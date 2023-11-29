import React from "react";
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'


const Card = ({ character, name, username, id }) => {
  
  

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/'+character.id}>
          <h3>{character.id}</h3>
          <h4>{character.name}</h4>
          <h3>{character.username}</h3>
        </Link>
        {/* {odontoList.map(odonto => <Card key={odonto.id} odonto={odonto}/>)} */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">⭐ Add fav </button>
    </div>
  );
};

export default Card;
