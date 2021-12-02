import React, { useEffect } from 'react';

import { CocktailContext } from './context';

function SearchForm() {
  const { setSearchTerm } = React.useContext(CocktailContext);

  const searchCocktail = (e) => {
    setSearchTerm(searchValue.current.value);
  };

  const searchValue = React.useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <div className="section search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
