import React, { useState } from 'react';
import './App.css';
import './FirebaseInit';
import { onMessageListener } from './FirebaseInit';
import Notification from './Notification'

function App() {
  const [show, setShow] = useState(false)
  const [notification, setNotification]=useState({title:"",body:""});

  onMessageListener()
  .then((payload) => {
    setShow(true);
    setNotification({
      title: payload.notification.title,
      body: payload.notification.body,
    })
    console.log(payload)
  })
  .catch((err) => console.log("fail:", err))

  return (
    <div className="App">
      <h1>HOLA!</h1>
      <p>YOU WILL GET THE SPECIAL MESSAGE!</p>
      <Notification></Notification>
    </div>
  );
}

export default App;
