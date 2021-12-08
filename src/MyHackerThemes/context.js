import React, { useContext, useEffect, useReducer, createContext } from 'react';

import { reducer } from './reducer';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  isLoading: true,
  nbPages: 0,
  page: 0,
  query: '',
  hits: [],
}; // \ reducer

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchStories = async (url) => {
    dispatch({
      type: 'SET_LOADING',
    });

    let res = await fetch(url);

    let data = await res.json();

    dispatch({
      type: 'SET_STORIES',
      payload: { hits: data.hits, nbPages: data.nbPages },
    });
  };

  const removeStory = (id) => {
    dispatch({
      type: 'REMOVE_STORY',
      payload: id,
    });
  };

  const searchStory = (value) => {
    dispatch({
      type: 'HANDLE_SEARCH',
      payload: value,
    });
  };

  const handlePage = (value) => {
    dispatch({ type: 'HANDLE_PAGE', payload: value });
  };

  useEffect(() => {
    fetchStories(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [ state.page, state.query]);

  return (
    <AppContext.Provider
      value={{ ...state, removeStory, searchStory, handlePage }}
      // value={{...state}}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider };
