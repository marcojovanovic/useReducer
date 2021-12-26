import  React from 'react'

import {GitHubContext} from '../../../context/GithubContext'
import {AlertContext} from '../../../context/AlertContext'
import UserItem from './UserItem'



function UserResults() {


  const {loading, users} = React.useContext(GitHubContext)
  const {} = React.useContext(AlertContext) 





  /*
  useEffect(() => {
    fetchUsers()
  }, [])
  
  */
  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
            
             <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default UserResults