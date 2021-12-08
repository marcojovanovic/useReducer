import React from 'react'

import { AppContext } from './context';

function SearchForm() {

  const { searchStory, query } = React.useContext(AppContext);



  return (
    <div>
      <form className='search-form'>

       <input type='text' 
        className='form-input'
        value={query}
        onChange={(e)=>searchStory(e.target.value)}
      
      />
        </form>


     
    </div>
  )
}

export default SearchForm
