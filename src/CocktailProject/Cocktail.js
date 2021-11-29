import React from 'react'

import {CocktailContext} from './context' // import contexta 

function Cocktail({image, name, id, info, glass}) {


  const data = React.useContext(CocktailContext)


  console.log(data)

  return (
    <div className='cocktail'>

      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      
    <div className='cocktail-footer'>
          <h3>{name}</h3>
          <h4>{glass}</h4>



    </div>


    </div>
  )
}

export default Cocktail
