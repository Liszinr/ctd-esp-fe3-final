import React from "react";
import { Link } from 'react-router-dom'
import { useCharContext } from '../Context/Context'

const Card = ({ character }) => {
  
  
    // Aqui iria la logica para agregar la Card en el localStorage
    const {state, dispatch} = useCharContext()

    const findFav = state.favs.find(fav => fav.id == character.id)

    const addFav = () => {
      if(findFav){
        alert('Ya fue agregado a favoritos')
      } else {
        dispatch({type: 'ADD_FAV', payload: character})
        localStorage.setItem('favs', JSON.stringify(state.favs))
      }
    }
    

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/'+character.id}>
          <h3>{character.id}</h3>
          <h4>{character.name}</h4>
          <h3>{character.username}</h3>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">{findFav ? '💙':'🩶'}</button>
    </div>
  );
  
  };

export default Card;
