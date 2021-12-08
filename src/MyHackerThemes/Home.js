import React from 'react'
import Buttons from './Buttons'
import SearchForm from './SearchForm'
import Stories from './Stories'


import './main.css'

function Home() {
  return (
    <div>
      <h1>Hacker Themes</h1>
      <SearchForm />
      <Stories />
      <Buttons />
    </div>
  )
}

export default Home
