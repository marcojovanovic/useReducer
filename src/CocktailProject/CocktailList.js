import React,{useEffect, useContext} from 'react';
import Cocktail from './Cocktail';
import { CocktailContext } from './context'; // import contexta


function CocktailList() {
  const data = React.useContext(CocktailContext) 

  console.log(data)

  


  if (cocktails.length < 1) {
    return <h2>No cocktails</h2>;
  }

  return (
    <div className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          

          return <Cocktail key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default CocktailList;
