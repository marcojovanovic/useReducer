import React from 'react'

import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>

      <div className='nav-center'>

        <Link to='/'>
          Coctail DB
        </Link>
      </div>
      
    </nav>
  )
}

export default Navbar
