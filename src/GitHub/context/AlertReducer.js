const alertReducer = (state, action) =>{


  if(action.type === 'SET_ALERT'){
 
      
     return action.payload
 
  }

  if(action.type === 'REMOVE_ALERT'){
 
      
     return null
 
  }
 
  
 
  
  throw new Error('no matching action type');
 }
 
 
 export default alertReducer