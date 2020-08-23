import React, {useState} from 'react';
import './App.css';
import GetMessages from './GetMessages';
import AddNewMessage from './AddNewMessage';




function App() {
  const [allMessages, setAllMessages] = useState([])
  const handleMessages =(message)=>{
    setAllMessages(message)
  }
  return (
    <div className="app">
   <GetMessages message = {handleMessages} allMessages = {allMessages}/> 
   <AddNewMessage message = {handleMessages}/>
 </div>
  );
}

export default App;
