import React from 'react'
import {CocktailContext} from './context' // import contexta 

function CocktailList() {


  const {cocktails, loading}=useCockatilContext()


  if(cocktails.length < 1){

    return (

        <h2>No cocktails</h2>

    )


  }


  return (
    <div>
      
    </div>
  )
}

export default CocktailList
