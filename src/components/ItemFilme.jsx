import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const ItemFilme = ({titulo, imagem}) => {
  const [fav, setFav] = useState();

  const handleFavClick = (e) => {
    e.preventDefault();
    const newFav = !fav;
    setFav(newFav);
  }

  return(
    <Link to={`/exibetitulo/${titulo}`}>
      <div className='card-filme'>
        <div className='titulo-card'>
          {
            fav == true 
            ? <FontAwesomeIcon icon={faStarSolid} className='fa-star' onClick={handleFavClick}/>
            : <FontAwesomeIcon icon={faStarRegular} className='fa-star' onClick={handleFavClick}/>
          }
          <img src={imagem} alt={titulo}/>
        </div>
        <h3 className='titulo-font'>{titulo}</h3>
      </div>
    </Link>
  )
}


export default ItemFilme;