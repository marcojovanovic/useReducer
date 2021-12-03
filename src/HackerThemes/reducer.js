import React from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  if (action.type === 'SET_LOADING') {
    return { ...state, isLoading: true };
  }

  if (action.type === 'SET_STORIES') {
    return {
      ...state,
      isLoading: false,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
    };
  }

  if (action.type === 'REMOVE_STORY') {
    return {
      ...state,
      hits: state.hits.filter((item) => item.objectID !== action.payload),
    };
  }

  if (action.type === 'HANDLE_SEARCH') {
    return { ...state, query: action.payload, page: 0 };
  }

  if (action.type === 'HANDLE_PAGE') {
    if (action.payload === 'inc') {
      let nextPage = state.page + 1;
    }

    if (action.payload === 'dec') {
      let prevPage = state.page - 1;
    }
  }

  throw new Error('no matching action type');
};

export default reducer;
