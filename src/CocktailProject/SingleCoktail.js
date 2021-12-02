import React from 'react'
import {Link, useParams} from 'react-router-dom'
function SingleCoktail() {

  const {id} = useParams() 
  return (
    <div>
      <h2>{id}</h2>
    </div>
  )
}

export default SingleCoktail
