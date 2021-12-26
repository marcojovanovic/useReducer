import { createContext, useReducer } from 'react';

import githubReducer from './GitHubReducers';

export const GitHubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const GitHubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);
  /*
  const fetchUsers = async () => {


    setLoading()

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();

    dispatch({ type: 'GET_USERS', payload: data });

    function setLoading(){

  return  dispatch({type:'SET_LOADING'})

    }
  };

  */

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await response.json();

    dispatch({ type: 'GET_USERS', payload: items });

    function setLoading() {
      return dispatch({ type: 'SET_LOADING' });
    }
  };

  // get single user

  const getUser = async (login) => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/search/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

      const data = await response.json();

      dispatch({ type: 'GET_USER', payload: data });
    

    function setLoading() {
      return dispatch({ type: 'SET_LOADING' });
    }
  };

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  return (
    <GitHubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
        user: state.user,
        getUser
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export { GitHubProvider };
