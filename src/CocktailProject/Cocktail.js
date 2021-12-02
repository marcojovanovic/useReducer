import React from 'react'

import {CocktailContext} from './context' // import contexta 

import {Link, useParams} from 'react-router-dom'

function Cocktail({image, name, id, info, glass}) {

 

  


  const data = React.useContext(CocktailContext)

  return (
    <div className='cocktail'>

      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      
    <div className='cocktail-footer'>
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>

      <Link to={`/cocktail/${id}`} className='btn btn-details btn-primary'>details</Link>
    </div>


    </div>
  )
}

export default Cocktail
