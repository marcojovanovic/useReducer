import React, { createContext, useState } from 'react'
 
 
export const CocktailContext = createContext() // izvoz za komponente
 
const CocktailProvider = ({children}) => {

  const url =` www.thecocktaildb.com/api/json/v1/1/search.php?s=`

  const [loading, setLoading]=useState(false) 

  const [searchTerm, setSearchTerm]=useState('a')

  const [cocktails, setCocktails]=useState([])


  const fetchDrinks = async()=>{

    setLoading(true)

    try{

      const res = await fetch(`${url}${searchTerm}`)

      const data = await res.json() 

      console.log(data)

      const {drinks} = data

      if(drinks){


      } else {

        setCocktails(false)
      }


    } catch(err){

      console.log(err)
    }


  }

   useEffect(() => {
     
    fetchDrinks()

    
   }, [searchTerm])

  
  
  return (
    <CocktailContext.Provider
      value={{loading, setSearchTerm, cocktails}}
    >
      {children}
    </CocktailContext.Provider>
  )
}
 
export {CocktailProvider} // izvoz za index.js