
import './todo.css'

import React, { createContext, useState } from 'react'
 
 
export const GitHubContext = createContext() // izvoz za komponente
 
const GitHubProvider = ({children}) => {
  
  
  return (
    <GitHubContext.Provider
      value={'hello'}
    >
      {children}
    </GitHubContext.Provider>
  )
}
 
export {GitHubProvider}