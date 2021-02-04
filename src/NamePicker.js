import {useState} from 'react'

function NamePicker() {
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState('')

    if (showInput) {
        return <div className="name-picker">
            <input value={username}
                onChange={e=> setUsername(e.target.value)}
            />
            <button onClick={()=>setShowInput(false)}>
                <i class="fas fa-check"></i>
            </button>
        </div>
    }

    return <div className="name-picker">
        <div className="username"><span className="light">username: </span>{username}</div>
        <button onClick={()=>setShowInput(true)}>
            <i class="fas fa-edit"></i>
        </button>
    </div>
}

export default NamePicker