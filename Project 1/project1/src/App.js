import React, { useState } from 'react';
import ReactDOM from "react-dom";
import './App.css';
import Chat from "./Chat"



function App() {
  const [message1, setmessage1] = useState("")
  const [message2, setmessage2] = useState("")
  return (
    <div className="App">
      <Chat user="Amine" SendMsg={msg => setmessage1} ChatMessage={message1}></Chat>
      <Chat user="Mohamed" SendMsg={msg => setmessage2} ChatMessage={message2}></Chat>
    </div>
  );
}

export default App;
