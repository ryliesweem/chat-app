import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';

function App() {
  const [messages,setMessages] = useState([])
  const [name,saveName] = useState('')

  return <div className="App">

    <header className="header">
      <i class="far fa-comments logo"></i><h1>Chatter</h1>
      <NamePicker saveName={name=> saveName(name)} />
    </header>

    <div className="messages">
      {name}
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