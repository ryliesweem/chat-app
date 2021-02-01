import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';

function App() {
  const [messages,setMessages] = useState([{text:'hello'}])
  return <div className="App">

    <header className="header">
      <i class="far fa-comments logo"></i> Chatter
    </header>

    <div className="messages">

        {messages.map((m,i)=> {
          return <div key={i} className="message-row">
            <div className="message">
              {m.text}
            </div>
          </div>
        })}
      
      <TextInput 
        send={(t)=> setMessages(
          [...messages, {text:t}]
          )}
      />

    </div>

  </div>
}
export default App;