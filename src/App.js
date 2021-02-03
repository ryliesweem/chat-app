import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';

function App() {
  const [messages,setMessages] = useState([])
  return <div className="App">

    <header className="header">
      <i class="far fa-comments logo"></i><h1>Chatter</h1>
      <NamePicker />
    </header>

    <div className="messages">

      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
      

    </div>

    <TextInput 
        send={(t)=> setMessages(
          [{text:t}, ...messages]
          )}
      />

  </div>
}
export default App;