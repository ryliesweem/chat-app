import {useState, useEffect} from 'react'
import firebase from "firebase"
import "firebase/firestore"
import "firebase/storage"

let store
const coll = 'messages'

function useDB(room) {
    const [messages, setMessages] = useState([])

    function add(m) {
        setMessages(current => {
            const msgs = [m, ...current]
            msgs.sort((a,b)=> (b.date && b.date.seconds) - (a.date && a.date.seconds))
            return msgs
        })
    }
    function remove(id) {
        setMessages(current=> current.filter(m=> m.id!==id))
    }
    
    useEffect(() => {
        const collection = room ? 
            store.collection(coll).where('room','==',room) :
            store.collection(coll)
       
        collection.onSnapshot(snap=> snap.docChanges().forEach(c=> {
            const {doc, type} = c
            if (type==='added') add({...doc.data(),id:doc.id})
            if (type==='removed') remove(doc.id)
        }))
    }, [room])
    return messages
}

const db = {}
db.send = function(msg) {
    return store.collection(coll).add(msg)
}
db.delete = function(id) {
    return store.collection(coll).doc(id).delete()
}

export { db, useDB }

const firebaseConfig = {
    apiKey: "AIzaSyDB7yD0Wzk5d1OxPo0XLugAbx5Fs-Q86bw",
    authDomain: "chatter-rsweem.firebaseapp.com",
    projectId: "chatter-rsweem",
    storageBucket: "chatter-rsweem.appspot.com",
    messagingSenderId: "124960728548",
    appId: "1:124960728548:web:d0ca9e7c4d43776084d3f1"
  };

firebase.initializeApp(firebaseConfig)
store = firebase.firestore()