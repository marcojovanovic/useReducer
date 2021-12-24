import React from 'react'

function Card({children, classes}) {
  return (
    <div className='card'>
      <h2>{children}</h2>
    </div>
  )
}


Card.defaultProps = {

classes:'card'

}

export default Card
