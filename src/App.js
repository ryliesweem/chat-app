import { useState } from 'react';
import './App.css';
import TextInput from './TextInput';
import Message from './Message';
import NamePicker from './NamePicker';
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {
  const room = props.match.params.room || 'home'
  console.log("CHAT ROOM", room)

  const messages = useDB(room)
  const [username,setUsername] = useState(
    localStorage.getItem('username') || ''
  )

  return <div className="App">

    <header className="header">
      <i class="far fa-comments logo"></i><h1>Chatter</h1>
      <NamePicker saveName={setUsername} />
    </header>

    <div className="messages">
      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe} />
      })}

    </div>

    <TextInput 
      send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
    />

  </div>
}
export default Wrap;