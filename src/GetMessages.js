import React, {useEffect, useState} from 'react';
import Card from './Card';
import AddNewMessage from './AddNewMessage';

const GetMessages = ({message , allMessages }) => {


useEffect(()=>{
fetch(`https://taslima-chat-server.glitch.me/messages`)
.then(res=> res.json())
.then(data => message(data))
}, [allMessages])

return(

   <div><Card messages= {allMessages} />

   </div> 
   
//     <div>
        
// {allMessages.map(message =>{
//     return (
    
//             <div>
//         <p>{message.from}</p>
//         <p>{message.text}</p>
//    </div> )
// })}
//     </div>
)
}

export default GetMessages