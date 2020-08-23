import React from 'react'

const Card =({messages})=>{

    return(
<div>
  
    
   {messages.map(message =>{
   return (
   <div class="card" >
  <div class="card-body"> 
   
    <h6 class="card-subtitle mb-2 ">{message.from}</h6>
    <p class="card-text">{message.text}</p> 

    <button type="button" class="btn btn-primary">Edit</button>
    <button type="button" class="btn btn-danger">Delete</button>
  </div>

</div> )
})}
   </div> )


}

export default Card
