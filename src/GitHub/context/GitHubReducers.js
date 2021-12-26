const githubReducer = (state, action) => {

  
  if (action.type === 'GET_USERS') {
    return {
      ...state,
      users: action.payload,
      loading: false,
    };
  }

  if (action.type === 'SET_LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'CLEAR_USERS') {
    return { ...state, users: [] };
  }

  if (action.type === 'GET_USER') {
    return { ...state, user: action.payload, loading: false };
  }

  throw new Error('no matching action type');
};

export default githubReducer;
