import React from 'react'

import {Link} from 'react-router-dom'

import {FaGithub} from 'react-icons/fa'


function Navbar({title}) {
  return (
    <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content'>
    
      <div className='container mx-auto'>
        <div className='flex px-2 mx-2'>
          <FaGithub className='text-3xl' />
          <Link to='/' className='text-lg font-bold ml-5 aline-middle'>
            {title}
          </Link>
        </div>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-sm-rounded-btn'>
              Home
            </Link>

            <Link to='/about' className='btn btn-ghost btn-sm-rounded-btn'>
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.defaultProps = {

  title:'Github Finder'


}

export default Navbar
