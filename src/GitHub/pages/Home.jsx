import React from 'react'
import Alert from '../components/layout/Alert'
import UserResults from '../components/layout/users/UserResults'
import UserSearch from '../components/layout/users/UserSearch'

function Home() {


  // https://api.github.com/users/bradtraversy 
  // https://api.github.com/search/users?q=brad


  

  return (<div>
        <Alert />
     <UserSearch /> 
    <UserResults />

  </div>)
}

export default Home
