

function Message(props){
    return <div className="message-row">
    <div className="message">
      <div className="message-name">{props.name}</div>
      <div className="message-text">{props.text}</div>
    </div>
  </div>
}
export default Message