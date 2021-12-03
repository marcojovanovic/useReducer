import React, {useEffect} from 'react'



function Alert({msg, show, type, removeAlert, list}) {

  return (
    <div>
       <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  )
}

export default Alert
