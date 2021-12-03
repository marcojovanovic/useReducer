import React from 'react'
import SearchForm from './SearchForm'
import Stories from './Stories'
import Buttons from './Buttons'

import './index.css'


function Home() {
  return <>
  <h2>hacker news starter</h2>
  <SearchForm />
  <Stories /> 
  <Buttons />


  </>
}

export default Home