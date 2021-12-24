import React from 'react'

function Button({children, version}) {
  return (
    <button className={`btn btn-${version}`}>
      {children}
    </button>
  )
}



Button.defaultProps = {

  version:'primary'
  
  }
  

export default Button
