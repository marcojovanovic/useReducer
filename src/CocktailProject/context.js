import React, { createContext, useState, useEffect, useCallback } from 'react';

export const CocktailContext = createContext(); // izvoz za komponente

const CocktailProvider = ({ children }) => {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('a');

  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();

      const { drinks } = data;

      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });

        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <CocktailContext.Provider value={{ loading, cocktails, setSearchTerm }}>
      {children}
    </CocktailContext.Provider>
  );
};

export { CocktailProvider }; // izvoz za index.js
