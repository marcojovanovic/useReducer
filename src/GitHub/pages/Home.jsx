import React,{useEffect, useState} from 'react'
import UserItem from '../components/layout/users/UserItem'
import UserResults from '../components/layout/users/UserResults'

function Home() {


  // https://api.github.com/users/bradtraversy 
  // https://api.github.com/search/users?q=brad


  

  return (<div>

    <UserResults />

  </div>)
}

export default Home
