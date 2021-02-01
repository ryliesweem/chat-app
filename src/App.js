import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';

function App() {
  const [messages,setMessages] = useState([{text:'hello'}])
  return <div className="App">

    <header className="header">
      <i class="far fa-comments logo"></i> Chatter
    </header>

    <div>
      <div className="message-row">
        <div className="message">
          {messages[0].text}
        </div>
      </div>
      <div className="message-row">
        <div className="message">
          test message!
        </div>
      </div>
      
      <TextInput 
        send={(t)=> setMessages([{text:t}])}
      />

    </div>

  </div>
}
export default App;