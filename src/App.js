import React, { useState } from 'react';
import './App.css';
import GetMessages from './GetMessages';
import AddNewMessage from './AddNewMessage';




function App() {

  return (
    <div className="app">
      <GetMessages />
      <AddNewMessage />
    </div>
  );
}

export default App;
