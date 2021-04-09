import React,{useState,useEffect} from 'react'
import styles from './Sidebar.module.scss'
import SidebarChannel from './SidebarChannel'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CallIcon from '@material-ui/icons/Call';
import {Avatar} from '@material-ui/core'
import MicNoneTwoToneIcon from '@material-ui/icons/MicNoneTwoTone';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/counter/userSlice'
import db from '../../firebase';
import {auth} from '../../firebase';
 

const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels,setChannels] = useState([])
    
    useEffect(()=>{
        db.collection('channels').onSnapshot(snapshot =>
            setChannels(snapshot.docs.map(doc=>({
                id:doc.id,
                channel:doc.data(),
            }))))  // snap.docs wszystko w drugiej kolumnie database i docdata wszystko w trzeciej
    },[])

        const handleAddChannel = () =>{
            const channelName = prompt("Enter a new channel name")
            if (channelName){
                db.collection('channels').add({
                    channelName:channelName,
                })
            }
        }
    return (
        <div className={styles.sidebar}>
            <div  className={styles.sidebarTop}>
                <h3>Clever<br/>Programmer</h3>
                <ExpandMoreIcon/>
            </div>
            <div className={styles.sidebarHeader}>
            <div className={styles.sidebarHeaderChannel}>
                <ExpandMoreIcon/>
                <h4>Text Channels </h4>
                </div>
                <AddIcon onClick={handleAddChannel}/>
            </div>


            <div className={styles.sidebarChannels}>
                {channels.map(({id,channel}) =>(  //destrukturyzacja z jednego channela z database
                    <SidebarChannel key={id} id={id} channelName={channel.channelName}/>
                ))}
            </div>
            <div className={styles.sidebarVoice}>
                <SignalCellularAltIcon className={styles.sidebarVoiceIcon}/>
                <div className={styles.sidebarVoiceInfo}>
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>
                <div className={styles.sidebarVoiceIcons}>
                <InfoOutlinedIcon className={styles.sidebarVoiceIcons1} />
                <CallIcon className={styles.sidebarVoiceIcons2}/>
                </div>
                
            </div>
            <div className={styles.sidebarProfile}>
                    <Avatar onClick={()=>auth.signOut()} src={user.photo}/>
                <div className={styles.sidebarProfileInfo}>
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0,5)}</p>
                </div>
                <div className={styles.sidebarProfileIcons}>
                    <MicNoneTwoToneIcon className={styles.sidebarProfileIcons1} />
                    <HeadsetIcon className={styles.sidebarProfileIcons2}/>
                    <SettingsIcon className={styles.sidebarProfileIcons3}/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
