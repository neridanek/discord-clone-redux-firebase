import React,{useState,useEffect} from 'react'
import styles from './Chat.module.scss'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message'
import {useSelector} from 'react-redux'
import {selectChannelId,selectChannelName} from '../../features/counter/appSlice'
import {selectUser} from '../../features/counter/userSlice'
import firebase from 'firebase'
import db from '../../firebase';


const Chat = () => {
    const user = useSelector(selectUser)
    const channelId = useSelector(selectChannelId)
    const channelName = useSelector(selectChannelName)
    const [input,setInput] = useState("")
    const [messages,setMessages] = useState([])

    const sendMessage = (e) => {
        e.preventDefault()

        db.collection("channels").doc(channelId).collection("messages").add({
            message:input,
            user:user,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput("")
    }
    useEffect(()=>{
        if(channelId){
            db.collection("channels")
            .doc(channelId)
            .collection("messages")
            .orderBy("timestamp","desc")
            .onSnapshot((snapshot)=>setMessages(snapshot.docs.map((doc)=>doc.data())))
        }
    },[channelId])


    return (
        <div className={styles.chat}>
            <ChatHeader channelName={channelName}/>

            <div className={styles.chatMessages}>
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}
            </div>

            <div className={styles.chatInput}>
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input
                     value={input} 
                     disabled={!channelId} 
                     placeholder={`Message #${channelName}`} 
                     onChange={e=>setInput(e.target.value)}
                     />
                    <button 
                    disabled={!channelId} 
                    onClick={sendMessage} 
                    type="submit">Send Message</button>
                </form>
                <div className={styles.chatInputIcon}>
                    <CardGiftcardIcon className={styles.chatInputIcon1} fontSize="large"/>
                    <GifIcon className={styles.chatInputIcon2} fontSize="large"/>
                    <EmojiEmotionsIcon className={styles.chatInputIcon3} fontSize="large"/>
                </div>
            </div>
        </div>
    )
}

export default Chat
