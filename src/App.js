import React from 'react';
import './App.css';
import './FirebaseInit';
import Notification from './Notification'

function App() {

  return (
    <div className="App">
      <h1>HOLA!</h1>
      <p>YOU WILL GET THE SPECIAL MESSAGE!</p>
      <Notification></Notification>
    </div>
  );
}

export default App;
